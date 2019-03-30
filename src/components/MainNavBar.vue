<template <template lang="pug">
header.hero.is-fullheight.is-primary.is-bold
  .hero-head
    nav.navbar(role="navigation", aria-label="main navigation")
      .navbar-brand
        router-link.navbar-item(:to="{ name: 'Home' }")
          svg(xmlns="http://www.w3.org/2000/svg", width="44", height="63", viewBox="0 0 44 63")
            text#s_21(data-name="s21", transform="translate(0 30)", fill="#ee2b5c", font-size="39", font-family="Helvetica-Bold, Helvetica", font-weight="700")
              tspan(x="0", y="0") s
              tspan(x="0", y="24") 21
        a.navbar-burger(role='button', data-target='navMenu', aria-label='menu', aria-expanded='false')
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      #navMenu.navbar-menu
        .navbar-end.container
          a.navbar-item Aquisição
          a.navbar-item Ativação
          a.navbar-item Retenção
  .hero-body
    .container
      h2.title.is-size-1.is-spaced
        | Lidere com 
        span.has-text-danger dados
      h1.subtitle
        | Melhore o objetivo, a conversão e o ROI. Analise o sentimento do cliente e aumente o conhecimento sobre a marca.
      .level
        .level-item
          input.input(type='text', placeholder='Receba um relatório gratuito do seu site')
        .level-right.section
          input.button.is-danger.is-fullwidth.is-outlined.is-inverted(type='submit', value='Analise meu site')
  //- .hero-bottom
    .container
      .level
        .item-level.is-centered
          a(href="")
            svg(xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', width='18px', height='28px')
              path(fill-rule='evenodd', fill='rgb(255, 255, 255)', d='M16.169,2.687 C14.585,0.904 12.173,0.000 9.000,0.000 C5.827,0.000 3.415,0.904 1.831,2.687 C0.238,4.479 -0.000,6.580 -0.000,7.673 L-0.000,20.328 C-0.000,21.420 0.238,23.520 1.831,25.313 C3.415,27.096 5.827,28.000 9.000,28.000 C12.173,28.000 14.585,27.096 16.169,25.313 C17.762,23.520 18.000,21.420 18.000,20.328 L18.000,7.673 C18.000,6.580 17.762,4.479 16.169,2.687 ZM9.000,9.755 C8.342,9.755 7.808,9.242 7.808,8.611 L7.808,6.159 C7.808,5.528 8.342,5.015 9.000,5.015 C9.658,5.015 10.192,5.528 10.192,6.159 L10.192,8.611 C10.192,9.242 9.658,9.755 9.000,9.755 ZM17.059,20.328 C17.059,21.458 16.670,27.097 9.000,27.097 C1.330,27.097 0.941,21.458 0.941,20.328 L0.941,7.673 C0.941,6.566 1.315,1.138 8.529,0.911 L8.529,4.163 C7.578,4.369 6.866,5.185 6.866,6.159 L6.866,8.611 C6.866,9.585 7.578,10.401 8.529,10.607 L8.529,14.318 C8.529,14.568 8.740,14.770 9.000,14.770 C9.260,14.770 9.471,14.568 9.471,14.318 L9.471,10.607 C10.422,10.401 11.134,9.585 11.134,8.611 L11.134,6.159 C11.134,5.185 10.422,4.369 9.471,4.163 L9.471,0.911 C16.685,1.138 17.059,6.566 17.059,7.673 L17.059,20.328 Z')


  </template>

export default {
  data() {
    methods {
     
    }
  },
}


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.subtitle {
  color: white;
}
</style>