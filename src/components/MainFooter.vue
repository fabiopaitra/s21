<template <template lang="pug">
footer.footer
  .container.columns
    .column.content.is-small.is-6
      h4 Navegation
      span.icon.has-text-danger
        a.fas.fa-heart
        | Features
          
    .column.content.is-small
      h4 Navegation
      p: a Features
    .column.content.is-small
      h4 Navegation
      p: a Features
    .column.content.is-small
      h4 Navegation
      p: a Features
        
    
  .container.columns
    .column.content.is-small
      p
      |© TMRD Ltd 2018. All rights reserved. Privacy  Terms TMRD Ltd is registered in England  Wales
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MainFooter extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
