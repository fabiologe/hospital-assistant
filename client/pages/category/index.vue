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
          <v-card-title>$t('catgegories.department_emergency.title')</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >$t(catgegories.department_emergency.description)</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn to="/category/emergency">$t(templates.init)</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>$t(templates.type.pre_operation.title)</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >$t(templates.type.pre_operation.description)</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn to="/category/preoperativeassessment">$t(templates.init)</v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>$t(templates.pre_operation.title)</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >$t(templates.pre_operation.description)</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn to="/category/preparationforsurgery">$t(templates.init)</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>$t(templates.type.Xray.title)</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >$t(templates.type.Xray.description)</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn to="/category/xray">$t(templates.init)</v-btn>
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
            <v-btn>$t(templates.init)</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>$t(templates.other.title)</v-card-title>

          <v-card-item>
            <v-card-subtitle
              >$t(templates.other.description)</v-card-subtitle
            >
          </v-card-item>

          <v-card-actions>
            <v-btn to="/category/other">$t(templates.init)</v-btn>
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
