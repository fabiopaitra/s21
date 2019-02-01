<template lang="pug">
section.section.has-background-light
    .tile.is-ancestor
      .tile.is-vertical
        .tile
          .tile.is-parent.is-3
            article.tile.is-child
              .card
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../assets/images/seo-para-alavancar-sua-pequena-empresa.jpg", alt="O que é SEO e dicas rápidas e práticas")
                .card-content
                  .media
                    .media-content
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") SEO para sua pequena empresa
                  .content
                    | Não pense que o SEO é difícil e doloroso. Confira este guia com 5 ações práticas  e veja seu tráfego crescer.
                    
            
        
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
