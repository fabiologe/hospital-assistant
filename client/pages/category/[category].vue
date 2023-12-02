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
    <v-row>{{ templates }} </v-row>
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
  async asyncData({ params, app }) {
    console.log(app.i18n);
    return {
      category: params.category,
      templates: await $fetch(
        "https://health.tobi4s.dev/api/templates/category/"
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
