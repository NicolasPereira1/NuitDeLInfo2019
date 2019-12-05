<template>
        <div id="app" align="center">
            <h1>Bienvenue sur le Crous pour tous</h1>
            <p> Si vous avez des difficultés vous pouvez consulter ce site pour trouver de l'aide</p>
            <Article description="Vous pouvez demander de l'aide à la CAF pour payer vos loyers" title="APL" subtitle="Obtenir de l'aide pour votre loyer"></Article>
        </div>
</template>

<script>

import Article from "./Article";
export default {
  name: 'Accueil',
  components: {
      Article
  },
  data: () => ({

  }),
  methods : {

  }
};
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
