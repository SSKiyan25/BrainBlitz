<template>
  <div class="flex flex-col items-center justify-center h-screen pt-12 pb-24 box-border">
    <div class="flex-auto rounded-lg shadow-2xl w-5/6">
      <div class="flex items-center justify-between px-8 py-8 mt-4 border-b-2">
        <h4 class="text-2xl font-bold dark:text-black">Make Your FlashCard!</h4>
      </div>
      <div class="w-1/2 px-8 py-8">
          <label for="small-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Title</label>
          <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <label for="small-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-8">Category</label>
          <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
    </div>

  </div>
</template>