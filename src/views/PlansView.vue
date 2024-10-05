<script setup lang="ts">

</script>

<template>
    <section class="bg-white dark:bg-gray-900 h-screen">
        <div class="py-6 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6 h-full flex flex-col justify-center">
            <a href="#" class="flex items-center justify-center mb-4 text-3xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="../assets/logo-gbookpdf.png" alt="logo">
                GBookPDF    
            </a>
            <div class="mx-auto max-w-screen-md text-center mb-6">
                <h2 class="mb-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Escolha o melhor plano para você</h2>
                <p class="mb-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">A GBookPDF se preocupa em entregar o melhor custo benefício para nossos clientes, por isso te oferecemos os planos abaixo.</p>
            </div>
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                <!-- Pricing Card 1 -->
                <div class="flex flex-col p-4 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-6 dark:bg-gray-800 dark:text-white">
                    <div class="flex flex-col justify-between h-full">
                        <div>
                            <h3 class="mb-3 text-xl font-semibold">Iniciante</h3>
                            <p class="mb-3 h-15 font-light text-gray-500 sm:text-base dark:text-gray-400">Melhor opção para o seu bolso. Invista em você!</p>
                            <div class="flex justify-center items-baseline my-4">
                                <span class="mr-1 text-3xl font-extrabold">R$ 5,00</span>
                            </div>
                        </div>
                        <ul role="list" class="mb-6 space-y-3 text-left">
                            <li class="flex items-center space-x-2">
                                <svg class="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Leitura e download de <span class="font-semibold">10 arquivos</span></span>
                            </li>
                            <li class="flex items-center space-x-2">
                                <svg class="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span><span class="font-semibold">5 arquivos por dia</span></span>
                            </li>
                        </ul>
                        <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:text-white dark:focus:ring-primary-900">Get started</a>
                    </div>
                </div>

                <!-- Pricing Card 2 -->
                <div class="flex flex-col p-4 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-6 dark:bg-gray-800 dark:text-white">
                    <div class="flex flex-col justify-between h-full">
                        <div>
                            <h3 class="mb-3 text-xl font-semibold">Intermediário</h3>
                            <p class="mb-3 h-15 font-light text-gray-500 sm:text-base dark:text-gray-400">Variedade de opções, próprio para o seu desenvolvimento pessoal.</p>
                            <div class="flex justify-center items-baseline my-4">
                                <span class="mr-1 text-3xl font-extrabold">R$ 26,99</span>
                                <span class="text-gray-500 dark:text-gray-400">/3 meses</span>
                            </div>
                        </div>
                        <ul role="list" class="mb-6 space-y-3 text-left">
                            <li class="flex items-center space-x-2">
                                <svg class="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Acesso a <span class="font-semibold">5 mil livros</span></span>
                            </li>
                            <li class="flex items-center space-x-2">
                                <svg class="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Leitura e download de <span class="font-semibold">3 arquivos diários</span></span>
                            </li>
                        </ul>
                        <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:text-white dark:focus:ring-primary-900">Get started</a>
                    </div>
                </div>

                <!-- Pricing Card 3 -->
                <div class="flex flex-col p-4 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-6 dark:bg-gray-800 dark:text-white">
                    <div class="flex flex-col justify-between h-full">
                        <div>
                            <h3 class="mb-3 text-xl font-semibold">Avançado</h3>
                            <p class="mb-3 h-15 font-light text-gray-500 sm:text-base dark:text-gray-400">Melhor para larga escala e distribuição.</p>
                            <div class="flex justify-center items-baseline my-4">
                                <span class="mr-1 text-3xl font-extrabold">R$ 299,99</span>
                                <span class="text-gray-500 dark:text-gray-400">/12 meses</span>
                            </div>
                        </div>
                        <ul role="list" class="mb-6 space-y-3 text-left">
                            <li class="flex items-center space-x-2">
                                <svg class="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Acesso a <span class="font-semibold">20 mil livros</span></span>
                            </li>
                            <li class="flex items-center space-x-2">
                                <svg class="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Leitura e download de <span class="font-semibold">5 arquivos diários</span></span>
                            </li>
                        </ul>
                        <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:text-white dark:focus:ring-primary-900">Get started</a>
                    </div>
                </div>

                <!-- Pricing Card 4 -->
                <div class="flex flex-col p-4 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-6 dark:bg-gray-800 dark:text-white">
                    <div class="flex flex-col justify-between h-full">
                        <div>
                            <h3 class="mb-3 text-xl font-semibold">Profissional</h3>
                            <p class="mb-3 h-15 font-light text-gray-500 sm:text-base dark:text-gray-400">O melhor que podemos oferecer para você. </p>
                            <div class="flex justify-center items-baseline my-4">
                                <span class="mr-1 text-3xl font-extrabold">R$ 499,99</span>
                                <span class="text-gray-500 dark:text-gray-400">/12 meses</span>
                            </div>
                        </div>
                        <ul role="list" class="mb-6 space-y-3 text-left">
                            <li class="flex items-center space-x-2">
                                <svg class="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Acesso a <span class="font-semibold">5 mil livros</span></span>
                            </li>
                            <li class="flex items-center space-x-2">
                                <svg class="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                                <span>Leitura e download de <span class="font-semibold">5 arquivos diários</span></span>
                            </li>
                        </ul>
                        <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:text-white dark:focus:ring-primary-900">Get started</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Estilo personalizado, se necessário */
</style>
