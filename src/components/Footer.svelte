<script lang="ts">
  import Icon from '@iconify/svelte';
  import Divider from './Divider.svelte';

  const email = 'qiyoudaoyi@gmail.com';

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

<div class="mt-4 w-full text-white bg-sky-700">
  <footer class="flex flex-col gap-4 p-4 mx-auto max-w-5xl">
    <div class="flex flex-col gap-2">
      <p class="font-serif font-bold text-cyan-500">Say Hello</p>
      <a
        href={`mailto:${email}`}
        class="flex gap-2 items-center text-cyan-200 hover:text-cyan-400 font-display"
      >
        <Icon icon="mdi:email" class="w-6 h-6" />
        {email}
      </a>
    </div>
    <Divider />
    <div class="flex justify-between items-center font-bold font-display">
      <span class="text-xs text-cyan-200">© Yu-Wei Chang 2024</span>
      <ul
        class="flex justify-center items-center h-full transition-all origin-top-right"
      >
        {#each socials as social}
          <li class="flex items-center px-4 h-10">
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center px-2 h-full text-xl text-cyan-200 transition-colors hover:text-cyan-400"
            >
              <Icon icon={social.icon} class="w-6 h-6 cursor-pointer" />
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </footer>
</div>
