<script lang="ts">
  export let organizationName: string;
  export let location: string;
  export let imageUrl: string;
  export let title: string;
  export let date: string;
  export let items: (string | { key: string; value: string })[];
</script>

<div class="flex flex-col gap-2 items-start p-4">
  <div class="flex gap-4 justify-between w-full">
    <div class="flex flex-col flex-1 gap-1 min-w-0 h-fit basis-auto">
      <div class="flex flex-wrap justify-between items-center">
        <div
          class="gap-2 text-base font-semibold sm:text-lg md:text-xl lg:text-2xl font-display text-balance"
        >
          {organizationName}
        </div>
        <div class="text-xs italic sm:text-sm md:text-base lg:text-lg">
          {location}
        </div>
      </div>
      <div class="flex flex-wrap gap-2 justify-between items-center">
        <div
          class="text-sm font-medium sm:text-base md:text-lg lg:text-xl font-display text-balance"
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
        class="rounded-full aspect-square max-h-[48px] max-w-[48px] sm:max-h-[60px] sm:max-w-[60px] md:max-h-[64px] md:max-w-[64px]"
        src={imageUrl}
        alt={organizationName}
      />
    </div>
  </div>
  <ul class="flex flex-col pl-5 list-disc">
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
  </ul>
</div>
