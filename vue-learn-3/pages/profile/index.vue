<template>
  <div class="user-profile">
    <div class="profile-page">
      <div class="user-info">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-10 offset-md-1">
              <img :src="myProfile.image" class="user-img" />
              <h4>{{myProfile.username}}</h4>
              <p>
                {{myProfile.bio || '你还没有写任何东西。'}}
              </p>
              <button class="btn btn-sm btn-outline-secondary action-btn">
                <i class="ion-plus-round"></i>
                &nbsp; Follow Eric Simons
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <div class="articles-toggle">
              <ul class="nav nav-pills outline-active">
                <li class="nav-item">
                  <a class="nav-link active" href="">My Articles</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="">Favorited Articles</a>
                </li>
              </ul>
            </div>

            <div class="article-preview">
              <div class="article-meta">
                <a href=""><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
                <div class="info">
                  <a href="" class="author">Eric Simons</a>
                  <span class="date">January 20th</span>
                </div>
                <button class="btn btn-outline-primary btn-sm pull-xs-right">
                  <i class="ion-heart"></i> 29
                </button>
              </div>
              <a href="" class="preview-link">
                <h1>How to build webapps that scale</h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
              </a>
            </div>

            <div class="article-preview">
              <div class="article-meta">
                <a href=""><img src="http://i.imgur.com/N4VcUeJ.jpg" /></a>
                <div class="info">
                  <a href="" class="author">Albert Pai</a>
                  <span class="date">January 20th</span>
                </div>
                <button class="btn btn-outline-primary btn-sm pull-xs-right">
                  <i class="ion-heart"></i> 32
                </button>
              </div>
              <a href="" class="preview-link">
                <h1>
                  The song you won't ever stop singing. No matter how hard you
                  try.
                </h1>
                <p>This is the description for the post.</p>
                <span>Read more...</span>
                <ul class="tag-list">
                  <li class="tag-default tag-pill tag-outline">Music</li>
                  <li class="tag-default tag-pill tag-outline">Song</li>
                </ul>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { profiles } from "@/api/user";

export default {
  // 在路由匹配组件之前会先执行中间件处理
  middleware: "authenticated",
  name: "UserProfile",
  data() {
    return {
      myProfile: {},
      errors: {},
    };
  },
  async created() {
    let _this = this
    try {
      await profiles(_this.$route.params.username).then(({ data }) => {
        if (data.profile && typeof data.profile === "object") {
          var jsonData = JSON.stringify(data.profile);
          var result = JSON.parse(jsonData);
          _this.myProfile = result;
        }
        console.log("获取个人资料成功：");
        console.log(_this.myProfile.username);
      });
    } catch (error) {
      if (error.response.data && error.response.data.errors) {
        _this.errors = error.response.data.errors;
      } else {
        _this.errors = error.message;
      }

      console.log("获取个人资料失败：");
      console.error(_this.errors);
    }
  }
};
</script>

<style>
</style>