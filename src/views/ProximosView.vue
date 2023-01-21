<template>
  <MainLayout>
    <template #next>
      <div class="container-fluid back m-2">
        <h1>tvlike</h1>
        <img src="../../public/no-disponible.jpg" alt="No disponible" />
      </div>
    </template>
  </MainLayout>
</template>
<script>
import MainLayout from '@/layouts/MainLayout.vue'
export default {
  components: { MainLayout }
}
</script>
<style>
.back {
  background: #1b2557d9;
  border-radius: 10px;
  padding: 7rem 0;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 80px;
  letter-spacing: 5px;
  color: rgb(209, 13, 13);
}
</style>
