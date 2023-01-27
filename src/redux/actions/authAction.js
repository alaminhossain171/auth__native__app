import { LOGIN, SIGNUP } from "../../config/urls";
import { apiPost, clearUserData, setUserData } from "../../utils/utlits";
import { store } from "../store";
import types from "../types";
store
const {dispatch}=store

export const saveUserData=(data)=>{
    dispatch({
        type:types.LOGIN,
        payload:data
    })
}

export function login(data){
    console.log('data===> ',data)
   return new Promise((resolve,reject)=>{
    return apiPost(LOGIN,data)
    .then((res)=>{
        if(res.status==200){
            setUserData(res).then(()=>{
                resolve(res)
                saveUserData(res)
            });
            return
        }
        else{
            alert(res.message)
        }
        resolve(res)
      
    }).catch(err=>reject(err))
   })
}


export function signup(data){
    return apiPost(SIGNUP,data)
}

export function logout(){
dispatch({type:types.CLEAN_STATE_REDUX});
clearUserData()
}