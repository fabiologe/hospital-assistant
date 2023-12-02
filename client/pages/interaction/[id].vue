<template>
  <v-card height="100%" v-if="session && session.status === 'active'">
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">Interactive Chat</v-tab>
      <v-tab value="two">Patient View</v-tab>
      <v-tab value="three">Collected Information</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one"> One </v-window-item>

        <v-window-item value="two"> Two </v-window-item>

        <v-window-item value="three"> Three </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  <v-container v-if="session">
    <v-row v-if="session && session.status === 'waiting'" class="mb-5">
      <v-col>
        <v-alert
          type="info"
          title="Status: Waiting"
          text="Kindly ask patient to scan QR Code to start interaction"
        ></v-alert
      ></v-col>
    </v-row>
    <v-row v-if="session && session.status === 'waiting'">
      <v-col align="center" justify="center">
        <qrcode-vue
          style="max-width: 100%; height: auto"
          :value="patientUrl"
          size="600"
          level="H"
      /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import QrcodeVue from "qrcode.vue";
definePageMeta({ layout: "default" });

export default defineNuxtComponent({
  data() {
    return {
      tab: "one",
      interaction: {},
      interactionId: "",
      session: {
        status: "active",
      },
    };
  },
  components: {
    QrcodeVue,
  },
  async asyncData({ params }) {
    return {
      interactionId: params.id,
      interaction: await $fetch(
        "https://health.tobi4s.dev/api/interaction/" + params.id
      ),
    };
  },
  computed: {
    patientUrl() {
      return "https://health.tobi4s.dev/patient/" + this.interactionId;
    },
  },
  methods: {},
});
</script>

<style scoped>
/* Style here */
</style>
