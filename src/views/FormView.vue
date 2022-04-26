<template>
  <div>
    <div class="contact-form-wrapper d-flex justify-content-center">
      <form @submit.prevent="submit" class="contact-form">
        <h5 class="title">Contact form</h5>
        <div>
          <input
              v-model="form.name"
              type="text"
              class="form-control rounded border-white mb-3 form-input"
              id="name"
              placeholder="Name"
          >
        </div>

        <div>
          <input
              v-model="form.email"
              type="email"
              class="form-control rounded border-white mb-3 form-input"
              placeholder="E-mail"
          >
        </div>

        <div>
          <textarea
              v-model="form.message"
              class="form-control rounded border-white mb-3 form-text-area"
              rows="5"
              cols="30"
              placeholder="Message"
          >
          </textarea>
        </div>

        <span class="form-success" v-if="success">{{ success }}</span>

        <ul class="form-errors">
          <li
              v-for="(message, index) of (errors)"
              :key="`message-${index}`"
          >
            {{ message }}
          </li>
        </ul>

        <div class="submit-button-wrapper">
          <input type="submit" value="Send">
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      },
      success: "",
      errors: [],
    }
  },

  methods: {
    async submit() {
      this.success = ""
      this.errors = []

      const response = await this.createForm(this.form)

      const data = await response.json()

      if (response.status === 201) {
        this.success = response.statusText

        this.form.name = ""
        this.form.email = ""
        this.form.message = ""
      }

      if (data.error) {
        this.errors = data.message
      }
    },

    createForm(form: { name: string; email: string; message: string; }) {
      return fetch('http://localhost:3001/forms', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
    }
  }
})
</script>
