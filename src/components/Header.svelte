<script lang="ts">
  import avatar from '../assets/avatar.png';

  const titles = ['software developer', 'programming tutor', 'IoT enthusiast'];
</script>

<header class="flex flex-col mx-auto w-2/3 h-screen font-display">
  <div
    class="flex flex-col flex-1 gap-4 justify-center items-center min-h-0 md:gap-6 lg:gap-8 basis-auto"
  >
    <div class="flex flex-col flex-wrap gap-1">
      <div class="flex gap-x-1 items-end">
        <span class="text-lg font-medium md:text-xl xl:text-2xl">Hi, I am</span>
        <h1 class="text-2xl font-extrabold md:text-3xl xl:text-4xl">
          Yu-Wei Chang;
        </h1>
      </div>
      <p class="md:text-lg lg:text-xl">
        You can also call me <strong class="text-xl md:text-2xl xl:text-3xl"
          >Wilson</strong
        >.
      </p>
      <ul class="flex flex-wrap gap-x-2">
        {#each titles as title, idx}
          <li class="text-base font-medium capitalize md:text-lg lg:text-xl">
            {title}{idx === titles.length - 1 ? '.' : ','}
          </li>
        {/each}
      </ul>
    </div>
    <div>
      <img
        src={avatar.src}
        alt="avatar"
        class="mx-auto w-full rounded-full ring-8 max-w-[40vh] ring-sky-500 drop-shadow-lg sm:w-[427px]"
      />
    </div>
  </div>
</header>
