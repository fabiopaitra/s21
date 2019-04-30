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
                      img(src="../../assets/images/atracao.png", alt="Growth Hacking para atrair mais usuários")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-primary AQUISIÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Otimize investimentos e torne-se líder de mercado 
                  .content
                    | Utilize técnicas de 
                    em Growth Hacking 
                    | para alcançar mais 
                    em leads
                    |, acompanhando as tendências do mercado e a resposta dos clientes. Amplifique canais de aquisição criando conteúdos atraentes e anúncios eficazes. Impulsione o 
                    em ROI 
                    | de marketing digital graças à um melhor desempenho no direcionamento de campanhas e da equipe de vendas no processo de conversão.
          .tile
          .tile.is-parent.is-4
            article.tile.is-child
              .card(data-aos='fade-up', data-aos-offset='200', data-aos-delay='200', data-aos-duration='1000', data-aos-easing='ease-in-out-quad')
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../../assets/images/ativacao.png", alt="Faça experimentos de Growth Marketing para validar seu produto")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-primary RETENÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Faça a jornada do usuário empolgante
                  .content
                    | Entenda em tempo real como está a satisfação e jornada dos seus clientes. Receba orientação para implantação de melhorias e valide suas estratégias em 
                    em Customer Success.
                    | Tornar suas vendas previsíveis, sem taxa de evasão e seus clientes satisfeitos são as nossas metas. Defina o modelo de atribuição multicanal e automatize seu marketing digital com leadscore preditivo. 
          .tile
          .tile.is-parent.is-4
            article.tile.is-child
              .card(data-aos='fade-up', data-aos-offset='200', data-aos-delay='400', data-aos-duration='1000', data-aos-easing='ease-in-out-quad')
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../../assets/images/retencao.png", alt="Realize Cross selling e upsell para aumentar seu faturamento")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-primary AMPLIAÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Prepare-se para expandir sua receita
                  .content
                    | Capacite sua equipe sobre a perspectiva de análise de dados para oferecer à seus usuários mais soluções e aumentar o engajamento de consumidores. Aprenda como utilizar 
                    em KPIs 
                    | a seu favor e crie automações que possibilitem a ampliação de suas vendas através de uma base de usuários já fidelizados. Implemente a cultura 
                    em Customer Centric 
                    | validando os direcionamentos obtidos.

</template>

<script lang="ts">
export default {
  name: 'benefits',
};
</script>
