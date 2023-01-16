<template>
  <main
    class="md:min-h-screen md:flex md:items-center md:justify-center py-16 lg:py-20 bg-blue-900"
  >
    <div class="container">
      <!-- Page heading -->
      <div class="text-center">
        <RouterLink to="/" class="inline-block" rel="home">
          <IconLogo />
        </RouterLink>
      </div>

      <div class="max-w-[640px] mt-12 mx-auto p-6 xs:p-8 md:p-12 2xl:p-16 rounded-[20px] bg-purple">
        <h1 class="mb-5 text-lg font-semibold">Вход в аккаунт</h1>
        <form class="space-y-3" @submit.prevent="onSubmit">
          <input
            ref="name"
            type="text"
            class="w-full h-14 px-4 rounded-lg border border-[#A07BF0] bg-white/20 focus:border-pink focus:shadow-[0_0_0_2px_#EC4176] outline-none transition text-white placeholder:text-white text-xxs md:text-xs font-semibold"
            placeholder="Имя и фамилия"
            required
          />
          <input
            ref="email"
            type="email"
            class="w-full h-14 px-4 rounded-lg border border-[#A07BF0] bg-white/20 focus:border-pink focus:shadow-[0_0_0_2px_#EC4176] outline-none transition text-white placeholder:text-white text-xxs md:text-xs font-semibold"
            placeholder="E-mail"
            required
          />
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <input
                ref="password"
                type="password"
                class="w-full h-14 px-4 rounded-lg border border-[#A07BF0] bg-white/20 focus:border-pink focus:shadow-[0_0_0_2px_#EC4176] outline-none transition text-white placeholder:text-white text-xxs md:text-xs font-semibold"
                placeholder="Пароль"
                required
              />
            </div>
            <div>
              <input
                ref="rePassword"
                type="password"
                class="_is-error w-full h-14 px-4 rounded-lg border border-[#A07BF0] bg-white/20 focus:border-pink focus:shadow-[0_0_0_2px_#EC4176] outline-none transition text-white placeholder:text-white text-xxs md:text-xs font-semibold"
                placeholder="Повторно пароль"
                required
              />
              <div class="mt-3 text-pink text-xxs xs:text-xs">Введите пароль ещё раз</div>
            </div>
          </div>
          <button type="submit" class="w-full btn btn-pink bg-pink-300">Зарегистрироваться</button>
        </form>
        <div class="space-y-3 mt-5">
          <div class="text-xxs md:text-xs">
            <RouterLink to="/forgotPassword" class="text-white hover:text-white/70 font-bold">
              Забыли пароль?
            </RouterLink>
          </div>
          <div class="text-xxs md:text-xs">
            <RouterLink to="/registration" class="text-white hover:text-white/70 font-bold">
              Регистрация
            </RouterLink>
          </div>
        </div>
        <ul class="flex flex-col md:flex-row justify-between gap-3 md:gap-4 mt-14 md:mt-20">
          <li>
            <RouterLink
              to="/#"
              class="inline-block text-white hover:text-white/70 text-xxs md:text-xs font-medium"
              target="_blank"
              rel="noopener"
            >
              Пользовательское соглашение
            </RouterLink>
          </li>
          <li class="hidden md:block">
            <div class="h-full w-[2px] bg-white/20"></div>
          </li>
          <li>
            <RouterLink
              to="/#"
              class="inline-block text-white hover:text-white/70 text-xxs md:text-xs font-medium"
              target="_blank"
              rel="noopener"
              >Политика конфиденциальности
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import IconLogo from '../icons/IconLogo.vue';
import { ref } from 'vue';
import axios from 'axios';

export default {
  components: { IconLogo },
  setup() {
    const name = ref('');
    const email = ref('');
    const password = ref('');

    const auth = async () => {
      console.log('all data: ', name.value);
      try {
        if (name.value !== '') {
          await axios
            .post(
              'https://store-demo-api.cutcode.ru/api/v1/register',
              JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value
              })
            )
            .then((response) => {
              console.log('requested', response);
            });
        }
      } catch (e) {
        console.error(e);
      }
    };

    const onSubmit = () => {
      auth();
      console.log('submitted');
    };

    return { onSubmit };
  }
};
</script>
