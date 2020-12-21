


const mapevwey=new Vue({
    el:"#blogs",
    data:{
        maplist:[]
  
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
            console.log(res)
            mapevwey.maplist=res.data
          
        })
    }
})