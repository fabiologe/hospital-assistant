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
  <v-container>
    <v-row class="mb-5"
      ><v-btn color="primary" to="/" variant="text"
        ><v-icon class="mr-1">mdi-arrow-left</v-icon>Back</v-btn
      >
      <v-spacer></v-spacer
      ><v-btn color="success" variant="outlined" disabled
        >Add Category</v-btn
      ></v-row
    >
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
            <v-btn :to="'/category/emergency/' + $i18n.locale">
              See templates
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>Pre-operative assessment</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >Informing the patient about the operation and the processes
              included room</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn :to="'/category/preoperativeassessment/' + $i18n.locale"> See templates </v-btn>
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
            <v-btn :to="'/category/preparationforsurgery/' + $i18n.locale"> See templates </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>X-Ray</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >Preparing the patient for X-ray room</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn :to="'/category/xray/' + $i18n.locale"> See templates </v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>Title</v-card-title>

          <v-card-item>
            <v-card-subtitle>sub room</v-card-subtitle>
          </v-card-item>

          <v-card-actions>
            <v-btn> See templates </v-btn>
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
            <v-btn :to="'/category/other/' + $i18n.locale"> See templates </v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
  </v-container>
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
