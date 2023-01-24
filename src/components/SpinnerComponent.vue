<template>
  <div class="spinner-content">
    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <h3 class="mt-2">Cargando...</h3>
  </div>
</template>
<style scoped>
.spinner-content {
  width: 100vw;
  height: 100vmin;
  background: rgba(39, 70, 110, 0.733);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
