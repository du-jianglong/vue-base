<template>
  <div class="login-index">
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">
              {{ isLogin ? "Sign In" : "Sign Up" }}
            </h1>
            <p class="text-xs-center">
              <nuxt-link v-if="isLogin" to="/register"
                >Need an account?</nuxt-link
              >
              <nuxt-link v-else to="/login">Have an account?</nuxt-link>
            </p>

            <ul class="error-messages">
              <template v-for="(meaasges, field) in errors">
                <li v-for="(msg, index) in meaasges" :key="index">
                  {{ field }} {{ msg }}
                </li>
              </template>
            </ul>

            <form @submit.prevent="onSubmit">
              <fieldset class="form-group" v-if="!isLogin">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Your Name"
                  v-model="user.username"
                  required
                  minlength="2"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="email"
                  placeholder="Email"
                  v-model="user.email"
                  required
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                  required
                  minlength="8"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                {{ isLogin ? "Sign In" : "Sign Up" }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from "@/api/user";

// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined

export default {
  // 在路由匹配组件之前会先执行中间件处理
  middleware: 'notAuthenticated',
  name: "LoginIndex",
  computed: {
    isLogin() {
      return this.$route.name === "login";
    },
  },
  data() {
    return {
      user: {
        username: "",
        email: "lpzmail@163.com",
        password: "12345678",
      },
      errors: {},
    };
  },
  methods: {
    // TODO: 表单提交前进行验证（未完成......）

    async onSubmit() {
      try {
        // 提交表单，请求登录
        const { data } = this.isLogin
          ? await login({
              user: this.user,
            })
          : await register({
              user: this.user,
            });

        // 保存用户登录状态
        this.$store.commit('setUser', data.user)

        // 防止页面刷新造成数据丢失，做持久化处理
        Cookie.set('user', data.user)

        // 登录/注册成功后跳转到相应页面
        this.$router.push(this.isLogin ? "/" : "/login");
      } catch (error) {
        // 捕获错误信息
        this.errors = error.response.data.errors;
      }
    },
  },
};
</script>

<style>
</style>