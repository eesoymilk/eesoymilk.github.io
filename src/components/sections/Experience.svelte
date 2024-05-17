<script lang="ts">
  import Section from '../Section.svelte';
  import Title from '../Title.svelte';
  import Entry from '../Entry.svelte';
  import Divider from '../Divider.svelte';
  import { t } from '../../stores/locale';
  import { translationKeys } from '../../utils/i18n';

  const tutorExperiences = [
    // {
    //   organizationName: 'Liturature and New Media Club',
    //   location: 'National Tsing Hua University',
    //   imageUrl: 'https://www.nthu.edu.tw//public/images/about10/cis-1-1.jpg',
    //   title: 'Software Developer / Web Lecturer',
    //   date: 'Sep 2022 - Current',
    //   items: [
    //     'Co‑founded the club, devoting into development of the platform responsible for literary submissions and teaching web development skills.',
    //     {
    //       key: 'Monthly Guided Book Reading',
    //       value:
    //         'Every month, we host a guided reading of a book of our choice to lower the boundary of literature',
    //     },
    //     {
    //       key: 'Bi‑weekly Web Class',
    //       value:
    //         'I teach web development skills to those who are interested and have them contribute to our online platform',
    //     },
    //     {
    //       key: 'Book test',
    //       value:
    //         'I built a simple responsive web app that recommend you books after you answer some questions',
    //     },
    //     {
    //       key: 'Technical Skills',
    //       value: 'Web Development, Chinese literature',
    //     },
    //     { key: 'Soft Skills', value: 'Leadership, Teaching' },
    //   ],
    // },
    // {
    //   organizationName: 'Colde Garage',
    //   location: 'National Tsing Hua University',
    //   imageUrl: 'https://www.nthu.edu.tw//public/images/about10/cis-1-1.jpg',
    //   title: 'Mentor / Lecturer',
    //   date: 'Sep 2021 - Current',
    //   items: [
    //     {
    //       key: 'Interactive Teaching',
    //       value:
    //         'I taught newcomers with little to no experience the essential in web development',
    //     },
    //     {
    //       key: 'Peer‑led Projects',
    //       value:
    //         'I initiated some projects to let the members not only learned but be able to demonstrate web development skills',
    //     },
    //     { key: 'Technical Skills', value: 'Software Development' },
    //     {
    //       key: 'Soft Skills',
    //       value: 'Leadership, Mentorship, Teaching, Communication',
    //     },
    //   ],
    // },
  ];

  $: experiences = [
    {
      organizationName: $t('experience.itri'),
      location: $t('experience.itri.location'),
      imageUrl:
        'https://media.cakeresume.com/image/upload/jojjlj5dmbxoyd8gcxh5.png',
      title: $t('experience.itri.position'),
      date: 'July 2023 - Dec 2023',
      items: translationKeys
        .filter((key) => key.startsWith('experience.itri.item'))
        .map((key) => $t(key)),
    },
  ];
</script>

<Section>
  <Title>{$t('experience.title')}</Title>
  <div class="mx-auto flex max-w-5xl flex-col gap-2 p-2">
    {#each experiences as experience, idx}
      <Entry {...experience} />
      {#if idx !== experiences.length - 1}
        <Divider />
      {/if}
    {/each}
  </div>
</Section>
