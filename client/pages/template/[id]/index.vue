<template>
  <v-container>
    <v-row
      ><v-btn color="primary" to="/category" variant="text"
        ><v-icon class="mr-1">mdi-arrow-left</v-icon>See categories</v-btn
      >
      <v-spacer></v-spacer
      ><v-btn
        v-if="false"
        color="warning"
        variant="outlined"
        :to="template._id + '/edit'"
        >Edit</v-btn
      ></v-row
    >
    <v-row></v-row>
  </v-container>
</template>

<script>
definePageMeta({ layout: "default" });

export default defineNuxtComponent({
  data() {
    return {
      template: {},
      loading: false,
      error: null,
    };
  },
  async asyncData({ params }) {
    return {
      template: await $fetch(
        "https://health.tobi4s.dev/api/templates/" + params.id
      ),
    };
  },
  methods: {
    async deleteTemplate() {
      await $fetch(
        "https://health.tobi4s.dev/api/templates/" + this.template._id,
        {
          method: "DELETE",
        }
      );

      await navigateTo({ path: "/" });
    },
  },
});
</script>

<style scoped>
/* Style here */
</style>
