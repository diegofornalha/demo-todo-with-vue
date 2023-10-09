<template>
    <div>
      <button @click="connectToBlocto">Conectar à Blocto</button>
    </div>
  </template>
  
  <script>
  import Blocto from '@blocto/sdk';
  
  export default {
    name: 'BloctoConnect',
    data() {
      return {
        blocto: null
      };
    },
    created() {
      this.blocto = new Blocto({
        env: 'testnet',
        defaultChain: 'flow'
      });
    },
    methods: {
      async connectToBlocto() {
        try {
          await this.blocto.connect();
          console.log('Conectado à Blocto!');
        } catch (error) {
          console.error('Erro ao conectar à Blocto:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente, se necessário. */
  </style>
  