<template>
  <div class="container">
    <h1>Sign in to access the secret page</h1>
    <div>
      <label for="email">
        <input id="email" type="email" value="test" />
      </label>
      <label for="password">
        <input id="password" type="password" value="test" />
      </label>
      <button @click="postLogin">login</button>
      <p>The credentials are not verified for the example purpose.</p>
    </div>
  </div>
</template>

<script>
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  middleware: "notAuthenticated",
  methods: {
    postLogin() {
      setTimeout(() => {
        // 我们用定时器来模拟异步请求。
        const auth = {
          accessToken: "someStringGotFromApiServiceWithAjax",
        };

        // 更改以存储以供客户端渲染【存储到容器是为了方便共享】
        // 保存用户登录状态
        this.$store.commit("setAuth", auth);

        // 将【令牌（登录状态）】保存在 cookie 中以进行服务器渲染
        // 防止页面刷新造成数据丢失，做持久化处理
        Cookie.set("auth", auth);

        this.$router.push("/");
      }, 1000);
    },
  },
};
</script>
