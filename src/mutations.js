import gql from 'graphql-tag'

export const SIGNUP_MUTATION = gql`
    mutation Register($username: String!, $email: String!, $password1: String!, $password2: String!) {
        register(
            username: $username,
            email: $email,
            password1: $password1,
            password2: $password2
        ) {
            token,
            errors
        }
    }
`

export const LOGIN_MUTATION = gql`
    mutation TokenAuth($username: String, $password: String!) {
        tokenAuth(
            username: $username,
            password: $password
        ){
            user{
                id
            },
            success,
            errors,
            token
        }
    }
`
export const CHANGEPASSWORD_MUTATION = gql`
    mutation ChangePassword($oldPassword: String!, $newPassword1:String! , $newPassword2:String!) {
        passwordChange(
            oldPassword: $oldPassword,
            newPassword1: $newPassword1,
            newPassword2: $newPassword2)
        {
        success
        errors
        refreshToken
        token
    }
}
`
export const DELETEACCOUNT_MUTATION = gql`
    mutation DeleteAccount($password: String!) {
        deleteAccount(
            password: $password,
        )
        {
            success
            errors
        }
    }
`
export const CREATEDATASET_MUTATION = gql`
    mutation DatasetCreate($input: DatasetCreateInput!) {
        datasetCreate(input: $input){
            ok
            errors{field}
            dataset{
                id
                title
                parameters{
                    id
                    title
                }

            }
        }
    }
`

export const UPDATEACCOUNT_MUTATION = gql`
    mutation UpdateAccount($firstName: String, $lastName: String) {
        updateAccount(
            firstName: $firstName, 
            lastName: $lastName
        )
        {
            success
            errors
        }
    }
`
