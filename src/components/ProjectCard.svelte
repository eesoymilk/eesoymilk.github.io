<script lang="ts">
  import Icon from '@iconify/svelte';
  import type { Project } from '../types';

  const icons = {
    githubUrl: 'mdi:github',
    otherUrl: 'mdi:link',
  };

  export let project: Project;
</script>

<div
  class="flex overflow-hidden flex-col gap-2 bg-gray-100 rounded-md shadow-lg group drop-shadow-lg"
>
  <div class="w-full aspect-video overflow-clip">
    {#if project.details.imageUrl}
      <img
        src={project.details.imageUrl}
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
      class="text-base font-semibold md:text-lg lg:text-xl font-display text-balance"
    >
      {project.title}
    </h3>
    <p class="flex flex-col font-serif text-sm md:text-base lg:text-lg">
      {project.brief}
    </p>
    {#if project.details.githubUrl || project.details.otherUrl}
      <ul class="flex justify-end mt-auto tems-center">
        {#if project.details.githubUrl}
          <li>
            <a
              href={project.details.githubUrl}
              class="text-neutral-500 hover:text-neutral-700"
            >
              <Icon
                icon="mdi:github"
                class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </a>
          </li>
        {/if}
        {#if project.details.otherUrl}
          <li>
            <a
              href={project.details.otherUrl}
              class="text-neutral-500 hover:text-neutral-700"
            >
              <Icon
                icon="mdi:link"
                class="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </a>
          </li>
        {/if}
      </ul>
    {/if}
  </div>
</div>
