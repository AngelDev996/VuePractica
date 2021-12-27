const app  =  Vue.createApp({
    //data, functions, components
    // template:'<h2> im the template</h2>'
    data(){
        return{
            showBooks:true,
            title: 'Harry Potter', 
            author: 'JK Rowling',
            age: 50,
        }
    },
    methods:{
    changeTitle(){
        this.title = 'Lords of the ring'
        console.log('You clicked me');
    },
    changeTitle2(title){
        this.title = title
    },
    toggleShowBooks(){
        this.showBooks = !this.showBooks

    }
    }
})

app.mount( '#app' )