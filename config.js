const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    dbConnectionInfo: {
        dbUrl: process.env.MONGODB_URL,
        dbs: {
            blog: process.env.BLOG_DB,
            portfolio: process.env.PORTFOLIO_DB,
        }
    },
    emailInfo: {
        senderUser: process.env.EMAIL_SENDER_USER,
        senderPass: process.env.EMAIL_SENDER_PASS,
        recipient: process.env.EMAIL_RECIPIENT,
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT
    }
};