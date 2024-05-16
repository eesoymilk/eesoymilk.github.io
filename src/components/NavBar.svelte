<script lang="ts">
  import Icon from '@iconify/svelte';
  import ThemeSwitch from './ThemeSwitch.svelte';
  import LocaleSwitch from './LocaleSwitch.svelte';

  let showSettings = false;

  const toggleSettings = () => (showSettings = !showSettings);
</script>

<nav
  class="fixed left-1/2 top-0 z-50 mx-auto flex w-full max-w-5xl -translate-x-1/2 items-center gap-4 p-4"
>
  <div class=" transition-colors duration-200 dark:text-white">
    <button on:click={toggleSettings}>
      <Icon
        icon="mdi:gear-outline"
        class="h-10 w-10 cursor-pointer transition-all duration-200 md:h-8 md:w-8 lg:h-10 lg:w-10 {showSettings &&
          'rotate-180'}"
      />
    </button>
  </div>
  <ul
    class="flex origin-left gap-4 transition-all duration-300 {showSettings
      ? 'scale-100'
      : 'scale-0'}"
  >
    <li>
      <ThemeSwitch />
    </li>
    <li>
      <LocaleSwitch />
    </li>
  </ul>
</nav>
