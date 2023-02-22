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
      title: "First direct bronchoscopy",
      time: "1876",
      body: `Gustav Killian removed pork bone from farmer's right bronchus using laryngoscope (directe bronkoscopie).`,
      img: "assets/gustav.jpeg",
    },
    {
      title: "Development of rigid bronchoscope",
      time: "1904",
      body: "Chevalier Jackson introduced first illuminated rigid bronchoscope. He became renowned for extracting aspirated or swallowed foreign objects.",
      img: "assets/jackson.jpeg",
    },
    {
      title: "Development of flexible bronchoscope",
      time: "1962",
      body: "Shigeto Ikeda developed first fiberoptic, flexible bronchoscope.",
      img: "assets/ikeda.jpeg",
    },
    {
      title: "First transbronchial biopsy",
      time: "1972",
      body: "Howard Anderson performed first transbronchial lung biopsy.",
      img: "assets/transbronchial.jpeg",
    },
    {
      title: "Radial probe ultrasound",
      time: "1992",
      body: "Heinrich Becker introduced radial probe endobronchial ultrasound for endobronchial sampling",
      img: "assets/radial.jpeg",
    },
    {
      title: "Electromagnetic Navigational Bronchoscopy",
      time: "2006",
      body: "First published human study by Schwarz Yehuda.",
      img: "assets/enb.png",
    },
  ];
  const options2 = [
    {
      title: "Monarch™ Robotics",
      time: "March 2018",
      body: "Monarch™ received FDA approval",
      img: "assets/monarch.jpeg",
    },
    {
      time: "December 2019",
      body: "The  Transbronchial Biopsy Assisted by Robot Guidance in the Evaluation of Tumors of the Lung study (TARGET) was started. Single arm, multi-center, prospective, observational study. Projected end date December 2023.",
    },
    {
      time: "August 2022",
      body: "Initial study result found 97.5% navigational success.",
    },
    {
      title: "Ion™ Robotics",
      time: "February 2019",
      body: "The Ion™ Endoluminal System received its FDA approval",
      img: "assets/background.avif",
    },
    {
      time: "March 2019",
      body: "Prospective, Multi-Center Evaluation of the Clinical Utility (PRECIsE) trial started. Estimated end date January 2023.",
    },
    {
      time: "October 2021",
      body: "Initial abstract published showing diagnostic yield (83%, 95% CI: 71.6-90.7). Yield for nodules ≤2cm was 82% and for nodules >2cm was 85%; p=1.0.",
    },
  ];
</script>

<section class="container">
  <Timeline position="left">
    {#each options as option}
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          {option.time}
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
            <h3>{option.title}</h3>
          {/if}
        </TimelineContent>
      </TimelineItem>
    {/each}
  </Timeline>
  <footer>
    <ol>
      <li>Historical Perspectives of Bronchoscopy. PMID:25965540.</li>
      <li>
        Real-time electromagnetic navigation bronchoscopy to peripheral lung
        lesions using overlaid CT images: the first human study. PMID: 16608948.
      </li>
    </ol>
  </footer>
</section>

<section>
  <div class="card">
    <h4>Standard Biopsy Techniques Are Limited</h4>
    <ul>
      <li>
        Large size of scope limits access to peripheral nodules<sup>1</sup>
      </li>

      <li>Flexible bronchoscopy has low sensitivity for malignancy</li>
      <li>34% for lesions &#60; 2 cm and 63% for &#62; 2 cm<sup>2</sup></li>
      <li>
        Electromagnetic navigation bronchoscopy (ENB) uses 3D mapped pathway to
        lung nodule
      </li>
      <li>Recent study shows ENB with higher sensitivity around 70%</li>
      <li>
        CT guided lung biopsy still have higheset sensitivity around 90%<sup
          >3</sup
        >
      </li>
    </ul>
    <footer>
      <ol>
        <li>
          State-of-the-Art Modalities for Peripheral Lung Nodule Biopsy. PMID:
          29433709
        </li>
        <li>NAVIGATE Study. PMID:30476574</li>
        <li>
          Establishing the Diagnosis of Lung Cancer.
          https://doi.org/10.1378/chest.12-2353
        </li>
      </ol>
    </footer>
  </div>
  <aside class="notes">
    <ul>
      <li>
        see a nodule and need to determine if CT guided or try to recategorize
        as high/low risk?
      </li>
    </ul>
  </aside>
</section>

<section class="container">
  <Timeline position="left">
    {#each options2 as option}
      <TimelineItem>
        <TimelineOppositeContent slot="opposite-content">
          {option.time}
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
            <h3>{option.title}</h3>
          {/if}
        </TimelineContent>
      </TimelineItem>
    {/each}
  </Timeline>
  <footer>
    <ol>
      <li>
        Monarch Approved by FDA.
        https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=k173760.
      </li>
      <li>
        Monarch Clinical Trial. https://clinicaltrials.gov/ct2/show/NCT04182815.
      </li>
      <li>
        Murgu S, et al. Demographic and Lesion Characteristics in the First 443
        Subjects Enrolled in a Multicenter Observational Real-World Robotic
        Bronchoscopy Study: Interim Results From TARGET. AABIP (2022). Poster.
      </li>
      <li>
        Ion Endoluminal System FDA.
        https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K182188.
      </li>
      <li>
        Ion Clinical Trial. https://clinicaltrials.gov/ct2/show/NCT03893539.
      </li>
      <li>
        Preliminary Ion Study Trial.
        https://journal.chestnet.org/article/S0012-3692(21)03659-X/fulltext.
      </li>
    </ol>
  </footer>
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
