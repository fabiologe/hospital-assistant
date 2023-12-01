<template>
  <v-app>
    <v-app-bar :order="0" elevation="1">
      <top-menu></top-menu>
    </v-app-bar>

    <v-main>
      <v-container style="height: 100%;">
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