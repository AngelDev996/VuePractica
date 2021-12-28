const app  =  Vue.createApp({
    //data, functions, components
    // template:'<h2> im the template</h2>'
    data(){
        return{
            url:'https://angeldev996.me',
            showBooks:true,
            books:[
                {title:'Harry Potter', author:'J.K Rowling', isFav:true},
                {title:'Harry Potter2', author:'J.K Rowling', isFav:false},
                {title:'Harry Potter3', author:'J.K Rowling', isFav:true},
            ]
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

    },
    handleEvent(){
        console.log('handle');
    },
    handleMousemove(e){
        this.x = e.offsetX
        this.y = e.offsetY


    }
    }
})

app.mount( '#app' )