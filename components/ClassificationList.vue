<template>
  <div>
    <ClassifyDataForm
      @classificationList="renderClassificationList"
    />
    <v-list
      light
      v-if="!(classificationList.length === 0)"
    >
      <ClassificationCard
        v-for="(classificationItem, index) in classificationList"
        :key="classificationItem.id"
        :classificationCategories="classificationCategories"
        :classificationItem="classificationItem"
        :isLastElement="index + 1 < classificationList.length"
        @applyCategory="applyCategory"
        @skipItem="skipItem"
        :class="index === 0 ? 'mb-5' : (index + 1 < classificationList.length) ? 'my-5' : 'mt-5'"
      />
    </v-list>
    <v-btn
      v-if="!(classificationList.length === 0)"
      class="my-5"
      router to="/data-results"
    >
      Обработать результат
    </v-btn>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        classificationCategories: ['Политика', 'Новости', 'Спорт'],
        classificationList: []
      }
    },
    methods: {
      renderClassificationList(list) {
        this.classificationList = list;
      },
      applyCategory(itemId, category) {
        this.classificationList.find(
          item => item.id === itemId
        ).category = category;
      },
      skipItem(idToRemove) {
        this.classificationList = this.classificationList.filter(item => {
          return item.id !== idToRemove;
        })
      }
    }
  }
</script>
