<script lang="ts">
  import Section from './Section.svelte';
  import Title from './Title.svelte';
  import Entry from './Entry.svelte';

  const educations = [
    {
      organizationName: 'University of California, Los Angeles',
      location: 'California, USA',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/0d/The_University_of_California_UCLA.svg',
      title: 'Master of Science in Electrical Engineering',
      date: 'Sep 2024 - Current',
      // items: [
      //   { key: 'GPA', value: '4.04 / 4.3' },
      //   { key: 'Class Rank', value: '18 / 71' },
      //   { key: 'Department Rank', value: '24 / 115' },
      // ],
    },
    {
      organizationName: 'National Tsing Hua University',
      location: 'Hsinchu, Taiwan',
      imageUrl: 'https://www.nthu.edu.tw//public/images/about10/cis-1-1.jpg',
      title: 'Bachelor of Science in Electrical Engineering',
      date: 'Sep 2020 - Jun 2024',
      // items: [
      //   { key: 'GPA', value: '4.04 / 4.3' },
      //   { key: 'Class Rank', value: '18 / 71' },
      //   { key: 'Department Rank', value: '24 / 115' },
      // ],
    },
  ];
</script>

<Section>
  <Title>Education</Title>
  <div class="flex flex-col gap-2 p-2">
    {#each educations as education}
      <Entry {...education} />
    {/each}
  </div>
</Section>
