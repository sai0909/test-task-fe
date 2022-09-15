<template>
  <div class="header-wrap">
    <div class="header">
    <div class="logo-wrap">
      <img alt="logo" class="logo" src="../assets/logo.png" />
      <h5>Github Userboard</h5>
    </div>
    <div class="search">
      <input placeholder="search" />
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
<style lang="scss" scoped>
.header {
  background: #24292f;
  box-shadow: 0px 12px 36px rgba(204, 204, 204, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  color: #ffffff;
  .logo-wrap {
    display: flex;
    align-items: center;
    .logo {
      width: 40px;
      height: 39px;
    }
    h5 {
      padding-left: 16px;
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 23px;
      color: #ffffff;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin: 0;
      @media (max-width: 576px) {
        display: none;
      }
    }
  }
  .search {
    input {
      border: 1px solid #555;
      width: 100%;
      padding: 9px 4px 9px 40px;
      background: #ffffff
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
        no-repeat 13px center;
      border-radius: 12px;
    }
  }
}
</style>
