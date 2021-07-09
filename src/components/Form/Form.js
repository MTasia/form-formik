import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useFormik} from 'formik';
import style from './Form.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import {makeGetValues} from "../../redux/selectors/formSelector"
import {validationsSchema} from "./validation";
import {createDocument} from "../../redux/reducer/formReducer/formSlicer";

const Form = () => {

    const values = useSelector(makeGetValues);

    const dispatch = useDispatch();

    const createDocumentForm = useCallback(
        (newValues) => {dispatch(createDocument(newValues));},
        []);


    const formik = useFormik({
        initialValues: values,
        onSubmit: newValues => {
            createDocumentForm(newValues)
        },
        validationSchema: validationsSchema,
    });

    return (
        <form className={style.form} onSubmit={formik.handleSubmit}>
            <h1 className={style.formTitle}>Form</h1>
            <div className={style.labelInputGroup}>
                <div className={style.labelErrors}>
                    <label className={style.labelText}>First Name</label>
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
                    <label className={style.labelText}>Last Name</label>
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
                    <label className={style.labelText}>Email</label>
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
                    <label className={style.labelText}>Phone</label>
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
                    <label className={style.labelText}>Birthday</label>
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
                    <div className={style.labelText}>
                        <label
                            className={(formik.touched.sex && formik.errors.sex) ? style.sexError : style.none}
                        >
                            Sex
                        </label>
                    </div>
                    <div>
                        <label className={style.labelText}>Male</label>
                        <input
                            type="radio"
                            name="sex"
                            value="male"
                            checked={formik.values.sex === 'male'}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div>
                        <label className={style.labelText}>Female</label>
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
                    <label className={style.labelText}>Remember me</label>
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

export default Form;
