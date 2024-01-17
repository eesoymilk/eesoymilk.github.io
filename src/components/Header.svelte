<script lang="ts">
  import Icon from '@iconify/svelte';
  import avatar from '../assets/avatar.png';

  const titles = ['software developer', 'programming tutor', 'IoT enthusiast'];

  const navItems = [
    {
      icon: 'mdi:github',
      link: 'https://github.com/eesoymilk',
    },
    {
      icon: 'mdi:linkedin',
      link: 'https://www.linkedin.com/in/eesoymilk',
    },
    {
      icon: 'fa-brands:line',
      link: 'https://line.me/ti/p/nHyADUP7Mf',
    },
  ];

  let menuOpen = false;

  const handleMenuClick = () => (menuOpen = !menuOpen);
</script>

<header class="flex flex-col h-screen font-display">
  <nav class="flex flex-row-reverse w-full h-10">
    <button
      class="text-blue-500 cursor-pointer hover:text-blue-700"
      on:click={handleMenuClick}
    >
      <Icon
        icon={menuOpen ? 'mdi:close' : 'mdi:menu'}
        class="w-10 h-10 transition-all"
      />
    </button>
    <ul
      class="flex h-full origin-top-right items-center justify-center transition-all {menuOpen
        ? 'scale-100'
        : 'scale-0'}"
    >
      {#each navItems as navItem}
        <li class="flex items-center px-4 h-10">
          <a
            href={navItem.link}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center px-2 h-full text-xl text-gray-500 transition-colors hover:text-gray-700"
          >
            <Icon icon={navItem.icon} class="w-8 h-8 cursor-pointer" />
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <div
    class="flex flex-col flex-1 gap-4 justify-center items-center min-h-0 basis-auto"
  >
    <div class="flex flex-col flex-wrap gap-1 w-2/3">
      <div class="flex gap-x-1 items-end">
        <span class="text-lg font-medium">Hi, I am</span>
        <h1 class="text-3xl font-extrabold">Soymilk.</h1>
      </div>
      <ul class="flex flex-wrap gap-x-2">
        {#each titles as title, idx}
          <li class="text-base font-medium capitalize">
            {title}{idx === titles.length - 1 ? '.' : ','}
          </li>
        {/each}
      </ul>
    </div>
    <div class="w-2/3">
      <img
        src={avatar.src}
        alt="avatar"
        class="mx-auto w-full rounded-full ring-8 max-w-[40vh] ring-sky-500 drop-shadow-lg sm:w-[427px]"
      />
    </div>
  </div>
</header>
