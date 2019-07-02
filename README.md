1· 定义统一的 response 接口

```
interface CusResponse<T> {
  // 给出的提示
  message:string
  // 返回http自定义状态
  code:string
  // 对应的数据内容
  list:T[]
}

```

2· 定义统一的异常处理拦截器 拦截所有的异常返回

3· 登录返回 token 设计

- 用户输入用户名和密码 登录成功 返回对应的 token 以及对应的用户信息(包含用户的权限，这里权限使用一个字段 auth 来表明)
- auth 字段中包含了所有可能的角色名称 例如（admin · user ，这个字段可以用户自定义）

- 资源表 resource ，里面包含了角色可以操作的所有资源，比如能够访问的页面列表

```
{
  user:{
    name:"",
    auth:{
      admin:[{
        id:1,
        url:'/com/zuj1'
      }]
    }
  }
}
```
