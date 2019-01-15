<template>
  <div class="more">
      <title-wrapper titleText="更多"></title-wrapper>
      <div class="more-item">
          <div class="more-title"></div>
          <div class="navitems">
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">2019年运势</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">八字合婚</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">手机号预测</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">四柱运势</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">查太岁</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">四季运势</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">八字桃花</div>
            </router-link>
            </div>
      </div>
      <div class="more-item">
          <div class="more-title"></div>
          <div class="navitems">
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">2019年运势</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">八字合婚</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">手机号预测</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">四柱运势</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">查太岁</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">四季运势</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">八字桃花</div>
            </router-link>
            </div>
      </div>
      <div class="more-item">
          <div class="more-title"></div>
          <div class="navitems">
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">2019年运势</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">八字合婚</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">手机号预测</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">四柱运势</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">查太岁</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">四季运势</div>
            </router-link>
            <router-link to="/" class="n-item">
                <div class="ni_icon"></div>
                <div class="ni_title">八字桃花</div>
            </router-link>
            </div>
      </div>
  </div>
</template>

<script>
  import titleWrapper from "../components/title";
  export default {
      components: {
          titleWrapper
      },
      data() {
          return {

          }
      }
  }
</script>

<style scoped>
    .more {
        padding-top: 1.28rem;
    }
    .more-title {
        width: 2.43rem;
        height: 0.6rem;
        margin: 0 auto;
        background: url("../assets/images/more_title1.png") no-repeat 0 0.1rem;
        background-size: contain;
        padding-top: 0.1rem;
        padding-bottom: 0.2rem;
    }
    .more-item:nth-child(3)>.more-title {
        background: url("../assets/images/more_title2.png") no-repeat 0 0.1rem;
        background-size: contain;
    }
    .more-item:nth-child(4)>.more-title {
        background: url("../assets/images/more_title3.png") no-repeat 0 0.1rem;
        background-size: contain;
    }
</style>
