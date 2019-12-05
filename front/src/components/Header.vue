<template>
    <v-app-bar
            v-if="display"
            app
            color="red"
            dark
    >
        <div class="d-flex align-center">
           Nom du site{{nom}}
        </div>

        <v-spacer></v-spacer>

        <v-btn
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
                text
        >
            <span class="mr-2">Se connecter</span>
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    import UserService from '../services/user-service'
    export default {
        name: "Header",
        data : () => ({
            display : true,
            nom : UserService.nom,
            prenom : UserService.prenom
        })
    }
</script>

<style scoped>

</style>
