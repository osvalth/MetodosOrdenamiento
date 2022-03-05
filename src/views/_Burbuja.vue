<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-10">
        <h1>Metodo de burbuja</h1>
        <div class="input-group mb-3">
          <div class="input-group">
            <input v-model="numeroA" type="number" class="form-control" placeholder="Ingesar números" aria-label="Ingesar números" aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary mx-2" type="button" @click="btnAgregar">Agregar</button>
            </div>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary mx-2" type="button" @click="btnOrdenar">Ordenar</button>
            </div>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary mx-2" type="button" @click="btnLimpiar">Limpiar</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <span class="colorRED" v-for="a in arrayC" :key="a.id">
      <h2>
        {{ a }}
      </h2>
    </span>
    <div class="col-12 d-flex justify-content-center">
      <ul class="list-group list-group-horizontal" id="listAgregar" >

      </ul>
    </div>
    <div class="col-12 d-flex flex-column justify-content-center bd-highlight mb-3 mt-3" id="listOrdenar">

    </div>


  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { useStore } from 'vuex';
export default {
  name: "burbuja",
  setup(){
    const store = useStore();
    const numeroA = ref(null);
    //let numeroB = ref(null);
    const arrayC = reactive([]);
    function btnAgregar() {
      if (!numeroA) {
        console.log("Nada por el momento")
      } else {
        console.log(numeroA)
        //numeroB.value = numeroA.value
        arrayC.push(numeroA.value)
      }
    }
    //btnAgregar();
    return {
      numeroA,
      btnAgregar,
      //numeroB,
      arrayC
    };
  },

}
</script>

<style scoped>
.colorRED{

}
</style>