<template>
  <div class="wrapper-form">
    <form v-if="!showForm" class="form" @submit.prevent="showForm = true">
      <div class="el-form" v-for="(item, index) in info" :key="index">
        <label :class="info[index].classDone">{{item.name}}</label>
        <input type="text" name="name" v-model="item.value" v-on:keyup="checkName(index)" />
      </div>
      <template>
        <button :class="sendAddClass">Send Data</button>
      </template>
    </form>
    <div v-else class="send">
      <h2>All done!</h2>
      <p>Thanks, {{info[0].value}} we will contact you.</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      info: [
        {
          name: "Name",
          value: "",
          pattern: /^[a-zA-Z ]{2,30}$/,
          classDone: "",
          flagButtonActive: 0
        },
        {
          name: "Phone",
          value: "",
          pattern: /^[0-9]{7,14}$/,
          classDone: "",
          flagButtonActive: 0
        },
        {
          name: "Email",
          value: "",
          pattern: /(?=.*[@])^[a-zA-Z@0-9]{4,30}$/,
          classDone: "",
          flagButtonActive: 0
        }
      ],
      showForm: false
    };
  },
  computed: {
    sendAddClass() {
      let counter = 0;

      this.info.forEach(element => {
        counter += element.flagButtonActive;
      });

      return counter === 3 ? { "send-form-else": true } : { "send-form": true };
    }
  },
  methods: {
    checkName(index) {
      const element = this.info[index];

      if (!element.pattern.test(element.value)) {
        element.classDone = "not-done";
        element.flagButtonActive = 0;
      } else {
        element.classDone = "done";
        element.flagButtonActive = 1;
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/main.scss";

.wrapper-form {
  width: 100%;
  height: 100vh;
  background-color: $form;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 320px;
    height: auto;
    color: #373a3c;
    background-color: #b1c8e2;
    padding: 30px;
    .el-form {
      display: flex;
      flex-direction: column;
      label {
        margin-bottom: 0.3vw;
        margin-top: 0.5vw;
        width: 100%;
        input {
          display: block;
          width: 100%;
        }
      }
      .done::after {
        content: "";
        background-image: url("../assets/img/done.png");
        margin-left: 0.5vw;
        width: 1vw;
        height: 1vw;
        position: absolute;
        background-size: cover;
      }
      .not-done::after {
        content: "";
        background-image: url("../assets/img/notDone.png");
        margin-left: 0.5vw;
        width: 1vw;
        height: 1vw;
        position: absolute;
        background-size: cover;
      }
    }
    .send-form-else {
      width: 100px;
      margin-top: 25px;
      cursor: pointer;
      opacity: 1;
      pointer-events: auto;
    }
    .send-form {
      width: 100px;
      margin-top: 25px;
      cursor: pointer;
      opacity: 0.5;
      pointer-events: none;
    }
  }
  .send {
    font-size: 30px;
    color: #eff0f3;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #2ace7870;
    padding: 20px;

    h2 {
      margin-bottom: 15px;
    }
    .inData {
      width: 70%;
      input {
        margin-top: 0.4vw;
      }
    }
  }
}
</style>