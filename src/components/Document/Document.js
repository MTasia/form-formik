import style from './Document.module.css'
import {connect} from "react-redux";

const Document = ({valuesForDocument}) => {
    return (
        <div className={style.document}>
            {valuesForDocument === null ?
                <p className={style.text}>Here will be your document</p> :
                <div>
                    <div className={style.headerText}>Your document</div>
                    <div className={style.text}>Name: {valuesForDocument.firstName} {valuesForDocument.lastName}</div>
                    <div className={style.text}>Email {valuesForDocument.email}</div>
                    <div className={style.text}>Phone {valuesForDocument.phone}</div>
                    <div className={style.text}>Sex: {valuesForDocument.sex}</div>
                </div>
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        valuesForDocument: state.valuesForDocument
    }
}

export default connect(mapStateToProps, null)(Document)