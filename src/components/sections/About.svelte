<script lang="ts">
  import Section from '@/components/Section.svelte';
  import Title from '@/components/Title.svelte';
  import { translationKeys } from '@/utils/i18n';
  import { t } from '@/stores/locale';

  $: paragraphs = translationKeys
    .filter((key) => key.startsWith('about.paragraph'))
    .map((key) => $t(key));
</script>

<Section>
  <Title>{$t('about.title')}</Title>
  {#each paragraphs as paragraph}
    <p class="px-4 font-sans md:text-lg">{paragraph}</p>
  {/each}
</Section>
