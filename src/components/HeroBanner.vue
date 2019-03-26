<template <template lang="pug">
section.section.is-medium
    .columns
      .column
        h2.title Começe a crescer hoje mesmo 
        p Otimize as estratégias de marketing. Faça com que a jornada do cliente seja mais empolgante. Monitore e meça o desempenho de campanhas. Melhore o objetivo, a conversão e o ROI. Analise o sentimento do cliente e aumente o conhecimento sobre a marca. 
        nav.section
          a.button.is-danger.is-large Comece agora
      .column
        figure.image.is-16by9
          router-link(:to="{ name: 'Seo' }")
            img(src="../assets/images/marketing-dados.png", alt="Nossa missão é tornar você líder")
        

</template>

export default {

}


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>