<script lang="ts">
  import Title from './Title.svelte';
  import Card from './Card.svelte';

  const educations = [
    {
      organizationName: 'National Tsing Hua University',
      location: 'Hsinchu, Taiwan',
      imageUrl: 'https://www.nthu.edu.tw//public/images/about10/cis-1-1.jpg',
      title: 'Bachelor of Science in Electrical Engineering',
      date: 'Sep 2020 - Jun 2024',
      items: [
        'GPA: 4.04 / 4.3',
        'Class Rank: 18 / 71',
        'Department Rank: 24 / 115',
      ],
    },
  ];
</script>

<Title>Education</Title>
{#each educations as education}
  <div class="flex p-2">
    <Card {...education} />
  </div>
{/each}
