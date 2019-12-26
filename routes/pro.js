const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
let router=express.Router();
//挂载路由

//用户列表
router.get("/v1/zujian",(req,res)=>{
	var sql="select * from zj_articles";
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
});
//登录
router.get("/v1/login/:user_name&:user_password",(req,res)=>{
	var $uname=req.params.user_name;
	var $upwd=req.params.user_password;
	var sql="select * from zj_users where user_name=? and user_password=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	});
});
//导出路由器对象
module.exports=router;