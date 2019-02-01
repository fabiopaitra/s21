<template <template lang="pug">
footer.footer
  //- .container.columns
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
      p O conteúdo do site s21digital.com está licenciado sob a 
        a(href="https://creativecommons.org/licenses/by/4.0/deed.pt_BR", target="_blank", title="Creative Commons International Attribuition 4.0") Creative Commons Internacional Attribution 4.0.
    
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MainFooter extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
