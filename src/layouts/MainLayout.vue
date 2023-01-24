<template>
  <div class="content-main">
    <MenuTv />
    <slot name="home"></slot>
    <slot name="movieview"></slot>
    <slot name="pelis-all"></slot>
    <slot name="pelis-genre"></slot>
    <slot name="next"></slot>
    <FooterTv />
  </div>
</template>
<script>
import MenuTv from '@/components/MenuTv.vue'
import FooterTv from '@/components/FooterTv.vue'
export default {
  components: { MenuTv, FooterTv }
}
</script>
<style>
.content-main {
  display: flex;
  flex-direction: column;
}

</style>
