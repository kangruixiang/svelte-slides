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
    <div class="r-fit mb-12 mt-4 font-serif flex flex-col items-center">
      Robotic-Assisted Navigation Bronchoscopy as a Paradigm Shift in Peripheral
      Lung Access
      <div class="w-2/3 mt-4 border-b border-solid border-zinc-700" />
    </div>

    <div class="text-right text-lg mr-4">
      <span>Kang Rui Xiang</span> <br />
      <span>February {dd}, 2023</span>
    </div>
  </div>
</section>

<section>
  <div class="card">
    <h4>Rise of Lung Nodule Biopsy</h4>
    <ul>
      <li>Over 415,581 chest CTs were obtained from 2006 to 2012</li>
      <li>
        Lung nodule identification increased from 24% to 41% of all scans<sup
          >1</sup
        >
      </li>
      <li>There is increase need for identification of lung nodules</li>
    </ul>
    <footer>
      <ol>
        <li>Am J Respir Crit Care Med. 2015. PubMed:26214244</li>
      </ol>
    </footer>
  </div>
  <aside class="notes">
    <ul>
      <li>part of reason is increased general CT</li>
      <li>part of reason is increased lung cancer screen.</li>
      <li>
        USPSTF changed 2021, last change 2013 (50-80, 20 py hx, quit 15 yrs).
        55-80, 30 y
      </li>
    </ul>
  </aside>
</section>

<style>
  .cover {
    object-position: 50% 60%;
  }
</style>
