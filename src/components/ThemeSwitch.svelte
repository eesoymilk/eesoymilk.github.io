<script lang="ts">
  import Icon from '@iconify/svelte';
  import { theme, themeIcon } from '@/stores/theme';
  import { onMount } from 'svelte';

  onMount(() => {
    theme.init();
  });
</script>

<button
  on:click={theme.toggle}
  type="button"
  class=" relative block h-8 w-16 rounded-2xl outline outline-1 outline-black transition-all duration-200 dark:outline-white"
>
  <span
    class="absolute text-black transition-all duration-200 dark:text-white {$theme ===
    'dark'
      ? 'translate-x-[100%]'
      : 'translate-x-1'} top-0 flex h-full items-center"
  >
    <Icon icon={$themeIcon} class="h-8 w-8" />
  </span>
</button>
