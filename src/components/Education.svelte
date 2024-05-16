<script lang="ts">
  import Section from './Section.svelte';
  import Title from './Title.svelte';
  import Entry from './Entry.svelte';
  import Divider from './Divider.svelte';
  import { t } from '../stores/locale';

  // const educations = [
  //   {
  //     organizationName: 'University of California, Los Angeles',
  //     location: 'California, USA',
  //     imageUrl:
  //       'https://upload.wikimedia.org/wikipedia/commons/0/0d/The_University_of_California_UCLA.svg',
  //     title: 'Electrical and Computer Engineering, M.S.',
  //     date: 'Sep 2024 - Current',
  //     // items: [],
  //   },
  //   {
  //     organizationName: 'National Tsing Hua University',
  //     location: 'Hsinchu, Taiwan',
  //     imageUrl: 'https://www.nthu.edu.tw//public/images/about10/cis-1-1.jpg',
  //     title: 'Electrical and Engineering, B.S.',
  //     date: 'Sep 2020 - Jun 2024',
  //     // items: [
  //     //   { key: 'GPA', value: '4.04 / 4.3' },
  //     //   { key: 'Class Rank', value: '18 / 71' },
  //     //   { key: 'Department Rank', value: '24 / 115' },
  //     // ],
  //   },
  // ];
  $: educations = [
    {
      organizationName: $t('education.ucla'),
      location: $t('education.ucla.location'),
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/0d/The_University_of_California_UCLA.svg',
      title: $t('education.ucla.degree'),
      date: 'Sep 2024 - Current',
      // items: [],
    },
    {
      organizationName: $t('education.nthu'),
      location: $t('education.nthu.location'),
      imageUrl: 'https://www.nthu.edu.tw//public/images/about10/cis-1-1.jpg',
      title: $t('education.nthu.degree'),
      date: 'Sep 2020 - Jun 2024',
    },
  ];
</script>

<Section>
  <Title>{$t('education.title')}</Title>
  <div class="flex flex-col gap-2 p-2">
    {#each educations as education, idx}
      <Entry {...education} />
      {#if idx !== educations.length - 1}
        <Divider />
      {/if}
    {/each}
  </div>
</Section>
