<script lang="ts">
  import { t } from '../../stores/locale';
  import Section from '../Section.svelte';
  import Title from '../Title.svelte';

  $: paragraphs = Array.from({ length: 1 }, (_, idx) =>
    $t(`about.paragraph${idx + 1}`)
  );
</script>

<Section>
  <Title>{$t('about.title')}</Title>
  {#each paragraphs as paragraph}
    <p class="px-4 font-sans md:text-lg">{paragraph}</p>
  {/each}
</Section>
