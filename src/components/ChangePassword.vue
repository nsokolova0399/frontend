<template>
    <div class="User">
        <Menu></Menu>
        <div class="row">
            <div class="col-lg-4 col-md-4 col-xs-4"></div>
            <div class="col-lg-4 col-md-4 col-xs-4 ContainerUserChangePassword">
                <b-form method="POST" @submit.prevent="change">
                <div class="row"><div class="col-lg-12 col-md-12 col-xs-12 text-center"> <label class="labelForm LK">Изменение пароля</label></div></div>
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-xs-1"></div>
                    <div class="col-lg-10 col-md-10 col-xs-10">
                        <label class="labelForm">Введите старый пароль: </label>
                        <b-input
                                class="Input"
                                :class="{invalid: ($v.oldPassword.$dirty && !$v.oldPassword.required) }"
                                v-model="oldPassword"
                                type="password"
                                id="oldPassword"
                                placeholder="Старый пароль...">
                        </b-input>
                        <small class="smallChangePassword" v-if="$v.oldPassword.$dirty && !$v.oldPassword.required">Введите пароль</small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-xs-1"></div>
                    <div class="col-lg-10 col-md-10 col-xs-10">
                        <label class="labelForm">Введите новый пароль: </label>
                        <b-input
                                class="Input"
                                :class="{invalid: ($v.newPassword1.$dirty && !$v.newPassword1.required) || ($v.newPassword1.$dirty && !$v.newPassword1.minLength)}"
                                v-model="newPassword1"
                                type="password"
                                id="newPassword1"
                                placeholder="Новый пароль...">
                        </b-input>
                        <small class="smallChangePassword" v-if="$v.newPassword1.$dirty && !$v.newPassword1.required">Введите новый пароль</small>
                        <small class="smallChangePassword" v-else-if="$v.newPassword1.$dirty && !$v.newPassword1.minLength">
                            Пароль должен быть {{$v.newPassword1.$params.minLength.min}} символов. Сейчас он {{newPassword1.length}}
                        </small>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-xs-1"></div>
                    <div class="col-lg-10 col-md-10 col-xs-10">
                        <label class="labelForm">Повторите пароль: </label>
                        <b-input
                                class="Input"
                                :class="{invalid: ($v.newPassword2.$dirty && !$v.newPassword2.required) || ($v.newPassword2.$dirty && !$v.newPassword2.minLength)}"
                                v-model="newPassword2"
                                type="password"
                                id="newPassword2"
                                placeholder="Повторите пароль...">
                        </b-input>
                        <small class="smallChangePassword" v-if="$v.newPassword2.$dirty && !$v.newPassword2.required">Повторите пароль</small>
                        <small class="smallChangePassword" v-else-if="$v.newPassword1.$model == $v.newPassword2.$model"></small>
                        <small class="smallChangePassword" v-else-if="$v.newPassword1.$model != $v.newPassword2.$model">Пароли не совпадают</small>
                    </div>
                </div>
                    <div class="row">
                        <div class="col-lg-1 col-md-1 col-xs-1"></div>
                        <div class="col-lg-10 col-md-10 col-xs-10">
                            <div class="group_btn">
                                <b-button class="btn" type="submit">
                                    Сохранить
                                </b-button>
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
    import { CHANGEPASSWORD_MUTATION } from '@/mutations'
    import { minLength, required } from "vuelidate/lib/validators";
    export default {
        name: 'ChangePassword',
        data () {
            return {
                oldPassword: '',
                newPassword1: '',
                newPassword2: ''
            }
        },
        validations:{
            oldPassword: {required},
            newPassword1: {required, minLength:minLength(6)},
            newPassword2: {required, minLength:minLength(6)},
        },
        methods: {
            change () {
                this.$apollo
                    .mutate({
                        mutation: CHANGEPASSWORD_MUTATION,
                        variables: {
                            oldPassword: this.oldPassword,
                            newPassword1: this.newPassword1,
                            newPassword2: this.newPassword2
                        }
                    })
                    .then(data => {
                        if (this.$v.$invalid) {
                            this.$v.$touch()
                            return
                        }
                        if(data.data.passwordChange.success){
                            alert('Пароль успешно изменен')
                            this.$router.push('/Menu/User')
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
        margin-right: 0%;
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