import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBank, faBuilding, faPencil, faPhone, faPlus, faTag, faTrash, faUser, faCalendar, faHome, faEnvelope, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

library.add(faBank);
library.add(faBuilding);
library.add(faPencil);
library.add(faPhone);
library.add(faPlus);
library.add(faTag);
library.add(faTrash);
library.add(faUser);
library.add(faCalendar);
library.add(faHome);
library.add(faEnvelope);
library.add(faInfo)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .mount('#app')
