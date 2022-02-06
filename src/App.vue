<template>
  <span id="app" class="App" >
    <header class="navigation" >
      <div class="row NK">
        <div class="col-lg-8 col-md-8 col-xs-2 text-center"><a><router-link to="/Home">Научный личный кабинет</router-link></a></div>
        <div class="col-lg-1 col-md-1 col-xs-2 text-center"><a><router-link to="/LogIn">Вход</router-link></a></div>
        <div class="col-lg-1 col-md-1 col-xs-2 text-center"><a><router-link to="/SignUp">Регистрация</router-link></a></div>
      </div>
    </header>
<router-view></router-view>
    <footer>
      <div class="row Footer">
        <div class="col-lg-4 col-md-4 col-xs-2 text-center" >© Научный личный кабинет, 2021</div>
        <div class="col-lg-4 col-md-4 col-xs-2 text-center">Контакты</div>
        <div class="col-lg-4 col-md-4 col-xs-2 text-center">О нас</div>
      </div>
    </footer>
  </span>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>

  .App{
    top: 0;
    position: fixed;
    left: 0;
    width: 100%;
    min-height: 7%;
    color: #874234;
  }
  header{
    font-size: 18px;
    color: #791c1c;
    top: 0;
    width: 100%;
    text-decoration: none;
    min-height: 30%;
    padding: 1.5% 1.5% 1.5% 1.5%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background-color: rgba(252, 246, 239, 0.94);
  }
  .NK{
    white-space: nowrap;
    font: bold 1em Arial, sans-serif;
    text-shadow: white 0 0 3px;
  }
  .NK a{
    text-decoration: none;
    color: #874234;
  }
  .NK a:hover{
    text-decoration: none;
    color: #bb7171;
  }

  body {
    background-image: url('./assets/library.jpg');
    background-position: center center;
    background-repeat:no-repeat;
    background-attachment:fixed ;
    background-size: cover;
  }

  footer {
    bottom: -1%;
    position: fixed;
    left: 0;
    width: 100%;
    min-height: 8%;
    color: #874234;
    background-color: rgba(253, 239, 221, 0.94);
    padding-top: 1%;
  }
</style>