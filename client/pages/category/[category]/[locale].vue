<template>
  <v-container>
    <v-row class="mb-5"
      ><v-btn color="primary" to="/category" variant="text"
        ><v-icon class="mr-1">mdi-arrow-left</v-icon>See categories</v-btn
      >
      <v-spacer></v-spacer
      ><v-btn color="success" variant="outlined" @click="createTemplate()"
        >Create Template</v-btn
      ></v-row
    >
    <v-row v-for="template in templates" :key="template._id">
      <v-col cols="12">
        <v-card class="mx-auto" color="primary" variant="tonal">
          <v-card-title>{{ template.name }}</v-card-title>

          <v-card-item>
            <v-card-subtitle>{{ template.description }}</v-card-subtitle>
          </v-card-item>

          <v-card-actions>
            <v-btn :to="'/template/' + template._id"> Open Template </v-btn>
          </v-card-actions>
        </v-card>
      </v-col></v-row
    >
  </v-container>
</template>

<script>
definePageMeta({ layout: "default" });

export default defineNuxtComponent({
  data() {
    return {
      templates: [],
      category: "",
      loading: false,
      error: null,
    };
  },
  async asyncData({ params }) {
    return {
      category: params.category,
      templates: await $fetch(
        "https://health.tobi4s.dev/api/templates/category/" +
          params.category +
          "/" +
          params.locale
      ),
    };
  },
  methods: {
    async createTemplate() {
      const template = await $fetch(
        "https://health.tobi4s.dev/api/templates/",
        {
          method: "POST",
          body: { category: this.category, language: this.$i18n.locale },
        }
      );

      await navigateTo({ path: "/template/" + template._id + "/edit" });
    },
  },
});
</script>

<style scoped>
/* Style here */
</style>
