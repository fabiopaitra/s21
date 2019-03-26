<template lang="pug">
section.section.has-background-light
  header
    .tile.is-ancestor
      .tile.is-vertical
        .tile
          .tile.is-parent.is-4
            article.tile.is-child
              .card
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../assets/images/atracao.png", alt="Nossa missão é tornar você líder")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-grey-light AQUISIÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Tornar você líder é nossa missão
                  .content
                    | Alinhe as estratégias para analisar as evoluções do mercado, o sentimento do cliente e as tendências. Impulsione o ROI de marketing graças a um melhor desempenho no direcionamento de campanhas.
          .tile
          .tile.is-parent.is-4
            article.tile.is-child
              .card
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../assets/images/ativacao.png", alt="Nossa missão é tornar você líder")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-grey-light ATIVAÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Prepare-se para conquistar seu espaço na era digital
                  .content
                    | Amplifique seus canais de aquisição criando conteúdo mais atraente e anúncios mais eficazes com insights orientados por dados.
          .tile
          .tile.is-parent.is-4
            article.tile.is-child
              .card
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../assets/images/retencao.png", alt="Nossa missão é tornar você líder")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-grey-light RETENÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Faça a jornada do cliente mais empolgante
                  .content
                    | Seja pioneiro diariamente com uma análise  de ponta a ponta criada para transformar toda a sua startup.
                    
            
        
          //- .tile.is-parent.is-vertical.is-3
            article.tile.is-child
              .card
                .card-image
                  figure.image.is-3by1
                    img(src="../assets/images/jeff.jpg", alt="Placeholder image")
                .card-content
                  .media
                    .media-content
                      p.title.is-4 Novosss X Retro
                      p.subtitle.is-6 @johnsmith
                  .content
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    | Phasellus nec iaculis mauris. 
                    a @bulmaio
                    | .
                    a(href="#") #css
                    a(href="#") #responsive
                    br
                    time(datetime="2016-1-1") 11:09 PM - 1 Jan 2016
            article.tile.is-child
              .card
                .card-image
                  figure.image.is-3by1
                    img(src="../assets/images/paris.jpg", alt="Placeholder image")
                .card-content
                  .media
                    .media-content
                      p.title.is-4 Novosss X Retro
                      p.subtitle.is-6 @johnsmith
                  .content
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    | Phasellus nec iaculis mauris. 
                    a @bulmaio
                    | .
                    a(href="#") #css
                    a(href="#") #responsive
                    br
                    time(datetime="2016-1-1") 11:09 PM - 1 Jan 2016
          
            article.tile.is-child
              .card
                .card-image
                  figure.image.is-square
                    img(src="../assets/images/politics.jpg", alt="Placeholder image")
                .card-content
                  .media
                    .media-content
                      p.title.is-4 Novosss X Retro
                      p.subtitle.is-6 @johnsmith
                  .content
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    | Phasellus nec iaculis mauris. 
                    a @bulmaio
                    | .
                    a(href="#") #css
                    a(href="#") #responsive
                    br
                    time(datetime="2016-1-1") 11:09 PM - 1 Jan 2016
          //- .tile.is-parent.is-vertical.is-3
            article.tile.is-child
              .card
                .card-image
                  figure.image.is-square.overflow
                    img#room(src="../assets/images/room.jpg", alt="Placeholder image")
                .card-content
                  .media
                    .media-content
                      p.title.is-4 Novosss X Retro
                      p.subtitle.is-6 @johnsmith
                  .content
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    | Phasellus nec iaculis mauris. 
                    a @bulmaio
                    | .
                    a(href="#") #css
                    a(href="#") #responsive
                    br
                    time(datetime="2016-1-1") 11:09 PM - 1 Jan 2016

            article.tile.is-child
              .card
                .card-image
                  figure.image.is-4by5
                    img(src="../assets/images/hp.jpg", alt="Placeholder image")
                .card-content
                  .media
                    .media-content
                      p.title.is-4 Novosss X Retro
                      p.subtitle.is-6 @johnsmith
                  .content
                    | Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    | Phasellus nec iaculis mauris. 
                    a @bulmaio
                    | .
                    a(href="#") #css
                    a(href="#") #responsive
                    br
                    time(datetime="2016-1-1") 11:09 PM - 1 Jan 2016
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HomeTiles extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
