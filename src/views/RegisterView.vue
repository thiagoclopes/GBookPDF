<script setup lang="ts">
import { ref } from 'vue';

const nome = ref<string>('');
const email = ref<string>('');
const senha = ref<string>('');
const confirmarSenha = ref<string>('');

// Função para salvar os dados de cadastro
function saveData() {
  if (senha.value !== confirmarSenha.value) {
    console.error('As senhas não correspondem');
    return;
  }
  console.log('Nome:', nome.value);
  console.log('Email:', email.value);
  console.log('Senha:', senha.value);
}
</script>

<template>
    <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-10 h-10 mr-2" src="../assets/logo-gbookpdf.png" alt="logo">
                GBookPDF    
            </a>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Cadastrar
                    </h1>
                    <form class="space-y-4 md:space-y-6" @submit.prevent="saveData">
                        <div>
                            <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                            <input type="text" name="nome" v-model="nome" id="nome" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Seu nome" required>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu email</label>
                            <input type="email" name="email" v-model="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required>
                        </div>
                        <div>
                            <label for="senha" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                            <input type="password" name="senha" v-model="senha" id="senha" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </div>
                        <div>
                            <label for="confirmarSenha" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirme sua senha</label>
                            <input type="password" name="confirmarSenha" v-model="confirmarSenha" id="confirmarSenha" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cadastrar</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            Já possui uma conta? 
                            <router-link
                                to="/signin"
                                class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Faça login
                            </router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>
