<template>
  <div class="main_app">
    <h1>{{ msg }}</h1>
    <p>
      Chrome extension to allow users to select an element on any page and
      returns a selector that can be used to target this element.
    </p>
    <p>
      <b>Please note that this code gets executed on EVERY page</b>. If you want
      to whitelist only some pages you can adjust manifest.json file, or you can
      overwrite it in extension settings:
      <br />
      1. Go to
      <a href="chrome://extensions/" target="_blank"> chrome://extensions/ </a>
      <br />
      2. Click on `details` button of this extension <br />
      3. Go to `Site access` sections and adjust it to your needs. <br />
    </p>
  </div>
</template>

<script>
export default {
  name: "popupView",
  data() {
    return {
      msg: "Smartlook element picker",
    };
  },
};
</script>

<style>
.main_app {
  padding: 16px;
  border-radius: 8px;
  font-family: "Roboto", serif;
  font-size: 14px;
  min-width: 400px;
  background: linear-gradient(115.34deg, #023189 0%, #0077af 100%);
  color: white;
}
a {
  color: white;
}
</style>
