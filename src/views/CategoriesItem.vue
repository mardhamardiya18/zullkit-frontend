<script setup>
import ItemsCard from "./../components/ItemsCard.vue";

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const products = ref([]);
const category = ref({});
const route = useRoute();

async function getCategoriesData() {
  try {
    const response = await axios.get(
      "https://zullkit-backend.buildwithangga.id/api/categories?id=" +
        route.params.id +
        "&show_product="
    );

    products.value = response.data.data.products;
    category.value = response.data.data;
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
        In {{ category.name }}
      </h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <ItemsCard
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :subtitle="product.subtitle"
          :image="product.thumbnails"
        />
      </div>
    </div>
  </main>
</template>
