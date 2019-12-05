<template>
    <v-app-bar
            v-if="display"
            app
            color="red"
              dark
    >
        <div class="d-flex align-center">
        <v-btn
           to='/'
           text
        >
        Le crous pour tous
        </v-btn>
        </div>

        <v-spacer></v-spacer>

        <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="red"
          dark
          v-on="on"
        >
          Information
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :to="item.link"
        >
          <v-list-item-title >{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-spacer></v-spacer>
    <v-btn
        color = "red"
        dark
        v-on="on"
        @click="redirectForum"
    >
    Forum
    </v-btn>   

        <v-spacer></v-spacer>
        <v-btn
                @click="redirect"
                target="_blank"
                text
        >
            <span class="mr-2">Se connecter</span>
            <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        name: "Header",
        data : () => ({
            display : true,
             items: [
                { title: 'Familial' , link : '/familial'},
                { title: 'Santé' , link: '/sante'},
                { title: 'Economique' , link: '/economique'},
                { title: 'Logement' , link: '/logement'},
                { title : 'Administratif' , link: '/administratif'}
            ],
        }),
        methods: {
            redirect(){
                this.$router.push("/login");
            },
            redirectForum(){
                this.$router.push("/forum");
            }
        }
    }
</script>

<style scoped>

</style>
