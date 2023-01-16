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
            type="email"
            v-model="form.email.value"
            class="w-full h-14 px-4 rounded-lg border border-[#A07BF0] bg-white/20 focus:border-pink focus:shadow-[0_0_0_2px_#EC4176] outline-none transition text-white placeholder:text-white text-xxs md:text-xs font-semibold"
            placeholder="E-mail"
            required
          />
          <input
            v-model="form.password.value"
            type="password"
            class="w-full h-14 px-4 rounded-lg border border-[#A07BF0] bg-white/20 focus:border-pink focus:shadow-[0_0_0_2px_#EC4176] outline-none transition text-white placeholder:text-white text-xxs md:text-xs font-semibold"
            placeholder="Пароль"
            required
          />
          <button type="submit" class="w-full btn btn-pink">Войти</button>
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

<script>
import IconLogo from '../icons/IconLogo.vue';
import axios from 'axios';
import { useForm } from '../../use/form';

const required = (val) => !!val;
const minLength = (num) => (val) => val.length >= num;

export default {
  components: { IconLogo },
  setup() {
    const form = useForm({
      email: {
        value: '',
        validators: { required }
      },
      password: {
        value: '',
        validators: { required, minLength: minLength(8) }
      }
    });

    const login = async () => {
      try {
        if (form.email.value !== '') {
          const regUrl = 'https://store-demo-api.cutcode.ru/api/v1/auth/login';

          axios.defaults.headers.post['Content-Type'] = 'application/json';
          axios.defaults.headers.post['Accept'] = 'application/json';

          const data = JSON.stringify({
            email: form.email.value,
            password: form.password.value
          });

          await axios.post(regUrl, data).then((response) => {
            console.log('requested', response);
          });
        }
      } catch (e) {
        console.error('Register is fail!!!:::', e);
      }
    };

    const onSubmit = () => {
      login();
    };

    return { form, onSubmit };
  }
};
</script>
