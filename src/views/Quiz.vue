<template>
  <v-container>
    <h1 class="text-center">クイズタイトル</h1>
    <div class="question-container">
      <div class="question-number">Q1</div>
      <div class="question-box">日本で一番高い山の名前は</div>

      <!-- 4択 -->
      <div id="answers">
        <div class="selection-btn">
          <v-btn block dark color="primary" flat>C. 富士山</v-btn>
        </div>

        <div class="selection-btn">
          <v-btn block dark color="primary" variant="outlined">C. 六甲山</v-btn>
        </div>

        <div class="selection-btn">
          <v-btn block dark color="primary" variant="outlined">C. 阿蘇山</v-btn>
        </div>

        <div class="selection-btn">
          <v-btn block dark color="primary" variant="outlined">D. 函館山</v-btn>
        </div>

        <div class="selection-btn">
          <v-btn block dark color="primary" variant="outlined">E. E山</v-btn>
        </div>
      </div>

      <div class="answer-btn">
        <v-btn depressed x-large block color="primary" flat v-on="on" @click.stop="dialog = true">回答する</v-btn>
      </div>

      <v-dialog v-model="dialog" persistent max-width="600">
        <div class="py-8 white">
          <div v-if="false" class="text-center blue--text judge-text">〇正解！</div>
          <div v-else class="text-center red--text judge-text">×不正解！</div>

          <div class="text-center font-weight-bold answer-text">正解は「A. 富士山」</div>
          <div class="py-3 px-6">説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明。</div>
          <div class="text-center mb-2">
            <v-btn color="primary" flat v-on="on" @click.stop="dialog = false">次の問題</v-btn>
          </div>
          <div class="text-center">
            <v-btn variant="text" v-on="on" @click.stop="dialog = false">やめる</v-btn>
          </div>
        </div>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style>
  .white {
    background: white;
  }

  .blue--text {
    color: rgb(9, 122, 214)
  }

  .red--text {
    color: rgb(227, 80, 12)
  }

  .judge-text {
    font-size: 40px;
  }

  .answer-text {
    font-size: 22px;
  }

  #answers {
   margin-top: 10px;
  }

  .selection-btn {
    margin-top: 14px;
  }

  .answer-btn {
    margin-top: 14px;
  }

  .question-container {
    margin: 0px 30px;
  }

  .question-number {
    padding-left: 6px;
    font-size: 30px;
  }
  .question-box {
    padding: 10px;
    border: 2px solid #000;
    height: 220px;
    font-size: 30px;
  }
</style>
