<template>
  <article class="card">
    <CardHeader     
      :class="pokemon.type"
    />  
    <CardHero 
      :src="pokemon.img"
      :alt="pokemon.name"
    />    
    <CardSection 
      :name="pokemon.name"
      :hp="pokemon.hp"
      :index="pokemon.index"
      :type="pokemon.type"
    />
    <CardFooter 
      :attack="pokemon.attack"
      :special="pokemon.special"
      :defending="pokemon.defending"
    />
  </article>
</template> 

<script>
  import CardHeader from '@/components/CardHeader'
  import CardHero from '@/components/CardHero'
  import CardSection from '@/components/CardSection'
  import CardFooter from '@/components/CardFooter'

  export default {          
    name: 'Card',
    components: {
      CardHeader,
      CardHero,
      CardSection,
      CardFooter
    },
    props: {
      pokemon: {
        type: Object
      }
    }
  }
</script>
