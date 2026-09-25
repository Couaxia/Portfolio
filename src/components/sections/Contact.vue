<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  console.log('Formulaire :', form.value)
}
</script>


<template>
  <section
    id="contact"
    class="contact"
  >

    <!-- =========================
         BACKGROUND
    ========================== -->

    <div class="contact-glow contact-glow-left"></div>
    <div class="contact-glow contact-glow-right"></div>

    <div class="orbit orbit-one"></div>
    <div class="orbit orbit-two"></div>

    <span class="star star-one">✦</span>
    <span class="star star-two">✦</span>
    <span class="star star-three">✧</span>
    <span class="star star-four">✦</span>


    <!-- =========================
         CONTAINER
    ========================== -->

    <div class="contact-container">

      <!-- =========================
           LEFT
      ========================== -->

      <div class="contact-content">

        <p class="section-label">
          Contact
        </p>


        <h1 class="contact-title">
          Une idée,
          <span>un projet ?</span>
        </h1>


        <p class="contact-description">
          Une question, une collaboration ou simplement envie
          de discuter d'un projet ?
          N'hésite pas à me contacter.
        </p>


        <!-- EMAIL -->

        <div class="contact-email">

          <span class="contact-small">
            Mon adresse
          </span>

          <a href="mailto:ton-email@email.com">
            ton-email@email.com
            <span>↗</span>
          </a>

        </div>


        <!-- SOCIALS -->

        <div class="contact-socials">

          <p>
            Me retrouver ailleurs
          </p>

          <div class="social-list">

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <span class="social-number">01.</span>

              <span>Twitch</span>

              <span class="social-arrow">↗</span>
            </a>


            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <span class="social-number">02.</span>

              <span>GitHub</span>

              <span class="social-arrow">↗</span>
            </a>


            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <span class="social-number">03.</span>

              <span>LinkedIn</span>

              <span class="social-arrow">↗</span>
            </a>

          </div>

        </div>

      </div>


      <!-- =========================
           FORM
      ========================== -->

      <div class="contact-form-wrapper">

        <!-- DECORATION -->

        <div class="form-frame form-frame-one"></div>
        <div class="form-frame form-frame-two"></div>


        <form
          class="contact-form"
          @submit.prevent="submitForm"
        >

          <!-- FORM HEADER -->

          <div class="form-header">

            <span class="form-number">
              01
            </span>

            <span class="form-status">
              <span class="status-dot"></span>
              Disponible
            </span>

          </div>


          <!-- NAME -->

          <div class="form-group">

            <label for="name">
              Ton nom
            </label>

            <input
              id="name"
              v-model="form.name"
              type="text"
              name="name"
              placeholder="Comment dois-je t'appeler ?"
              autocomplete="name"
              required
            >

          </div>


          <!-- EMAIL -->

          <div class="form-group">

            <label for="email">
              Ton email
            </label>

            <input
              id="email"
              v-model="form.email"
              type="email"
              name="email"
              placeholder="ton@email.com"
              autocomplete="email"
              required
            >

          </div>


          <!-- SUBJECT -->

          <div class="form-group">

            <label for="subject">
              Sujet
            </label>

            <input
              id="subject"
              v-model="form.subject"
              type="text"
              name="subject"
              placeholder="Parle-moi de ton projet..."
              required
            >

          </div>


          <!-- MESSAGE -->

          <div class="form-group">

            <label for="message">
              Ton message
            </label>

            <textarea
              id="message"
              v-model="form.message"
              name="message"
              rows="5"
              placeholder="Écris ton message ici..."
              required
            ></textarea>

          </div>


          <!-- SUBMIT -->

          <button
            type="submit"
            class="submit-button"
          >
            <span>
              Envoyer mon message
            </span>

            <span class="button-arrow">
              →
            </span>
          </button>

        </form>

      </div>

    </div>

  </section>
</template>


<style scoped>

/* ==================================================
   CONTACT
================================================== */

.contact {
  position: relative;

  width: 100%;
  min-height: calc(100vh - 80px);

  display: flex;
  align-items: center;

  padding: 130px 0 100px;

  background: var(--color-background);

  overflow: hidden;
}


/* ==================================================
   CONTAINER
================================================== */

.contact-container {
  position: relative;

  z-index: 5;

  width: min(calc(100% - 80px), 1500px);

  margin-inline: auto;

  display: grid;

  grid-template-columns:
    minmax(0, 0.85fr)
    minmax(450px, 0.75fr);

  align-items: center;

  gap: clamp(70px, 8vw, 150px);
}


/* ==================================================
   LEFT CONTENT
================================================== */

.contact-content {
  position: relative;

  z-index: 5;

  max-width: 650px;
}


/* ==================================================
   LABEL
================================================== */

.section-label {
  position: relative;

  display: inline-flex;
  align-items: center;

  gap: 18px;

  margin-bottom: 30px;

  color: var(--color-pink-soft);

  font-size: 0.75rem;
  font-weight: 600;

  letter-spacing: 0.3em;

  text-transform: uppercase;
}


.section-label::before {
  content: '';

  width: 48px;
  height: 1px;

  background:
    linear-gradient(
      90deg,
      var(--color-purple),
      var(--color-pink)
    );
}


/* ==================================================
   TITLE
================================================== */

.contact-title {
  display: flex;
  flex-direction: column;

  margin-bottom: 35px;

  color: var(--color-white);

  font-size:
    clamp(
      4rem,
      7vw,
      7rem
    );

  font-weight: 700;

  line-height: 0.9;

  letter-spacing: -0.05em;
}


.contact-title span {
  width: fit-content;

  margin-top: 12px;

  background:
    linear-gradient(
      90deg,
      #ff91d6,
      #ff4fb8,
      #8f4cff
    );

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
}


/* ==================================================
   DESCRIPTION
================================================== */

.contact-description {
  max-width: 530px;

  margin-bottom: 55px;

  color: var(--color-text-muted);

  font-size: 1.05rem;

  line-height: 1.9;
}


/* ==================================================
   EMAIL
================================================== */

.contact-email {
  display: flex;
  flex-direction: column;

  align-items: flex-start;

  gap: 10px;

  margin-bottom: 55px;
}


.contact-small {
  color: var(--color-pink-soft);

  font-size: 0.68rem;
  font-weight: 600;

  letter-spacing: 0.2em;

  text-transform: uppercase;
}


.contact-email a {
  position: relative;

  display: inline-flex;
  align-items: center;

  gap: 12px;

  padding-bottom: 8px;

  color: var(--color-white);

  font-size:
    clamp(
      1.2rem,
      2vw,
      1.7rem
    );

  font-weight: 600;
}


.contact-email a::after {
  content: '';

  position: absolute;

  left: 0;
  bottom: 0;

  width: 35%;
  height: 1px;

  background:
    linear-gradient(
      90deg,
      var(--color-pink),
      var(--color-purple)
    );

  transition:
    width
    var(--transition-normal);
}


.contact-email a:hover::after {
  width: 100%;
}


.contact-email a span {
  color: var(--color-pink);

  font-size: 1rem;

  transition:
    transform
    var(--transition-normal);
}


.contact-email a:hover span {
  transform:
    translate(4px, -4px);
}


/* ==================================================
   SOCIALS
================================================== */

.contact-socials > p {
  margin-bottom: 18px;

  color: var(--color-text-muted);

  font-size: 0.75rem;

  letter-spacing: 0.15em;

  text-transform: uppercase;
}


.social-list {
  max-width: 480px;

  border-top:
    1px solid
    var(--color-border);
}


.social-link {
  display: grid;

  grid-template-columns:
    45px
    1fr
    auto;

  align-items: center;

  gap: 15px;

  padding: 17px 5px;

  border-bottom:
    1px solid
    var(--color-border);

  color: var(--color-white);

  transition:
    padding
    var(--transition-normal),
    background
    var(--transition-normal);
}


.social-link:hover {
  padding-left: 15px;

  background:
    rgba(255, 255, 255, 0.025);
}


.social-number {
  color: var(--color-pink);

  font-size: 0.7rem;
}


.social-arrow {
  color: var(--color-pink-soft);

  transition:
    transform
    var(--transition-normal);
}


.social-link:hover .social-arrow {
  transform:
    translate(4px, -4px);
}


/* ==================================================
   FORM WRAPPER
================================================== */

.contact-form-wrapper {
  position: relative;

  width: 100%;
  max-width: 580px;

  margin-left: auto;
}


/* ==================================================
   FORM DECORATIVE FRAMES
================================================== */

.form-frame {
  position: absolute;

  inset: 0;

  border-radius: 32px;

  pointer-events: none;
}


.form-frame-one {
  z-index: -1;

  border:
    1px solid
    rgba(255, 79, 184, 0.32);

  transform:
    translate(-15px, 15px)
    rotate(-2deg);
}


.form-frame-two {
  z-index: -2;

  border:
    1px solid
    rgba(143, 76, 255, 0.28);

  transform:
    translate(18px, -12px)
    rotate(2deg);
}


/* ==================================================
   FORM
================================================== */

.contact-form {
  position: relative;

  padding:
    42px
    45px
    45px;

  border:
    1px solid
    rgba(255, 255, 255, 0.1);

  border-radius: 32px;

  background:
    linear-gradient(
      145deg,
      rgba(39, 21, 50, 0.92),
      rgba(22, 12, 29, 0.96)
    );

  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  box-shadow:
    0 35px 80px
    rgba(0, 0, 0, 0.3);
}


/* ==================================================
   FORM HEADER
================================================== */

.form-header {
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-bottom: 38px;
}


.form-number {
  color:
    rgba(255, 255, 255, 0.25);

  font-size: 0.75rem;

  letter-spacing: 0.15em;
}


.form-status {
  display: flex;
  align-items: center;

  gap: 8px;

  color: var(--color-text-muted);

  font-size: 0.7rem;

  letter-spacing: 0.12em;

  text-transform: uppercase;
}


.status-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: var(--color-pink);

  box-shadow:
    0 0 12px
    var(--color-pink);

  animation:
    status-pulse
    2s
    ease-in-out
    infinite;
}


@keyframes status-pulse {

  0%,
  100% {
    opacity: 0.5;

    transform:
      scale(0.8);
  }

  50% {
    opacity: 1;

    transform:
      scale(1.2);
  }

}


/* ==================================================
   FORM GROUP
================================================== */

.form-group {
  position: relative;

  display: flex;
  flex-direction: column;

  gap: 10px;

  margin-bottom: 27px;
}


.form-group label {
  color: var(--color-pink-soft);

  font-size: 0.7rem;
  font-weight: 600;

  letter-spacing: 0.15em;

  text-transform: uppercase;
}


/* ==================================================
   INPUTS
================================================== */

.form-group input,
.form-group textarea {
  width: 100%;

  padding:
    13px
    0;

  border: none;

  border-bottom:
    1px solid
    rgba(255, 255, 255, 0.15);

  border-radius: 0;

  outline: none;

  background: transparent;

  color: var(--color-white);

  font-size: 0.95rem;

  transition:
    border-color
    var(--transition-normal);
}


.form-group textarea {
  min-height: 110px;

  resize: vertical;

  line-height: 1.6;
}


.form-group input::placeholder,
.form-group textarea::placeholder {
  color:
    rgba(185, 174, 191, 0.45);
}


.form-group input:focus,
.form-group textarea:focus {
  border-color:
    var(--color-pink);
}


/* ==================================================
   SUBMIT BUTTON
================================================== */

.submit-button {
  position: relative;

  width: 100%;
  min-height: 58px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 15px;

  padding:
    0
    25px;

  border-radius: 50px;

  overflow: hidden;

  background:
    linear-gradient(
      135deg,
      var(--color-purple),
      var(--color-pink)
    );

  color: var(--color-white);

  font-size: 0.9rem;
  font-weight: 600;

  box-shadow:
    0 15px 35px
    rgba(143, 76, 255, 0.2);

  transition:
    transform
    var(--transition-normal),
    box-shadow
    var(--transition-normal);
}


.submit-button:hover {
  transform:
    translateY(-3px);

  box-shadow:
    0 20px 45px
    rgba(255, 79, 184, 0.25);
}


.button-arrow {
  font-size: 1.3rem;

  transition:
    transform
    var(--transition-normal);
}


.submit-button:hover .button-arrow {
  transform:
    translateX(6px);
}


/* ==================================================
   BACKGROUND GLOWS
================================================== */

.contact-glow {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;

  filter: blur(130px);
}


.contact-glow-left {
  width: 600px;
  height: 600px;

  left: -350px;
  top: 15%;

  background:
    rgba(143, 76, 255, 0.16);
}


.contact-glow-right {
  width: 650px;
  height: 650px;

  right: -300px;
  bottom: -250px;

  background:
    rgba(255, 79, 184, 0.12);
}


/* ==================================================
   ORBITS
================================================== */

.orbit {
  position: absolute;

  border-radius: 50%;

  pointer-events: none;
}


.orbit-one {
  width: 850px;
  height: 500px;

  right: -280px;
  top: 10%;

  border:
    1px solid
    rgba(255, 79, 184, 0.08);

  transform:
    rotate(-15deg);
}


.orbit-two {
  width: 900px;
  height: 900px;

  left: -500px;
  bottom: -500px;

  border:
    1px dashed
    rgba(143, 76, 255, 0.08);
}


/* ==================================================
   STARS
================================================== */

.star {
  position: absolute;

  z-index: 2;

  pointer-events: none;

  animation:
    star-floating
    4s
    ease-in-out
    infinite;
}


.star-one {
  left: 5%;
  top: 18%;

  color: var(--color-pink-soft);

  font-size: 2.5rem;
}


.star-two {
  left: 47%;
  bottom: 15%;

  color: var(--color-purple);

  font-size: 1.3rem;

  animation-delay: -1.2s;
}


.star-three {
  right: 5%;
  top: 15%;

  color: var(--color-white);

  font-size: 2rem;

  animation-delay: -2s;
}


.star-four {
  right: 40%;
  top: 9%;

  color: var(--color-pink);

  font-size: 0.9rem;

  animation-delay: -0.7s;
}


@keyframes star-floating {

  0%,
  100% {
    opacity: 0.4;

    transform:
      translateY(0)
      scale(0.8);
  }

  50% {
    opacity: 1;

    transform:
      translateY(-10px)
      scale(1.1);
  }

}


/* ==================================================
   TABLET
================================================== */

@media (max-width: 1050px) {

  .contact {
    padding:
      120px
      0
      90px;
  }


  .contact-container {
    width:
      min(
        calc(100% - 50px),
        750px
      );

    grid-template-columns: 1fr;

    gap: 80px;
  }


  .contact-content {
    max-width: 650px;

    margin-inline: auto;

    text-align: center;
  }


  .section-label {
    justify-content: center;
  }


  .contact-title {
    align-items: center;
  }


  .contact-description {
    margin-inline: auto;
    margin-bottom: 45px;
  }


  .contact-email {
    align-items: center;
  }


  .contact-socials {
    max-width: 500px;

    margin-inline: auto;
  }


  .contact-form-wrapper {
    max-width: 580px;

    margin-inline: auto;
  }

}


/* ==================================================
   MOBILE
================================================== */

@media (max-width: 600px) {

  .contact {
    padding:
      105px
      0
      70px;
  }


  .contact-container {
    width:
      min(
        calc(100% - 32px),
        500px
      );

    gap: 65px;
  }


  .contact-title {
    font-size:
      clamp(
        3.2rem,
        16vw,
        5rem
      );
  }


  .contact-description {
    font-size: 0.95rem;
  }


  .contact-email a {
    font-size: 1.1rem;
  }


  .contact-form {
    padding:
      32px
      24px
      28px;

    border-radius: 25px;
  }


  .form-frame {
    border-radius: 25px;
  }


  .form-frame-one {
    transform:
      translate(-8px, 9px)
      rotate(-1deg);
  }


  .form-frame-two {
    transform:
      translate(8px, -7px)
      rotate(1deg);
  }


  .social-link {
    grid-template-columns:
      35px
      1fr
      auto;
  }

}

</style>