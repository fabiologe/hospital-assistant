<template>
  <v-container>
    <v-row class="mb-5"
      ><v-btn color="primary" to="/category" variant="text"
        ><v-icon class="mr-1">mdi-arrow-left</v-icon>See categories</v-btn
      >
      <v-spacer></v-spacer
      ><v-btn
        color="error"
        variant="outlined"
        @click="deleteTemplate()"
        class="mr-2"
        >Delete</v-btn
      ></v-row
    >
    <v-row>
      <v-col cols="12" sm="12">
        <h3>Template Meta Information</h3>
        <p class="mb-4">
          This is the content your colleagues see. It doesn't have any impact on
          the patient.
        </p>
        <!-- Template Title -->
        <v-text-field
          class="mb-4"
          hide-details
          label="Template Name"
          v-model="template.name"
          variant="outlined"
          readonly
        ></v-text-field>

        <!-- Template Description -->
        <v-textarea
          class="mb-4"
          hide-details
          label="Template Description"
          v-model="template.description"
          readonly
          variant="outlined"
        ></v-textarea>

        <!-- Template Type -->
        <v-text-field
          class="mb-4"
          hide-details
          label="Template Type"
          v-model="template.type"
          readonly
          variant="outlined"
        ></v-text-field>

        <!-- Category -->
        <v-text-field
          class="mb-4"
          hide-details
          label="Category"
          v-model="template.category"
          readonly
          variant="outlined"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-2">
      <v-col cols="12" sm="12">
        <h3>AI Assistant Instructions</h3>
        <p class="mb-4">
          The AI Assistant will gather the information you need for you.<br />
          Your patient will receive questions, like in a real conversation,
          based on the information points you configure.
        </p>
        <v-container fluid style="padding: 0px">
          <v-row>
            <v-col sm="4"><strong>Information</strong></v-col>
            <v-col><strong>Description</strong></v-col>
          </v-row>
          <v-row v-for="(item, index) in template.infoPoints" :key="index">
            <v-col sm="4">
              <v-text-field
                readonly
                hide-details
                density="compact"
                variant="outlined"
                v-model="item.name"
              ></v-text-field
            ></v-col>
            <v-col sm="8"
              ><v-text-field
                readonly
                hide-details
                density="compact"
                variant="outlined"
                v-model="item.description"
              ></v-text-field
            ></v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-row class="mt-2">
      <v-col cols="12" sm="12" align="center" justify="center">
        <v-btn size="x-large" color="primary" class="mt-5" @click="startInteraction()"
          >Start Interaction <v-icon>mdi-robot</v-icon></v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
definePageMeta({ layout: "default" });

export default defineNuxtComponent({
  data() {
    return {
      template: [],
      loading: false,
      error: null,
      categories: ["Category 1", "Category 2", "Category 3"],
    };
  },
  async asyncData({ params }) {
    return {
      template: await $fetch(
        "https://health.tobi4s.dev/api/templates/" + params.id
      ),
    };
  },
  computed: {
    allowSave() {
      if (
        this.template.name &&
        this.template.description &&
        this.template.type &&
        this.template.category &&
        this.template.infoPoints.length > 0
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    async startInteraction() {
      const interaction = await $fetch(
        "https://health.tobi4s.dev/api/interaction/",
        {
          method: "POST",
          body: { templateId: this.template._id },
        }
      );

      await navigateTo({ path: "/interaction/" + interaction._id });
    },
    async editTemplate() {
      await $fetch(
        "https://health.tobi4s.dev/api/templates/" + this.template._id,
        {
          method: "PATCH",
          body: this.template,
        }
      );
    },
    async deleteTemplate() {
      await $fetch(
        "https://health.tobi4s.dev/api/templates/" + this.template._id,
        {
          method: "DELETE",
        }
      );

      await navigateTo({ path: "/" });
    },
    addPoint() {
      this.template.infoPoints.push({ name: "", description: "" });
    },
    removePoint(index) {
      this.template.infoPoints.splice(index, 1);
    },
  },
});
</script>

<style scoped>
/* Style here */
</style>
