<template>
  <header class="card-header"
    :class="type"
  >
  </header>
</template>

<script>
  export default {
    name: 'CardHeader',
    props: {
      type: {
        type: String
      },
    }
  }
</script>