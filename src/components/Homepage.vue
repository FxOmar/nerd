<template>
  <div id="homepage" class="relative">
    <div class="flex w-3/5 h-64 px-3 py-4 fixed" style="top: 3.7em; left: 16em">
      <div class="shadow-lg">
        <img
          class="object-cover border-2 border-green-500"
          style="width: 19.1em"
          src="../assets/images/christin.jpg"
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
              deserunt quasi obcaecati impedit illum debitis dolorum voluptates
              eos sunt quibusdam, eaque, nisi doloribus accusantium sapiente
              voluptatibus praesentium consectetur, necessitatibus atque.
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
</template>

<script>
export default {
  name: "Homepage",
  props: {
    user: {
      type: Object
    }
  }
};
</script>

<style>
.social-media-icons li {
  @apply mx-3;
}
</style>
