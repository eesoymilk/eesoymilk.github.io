<script lang="ts">
  export let organizationName: string;
  export let location: string;
  export let imageUrl: string;
  export let title: string;
  export let date: string;
  export let items: (string | { key: string; value: string })[] | undefined =
    undefined;
</script>

<div class="flex flex-col items-start gap-2 p-4">
  <div class="flex w-full justify-between gap-4">
    <div class="flex h-fit min-w-0 flex-1 basis-auto flex-col gap-1">
      <div class="flex flex-wrap items-center justify-between">
        <div
          class="gap-2 text-balance font-display text-base font-semibold sm:text-lg md:text-xl lg:text-2xl"
        >
          {organizationName}
        </div>
        <div class="text-xs italic sm:text-sm md:text-base lg:text-lg">
          {location}
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-between gap-2">
        <div
          class="text-balance font-display text-sm font-medium sm:text-base md:text-lg lg:text-xl"
        >
          {title}
        </div>
        <div class="text-xs italic sm:text-sm md:text-base lg:text-lg">
          {date}
        </div>
      </div>
    </div>
    <div class="">
      <img
        class="aspect-square max-h-[48px] max-w-[48px] rounded-full sm:max-h-[60px] sm:max-w-[60px] md:max-h-[64px] md:max-w-[64px]"
        src={imageUrl}
        alt={organizationName}
      />
    </div>
  </div>
  <ul class="flex list-disc flex-col pl-5">
    {#if items}
      {#each items as item}
        <li class="text-xs sm:text-sm md:text-base lg:text-lg">
          {#if typeof item === 'string'}
            {item}
          {:else}
            <span class="font-semibold">{item.key}: </span>
            <span>{item.value}</span>
          {/if}
        </li>
      {/each}
    {/if}
  </ul>
</div>
