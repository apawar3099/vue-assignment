<template>
  <div  class="flex flex-col gap-3 overflow-y-auto">
    <div v-for="message in state.conversation" :key="message">
      <MessageEntry
        :message="message"
        :currentUser="state.currentUser"
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
  mounted() {},
};
</script>
