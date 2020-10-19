// 验证是否登录的中间件
export default function ({
  store,
  redirect
}) {
  // 如果用户通过身份验证，则重定向到首页
  if (store.state.user) {
    return redirect('/')
  }
}