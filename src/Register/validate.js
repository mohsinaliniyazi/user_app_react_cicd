import {login_message} from '../Common/sysConfigBundle';

const validate = (inputs) => {
  //Email errors
   const errors = {};
   if (!inputs.email) {
     errors.email = 'Check Email';
   } else if (
     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)
   ) {
     errors.email = 'Invalid email address';
   }

   //Password Errors
   if(!inputs.password  || inputs.password.length<6){
     errors.password = 'Check Password'
   }
   
   if(Object.keys(errors).length == 0){
   
   }else{
    errors.error = login_message.VLD_MSG;
   }
   return errors;
}

export default validate;