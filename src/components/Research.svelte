<script lang="ts">
  import Title from './Title.svelte';
  import Entry from './Entry.svelte';

  const educations = [
    {
      organizationName:
        '8051 Programming Renaissance: A USB HID Programmer Based on AVR Microcontroller',
      location: 'National Tsing Hua University',
      imageUrl: 'https://www.nthu.edu.tw//public/images/about10/cis-1-1.jpg',
      title: 'Undergraduate Project',
      date: 'Sep 2022 - Jun 2023',
      items: [
        'Developed a multi‑platform 8051 programmer using C and a frontend application.',
        { key: 'Cross‑platform', value: 'Our program runs everywhere' },
        {
          key: 'Simple Workflow',
          value:
            'All it takes is a few mouse clicks to burn your hex to the microprocessor',
        },
        {
          key: 'Plug‑and‑play',
          value:
            'You do not need to install any drivers since all operating systems come with HID driver',
        },
        '2023 Spring Undergraduate Project Competition Award: Best Poster Exhibition Voting',
      ],
    },
  ];
</script>

<Title>Research</Title>
<div class="flex flex-col gap-2 p-2 mx-auto max-w-5xl">
  {#each educations as education}
    <Entry {...education} />
  {/each}
</div>
