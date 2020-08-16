import * as yup from 'yup'

//Single responsiblity principal
export class validators {
    static loginValidator() {
        return yup.object().shape({
            emailTextInput: yup.string().email('Not a valid email').required('Email is Required'),
            passwordTextInput:yup.string().required('Password is required')
        })
    }
}