<template>
  <section id="contact" class="contact-section">
    <div class="contact-backdrop"></div>
    <div class="contact-card">
      <div class="section-heading contact-heading">
        <div>
          <h2>Let's Talk</h2>
          <p>
            I'm currently in Washington, DC. If you want to talk about
            full-stack engineering, backend systems, or product-focused
            software work, my inbox is open.
          </p>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="handleSubmit">
        <label>
          <span>Name</span>
          <input
            v-model.trim="contactForm.name"
            type="text"
            name="name"
            autocomplete="name"
            placeholder="Your Name"
            required
          />
        </label>

        <label>
          <span>Email</span>
          <input
            v-model.trim="contactForm.email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="your@email.com"
            required
          />
        </label>

        <label>
          <span>Message</span>
          <textarea
            v-model.trim="contactForm.message"
            name="message"
            rows="6"
            placeholder="Your Message..."
            required
          ></textarea>
        </label>

        <input
          v-model="contactForm.company"
          class="contact-honeypot"
          type="text"
          name="company"
          tabindex="-1"
          autocomplete="off"
          aria-hidden="true"
        />

        <div class="contact-note">
          Messages are sent securely to my inbox. This site can deliver to a Cloudflare-routed email address, but email sending is handled by the backend API.
        </div>

        <p
          v-if="formStatus.message"
          class="form-status"
          :class="{
            'form-status-success': formStatus.type === 'success',
            'form-status-error': formStatus.type === 'error',
          }"
          role="status"
          aria-live="polite"
        >
          {{ formStatus.message }}
        </p>

        <button class="submit-button" type="submit" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : 'Submit' }}
        </button>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';

const isSubmitting = ref(false);
const formStatus = reactive({
  type: '',
  message: '',
});
const contactForm = reactive({
  name: '',
  email: '',
  message: '',
  company: '',
});

const handleSubmit = async (event) => {
  const form = event.target;

  const nameInput = form.querySelector('input[placeholder="Your Name"]');
  const emailInput = form.querySelector('input[placeholder="your@email.com"]');
  const messageInput = form.querySelector('textarea');

  const payload = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert(`Error: ${result.error}`);
    }
  } catch (err) {
    alert('The server is not responding. Check your Vercel logs.');
  }
};
</script>
