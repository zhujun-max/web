const express=require('express');
const bodyParser=require('body-parser');
//引入路由器
// const userRouter=require('./routes/user.js');
// const ajaxRouter=require('./routes/ajax.js');
const proRouter=require('./routes/pro.js');
let app=express();
app.listen(5050);
//托管静态资源
app.use( express.static('./pulic') );
// app.use( express.static('ajax') );
// app.use( express.static('pro') );
//使用body-parser中间件
app.use( bodyParser.urlencoded({
  extended:false
}) );
//把用户路由器挂载到服务器，给URL添加前缀/user  /user/reg
// app.use('/user',userRouter);
// app.use('/ajax',ajaxRouter);
app.use('/pro',proRouter);
