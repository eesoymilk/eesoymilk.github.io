<script lang="ts">
  import Section from '@/components/Section.svelte';
  import Title from '@/components/Title.svelte';
  import Entry from '@/components/Entry.svelte';
  import Divider from '@/components/Divider.svelte';
  import { t } from '@/stores/locale';

  $: educations = [
    {
      organizationName: $t('education.ucla'),
      location: $t('education.ucla.location'),
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/0/0d/The_University_of_California_UCLA.svg',
      title: $t('education.ucla.degree'),
      date: 'Sep 2024 - Current',
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
