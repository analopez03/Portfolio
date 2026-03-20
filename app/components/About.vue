<script setup lang="ts"></script>

<template>
  <div class="h-px bg-gradient-to-r from-transparent from-[20%] via-accent to-transparent to-[80%]" />
  <section
    id="about"
    class="w-full px-6 py-12 bg-surface"
    role="region"
    aria-label="Sobre mí - Diseñadora Gráfica"
  >
    <div class="max-w-7xl mx-auto p-6">
      <TheTitle>
        Sobre
        <template #pinkTitle>mí</template>
      </TheTitle>

      <p class="text-text-secondary leading-relaxed">
        Soy <strong class="text-text-primary">diseñadora gráfica</strong> con
        experiencia adquirida durante mis prácticas profesionales, aplicando mis
        conocimientos en proyectos reales y enfrentándome a distintos retos
        creativos. Me considero responsable, organizada y con gran atención al
        detalle, cualidades que me permiten desarrollar propuestas visuales
        coherentes y atractivas. Destaco por mi
        <strong class="text-text-primary">creatividad</strong>, mi capacidad de
        trabajo en equipo y mi interés constante por aprender y mejorar,
        buscando siempre nuevas formas de comunicar ideas de manera clara,
        efectiva y visualmente impactante.
      </p>

      <p class="mt-4 text-text-secondary leading-relaxed">
        Mi <strong class="text-text-primary">Trabajo de Fin de Grado</strong> se
        centró en la creación de un
        <strong class="text-text-primary">plan de marca</strong> propia, donde
        desarrollé todo el proceso de diseño integral. Trabajé desde la
        conceptualización de la marca y la definición de su
        <strong class="text-text-primary">identidad visual</strong> hasta la
        aplicación en distintos soportes. Como parte del proyecto, diseñé
        también el <strong class="text-text-primary">sitio web</strong> de la
        marca, cuidando tanto la estética como la experiencia de usuario, para
        crear una presencia digital coherente, funcional y alineada con los
        valores de la marca.
      </p>

      <p class="mt-4 text-text-secondary leading-relaxed">
        Puedes ver algunos de mis proyectos en la sección de
        <a
          href="/project"
          class="text-accent underline hover:text-accent-hover transition-colors"
          >proyectos</a
        >, donde aplico principios de
        <strong class="text-text-primary">branding</strong>,
        <strong class="text-text-primary">UX/UI</strong> y
        <strong class="text-text-primary">identidad visual</strong> para crear
        soluciones creativas y efectivas.
      </p>
    </div>

    <div class="flex justify-center mt-8">
      <a
        href=""
        download
        target="_blank"
        class="bg-accent-subtle text-accent rounded-3xl px-8 py-3 font-semibold hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-border-focus focus:ring-offset-2 transition-colors duration-300"
        aria-label="Descargar el CV de Ana López en PDF"
      >
        Ver CV
      </a>
    </div>
  </section>
</template>
