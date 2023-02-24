<script>
  import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
  } from "svelte-vertical-timeline";

  const options = [
    {
      title: "Patient selection",
      body: "All patients presented to clinic for evaluation of indeterminant peripheral pulmonary nodules werwe selected. One patient declined and choose ENB. Patients who were not candidates for general anesthesia were excluded.",
    },
    {
      title: "Preprocedural CT",
      body: "Thin cuts between 1-1.5 mm.",
    },
    {
      title: "General anesthesia",
      body: "All patients underwent anesthesia with tidal volume of 8 cc/kg ideal body weight, positive end expiratory pressure of 10 cm H2O, neuromuscular blockade.",
    },
    {
      title: "Biopsy steps",
      body: "Robotic catheter navigated to target lesion. Biopsy needle was inserted. Initial CBCT performed. Directional adjustments made. Repeat CBCT verified location. Biopsy performed. Final CBCT used to rule out pneumothorax.",
    },
  ];
</script>

<section>
  <div class="r-fit mb-12 mt-4 font-serif flex flex-col items-center">
    Back to the Study
  </div>
</section>

<section>
  <div class="r-stretch flex items-center justify-center">
    <img
      src="assets/Table1.png"
      alt=""
      class="border border-black border-solid"
    />
  </div>
</section>

<section class="container flex">
  <div class="w-[80%]">
    <Timeline position="left">
      {#each options as option}
        <div class="fragment fade-up">
          <TimelineItem>
            <TimelineOppositeContent slot="opposite-content">
              {#if option.body}
                <p>{option.body}</p>
              {/if}
              {#if option.img}
                <img src={option.img} alt="" />
              {/if}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              {#if option.title}
                <h4>{option.title}</h4>
              {/if}
            </TimelineContent>
          </TimelineItem>
        </div>
      {/each}
    </Timeline>
  </div>
  <div class="w-[20%]" />
</section>

<style>
  .container {
    height: 100%;
    overflow-y: auto !important;
  }
  .container p {
    margin-top: 0;
  }
</style>
