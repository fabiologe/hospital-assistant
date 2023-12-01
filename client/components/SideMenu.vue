<template>
  <v-list density nav>
    <v-list-item>
      <v-img :src="logo_sm" v-if="modelValue" max-width="26"></v-img>
      <v-img v-else :src="logo" class="mr-8"></v-img>
      <template v-if="!modelValue" v-slot:append>
        <v-btn size="small" variant="text" icon="mdi-menu" @click="updateValue"></v-btn>
      </template>
    </v-list-item>

    <template v-for="(item, i) in items">
      <v-list-subheader
        v-if="item.subheader && !modelValue"
        :key="i"
        :title="item.text"
      />
      <v-list-item
        v-if="!item.items?.length && !item.subheader"
        :key="i"
        :title="item.text"
        :prepend-icon="item.icon"
        :value="item.text"
      />
      <v-list-group
        v-if="item.items?.length"
        :key="i"
      >
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" :prepend-icon="item.icon" :title="item.text"></v-list-item>
        </template>

        <v-list-item
          v-for="(subitem, j) in item.items"
          :key="`${j}`"
          :title="subitem.text"
          :value="subitem.text"
        />
      </v-list-group>
    </template>
  </v-list>
</template>

<script setup>
  const props = defineProps({
    modelValue: Boolean
  })
  const emit = defineEmits(['update:modelValue'])
  const updateValue = (event) => {
    emit('update:modelValue', !props.modelValue)
  }
</script>

<script>
import logo from '@/assets/images/logo-dark.png'
import logo_sm from '@/assets/images/logo-sm.png'

export default {
  data() {
    return {
      logo,
      logo_sm
    }
  },
  computed: {
    items() {
      return [
        {
          subheader: true,
          text: this.$t('menuitems.menu.text')
        }, {
          text: this.$t('menuitems.dashboard.text'),
          icon: 'mdi-home'
        }, {
          subheader: true,
          text: this.$t('menuitems.apps.text')
        }, {
          text: this.$t('menuitems.calendar.text'),
          icon: 'mdi-calendar'
        }, {
          text: this.$t('menuitems.chat.text'),
          icon: 'mdi-forum'
        }, {
          text: this.$t('menuitems.ecommerce.text'),
          icon: 'mdi-store',
          items: [
            {
              text: this.$t('menuitems.ecommerce.list.products')
            }, {
              text: this.$t('menuitems.ecommerce.list.productdetail')
            }, {
              text: this.$t('menuitems.ecommerce.list.orders')
            }, {
              text: this.$t('menuitems.ecommerce.list.customers')
            }, {
              text: this.$t('menuitems.ecommerce.list.cart')
            }, {
              text: this.$t('menuitems.ecommerce.list.checkout')
            }, {
              text: this.$t('menuitems.ecommerce.list.shops')
            }, {
              text: this.$t('menuitems.ecommerce.list.addproduct')
            }
          ]
        }, {
          text: this.$t('menuitems.email.text'),
          icon: 'mdi-email',
          items: [
            {
              text: this.$t('menuitems.email.list.inbox'),
            }, {
              text: this.$t('menuitems.email.list.reademail'),
            }
          ]
        }, {
          text: this.$t('menuitems.invoices.text'),
          icon: 'mdi-receipt',
          items: [
            {
              text: this.$t('menuitems.invoices.list.invoicelist'),
            }, {
              text: this.$t('menuitems.invoices.list.invoicedetail'),
            }
          ]
        }, {
          text: this.$t('menuitems.contacts.text'),
          icon: 'mdi-book-multiple',
          items: [
            {
              text: this.$t('menuitems.contacts.list.usergrid'),
            }, {
              text: this.$t('menuitems.contacts.list.userlist'),
            }, {
              text: this.$t('menuitems.contacts.list.profile'),
            }
          ]
        }, {
          subheader: true,
          text: 'PAGES'
        }, {
          text: this.$t('menuitems.authentication.text'),
          icon: 'mdi-account-circle',
          items: [
            {
              text: this.$t('menuitems.authentication.list.login'),
            }, {
              text: this.$t('menuitems.authentication.list.register'),
            }, {
              text: this.$t('menuitems.authentication.list.recoverpwd'),
            }, {
              text: this.$t('menuitems.authentication.list.lockscreen'),
            }
          ]
        }, {
          text: this.$t('menuitems.utility.text'),
          icon: 'mdi-file'
        }, {
          subheader: true,
          text: this.$t('menuitems.components.text'),
        }, {
          text: this.$t('menuitems.uielements.text'),
          icon: 'mdi-filter'
        }, {
          text: this.$t('menuitems.forms.text'),
          icon: 'mdi-baseball'
        }, {
          text: this.$t('menuitems.tables.text'),
          icon: 'mdi-menu'
        }, {
          text: this.$t('menuitems.charts.text'),
          icon: 'mdi-chart-line'
        }, {
          text: this.$t('menuitems.components.text'),
          icon: 'mdi-map'
        }
      ]
    }
  }
}
</script>