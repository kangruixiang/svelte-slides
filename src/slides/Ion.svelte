<script>
  let paused = false;

  function handleMousedown(e) {
    if (paused) e.target.play();
    else e.target.pause();
  }
</script>

<section>
  <div class="flex justify-center w-full">
    <img
      src="assets/ionRobotic.avif"
      class="aspect-video object-cover w-full"
    />
  </div>
  <footer>intuitive.com</footer>
</section>

<section>
  <div class="flex justify-center w-full">
    <video autoplay muted loop on:mousedown={handleMousedown} bind:paused>
      <source src="assets/ionClip.mp4" type="video/mp4" />
    </video>
  </div>
  <footer>intuitive.com</footer>
</section>

<section>
  <div class="flex space-x-4 justify-center w-full">
    <video
      autoplay
      muted
      loop
      class="w-1/2 aspect-square object-cover"
      on:mousedown={handleMousedown}
      bind:paused
    >
      <source src="assets/ionTip.mp4" type="video/mp4" />
    </video>
    <video
      autoplay
      muted
      loop
      class="w-1/2 aspect-square object-cover"
      on:mousedown={handleMousedown}
      bind:paused
    >
      <source src="assets/ionTip2.mp4" type="video/mp4" />
    </video>
  </div>
  <footer class="text-right">intuitive.com</footer>
</section>

<section>
  <div class="flex space-x-4 items-center justify-center">
    <div>
      <img
        src="assets/ionTip2.png"
        alt=""
        class="aspect-square object-cover w-full"
      />
    </div>
    <div>
      <img src="assets/bronchSize.png" alt="" class="shadow-md" />
    </div>
  </div>
  <aside class="notes">
    Less than half the size of therapeutic scope and smaller than the slim scope
  </aside>
</section>

<section>
  <div class="flex justify-center w-full">
    <video
      autoplay
      muted
      loop
      class="aspect-video object-cover col-span-2"
      on:mousedown={handleMousedown}
      bind:paused
    >
      <source src="assets/ionDrive.mp4" type="video/mp4" />
    </video>
  </div>
  <footer>intuitive.com</footer>
</section>

<section>
  <div class="flex space-x-4">
    <video
      autoplay
      muted
      loop
      class="w-1/3 aspect-square object-cover"
      on:mousedown={handleMousedown}
      bind:paused
    >
      <source src="assets/ionControl.mp4" type="video/mp4" />
    </video>
    <video
      autoplay
      muted
      loop
      class="w-1/3 aspect-square object-cover"
      on:mousedown={handleMousedown}
      bind:paused
    >
      <source src="assets/ionScreen.mp4" type="video/mp4" />
    </video>
    <video
      autoplay
      muted
      loop
      class="w-1/3 aspect-square object-cover"
      on:mousedown={handleMousedown}
      bind:paused
    >
      <source src="assets/ionTarget.mp4" type="video/mp4" />
    </video>
  </div>
  <footer class="text-right">intuitive.com</footer>
</section>

<section>
  <iframe
    class="w-full aspect-video rounded-lg"
    src="https://www.youtube.com/embed/2iTg7oAirgQ?start=201"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
</section>

<section>
  <div class="r-stretch">
    <img src="assets/ionConfirm.png" class="aspect-video object-cover w-full" />

    <footer>
      Shape-sensing robotic-assisted bronchoscopy for pulmonary nodules. PMID:
      34656103
    </footer>
  </div>
</section>

<style>
</style>
