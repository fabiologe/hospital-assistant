<template>
  <v-app>
    <v-main style="height: 100%">
      <v-container style="height: 100%">
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>
.v-list {
  -webkit-padding-start: 14px !important;
  overflow-x: hidden !important;
  padding-inline-start: 0px !important;
}
</style>
