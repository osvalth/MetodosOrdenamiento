<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <ul class="margen-down navbar-nav me-auto mb-2 mb-lg-0">
        <!--   INICIO DE LOS ITEMS     -->
        <li class="nav-item">
<!--          <router-link class="navbar-brand" to="/">home</router-link>-->
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/burbuja">Método de burbuja</router-link>
        </li>
        <!--   FIN DE LOS ITEMS     -->
      </ul>
    </div>
  </div>
  <router-view/>
</template>

<style>

</style>
