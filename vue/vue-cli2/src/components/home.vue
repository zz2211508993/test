<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        name: "chen",
      },
    };
  },

  watch: {
    obj: {
      handler(newValue, oldValue) {
        console.log(newValue, oldValue);
      },
      immediate: true,
      deep: true,
    },
  },
  mounted() {
    this.obj.name = "123";
  },
};
</script>

<style lang="scss" scoped></style>
