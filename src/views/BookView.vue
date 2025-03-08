<template>
    <div v-if="book">
      <h1>Detalhes do Livro: {{ book.title }}</h1>
      <p><strong>Autor:</strong> {{ book.author }}</p>
      <p><strong>Descrição:</strong> {{ book.description }}</p>
    </div>
    <div v-else>
      <p>Carregando...</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        book: null,
      };
    },
    created() {
      this.fetchBookData();
    },
    methods: {
      async fetchBookData() {
        try {
          const bookId = this.$route.params.id; 
          const response = await axios.get(`http://localhost:3000/books/${bookId}`); 
          this.book = response.data; 
        } catch (error) {
          console.error('Erro ao buscar os dados do livro:', error);
        }
      },
    },
  };
  </script>
  