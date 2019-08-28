const Joi = require('joi')

// Joi é basicamente um schema validator
module.exports = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6)
  }
}
