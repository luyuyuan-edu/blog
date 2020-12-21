const content=new Vue({
    el:"#contentList",
    data:{
        contents:{}
  
    },
    computed:{
        
    },
    created:function(){
       
        let logid=location.search.indexOf("?")>-1 ? location.search.split("=")[1]:"";
       
        console.log(logid)
       
    
        
        //初始化的时给content赋值
        axios({
            url:'/bloglist/contents?id='+logid,
            method:'get'
        }).then((res)=>{
            console.log(res)
            content.contents=res.data[0]
          
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