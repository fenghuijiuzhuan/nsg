<template>
  <div class="comment-list">
    <ul class="list">
      <li class="item" v-for="(item,index) in list" :key="index">
        <div class="userinfo">
          <img :src="item.img" :alt="item.name">
          <div>
            <p class="name">{{item.name}}</p>
            <p class="level">
              <i class="star" v-for="n in 5" :class="{'light':n<=item.level}" :key="n"></i>
            </p>
          </div>
          <p class="date">{{item.date}}</p>
        </div>
        <p class="text">{{item.say}}</p>
      </li>
    </ul>
    <p class="morecomment text-center"><span>查看全部14613条评论</span></p>
  </div>
</template>

<script>
export default {
  name: "comment",
  data(){
    return {
      list: [
        {
          img: "/static/images/头像1.png",
          name: "花******",
          date: "2019-1-9",
          level: 4,
          say: "谢谢大师解惑"
        },
        {
          img: "/static/images/头像2.png",
          name: "李**",
          date: "2019-1-9",
          level: 4,
          say: "谢谢大师解惑"
        },
        {
          img: "/static/images/头像3.png",
          name: "李**",
          date: "2019-1-9",
          level: 4,
          say: "谢谢大师解惑"
        }
      ]
    }
  }

}
</script>

<style scoped>
  .comment-list{
    width: 6.3rem;
  }
  .comment-list .list .item{
    padding-top:.14rem;
    border-top: 1px solid #EAE3DF;
  }
  .comment-list .list .item:first-child{
    border-top: 0;
  }
  .comment-list .list .item .text{
    font-size: .28rem;
    color: #A48873;
    margin: .1rem 0;
  }
  .comment-list .userinfo{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .comment-list .userinfo>img{
    margin-right: .2rem;
    flex-shrink: 0;
  }
  .comment-list .userinfo>div{
    width: 100%;
    flex-shrink: 1;
  }
  .comment-list .userinfo .name{
    font-size: .28rem;
    color: #222;
    margin-bottom: .1rem;
  }
  .comment-list .userinfo .date{
    font-size: .22rem;
    color: #BFB0A4;
    flex-shrink: 0;
    margin-top: -.4rem
  }
  .comment-list .userinfo .level{
    font-size: 0;
  }
  .comment-list .userinfo .level .star{
    display: inline-block;
    width: .3rem;
    height: .3rem;
    background: url(../assets/images/灰色星星.png) no-repeat;
    vertical-align: top;
  }
  .comment-list .userinfo .level .star.light{
    background-image: url(../assets/images/点亮星星.png);
  }
  .comment-list .morecomment{
    padding-top: .3rem;
    font-size: .24rem;
    text-decoration: underline;
    color: #A48873;
    border-top: 1px solid #E9E3DE;
  }
</style>
