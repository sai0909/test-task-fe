<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>
<script>
// @ is an alias to /src
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
},
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: 'Roboto';
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

.title {
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  text-align: center;
  color: #000000;
}
</style>
