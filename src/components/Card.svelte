<script lang="ts">
  export let organizationName: string;
  export let location: string;
  export let imageUrl: string;
  export let title: string;
  export let date: string;
  export let items: string[];
</script>

<div
  class="flex flex-col gap-2 items-start p-4 rounded-md shadow-lg bg-neutral-300"
>
  <div class="flex justify-between">
    <div class="flex flex-col gap-1">
      <div class="flex flex-col">
        <div class="text-base font-semibold">{organizationName}</div>
        <div class="text-sm italic">{location}</div>
      </div>
      <div class="flex flex-col">
        <div class="text-sm font-medium">{title}</div>
        <div class="text-xs italic">{date}</div>
      </div>
    </div>
    <div>
      <img class="w-20 rounded-full" src={imageUrl} alt={organizationName} />
    </div>
  </div>
  <ul class="flex flex-col pl-5 list-disc">
    {#each items as item}
      <li class="text-xs">{item}</li>
    {/each}
  </ul>
</div>
