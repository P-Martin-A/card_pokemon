<template>
  <footer class="card-footer">
    <div class="strength">
      <h3 class="title">{{ attack }}</h3>
      <span class="subtitle">Fuerza</span>
    </div>
    <div class="special">
      <h3 class="title">{{ special }}</h3>
      <span class="subtitle">Especial</span>
    </div>
    <div class="defending">
      <h3 class="title">{{ defending }}</h3>
      <span class="subtitle">Defensa</span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'CardFooter',
    props: {
      attack: {
        type: Number
      },
      special: {
        type: Number
      },
      defending: {
        type: Number
      }
    }
  }
</script>