<template>
  <!-- about strats here -->
  <div
    id="about"
    class="w-full h-screen bg-gray-300 px-10 flex justify-center items-center"
  >
    <div class="bg-white shadow-lg">
      <div class="flex p-5">
        <div class="">
          <img
            class="img-responsive w-full rounded"
            src="../assets/images/christin.jpg"
          />
        </div>

        <div class="mx-5">
          <button
            class="transition-color duration-500 ease-in-out border py-2 px-3 my-5 bg-transparent focus:outline-none hover:bg-green-500 hover:text-white hover:border-none"
          >
            <i class="fa fa-angle-left" aria-hidden="true"></i> Back to home
          </button>
          <div id="watermark">
            <h2 class="page-title">About</h2>
            <div class="marker">a</div>
          </div>
          <p class="subtitle">
            Hi, I am chris Howard. A freelance web designer, front-end developer
            and digital planner based in US.
          </p>
          <p class="info">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat."
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.page-title:after,
.page-title:before {
  content: " ";
  position: absolute;
  @apply bg-gray-900;
  left: 0;
  margin: 2px;
}
.page-title {
    @apply text-4xl text-gray-800 capitalize antialiased font-medium;
}
.page-title {
  position: relative;
  display: inline-block;
}
.page-title:after {
  width: 75%;
  height: 2px;
  top: 0px;
}

.page-title:before {
  width: 40%;
  height: 2px;
  bottom: 0px;
}
#watermark .marker {
  @apply absolute text-6xl uppercase left-0;
  opacity: 0.09;
  top: -20px;
}
#watermark {
  @apply relative;
}
/*  */
.subtitle {
  @apply italic font-semibold text-lg text-green-400 antialiased leading-normal tracking-wide text-left mt-4 mb-3 pr-3;
}

.info {
  @apply text-base font-normal antialiased text-gray-800 leading-relaxed tracking-wide text-left;
}
</style>
