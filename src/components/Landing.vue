<template>
  <section class="container h-screen mx-auto flex">
    <div class="flex flex-col mx-auto justify-center p-6 text-center">
      <p class="my-8 text-xl md:text-2xl lg:text-3xl font-medium">Flow blockchain</p>
      <h1 class="text-4xl md:text-7xl lg:text-9xl font-bold">Principais Tarefas do Dia</h1>

      <button
        @click="$router.push('/todos')"
        class="mx-auto mt-4 py-3 lg:py-5 px-10 lg:px-24 text-lg md:text-2xl font-semibold  rounded-lg shadow-md bg-white text-gray-900 border border-gray-900 hover:border-transparent hover:text-white hover:bg-gray-900 focus:outline-none"
      >
        Vamos Começar 🚀
      </button>
    </div>
  </section>

  <!-- Links -->
  <section class="absolute bottom-0 right-0 py-3 px-6 mr-8 mb-8 flex">
    <div
      class="rounded-full mx-4 transition duration-200 ease-in-out transform hover:-translate-y-3 hover:scale-125 hover:shadow-4xl"
    >
      <a href="https://github.com/diegofornalha/demo-todo-with-vue">
        <img class="w-10 h-10 inline" src="../assets/github.svg" />
      </a>
    </div>
  </section>
</template>
<script>
export default {
  name: "Landing",
};
</script>
