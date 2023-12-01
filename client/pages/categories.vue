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
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>Emergency</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >Templates to use when patient arrives in emergency
              room</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn to="/emergency"> See templates </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>Emergency</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >Templates to use when patient arrives in emergency
              room</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn> See templates </v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>Emergency</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >Templates to use when patient arrives in emergency
              room</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn> See templates </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>Emergency</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >Templates to use when patient arrives in emergency
              room</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn> See templates </v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>Emergency</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >Templates to use when patient arrives in emergency
              room</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn> See templates </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>Emergency</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >Templates to use when patient arrives in emergency
              room</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn> See templates </v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
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
