
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('message', require('./components/Message.vue'));
Vue.component('message-container', require('./components/MessageContainer.vue'));
Vue.component('message-send', require('./components/MessageSend.vue'));

const app = new Vue({
    el: '#app',

    data: {
        messages: []
    },
    methods: {
        addMessage(message) {
            // Add to existing messages
            this.messages.push(message);
            // Persist to the database
            axios.post('/messages', message).then(response => {
                console.log(response);
                // Do whatever;
            })
        }
    },

    created() {
        axios.get('/messages').then(response => {
            this.messages = response.data;
        })
    }
});
