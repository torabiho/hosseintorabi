import express from "express";
import expressWs from 'express-ws';
import photos from "./photos";
const router = express.Router();
const wss = expressWs(router);
const clients = new Set();

router.get("/", (req, res) => {
	console.log("hossein, getting photos");
	res.status(200).json({ photos });
});

router.post("/website/photos/:id", (req, res) => {
	const photo = photos.find((p) => {
		return p.id === req.params.id;
	});
	if (!photo) {
		res.status(404).json({ error: "photo not found" });
		return;
	}
	if (photo.website) {
		res.status(400).json({ error: "photo already sent to website" });
		return;
	}

	photo.website = "PENDING_APPROVAL";
	// Send back an approval randomly between 3 and 7 seconds.
	const timeout = (3 + Math.floor(Math.random() * 4)) * 1000;
	setTimeout(() => {
		photo.website = "WEBSITE_APPROVED";
		clients.forEach((ws) => {
			ws.send(JSON.stringify({ event: "WEBSITE_APPROVED", photo }));
		});
	}, timeout);
	res.status(200).json({ photo });
});

router.ws('/ws', function(ws, req) {
	console.log("hossein, first");
  clients.add(ws);
	console.log("WebSocket connection established");
	console.log("hossein, second");
	ws.on("close", () => {
		console.log("hossein, third");
		clients.delete(ws);
		console.log("WebSocket connection closed");
	});
});


module.exports = router;
