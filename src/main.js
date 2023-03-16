import { createApp } from 'vue';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import './styles/global.module.scss';
const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
  })

import App from './App.vue'

app
  .use(vuetify)
  .mount('#app')
