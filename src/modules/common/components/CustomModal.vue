<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <!-- HEADER -->
      <div>
        <slot name="header" />
      </div>

      <!-- BODY -->
      <div class="my-5">
        <slot name="body" />
      </div>

      <!-- FOOTER -->
      <div class="">
        <slot name="actions" />
      </div>
    </div>
  </dialog>

  <div
    v-if="open"
    class="modal-backdrop fixed top-0 left-0 z-10 bg-black/40 w-screen h-screen"
  ></div>
</template>

<script lang="ts" setup>
interface Props {
  open?: boolean;
}

withDefaults(defineProps<Props>(), {
  open: false,
});
</script>
