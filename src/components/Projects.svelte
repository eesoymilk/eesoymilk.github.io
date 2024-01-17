<script lang="ts">
  import Title from './Title.svelte';
  import ProjectCard from './ProjectCard.svelte';

  import type { Project } from '../types';

  const projects: Project[] = [
    {
      title: 'AI‑Powered Workshop Platform',
      brief:
        'Developed an online platform with DALL‑E 3 and ChatGPT, automating tedious tasks in a traditional workshops.',
      details: {
        imageUrl: '',
        githubUrl: 'https://github.com/eesoymilk/future-xplorer',
      },
    },
    {
      title: 'Back‑end Database API for Web3.0 Blockchain',
      brief: 'Build a robust backend database API using Golang.',
      details: {
        githubUrl: 'https://github.com/eesoymilk/health-statistic',
      },
    },
    {
      title: 'AI Robot: DeeCye',
      brief: '',
      details: {
        otherUrl: '',
      },
    },
    {
      title: 'Discord Soybot',
      brief: 'A Discord bot with various commands I made in my free time.',
      details: {
        githubUrl: 'https://github.com/eesoymilk/soybot',
      },
    },
    {
      title: 'Top‑down Shooter Game',
      brief:
        'This game is a clone of the trending game “Hotline Miami” made with C++ using the Allegro library.',
      details: {
        githubUrl: 'https://github.com/eesoymilk/I2P2final',
      },
    },
    {
      title: 'Game of Balance',
      brief:
        'A mimic version of real‑life balance board game using an 8052 microprocessor.',
      details: { githubUrl: 'https://github.com/eesoymilk/8051final' },
    },
    {
      title: 'Flappy Bird in FPGA',
      brief:
        'A Flappy Bird clone made with FPGA using Verilog connecting to a VGA screen and speaker.',
      details: { otherUrl: '' },
    },
  ];
</script>

<Title>Projects</Title>
<div class="grid gap-2 p-2 mx-auto max-w-5xl md:grid-cols-2 lg:grid-cols-3">
  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</div>
