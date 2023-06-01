<template>
  <a-form @submit="onSubmit">
    <a-form-item label="命令执行">
      <a-input v-model="command" />
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit">运行</a-button>
    </a-form-item>
    <a-form-item>
      <p style="white-space: pre-wrap;">{{ result }}</p>
    </a-form-item>
  </a-form>
</template>

<script>
import { defineComponent } from 'vue'
import { Form, Input, Button, message } from 'ant-design-vue'

export default defineComponent({
  components: {
    AForm: Form, 
    AFormItem: Form.Item,
    AInput: Input,
    AButton: Button
  },
  data() {
    return {
      command: '',
      result: ''
    }
  },
  methods: {
    onSubmit() {
      fetch('/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          command: this.command
        })
      })
      .then(res => res.text())
      .then(result => {
        this.result = result
        message.success('Command executed')
        this.command = ''
      })
    }
  }
})
</script>