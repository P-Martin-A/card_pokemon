<template>
  <div class="card-hero">
    <img class="image" 
      :src="src" 
      :alt="alt"
    >
  </div>
</template>

<script>
  export default {
    name: 'CardHero',
    props: {
      src: {
        type: String
      },
      alt: {
        type: String
      },
    }
  }
</script>