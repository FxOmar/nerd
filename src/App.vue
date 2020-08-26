<template>
  <div id="app">
    <div class="background-image bg-overlay">
      <div class="relative">
        <div
          class="flex w-3/5 h-64 px-3 py-4 fixed"
          style="top: 3.7em; left: 16em"
        >
          <div class="shadow-lg">
            <img
              class="object-cover border-2 border-green-500"
              style="width: 19.1em"
              src="./assets/images/christin.jpg"
              alt=""
            />
          </div>
          <div class="">
            <div>
              <div class="absolute" style="left: 11.8em; top: 8em;">
                <h1
                  class="text-4xl animate-bounce text-left antialiased leading-none tracking-wider uppercase font-bold text-white"
                >
                  Suzanne<span class="text-xs font-semibold ml-3"
                    >front-end developer - freelancer</span
                  >
                  <span class="text-green-500 block ml-20">Robinson</span>
                </h1>
              </div>
              <!--  -->
              <div class="absolute ml-8" style="top: 13em;">
                <p
                  class="text-white text-left text-sm leading-relaxed tracking-wider antialiased"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                  deserunt quasi obcaecati impedit illum debitis dolorum
                  voluptates eos sunt quibusdam, eaque, nisi doloribus
                  accusantium sapiente voluptatibus praesentium consectetur,
                  necessitatibus atque.
                </p>
                <!--  -->
                <div class="relative">
                  <div class="absolute" style="top: 2em; right: 5em">
                    <ul class="social-media-icons text-xl text-white flex">
                      <li>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                          ><i class="fab fa-facebook-square"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                          ><i class="fab fa-twitter"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                          ><i class="fab fa-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noopener noreferrer"
                          ><i class="fab fa-behance"></i
                        ></a>
                      </li>
                    </ul>
                    <div>
                      <div
                        class=" border-t-2 border-r-2 rounded-r-sm w-24 h-16 absolute"
                        style="top: 0.9em; left: 11.5em;"
                      >
                        <div
                          class="text-white uppercase text-xs absolute ml-12 w-24"
                          style="top: 6.5em;"
                        >
                          follow me, i'm everywhere.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!--  -->
              </div>
              <!--  -->
            </div>
          </div>
        </div>
      </div>
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
.social-media-icons li {
  @apply mx-3;
}
</style>
