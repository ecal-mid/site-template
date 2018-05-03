<template lang="pug">
  .spinner
</template>

<style lang="sass">
.spinner
  position: absolute
  z-index: 0
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  width: 40px
  height: 40px
  background-color: #333
  border-radius: 100%  
  animation: sk-scaleout 1.0s infinite ease-in-out
  animation: sk-scaleout 1.0s infinite ease-in-out

@keyframes sk-scaleout
  0% 
    transform: scale(0)
    transform: scale(0)
  100%
    transform: scale(1.0)
    transform: scale(1.0)
    opacity: 0
</style>
