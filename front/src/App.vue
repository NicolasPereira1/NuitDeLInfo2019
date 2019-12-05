<template>
  <v-app>
   <Header/>

    <v-content>
      <v-btn @click="action">Change texte</v-btn>
      <h1 class="bonjour">le nom est {{this.nom}} et le prenom est {{prenom}}</h1>
    </v-content>
  </v-app>
</template>

<script>
  import UserService from './services/user-service';
import Header from "./components/Header";

export default {
  name: 'App',
  components: {
    Header,
  },
  data: () => ({
      nom : UserService.nom,
      prenom : UserService.prenom
  }),
  methods : {
    action() {
      UserService.nom = "Salut nico"
    }
  }
};
</script>

<style>
.bonjour {
  color: aquamarine;
}
</style>
