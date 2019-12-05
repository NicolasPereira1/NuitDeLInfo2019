<template>
    <v-container>
        <v-flex xs6>
            <v-card>
                <v-card-title>{{title}}</v-card-title>
                <v-card-subtitle>{{subtitle}}</v-card-subtitle>
                <v-card-text>{{description}}</v-card-text>
            </v-card>
        </v-flex>
    </v-container>
</template>

<script>
    export default {
        name: "Article",
        props : {
            title: String,
            subtitle: String,
            description: String
        }
    }
</script>

<style scoped>

</style>
