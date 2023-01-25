<script setup>
import CategoriesCard from "./../components/categories/Card.vue";

import { ref, onMounted } from "vue";
import axios from "axios";

const categories = ref([]);

async function getCategoriesData() {
  try {
    const response = await axios.get(
      "https://zullkit-backend.buildwithangga.id/api/categories"
    );
    console.log(response.data.data.data);
    categories.value = response.data.data.data;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getCategoriesData();
});
</script>

<template>
  <main>
    <div class="container px-4 mx-auto my-16 md:px-12">
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">
        All Categories
      </h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <CategoriesCard
          v-for="category in categories"
          :id="category.id"
          :key="category.id"
          :name="category.name"
          :products_count="category.products_count"
          :thumbnails="category.thumbnails"
        />
      </div>
    </div>
  </main>
</template>
