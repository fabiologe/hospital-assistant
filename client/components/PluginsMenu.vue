<template>
  <v-menu transition="slide-y-transition" location="bottom end">
    <template v-slot:activator="{ props }">
      <v-btn icon size="small" v-bind="props">
        <v-icon>mdi-view-grid</v-icon>
      </v-btn>
    </template>
    <v-card width="340" class="py-4">
      <v-row justify="center" class="ma-0">
        <v-col v-for="item in items.slice(0, 3)" :key="item.text">
          <v-sheet
            class="d-flex align-center flex-column my-2"
          >
            <v-img :src="item.src" width="22" height="22"></v-img>
            {{ item.text }}
          </v-sheet>
        </v-col>
      </v-row>
      <v-row justify="center" class="ma-0">
        <v-col v-for="item in items.slice(3, 6)" :key="item.text">
          <v-sheet
            class="d-flex align-center flex-column my-2"
          >
            <v-img :src="item.src" width="22" height="22"></v-img>
            {{ item.text }}
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-menu>
</template>

<script>
import img1 from '@/assets/images/brands/github.png'
import img2 from '@/assets/images/brands/bitbucket.png'
import img3 from '@/assets/images/brands/dribbble.png'
import img4 from '@/assets/images/brands/dropbox.png'
import img5 from '@/assets/images/brands/mail_chimp.png'
import img6 from '@/assets/images/brands/slack.png'

export default {
  computed: {
    items() {
      return [
        {
          src: img1,
          text: this.$t('navbar.dropdown.site.list.github'),
        }, {
          src: img2,
          text: this.$t('navbar.dropdown.site.list.bitbucket')
        }, {
          src: img3,
          text: this.$t('navbar.dropdown.site.list.dribbble')
        }, {
          src: img4,
          text: this.$t('navbar.dropdown.site.list.dropbox')
        }, {
          src: img5,
          text: this.$t('navbar.dropdown.site.list.mailchimp')
        }, {
          src: img6,
          text: this.$t('navbar.dropdown.site.list.slack')
        }
      ]
    }
  }
}
</script>