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
                      img(src="../../assets/images/atracao.png", alt="Nossa missão é tornar você líder")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-grey-light AQUISIÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Aumente seu tráfego
                  .content
                    | Encontre novos prospects sem desperdiçar investimento em canais saturados e assertivos para seu produto. Impulsione o ROI da sua startup graças a um melhor desempenho no direcionamento de campanhas.
          .tile
          .tile.is-parent.is-4
            article.tile.is-child
              .card
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../../assets/images/ativacao.png", alt="Nossa missão é tornar você líder")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-grey-light ATIVAÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Fechar e gerenciar leads
                  .content
                    | Conecte com seus leads criando conteúdo mais atraente e anúncios mais eficazes orientados por dados. Defina o modelo de atribuição multicanal e automatize seu marketing com leadscore preditivo.
          .tile
          .tile.is-parent.is-4
            article.tile.is-child
              .card
                .card-image
                  figure.image.is-5by4
                    router-link(:to="{ name: 'Seo' }")
                      img(src="../../assets/images/retencao.png", alt="Nossa missão é tornar você líder")
                .card-content
                  .media
                    .media-content
                      p.subtitle.is-6.has-text-grey-light RETENÇÃO
                      p.title.is-4
                        router-link(:to="{ name: 'Seo' }") Melhore a retenção do seu cliente
                  .content
                    | Seja pioneiro diariamente com uma análise  de ponta a ponta criada para transformar toda a sua startup.
</template>

<script lang="ts">
export default {
  name: 'benefits',
};
</script>
