<template>
  <v-container>

    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-sm-right">
        <v-btn large router to="/games" class="primary">Explore Games</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left">
        <v-btn large router to="/games/new" class="primary">Add a Game</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-3">
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item v-for="game in games" :src="game.imageUrl" :key="game.id" @click.native="onLoadGame( game.id );">
            <div class="title">
              {{ game.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-3">
      <v-flex xs12 class="text-xs-center">
        Join our awesome gaming site :D 
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    computed: {
      games () {
        return this.$store.getters.featuredGames
      }
    },
    methods: {
      onLoadGame (id) {
        this.$router.push('/games/' + id)
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,.5);
    color: white;
    font-size: 2em;
    padding: 20px;
  }
</style>
