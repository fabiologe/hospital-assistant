<template>
  <v-menu transition="slide-y-transition" location="bottom end">
    <template v-slot:activator="{ props }">
      <v-btn
        v-bind="props"
        class="text-transform-none"
      >
        <v-avatar size="28">
          <v-img
            :src="img1"
          ></v-img>
        </v-avatar>
        {{ $t('navbar.dropdown.marcus.text') }}
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </template>
    <v-list density>
      <v-list-item
        v-for="(item, index) in items"
        :key="index"
        :value="item.text"
        :title="item.text"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon" size="small" class="mr-2"></v-icon>
        </template>
        <template v-if="item.chip" v-slot:append>
          <v-chip size="small" color="green" class="ml-4">{{ item.chip }}</v-chip>
        </template>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import img1 from '@/assets/images/users/avatar-4.jpg'
export default {
  data() {
    return {
      img1
    }
  },
  computed: {
    items() {
      return [
        {
          text: this.$t('navbar.dropdown.marcus.list.profile'),
          icon: 'mdi-account-circle',
          to: "/"
        }, {
          text: this.$t('navbar.dropdown.marcus.list.mywallet'),
          icon: 'mdi-wallet',
          to: "/"
        }, {
          text: this.$t('navbar.dropdown.marcus.list.settings'),
          icon: 'mdi-settings',
          to: "/",
          chip: '03'
        }, {
          text: this.$t('navbar.dropdown.marcus.list.lockscreen'),
          icon: 'mdi-lock',
          to: "/"
        }, {
          text: this.$t('navbar.dropdown.marcus.list.logout'),
          icon: 'mdi-logout',
          to: "/"
        }
      ]
    }
  }
}
</script>