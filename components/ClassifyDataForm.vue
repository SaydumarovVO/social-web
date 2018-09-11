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
        v-model="numberOfRecords"
        :rules="numberOfRecordsRules"
        mask="###"
        label="Число постов для обучения классификатора"
        required
      ></v-text-field>
    </v-layout>
    <v-layout row wrap>
      <v-btn
        :disabled="!valid"
        @click="submitForm"
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
  let objId = 1;
  var classificationList = (commentText) => ({
    id: objId++,
    category: null,
    commentText
  });

  export default {
    data: () => ({
      valid: false,
      dialog: false,
      numberOfRecords: '',
      numberOfRecordsRules: [
        v => !!v || 'Введите число постов',
        v => /\d{2,}/.test(v) || 'Число постов должно быть не меньше 10 и не больше 999'
      ],
      uniqueName: '',
      uniqueNameRules: [
        v => !!v || 'Укажите имя набора'
      ]
    }),
    methods: {
      submitForm() {
        this.$emit("classificationList", [
          classificationList('Lorem ipsum dolor sit amet.'),
          classificationList('Lorem ipsum dolor sit amet, consectetur.'),
          classificationList('Lorem ipsum dolor sit amet, consectetur adipisicing.'),
          classificationList('Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
          classificationList('Lorem ipsum dolor sit amet, consectetur adipisicing elit. A.'),
          classificationList('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus eligendi eos, error ex, hic illo impedit iusto labore mollitia nobis odio optio perspiciatis, porro quam quas quasi quia quidem quod recusandae repellendus totam voluptate? Dignissimos hic inventore nostrum quia sed sequi ut voluptas! Dicta expedita modi nulla rem vel!')
        ])
      },
      clear () {
        this.$refs.form.reset();
      }
    }
  }
</script>

