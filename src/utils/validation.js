import validator from 'is_js';

//empty
const checkEmpty = (val, key) => {
    if (validator.empty(val.trim())) {
        return `${key}`
    }
    else {
        return '';
    }
}

//min length
const checkMinLength = (val, key, minLength) => {
    if (val.trim().length < minLength) {
        return `Please enter vaild ${key}`
    }
    else {
        return '';
    }
}

export default function(data){
    const {email,userName,password}=data;

    if(userName !==undefined){
        let emptyVailidation=checkEmpty(userName,'Please Enter username!');
        if(emptyVailidation !==''){
            return emptyVailidation;
        }
        else{
            let minLengthVaidation=checkMinLength(userName,'userName',3);
            if(minLengthVaidation!==''){
                return minLengthVaidation
            }
            
        }
    }

    if(email !==undefined){
        let emptyVailidation=checkEmpty(email,'Please Enter email!');
        if(emptyVailidation !==''){
            return emptyVailidation;
        }
        else{
          if(!validator.email(email)){
            return 'Please Enter Vaild Email'
          }
        }
    }


    if(password !==undefined){
        let emptyVailidation=checkEmpty(password,'Please Enter password!');
        if(emptyVailidation !==''){
            return emptyVailidation;
        }
        else{
            let minLengthVaidation=checkMinLength(password,'password',6);
            if(minLengthVaidation!==''){
                return minLengthVaidation
            }
        }
    }

}