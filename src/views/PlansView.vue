<script setup lang="ts">
import HeaderView from '@/components/AppHeader.vue';
import axios from 'axios';

interface Plan {
    title: string;
    price: number;
    priceDuration: string;
    description: string;
    features: string[];
    downloadsDaily: number;
}

const plans: Plan[] = [
    {
        title: 'Iniciante',
        price: 5.00,
        priceDuration: '',
        description: 'Melhor opção para o seu bolso. Invista em você!',
        features: [
            'Leitura e download de 10 arquivos',
            '5 arquivos por dia'
        ],
        downloadsDaily: 5
    },
    {
        title: 'Intermediário',
        price: 26.99,
        priceDuration: '/3 meses',
        description: 'Variedade de opções, próprio para o seu desenvolvimento pessoal.',
        features: [
            'Acesso a 5 mil livros',
            'Leitura e download de 3 arquivos diários'
        ],
        downloadsDaily: 3
    },
    {
        title: 'Avançado',
        price: 299.99,
        priceDuration: '/12 meses',
        description: 'Melhor para larga escala e distribuição.',
        features: [
            'Acesso a 20 mil livros',
            'Leitura e download de 5 arquivos diários'
        ],
        downloadsDaily: 5
    },
    {
        title: 'Profissional',
        price: 499.99,
        priceDuration: '/12 meses',
        description: 'O melhor que podemos oferecer para você.',
        features: [
            'Acesso a 5 mil livros',
            'Leitura e download de 5 arquivos diários'
        ],
        downloadsDaily: 5
    }
];

// Após os testes, função logPlanInfo deve ser trocada por createPreference no onClick

async function createPreference(plan: Plan) {
    try {
        const response = await fetch('http://localhost:5000/create_preference', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                items: [
                    {
                        title: 'Plano ' + plan.title,
                        quantity: 1,
                        unit_price: plan.price,
                        picture_url: 'example.jpg'
                    }
                ]
            })
        });

        const data = await response.json();

        if (data.init_point) {
            window.location.href = data.init_point;
        } else {
            console.error('Erro: init_point não encontrado');
        }

    } catch (error) {
        console.error("Erro ao criar a preferência:", error);
    }
}

async function updateAccountPlan(plan: Plan) {
    try {
        const response = await axios.get('http://localhost:3000/account');
        const accountData = response.data[0];

        console.log(accountData)

        accountData.myPlan = plan.title;
        console.log(plan.title)
        accountData.downloadsDiarios = plan.downloadsDaily;

        const updateResponse = await axios.patch(
            `http://localhost:3000/account/c917`, 
            {
                myPlan: accountData.myPlan,
                downloadsDiarios: accountData.downloadsDiarios
            }
        );

        if (updateResponse.status === 200) {
            console.log('Plano e downloads diários atualizados com sucesso!');
        } else {
            console.error('Erro ao atualizar dados da conta');
        }

    } catch (error) {
        console.error("Erro ao atualizar o plano e downloads diários:", error);
    }
}

function logPlanInfo(plan: Plan) {
    console.log(`Plano escolhido: ${plan.title}`);
    console.log(`Número de downloads diários: ${plan.downloadsDaily}`);
    updateAccountPlan(plan); 
}
</script>

<template>
    <div>
        <HeaderView />
        <section class="bg-white dark:bg-gray-900 h-screen py-4">
            <div class="py-6 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6 h-full flex flex-col">
                <a href="#" class="flex items-center justify-center mb-4 text-3xl font-semibold text-gray-900 dark:text-white">
                    <img class="w-8 h-8 mr-2" src="../assets/logo-gbookpdf.png" alt="logo">
                    GBookPDF    
                </a>
                <div class="mx-auto max-w-screen-md text-center mb-6">
                    <h2 class="mb-2 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Escolha o melhor plano para você</h2>
                    <p class="mb-4 font-light text-gray-500 sm:text-lg dark:text-gray-400">A GBookPDF se preocupa em entregar o melhor custo benefício para nossos clientes, por isso te oferecemos os planos abaixo.</p>
                </div>
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    <div v-for="(plan, index) in plans" :key="index" class="flex flex-col p-4 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-6 dark:bg-gray-800 dark:text-white">
                        <div class="flex flex-col justify-between h-full">
                            <div>
                                <h3 class="mb-3 text-xl font-semibold">{{ plan.title }}</h3>
                                <p class="mb-3 h-15 font-light text-gray-500 sm:text-base dark:text-gray-400">{{ plan.description }}</p>
                                <div class="flex justify-center items-baseline my-4">
                                    <span class="mr-1 text-3xl font-extrabold">
                                        R$ {{ new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(plan.price) }}
                                    </span>
                                    <span class="text-gray-500 dark:text-gray-400">{{ plan.priceDuration }}</span>
                                </div>
                            </div>
                            <ul role="list" class="mb-6 space-y-3 text-left">
                                <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex" class="flex items-center space-x-2">
                                    <svg class="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                    <span>{{ feature }}</span>
                                </li>
                            </ul>
                            <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:text-white dark:focus:ring-primary-900">Get started</a>
                            <a href="#" @click="logPlanInfo(plan)" class="mt-4 text-white bg-blue-500 hover:bg-blue-900 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:text-white dark:focus:ring-gray-900">Escolher plano</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
</style>
