<script lang="ts">
  import { locale } from '../stores/locale';

  locale.init();

  const toggleLocale = () =>
    locale.changeLocale($locale === 'en' ? 'zh_tw' : 'en');
</script>

<button
  on:click={toggleLocale}
  type="button"
  class=" relative block h-8 w-16 rounded-2xl outline outline-1 outline-black transition-all duration-200 dark:outline-white"
>
  <span
    class="absolute h-8 w-8 text-black transition-all duration-200 dark:text-white {$locale ===
    'en'
      ? 'translate-x-[100%]'
      : 'translate-x-2'} top-0 flex h-full items-center"
  >
    {#if $locale === 'en'}
      EN
    {:else}
      繁中
    {/if}
  </span>
</button>
