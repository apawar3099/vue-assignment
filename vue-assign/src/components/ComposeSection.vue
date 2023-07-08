<template>
  <div class="flex gap-3">
    <textarea
      type="textarea"
      v-model="messageVal"
      class="border rounded-md flex-grow p-1"
      name=""
      rows="1"
      id="myTextarea"
    ></textarea>

    <button @click="onSend()" class="">
      <div class="h-12 w-12 min-w-[48px]">
        <img src="../assets/sendIcon.png" />
      </div>
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
  methods: {
    onSend() {
      // let text = document.getElementById("myTextarea").value;
      // let lines = text.split(/\r|\r\n|\n/);
      // let count = lines.length;
      // console.log(count);

      var text = document.getElementById("myTextarea").value;
      var lines = text.split(/\r|\r\n|\n/);
      var count = lines.length;
      console.log(count); // Outputs 4

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
