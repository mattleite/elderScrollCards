<template>
  <div class="md-item">
    <h2>Loading</h2>
    <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
  </div>
</template>

<script>
export default {
  name: 'ProgressSpinnerIndeterminate'
}
</script>

<style lang="scss" scoped>
  .md-progress-spinner {
    margin: 24px;
  }
</style>
