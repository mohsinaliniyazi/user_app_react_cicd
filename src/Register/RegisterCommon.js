import { signup } from '../util/ApiUtils';

export function doSignUp(userInfo) {
    const errors = {}
    const modelData = {
       
       user:{ 
            firstName       :   userInfo.model.firstName,
            lastName        :   userInfo.model.lastName,
            email           :   userInfo.model.email,
            password        :   userInfo.model.password,

            address:[ {
                location : userInfo.model.location,
                address : userInfo.model.address, 
                residential : userInfo.model.residential, 
                city : userInfo.model.city,
                state : userInfo.model.state,
                country : userInfo.model.country,
                phone : userInfo.model.phone, 
                mobile : userInfo.model.mobile
            } ],

            role            :   userInfo.model.role

        },
        password        :   userInfo.model.password,
        role            :   userInfo.model.role

    };

    signup(modelData)
        .then(res => {
           console.log(res);
           errors.firstName = 'hi'

    }).catch(error => {
        errors.firstName = 'hi'
    });
    errors.firstName = 'hi'
    console.log(modelData)
    return errors
}