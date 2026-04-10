const app = Vue.createApp({
    data() {
        return {
            title: 'Vue',
            age: 3,
            showBooks: true,
            books: [
                { title: "The way of kings", author: "Brandon Sanderson", img: "assets/way_of_kings.jpeg", isFav: true },
                { title: "The name of the wind", author: "Patrick Rothfuss", img: "assets/name_of_the_wind.jpg", isFav: false },
                { title: "The final empire", author: "Brandon Sanderson", img: "assets/final_empire.jpg", isFav: true }
            ]
        }
    },
    methods: {
        changeTitle() {
            this.title = "Words of radiance";
        },

        handleMultipleParametersEvent(e, num) {
            console.log("event", e, "num", num);
        },
        handleEvent() {
            console.log("event", event);
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
            console.log("hej", book.isFav, "book number", this.books.indexOf(book));
        }
    },
    /** 
     * Om vi t.ex. vill bara visa favoritböckerna så kan vi skapa en computed property som filtrerar ut dessa.
     * Så hade man kunnat loopa över filteredBooks istället för books i template:en och då hade bara favoritböckerna visats.
     */
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav);
        }
    }
});

app.mount('#app');