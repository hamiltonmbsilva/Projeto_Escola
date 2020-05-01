<template>
  <div>
    <div class="divTitulo">
      <h2>{{texto}}</h2>
      <div class="voltar">
            <slot></slot>
        <button v-show="btnVoltar" class="btn btnVoltar" @click="voltar()">Voltar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    texto: String,
    btnVoltar: Boolean
  }, 
  methods:{
      voltar(){
          this.$router.back();
      }
  }
};
</script>

<style scoped>
.voltar {
  width: 50%;
  position: absolute;
  margin-top: 15px;
}

.btnVoltar {
  float: right;
  background-color: rgb(199, 199, 199);
}

.divTitulo{
    display: flex;
    width: 50%;
    margin-bottom: 30px;
}
</style>

