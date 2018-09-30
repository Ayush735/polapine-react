import * as actionTypes from '../actions/actionTypes'
const initState = {
  siginuser: {},
  message: '',
  isCreated: false,
  isCreatedError: false,
  isSingError: false,
  isSignUpSucess: false
}

export default (state = initState, action={}) => {
  switch (action.type) {
     case actionTypes.SIGNIN_USER_REQUEST:
     debugger
      return {
        ...state,
        message: '',
        isCreated: false,
        isCreatedError: false
      }
    case actionTypes.SIGNIN_USER_SUCCESS:
      return {
        siginuser: action.payload.response,
        message: 'user sigin successfully',
        isCreated: true,
        isSignUpSucess: true,
        isCreatedError: false
      }
    case actionTypes.SIGNIN_USER_ERROR:
    return {      
      ...state,
      message: action.payload.error,
      isSingError:true,     
    }
    case actionTypes.SIGNUP_USER_REQUEST:
      return {
        ...state,
        message: '',
        isCreated: false,
        isCreatedError: false
      }
    case actionTypes.SIGNUP_USER_SUCCESS:  
      return {
        tempUser: action.payload.response,
        message: 'user sigin successfully',
        isCreated: true,
        isSignUpSucess: true,
        isCreatedError: false
      }

    case actionTypes.SIGNUP_USER_ERROR:
    return {
      ...state,
      message: action.payload.response,
      isCreated: false,
      isCreatedError: true
    }




    default:
      return state
  }
}