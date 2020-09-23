<template>
  <div>
    <!-- 导航栏 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <!-- <a class="navbar-brand" href="index.html">conduit</a> -->
        <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>

        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <!-- <a class="nav-link active" href="">Home</a> -->
            <nuxt-link class="nav-link" to="/" exact>首页</nuxt-link>
          </li>

          <!-- 登录后显示 -->
          <template v-if="user">
            <li class="nav-item">
              <!-- <a class="nav-link" href>
              <i class="ion-compose"></i>&nbsp;New Post
              </a>-->
              <nuxt-link class="nav-link" to="/editor">
                <i class="ion-compose"></i>&nbsp;发布
              </nuxt-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href>
              <i class="ion-gear-a"></i>&nbsp;Settings
              </a>-->
              <nuxt-link class="nav-link" to="/settings">
                <i class="ion-gear-a"></i>&nbsp;设置
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/profile/123">
                <img
                  class="user-pic"
                  :src= "user.image"
                />
                {{ user.username }}
              </nuxt-link>
            </li>
          </template>

          <!-- 未登录显示 -->
          <template v-else>
            <li class="nav-item">
              <!-- <a class="nav-link" href>Sign up</a> -->
              <nuxt-link class="nav-link" to="/register">注册</nuxt-link>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href>Sign up</a> -->
              <nuxt-link class="nav-link" to="/login">登录</nuxt-link>
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <!-- 导航栏 -->

    <!-- 子路由 -->
    <nuxt-child />
    <!-- 子路由 -->

    <!-- footer -->
    <footer>
      <div class="container">
        <a href="/" class="logo-font">conduit</a>
        <span class="attribution">
          An interactive learning project from
          <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
    </footer>
    <!-- footer -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LayoutIndex",
  computed: {
    ...mapState(["user"]),
  },
};
</script>