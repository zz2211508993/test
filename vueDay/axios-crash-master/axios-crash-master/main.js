// AXIOS GLOBALS
// auth= Authorization=授权
// Key=Token=令牌
// axios.defaults.headers.common['X-Auth-Token']=
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

// GET REQUEST

function getTodos(){
  // axios({
  //   method:'get',
  //   url:'https://jsonplaceholder.typicode.com/todos',
  //   //params用于url后面的哈希值
  //   params:{
  //     //数据展示几个
  //     _limit:5,
  //   }
  // })
  // axios
  //     .get('https://jsonplaceholder.typicode.com/todos',{
  //       params:{
  //             _limit:5,
  //           }
  //     })
  //     .then(res=>showOutput(res))
  //     .catch(err=>showOutput(err))
  axios
      //timeout设置1毫秒可能有些内容没有加载出来
      .get('https://lianghj.top:3000/playlist/detail?id=6920064959',{
      })
      .then(res=>{
          console.log(res);
      })
      .catch(err=>console.log(err))
  //默认情况下是get提交的方式，所以可以省略.get 也可以在url的后面直接写上哈希值
  // axios('https://jsonplaceholder.typicode.com/todos?_limit=5')
  //     .then(res=>showOutput(res))
  //     .catch(err=>showOutput(err))
}

// POST REQUEST
function addTodo() {
  // axios({
  //   method:'post',
  //   url:'https://jsonplaceholder.typicode.com/todos',
  //   data:{
  //     title:'New Title1',
  //     completed:false,
  //   }
  // })
  //     .then(res => showOutput(res))
  //     .catch(err => console.error(err));
  axios.post('https://jsonplaceholder.typicode.com/todos',{
    data:{
      title:'New Title1',
      completed:false,
    }
  })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  //put替换所有的包含id和userid /1表示替换id为1的
  //
  // axios.put('https://jsonplaceholder.typicode.com/todos/1',{
  //     title:'upDate Title1',
  //     completed:true,
  // })
  //     .then(res => showOutput(res))
  //     .catch(err => console.error(err));
  //这个只是替换了指定的也就是title和completed
  axios.patch('https://jsonplaceholder.typicode.com/todos/1',{
    title:'upDate Title1',
    completed:true,
  })
      .then(res => showOutput(res))
      .catch(err => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  axios
    .delete('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}


// SIMULTANEOUS DATA
function getData() {
  axios.all([
    // axios.get('https://jsonplaceholder.typicode.com/todos'),
    // axios.get('https://lianghj.top:3000/top/artists'),
    // axios.get('https://lianghj.top:3000/top/artists?offset=0&limit=30'),
      axios.get('https://lianghj.top:3000/top/artists'),
  ])
      //axios.spread 接收all数组中的所有请求
      .then(axios.spread((todos,posts)=>console.log(todos,posts)))
      .catch(err => console.error(err));
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'sometoken'
    }
  };

  axios
    .post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        title: 'New Todo',
        completed: false
      },
      config
    )
    .then(res => showOutput(res))
    .catch(err => console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options= {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello world',
      id:1,
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title=data.title.toUpperCase();
      return data;
    })
  }
  axios(options).then(res=>showOutput(res))
}

// ERROR HANDLING
function errorHandling() {
  axios
      // .get('https://jsonplaceholder.typicode.com/todoss')
      .get('https://jsonplaceholder.typicode.com/todoss',{
        validateStatus:function (status){
          return status <500;
        }
      })
      .then(res => showOutput(res))
      .catch(err => {
        if(err.response){
          if(err.response.status===404){
            console.log(err.response.status);
          }else if(err.request){
              //err.request 请求错误
              console.log(err.request);

          }else{
            //err.message 返回错误的信息
            console.log(err.message)
          }
        }

  })
}

// CANCEL TOKEN
function cancelToken() {
  // CancelToken.source取消请求
  const source=axios.CancelToken.source();
  axios
.get('https://jsonplaceholder.typicode.com/todos',{
    cancelToken:source.token,
})
      .then(res => showOutput(res))
      .catch(thrown=>{
        if(axios.isCancel(thrown)){
                                             //thrown.message就是取消请求提示的信息
          console.log('Request canceled'+','+thrown.message);
        }
      })
  if(true){
    //取消请求提示的信息
    source.cancel('Request cancel!')
  }
}

axios.interceptors.request.use(
    config=>{
      console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date().getTime()}`);
      return config;
    },
    error=>{
      return Promise.reject(error);
    }
)

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  config => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    );
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// AXIOS INSTANCE
const axiosInstance=axios.create({
  baseURL:'https://jsonplaceholder.typicode.com'
})
//('/comment') 在url原有的基础上加上这个
// axiosInstance.get('/comment').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);
