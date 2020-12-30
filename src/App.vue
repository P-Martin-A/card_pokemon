<template>
  <div id="app">
    <Particles id="particles-js"
      v-if="boleano"
      :options="options"
    />
    <Article 
      :pokemon="pokemon"
    />
  </div>
</template>

<script>
  import Article from '@/layouts/Article'

  export default {
    name: 'App',
    components: {
      Article
    },
    data() {
      return {        
        pokemon: {},
        options: {
          background: {
            color: {
              value: '#252525'
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push'
              },
              onHover: {
                enable: true,
                mode: 'repulse'
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
              },
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            } 
          },
          particles: {
            color: {
              value: '#ffffff'
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 6,
              straight: false
            },
            number: {
              density: {
                enable: true,
                value_area: 800
              },
              value: 100
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: 'circle'
            },
            size: {
              random: true,
              value: 10
            }
          },
          detectRetina: true
        },
        boleano: false
      }
    },
    mounted() {
      this.getPokemon(this.numbreRandom())
    },
    methods: {
      async getPokemon(id) {    
        const RES = await fetch(`https:pokeapi.co/api/v2/pokemon/${id}`),
              DATA = await RES.json(),
              POKEMON = {
                img: DATA.sprites.other.dream_world.front_default,              
                name: DATA.name,              
                type: DATA.types[0].type.name,
                index: DATA.game_indices[0].game_index,              
                hp: DATA.stats[0].base_stat,              
                attack: DATA.stats[1].base_stat,
                defending: DATA.stats[2].base_stat, 
                special: DATA.stats[3].base_stat,
              }
        
        this.pokemon = POKEMON

        this.colorChange(this.pokemon.type)      
      },
      colorChange(type) {
        switch (type) {
          case "fire":            
            this.options.particles.color.value = "#F53C3C"
            this.boleano = true
          break;
          case "ice":            
            this.options.particles.color.value = "#9FF9EF"
            this.boleano = true
          break;
          case "grass":            
            this.options.particles.color.value = "#35EB44"
            this.boleano = true
          break;
          case "flying":            
            this.options.particles.color.value = "#DFFAF6"
            this.boleano = true
          break;
          case "steel":            
            this.options.particles.color.value = "#8A8585"
            this.boleano = true
          break;  
          case "water":            
            this.options.particles.color.value = "#0B4072"
            this.boleano = true
          break;
          case "electric":            
            this.options.particles.color.value = "#F0F738"
            this.boleano = true
          break;
          case "ghost":            
            this.options.particles.color.value = "#552697"
            this.boleano = true
          break;
          case "fighting":            
            this.options.particles.color.value = "#66191A"
            this.boleano = true
          break;
          case "psychic":            
            this.options.particles.color.value = "#C740DF"
            this.boleano = true
          break;
          case "rock":            
            this.options.particles.color.value = "#8A5118"
            this.boleano = true
          break;
          case "dark":            
            this.options.particles.color.value = "#1D1C1C"
            this.boleano = true
            this.options.particles.links.color = "#FFFFFF"
          break;
          case "ground":            
            this.options.particles.color.value = "#D6A528"
            this.boleano = true
          break;
          case "bug":            
            this.options.particles.color.value = "#C5D418"
            this.boleano = true
          break;
          case "dragon":            
            this.options.particles.color.value = "#3336EC"
            this.boleano = true
          break;
          default:
            this.boleano = true
          break;
        }
      },
      numbreRandom() {
        return Math.floor(Math.random() * 387)
      }
    }
  }
</script>
