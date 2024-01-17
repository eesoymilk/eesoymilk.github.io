<script lang="ts">
  import type { Project } from '../types';

  export let project: Project;
</script>

<div
  class="flex overflow-hidden flex-col gap-2 p-4 bg-gray-100 rounded-md shadow-lg drop-shadow-lg"
>
  <div></div>
  <div class="flex flex-col gap-1">
    <div class="text-base font-semibold font-display text-balance">
      {project.title}
    </div>
    <div class="flex flex-col"></div>
  </div>
</div>
