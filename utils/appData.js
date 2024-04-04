import { rule } from "postcss";

const { rules, check, validationAllField } = validation;
export const appData = {
    validateRules: {
      email: [
        rules.isRequire('Invalid email'), 
        rules.isEmail('Invalid email'), 
      ],
      
    fullName: [
      rules.isRequire('Enter your full name'),
      rules.hasNoNumber('Full name can not have Number'),
    ],

    passwordConfirm: [
      rules.isRequire('Must be Require'),
      rules.isCorrectValue('Please make sure passwords match ', 'password'),
    ],

    password: [
      rules.isRequire('Enter your password'),
      rules.minLength(3, 'Must has 3 characters'),
    ],
    }

}