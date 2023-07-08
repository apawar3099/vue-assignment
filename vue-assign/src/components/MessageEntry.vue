<template>
  <div class="flex flex-row gap-3" :class="[isSent ? 'flex-row-reverse ' : '']">
    <div class="h-12 w-12 min-w-[48px]">
      <!-- <img :src="message.from.thumbnail" /> -->
      <img src="../assets/useIcon2.png" />
    </div>
    <div
      class="bg-blue-300 rounded-lg p-2 max-w-[60%]"
      :class="[isSent ? 'bg-blue-200  text-right' : 'bg-slate-200']"
    >
      {{ message.message }}
    </div>
  </div>
</template>
<script>
export default {
  name: "MessageEntry",
  props: {
    // isSent: Boolean,
    message: Object,
    currentUser: Object,
  },
  data() {
    return {
      isSent: false,
    };
  },
  mounted() {
    this.isSent = this.currentUser.id === this.message.from.id;
    this.scrollToLastEle();
  },
  methods: {
    scrollToLastEle() {
      this.$emit("scroll-last");
    },
  },
};
</script>
