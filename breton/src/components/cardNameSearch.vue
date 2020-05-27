<template>
  <div>
    <md-field>
      <label>Search by Name</label>
      <md-input v-model="cardName"></md-input>
      <span class="md-helper-text">Helper text</span>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'TextFields',
    data: () => ({
      cardName: null
    })
  }
</script>