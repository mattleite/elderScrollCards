<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
        <md-field :class="getValidationClass('form.cardName')">
            <label>Search Cards by Name</label>
            <md-input v-model="form.cardName"></md-input>
            <span class="md-error" v-if="!$v.form.cardName.required">The Card Name is required</span>
        </md-field>
        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Search</md-button>
        </md-card-actions>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  minLength
} from 'vuelidate/lib/validators'
import cardsMixin from '@/mixins/cardsMixin'

export default {
  mixins: [validationMixin, cardsMixin],
  data () {
    return {
      form: {
        cardName: null
      },
      sending: false
    }
  },
  validations: {
    form: {
      cardName: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    getValidationClass (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    clearForm () {
      this.$v.$reset()
      this.form.cardName = null
    },
    async searchCard () {
      if (this.$route.params.cardName !== this.form.cardName) {
        this.dumpCards()
        this.sending = true
        await this.$router.push(`/card-name-search/${this.form.cardName}`).then(() => {
          this.loadMoreCards(this.form.cardName, this.$store.state.page).then(() => {
            this.sending = false
          })
        })
      }
    },
    validateUser () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.searchCard()
      }
    }
  }
}

</script>

<style scoped lang="scss">

.md-button{
    border: 1px solid #fff;
    color: #fff !important;
}
.md-input{
    border: 1px solid #000;
    color: #fff;
    margin-right:15px;
}

</style>
