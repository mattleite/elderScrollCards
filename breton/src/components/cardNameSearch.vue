<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
        <md-field :class="getValidationClass('lastName')">
            <label>Search Cards by Name</label>
            <md-input v-model="cardName"></md-input>
            <span class="md-helper-text">Search for Elder Scrolls Cards by name</span>
            <span class="md-error" v-if="!$v.form.cardName.required">The last name is required</span>
        </md-field>
        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending">Search</md-button>
        </md-card-actions>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CardNameSearchForm',
  data: () => ({
    cardName: null
  }),
  methods: {
    submit () {
      // if you want to send any data into server before redirection then you can do it here
      this.$router.push('/card-name-search?' + this.cardName)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
