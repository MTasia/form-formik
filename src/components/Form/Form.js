import React, {useState} from 'react';
import style from './Form.module.css'
import * as yup from 'yup'
import {connect} from "react-redux";
import {useFormik} from 'formik';
import {createDocument} from "../../redux/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Form = ({values, createDocument}) => {

    const [startDate, setStartDate] = useState(new Date());

    const validationsSchema = yup.object().shape({
        firstName: yup.string().typeError('Must be only letters').required('Required'),
        lastName: yup.string().typeError('Must be only letters').required('Required'),
        email: yup.string().email('Invalid email format').required('Required'),
        phone: yup.number().typeError('Must be only numbers').required('Required'),
        sex: yup.string().required()
    })


    const formik = useFormik({
        initialValues: values,
        onSubmit: values => {
            createDocument(values)
        },
        validationSchema: validationsSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={style.labelInputGroup}>
                <div className={style.labelErrors}>
                    <label>First Name</label>
                    {formik.touched.firstName && formik.errors.firstName &&
                    <div className={style.errors}>{formik.errors.firstName}</div>}
                </div>
                <input
                    className={(formik.touched.firstName && formik.errors.firstName) ? style.incorrectInput : style.input}
                    name={'firstName'}
                    type={'text'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
            </div>
            <div className={style.labelInputGroup}>
                <div className={style.labelErrors}>
                    <label>Last Name</label>
                    {formik.touched.lastName && formik.errors.lastName &&
                    <div className={style.errors}>{formik.errors.lastName}</div>}
                </div>
                <input
                    className={(formik.touched.lastName && formik.errors.lastName) ? style.incorrectInput : style.input}
                    name={'lastName'}
                    type={'text'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
            </div>
            <div className={style.labelInputGroup}>
                <div className={style.labelErrors}>
                    <label>Email</label>
                    {formik.touched.email && formik.errors.email &&
                    <div className={style.errors}>{formik.errors.email}</div>}
                </div>
                <input
                    className={(formik.touched.email && formik.errors.email) ? style.incorrectInput : style.input}
                    name={'email'}
                    type={'text'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </div>
            <div className={style.labelInputGroup}>
                <div className={style.labelErrors}>
                    <label>Phone</label>
                    {formik.touched.phone && formik.errors.phone &&
                    <div className={style.errors}>{formik.errors.phone}</div>}
                </div>
                <input
                    className={(formik.touched.phone && formik.errors.phone) ? style.incorrectInput : style.input}
                    name={'phone'}
                    type={'text'}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                />
            </div>
            <div className={style.labelInputGroup}>
                <div className={style.labelErrors}>
                    <label>Birthday</label>
                    {formik.touched.birthday && formik.errors.birthday &&
                    <div className={style.errors}>{formik.errors.birthday}</div>}
                </div>
                <DatePicker
                    className={style.input}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    format="DD-MM-YYYY"
                />
            </div>
            <div className={style.labelInputGroup}>
                <div className={style.labelErrors}>
                    <div>
                        <label
                            className={(formik.touched.sex && formik.errors.sex) ? style.sexError : style.none}
                        >Sex</label>
                    </div>
                    <div>
                        <label>Male</label>
                        <input
                            type={'radio'}
                            name={'sex'}
                            value={'male'}
                            checked={formik.values.sex === 'male'}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div>
                        <label>Female</label>
                        <input
                            type={'radio'}
                            name={'sex'}
                            value={'female'}
                            checked={formik.values.sex === 'female'}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className={style.labelCheckbox}>
                <div className={style.labelErrors}>
                    <label>Remember me</label>
                </div>
                <input
                    className={style.checkbox}
                    name={'rememberMe'}
                    type={'checkbox'}
                    onChange={formik.handleChange}
                />
            </div>
            <button
                className={style.button}
                onClick={formik.handleSubmit}
                type={'submit'}
            >
                Create document
            </button>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        values: state.values
    }
}

const mapDispatchToProps = {
    createDocument: values => createDocument(values)
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)