import * as Yup from "yup";

const today = new Date();

export const validationsSchema = Yup.object({
    firstName: Yup.string()
        .matches(/(^[A-ZА-Я]{1}[\w|\W]{1,30})$/, 'Enter valid first name with a capital letter')
        .matches(/(^[A-Z]{1}[a-z]{1,30}|^[А-Я]{1}[а-я]{1,40})$/, 'Enter name on one language, use only letter')
        .min(2, 'Too Short!')
        .required('Required'),
    lastName: Yup.string()
        .matches(/(^[A-ZА-Я]{1}[\w|\W]{1,30})$/, 'Enter valid last name with a capital letter')
        .matches(/(^[A-Z]{1}[a-z]{1,30}|^[А-Я]{1}[а-я]{1,40})$/, 'Enter name on one language, use only letter')
        .min(2, 'Too Short!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    phone: Yup.string()
        .matches(/^(8|\+7)[- ]?(\d{3})[-]?(\d{3})[-]?(\d{2})[-]?(\d{2})$/, 'Enter phone in format +7/8-000-000-00-00')
        .required('Required'),
    birthday: Yup.date()
        .required('Required')
        .max(today, 'This date is later then today'),
    sex: Yup.string()
        .required()
})