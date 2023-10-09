import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import store from './store'
import Blocto from '@blocto/sdk';

const blocto = new Blocto({
    env: 'testnet', // ou 'mainnet' dependendo do ambiente
    defaultChain: 'flow'
  });


createApp(App).use(router).use(store).mount('#app')