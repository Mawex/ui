<template>
  <v-app dark>
    <v-main class='main'>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    async mounted() {
      await this.$store.dispatch('user/updateUser')
    },
  }
</script>

<style lang='scss'>
  // Global styles

  @import "@fontsource/nunito-sans/index.css";

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--v-background-base);
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--v-background-lighten1);
  }

  .inherit--text {
    color: inherit !important;
  }

  .list-move {
    transition: 400ms;
    z-index: 1;
  }
</style>
