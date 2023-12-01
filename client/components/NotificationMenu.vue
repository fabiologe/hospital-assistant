<template>
  <v-menu transition="slide-y-transition" location="bottom end">
    <template v-slot:activator="{ props }">
      <v-btn icon size="small" v-bind="props">
        <v-badge content="3" color="error">
          <v-icon>mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-card width="300">
      <div class="pa-4 d-flex justify-space-between align-center">
        <span>{{ $t('navbar.dropdown.notification.text') }}</span>
        <v-btn text color="primary" size="small" class="text-transform-none">
          {{ $t('navbar.dropdown.notification.subtext') }}
        </v-btn>
      </div>

      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          lines="three"
          :value="item.title"
          :title="item.title"
        >
          <template v-slot:prepend>
            <div class="mr-4 mt-1 align-self-baseline">
              <v-icon v-if="item.icon" :icon="item.icon" size="default"></v-icon>
              <v-avatar v-if="item.avatar" size="28">
                <v-img :src="item.avatar"></v-img>
              </v-avatar>
            </div>
          </template>
          <template v-slot:subtitle>
            <div>{{ item.subtitle }}</div>
            <div class="d-flex align-center mt-2"><v-icon size="small" class="mr-1">mdi-clock</v-icon>{{ item.at }}</div>
          </template>
        </v-list-item>
      </v-list>
      
      <v-divider></v-divider>

      <div class="pa-2">
        <v-btn block text color="primary" class="text-transform-none"><v-icon>mdi-plus-circle</v-icon>
          {{ $t('navbar.dropdown.notification.button') }}
        </v-btn>
      </div>
    </v-card>
  </v-menu>
</template>

<script>
import img1 from '@/assets/images/users/avatar-3.jpg'
import img2 from '@/assets/images/users/avatar-4.jpg'

export default {
  computed: {
    items() {
      return [
        {
          icon: 'mdi-cart',
          title: this.$t('navbar.dropdown.notification.order.title'),
          subtitle: this.$t('navbar.dropdown.notification.order.text'),
          at: this.$t('navbar.dropdown.notification.order.time')
        }, {
          avatar: img1,
          title: this.$t('navbar.dropdown.notification.james.title'),
          subtitle: this.$t('navbar.dropdown.notification.james.text'),
          at: this.$t('navbar.dropdown.notification.james.time')
        }, {
          icon: 'mdi-truck',
          title: this.$t('navbar.dropdown.notification.item.title'),
          subtitle: this.$t('navbar.dropdown.notification.item.text'),
          at: this.$t('navbar.dropdown.notification.item.time')
        }, {
          avatar: img2,
          title: this.$t('navbar.dropdown.notification.salena.title'),
          subtitle: this.$t('navbar.dropdown.notification.salena.text'),
          at: this.$t('navbar.dropdown.notification.salena.time')
        }
      ]
    }
  }
}
</script>