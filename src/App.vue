<template>
  <div id="app" class="relative">
    <!--  -->
    <template>
      <div
        class="absolute z-50 flex justify-between items-center focus:outline-none text-white text-4xl"
      >
        <div class="ml-5">
          <button @click="setPage('home')">
            <i class="ti ti-chevron-left"></i>
          </button>
        </div>
        <div class="mr-5">
          <button @click="setPage('about')">
            <i class="ti ti-chevron-right"></i>
          </button>
        </div>
      </div>
    </template>
    <!--  -->
    <template v-if="isPage === 'home'">
      <transition name="bounce">
        <div class="background-image bg-overlay">
          <Homepage />
        </div>
      </transition>
    </template>
    <template v-if="isPage === 'about'">
      <transition name="slide-fade">
        <About />
      </transition>
    </template>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Homepage from "./components/Homepage";
import About from "./components/About";

export default {
  name: "App",
  components: {
    Homepage,
    About
  },
  data() {
    return {
      isPage: "home"
    };
  },
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    setPage(page) {
      this.isPage = page;
    }
  },
  created() {
    this.$store.dispatch("getUser");
  }
};
</script>

<style>
.background-image {
  position: absolute;
  background-image: url("./assets/images/background.jpg");
  background-position: center left;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
}
.bg-overlay::before {
  content: " ";
  position: fixed;
  background: #134e5ee7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #71b280d6,
    #134e5ee7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #71b280d6,
    #134e5ee7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 100%;
  height: 100%;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
/*  */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
