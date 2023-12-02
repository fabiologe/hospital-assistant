<template>
  <v-container>
    <v-overlay :model-value="loading" class="align-center justify-center">
      <v-progress-circular
        color="primary"
        persistent
        indeterminate
        size="64"
      ></v-progress-circular>
      <p style="color: black"><strong>Importing template...</strong></p>
    </v-overlay>
    <input
      type="file"
      style="display: none"
      ref="fileUpload"
      accept="image/*"
      @change="onFilePicked"
    />
    <v-row class="mb-5"
      ><v-btn color="primary" to="/category" variant="text"
        ><v-icon class="mr-1">mdi-arrow-left</v-icon>See categories</v-btn
      >
      <v-spacer></v-spacer
      ><v-btn
        color="primary"
        variant="tonal"
        @click="chooseFiles()"
        class="mr-2"
        >Upload Picture <v-icon class="ml-1">mdi-camera-enhance</v-icon></v-btn
      ><v-btn
        color="error"
        variant="outlined"
        @click="deleteTemplate()"
        class="mr-2"
        >Delete</v-btn
      ><v-btn
        color="success"
        variant="outlined"
        @click="editTemplate()"
        :disabled="!allowSave"
        >Save Changes</v-btn
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
        ></v-text-field>

        <!-- Template Description -->
        <v-textarea
          class="mb-4"
          hide-details
          label="Template Description"
          v-model="template.description"
          variant="outlined"
        ></v-textarea>

        <!-- Template Type -->
        <v-select
          class="mb-4"
          hide-details
          label="Template Type"
          :items="['Document', 'Conversation']"
          v-model="template.type"
          variant="outlined"
        ></v-select>

        <!-- Category -->
        <v-select
          class="mb-4"
          hide-details
          label="Category"
          :items="categories"
          v-model="template.category"
          variant="outlined"
        ></v-select>
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
                hide-details
                density="compact"
                variant="outlined"
                v-model="item.name"
              ></v-text-field
            ></v-col>
            <v-col sm="7"
              ><v-text-field
                hide-details
                density="compact"
                variant="outlined"
                v-model="item.description"
              ></v-text-field
            ></v-col>
            <v-col sm="1"
              ><v-btn
                density="comfortable"
                icon="mdi-minus"
                color="error"
                @click="removePoint(index)"
                style="float: right"
              ></v-btn
            ></v-col>
          </v-row>
          <v-row align="center" justify="center">
            <v-col>
              <v-btn
                style="width: 100%"
                color="primary"
                variant="tonal"
                append-icon="mdi-plus"
                @click="addPoint()"
                >Add information point</v-btn
              ></v-col
            >
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
definePageMeta({ layout: "default" });

export default defineNuxtComponent({
  data() {
    return {
      template: {},
      templateId: "",
      error: null,
      categories: ["Category 1", "Category 2", "Category 3"],
      loading: false,
      checkInterval: null,
    };
  },
  async asyncData({ params }) {
    return {
      templateId: params.id,
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
    async onFilePicked(e) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = async () => {
        const base64String = reader.result.split(",")[1]; // Get the base64 content, exclude the prefix

        this.checkForVisionData();

        await $fetch(
          "https://health.tobi4s.dev/api/templates/" +
            this.template._id +
            "/doc",
          {
            method: "POST",
            body: { base64: base64String },
          }
        );
      };

      reader.readAsDataURL(file); // Read the file
    },
    chooseFiles() {
      this.$refs.fileUpload.click();
    },
    checkForVisionData() {
      this.loading = true;
      const id = this.templateId;
      this.checkInterval = setInterval(async () => {
        const template = await $fetch(
          "https://health.tobi4s.dev/api/templates/" + id
        );
        console.log(template);
        if (template.visionData && template.visionData.name) {
          this.template.name = template.visionData.name;
          this.template.description = template.visionData.description;
          this.template.infoPoints = template.visionData.fields;
          this.template.type = "Document";
          clearInterval(this.checkInterval);
          this.loading = false;
        }
      }, 1000);
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

<style>
/* Style here */
.v-overlay .v-overlay__content {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  gap: 12px;
}
</style>
