import axios from 'axios'

import {FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './userType'

export const fetchUsersRequest=()=>{
    return {
        type:FETCH_USERS_REQUEST
    }
}
export const fetchUsersSucess=(users)=>{
return {
    type:FETCH_USERS_SUCCESS,
    payload:users
}
}
export const fetchUsersFailure=(error)=>{
  return{
    type:FETCH_USERS_FAILURE,
    payload:error
  }
  
}

export const fetchUsers =()=>{
    return function(dispath){
        dispath(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data
            dispath(fetchUsersSucess(users))
        })
        .catch(error=>{
                dispath(fetchUsersFailure(error))
        })
    }
}


