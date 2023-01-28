<script setup>
import { onMounted, computed } from "vue";
import { useUserStore } from "@/stores/user";
import { RouterLink } from "vue-router";

import AuthButton from "./layout/AuthButton.vue";
import UserInfo from "./layout/UserInfo.vue";

const userStore = useUserStore();
const user = computed(() => userStore.getUser);
const isLoggedIn = computed(() => userStore.isLoggedIn);

onMounted(() => {
  userStore.fetchUser();
});
</script>
<template>
  <div>
    <header>
      <nav
        class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
      >
        <div
          class="container flex flex-wrap items-center justify-between mx-auto"
        >
          <RouterLink to="/" class="flex items-center">
            <img
              src="@/assets/img/logo.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Flowbite Logo"
            />
          </RouterLink>
          <div class="flex md:order-2">
            <UserInfo v-if="isLoggedIn" :user="user.data" />
            <AuthButton v-else />
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul
              class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <RouterLink
                  to="/"
                  class="block py-2 pl-3 pr-4 text-white text-gray-500 rounded md:bg-transparent md:p-0 dark:text-white"
                  aria-current="page"
                  >Home</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/categories"
                  class="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Categories</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/pricing"
                  class="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Pricing</RouterLink
                >
              </li>
              <li>
                <RouterLink
                  to="/"
                  class="block py-2 pl-3 pr-4 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >Study Case</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
nav li a.router-link-active,
nav li a.router-link-exact-active {
  color: rgb(7, 7, 200);
}
</style>
