<template>
  <div class="h-screen relative flex flex-col overflow-hidden">
    <div class="!h-[calc(100%-72px)] overflow-y-auto p-3">
      <ConversationArea :state="$store.state.chat" />
    </div>
    <div class="absolute bottom-0 left-0 right-0 bg-slate-100 p-3">
      <ComposeSection
        :currentUser="$store.state.chat.currentUser"
        @send-message="sendMessage"
      />
    </div>
  </div>
</template>
<script>
import ConversationArea from "./ConversationArea.vue";
import ComposeSection from "./ComposeSection.vue";

export default {
  name: "HomeComp",
  components: {
    ConversationArea,
    ComposeSection,
  },

  mounted() {
    this.$store.dispatch("fetchDataApi");
  },
  methods: {
    async sendMessage(message) {
      await this.$store.dispatch("sendDataApi", message);
    },
  },
};
</script>
