<template>
  <div class="main_app">
    <h3>Current element:</h3>
    <p>
      {{ selectedElement }}
    </p>
  </div>
</template>

<script>
export default {
  name: "contentView",
};
</script>

<style>
.main_app {
  font-family: "Roboto";
  font-size: 14px;
  position: fixed;
  top: 150px;
  right: 150px;
  background: linear-gradient(115.34deg, #023189 0%, #0077af 100%);
  border-radius: 8px;
  color: white;
  padding: 16px;
  max-width: 400px;
  z-index: 10000;
  display: flex;
  flex-direction: column;
}
a {
  color: white;
}
</style>
