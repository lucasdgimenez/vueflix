<template>
  <div id="modal" class="modal">
    <div class="container">
      <a @click="$emit('close')" class="close">X</a>
      <h1>{{movie.title}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['movie']
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
}
.modal .container {
  position: fixed;
  max-width: 600px;
  top: 4vh;
  bottom: 4vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 4px;
  background: white;
  box-shadow: 0 0 20px rgba(0,0,0,0.7);
  overflow: auto;
}

.close {
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  font-size: 2rem;
}

.close:hover {
  background: #CCC;
}

</style>