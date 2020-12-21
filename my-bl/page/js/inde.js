


const everyDay=new Vue({
    el:"#everyDay",
    data:{
        content:"j;ahpa;lbj"
  
    },
    computed:{
        getcontent:function(){
            return this.content;
        }
    },
    created:function(){
        //初始化的时给content赋值
        axios({
            url:'/news/every',
            method:'get'
        }).then((res)=>{
            everyDay.content=res.data[0].content
          
        })
    }
})
const bloglist=new Vue({
    el:"#blogList",
    data:{
        articlelist:{},
        
        
    },
    methods:{
        

    },
    computed:{
        junto:function(){
            return function(id){
                location.href="./content.html?id="+id
            }
            

        }
    },
    created:function(){
        //初始化的时给content赋值
        axios({
            url:'/bloglist/blog',
            method:'get'
        }).then((res)=>{
           console.log(res.data)
           let sp=res.data;
           for (let i = 0; i < res.data.length; i++) {
               sp[i].content=res.data[i].content.substring(0,100)+"......"
               
           }
           bloglist.articlelist=sp
         console.log(sp)
          
        })
       
    }
})
const seach=new Vue({
    el:"#search",
    data:{
       seachVal:[],
       seachlist:'',
       inputfous:true
        
    },
    methods:{
    
    },
    watch:{
        
        seachlist(){
            axios({
                url:"/seachlist?t="+this.seachlist,
                method:"get"
        }).then((res)=>{
          this.seachVal=res.data
           
        }
        )
        
     
        }

    },

    computed:{
        jte:function(id){
            return function(id){
                location.href="./content.html?id="+id
                console.log(id)
                this.seachlist=''
            }
          } 
    },
    created:function(){
        //初始化的时给content赋值

       
       
    }
})