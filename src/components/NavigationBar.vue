<template>
<nav class="bg-[#3F2E3E] dark:bg-gray-900 border-b-2 border-[#331D2C] top-0 w-full fixed height-[60px]">
    <div class="flex flex-wrap items-center justify-between max-w-screen md:mx-8 mx-auto  p-4 shadow-lg">
      <div class="flex flex-row">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="/2.png" class="h-8" alt="Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">BrainBlitz</span>
          </a>
          <div id="mega-menu-icons" class="items-center justify-between hidden w-full md:flex md:w-auto mx-8 md:order-1">
              <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                  <li>
                      <a href="/" class="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#A78295] md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                  </li>
                  <li>
                      <a href="#" class="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-[#A78295] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Expert Solutions</a>
                  </li>
              </ul>
          </div>
        </div>
        <div>
          <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <button v-if="showLoginButton" @click="navigateToLogin" class="text-white dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</button>
            <a href="/signup" class="text-white bg-[#A78295] hover:bg-[#795266] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a>
            <button data-collapse-toggle="mega-menu-icons" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-end text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-icons" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
        </div>
    </div>
</nav>

</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const showLoginButton = ref(true);
    const route = useRoute();
    const router = useRouter();

    watch(() => route.path, (newPath) => {
      if (newPath === '/login') {
        showLoginButton.value = false;
      } else {
        showLoginButton.value = true;
      }
    });

    function navigateToLogin() {
      showLoginButton.value = false;
      router.push('/login');
    }

    return {
      showLoginButton,
      navigateToLogin,
    };
  },
});
</script>