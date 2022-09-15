<template>
  <div class="user-detail-wrapper">
    <div class="back-btn">
      <button class="gg-arrow-left" @click="$router.back()"></button>
    </div>
    <div class="user-detail">
      <div class="user-image">
        <img :src="userDetail.avatar_url" />
      </div>
      <div class="username">{{ userDetail.name }}</div>
      <div class="repo-list-wrapper container">
        <div class="repo-list" v-for="repo in userDetailRepo" :key="repo.id">
          <div class="repo-link">
            <a :href="repo.html_url">{{ repo.name }}</a>
          </div>
          <div class="repo-icons">
            <span class="watchers">
              <img src="../assets/watch.png" />
              <label>{{ repo.watchers_count }}</label>
            </span>
            <span class="stars">
              <img src="../assets/star.png" />
              <label>{{ repo.stargazers_count }}</label>
            </span>
            <img />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";

export default {
  name: "UserDetail",
  components: {},
  computed: {
    ...mapState(["userDetail", "userDetailRepo"]),
  },
  async mounted() {
    if (this.$route.params.username) {
      await this.pullUserByName(this.$route.params.username);
      await this.pullUserRepo(this.$route.params.username);
    } else {
      this.$router.push({ name: "PageNotFound" }).catch(() => {});
    }
  },
  methods: {
    ...mapActions(["pullUserByName", "pullUserRepo"]),
  },
};
</script>
<style lang="scss" scoped>
  .user-detail-wrapper{
    position: relative;
  }
  .back-btn{
    position: absolute;
    top:3.5%;
    left:3%;
    .gg-arrow-left {
      box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 35px;
    height: 35px;
    background: black;
    color: #fff;
    padding: 0;
    border-radius: 50%;
}
.gg-arrow-left::after,
.gg-arrow-left::before {
  content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 8px;
}
.gg-arrow-left::after {
    width: 8px;
    height: 8px;
    border-bottom: 2px solid;
    border-left: 2px solid;
    transform: rotate(45deg);
    bottom: 11px
}
.gg-arrow-left::before {
  width: 16px;
    height: 2px;
    bottom: 14px;
    background: #fff;
}

  }
.user-detail {
  padding: 20px;
  .user-image {
    text-align: center;
    img {
      width: 100%;
      max-width: 400px;
      height: auto;
      border-radius: 50%;
    }
  }
  .username {
    text-transform: capitalize;
    text-align: center;
    margin: 10px 15px;
    font-weight: 800;
    font-size: 40px;
    line-height: 47px;
  }
  .repo-list-wrapper {
    .repo-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2px 8px;
    }
    .repo-link {
      @media (max-width: 450px) {
        width: 95px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      a {
        text-decoration: none;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        &:hover{
          text-decoration: underline;
          color: rgba(80, 162, 229, 0.804)
        }
      }
    }
    .repo-icons {
      span {
        vertical-align: middle;
        &:first-child {
          margin-right: 25px;
        }
        img {
          width: 20px;
          margin-right: 12px;
        }
      }
    }
  }
}
</style>
