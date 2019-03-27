<template <template lang="pug">
footer.footer.has-background-grey-lighter
  .container.columns
    .column.content.is-small
      h4 Aumente seu tráfego
      p: a.has-text-dark Mídia de Performance
      p: a.has-text-dark SEO
      p: a.has-text-dark Redes Sociais
      p: a.has-text-dark Otimização de conteúdo
    .column.content.is-small
      h4 Conecte com seus leads
      p: a.has-text-dark Encontre novos prospects
      p: a.has-text-dark Régua de automação
      p: a.has-text-dark Lead Scoring
      p: a.has-text-dark Remarketing
    .column.content.is-small
      h4 Fechar e gerenciar leads
      p: a.has-text-dark Automação de vendas
      p: a.has-text-dark Gerenciamento de pipelines
      p: a.has-text-dark Programa de Rewards
      p: a.has-text-dark Cross e Up Selling
      
    .column.content.is-small
      h4 Suporte e ferramentas
      p: a.has-text-dark Ferramentas
      p: a.has-text-dark Empresa e equipe
      p: a.has-text-dark Imprensa
      p: a.has-text-dark Trabalhe conosco
      
    .column.content.is-small.is-3
      span.icon.is-large
        a(href="https://facebook.com/s21digital", target="_blank", title="Conheça o 21digital Facebook")
          i.fab.fa-facebook.fa-2x
      span.icon.is-large  
        a(href="https://www.instagram.com/s21digital/", target="_blank", title="Conheça o s21digital Instagram" )
          i.fab.fa-instagram.fa-2x
      span.icon.is-large  
        a(href="https://twitter.com/s21digital", target="_blank", title="Conheça o s21digital Twitter")
          i.fab.fa-twitter.fa-2x
      span.icon.is-large  
        a(href="https://www.facebook.com/messages/t/s21digital", target="_blank", title="Fale conosco no Facebook messenger")
          i.fab.fa-facebook-messenger.fa-2x
      
  hr.container    
  .container.columns
    .column.content.is-small.is-5
      p Licenciado sob a 
        a.has-text-dark(href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.pt_BR", target="_blank", title="Creative Commons International Attribuition 4.0") Creative Commons Internacional Attribution 4.0.
    .columns.container.is-mobile
      .column.content.is-small.is-5
        p Política de privacidade
      .column.content.is-small
        p Termos de uso

        
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MainFooter extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
