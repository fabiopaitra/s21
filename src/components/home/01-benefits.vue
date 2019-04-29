<template lang="pug">
section.section.has-background-light
  header
    h2.title.has-text-centered(data-aos='fade', data-aos-offset='100', data-aos-delay='0', data-aos-duration='1000' data-aos-easing='ease-in-out-quad') Nossos serviços
    .tile.is-ancestor
      .tile.is-vertical
        .tile
          .tile.is-parent.is-4
            article.tile.is-child
              .card(data-aos='fade-up', data-aos-offset='200', data-aos-delay='0', data-aos-duration='1000', data-aos-easing='ease-in-out-quad')
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../../assets/images/atracao.png", alt="Nossa missão é tornar você líder")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-grey-light AQUISIÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Tornar você líder no mercado é a nossa missão.
                  .content
                    | Alinhe as estratégias para alcançar mais leads, acompanhando as tendências do mercado e a resposta dos clientes. Amplifique seus canais de aquisição criando conteúdos mais atraentes e anúncios mais eficazes. Impulsione o ROI de marketing graças à um melhor desempenho no direcionamento de campanhas e a equipe de vendas no processo de conversão.
          .tile
          .tile.is-parent.is-4
            article.tile.is-child
              .card(data-aos='fade-up', data-aos-offset='200', data-aos-delay='200', data-aos-duration='1000', data-aos-easing='ease-in-out-quad')
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../../assets/images/ativacao.png", alt="Nossa missão é tornar você líder")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-grey-light RETENÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Faça a jornada do cliente mais empolgante
                  .content
                    | Entenda em tempo real como está a satisfação e a jornada dos seus clientes. Receba orientação para implantação de melhorias e valide suas estratégias em Customer Success. Tornar suas vendas previsíveis, sem taxa de rejeição e seus clientes satisfeitos são as nossas metas. Defina o modelo de atribuição multicanal e automatize seu marketing com leadscore preditivo. 
          .tile
          .tile.is-parent.is-4
            article.tile.is-child
              .card(data-aos='fade-up', data-aos-offset='200', data-aos-delay='400', data-aos-duration='1000', data-aos-easing='ease-in-out-quad')
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../../assets/images/retencao.png", alt="Nossa missão é tornar você líder")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-grey-light AMPLIAÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Prepare-se para expandir sua receita.
                  .content
                    | Capacite sua equipe sobre a perspectiva de análise de dados para oferecer à seus clientes mais soluções e aumentar o engajamento de seus consumidores. Aprenda como utilizar KPIs a seu favor e criar alarmes rastreadores que possibilitam a ampliação de suas vendas através de uma base de clientes já fidelizados. Implemente a culta Customer Centric validando os direcionamentos obtidos.

</template>

<script lang="ts">
export default {
  name: 'benefits',
};
</script>
