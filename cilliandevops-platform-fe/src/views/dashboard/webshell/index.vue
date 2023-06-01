<template>
  <a-row>
    <a-col :span="12">
      <a-form @submit="onSubmit">
        <a-form-item label="Host">
          <a-input v-model="host" />
        </a-form-item>
        <a-form-item label="Port">
          <a-input v-model="port" />
        </a-form-item>
        <a-form-item label="Username">
          <a-input v-model="username"  />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit">Connect</a-button>
        </a-form-item>
      </a-form>
    </a-col>
    <a-col :span="12">
      <div style="height: 400px;" ref="terminal"></div>
    </a-col>
  </a-row>
</template>
<!-- <script>
import { defineComponent } from 'vue'
import { Form, Input, Button, Row, Col, message } from 'ant-design-vue'
import { Terminal } from 'xterm'

export default defineComponent({
  components: { 
    AForm: Form,  
    AFormItem: Form.Item,
    AInput: Input, 
    AButton: Button,
    ARow: Row,
    ACol: Col
  },
  data() {
    return {
      host: 'localhost',
      port: 22,
      username: 'root',
      password: 'cillian',
      socket: null,
      terminal: null
    }
  },
  methods: {
    onSubmit() {
      this.socket = new WebSocket(`ws://${this.host}:${this.port}/`)
      this.socket.onopen = () => {
        this.terminal = new Terminal({ 
          fontSize: 16, 
          fontFamily: 'monospace' 
        })
        this.terminal.open(this.$refs.terminal)
        this.terminal.write('Connecting ...\r\n')
        this.socket.send(
          JSON.stringify({
            username: this.username,
            password: this.password  
          })
        )
      }
      this.socket.onmessage = msg => {
        this.terminal.write(msg.data)
      }
      this.socket.onclose = () => {
        message.error('Connection closed')
        this.terminal.destroy()
      }
    }
  }
})
</script> -->