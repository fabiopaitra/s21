<template lang="pug">
section.section.container.content
  h2.is-2.title.has-text-centered(data-aos='fade-up', data-aos-offset='100', data-aos-delay='0', data-aos-duration='1000' data-aos-easing='ease-in-out-quad') O que fazemos?
  .columns
    .column.is-half
      .content(v-for='item in items' :key='item')
        h3 {{ item.title }}
        p {{ item.body }}
      a.is-success.button.is-rounded(href="https://wa.me/5541999352190", target="_blank", title="Fale conosco pelo Whatsapp")  
        span Agende um café
        span.icon
          i.fab.fa-whatsapp

    .column(data-aos='fade-down', data-aos-offset='100', data-aos-delay='100', data-aos-duration='1000', data-aos-easing='ease-in-out-quad')
      figure.image
        img(src="../../assets/images/growth-hacking.png", alt="Growth Hacking na prática")
  
      
</template>

<script lang="ts">
export default {
  data() {
    return {
      items: [
        {
          title: 'Desenvolvimento de negócios',
          body:
            'Identificação das oportunidades do negócio, estratégia de implementação digital, desenho dos fluxos de trabalho e do público a ser buscado.',
        },
        {
          title: 'Desenvolvimento de landing page',
          body:
            'Orientação de domínio, descrição e conteúdo de site para aquisição de clientes. Com indicação e integração de software de gerenciamento de clientes e marketing',
        },
        {
          title: 'Desenvolvimento de website',
          body:
            'Definição de posicionamento digital para maior performance, análise de palavras-chave de acesso no mercado atual, orientação de domínio, descrição e conteúdo de site – com análise da experiência do consumidor. Com integração e softwares de gestão.',
        },
        {
          title: 'Desenvolvimento de ecommerce',
          body:
            'Definição de posicionamento digital para maior performance, análise de palavras-chave de acesso no mercado atual, orientação de domínio, descrição e conteúdo de site – com análise da experiência do consumidor. Com integração e softwares de gestão e operação.',
        },
        {
          title: 'Inbound Sales',
          body:
            'Desenho da estratégia de vendas, com apresentação dos fluxos de trabalho e da geração de conteúdo por estágio do cliente no ciclo de vendas.',
        },
        {
          title: 'Customer Success',
          body:
            'Desenho da do fluxo de atendimento ao cliente, com integração aos softwares de gestão e automação do processo. Definição dos indicadores e de como medi-los.',
        },
        {
          title: 'Marketing Digital',
          body:
            'Desenho da estratégia de melhor posicionamento digital e levantamento dos investimentos necessários em campanhas. Desenvolvimento de guia de linguagem, voz, e layout das campanhas, com pós-produção dos conteúdos e gestão das mídias.',
        },
      ],
    };
  },
  name: 'chartsWhat',
};
</script>


