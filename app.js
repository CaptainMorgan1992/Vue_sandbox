const app = Vue.createApp({
    data() {
        return {
            title: 'Vue',
            age: 3,
            showBooks: false
        }
    },
    methods: {
        changeTitle() {
            this.title = "Words of radiance";
        }
    }
});

app.mount('#app');