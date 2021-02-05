const Joi = require('joi')

const validator = {
    validateNewAccount: (req, res, next) => {
      const schema = Joi.object({
        firstname: Joi.string().trim().required().min(2).messages({
          "string.base": "Should be a type of 'text'",
          "string.empty": "This field can't be empty",
          "any.required": "This field is required",
          "string.min": "Must contain at least 2 letters",
        }),
        lastname: Joi.string().trim().min(2).required().messages({
          "string.base": "Should be a type of 'text'",
          "string.empty": "This field can't be empty",
          "any.required": "This field is required",
          "string.min": "Must contain at least 2 letters",
        }),
        username: Joi.string().trim().required().messages({
          "string.base": "Should be a type of 'text'",
          "string.empty": "This field can't be empty",
          "any.required": "This field is required",
          "string.min": "Must contain at least 4 characters",
        }),
        country: Joi.string().trim().required().messages({
          "any.required": "This field is required"
        }),
        email: Joi.string().trim().required().email({tlds: {allow: false}}).messages({
          "string.base": "Should be a type of 'text'",
          "string.empty": "This field can't be empty",
          "any.required": "This field is required",
          "string.email": "Please write a valid email address"
        }),
        image: Joi.string().uri().required().messages({
          "string.base": "Should be a type of 'text'",
          "string.empty": "This field can't be empty",
          "any.required": "This field is required",
          "string.uri": "You shoul use a valid URL"
        }),
        password: Joi.string().trim().required().pattern(/(?=.*\d\d)(?=.*[A-Z])(?=.*[a-z])(?!.*[!"#$%&/()=?¡¨*^\][;:_])(?!.*\s).{4,}/).min(4).messages({
          "string.empty": "This field can't be empty",
          "any.required": "This field is required",
          "string.pattern.base": "This must contain an uppercase letter, a lowercase and two numbers.",
          "string.min": "Must contain at least four characters",
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