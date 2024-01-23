<script lang="ts">
  import avatar from '../assets/avatar.png';

  const titles = ['software developer', 'programming tutor', 'IoT enthusiast'];
</script>

<header
  class="mx-auto flex h-screen flex-col bg-gradient-to-b from-sky-700 from-40% to-sky-100 font-display"
>
  <div
    class="mx-auto flex min-h-0 w-2/3 flex-1 basis-auto flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8"
  >
    <div class="flex flex-col flex-wrap gap-1">
      <div class="flex items-end gap-x-1">
        <span class="text-lg font-medium md:text-xl xl:text-2xl">Hi, I am</span>
        <h1 class="text-2xl font-extrabold md:text-3xl xl:text-4xl">
          Yu-Wei Chang
        </h1>
        <span class="text-lg font-medium md:text-xl xl:text-2xl">;</span>
      </div>
      <p class="md:text-lg lg:text-xl">
        You can also call me
        <strong class="text-xl md:text-2xl xl:text-3xl">Wilson</strong>.
      </p>
      <ul class="flex flex-wrap gap-x-2">
        {#each titles as title, idx}
          <li class="text-base font-medium capitalize md:text-lg lg:text-xl">
            {title}{idx === titles.length - 1 ? '.' : ','}
          </li>
        {/each}
      </ul>
    </div>
    <div class="relative">
      <div
        class="animate-rainbow absolute inset-0 h-full w-full rounded-full drop-shadow"
      ></div>
      <img
        src={avatar.src}
        alt="avatar"
        class="mx-auto w-full max-w-[40vh] rounded-full p-2 drop-shadow-lg sm:w-[427px] md:p-4"
      />
    </div>
  </div>
</header>
