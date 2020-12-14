import nodeMailer from "nodemailer";
import { emailInfo } from "../../../config";

exports.send_email = function (req, res) {
    const transporter = nodeMailer.createTransport({
        host: emailInfo.host,
        port: emailInfo.port,
        auth: {
            user: emailInfo.senderUser,
            pass: emailInfo.senderPass
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: emailInfo.recipient,
        subject: req.body.subject,
        html: `<p>Name: ${req.body.name}</p>
                <p>Email: ${req.body.email}</p>
                <p>Message: ${req.body.message}</p>`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return next(err);
        }
        res.send('Email sent Successfully');
        transporter.close();
    });
};