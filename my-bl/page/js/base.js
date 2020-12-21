const tagscloud=new Vue({
el:"#tags_cloud",
data:{
    tags:{},
},
computed:{
    randmColor:function(){
        return function(){
            let red=Math.random()*255;
            let gree=Math.random()*255;
            let blue=Math.random()*255;
                return "rgb("+red+","+gree+","+blue+")";
            

        }
       
    },
    randomSize:function(){
        return function(){
            let size=(Math.random()*20+12)+"px";
            console.log(size)
            return size;

        }
        

    },
    jto:function(){
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
       tagscloud.tags=res.data
      
      
    })
}
});
const hotblog=new Vue({
    el:"#hot_blog",
    data:{
        titlelist:[
            {
                title:"这是一个连接",
                link:"http://www.baidu.com"
            },
            {
                title:"这是一个连接",
                link:"http://www.baidu.com"
            },
            {
                title:"这是一个连接",
                link:"http://www.baidu.com"
            },
            {
                title:"这是一个连接",
                link:"http://www.baidu.com"
            },
        ]
    }
})