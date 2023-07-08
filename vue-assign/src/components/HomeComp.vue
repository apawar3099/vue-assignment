<template>
  <div class="h-screen relative flex flex-col overflow-hidden">
    <div class="!h-[var(100%-72px)] overflow-y-auto p-3">
      <ConversationArea :state="state" />
    </div>
    <div class="absolute bottom-0 left-0 right-0 bg-slate-100 p-3">
      <ComposeSection
        :currentUser="this.state.currentUser"
        @send-message="sendMessage"
      />
    </div>
  </div>
</template>
<script>
import ConversationArea from "./ConversationArea.vue";
// import MessageEntry from "./MessageEntry.vue";
import ComposeSection from "./ComposeSection.vue";
import { conversation, currentUser } from "../mockApi";
export default {
  name: "HomeComp",
  components: {
    ConversationArea,
    ComposeSection,
  },
  data() {
    return {
      state: {},
    };
  },
  mounted() {
    this.state = {
      conversation: JSON.parse(conversation),
      currentUser: JSON.parse(currentUser),
    };
    console.log(this.state.conversation);

    // this.$store.state.conversation
    console.log("sdsd", this.$store.state.conversation);
    // await this.$store.commit("fetchData");
    this.$store.dispatch("fetchDataApi");

    console.log("sdsd", this.$store.state.conversation);
  },
  methods: {
    sendMessage(message) {
      console.log("sdsd", message);
      this.state.conversation = [...this.state.conversation, message];
    },
  },
};
</script>
