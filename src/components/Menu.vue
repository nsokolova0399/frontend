<template>
    <div class="Menu">
        <div class="row">
            <div class="col-lg-2 col-md-2 col-xs-2 text-center"></div>
            <div class="col-lg-8 col-md-8 col-xs-8 text-center Menu-conteiner">
                <div class="row">
                    <div class="col-lg-3 col-md-3 col-xs-3 text-center"><a><router-link to="/LogIn/Menu/User">Мой профиль</router-link></a></div>
                    <div class="col-lg-3 col-md-3 col-xs-3 text-center"><a><router-link to="/LogIn/Menu/CreateDataset">Создать датасет</router-link></a></div>
                    <div class="col-lg-3 col-md-3 col-xs-3 text-center"><a><router-link to="/LogIn/Menu">Загрузить файл</router-link></a></div>
                    <div class="col-lg-3 col-md-3 col-xs-3 text-center"><a><router-link to="/Home">Выход</router-link></a></div>
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-xs-2 text-center"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Menu',
    }
</script>
<style scoped>
    .Menu-conteiner{
        background-color: rgb(111, 36, 45);
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        margin-top:5%;
        padding: 1% 1% 1% 1%;
        border-radius: 25px;
    }
    .Menu-conteiner a{
        text-decoration: none;
        color: #f8d7d7;
        font-size: 1.1rem;
        font-family: Roboto;
    }
    .Menu-conteiner a:hover{
        text-decoration: none;
        color: #faf1f1;
        font-weight: bold;
    }
</style>
