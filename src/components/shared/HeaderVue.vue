<template>
  <section class="header d-flex justify-content-end align-items-center gap-1 pe-3">
    <i class="bi bi-bell-fill notification"></i>
    <i class="bi bi-gear-fill"></i>
    <img src="../../assets/woman-picture.jpg" alt="profile image" class="ms-2">
  </section>
</template>

<script>
  export default {
      name: 'HeaderVue'
  }
</script>

<style scoped>
  img {
    height: 25px;
    aspect-ratio: 1;
    object-fit: cover;
    border-radius: 100%;
    border: 1px solid #3529F5;
  }

  i {
    font-size: 16px;
    color: #3529F5;
    border-radius: 4px;
    width: 26px;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  i:active {
    font-size: 18px;
  }

  .notification {
    position: relative;
  }

  .notification::after {
    content: '';
    position: absolute;
    width: 5px;
    aspect-ratio: 1;
    background: #3529F5;
    border-radius: 50%;
    top: 2px;
    right: 2px;
  }
</style>