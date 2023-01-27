<template>
  <header>

    <div class="m-0 ml-4 mt-3 flex p-5 justify-center items-center shadow-lg">
      <router-link to="/"
        class=" block text-left text-lg font-semibold text-ternary-light hover:text-ternary-dark mx-4 mb-2 lg:py-2 "
        aria-label="projets">Mes projets</router-link>
      <router-link to="/"
        class=" block text-left text-lg font-semibold text-ternary-light hover:text-ternary-dark mx-4 mb-2 lg:py-2 "
        aria-label="">Mes services</router-link>
      <router-link to="/"
        class=" block text-left text-lg font-semibold text-ternary-light hover:text-ternary-dark mx-4 mb-2 lg:py-2 "
        aria-label="Contact">Me trouver</router-link>
      <div class=" pt-0 border-t-0 border-primary-light dark:border-secondary-dark">
        <button
          class=" block text-left text-md font-semibold text-black hover:text-white hover:bg-black dark:bg-white bg-white dark:text-black shadow-sm rounded-sm px-4 py-2  duration-500"
          aria-label="Bouton me contacter">
          Me contacter
        </button>
      </div>
    </div>

  </header>




  <FilmIcon class="h-5 w-5 fill-blue-300 stroke-blue-600" />
  <nav>
    <RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink>
  </nav>


  <RouterView />
</template>

<script>

import { FilmIcon } from "@heroicons/vue/outline";
export default {
  components: { FilmIcon },
};
</script>