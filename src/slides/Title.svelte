<script>
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
</script>

<section>
  <div>
    <div class="h-60 w-full">
      <img
        src="assets/background.avif"
        alt=""
        class="object-cover w-full cover"
      />
    </div>
    <div
      class="r-fit mb-12 mt-4 text-3xl font-serif flex flex-col items-center"
    >
      Shape-Sensing Robotic-Assisted Bronchoscopy for Pulmonary Nodules: Initial
      Multicenter Experience Using the Ion™ Endoluminal System
      <div class="w-2/3 mt-4 border-b border-solid border-zinc-700" />
    </div>

    <div class="text-right text-lg mr-4">
      <span>Kang Rui Xiang</span> <br />
      <span>February {dd}, 2023</span>
    </div>
  </div>
</section>

<style>
  .cover {
    object-position: 50% 60%;
  }
</style>
