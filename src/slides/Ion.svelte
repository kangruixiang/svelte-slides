<script>
  let paused = false;

  function handleMousedown(e) {
    if (paused) e.target.play();
    else e.target.pause();
  }
</script>

<section>
  <div class="card">
    <h4>
      Robotic-Assisted Navigation Bronchoscopy as a Paradigm Shift in Peripheral
      Lung Access
    </h4>
    <ul>
      <li>Published in Lung, September 18, 2020</li>

      <li>Single center, prospective, observational study</li>
      <li>
        Patients enrolled from Mountain View, California Interventional
        Pulmonology (IP) clinic of the Palo Alto Medical Foundation (PAMF)
      </li>
      <li>52 patients enrolled from September 2019 to June 2020</li>
      <li>
        Aim was to evaluate diagnostic yield of robotic-assisted bronchoscopy
        with cone beam CT
      </li>
      <li>Ion Endoluminal Robotic Bronchoscopy System was used</li>
    </ul>
    <footer>
      <ol>
        <li>
          Benn, B.S., Romero, A.O., Lum, M. et al. Robotic-Assisted Navigation
          Bronchoscopy as a Paradigm Shift in Peripheral Lung Access. Lung 199,
          177-186 (2021).
          https://doi-org.wake.idm.oclc.org/10.1007/s00408-021-00421-1
        </li>
      </ol>
    </footer>
  </div>
  <aside class="notes" />
</section>

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
    <h4>Our Equipment</h4>
    <img src="assets/ionConfirm.png" class="aspect-video object-cover w-full" />

    <footer>
      Shape-sensing robotic-assisted bronchoscopy for pulmonary nodules. PMID:
      34656103
    </footer>
  </div>
</section>

<style>
</style>
