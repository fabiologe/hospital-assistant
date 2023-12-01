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
          <v-card-title>Emergency Department</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >For the admission and treatment of a patient in an emergency 
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
          <v-card-title>Pre-operative assessment</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >Informing the patient about the operation and the processes included
              room</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn to="/preoperativeassessment> See templates </v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>Preparation for surgery</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >To prepare the patient for transport to surgery room
              room</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn to="/preparationforsurgery"> See templates </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>X-Ray</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >Preparing the patient for X-ray
              room</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn to="/xray"> See templates </v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>Pregnancy</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >For pregnancy related topics
              room</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn to="/pregnancy"> See templates </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>Other</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >Live Translator, Meal plan, Directions, etc.
              room</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn to="/other"> See templates </v-btn>
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
