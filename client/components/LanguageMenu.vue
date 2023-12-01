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
import img_de from '@/assets/images/flags/more_flags/de.png'
import img_en from '@/assets/images/flags/us.jpg'
import img_fr from '@/assets/images/flags/more_flags/fr.png'

import img_it from '@/assets/images/flags/more_flags/it.png'
import img_es from '@/assets/images/flags/more_flags/es.png'
import img_pt from '@/assets/images/flags/more_flags/pt.png'

import img_nl from '@/assets/images/flags/more_flags/nl.png'

import img_se from '@/assets/images/flags/more_flags/se.png'
import img_tr from '@/assets/images/flags/more_flags/tr.png'
import img_ua from '@/assets/images/flags/more_flags/ua.png'

import img_id from '@/assets/images/flags/more_flags/id.png'
import img_pl from '@/assets/images/flags/more_flags/pl.png'

import img_kr from '@/assets/images/flags/more_flags/kr.png'
import img_jp from '@/assets/images/flags/more_flags/jp.png'

export default {
  data() {
    return {
      locale: 'de',
      items: [
        {
          value: 'de',
          src: img_de,
          title: 'German'
        }, {
          value: 'en',
          src: img_en,
          title: 'English'
        }, {
          value: 'fr',
          src: img_fr,
          title: 'French'
        }, {
          value: 'it',
          src: img_it,
          title: 'Italien'
        }, {
          value: 'es',
          src: img_es,
          title: 'Spanish'
        }, {
          value: 'pt',
          src: img_pt,
          title: 'Portuguese'
        }, {
          value: 'nl',
          src: img_nl,
          title: 'Dutch'
        }, {
          value: 'se',
          src: img_se,
          title: 'Swedish'
        }, {
          value: 'tr',
          src: img_tr,
          title: 'Turkish'
        }, {
          value: 'ua',
          src: img_ua,
          title: 'Ukraine'
        }, {
          value: 'id',
          src: img_id,
          title: 'Indonesian'
        }, {
          value: 'pl',
          src: img_pl,
          title: 'Polish'
        }, {
          value: 'kr',
          src: img_kr,
          title: 'Korean'
        }, {
          value: 'jp',
          src: img_jp,
          title: 'Japanese'
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