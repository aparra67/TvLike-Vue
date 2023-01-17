<template>
  <!-- La vista de 'home' se cargan los componentes que necesita la vista 'MenuTv' y 'ContentHome'-->
  <div class="home">
    <MenuTv/>
    <ContentHome/>
    <FooterTv/>
  </div>
</template>

<script>
import MenuTv from '@/components/MenuTv.vue'
import ContentHome from '@/components/ContentHome.vue'
import FooterTv from '@/components/FooterTv.vue'
export default {
  name: 'HomeView',
  components: { MenuTv, ContentHome, FooterTv }
}
</script>
