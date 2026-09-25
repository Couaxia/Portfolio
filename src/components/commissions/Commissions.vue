<script setup>

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { getCommissions } from '../../data/commissions.js'
import CommissionCard from './CommissionCard.vue'


/* ==================================================
   I18N
================================================== */

const { t } = useI18n()


/* ==================================================
   COMMISSIONS
================================================== */

const commissions = computed(() =>
  getCommissions(t)
)


/* ==================================================
   KO-FI
================================================== */

const kofiUrl =
  'https://ko-fi.com/couaxia/commissions'


/* ==================================================
   PROCESS
================================================== */

const steps = computed(() => [

  {
    number: '01',

    title:
      t('commissions.process.steps.choose.title'),

    description:
      t('commissions.process.steps.choose.description')
  },

  {
    number: '02',

    title:
      t('commissions.process.steps.contact.title'),

    description:
      t('commissions.process.steps.contact.description')
  },

  {
    number: '03',

    title:
      t('commissions.process.steps.order.title'),

    description:
      t('commissions.process.steps.order.description')
  },

  {
    number: '04',

    title:
      t('commissions.process.steps.creation.title'),

    description:
      t('commissions.process.steps.creation.description')
  }

])

</script>


<template>

  <section class="commissions-page">


    <!-- =========================
         BACKGROUND
    ========================== -->

    <div class="background-glow glow-one"></div>
    <div class="background-glow glow-two"></div>
    <div class="background-glow glow-three"></div>

    <div class="orbit orbit-one"></div>
    <div class="orbit orbit-two"></div>

    <span class="star star-one">✦</span>
    <span class="star star-two">✧</span>
    <span class="star star-three">✦</span>
    <span class="star star-four">✧</span>


    <!-- =========================
         CONTAINER
    ========================== -->

    <div class="commissions-container">


      <!-- =========================
           HERO
      ========================== -->

      <header class="commissions-header">

        <span class="section-label">
          ✦ {{ $t('commissions.hero.label') }} ✦
        </span>


        <h1>

          {{ $t('commissions.hero.title.first') }}

          <span>
            {{ $t('commissions.hero.title.second') }}
          </span>

        </h1>


        <p class="header-description">
          {{ $t('commissions.hero.description') }}
        </p>


        <div class="commission-status">

          <span class="status-dot"></span>

          <span>
            {{ $t('commissions.hero.status') }}
          </span>

        </div>


        <a
          :href="kofiUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="kofi-button"
        >

          {{ $t('commissions.hero.kofi') }}

          <span aria-hidden="true">
            ↗
          </span>

        </a>

      </header>


      <!-- =========================
           COMMISSIONS
      ========================== -->

      <section class="services-section">


        <div class="section-heading">

          <span class="small-label">
            {{ $t('commissions.services.label') }}
          </span>


          <h2>

            {{ $t('commissions.services.title.first') }}

            <span>
              {{ $t('commissions.services.title.second') }}
            </span>

          </h2>


          <p>

            {{ $t('commissions.services.description.before') }}

            <strong>
              {{ $t('commissions.services.description.order') }}
            </strong>

            {{ $t('commissions.services.description.after') }}

          </p>

        </div>


        <!-- CARDS -->

        <div
          v-if="commissions.length"
          class="commissions-list"
        >

          <CommissionCard
            v-for="(commission, index) in commissions"
            :key="commission.id"
            :commission="commission"
            :index="index"
          />

        </div>


        <!-- EMPTY -->

        <div
          v-else
          class="commissions-empty"
        >

          <span class="empty-diamond">
            ◇
          </span>


          <h3>
            {{ $t('commissions.empty.title') }}
          </h3>


          <p>
            {{ $t('commissions.empty.description') }}
          </p>

        </div>

      </section>


      <!-- =========================
           PROCESS
      ========================== -->

      <section class="process-section">

        <div class="section-heading">

          <span class="small-label">
            {{ $t('commissions.process.label') }}
          </span>


          <h2>

            {{ $t('commissions.process.title.first') }}

            <span>
              {{ $t('commissions.process.title.second') }}
            </span>

          </h2>

        </div>


        <div class="process-grid">

          <article
            v-for="step in steps"
            :key="step.number"
            class="process-card"
          >

            <span class="process-number">
              {{ step.number }}
            </span>


            <div class="process-line"></div>


            <h3>
              {{ step.title }}
            </h3>


            <p>
              {{ step.description }}
            </p>

          </article>

        </div>

      </section>


      <!-- =========================
           INFORMATION
      ========================== -->

      <section class="information-section">


        <!-- DECORATION -->

        <div class="information-decoration">

          <div class="big-diamond">

            <div class="diamond-inner">
              ✦
            </div>

          </div>

        </div>


        <!-- CONTENT -->

        <div class="information-content">

          <span class="small-label">
            {{ $t('commissions.information.label') }}
          </span>


          <h2>

            {{ $t('commissions.information.title.first') }}

            <span>
              {{ $t('commissions.information.title.second') }}
            </span>

          </h2>


          <div class="information-list">


            <!-- DETAILS -->

            <div class="information-item">

              <span class="information-icon">
                ✦
              </span>


              <div>

                <h3>
                  {{ $t('commissions.information.details.title') }}
                </h3>


                <p>
                  {{ $t('commissions.information.details.description') }}
                </p>

              </div>

            </div>


            <!-- REFERENCES -->

            <div class="information-item">

              <span class="information-icon">
                ✦
              </span>


              <div>

                <h3>
                  {{ $t('commissions.information.references.title') }}
                </h3>


                <p>
                  {{ $t('commissions.information.references.description') }}
                </p>

              </div>

            </div>


            <!-- CONTACT -->

            <div class="information-item">

              <span class="information-icon">
                ✦
              </span>


              <div>

                <h3>
                  {{ $t('commissions.information.contact.title') }}
                </h3>


                <p>
                  {{ $t('commissions.information.contact.description') }}
                </p>

              </div>

            </div>


            <!-- MERCHANDISING -->

            <div class="information-item">

              <span class="information-icon">
                ✦
              </span>


              <div>

                <h3>
                  {{ $t('commissions.information.merchandising.title') }}
                </h3>


                <p>

                  {{ $t('commissions.information.merchandising.before') }}

                  <strong>
                    +20 %
                  </strong>

                  {{ $t('commissions.information.merchandising.after') }}

                </p>

              </div>

            </div>

          </div>


          <a
            :href="kofiUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-link"
          >

            {{ $t('commissions.information.kofi') }}

            <span aria-hidden="true">
              →
            </span>

          </a>

        </div>

      </section>


      <!-- =========================
           TERMS OF SERVICE
      ========================== -->

      <section class="terms-preview">


        <!-- ICON -->

        <div class="terms-preview-icon">
          ✦
        </div>


        <!-- CONTENT -->

        <div class="terms-preview-content">

          <span class="small-label">
            {{ $t('commissions.terms.label') }}
          </span>


          <h2>

            {{ $t('commissions.terms.title.first') }}

            <span>
              {{ $t('commissions.terms.title.second') }}
            </span>

          </h2>


          <p>
            {{ $t('commissions.terms.description') }}
          </p>


          <!-- TAGS -->

          <div class="terms-tags">

            <span>
              {{ $t('commissions.terms.tags.payments') }}
            </span>

            <span>
              {{ $t('commissions.terms.tags.modifications') }}
            </span>

            <span>
              {{ $t('commissions.terms.tags.rights') }}
            </span>

            <span>
              YCH
            </span>

            <span class="merch-tag">
              {{ $t('commissions.terms.tags.merch') }}
            </span>

          </div>


          <RouterLink
            to="/commissions/terms"
            class="terms-button"
          >

            {{ $t('commissions.terms.button') }}

            <span aria-hidden="true">
              →
            </span>

          </RouterLink>

        </div>


        <!-- DECORATION -->

        <div class="terms-preview-decoration">

          <span class="terms-big-diamond">
            ◇
          </span>

          <span class="terms-small-star">
            ✦
          </span>

        </div>

      </section>


      <!-- =========================
           ORDER NOTICE
      ========================== -->

      <div class="order-notice">

        <span class="order-notice-icon">
          ✦
        </span>


        <p>

          {{ $t('commissions.orderNotice.before') }}

          <RouterLink to="/commissions/terms">
            {{ $t('commissions.orderNotice.link') }}
          </RouterLink>

          {{ $t('commissions.orderNotice.after') }}

        </p>

      </div>


      <!-- =========================
           FINAL CTA
      ========================== -->

      <section class="final-cta">

        <span class="cta-star">
          ✦
        </span>


        <span class="small-label">
          {{ $t('commissions.cta.label') }}
        </span>


        <h2>

          {{ $t('commissions.cta.title.first') }}

          <span>
            {{ $t('commissions.cta.title.second') }}
          </span>

        </h2>


        <p>
          {{ $t('commissions.cta.description') }}
        </p>


        <div class="cta-actions">

          <a
            :href="kofiUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-button"
          >

            {{ $t('commissions.cta.order') }}

            <span aria-hidden="true">
              ↗
            </span>

          </a>


          <RouterLink
            to="/commissions/terms"
            class="cta-terms"
          >
            {{ $t('commissions.cta.terms') }}
          </RouterLink>

        </div>

      </section>

    </div>

  </section>

</template>


<style scoped>

/* ==================================================
   PAGE
================================================== */

.commissions-page {

  position: relative;

  min-height: 100vh;

  padding:
    150px
    0
    100px;

  overflow: hidden;

  background:
    var(--color-background);

}


.commissions-container {

  position: relative;

  z-index: 5;

  width:
    min(
      calc(100% - 40px),
      var(--max-width)
    );

  margin-inline: auto;

}


/* ==================================================
   BACKGROUND
================================================== */

.background-glow {

  position: absolute;

  border-radius: 50%;

  pointer-events: none;

  filter:
    blur(90px);

}


.glow-one {

  width: 500px;

  height: 500px;

  top: 100px;

  right: -200px;

  background:
    rgba(255, 79, 184, 0.08);

}


.glow-two {

  width: 550px;

  height: 550px;

  left: -250px;

  top: 1000px;

  background:
    rgba(143, 76, 255, 0.08);

}


.glow-three {

  width: 450px;

  height: 450px;

  right: -180px;

  bottom: 300px;

  background:
    rgba(255, 79, 184, 0.05);

}


/* ==================================================
   ORBITS
================================================== */

.orbit {

  position: absolute;

  border:
    1px solid
    rgba(255, 255, 255, 0.035);

  border-radius: 50%;

  pointer-events: none;

}


.orbit-one {

  width: 600px;

  height: 320px;

  right: -260px;

  top: 270px;

  transform:
    rotate(-25deg);

}


.orbit-two {

  width: 500px;

  height: 500px;

  left: -330px;

  top: 1500px;

  border-style: dashed;

  transform:
    rotate(35deg);

}


/* ==================================================
   STARS
================================================== */

.star {

  position: absolute;

  color:
    var(--color-pink-soft);

  pointer-events: none;

  text-shadow:
    0 0 15px
    rgba(255, 79, 184, 0.5);

  animation:
    twinkle
    3s
    ease-in-out
    infinite;

}


.star-one {

  top: 190px;

  left: 8%;

  font-size: 1.4rem;

}


.star-two {

  top: 430px;

  right: 10%;

  font-size: 0.9rem;

  animation-delay: -1s;

}


.star-three {

  top: 1300px;

  left: 5%;

  color:
    var(--color-purple);

  animation-delay: -2s;

}


.star-four {

  bottom: 500px;

  right: 7%;

  font-size: 1.2rem;

  animation-delay: -0.5s;

}


/* ==================================================
   LABELS
================================================== */

.section-label,
.small-label {

  display: inline-block;

  color:
    var(--color-pink-soft);

  font-size: 0.72rem;

  font-weight: 700;

  letter-spacing: 0.22em;

  text-transform: uppercase;

}


/* ==================================================
   HEADER
================================================== */

.commissions-header {

  max-width: 850px;

  margin:
    0
    auto
    160px;

  text-align: center;

}


.section-label {

  margin-bottom: 25px;

}


.commissions-header h1 {

  margin: 0;

  color:
    var(--color-white);

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size:
    clamp(
      3.3rem,
      7vw,
      6.8rem
    );

  font-weight: 400;

  line-height: 0.95;

  letter-spacing: -0.055em;

}


.commissions-header h1 span {

  display: block;

  margin-top: 10px;

  color:
    var(--color-pink);

  font-style: italic;

  text-shadow:
    0 0 35px
    rgba(255, 79, 184, 0.18);

}


/* ==================================================
   HEADER DESCRIPTION
================================================== */

.header-description {

  max-width: 680px;

  margin:
    35px
    auto
    25px;

  color:
    var(--color-text-muted);

  font-size: 1.05rem;

  line-height: 1.85;

}


/* ==================================================
   STATUS
================================================== */

.commission-status {

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  width: fit-content;

  margin:
    0
    auto
    35px;

  padding:
    9px
    16px;

  border:
    1px solid
    rgba(255, 155, 215, 0.18);

  border-radius: 999px;

  background:
    rgba(255, 79, 184, 0.055);

  color:
    var(--color-text);

  font-size: 0.72rem;

  font-weight: 600;

  letter-spacing: 0.09em;

  text-transform: uppercase;

}


.status-dot {

  width: 7px;

  height: 7px;

  border-radius: 50%;

  background:
    var(--color-pink);

  box-shadow:
    0 0 10px
    var(--color-pink);

  animation:
    statusPulse
    2s
    ease-in-out
    infinite;

}


/* ==================================================
   MAIN BUTTONS
================================================== */

.kofi-button,
.cta-button {

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  min-height: 50px;

  padding:
    0
    25px;

  border:
    1px solid
    rgba(255, 155, 215, 0.3);

  border-radius: 999px;

  background:
    linear-gradient(
      135deg,
      rgba(143, 76, 255, 0.18),
      rgba(255, 79, 184, 0.18)
    );

  color:
    var(--color-white);

  font-size: 0.82rem;

  font-weight: 700;

  letter-spacing: 0.05em;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;

}


.kofi-button:hover,
.cta-button:hover {

  transform:
    translateY(-3px);

  border-color:
    rgba(255, 155, 215, 0.65);

  background:
    linear-gradient(
      135deg,
      rgba(143, 76, 255, 0.3),
      rgba(255, 79, 184, 0.3)
    );

  box-shadow:
    0 15px 35px
    rgba(255, 79, 184, 0.12);

}


.kofi-button span,
.cta-button span {

  color:
    var(--color-pink-soft);

  font-size: 1rem;

  transition:
    transform 0.3s ease;

}


.kofi-button:hover span,
.cta-button:hover span {

  transform:
    translate(
      3px,
      -3px
    );

}


/* ==================================================
   SECTION HEADINGS
================================================== */

.section-heading {

  max-width: 700px;

  margin-bottom: 65px;

}


.section-heading h2,
.information-content h2,
.final-cta h2 {

  margin:
    15px
    0
    0;

  color:
    var(--color-white);

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size:
    clamp(
      2.3rem,
      5vw,
      4.6rem
    );

  font-weight: 400;

  line-height: 1.05;

  letter-spacing: -0.045em;

}


.section-heading h2 span,
.information-content h2 span,
.final-cta h2 span {

  color:
    var(--color-pink);

  font-style: italic;

}


.section-heading p {

  max-width: 620px;

  margin-top: 22px;

  color:
    var(--color-text-muted);

  line-height: 1.8;

}


.section-heading strong,
.information-item strong {

  color:
    var(--color-pink-soft);

  font-weight: 600;

}


/* ==================================================
   SERVICES
================================================== */

.services-section {

  margin-bottom: 190px;

}


.commissions-list {

  display: flex;

  flex-direction: column;

  gap: 70px;

}


/* ==================================================
   EMPTY
================================================== */

.commissions-empty {

  padding:
    80px
    30px;

  border:
    1px solid
    var(--color-border);

  border-radius:
    var(--radius-large);

  background:
    rgba(255, 255, 255, 0.02);

  text-align: center;

}


.empty-diamond {

  display: block;

  margin-bottom: 20px;

  color:
    var(--color-pink);

  font-size: 5rem;

  line-height: 1;

}


.commissions-empty h3 {

  color:
    var(--color-white);

  font-family:
    Georgia,
    serif;

  font-size: 2rem;

  font-weight: 400;

}


.commissions-empty p {

  margin-top: 12px;

  color:
    var(--color-text-muted);

}


/* ==================================================
   PROCESS
================================================== */

.process-section {

  margin-bottom: 190px;

}


.process-grid {

  display: grid;

  grid-template-columns:
    repeat(
      4,
      1fr
    );

  gap: 20px;

}


.process-card {

  position: relative;

  min-height: 290px;

  padding:
    35px
    28px;

  border-top:
    1px solid
    rgba(255, 155, 215, 0.25);

  background:
    linear-gradient(
      180deg,
      rgba(255, 79, 184, 0.035),
      transparent
    );

  transition:
    transform 0.35s ease,
    border-color 0.35s ease;

}


.process-card:hover {

  transform:
    translateY(-7px);

  border-color:
    var(--color-pink);

}


.process-number {

  color:
    var(--color-pink);

  font-family:
    Georgia,
    serif;

  font-size: 1rem;

  font-style: italic;

}


.process-line {

  width: 35px;

  height: 1px;

  margin:
    25px
    0;

  background:
    var(--color-purple);

}


.process-card h3 {

  margin-bottom: 15px;

  color:
    var(--color-white);

  font-family:
    Georgia,
    serif;

  font-size: 1.5rem;

  font-weight: 400;

}


.process-card p {

  color:
    var(--color-text-muted);

  font-size: 0.9rem;

  line-height: 1.75;

}


/* ==================================================
   INFORMATION
================================================== */

.information-section {

  position: relative;

  display: grid;

  grid-template-columns:
    minmax(260px, 0.7fr)
    minmax(0, 1.3fr);

  gap: 80px;

  align-items: center;

  margin-bottom: 190px;

  padding:
    70px;

  overflow: hidden;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  border-radius:
    var(--radius-large);

  background:
    linear-gradient(
      135deg,
      rgba(143, 76, 255, 0.055),
      rgba(255, 79, 184, 0.035)
    );

}


/* ==================================================
   INFORMATION DECORATION
================================================== */

.information-decoration {

  position: relative;

  display: flex;

  align-items: center;

  justify-content: center;

  min-height: 430px;

}


.big-diamond {

  position: relative;

  width: 250px;

  height: 250px;

  display: flex;

  align-items: center;

  justify-content: center;

  border:
    1px solid
    rgba(255, 155, 215, 0.25);

  transform:
    rotate(45deg);

  animation:
    diamondFloat
    6s
    ease-in-out
    infinite;

}


.big-diamond::before {

  content: '';

  position: absolute;

  inset: 20px;

  border:
    1px solid
    rgba(143, 76, 255, 0.25);

}


.big-diamond::after {

  content: '';

  position: absolute;

  inset: 45px;

  border:
    1px solid
    rgba(255, 79, 184, 0.15);

}


.diamond-inner {

  position: relative;

  z-index: 3;

  color:
    var(--color-pink);

  font-size: 2.5rem;

  text-shadow:
    0 0 25px
    rgba(255, 79, 184, 0.45);

  transform:
    rotate(-45deg);

}


/* ==================================================
   INFORMATION CONTENT
================================================== */

.information-content {

  position: relative;

  z-index: 4;

}


.information-list {

  display: flex;

  flex-direction: column;

  gap: 28px;

  margin-top: 45px;

}


.information-item {

  display: grid;

  grid-template-columns:
    30px
    1fr;

  gap: 15px;

}


.information-icon {

  padding-top: 3px;

  color:
    var(--color-pink);

  font-size: 0.75rem;

}


.information-item h3 {

  margin-bottom: 8px;

  color:
    var(--color-white);

  font-family:
    Georgia,
    serif;

  font-size: 1.2rem;

  font-weight: 400;

}


.information-item p {

  max-width: 620px;

  color:
    var(--color-text-muted);

  font-size: 0.9rem;

  line-height: 1.75;

}


/* ==================================================
   TEXT LINK
================================================== */

.text-link {

  display: inline-flex;

  align-items: center;

  gap: 10px;

  margin-top: 38px;

  color:
    var(--color-pink-soft);

  font-size: 0.82rem;

  font-weight: 600;

  transition:
    color 0.3s ease;

}


.text-link span {

  transition:
    transform 0.3s ease;

}


.text-link:hover {

  color:
    var(--color-white);

}


.text-link:hover span {

  transform:
    translateX(5px);

}


/* ==================================================
   TERMS PREVIEW
================================================== */

.terms-preview {

  position: relative;

  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr)
    auto;

  gap: 35px;

  align-items: center;

  margin-bottom: 35px;

  padding:
    55px
    60px;

  overflow: hidden;

  border:
    1px solid
    rgba(255, 155, 215, 0.14);

  border-radius:
    var(--radius-large);

  background:
    linear-gradient(
      135deg,
      rgba(255, 79, 184, 0.055),
      rgba(143, 76, 255, 0.04)
    );

}


/* ==================================================
   TERMS ICON
================================================== */

.terms-preview-icon {

  width: 65px;

  height: 65px;

  display: flex;

  align-items: center;

  justify-content: center;

  flex-shrink: 0;

  border:
    1px solid
    rgba(255, 155, 215, 0.25);

  border-radius: 50%;

  color:
    var(--color-pink);

  font-size: 1.2rem;

  box-shadow:
    0 0 25px
    rgba(255, 79, 184, 0.08);

}


/* ==================================================
   TERMS CONTENT
================================================== */

.terms-preview-content {

  position: relative;

  z-index: 3;

  max-width: 760px;

}


.terms-preview-content h2 {

  margin:
    13px
    0
    0;

  color:
    var(--color-white);

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size:
    clamp(
      2rem,
      4vw,
      3.5rem
    );

  font-weight: 400;

  line-height: 1.05;

  letter-spacing: -0.04em;

}


.terms-preview-content h2 span {

  color:
    var(--color-pink);

  font-style: italic;

}


.terms-preview-content > p {

  max-width: 650px;

  margin-top: 20px;

  color:
    var(--color-text-muted);

  font-size: 0.92rem;

  line-height: 1.8;

}


/* ==================================================
   TERMS TAGS
================================================== */

.terms-tags {

  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 25px;

}


.terms-tags span {

  padding:
    7px
    11px;

  border:
    1px solid
    rgba(255, 255, 255, 0.09);

  border-radius: 999px;

  background:
    rgba(255, 255, 255, 0.025);

  color:
    var(--color-text-muted);

  font-size: 0.64rem;

  font-weight: 600;

  letter-spacing: 0.05em;

}


.terms-tags .merch-tag {

  border-color:
    rgba(255, 155, 215, 0.2);

  color:
    var(--color-pink-soft);

}


/* ==================================================
   TERMS BUTTON
================================================== */

.terms-button {

  display: inline-flex;

  align-items: center;

  gap: 10px;

  margin-top: 30px;

  padding:
    12px
    20px;

  border:
    1px solid
    rgba(255, 155, 215, 0.25);

  border-radius: 999px;

  color:
    var(--color-white);

  font-size: 0.78rem;

  font-weight: 600;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;

}


.terms-button:hover {

  transform:
    translateY(-2px);

  border-color:
    var(--color-pink);

  background:
    rgba(255, 79, 184, 0.06);

}


.terms-button span {

  color:
    var(--color-pink);

  transition:
    transform 0.3s ease;

}


.terms-button:hover span {

  transform:
    translateX(4px);

}


/* ==================================================
   TERMS DECORATION
================================================== */

.terms-preview-decoration {

  position: relative;

  width: 130px;

  height: 130px;

  display: flex;

  align-items: center;

  justify-content: center;

  pointer-events: none;

}


.terms-big-diamond {

  color:
    rgba(255, 79, 184, 0.12);

  font-family:
    Georgia,
    serif;

  font-size: 8rem;

  line-height: 1;

}


.terms-small-star {

  position: absolute;

  color:
    var(--color-pink);

  font-size: 1rem;

  text-shadow:
    0 0 15px
    rgba(255, 79, 184, 0.5);

}


/* ==================================================
   ORDER NOTICE
================================================== */

.order-notice {

  display: flex;

  align-items: flex-start;

  gap: 12px;

  max-width: 850px;

  margin:
    0
    auto
    160px;

  padding:
    16px
    20px;

  border-left:
    2px solid
    var(--color-pink);

  background:
    rgba(255, 79, 184, 0.035);

}


.order-notice-icon {

  flex-shrink: 0;

  margin-top: 2px;

  color:
    var(--color-pink);

  font-size: 0.72rem;

}


.order-notice p {

  color:
    var(--color-text-muted);

  font-size: 0.78rem;

  line-height: 1.7;

}


.order-notice a {

  color:
    var(--color-pink-soft);

  text-decoration: underline;

  text-underline-offset: 3px;

}


/* ==================================================
   FINAL CTA
================================================== */

.final-cta {

  position: relative;

  max-width: 850px;

  margin-inline: auto;

  padding:
    80px
    40px;

  text-align: center;

}


.cta-star {

  display: block;

  margin-bottom: 25px;

  color:
    var(--color-pink);

  font-size: 1.2rem;

  text-shadow:
    0 0 18px
    rgba(255, 79, 184, 0.55);

}


.final-cta p {

  max-width: 620px;

  margin:
    25px
    auto
    0;

  color:
    var(--color-text-muted);

  line-height: 1.8;

}


.cta-actions {

  display: flex;

  align-items: center;

  justify-content: center;

  flex-wrap: wrap;

  gap: 18px;

  margin-top: 35px;

}


.cta-terms {

  color:
    var(--color-text-muted);

  font-size: 0.78rem;

  text-decoration: underline;

  text-underline-offset: 4px;

  transition:
    color 0.3s ease;

}


.cta-terms:hover {

  color:
    var(--color-pink-soft);

}


/* ==================================================
   ANIMATIONS
================================================== */

@keyframes twinkle {

  0%,
  100% {

    opacity: 0.35;

    transform:
      scale(0.85);

  }


  50% {

    opacity: 1;

    transform:
      scale(1.15);

  }

}


@keyframes statusPulse {

  0%,
  100% {

    opacity: 0.45;

    transform:
      scale(0.8);

  }


  50% {

    opacity: 1;

    transform:
      scale(1.15);

  }

}


@keyframes diamondFloat {

  0%,
  100% {

    transform:
      rotate(45deg)
      translateY(0);

  }


  50% {

    transform:
      rotate(45deg)
      translateY(-10px);

  }

}


/* ==================================================
   RESPONSIVE — 1100PX
================================================== */

@media (max-width: 1100px) {

  .information-section {

    gap: 50px;

    padding:
      60px
      45px;

  }


  .information-decoration {

    min-height: 350px;

  }


  .big-diamond {

    width: 210px;

    height: 210px;

  }


  .terms-preview {

    padding:
      50px
      45px;

  }

}


/* ==================================================
   RESPONSIVE — 900PX
================================================== */

@media (max-width: 900px) {

  .commissions-page {

    padding-top: 130px;

  }


  .commissions-header {

    margin-bottom: 120px;

  }


  .services-section,
  .process-section,
  .information-section {

    margin-bottom: 140px;

  }


  .process-grid {

    grid-template-columns:
      repeat(
        2,
        1fr
      );

  }


  .information-section {

    grid-template-columns: 1fr;

    gap: 35px;

  }


  .information-decoration {

    min-height: 280px;

  }


  .terms-preview {

    grid-template-columns:
      auto
      1fr;

  }


  .terms-preview-decoration {

    display: none;

  }


  .order-notice {

    margin-bottom: 120px;

  }

}


/* ==================================================
   RESPONSIVE — 650PX
================================================== */

@media (max-width: 650px) {

  .commissions-page {

    padding:
      115px
      0
      70px;

  }


  .commissions-container {

    width:
      min(
        calc(100% - 28px),
        var(--max-width)
      );

  }


  .commissions-header {

    margin-bottom: 100px;

  }


  .commissions-header h1 {

    font-size:
      clamp(
        3rem,
        15vw,
        4.8rem
      );

  }


  .header-description {

    font-size: 0.95rem;

  }


  .services-section,
  .process-section,
  .information-section {

    margin-bottom: 110px;

  }


  .section-heading {

    margin-bottom: 45px;

  }


  .process-grid {

    grid-template-columns: 1fr;

  }


  .process-card {

    min-height: auto;

  }


  .information-section {

    padding:
      45px
      25px;

  }


  .information-decoration {

    min-height: 230px;

  }


  .big-diamond {

    width: 165px;

    height: 165px;

  }


  .terms-preview {

    grid-template-columns: 1fr;

    gap: 25px;

    padding:
      40px
      25px;

  }


  .terms-preview-icon {

    width: 55px;

    height: 55px;

  }


  .order-notice {

    margin-bottom: 95px;

  }


  .final-cta {

    padding:
      55px
      15px;

  }


  .cta-actions {

    flex-direction: column;

  }


  .cta-button {

    width: 100%;

  }

}


/* ==================================================
   RESPONSIVE — 400PX
================================================== */

@media (max-width: 400px) {

  .commissions-container {

    width:
      calc(100% - 22px);

  }


  .information-section {

    padding:
      38px
      20px;

  }


  .terms-preview {

    padding:
      35px
      20px;

  }


  .terms-tags {

    gap: 6px;

  }


  .terms-tags span {

    font-size: 0.6rem;

  }

}

</style>