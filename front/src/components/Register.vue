<template>
    <v-container>
        <v-flex xs6>
            <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
            >
                <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="Pseudo"
                        required
                ></v-text-field>

                <v-text-field
                        v-model="email"
                        type="password"
                        :rules="emailRules"
                        label="Mot de passe"
                        required
                ></v-text-field>

                <v-select
                        v-model="select"
                        :items="items"
                        :rules="[v => !!v || 'Item is required']"
                        label="Région"
                        required
                ></v-select>
                <v-btn
                        :disabled="!valid"
                        class="mr-4"
                        @click="validate"
                >
                    S'inscrire
                </v-btn>
                <router-link to="/login">Vous avez déja un compte</router-link>
            </v-form>
        </v-flex>
    </v-container>
</template>

<script>
    export default {
        name: "Register",
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: [
                'GUADELOUPE',
                'MARTINIQUE',
                'GUYANE',
                'LA REUNION',
                'MAYOTTE',
                'ILE-DE-FRANCE',
                'CENTRE-VAL DE LOIRE',
                'BOURGOGNE-FRANCHE-COMTE',
                'NORMANDIE',
                'HAUTS-DE-FRANCE',
                'GRAND EST',
                'PAYS DE LA LOIRE',
                'BRETAGNE',
                'NOUVELLE-AQUITAINE',
                'OCCITANIE',
                'AUVERGNE-RHONE-ALPES',
                'PROVENCE-ALPES-COTE',
                'CORSE'
            ],
        }),

        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            },
            register() {
                this.$router.push('/register');
            }
        },
    }
</script>

<style scoped>

</style>
