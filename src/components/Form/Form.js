import React from 'react';
import {connect} from 'react-redux';
import {useFormik} from 'formik';
import PropTypes from 'prop-types';
import style from './Form.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import {createDocument} from '../../redux/reducer/formReducer/formSlicer';
import {getValues} from "../../redux/selectors/formSelector"
import {validationsSchema} from "./validation";

const Form = ({values, createDocumentForm}) => {

    const formik = useFormik({
        initialValues: values,
        onSubmit: newValues => {
            createDocumentForm(newValues)
        },
        validationSchema: validationsSchema,
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className={style.labelInputGroup}>
                <div className={style.labelErrors}>
                    <label>First Name</label>
                    {formik.touched.firstName && formik.errors.firstName
                    && <div className={style.errors}>{formik.errors.firstName}</div>}
                </div>
                <input
                    className={(formik.touched.firstName && formik.errors.firstName) ? style.incorrectInput : style.input}
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                />
            </div>
            <div className={style.labelInputGroup}>
                <div className={style.labelErrors}>
                    <label>Last Name</label>
                    {formik.touched.lastName && formik.errors.lastName
                    && <div className={style.errors}>{formik.errors.lastName}</div>}
                </div>
                <input
                    className={(formik.touched.lastName && formik.errors.lastName) ? style.incorrectInput : style.input}
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                />
            </div>
            <div className={style.labelInputGroup}>
                <div className={style.labelErrors}>
                    <label>Email</label>
                    {formik.touched.email && formik.errors.email
                    && <div className={style.errors}>{formik.errors.email}</div>}
                </div>
                <input
                    className={(formik.touched.email && formik.errors.email) ? style.incorrectInput : style.input}
                    name="email"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </div>
            <div className={style.labelInputGroup}>
                <div className={style.labelErrors}>
                    <label>Phone</label>
                    {formik.touched.phone && formik.errors.phone
                    && <div className={style.errors}>{formik.errors.phone}</div>}
                </div>
                <input
                    className={(formik.touched.phone && formik.errors.phone) ? style.incorrectInput : style.input}
                    name="phone"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                />
            </div>
            <div className={style.labelInputGroup}>
                <div className={style.labelErrors}>
                    <label>Birthday</label>
                    {formik.touched.birthday && formik.errors.birthday
                    && <div className={style.errors}>{formik.errors.birthday}</div>}
                </div>
                <input
                    className={(formik.touched.birthday && formik.errors.birthday) ? style.incorrectInput : style.input}
                    name="birthday"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.birthday}
                />
            </div>
            <div className={style.labelInputGroup}>
                <div className={style.labelErrors}>
                    <div>
                        <label
                            className={(formik.touched.sex && formik.errors.sex) ? style.sexError : style.none}
                        >
                            Sex
                        </label>
                    </div>
                    <div>
                        <label>Male</label>
                        <input
                            type="radio"
                            name="sex"
                            value="male"
                            checked={formik.values.sex === 'male'}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div>
                        <label>Female</label>
                        <input
                            type="radio"
                            name="sex"
                            value="female"
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
                    name="rememberMe"
                    type="checkbox"
                    onChange={formik.handleChange}
                    defaultChecked={formik.values.rememberMe}
                />
            </div>
            <button
                className={style.button}
                onClick={formik.handleSubmit}
                type="submit"
            >
                Create document
            </button>
        </form>
    );
};

Form.propTypes = {
    values: PropTypes.objectOf(PropTypes.any),
    createDocumentForm: PropTypes.func,
};

const mapStateToProps = (state) => ({
    values: getValues(state),
});

const mapDispatchToProps = {
    createDocumentForm: createDocument,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
