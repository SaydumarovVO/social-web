<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/static/vk-symbol.png" alt="ВКонтакте" class="mb-5"/>
      </div>
      <v-card>
        <v-card-text>
          <p>Добро пожаловать на стартовую страницу проекта исследования акциональной модели влияния в социальных
            сетях!</p>
          <p>Этот портал используется для сбора и классификации данных пользователей социальной сети "ВКонтакте".
            Обработка данных производится в несколько этапов:</p>
          <ul>
            <li><em>Задание правил</em> для сбора данных по ключевым словам;</li>
            <li><em>Обработка</em> части собранных данных вручную с выставлением меток;</li>
            <li><em>Классификация</em> с помощью одного из предложенных методов;</li>
            <li><em>Обработка</em> полученных результатов.</li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-btn router to="/data-collect">Продолжить</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
