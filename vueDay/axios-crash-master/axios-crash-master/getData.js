window.onload=function (){

}
function getData(port,method) {
    axios({
        method:method,
        url:'https://lianghj.top:3000/top'+port,
        params:{
        }
    })
        .then(res=>{
            console.log(res);
            return res;
        })
}
