<template lang="pug">
section.section.has-background-dark.content
    .columns.has-text-centered
      .column
        h1.title.has-text-white-ter O que é Marketing Digital?
    .columns
      .column
          figure.image
            img(src="../../assets/images/grafico-exponencial_1.png", alt="Growth Hacking na prática")
      .column.has-text-white-ter
        h4.subtitle.has-text-grey-light Marketing digital é encontrar o canal de aquisição do seu melhor cliente e investir neste canal. Se existe um take away desta página, é este.
        p Entretanto, estes canais estão ficando saturados e dependendo do nicho, é importante ser criativo para aumentar o ROI e entender a intenção do cliente por trás dos dados que ferramentas de analytics como Google Analytics, Hotjar e Hubspot oferecem.
        p Além da preocupação de topo de funil para aquisição de novos leads, uma agência de marketing digital moderna, chamado de growth marketing ou growth hacking, deve ter o pensamento estratégico voltado a todos os pontos de contato do cliente com a marca.
        p Começar pela pesquisa de mercado é importante para avaliar o posicionamento da marca, os erros e acertos dos concorrentes e principalmente se há uma demanda latente pelo produto. Estes dados ajudam a definir as metas da empresa a longo, médio e curto prazo.
        p O produto participa da estratégia do marketing. O market fit acontece quando o produto é considerado maduro, com a qualidade esperada e aderência da oferta ao público consumidor.
        p Agora, a agência de marketing digital pode entender o mercado e o produto para enfim gerar valor e conexão. Focar nos benefícios percebidos através de uma pesquisa, escrever um texto interessante para cativar e prender o interesse do público, se preocupar de forma genuína como resolver o ponto de dor do cliente. Esse deve ser o papel na comunicação do marketing.
        a(href="https://www.facebook.com/messages/t/s21digital", target="_blank", title="Fale conosco no Facebook messenger").button.is-outlined.is-danger.is-medium
          span Agende um café
          span.icon
            i.fab.fa-facebook-messenger
</template>

<script>
export default {
  name: 'reciprocity',
  props: {
    variant: {
      type: String,
      optional: true,
      default: 'primary',
    },
    icon: {
      type: String,
      default: '',
    },
    header: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    thirdOptionItems: {
      type: Array,
      default: () => [],
    },
    secondOptionButton: {
      type: Object,
      default: () => ({}),
    },
    hubspotFormId: {
      type: String,
      default: '7bc3121b-e5fc-4cac-98de-7a86bfeac163',
    },
    submitButtonClass: {
      type: String,
      default: 'button is-danger is-fullwidth is-outlined is-inverted',
    },
    hubspotPortalId: {
      type: String,
      default: '5403699',
    },
    hubspotFormOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.$nextTick(() => {
      // Documentation: https://developers.hubspot.com/docs/methods/forms/advanced_form_options
      const options = {
        portalId: this.hubspotPortalId,
        target: `#hubspot-form-${this.hubspotFormId}`,
        formId: this.hubspotFormId,
        formInstanceId: new Date().getTime(),
        cssClass: 'form-group',
        // submitButtonClass: this.submitButtonClass,
        ...this.hubspotFormOptions,
      };

      // Prepare GTM
      window.dataLayer = window.dataLayer || [];

      window.hbspt.forms.create({
        ...options,
        onBeforeFormInit: () => {
          this.$emit('onBeforeFormInit', options);

          // Fire GTM
          window.dataLayer.push({
            event: 'forms-on-before-submit',
          });
        },
        onFormReady: () => {
          this.$emit('onFormReady', options);

          // Fire GTM
          window.dataLayer.push({
            event: 'forms-on-form-ready',
          });
        },
        onFormSubmit: () => {
          this.$emit('onFormSubmit', options);

          // Fire GTM
          window.dataLayer.push({
            event: 'forms-on-form-submit',
          });
        },
      });
    });
  },
};
</script>
