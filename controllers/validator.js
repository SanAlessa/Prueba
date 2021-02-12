const Joi = require('joi')

const validator = {
    validateNewAccount: (req, res, next) => {
      const schema = Joi.object({
        firstname: Joi.string().trim().required().min(2).messages({
          "string.base": "Firstname should be a type of 'text'",
          "string.empty": "Firstname can't be empty",
          "any.required": "Firstname is required",
          "string.min": "Firstname must contain at least 2 letters",
        }),
        lastname: Joi.string().trim().min(2).required().messages({
          "string.base": "Lastname should be a type of 'text'",
          "string.empty": "Lastname field can't be empty",
          "any.required": "Lastname field is required",
          "string.min": "Lastname must contain at least 2 letters",
        }),
        username: Joi.string().trim().required().min(4).messages({
          "string.base": "Username should be a type of 'text'",
          "string.empty": "Username field can't be empty",
          "any.required": "Username field is required",
          "string.min": "Username must contain at least 4 characters",
        }),
        country: Joi.string().trim().required().messages({
          "any.required": "Country field is required"
        }),
        email: Joi.string().trim().required().email({tlds: {allow: false}}).messages({
          "string.base": "Email should be a type of 'text'",
          "string.empty": "Email field can't be empty",
          "any.required": "Email field is required",
          "string.email": "Please write a valid email address"
        }),
        image: Joi.string().uri().required().messages({
          "string.base": "Image should be a type of 'text'",
          "string.empty": "Image field can't be empty",
          "any.required": "Image field is required",
          "string.uri": "You shoul use a valid URL"
        }),
        password: Joi.string().trim().required().pattern(/(?=.*\d\d)(?=.*[A-Z])(?=.*[a-z])(?!.*[!"#$%&/()=?¡¨*^\][;:_])(?!.*\s).{4,}/).min(4).messages({
          "string.empty": "Password field can't be empty",
          "any.required": "Password field is required",
          "string.pattern.base": 'The password should be, e.g., "Aa00"',
          "string.min": "Password must contain at least four characters",
        }),
        rol: Joi.string().trim()
      })
      const validation = schema.validate(req.body, {abortEarly: false})

      if(!validation.error){
        next()
      }else{
        res.json({success: false, errors: validation.error.details})
      }
    }
}

module.exports = validator