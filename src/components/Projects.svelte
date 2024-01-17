<script lang="ts">
  import type { Project } from '../types';

  import Title from './Title.svelte';
  import ProjectCard from './ProjectCard.svelte';

  import flappyBird from '../assets/images/projects/flappy-bird.png';
  import gameOfBalance from '../assets/images/projects/game-of-balance.png';
  import topDownShooter from '../assets/images/projects/cyber-punk-2069.jpg';

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
      brief: 'A chat robot that can aid the senior citizens.',
      details: {
        imageUrl:
          'https://s.yimg.com/os/creatr-uploaded-images/2023-12/35b1a8c0-9f11-11ee-bdff-ca0f8df0cda1',
        otherUrl: 'https://ynews.page.link/AhmxF',
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
        imageUrl: topDownShooter.src,
        githubUrl: 'https://github.com/eesoymilk/I2P2final',
      },
    },
    {
      title: 'Game of Balance',
      brief:
        'A mimic version of real‑life balance board game using an 8052 microprocessor.',
      details: {
        imageUrl: gameOfBalance.src,
        githubUrl: 'https://github.com/eesoymilk/8051final',
      },
    },
    {
      title: 'Flappy Bird in FPGA',
      brief:
        'A Flappy Bird clone made with FPGA using Verilog connecting to a VGA screen and speaker.',
      details: { imageUrl: flappyBird.src },
    },
  ];
</script>

<Title>Projects</Title>
<div class="grid gap-4 p-4 mx-auto max-w-5xl sm:grid-cols-2 lg:grid-cols-3">
  {#each projects as project}
    <ProjectCard {project} />
  {/each}
</div>
