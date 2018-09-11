<template>
  <v-app>
    <v-navigation-drawer
      fixed
      app
    >
      <v-list>
        <v-list-tile 
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import Meta from 'mixins/meta'

  export default {
    mixins: [Meta],

    data () {
      return {
        items: [
          { icon: 'apps', title: 'Стартовая страница', to: '/' },
          { icon: 'dns', title: 'Сбор информации', to: '/data-collect'},
          { icon: 'bubble_chart', title: 'Классификация данных', to: '/data-classification' },
          { icon: 'done_all', title: 'Результаты', to: '/data-results' }

        ]
      }
    }
  }
</script>
