<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const props = defineProps({
  user: Object,
});
const show = ref(false);
function toggleDropdown() {
  show.value = !show.value;
}
function logout() {
  localStorage.clear("access_token");
  localStorage.clear("token_type");
  router.push("/login");
}
</script>

<template>
  <div class="md:order-2">
    <div class="flex items-center">
      <div class="mr-2 text-sm font-regular">Halo, {{ user.name }}</div>
      <button
        type="button"
        class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="dropdown"
        @click="toggleDropdown"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="w-8 h-8 rounded-full"
          :src="user.profile_photo_url"
          alt="user photo"
        />
      </button>
    </div>

    <div
      class="z-50 fixed right-20 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
      id="dropdown"
      :class="{ hidden: !show }"
    >
      <div class="px-4 py-3">
        <span class="block text-sm text-gray-900 dark:text-white">{{
          user.name
        }}</span>
        <span
          class="block text-sm text-gray-500 truncate font-regular dark:text-gray-400"
          >{{ user.email }}</span
        >
      </div>
      <ul class="py-1" aria-labelledby="dropdown">
        <li>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >Subscriptions</a
          >
        </li>
        <li>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >Settings</a
          >
        </li>
        <li>
          <a
            href=""
            @click="logout"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >Sign out</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>
