const Joi = require('joi')

// Joi é basicamente um schema validator
module.exports = {
  body: {
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required()
  }
}
