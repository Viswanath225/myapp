const { body,validationResult } = require("express-validator");


    const userDataValidateChainableAPI = [
        
        body("firstName")
          .exists({ checkFalsy: true })
          .withMessage("firstName name is required")
          .isString()
          .withMessage("Firstname name should be string"),
        
        body("lastName")
          .exists()
          .withMessage("lastName is required")
          .isString()
          .withMessage("lastNameshould be string")
          .isLength({ min: 5 })
          .withMessage("Password should be at least 5 characters"),
        body("email")
        .isEmail()
        .withMessage("Provide valid email"),
        body("contact")
          .optional()
          .isString()
          .withMessage("phone number should be string")
          .custom((value) => {
            if (value.length !== 10) {
              return Promise.reject("Phone number should be 10 digits");
            } else {
              return true;
            }
          }),
          (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
              return res.status(400).json({ errors: errors.array() });
            }
            next();
          },
      ];
module.exports = {userDataValidateChainableAPI};
