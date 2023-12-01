<template>
  <v-menu transition="slide-y-transition" location="bottom end">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props">
        <div class="d-flex">
          <v-img :src="flag" width="20" class="mr-2"></v-img> {{ title }}
        </div>
      </v-btn>
    </template>
    
    <v-list
      @click:select="setLanguage"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item.value"
        :title="item.title"
      >
        <template v-slot:prepend>
          <v-avatar size="24" class="mr-2 rounded-0">
            <v-img :src="item.src"></v-img>
          </v-avatar>
        </template>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import img1 from '@/assets/images/flags/us.jpg'
import img2 from '@/assets/images/flags/french.jpg'
import img3 from '@/assets/images/flags/spain.jpg'
import img4 from '@/assets/images/flags/china.png'
import img5 from '@/assets/images/flags/arabic.png'

export default {
  data() {
    return {
      locale: 'en',
      items: [
        {
          value: 'en',
          src: img1,
          title: 'English'
        }, {
          value: 'fr',
          src: img2,
          title: 'French'
        }, {
          value: 'es',
          src: img3,
          title: 'Spanish'
        }, {
          value: 'zh',
          src: img4,
          title: 'Chinese'
        }, {
          value: 'ar',
          src: img5,
          title: 'Arabic'
        }
      ]
    }
  },
  computed: {
    flag() {
      return this.items.find((v) => v.value === this.$i18n.locale).src
    },
    title() {
      return this.items.find((v) => v.value === this.$i18n.locale).title
    }
  },
  methods: {
    setLanguage($event) {
      this.$i18n.locale = $event.id
    }
  }
}
</script>