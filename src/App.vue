<template>
  <v-app>
    <v-main>
      <v-container :fill-height="isMobile" class="container mt-5" >
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  computed: {
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
          case 'xs': return false
          case 'sm': return true
          case 'md': return true
          case 'lg': return true
          case 'xl': return true
      }
    },
  },
  async mounted() {
    await this.$store.dispatch('getUser')
    await this.$store.dispatch('getBeer')
  },
};
</script>

<style>
  .container{
    max-width: 850px!important;
  }
</style>
