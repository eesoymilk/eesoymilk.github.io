<script lang="ts">
  import Icon from '@iconify/svelte';
  import Divider from './Divider.svelte';

  const email = 'ywchang@ucla.edu';

  const socials = [
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
</script>

<div class="mt-4 w-full bg-sky-700 text-white dark:bg-sky-950">
  <footer class="mx-auto flex max-w-5xl flex-col gap-4 p-4">
    <div class="flex flex-col gap-2">
      <p
        class="font-serif text-lg font-bold md:text-xl lg:text-2xl dark:text-cyan-300"
      >
        Say Hello
      </p>
      <a
        href={`mailto:${email}`}
        class="flex w-fit items-center gap-2 font-display text-cyan-200 hover:text-cyan-400 md:text-lg lg:text-xl"
      >
        <Icon icon="mdi:email" class="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10" />
        {email}
      </a>
    </div>
    <Divider />
    <div class="font flex items-center justify-between font-display">
      <span class="text-balance text-xs text-cyan-200 md:text-sm lg:text-base"
        >© Yu-Wei Chang 2024</span
      >
      <ul
        class="flex h-full origin-top-right items-center justify-center transition-all"
      >
        {#each socials as social}
          <li class="flex h-10 items-center px-4">
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-full items-center px-2 text-xl text-cyan-200 transition-colors hover:text-cyan-400"
            >
              <Icon
                icon={social.icon}
                class="h-6 w-6 cursor-pointer md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </footer>
</div>
