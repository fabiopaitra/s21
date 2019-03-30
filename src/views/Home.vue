<template lang="pug">
  div
    MainNavBar
    HomeTiles
    HeroBanner
    MainCtaFooter
    MainFooter

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainNavBar from '@/components/MainNavBar.vue'; // @ is an alias to /src
import HeroBanner from '@/components/HeroBanner.vue'; // @ is an alias to /src
import HomeTiles from '@/components/HomeTiles.vue'; // @ is an alias to /src
import MainCtaFooter from '@/components/MainCtaFooter.vue'; // @ is an alias to /src
import MainFooter from '@/components/MainFooter.vue'; // @ is an alias to /src

@Component({
  components: {
    MainNavBar,
    HeroBanner,
    HomeTiles,
    MainCtaFooter,
    MainFooter,
  },
})
export default class Home extends Vue {}
</script>
