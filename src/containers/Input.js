import { connect } from 'react-redux';
import { changeName } from '../actions';
import Input from '../components/Input';

const mapStateToProps = (state) => {
    return {
        charCount: state.charCount,
        name: state.name,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInput: (e) => {
            dispatch(changeName(e.target.value));
        }
    };
};

const InputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);

export default InputContainer;
