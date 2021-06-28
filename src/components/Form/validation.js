import * as Yup from "yup";

const today = new Date();

export const validationsSchema = Yup.object({
    firstName: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid first name')
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .matches(/^[A-Za-z ]*$/, 'Please enter valid last name')
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    phone: Yup.string()
        .matches(/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{10}$/, 'Please enter valid phone')
        .required('Required'),
    birthday: Yup.date()
        .required('Required')
        .max(today, 'This date is later then today'),
    sex: Yup.string()
        .required(),
})