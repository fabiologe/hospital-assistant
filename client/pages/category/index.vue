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
          <v-card-title>{{
            $t("categories.department_emergency.title")
          }}</v-card-title>

          <v-card-item>
            <v-card-subtitle>{{
              $t("categories.department_emergency.description")
            }}</v-card-subtitle>
          </v-card-item>

          <v-card-actions>
            <v-btn :to="'/category/emergency/' + $i18n.locale">{{
              $t("templates.see_templates")
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>{{
            $t("categories.child_station.title")
          }}</v-card-title>

          <v-card-item>
            <v-card-subtitle>{{
              $t("categories.child_station.description")
            }}</v-card-subtitle>
          </v-card-item>

          <v-card-actions>
            <v-btn :to="'/category/childstation/' + $i18n.locale">
              {{ $t("templates.see_templates") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>{{
            $t("categories.pre_operation.title")
          }}</v-card-title>

          <v-card-item>
            <v-card-subtitle>{{
              $t("categories.pre_operation.description")
            }}</v-card-subtitle>
          </v-card-item>

          <v-card-actions>
            <v-btn :to="'/category/preparationforsurgery/' + $i18n.locale">
              {{ $t("templates.see_templates") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>{{ $t("categories.xray.title") }}</v-card-title>

          <v-card-item>
            <v-card-subtitle>{{
              $t("categories.xray.description")
            }}</v-card-subtitle>
          </v-card-item>

          <v-card-actions>
            <v-btn :to="'/category/xray/' + $i18n.locale">
              {{ $t("templates.see_templates") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
    <v-row align="center" justify="center">
      <v-col cols="auto">
        <v-card class="mx-auto" width="400" color="primary" variant="tonal">
          <v-card-title>{{ $t("categories.other.title") }}</v-card-title>

          <v-card-item>
            <v-card-subtitle>{{
              $t("categories.other.description")
            }}</v-card-subtitle>
          </v-card-item>

          <v-card-actions>
            <v-btn :to="'/category/other/' + $i18n.locale">
              {{ $t("templates.see_templates") }}</v-btn
            >
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
