<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";

const PUBLIC_KEY = "A2TUmBChtgrYgY5Sd";
const SERVICE_ID = "service_04ysjec";
const TEMPLATE_ID = "template_i2xd40l";

const sending = ref(false);
const toast = ref({ show: false, type: "", msg: "" });

const fields = ref({
  from_name: "",
  from_email: "",
  subject: "",
  budget: "",
  message: "",
});

const errors = ref({});

function validate() {
  const e = {};
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!fields.value.from_name.trim()) e.from_name = "Nombre requerido";
  if (!re.test(fields.value.from_email))
    e.from_email = "Email válido requerido";
  if (!fields.value.subject) e.subject = "Selecciona un asunto";
  if (!fields.value.message.trim())
    e.message = "El mensaje no puede estar vacío";
  errors.value = e;
  return Object.keys(e).length === 0;
}

function showToast(type, msg) {
  toast.value = { show: true, type, msg };
  setTimeout(() => {
    toast.value.show = false;
  }, 5000);
}

async function submit() {
  if (!validate()) return;
  sending.value = true;
  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, fields.value, PUBLIC_KEY);
    showToast("success", "Mensaje enviado. Te respondo pronto.");
    fields.value = {
      from_name: "",
      from_email: "",
      subject: "",
      budget: "",
      message: "",
    };
    errors.value = {};
  } catch (err) {
    console.error(err);
    showToast("error", "Error al enviar. Inténtalo de nuevo.");
  } finally {
    sending.value = false;
  }
}
</script>

<template>
  <div class="min-h-screen bg-bg flex items-center justify-center px-5 py-10">
    <div class="w-full max-w-7xl">
      <div class="mb-14">
        <p class="text-[0.8rem] tracking-[0.18em] text-accent uppercase mb-4">
          Portfolio <span class="opacity-50 mx-1.5">/</span> Contacto
        </p>
        <h1
          class="font-serif font-light leading-tight text-5xl md:text-7xl text-text-primary"
        >
          Hablemos de<br />tu <em class="italic text-accent">proyecto.</em>
        </h1>
        <p class="mt-4 text-sm text-text-secondary leading-relaxed max-w-sm">
          Cuéntame en qué estás trabajando. Respondo en menos de 24h.
        </p>
      </div>

      <div class="border border-border rounded-sm p-10 max-sm:p-7 bg-surface">
        <form novalidate @submit.prevent="submit">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
            <div class="flex flex-col gap-2">
              <label
                for="from_name"
                class="text-[0.8rem] tracking-[0.14em] uppercase text-text-secondary"
              >
                Nombre
              </label>
              <input
                id="from_name"
                v-model="fields.from_name"
                type="text"
                name="from_name"
                placeholder="Tu nombre"
                :aria-describedby="errors.from_name ? 'err-name' : undefined"
                class="bg-transparent border-b border-border text-text-primary text-[13px] py-2.5 outline-none focus:border-border-focus transition-colors placeholder:text-text-muted"
              />
              <span
                v-if="errors.from_name"
                id="err-name"
                role="alert"
                class="text-[0.8rem] text-error"
              >
                {{ errors.from_name }}
              </span>
            </div>
            <div class="flex flex-col gap-2">
              <label
                for="from_email"
                class="text-[0.8rem] tracking-[0.14em] uppercase text-text-secondary"
              >
                Email
              </label>
              <input
                id="from_email"
                v-model="fields.from_email"
                type="email"
                name="from_email"
                placeholder="tu@email.com"
                :aria-describedby="errors.from_email ? 'err-email' : undefined"
                class="bg-transparent border-b border-border text-text-primary text-[13px] py-2.5 outline-none focus:border-border-focus transition-colors placeholder:text-text-muted"
              />
              <span
                v-if="errors.from_email"
                id="err-email"
                role="alert"
                class="text-[0.8rem] text-error"
              >
                {{ errors.from_email }}
              </span>
            </div>
          </div>

          <div class="flex flex-col gap-2 mb-5">
            <label
              for="subject"
              class="text-[0.8rem] tracking-[0.14em] uppercase text-text-secondary"
            >
              Asunto
            </label>
            <select
              id="subject"
              v-model="fields.subject"
              name="subject"
              :aria-describedby="errors.subject ? 'err-subject' : undefined"
              class="bg-surface border-b border-border text-text-primary text-[13px] py-2.5 outline-none focus:border-border-focus transition-colors appearance-none"
            >
              <option value="" disabled>Selecciona un tema…</option>
              <option value="Proyecto freelance">Proyecto freelance</option>
              <option value="Colaboración">Colaboración</option>
              <option value="Oferta de trabajo">Oferta de trabajo</option>
              <option value="Consulta técnica">Consulta técnica</option>
              <option value="Otro">Otro</option>
            </select>
            <span
              v-if="errors.subject"
              id="err-subject"
              role="alert"
              class="text-[0.8rem] text-error"
            >
              {{ errors.subject }}
            </span>
          </div>

          <div class="flex items-center gap-4 my-7">
            <div class="flex-1 h-px bg-border" />
            <span
              class="text-[0.8rem] tracking-[0.12em] text-text-secondary uppercase"
              >Mensaje</span
            >
            <div class="flex-1 h-px bg-border" />
          </div>

          <div class="flex flex-col gap-2">
            <label
              for="message"
              class="text-[0.8rem] tracking-[0.14em] uppercase text-text-secondary"
            >
              Cuéntame más
            </label>
            <textarea
              id="message"
              v-model="fields.message"
              name="message"
              placeholder="Describe tu proyecto, idea o pregunta…"
              maxlength="1200"
              rows="5"
              :aria-describedby="errors.message ? 'err-message' : undefined"
              class="bg-transparent border-b border-border text-text-primary text-[13px] py-2.5 outline-none focus:border-border-focus transition-colors placeholder:text-text-muted resize-none leading-relaxed"
            />
            <div class="flex justify-between items-start">
              <span
                v-if="errors.message"
                id="err-message"
                role="alert"
                class="text-[0.8rem] text-error"
              >
                {{ errors.message }}
              </span>
              <span class="text-[0.8rem] text-text-secondary ml-auto"
                >{{ fields.message.length }} / 1200</span
              >
            </div>
          </div>

          <div class="flex justify-end mt-8">
            <button
              type="submit"
              :disabled="sending"
              class="relative border border-accent text-accent text-[0.8rem] tracking-[0.16em] uppercase px-9 py-3.5 overflow-hidden transition-colors duration-300 rounded-sm disabled:opacity-40 disabled:cursor-not-allowed group"
            >
              <span
                class="absolute inset-0 bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"
              />
              <span
                class="relative z-10 group-hover:text-white transition-colors duration-300"
              >
                {{ sending ? "Enviando…" : "Enviar mensaje" }}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Toast -->
    <Transition
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0 translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-2"
    >
      <div
        v-if="toast.show"
        class="fixed bottom-8 right-8 px-5 py-3.5 rounded-sm text-xs flex items-center gap-2.5 border max-w-xs z-50"
        :class="
          toast.type === 'success'
            ? 'bg-success-bg border-success text-success'
            : 'bg-error-bg border-error text-error'
        "
      >
        <span>{{ toast.type === "success" ? "✓" : "✕" }}</span>
        <span>{{ toast.msg }}</span>
      </div>
    </Transition>
  </div>
</template>
