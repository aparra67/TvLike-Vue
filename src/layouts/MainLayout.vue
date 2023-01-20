<template>
    <MenuTv />
    <slot name="home"></slot>
    <slot name="movieview"></slot>
    <slot name="pelis-all"></slot>
    <slot name="pelis-genre"></slot>
    <FooterTv />
</template>
<script>
import MenuTv from '@/components/MenuTv.vue'
import FooterTv from '@/components/FooterTv.vue'
export default {
  components: { MenuTv, FooterTv }
}
</script>
