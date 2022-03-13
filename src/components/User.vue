<template>
<div class="User">
    <Menu></Menu>
    <div class="row">
        <div class="col-lg-4 col-md-3 col-4">
            <div class="row">
                <div class="col-lg-8 col-md-7 col-3"></div>
                <div class="col-lg-4 col-md-5 col-9 ContainerMenu">
                    <a><router-link to="/LogIn/Menu">Назад</router-link></a>
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-6 col-7 ContainerUserChangePassword">
            <b-form method="POST" @submit.prevent="changeUser">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-12 text-center">
                        <label class="labelForm LK">Личный кабинет</label>
                    </div>
                </div>
                <div class="row" v-if="me">
                    <div class="col-lg-1 col-md-1 col-1"></div>
                            <div class="col-lg-1 col-md-2 col-2 labelForm">Имя:</div>
                            <div class="col-lg-8 col-md-8 col-8 text-left">
                                 <b-input
                                    class="inputForm"
                                    v-model="me.firstName"
                                    type="text"
                                    id="firstName"
                                    placeholder="Имя..."
                                    :readonly="status"
                                 ></b-input>
                            </div>
                 </div>
                <div class="row" v-if="me">
                    <div class="col-lg-1 col-md-1 col-1"></div>
                            <div class="col-lg-2 col-md-3 col-3  labelForm">Фамилия:</div>
                            <div class="col-lg-7 col-md-7 col-7 text-left">
                                <b-input
                                class="inputForm"
                                v-model="me.lastName"
                                type="text"
                                id="lastName"
                                placeholder="Фамилия..."
                                :readonly="status"
                                ></b-input>
                            </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-1"></div>
                    <div class="col-lg-10 col-md-8 col-sm-6 col-6 Input" v-if="me" >
                        <label class="labelForm">Логин: </label>
                            {{me.username}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-1"></div>
                    <div class="col-lg-10 col-md-10 col-10 Input" v-if="me">
                        <label class="labelForm">E-mail: </label>
                            {{me.email}}
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-1 col-md-1 col-1"></div>
                    <div class="col-lg-10 col-md-10 col-10">
                         <label class="labelForm smallChangePassword"><a><router-link to="/LogIn/Menu/User/ChangePassword">Поменять пароль</router-link> </a></label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-7 col-md-7 col-xs-7 text-center">
                        <div class="group_btn">
                            <b-button class="btn" @click="clicked">
                                Изменить
                            </b-button>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-xs-3 text-center">
                        <div class="group_btn">
                            <b-button class="btn" type="submit">
                                Сохранить
                            </b-button>
                        </div>
                    </div>
                </div>
            </b-form>
        </div>
        <div class="col-lg-4 col-md-3 col-1"></div>
        </div>
</div>
</template>

<script>
    import Menu from '@/components/Menu'
    import { ME_QUERY } from '@/queries'
    import { UPDATEACCOUNT_MUTATION } from "@/mutations";
    export default {
        name: 'User',
        components:{
            Menu
        },
        data () {
            return {
                username: '',
                id: '',
                email:'',
                status:true,
                lastName:'',
                firstName:''
            }
        },
        apollo: {
            me: {
                query: ME_QUERY,
            },
        },

        methods:{
            clicked(){
                this.status = false
            },
            changeUser () {
                this.$apollo
                    .mutate({
                        mutation: UPDATEACCOUNT_MUTATION,
                        variables: {
                            lastName: this.lastName,
                            firstName: this.firstName
                        }
                    })
                    .then(data => {
                        if(data.data.updateAccount.success){
                            this.status = true
                            alert('Изменения сохранены')
                        }
                    })

            },
        }
    }
</script>
<style scoped>
    .ContainerUserChangePassword{
        background-color: rgba(253, 239, 221, 255);
        padding-top: 2%;
        padding-bottom: 2%;
        margin-top:1%;
        border-radius: 45px;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    .ContainerMenu{
        background-color: rgba(253, 239, 221, 255);
        border-radius: 45px;
        min-height: 7%;
        text-decoration: none;
        margin-top: 4%;
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
         background-color: rgba(253, 239, 221, 255)!important;
         color: #791c1c;
         outline:none!important;
         box-shadow: none!important;
         border-color:rgba(253, 239, 221, 255);
     }
     input:active {
        background-color: rgba(253, 239, 221, 255)!important;
        border-color: rgb(205, 193, 179);
    }
     .LK{
         font-weight: bold;
         color: #791c1c;
     }
    .labelForm{
        font-size: 1.1rem;
        padding-top: 1%;
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
        background-color: #bb7171;
        border-color: #bb7171;
        box-shadow:0 0 0 rgba(0, 0, 0, 0);
    }
    .btn:hover,.btn:active,.btn:link, .btn:visited{
        background-color: #9a4a4a;
        border-color: #bb7171;
        box-shadow:0 0 0 rgba(0, 0, 0, 0);
    }
    .text-center{
        padding-top: 2%;
    }
    .text-left{
        padding-left: 1%;
    }

</style>