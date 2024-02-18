<template>
  <div class="flex flex-col items-center min-h-screen pt-24 pb-24 box-border">
    <div class="flex-auto rounded-lg shadow-2xl w-5/6 overflow-auto flex flex-col">
      <div class="flex items-center justify-start px-8 py-8 mt-4 border-b-2">
        <img src="/1.png" class="h-24" alt="Logo" />
        <h4 class="text-2xl px-4 font-bold dark:text-black">Make Your FlashCard!</h4> 
      </div>
      <div class="w-full mt-4 mb-8 border-b-2 px-4">
          <label for="small-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Title</label>
          <input type="text" class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <label for="small-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-4">Category</label>
          <input type="text" class="block w-1/2 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <label for="small-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-8">Description</label>
          <textarea id="message" rows="4" class="block p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-8" placeholder="..."></textarea>
      </div>
      <div v-for="(question, questionIndex) in questions" :key="questionIndex">
        <div class="w-1/2 px-8 py-4">
          <label for="small-input" class="block mb-4 text-2xl font-medium text-gray-900 dark:text-white">Question {{ questionIndex + 1 }}</label>
          <label for="small-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Title</label>
          <input v-model="question.title" type="text" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <label for="small-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-8">Description</label>
          <textarea v-model="question.description" id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="..."></textarea>
        </div>
        <div class="w-full border-b-2 px-8 py-4">
          <div class="w-full">
            <label for="small-input" class="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Choices:</label>
            <div class="flex flex-col w-full justify-center">
              <div v-for="(choice, choiceIndex) in question.choices" :key="choiceIndex" class="mb-4">
                <div class="flex items-center justify-between">
                  <input v-model="choice.text" :id="'choice-' + choiceIndex" type="text" class="form-input flex-grow text-gray-800 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700 focus:border-blue-400 focus:outline-none focus:shadow-outline-blue dark:focus:shadow-outline-gray" :placeholder="'Enter choice ' + choiceIndex">
                  <button type="button" class="ml-2" @click="setCorrectChoice(question, choiceIndex)" :disabled="question.correctChoice !== null && question.correctChoice !== choiceIndex">
                    {{ question.correctChoice === choiceIndex ? 'Correct Choice' : 'Set as Correct' }}
                  </button>
                  <button type="button" class="text-xs px-3 py-1 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-center ml-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-green-800" @click="removeChoice(question, choiceIndex)">Remove</button>
                </div>
              </div>
              <button type="button" class="text-xs px-3 py-2 w-1/6 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" @click="addChoice(question)">Add Choices</button>
            </div>
          </div>
        </div>
        <div class="w-full flex items-center justify-end space-x-2 mb-4 pr-4">
          <button type="button" class="text-xs px-3 py-2 w-[128px] mt-4 justify-center text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" @click="addQuestion">Add Question</button>
          <button type="button" class="text-xs px-3 py-2 w-[128px] mt-4 justify-center text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300 font-medium rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" @click="removeQuestion(questionIndex)">Remove Question</button>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { initFlowbite } from 'flowbite'

  onMounted(() => {
    initFlowbite();
  })

  interface Choice {
    text: string;
    isCorrect: boolean;
  }

  interface Question {
    title: string;
    description: string;
    choices: Choice[];
    correctChoice: number | null;
  }

  const questions = ref<Question[]>([
    {
      title: '',
      description: '',
      choices: [{ text: '', isCorrect: false }],
      correctChoice: null
    }
  ]);

  const addQuestion = () => {
    questions.value.push({
      title: '',
      description: '',
      choices: [{ text: '', isCorrect: false }],
      correctChoice: null
    });
  };

  const addChoice = (question: Question) => {
    question.choices.push({ text: '', isCorrect: false });
  };

  const removeChoice = (question: Question, index: number) => {
    question.choices.splice(index, 1);
    if (question.correctChoice === index) question.correctChoice = null;
  };

  const setCorrectChoice = (question: Question, index: number) => {
    if (question.correctChoice === index) {
      question.correctChoice = null;
    } else {
      question.correctChoice = index;
    }
  };
  const removeQuestion = (index: number) => {
    questions.value.splice(index, 1);
  };
</script>