/<template lang="pug">
section.section.container
  form(name='contact', method='POST', data-netlify='true')
    .field.has-addons
      .control.has-icons-left.has-icons-right
          input.input(type='text', placeholder='Coloque sua URL (ex: uber.com)')
          span.icon.is-small.is-left
            i.fas.fa-globe
      .control
        button.button.is-primary
          | Analiste meu website
    
    

      
</template>

<script lang="ts">
export default {
  name: 'faq',
};
</script>
