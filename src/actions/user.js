import * as actionTypes from './actionTypes'
import * as API from '../api/user'
//get all user details


export const SignInUserRequest = () => ({
    type: actionTypes.SIGNIN_USER_REQUEST
})

export const SignInUserSuccess = (response) => ({
    type: actionTypes.SIGNIN_USER_SUCCESS,
    payload: {
        response,
    }
})

export const SignInUserError = (error) => ({
    type: actionTypes.SIGNIN_USER_ERROR,
    payload: {
        error
    }
})


export const SignInUserAction = (data) => {
  debugger
    return dispatch => {
        dispatch(SignInUserRequest())
        return API.signInUser(data)
            .then(response => {
              debugger
                if(response && response.data ){ 
                    localStorage.removeItem('invitedSource');              
                    localStorage.setItem('sessionToken',response.data.sessionToken);
                    localStorage.setItem('userId',response.data.objectId);
                    localStorage.setItem('companyId',response.data.companyId.objectId); 
                    dispatch(SignInUserSuccess(response.data))
                  }               
            })
            .catch(error => { 
              debugger
                dispatch(SignInUserError(error.response.data.error));            
            })
    }
    
}

export const SignUpUserRequest = () => ({
    type: actionTypes.SIGNUP_USER_REQUEST
})

export const SignUpUserSuccess = (response) => ({
    type: actionTypes.SIGNUP_USER_SUCCESS,
    payload: {
        response,
    }
})

export const SignUpUserError = (error) => ({
    type: actionTypes.SIGNUP_USER_ERROR,
    payload: {
        error
    }
})

export const SignUpUserAction = (data) => {
    return dispatch => {
        dispatch(SignUpUserRequest())   
        return API.signUpUser(data)
            .then(response => {
                console.log(response.data); // do something with the response
              if(response && response.data ){               
                localStorage.setItem('sessionToken',response.data.sessionToken);
                localStorage.setItem('userId',response.data.objectId);
                localStorage.setItem('companyId',response.data.companyId);  
                this.updateContactStatus(this.state.tempUser.objectId);
                localStorage.removeItem('invitedSource');
              }
                dispatch(SignUpUserSuccess(response.data))
            })
            .catch(error => {
                if (error.response) {
                 alert(error.response.data.error);             
                 console.log(error.response.data.error);
                 console.log(this.props);
                this.props.auth.logout();
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }
}
