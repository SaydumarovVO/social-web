<template>
  <div>
    <v-layout row wrap justify-space-between>
      <v-flex>
        <v-textarea
          readonly
          box
          label="Комментарий"
          :value="classificationItem.commentText"
        />
      </v-flex>
      <v-divider
        class="mx-2"
        vertical
      />
      <v-flex>
        <v-autocomplete
          :items="classificationCategories"
          v-model="selectedCategory"
          label="Выбете категорию или добавьте новую"
          autocomplete
          @keyup.enter="addValue"/>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around>
      <v-btn
        :disabled="!selectedCategory"
        @click='$emit("applyCategory", classificationItem.id, selectedCategory)'
      >
        Подтвердить
      </v-btn>
      <v-btn
        :disabled="selectedCategory"
        @click='$emit("skipItem", classificationItem.id)'
      >
        Пропустить
      </v-btn>
    </v-layout>
    <v-divider/>
  </div>
</template>
<script>
  export default {
    props: ['classificationItem', 'classificationCategories'],
    data() {
      return {
        selectedCategory: null
      }
    },
    methods: {
      addValue(e) {
        let newCategory = e.target.value.trim();
        if (newCategory) {
          this.classificationCategories.push(newCategory);
        }
      }
    }
  }
</script>
