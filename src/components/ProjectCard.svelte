<script lang="ts">
  import Icon from '@iconify/svelte';
  import type { Project } from '../types';

  export let project: Project;
</script>

<div
  class="flex overflow-hidden flex-col gap-2 bg-gray-100 rounded-md shadow-lg transition-shadow hover:shadow-xl group drop-shadow-lg hover:drop-shadow-xl"
>
  <div class="w-full aspect-video overflow-clip">
    {#if project.imageUrl}
      <img
        src={project.imageUrl}
        alt={project.title}
        class="object-cover w-full transition-all duration-100 group-hover:scale-125 group-hover:rotate-6"
      />
    {:else}
      <div
        class="grid place-items-center w-full h-full text-gray-500 bg-gray-200"
      >
        <Icon icon="mdi:image-off-outline" class="m-auto w-16 h-16" />
      </div>
    {/if}
  </div>
  <div
    class="flex flex-col flex-1 gap-1 p-2 min-h-0 sm:gap-2 lg:gap-3 basis-auto"
  >
    <h3
      class="text-base font-semibold md:text-lg lg:text-xl text-balance font-display"
    >
      {project.title}
    </h3>
    <p class="flex flex-col font-serif text-sm md:text-base lg:text-lg">
      {project.brief}
    </p>
    {#if project.details.length > 0}
      <ul class="flex justify-end mt-auto tems-center">
        {#each project.details as detail}
          <li>
            <a
              href={detail.url}
              class="text-neutral-500 hover:text-neutral-700"
              target="_blank"
            >
              <Icon
                icon={detail.icon}
                class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
