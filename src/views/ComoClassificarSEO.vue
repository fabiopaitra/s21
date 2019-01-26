<template lang="pug">
  div
    HeroPost
    BlogSection
    MainFooter

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeroPost from "@/components/HeroPost.vue"; // @ is an alias to /src
import BlogSection from "@/components/BlogSection.vue"; // @ is an alias to /src
import MainFooter from "@/components/MainFooter.vue"; // @ is an alias to /src

@Component({
  components: {
    HeroPost,
    BlogSection,
    MainFooter
  }
})
export default class ComoClassificarSEO extends Vue {}
</script>
