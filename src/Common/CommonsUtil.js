import {signup_message, validation_message} from './sysConfigBundle';

export function LoginUserValidation(values) {
   const errors = {}
   if (!values.model.email) errors.email = validation_message.EMAIL_RQRD
   if (!values.model.firstName) errors.firstName = validation_message.FIRST_NM_RQRD
   if (!values.model.lastName) errors.lastName = validation_message.LAST_NM_RQRD
   if (!values.model.password) errors.password = validation_message.PSWD_RQUIRED
   if (!values.model.repeatPassword) errors.repeatPassword = validation_message.REPEAT_PSWD_RQRD
   if (!values.model.location) errors.location = validation_message.LOCATION_RQRD
   if (!values.model.mobile) errors.mobile = validation_message.MOBILE_RQRD
   return errors
};

export function SignUPUserValidation(values) {
   const errors = {}
   if (!values.model.firstName) errors.firstName = validation_message.FIRST_NM_RQRD
   if (!values.model.lastName) errors.lastName = validation_message.LAST_NM_RQRD
   if (!values.model.location) errors.location = validation_message.LOCATION_RQRD
   if (!values.model.mobile) errors.mobile = validation_message.MOBILE_RQRD
   if (!values.model.address) errors.address = validation_message.ADDRSS_RQDR

   if(!values.model.password){
      errors.password = validation_message.PSWD_RQUIRED;
   }else if(password_pattern(values) == false){
      errors.password = validation_message.ERR_PSWD_MATCH;
   }

   if(!values.model.repeatPassword){
      errors.repeatPassword = validation_message.REPEAT_PSWD_RQRD
   }else if(password_confirm(values) == true){
      errors.repeatPassword = validation_message.REPEAT_PSWD
   }

   if(!values.model.email){
      errors.email = validation_message.EMAIL_RQRD
   }else if(email_validation(values) == false){
      errors.email = validation_message.EMAIL_VALID
   }
   return errors
}

export function password_pattern(values){
   var errors = false;
   var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
   if(values.model.password.match(passw))errors = true; 
   return errors
}

export function password_confirm(values){
   var errors = false;
   if(values.model.password || values.model.repeatPassword){
      if(values.model.password != values.model.repeatPassword) errors = true;
   }
   return errors
}

export function email_validation(values){
   var errors = false;
   if(values.model.email){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.model.email)) errors = true;
   }else{
      errors = true;
   }
   return errors
}
