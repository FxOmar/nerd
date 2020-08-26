<template>
  <div id="app">
    <div
      class="bg-purple text-gray-800 sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orange"
    >
      {{ user.basics.name }}
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  created() {
    this.$store.dispatch("getUser");
  }
};
</script>

<style></style>
