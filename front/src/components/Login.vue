<template>
    <v-container>
        <v-flex xs6              >
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

                <v-btn
                        :disabled="!valid"
                        color="primary"
                        class="mr-4"
                        @click="validate"
                >
                    Se connecter
                </v-btn>
                <v-btn
                        class="mr-4"
                        @click="register"
                >
                    S'inscrire
                </v-btn>
            </v-form>
        </v-flex>
    </v-container>
</template>

<script>

export default {
  name: 'Login',
  components: {
  },
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
};
</script>

<style>
    .formulaire {
        width: 50%;
    }
</style>
