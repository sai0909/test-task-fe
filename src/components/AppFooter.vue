<template>
  <div class="footer-wrap">
    <div class="footer">
      <div class="logo-wrap">
        <img alt="logo" class="logo" src="../assets/logo.png" />
      </div>
      <div class="copy-text">© All rights reserved, 2022</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
<style lang="scss" scoped>
.footer {
  background: #24292f;
  box-shadow: 0px -12px 36px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  color: #ffffff;
  max-height: 120px;
  .logo-wrap {
    display: flex;
    align-items: center;
    .logo {
      width: 40px;
      height: 39px;
    }
  }
  .copy-text {
    padding: 10px 15px;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    color: #ffffff;
  }
}
</style>
