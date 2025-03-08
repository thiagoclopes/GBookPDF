<template>
    <div v-if="book">
      <h1>Detalhes do Livro: {{ book ? book.title : 'Carregando...' }}</h1>
      <p><strong>Autor:</strong> {{ book.author }}</p>
      <p><strong>Descrição:</strong> {{ book.description }}</p>
    </div>
    <div v-else>
      <p>Carregando...</p>
    </div>
  </template>
  
  <script setup lang="ts">
    import axios from 'axios';
    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';

    interface Book {
      title: string;
      author: string;
      description: string;
    }

    const route = useRoute();
    const book = ref<Book | null>(null);

    onMounted(async () => {
      await fetchBookData();
    });

    const fetchBookData = async () => {
      try {
        const bookId = route.params.id; 
        const response = await axios.get(`http://localhost:3000/books/${bookId}`); 
        book.value = response.data; 
      } catch (error) {
        console.error('Erro ao buscar os dados do livro:', error);
      }
    };
  </script>
  