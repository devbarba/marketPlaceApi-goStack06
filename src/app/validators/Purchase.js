const Joi = require('joi')

// Joi é basicamente um schema validator
module.exports = {
  body: {
    ad: Joi.string().required(),
    content: Joi.string().required()
  }
}
