<template>
  <div class="d-flex flex-grow-1 align-center">
    <v-text-field
      hide-details
      variant="solo"
      :label="$t('navbar.search.text')"
      density="compact"
      prepend-inner-icon="mdi-magnify"
      style="width: 400px !important;"
      class="flex-grow-0"
    ></v-text-field>

    <v-spacer></v-spacer>
    <language-menu></language-menu>
    <plugins-menu></plugins-menu>
    <notification-menu></notification-menu>
    <user-menu></user-menu>
    <v-btn size="small" icon><v-icon>mdi-settings</v-icon></v-btn>
  </div>
</template>