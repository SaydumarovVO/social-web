<template>
  <v-form
    v-model="valid"
    ref="form"
  >
    <v-layout row wrap>
      <v-text-field
        v-model="uniqueName"
        :rules="uniqueNameRules"
        label="Уникальное имя набора данных"
        required
      ></v-text-field>
    </v-layout>
    <v-layout row wrap>
      <v-text-field
        v-model="keyWord"
        :rules="keyWordRules"
        label="Правила поиска записей"
        required
      ></v-text-field>
    </v-layout>
    <v-layout row wrap>
      <v-text-field
        v-model="numberOfRecords"
        :rules="numberOfRecordsRules"
        mask="######"
        label="Число постов"
        required
      ></v-text-field>
    </v-layout>
    <v-layout row wrap>
      <v-select
        v-model="year"
        :items="years"
        :rules="[v => !!v || 'Выберите год']"
        label="Период, за который необходимо собрать информацию"
      ></v-select>
    </v-layout>
    <v-layout row wrap>
      <v-btn
        :disabled="!valid"
        router to="/data-classification"
      >
        Найти
      </v-btn>
      <v-btn
        @click="clear"
      >
        Очистить форму
      </v-btn>
    </v-layout>
    <!--<ToClassifyModalWindow-->
    <!--v-model="dialog"-->
    <!--/>-->
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      dialog: false,
      keyWord: '',
      keyWordRules: [
        v => !!v || 'Введите хотя бы одно правило',
        v => !!v && v.length >= 3 || 'Правило должно состоять как минимум из 3 символов'
      ],
      numberOfRecords: '',
      numberOfRecordsRules: [
        v => !!v || 'Введите число постов',
        v => /\d{3,}/.test(v) || 'Число постов должно быть не меньше 100 и не больше 999 999'
      ],
      uniqueName: '',
      uniqueNameRules: [
        v => !!v || 'Укажите имя набора'
      ],
      years: [
        2014,
        2015,
        2016,
        2017
      ],
      year: null
    }),
    methods: {
      clear() {
        this.$refs.form.reset();
      }
    }
  }
</script>
