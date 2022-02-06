<template>
    <div class="User">
        <Menu></Menu>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-lg-4 col-md-4 col-xs-4 ContainerUserChangePassword">
                <b-form method="POST" @submit.prevent="deleteUser">
                    <div class="row"><div class="col-lg-12 col-md-12 col-xs-12 text-center"> <label class="labelForm LK">Удаление аккаунта</label></div></div>
                    <div class="row">
                        <div class="col-lg-1 col-md-1 col-xs-1"></div>
                        <div class="col-lg-10 col-md-10 col-xs-10">
                            <label class="labelForm">Введите пароль: </label>
                            <b-input
                                    class="Input"
                                    v-model="password"
                                    type="password"
                                    id="password"
                                    placeholder="Пароль...">
                            </b-input>
                            <small class="smallChangePassword" v-if="$v.password.$dirty && !$v.password.required">Введите пароль</small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1 col-md-1 col-xs-1"></div>
                        <div class="col-lg-10 col-md-10 col-xs-10">
                            <label class="labelForm">Повторите пароль: </label>
                            <b-input
                                    class="Input"
                                    v-model="password1"
                                    type="password"
                                    id="password1"
                                    placeholder="Повторите пароль...">
                            </b-input>
                            <small class="smallChangePassword" v-if="$v.password1.$dirty && !$v.password1.required">Повторите пароль</small>
                            <small class="smallChangePassword" v-else-if="$v.password.$model == $v.password1.$model"></small>
                            <small class="smallChangePassword" v-else-if="$v.password.$model != $v.password1.$model">Пароли не совпадают</small>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1 col-md-1 col-xs-1"></div>
                        <div class="col-lg-10 col-md-10 col-xs-10">
                            <div class="group_btn">
                                <b-button class="btn" type="submit">Удалить аккаунт</b-button>
                            </div>
                        </div>
                    </div>
                </b-form>
            </div>
            <div class="col-lg-4 col-md-4 col-xs-4">
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-xs-1"></div>
                    <div class="col-lg-6 col-md-6 col-xs-11  ContainerMenu">
                        <a><router-link to="/LogIn/Menu/User">Назад</router-link></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { DELETEACCOUNT_MUTATION } from '@/mutations'
    import { required } from "vuelidate/lib/validators"
    export default {
        name: 'DeleteUser',
        data () {
            return {
                password: '',
                password1: '',
            }
        },
        validations:{
            password: {required},
            password1: {required},
        },
        methods: {
            deleteUser () {
                this.$apollo
                    .mutate({
                        mutation: DELETEACCOUNT_MUTATION,
                        variables: {
                            password: this.password,
                        }
                    })
                    .then(data => {
                        if (this.$v.$invalid) {
                            this.$v.$touch()
                            return
                        }
                        if(data.data.deleteAccount.success){
                            alert('Аккаунт успешно удален')
                            this.$router.push('/Login')
                        }else{
                            alert('Неверный пароль')
                        }
                    })
            },
        },
    }
</script>
<style scoped>
    .ContainerUserChangePassword{
        background-color: rgba(253, 239, 221, 255);
        padding-top: 2%;
        padding-bottom: 3%;
        margin-top:5%;
        border-radius: 45px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    .ContainerMenu{
        background-color: rgba(253, 239, 221, 255);
        border-radius: 45px;
        margin-top:13%;
        min-height: 7%;
        text-decoration: none;
        padding-top: 1%;
        padding-bottom: 1%;
        font-weight: bold;
        white-space: nowrap;
    }
    .ContainerMenu, a{
        font-size: 1.2rem;
        color: #791c1c;
        text-decoration: none;
        text-align: center;
    }
    input{
        background-color: rgba(253, 239, 221, 255);
        color: rgb(29, 28, 26);
        outline:none;
    }
    input:focus, input:active, input:hover {
        outline:none;
        background-color: rgba(253, 239, 221, 255);
    }

    .LK{
        font-weight: bold;
        color: #791c1c;

    }
    .labelForm{
        font-size: 1.2rem;
        color: black;
    }
    .ContainerMenu, a:active, a:hover{
        color: black;
        text-decoration: none;
        text-align: center;
    }
    .smallChangePassword:hover{
        font-weight: bold;
    }
    .smallChangePassword a, .smallChangePassword a:hover{
        text-decoration: none;
    }
    .btn{
        margin-top: 10%;
        background-color: #bb7171;
        border-color: #bb7171;
        box-shadow:0 0 0 rgba(0, 0, 0, 0);
    }
    .btn:hover,.btn:active,.btn:link, .btn:visited{
        background-color: #9a4a4a;
        border-color: #bb7171;
        box-shadow:0 0 0 rgba(0, 0, 0, 0);
    }
</style>