<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  defaultImage: {
    type: String,
    default: "/assets/img/gallery-1.png",
  },
  galleries: Array,
});

const thumbnail = ref(props.defaultImage);

function changeImage(image) {
  thumbnail = image;
}

onMounted(() => {
  console.log(thumbnail);
});
</script>

<template>
  <section id="gallery">
    <img :src="thumbnail" alt="" class="w-full mt-6 rounded-2xl" />
    <div class="grid grid-cols-4 gap-4 mt-4">
      <template v-for="gallery in galleries" :key="gallery.id">
        <div
          @click="thumbnail = gallery.url"
          class="overflow-hidden cursor-pointer rounded-2xl"
          :class="{ 'ring-2 ring-indigo-500': thumbnail == gallery.url }"
        >
          <img :src="gallery.url" class="w-full" alt="" />
        </div>
      </template>
    </div>
  </section>
</template>
