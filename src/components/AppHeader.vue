<template>
    <header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800" style="background-color: #1D3557">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" class="flex items-center">
                <img src="../assets/logo-gbookpdf.png" class="mr-3 h-6 sm:h-10" alt="GBookPDF Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap text-white">GBookPDF</span>
            </a>
            <div class="flex flex-row items-center order-2">
                <router-link
                    to="/plans"
                    class="text-white hover:bg-blue-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 md:px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 lg:hidden align-bottom"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7.586a2 2 0 011.414.586l3.414 3.414A2 2 0 0120 8.414V18a2 2 0 01-2 2z" />
                    </svg>
                    <span class="hidden lg:block">Planos</span>
                </router-link>
                <router-link
                    to="/sign-in"
                    class="text-white hover:bg-blue-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 md:px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 lg:hidden"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 0115 0v.75H4.5v-.75z" />
                    </svg>
                    <span class="hidden lg:block">Entrar</span>
                </router-link>
                
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 text-white rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <router-link
                        to="/"
                        class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-white lg:p-0 dark:text-white"
                        aria-current="page"
                        >
                        Início
                        </router-link>
                    </li>
                    <li>
                        <router-link
                        to="/"
                        class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        >
                        Gêneros
                        </router-link>
                    </li>
                    <li>
                        <router-link
                        to="/"
                        class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                        >
                        Contato
                        </router-link>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</header>
</template>
