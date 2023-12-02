<script>
/**
 * Dashboard component
 */
definePageMeta({ layout: "default" });

export default {
  // head() {
  //     return {
  //         title: `${this.title} | Nuxtjs Responsive Bootstrap 5 Admin Dashboard`,
  //     };
  // },
  // data() {
  //     return {
  //         title: "Dashboard",
  //         items: [{
  //             text: "Proency",
  //         },
  //         {
  //             text: "Dashboard",
  //             active: true,
  //         },
  //         ],
  //     };
  // },
  // middleware: "authentication",
};
</script>

<template>
  <div class="options-wrapper">
    <v-card
      class="mx-auto mb-4"
      max-width="344"
      color="primary"
      variant="tonal"
    >
      <v-card-item>
        <v-card-title>Template Interactions</v-card-title>

        <v-card-subtitle
          >Reoccuring interactions, like filling out a document or getting
          information about a patients current well-being.</v-card-subtitle
        >
      </v-card-item>

      <v-card-actions>
        <v-btn to="/category"> See categories </v-btn>
      </v-card-actions>
    </v-card>
    <v-card
      class="mx-auto mb-4"
      max-width="344"
      color="primary"
      variant="tonal"
    >
      <v-card-item>
        <v-card-title>Custom Interaction</v-card-title>

        <v-card-subtitle
          >Use the Health AI Assistant as a context aware
          translator.</v-card-subtitle
        >
      </v-card-item>

      <v-card-actions>
        <v-btn> Start chat </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<style>
.options-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
}
</style>
