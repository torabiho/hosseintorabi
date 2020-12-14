import nodeMailer from "nodemailer";
import { emailInfo } from "../../../config";

exports.send_email = function (req, res) {
    let transporter = nodeMailer.createTransport({
        host: emailInfo.host,
        port: emailInfo.port,
        auth: {
            user: emailInfo.senderUser,
            pass: emailInfo.senderPass
        }
    });
    let mailOptions = {
        to: emailInfo.recipient,
        subject: req.body.subject,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return next(err);
        }
        res.send('Email sent Successfully');
        transporter.close();
    });
};