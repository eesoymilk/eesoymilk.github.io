<script lang="ts">
  import Title from './Title.svelte';

  const paragraphs = [
    'I am currently a senior student at National Tsing Hua University majoring Eletrical Engineering with a keen interest in the field of machine learning and computer vision. Feel free to contact me for any software development or tutoring opportunities.',
  ];
</script>

<Title>About Me</Title>
{#each paragraphs as paragraph}
  <p class="px-4 mx-auto max-w-5xl font-sans md:text-lg">{paragraph}</p>
{/each}
