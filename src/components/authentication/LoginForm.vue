<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user.js";

const route = useRouter();
const user = useUserStore();

const form = ref({
  email: "",
  password: "",
});

async function login() {
  try {
    const response = await axios.post(
      "https://zullkit-backend.belajarkoding.com/api/login",
      {
        email: form.value.email,
        password: form.value.password,
      }
    );

    localStorage.setItem("token", response.data.data.access_token);
    localStorage.setItem("token_type", response.data.data.token_type);

    user.fetchUser();
    route.push("/");
  } catch (error) {
    console.log(error.message);
  }
}
</script>

<template>
  <form>
    <div class="mb-4">
      <label class="block mb-1" for="email">Email Address</label>
      <input
        v-model="form.email"
        placeholder="Type your email"
        id="email"
        type="text"
        name="email"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
      />
    </div>
    <div class="mb-4">
      <label class="block mb-1" for="password">Password</label>
      <input
        v-model="form.password"
        @keyup.enter="login"
        placeholder="Type your password"
        id="password"
        type="password"
        name="password"
        class="block w-full py-3 mt-2 border border-gray-300 rounded-full shadow-sm px-7 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 disabled:bg-gray-100"
      />
    </div>
    <div class="mt-6">
      <button
        @click="login"
        type="button"
        class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow"
      >
        Sign In
      </button>
      <RouterLink
        :to="{ name: 'register' }"
        type="button"
        class="inline-flex items-center justify-center w-full px-8 py-3 mt-2 text-base font-medium text-black bg-gray-200 border border-transparent rounded-full hover:bg-gray-300 md:py-2 md:text-lg md:px-10 hover:shadow"
      >
        Create New Account
      </RouterLink>
    </div>
  </form>
</template>
