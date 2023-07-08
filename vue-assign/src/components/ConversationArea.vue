<template>
  <div class="flex flex-col gap-3 overflow-y-auto" ref="targetRef">
    <div
      v-for="(message, index) in state.conversation"
      :key="message"
      :ref="`message-${index}`"
    >
      <MessageEntry
        :message="message"
        :currentUser="state.currentUser"
        @scroll-last="scrollToLastMessage"
      ></MessageEntry>
    </div>
  </div>
</template>
<script>
import MessageEntry from "./MessageEntry.vue";
export default {
  name: "ConversationArea",
  components: { MessageEntry },
  props: {
    state: Object,
  },
  methods: {
    scrollToLastMessage() {
      const lastChildElement = this.$refs.targetRef.lastElementChild;
      lastChildElement?.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>
