<template>
  <div class="flex flex-col items-center min-h-screen pt-24 pb-24 box-border">
    <div class="flex-auto rounded-lg shadow-2xl w-5/6 overflow-auto">
      <div class="flex items-center justify-between px-8 py-8 mt-4 border-b-2">
        <h4 class="text-2xl font-bold dark:text-black">FlashCards</h4>
        <router-link to="/flashcard">
          <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">+ Add</button>
        </router-link>
      </div>
    </div>
  </div>
</template>