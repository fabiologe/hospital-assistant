<template>
  <v-row justify="center" align="center" style="height: 100%">
    <v-col cols="12" sm="12" md="12" style="height: 100%">
      <v-card rounded class="chat-wrapper" style="height: 100%">
        <v-card-title> </v-card-title>
        <v-card-text class="chat-content" ref="chatContainer">
          <div
            class="message-wrapper"
            :class="{ 'from-bot': message.fromBot }"
            v-for="(message, index) in messages"
            :key="index"
          >
            <div class="avatar-wrapper" v-if="message.fromBot">
              <div size="42" shape="circle" class="avatar">
                <img
                  width="42"
                  src="@/assets/images/logo.png"
                  alt="AI Assistant Avatar"
                />
              </div>
            </div>
            <div
              v-if="message.fromBot"
              class="message-item message-item-text v-sheet theme--light rounded"
            >
              {{ message.text }}
            </div>
            <div
              v-else
              class="message-item user-message message-item-text v-sheet theme--light rounded"
              style="
                background-color: rgb(96, 171, 175);
                border-color: rgb(96, 171, 175);
              "
            >
              {{ message.text }}
            </div>
          </div>
        </v-card-text>
        <v-card-actions
          style="
            position: absolute;
            width: 100%;
            bottom: 0px;
            display: flex;
            justify-content: center;
          "
        >
          <v-text-field
            class="chat-text-field mt-4"
            variant="solo"
            hide-details
            placeholder="Type your message..."
            v-model="message"
            v-on:keyup.enter="sendEvent()"
            :disabled="disabled"
          >
            <template v-slot:append>
              <v-btn
                fab
                small
                icon
                :loading="loading"
                depressed
                :disabled="disabled"
                style="margin-top: -2px; margin-right: -5px"
                color="primary"
                @click="sendEvent()"
              >
                <v-icon rounded>mdi-send</v-icon>
              </v-btn>
            </template>
          </v-text-field>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import QrcodeVue from "qrcode.vue";
definePageMeta({ layout: "patient" });

export default defineNuxtComponent({
  data() {
    return {
      messages: [
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
        { fromBot: true, text: "How are you?" },
        { fromBot: false, text: "Im really good" },
      ],
      message: null,
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
  methods: {
    send: function () {
      this.chat.push({
        from: "user",
        msg: this.msg,
      });
      this.msg = null;
      this.addReply();
    },
    addReply() {
      this.chat.push({
        from: "sushant",
        msg: "Hmm",
      });
    },
  },
});
</script>

<style>
.message-wrapper {
  display: flex;
  justify-content: flex-end;
}
.message-wrapper {
  display: flex;
  justify-content: flex-end;
}
.avatar-wrapper {
  bottom: 14px;
  left: 0;
  position: absolute;
}
.message-wrapper .message-item {
  background: #f5f5f5;
  font-size: 14px !important;
}
.v-sheet:not(.v-sheet--outlined) {
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.14),
    0 0 0 0 rgba(0, 0, 0, 0.12);
}
.theme--light.v-sheet {
  background-color: #fff;
  border-color: #fff;
  color: rgba(0, 0, 0, 0.87);
}
.v-application .rounded {
  border-radius: 4px !important;
}
.chat-content {
  display: flex;
  flex-direction: column;
  max-height: 88vh;
  overflow: auto;
  overflow-x: auto;
  overflow-x: hidden;
  padding: 24px 24px 20px;
  scroll-behavior: smooth;
}
.message-item {
  border-radius: 10px;
  display: inline-block;
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 140%;
  margin-bottom: 16px;
  max-width: 85%;
  padding: 14px 16px;
  position: relative;
  width: auto;
}
.message-wrapper.from-bot {
  justify-content: flex-start;
  padding-left: 45px;
  position: relative;
}
.message-wrapper {
  display: flex;
  justify-content: flex-end;
}
.message-item.user-message {
  animation: message 0.3s ease-out 0s forwards;
  color: #fff;
  float: right;
  transform-origin: 0 100%;
}
.message-wrapper .message-item {
  background: #f5f5f5;
  background-color: rgb(245, 245, 245);
  font-size: 14px !important;
}
.chat-text-field .v-input__slot {
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.04),
    0px 1px 1px 0px rgba(0, 0, 0, 0.02), 0px 1px 3px 0px rgba(0, 0, 0, 0) !important;
}
.avatar-wrapper {
  position: absolute;
  left: 0px;
  bottom: 14px;
}
.avatar img {
  width: 32px;
  height: 32px;
}
</style>
