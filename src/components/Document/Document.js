import {useSelector} from "react-redux";
import style from './Document.module.css'
import {makeGetValues} from "../../redux/selectors/formSelector";


const Document = () => {

    const values = useSelector(makeGetValues);

    return (
        <div className={style.document}>
            {values.firstName !== "" ?
                <div>
                    <div className={style.headerTitle}>Your document</div>
                    <div className={style.text}>Name: {values.firstName} {values.lastName}</div>
                    <div className={style.text}>Email: {values.email}</div>
                    <div className={style.text}>Phone: {values.phone}</div>
                    <div className={style.text}>Birthday: {values.birthday}</div>
                    <div className={style.text}>Sex: {values.sex}</div>
                </div> :
                <div className={style.headerTitle}>Here will be your document</div>
            }
        </div>
    )
}

export default Document