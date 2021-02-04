const Joi = require('joi')

const validator = {
    validateNewAccount: (req, res, next) => {
      const schema = Joi.object({
        firstname: Joi.string().trim().required().min(2).max(15),
        lastname: Joi.string().trim().required().min(2).max(15),
        username: Joi.string().trim().required().min(4).max(10),
        country: Joi.string().trim().required(),
        email: Joi.string().trim().required().email({tlds: {allow: false}}),
        image: Joi.string().uri().required(),
        password: Joi.string().trim().required().pattern(/(?=.*\d\d)(?=.*[A-Z])(?=.*[a-z])(?!.*[!"#$%&/()=?¡¨*^\][;:_])(?!.*\s).{4,}/),
        rol: Joi.string().trim()
      })
      const validation = schema.validate(req.body, {abortEarly: false})
      console.log(validation.error)
      if(!validation.error){
        next()
      }else{
        res.json({success: false, errors: ["Hubo un error en los datos"]})
      }
    }
}

module.exports = validator