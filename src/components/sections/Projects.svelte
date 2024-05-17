<script lang="ts">
  import type { Project } from '../../types';
  import { t } from '../../stores/locale';

  import Section from '../Section.svelte';
  import Title from '../Title.svelte';
  import ProjectCard from '../ProjectCard.svelte';

  import flappyBird from '../../assets/images/projects/flappy-bird.png';
  import gameOfBalance from '../../assets/images/projects/game-of-balance.png';
  import topDownShooter from '../../assets/images/projects/cyber-punk-2069.jpg';

  $: projects = [
    {
      title: $t('project.futureXplorer'),
      brief: $t('project.futureXplorer.brief'),
      imageUrl: '',
      details: [
        {
          icon: 'mdi-github',
          url: 'https://github.com/eesoymilk/future-xplorer',
        },
      ],
    },
    {
      title: $t('project.healthStatistic'),
      brief: $t('project.healthStatistic.brief'),
      details: [
        {
          icon: 'mdi-github',
          url: 'https://github.com/eesoymilk/health-statistic',
        },
      ],
    },
    {
      title: $t('project.deecye'),
      brief: $t('project.deecye.brief'),
      imageUrl:
        'https://s.yimg.com/os/creatr-uploaded-images/2023-12/35b1a8c0-9f11-11ee-bdff-ca0f8df0cda1',
      details: [{ icon: 'mdi-link', url: 'https://ynews.page.link/AhmxF' }],
    },
    {
      title: $t('project.soybot'),
      brief: $t('project.soybot.brief'),
      details: [
        { icon: 'mdi-github', url: 'https://github.com/eesoymilk/soybot' },
      ],
    },
    {
      title: $t('project.cyberpunk2069'),
      brief: $t('project.cyberpunk2069.brief'),
      imageUrl: topDownShooter.src,
      details: [
        { icon: 'mdi-github', url: 'https://github.com/eesoymilk/I2P2final' },
      ],
    },
    {
      title: $t('project.gameOfBalance'),
      brief: $t('project.gameOfBalance.brief'),
      imageUrl: gameOfBalance.src,
      details: [
        { icon: 'mdi-github', url: 'https://github.com/eesoymilk/8051final' },
      ],
    },
    {
      title: $t('project.flappyBird'),
      brief: $t('project.flappyBird.brief'),
      imageUrl: flappyBird.src,
      details: [],
    },
  ] satisfies Project[];
</script>

<Section>
  <Title>{$t('project.title')}</Title>
  <div class="mx-auto grid max-w-5xl gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</Section>
