<script lang="ts">
  import Section from '../Section.svelte';
  import Title from '../Title.svelte';
  import Entry from '../Entry.svelte';
  import { t } from '../../stores/locale';
  import { translationKeys } from '../../utils/i18n';

  $: researches = [
    {
      organizationName: $t('research.undergradProject.title'),
      location: $t('education.nthu'),
      imageUrl: 'https://www.nthu.edu.tw//public/images/about10/cis-1-1.jpg',
      title: $t('research.undergradProject.description'),
      date: 'Sep 2022 - Jun 2023',
      items: translationKeys
        .filter((key) => key.startsWith('research.undergradProject.item'))
        .map((key) => $t(key)),
    },
  ];
</script>

<Section>
  <Title>{$t('research.title')}</Title>
  <div class="mx-auto flex max-w-5xl flex-col gap-2 p-2">
    {#each researches as research}
      <Entry {...research} />
    {/each}
  </div>
</Section>
