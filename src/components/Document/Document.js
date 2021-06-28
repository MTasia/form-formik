import {connect} from "react-redux";
import PropTypes from "prop-types";
import style from './Document.module.css'
import {getValues} from "../../redux/selectors/formSelector";


const Document = ({values}) => (
        <div className={style.document}>
                <div>
                    <div className={style.headerText}>Your document</div>
                    <div className={style.text}>Name: {values.firstName} {values.lastName}</div>
                    <div className={style.text}>Email: {values.email}</div>
                    <div className={style.text}>Phone: {values.phone}</div>
                    <div className={style.text}>Birthday: {values.birthday}</div>
                    <div className={style.text}>Sex: {values.sex}</div>
                </div>
        </div>
    )

Document.propTypes = {
    values: PropTypes.objectOf(PropTypes.any)
}
const mapStateToProps = (state) => ({
        values: getValues(state)
    })

export default connect(mapStateToProps, null)(Document)