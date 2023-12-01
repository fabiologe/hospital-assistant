import VueSocketIO from "vue-3-socket.io";
import SocketIO from "socket.io-client";

export default defineNuxtPlugin((nuxtApp) => {
  const socketConnection = SocketIO("https://health.tobi4s.dev", {
    path: "/api/socket.io",
  });

  nuxtApp.vueApp.use(
    new VueSocketIO({
      debug: true,
      connection: socketConnection,
    })
  );
});
