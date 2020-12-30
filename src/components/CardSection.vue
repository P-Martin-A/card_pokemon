<template>
  <section class="card-section">
    <div class="content">
      <h1 class="title"
        :class="type"
      > {{ name }} <span>{{ hp }} HP</span></h1>
      <h2 class="rank">Pokemon <i>#{{ index }}</i></h2>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'CardSection',
    props: {
      name: {
        type: String
      },
      hp: {
        type: Number
      },
      index: {
        type: Number
      },
      type: {
        type: String
      }
    }
  }
</script>