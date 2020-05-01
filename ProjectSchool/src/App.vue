<template>
  <div id="app">
    <Nav></Nav>
    <div class="marginPrincipal">
      <router-view :key="$route.fullPath"></router-view>
    </div>
   
  </div>
</template>

<script>
// import Alunos from './components/Aluno/Alunos'
// import Professor from './components/Professor/Professor'
// import Sobre from './components/Sobre/Sobre'
import Nav from './components/_nav/Nav'

export default {
  name: 'app',
  components: {
    // Alunos,
    // Professor,
    // Sobre,
    Nav
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=montserrat:400, 700");
body{
  background-color: #eee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  justify-items: center;
}

body, html{
  margin: 0;
  height: 100%;
}

.marginPrincipal{
  width: 50%;
  margin: auto;
}


#app {
  width: 100%;
}

.btn_Danger{
  background-color: #fa4430 !important;
}

.btn{
  
  padding: 10px 20px !important;
  cursor: pointer !important;
  border: 1px solid #000 !important;
  color: white !important;
  font-weight: bold !important;
  border-radius: 5px !important;
  border-bottom: 3px solid black !important;
  margin-bottom: 20px;
}

.btn:hover{
  text-shadow: 1px 1px 1px black !important;
  margin-top: 3px !important;
  border-bottom: 1px solid black !important;
}

table{
  margin: 0px;
  padding: 0px;
  list-style-type: none;
  widows: 100%;
  
}

table tr td{
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  margin-bottom: 2px;
  color: #3e5252;
}

table thead th{
  background-color: rgb(184,208,216) !important; 
  font-size: 1.2em;
  padding: 10px 0px;
  text-align: center !important;
}

.colPequeno{
  width: 5%;
  text-align: right;
  background-color: rgb(125, 217, 245);
  font-weight: bold;
  border: 3px solid #fff;
}

</style>
