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
      <DataFromFileInputPicker
        @addFile="addFile"
      />
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
  </v-form>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      file: null,
      uniqueName: '',
      uniqueNameRules: [
        v => !!v || 'Укажите имя набора'
      ]
    }),
    methods: {
      addFile(addedFile){
        this.file = addedFile;
      },
      clear () {
        this.$refs.form.reset();
      }
    }
  }
</script>
