<template>
  <div class="app">
    <div class="nav" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/kono-chat">Kono-Chat</router-link> |
      <router-link to="/credit">Credit</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

.app {
  @apply w-screen h-screen;
}

.nav {
  @apply h-20;
}
</style>
