<template <template lang="pug">
footer.footer.has-background-grey-lighter
  .container.columns
    .column.content.is-small.is-2
      h4 Produtos
      p: a.has-text-dark Aquisição
      p: a.has-text-dark Ativação
      p: a.has-text-dark Retenção
      p: a.has-text-dark Preços
    .column.content.is-small.is-3
      h4 Serviços e ferramentas
      p: a.has-text-dark Treinamento
      p: a.has-text-dark Ferramentas
      p: a.has-text-dark Nossos parceiros
    .column.content.is-small.is-2
      h4 Sobre
      p: a.has-text-dark Empresa
      p: a.has-text-dark Equipe
      p: a.has-text-dark Imprensa
      p: a.has-text-dark Trabalhe conosco
      p: a.has-text-dark Entre em contato
    .column.content.is-small.is-2
      h4 Produtos
      p: a.has-text-dark Blog
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
