<script setup lang="ts">
import IconEmail from '../icons/IconEmail.vue';
import IconGithub from '../icons/IconGithub.vue';
</script>

<template>
  <main
    class="md:min-h-screen md:flex md:items-center md:justify-center py-16 lg:py-20 bg-blue-900"
  >
    <div class="container">
      <!-- Page heading -->
      <div class="text-center">
        <a href="index.html" class="inline-block" rel="home">
          <img
            src="./src/assets/images/logo-dark.svg"
            class="w-[148px] md:w-[201px] h-[36px] md:h-[50px]"
            alt="CutCode"
          />
        </a>
      </div>

      <div class="max-w-[640px] mt-12 mx-auto p-6 xs:p-8 md:p-12 2xl:p-16 rounded-[20px] bg-purple">
        <h1 class="mb-5 text-lg font-semibold">Вход в аккаунт</h1>
        <ul class="space-y-3">
          <li>
            <a
              href="/login"
              class="relative flex items-center h-14 px-12 rounded-lg border border-[#A07BF0] bg-white/20 hover:bg-white/20 active:bg-white/10 active:translate-y-0.5"
            >
              <IconEmail />
              <span class="grow text-xxs md:text-xs font-bold text-center">Почта</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex items-center h-14 px-12 rounded-lg border border-[#A07BF0] bg-white/20 hover:bg-white/20 active:bg-white/10 active:translate-y-0.5"
            >
              <div class="w-0.5"><IconGithub /></div>
              <span class="grow text-xxs md:text-xs font-bold text-center">GitHub</span>
            </a>
          </li>
        </ul>
        <div class="space-y-3 mt-5">
          <div class="text-xxs md:text-xs">
            <a href="/registration" class="text-white hover:text-white/70 font-bold">Регистрация</a>
          </div>
        </div>
        <ul class="flex flex-col md:flex-row justify-between gap-3 md:gap-4 mt-14 md:mt-20">
          <li>
            <a
              href="#"
              class="inline-block text-white hover:text-white/70 text-xxs md:text-xs font-medium"
              target="_blank"
              rel="noopener"
              >Пользовательское соглашение</a
            >
          </li>
          <li class="hidden md:block">
            <div class="h-full w-[2px] bg-white/20"></div>
          </li>
          <li>
            <a
              href="#"
              class="inline-block text-white hover:text-white/70 text-xxs md:text-xs font-medium"
              target="_blank"
              rel="noopener"
              >Политика конфиденциальности</a
            >
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
