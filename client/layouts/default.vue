<template>
  <v-app>
    <v-navigation-drawer permanent elevation="1" :rail="drawer">
      <side-menu v-model="drawer"></side-menu>
    </v-navigation-drawer>

    <v-app-bar :order="0" elevation="1">
      <v-btn icon v-if="drawer" small class="mr-2">
        <v-icon @click="drawer = !drawer">mdi-menu</v-icon>
      </v-btn>
      <top-menu></top-menu>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }

}
</script>