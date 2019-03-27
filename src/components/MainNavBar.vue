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
        a.navbar-burger.burger(role="button", aria-label="menu", aria-expanded="false", data-target="navbarBasicExample")
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      #navbarBasicExample.navbar-menu
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




  </template>

export default {
  data() {
    return {
      hbspt.forms.create: {
        'portalId': '5403699',
        'formId': "03cde20b-a4ae-47b5-a8bf-085497cd349d"
      }
    }
  },
}


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.subtitle {
  color: white;
}
</style>