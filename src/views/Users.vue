<template>
  <div class="container">
    <h2 class="title">Top Users</h2>
    <div class="users-wrapper">
      <div class="user" v-for="user in users" :key="user.id">
        <img class="avatar" alt="avatar" :src="user.avatar_url" />
        <h5 class="name">{{ user.login }}</h5>
        <router-link
          class="link"
          :to="{ name: 'UserDetail', params: { username: user.login } }"
          ><img src="../assets/link.png" /><label>github</label></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
export default {
  name: "UserList",
  components: {},
  computed: {
    ...mapState(["users"]),
  },
  async mounted() {
    await this.pullUsers();
  },
  methods: {
    ...mapActions(["pullUsers"]),
  },
};
</script>
<style lang="scss" scoped>

.users-wrapper {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: center;
  .user {
    padding-top: 1.75rem;
    padding-bottom: 1.75rem;
    padding-left: 15px;
    padding-right: 15px;
    @media (min-width: 768px){
      flex: 0 0 25%;
    max-width: 25%;
    }
   
    text-align: center;
    .avatar {
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
    h5 {
      font-weight: 800;
      font-size: 20px;
      line-height: 23px;
      margin: 10px;
      color: #000000;
      text-transform: capitalize;
    }
    .link {
      display: flex;
      align-items: center;
      text-decoration: none;
      justify-content: center;
      img {
        width: 14.5px;
        height: 14.5px;
      }
      label {
        margin-right: 4.6px;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #54a3ff;
      }
    }
  }
}
</style>
>
