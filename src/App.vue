<template>
  <v-app>
    <v-app-bar absolute app color="primary" dark>
      <v-app-bar-title class="d-flex align-center">
        4択クイズアプリ
      </v-app-bar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-content>
        <router-view />
      </v-content>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({

  components: {
  },
  data () {
    return {
      //
    }
  }
})
</script>
