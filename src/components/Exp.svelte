<script lang="ts">
  import Title from './Title.svelte';
  import Card from './Card.svelte';

  const experiences = [
    {
      organizationName: 'Industrial Technology Research Institute',
      location: 'Hsinchu, Taiwan',
      imageUrl:
        'https://media.cakeresume.com/image/upload/jojjlj5dmbxoyd8gcxh5.png',
      title: 'Research Development Intern',
      date: 'July 2023 - Dec 2023',
      items: [
        'Contributed to the development of various projects, working as a software developer and research assistant.',
        'Technical Skills: Human‑robot Interaction, AI Integration, Front‑end/back‑end Development.',
        'Soft Skills: Teamwork, Problem Solving, Innovative Thinking, Client Interaction.',
      ],
    },
  ];
</script>

<Title>Professional Experience</Title>
{#each experiences as experience}
  <div class="flex p-2">
    <Card {...experience} />
  </div>
{/each}
