// Utilização do mailtrap.io
module.exports = {
  host: process.env.MAIL_HOST,
  port: process.env.NAIL_PORT,
  secure: process.env.MAIL_SECURE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
}
