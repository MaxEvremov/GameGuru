<template>
   <input :value="modelValue" @input="updateModelValue" class="input" type="text">
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateModelValue (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style>
.input {
  margin: 5px auto;
  width: 200px;
  height: 20px;
  background-color: #17222c;
  color: rgb(202, 244, 255);
  font-size: 17px;
  border-radius: 3px;
  -webkit-box-shadow:inset 0px 0px 10px 1px rgba(0, 144, 255, 0.69);
  -moz-box-shadow:inset 0px 0px 10px 1px rgba(0, 144, 255, 0.69);
  box-shadow:inset 0px 0px 6px 1px rgba(0, 144, 255, 0.90);
}
</style>
