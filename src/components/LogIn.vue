<template>
    <div class="row">
        <div class="col-lg-4 col-md-4 col-xs-2"></div>
        <div class="col-lg-4 col-md-4 col-xs-6">
            <div class="ContainerLogin">
                <div class="Forma">
                <b-form method="POST" @submit.prevent="login">
                    <div class="form-group">
                        <label class="labelForm" for="username">Логин:</label>
                        <b-input
                                class="inputForm"
                                v-model="username"
                                type="text"
                                id="username"
                                placeholder="Логин...">
                        </b-input>

                    </div>
                    <div class="form-group">
                        <label class="labelForm" for="password">Пароль:</label>
                        <b-input
                                class="inputForm"
                                v-model="password"
                                type="password"
                                id="password"
                                placeholder="Пароль..."
                        ></b-input>
                    </div>
                    <div class="group_btn">
                        <b-button
                                class="btn"
                                variant="primary"
                                type="submit"
                        >
                            Войти
                        </b-button>
                        <p class="Regist">Ещё не зарегистрированы? </p>
                        <a> <router-link to="/SignUp">Регистрация</router-link></a>
                    </div>
                </b-form>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import { LOGIN_MUTATION } from '@/mutations'
    export default {
        name: 'LogIn',
        data () {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            async login () {
                this.$apollo
                    .mutate({
                        mutation: LOGIN_MUTATION,
                        variables: {
                            username: this.username,
                            password: this.password,
                        }
                    })
                    .then(data => {
                        if (!data.data.tokenAuth.success){
                            alert("Неверные данные")
                        }else{
                            localStorage.setItem('token', data.data.tokenAuth.token)
                            // localStorage.setItem('refresh', data.data.tokenAuth.refresh)
                            this.$router.push('/LogIn/Menu')
                        }
                    })
            },
        },
    }
</script>

<style scoped>
    .ContainerLogin{
        background-color: white;
        border-radius: 0px;
        box-shadow: 5px 0 30px rgba(0,0,0.5,0.5);
        margin-top:15%;
    }

    .labelForm{
        padding-left:15px;
        font-family: Roboto;
        font-size: 1.2rem;
    }
    .inputForm, .inputForm:active{
        border-color: #bb7171;
        color:black;
        background-color: rgba(253, 239, 221, 0.94);
        box-shadow:0 0 0 rgba(0, 0, 0, 0);
    }
    .form-group{
        padding: 4% 4% 4% 4%;
        color: #000000;
        text-decoration: none;
    }
    .group_btn a{
        padding: 0% 0% 0% 0%;
    }

    .group_btn, a{
        padding: 0% 0% 4% 4%;
        text-decoration: none;
        color:black;
        font-weight: bold;
    }
    .group_btn a:hover{
        text-decoration: none;
        color: #bb7171;
    }
    .btn{
        background-color: #bb7171;
        border-color: #bb7171;
        box-shadow:0 0 0 rgba(0, 0, 0, 0);
    }
    .btn:hover,.btn:active{
        background-color: #9a4a4a;
        border-color: #bb7171;
        box-shadow:0 0 0 rgba(0, 0, 0, 0);
    }

</style>