<script lang="ts">
  import Icon from '@iconify/svelte';
  import ThemeSwitch from './ThemeSwitch.svelte';

  let showSettings = false;

  const toggleSettings = () => (showSettings = !showSettings);
</script>

<nav
  class="fixed left-1/2 top-0 z-50 mx-auto flex w-full max-w-5xl -translate-x-1/2 flex-row-reverse items-center"
>
  <div class="transition-colors duration-200 dark:text-white">
    <button on:click={toggleSettings}>
      <Icon
        icon="mdi:gear-outline"
        class="h-6 w-6 cursor-pointer md:h-8 md:w-8 lg:h-10 lg:w-10"
      />
    </button>
  </div>
  <ul
    class="origin-right p-2 transition-all duration-300 {showSettings
      ? 'scale-100'
      : 'scale-0'}"
  >
    <li>
      <ThemeSwitch />
    </li>
  </ul>
</nav>
