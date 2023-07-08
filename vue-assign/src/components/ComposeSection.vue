<template>
  <div class="flex gap-3">
    <textarea
      type="textarea"
      v-model="messageVal"
      class="border rounded-md flex-grow p-1"
      name=""
      rows="1"
      id="myTextarea"
      placeholder="Enter message"
    ></textarea>

    <button
      @click="onSend()"
      class="w-[60px] bg-blue-200 rounded-lg flex justify-center"
    >
      <img class="h-12 w-12 min-w-[48px]" src="../assets/sendIcon.png" />
    </button>
  </div>
</template>
<script>
export default {
  name: "ComposeSection",
  props: { currentUser: Object },
  data() {
    return {
      messageVal: "",
    };
  },
  // mounted() {
  //   console.log("jjjj", this.currentUser);
  // },
  methods: {
    onSend() {
      console.log("jjjj", this.currentUser);

      // let text = document.getElementById("myTextarea").value;
      // let lines = text.split(/\r|\r\n|\n/);
      // let count = lines.length;
      // console.log(count);
      if (!this.messageVal) {
        return;
      }
      const newMessage = {
        id: Math.floor(Math.random() * 1000),
        from: this.currentUser,
        message: this.messageVal,
        date: new Date().toDateString(),
      };

      this.$emit("send-message", newMessage);
      this.messageVal = "";
    },
  },
};
</script>
