<template>
    <div class="row">
        <div class="col-lg-4 col-md-4 col-xs-2"></div>
        <div class="col-lg-4 col-md-4 col-xs-10">
            <div class="ContainerSignUp">
                <b-form method="POST" @submit.prevent="signup">
                <div class="form-group">
                        <label class="labelForm" for="username" style="padding-top: 2%">Логин:</label>
                        <b-input
                                class="inputForm"
                                :class="{invalid: $v.username.$dirty && !$v.username.required}"
                                v-model="username"
                                type="text"
                                id="username"
                                placeholder="Логин...">
                        </b-input>
                        <small class="invalidForm" v-if="$v.username.$dirty && !$v.username.required">Поле Логин не должно быть пустым</small>
                    </div>
                    <div class="form-group">
                        <label class="labelForm" for="email">E-mail:</label>
                        <b-input
                                class="inputForm"
                                :class="{invalid: ($v.email.$dirty && !$v.email.required) && ($v.email.$dirty && !$v.email.email)}"
                                v-model.trim="email"
                                type="text"
                                id="email"
                                placeholder="Email...">
                        </b-input>
                        <small class="invalidForm" v-if="$v.email.$dirty && !$v.email.required">Поле E-mail не должно быть пустым</small>
                        <small class="invalidForm" v-else-if="$v.email.$dirty && !$v.email.email">Введите корректный E-mail</small>
                    </div>

                    <div class="form-group">
                        <label class="labelForm" for="password1">Пароль:</label>
                        <b-input
                                class="inputForm"
                                :class="{invalid: ($v.password1.$dirty && !$v.password1.required) || ($v.password1.$dirty && !$v.password1.minLength)}"
                                v-model="password1"
                                type="password"
                                id="password1"
                                placeholder="Пароль...">
                        </b-input>
                        <small class="invalidForm" v-if="$v.password1.$dirty && !$v.password1.required">Введите пароль</small>
                        <small class="invalidForm" v-else-if="$v.password1.$dirty && !$v.password1.minLength">
                            Пароль должен быть {{$v.password1.$params.minLength.min}} символов. Сейчас он {{password1.length}}
                        </small>

                    </div>
                    <div class="form-group">
                        <label class="labelForm"  for="password2">Повторите пароль:</label>
                        <b-input
                                class="inputForm"
                                :class="{invalid: ($v.password2.$dirty && !$v.password2.required) || ($v.password2.$dirty && !$v.password2.minLength)}"
                                v-model="password2"
                                type="password"
                                id="password2"
                                placeholder="Повторите пароль...">
                        </b-input>
                        <small class="invalidForm" v-if="$v.password1.$model != $v.password2.$model">Пароли не совпадают... </small>
                    </div>

                    <div class="group_btn">
                        <b-button
                                class="btn"
                                type="submit"

                        >
                            Регистрация
                        </b-button>
                        <p class="">Уже есть аккаунт? <router-link to="/LogIn">Вход</router-link>
                        </p>
                    </div>
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
    import { SIGNUP_MUTATION } from '@/mutations'
    import { email,required,minLength } from 'vuelidate/lib/validators';
    export default {
        name: 'SignUp',
        data () {
            return {
                username: '',
                email: '',
                password1: '',
                password2: '',
            }
        },
        validations:{
            username:{required},
            email:{email,required},
            password1: {required, minLength:minLength(6)},
            password2: {required, minLength:minLength(6)},
        },
        methods: {
             signup() {
                this.$apollo
                    .mutate({
                        mutation: SIGNUP_MUTATION,
                        variables: {
                            username: this.username,
                            email: this.email,
                            password1: this.password1,
                            password2: this.password2,
                        },
                    })
                    .then((data) => {
                        if (this.$v.$invalid) {
                            this.$v.$touch()
                            return
                        }
                        if (data.data.register.errors == null){
                            this.$router.replace('/LogIn');
                        }
                        else{
                            alert('Пользователь уже зарегистрирован');
                        }
                    })
            },
        }
    }

</script>

<style scoped>

    .ContainerSignUp{
        background-color: white;
        border-radius: 2px;
        box-shadow: 5px 0 30px rgba(0,0,0.5,0.5);
        margin-top:8%;
    }
    .form-group{
        padding: 0% 4% 0% 4%;
        color: #000000;
        text-decoration: none;
    }
    b-input{
        background-color: #bb7171;
        border-color: #bb7171;
        box-shadow:0 0 0 rgba(0, 0, 0, 0);
    }
    b-input:link, b-input:active{
        background-color: #bb7171;
        border-color: #bb7171;
        box-shadow:0 0 0 rgba(0, 0, 0, 0);
    }
    .group_btn,a {
        padding: 0% 0% 1% 4%;
        text-decoration: none;
        color:black;
        font-weight: bold;
    }
    .group_btn a:hover {
        text-decoration: none;
        color: #bb7171;
    }
    .btn{
        background-color: #bb7171;
        border-color: #bb7171;
        box-shadow:0 0 0 rgba(0, 0, 0, 0);
    }
    .btn:hover,.btn:active,.btn:link, .btn:visited{
        background-color: #9a4a4a;
        border-color: #bb7171;
        box-shadow:0 0 0 rgba(0, 0, 0, 0);
    }
    .inputForm, .inputForm:active{
        border-color: #bb7171;
        color:black;
        background-color: rgba(253, 239, 221, 0.94);
        box-shadow:0 0 0 rgba(0, 0, 0, 0);

    }
    .labelForm{
        padding-left:10px;
        font-family: Roboto;
        font-size: 1.2rem;
    }
    .invalidForm{
        font-size: 0.9rem;
        color: #723b3b;;
    }
</style>