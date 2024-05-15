<script lang="ts">
  import Icon from '@iconify/svelte';
  import type { Project } from '../types';

  export let project: Project;
</script>

<div
  class="group flex flex-col gap-2 overflow-hidden rounded-md bg-gray-100 shadow-lg drop-shadow-lg transition-shadow hover:shadow-xl hover:drop-shadow-xl dark:bg-gray-500 dark:text-gray-300"
>
  <div class="aspect-video w-full overflow-clip">
    {#if project.imageUrl}
      <img
        src={project.imageUrl}
        alt={project.title}
        class="w-full object-cover transition-all duration-100 group-hover:rotate-6 group-hover:scale-125"
      />
    {:else}
      <div
        class="grid h-full w-full place-items-center bg-gray-200 text-gray-500 dark:bg-gray-700"
      >
        <Icon icon="mdi:image-off-outline" class="m-auto h-16 w-16" />
      </div>
    {/if}
  </div>
  <div
    class="flex min-h-0 flex-1 basis-auto flex-col gap-1 p-2 sm:gap-2 lg:gap-3"
  >
    <h3
      class="text-balance font-display text-base font-semibold md:text-lg lg:text-xl"
    >
      {project.title}
    </h3>
    <p class="flex flex-col font-serif text-sm md:text-base lg:text-lg">
      {project.brief}
    </p>
    {#if project.details.length > 0}
      <ul class="tems-center mt-auto flex justify-end">
        {#each project.details as detail}
          <li>
            <a
              href={detail.url}
              class="text-neutral-500 hover:text-neutral-700"
              target="_blank"
            >
              <Icon
                icon={detail.icon}
                class="h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10"
              />
            </a>
          </li>
        {/each}
      </ul>
    {/if}
  </div>
</div>
