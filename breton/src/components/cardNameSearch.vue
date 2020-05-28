<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
        <md-field :class="getValidationClass('form.cardName')">
            <label>Search Cards by Name</label>
            <md-input v-model="form.cardName"></md-input>
            <span class="md-helper-text">Search for Elder Scrolls Cards by name</span>
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

export default {
  name: 'CardNameSearchForm',
  mixins: [validationMixin],
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
    searchCard () {
      this.sending = true
      this.$router.push(`/card-name-search?cardName=${this.form.cardName}`)

    // Instead of this timeout, here you can call your API
    //   window.setTimeout(() => {
    //     this.cardName = `${this.form.cardName}`
    //     this.sending = false
    //     this.clearForm()
    //   }, 1500)
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

</style>
