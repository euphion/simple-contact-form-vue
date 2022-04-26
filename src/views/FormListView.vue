<template>
  <div>
    <div class="contact-form-wrapper d-flex justify-content-center">
      <div class="contact-form">
        <h5 class="title">List</h5>

        <ul class="form-item" v-for="{ id, name, email, message } of forms" :key="`form-${id}`">
          <li><span>ID:</span> {{ id }}</li>
          <li><span>Name:</span> {{ name }}</li>
          <li><span>E-mail:</span> {{ email }}</li>
          <li><span>Message:</span> {{ message }}</li>
          <li><button @click="removeForm(id)">remove</button></li>
        </ul>

        <div v-if="!forms.length" class="no-records-message">
          No records
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      forms: []
    }
  },

  mounted() {
    this.fetchForms()
  },

  methods: {
    async fetchForms() {
      const response = await fetch('http://localhost:3001/forms', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })

      this.forms = await response.json()
    },

    async removeForm(id: string) {
       await fetch(`http://localhost:3001/forms/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      })

      this.fetchForms()
    }
  }
})
</script>
