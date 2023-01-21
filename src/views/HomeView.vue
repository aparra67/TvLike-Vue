<template>
  <!-- La vista de 'home' se cargan los componentes que necesita la vista 'MenuTv' y 'ContentHome'-->
  <MainLayout>
    <template #home>
      <div class="container mx-auto p-3 mt-2 back">
        <h1 class="mt-2 fs-1">tvlike</h1>
        <CarouselHome />
      </div>
      <ContentHome/>
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import ContentHome from '@/components/ContentHome.vue'
import CarouselHome from '@/components/CarouselHome.vue'
export default {
  name: 'HomeView',
  components: { MainLayout, CarouselHome, ContentHome }
}
</script>
<style>
.back {
  background: #1b2557d9;
  border-radius: 10px;
}
 h1 {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 5px;
  color: rgb(209, 13, 13);
}
</style>
