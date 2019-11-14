<template lang="pug">
.hero.is-primary.is-bold.is-fullheight
  .hero-head
    nav.navbar(role="navigation", aria-label="main navigation")
      .navbar-brand
        router-link.navbar-item(:to="{ name: 'Home' }")
          svg(xmlns="http://www.w3.org/2000/svg", width="44", height="63", viewBox="0 0 44 63")
            text#s_21(data-name="s21", transform="translate(0 30)", fill="#ee2b5c", font-size="39", font-family="Helvetica-Bold, Helvetica", font-weight="700")
              tspan(x="0", y="0") s
              tspan(x="0", y="24") 21
  .hero-body
    .container
      p.title.is-size-1.is-spaced
        | Como criar um site que gera
        span.gradient negócios?
      h1.subtitle
        | Agência de Marketing Digital, com metodologia Growth Hacking em Curitiba, que ajuda negócios a alcançarem um crescimento rápido e sustentável desde o desenvolvimento de web sites a gestão de mídia Google e Facebook.
      .item-level(:id="`hubspot-form-${hubspotFormId}`")


  </template>

<script>
export default {
  name: 'hero',
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
      default: '03cde20b-a4ae-47b5-a8bf-085497cd349d',
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



<style lang="scss" scoped>
.subtitle {
  color: white;
}
</style>