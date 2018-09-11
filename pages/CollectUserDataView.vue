<template>
  <v-app>
    <v-container style="width: 900px;">
      <h2>Поиск данных для дальнейшей классификации</h2>
      <v-layout
        row
        wrap
        class="my-3"
      >
        <v-radio-group
          v-model="row"
          row
        >
          <v-radio label="Поиск данных" value="search-data"/>
          <v-radio label="Загрузка данных из файла" value="load-data"/>
        </v-radio-group>
      </v-layout>
      <SearchDataForm
        v-if="row === 'search-data'"
      />
      <LoadDataForm
        v-else-if="row === 'load-data'"
      />
    </v-container>
  </v-app>
</template>
<script>
  export default {
    data: () => ({
      row: 'search-data'
    })
  }
</script>
