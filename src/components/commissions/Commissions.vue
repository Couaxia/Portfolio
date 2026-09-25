<script setup>
import commissions from '../../data/commissions.js'
import CommissionCard from './CommissionCard.vue'


/* =========================
   KO-FI
========================= */

const kofiUrl = 'https://ko-fi.com/couaxia/commissions'


/* =========================
   PROCESS
========================= */

const steps = [
  {
    number: '01',
    title: 'Choisissez',
    description:
      'Découvrez les commissions disponibles et choisissez celle qui correspond à votre projet.'
  },
  {
    number: '02',
    title: 'Contactez-moi',
    description:
      'Pour les commissions qui le demandent, contactez-moi avant votre commande afin que nous puissions vérifier ensemble votre projet.'
  },
  {
    number: '03',
    title: 'Commandez',
    description:
      'Passez ensuite votre commande directement depuis Ko-fi et transmettez-moi les informations nécessaires.'
  },
  {
    number: '04',
    title: 'Création',
    description:
      'Je commence votre création et vous tiens informé(e) de son avancée jusqu’au rendu final.'
  }
]
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


    <div class="commissions-container">


      <!-- =========================
           HERO
      ========================== -->

      <header class="commissions-header">

        <span class="section-label">
          ✦ COMMISSIONS ✦
        </span>


        <h1>
          Donnons vie à
          <span>vos idées.</span>
        </h1>


        <p class="header-description">
          Emotes personnalisées, créations pour votre univers
          ou encore site de liens sur mesure : découvrez les
          commissions actuellement disponibles.
        </p>


        <div class="commission-status">

          <span class="status-dot"></span>

          <span>
            Commissions ouvertes
          </span>

        </div>


        <a
          :href="kofiUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="kofi-button"
        >
          Voir toutes mes commissions sur Ko-fi

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
            MES COMMISSIONS
          </span>


          <h2>
            Que puis-je créer
            <span>pour vous ?</span>
          </h2>


          <p>
            Chaque commission est personnalisée selon votre
            demande et votre univers. Cliquez sur
            <strong>Commander</strong> pour retrouver toutes
            les informations directement sur Ko-fi.
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
            Aucune commission disponible
          </h3>

          <p>
            Les commissions reviendront prochainement.
          </p>

        </div>

      </section>


      <!-- =========================
           PROCESS
      ========================== -->

      <section class="process-section">

        <div class="section-heading">

          <span class="small-label">
            COMMENT ÇA MARCHE ?
          </span>


          <h2>
            De votre idée à
            <span>la création.</span>
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
            À SAVOIR
          </span>


          <h2>
            Avant de
            <span>commander.</span>
          </h2>


          <div class="information-list">


            <!-- ITEM -->

            <div class="information-item">

              <span class="information-icon">
                ✦
              </span>

              <div>

                <h3>
                  Consultez les détails
                </h3>

                <p>
                  Chaque commission possède ses propres tarifs,
                  options et conditions. Pensez à consulter sa
                  page Ko-fi avant de commander.
                </p>

              </div>

            </div>


            <!-- ITEM -->

            <div class="information-item">

              <span class="information-icon">
                ✦
              </span>

              <div>

                <h3>
                  Préparez vos références
                </h3>

                <p>
                  Selon votre commande, je pourrai avoir besoin
                  de votre modèle, de vos couleurs, de vos
                  visuels ou de références correspondant à
                  votre univers.
                </p>

              </div>

            </div>


            <!-- ITEM -->

            <div class="information-item">

              <span class="information-icon">
                ✦
              </span>

              <div>

                <h3>
                  Restons en contact
                </h3>

                <p>
                  Les échanges peuvent se faire via les moyens
                  de contact indiqués dans la commission afin
                  de suivre l’avancement de votre projet.
                </p>

              </div>

            </div>


            <!-- ITEM -->

            <div class="information-item">

              <span class="information-icon">
                ✦
              </span>

              <div>

                <h3>
                  Licence Merchandising
                </h3>

                <p>
                  Vous souhaitez utiliser une emote sur des
                  produits destinés à la vente ? Une licence
                  Merchandising est disponible avec un
                  supplément de <strong>+20 %</strong> du prix
                  de la commission concernée.
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
            Consulter mes commissions sur Ko-fi

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
            TERMS OF SERVICE
          </span>


          <h2>
            Conditions de
            <span>commission.</span>
          </h2>


          <p>
            Avant de passer commande, prenez quelques minutes
            pour consulter mes conditions concernant les
            paiements, les modifications, les droits
            d'utilisation, les commissions YCH et la licence
            Merchandising.
          </p>


          <!-- TAGS -->

          <div class="terms-tags">

            <span>
              Paiements
            </span>

            <span>
              Modifications
            </span>

            <span>
              Droits d'utilisation
            </span>

            <span>
              YCH
            </span>

            <span class="merch-tag">
              Merch +20 %
            </span>

          </div>


          <RouterLink
            to="/commissions/terms"
            class="terms-button"
          >
            Lire les conditions

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
          En passant commande, vous reconnaissez avoir pris
          connaissance des
          <RouterLink to="/commissions/terms">
            conditions de commission
          </RouterLink>
          ainsi que des informations propres à la prestation
          choisie.
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
          UNE IDÉE EN TÊTE ?
        </span>


        <h2>
          Créons quelque chose
          <span>ensemble.</span>
        </h2>


        <p>
          Choisissez la commission qui correspond à votre
          projet et retrouvez toutes les informations
          nécessaires directement sur Ko-fi.
        </p>


        <div class="cta-actions">

          <a
            :href="kofiUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="cta-button"
          >
            Commander sur Ko-fi

            <span aria-hidden="true">
              ↗
            </span>
          </a>


          <RouterLink
            to="/commissions/terms"
            class="cta-terms"
          >
            Conditions de commission
          </RouterLink>

        </div>

      </section>

    </div>

  </section>

</template>


<style scoped>

/* =========================
   PAGE
========================= */

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


/* =========================
   BACKGROUND
========================= */

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


/* =========================
   ORBITS
========================= */

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


/* =========================
   STARS
========================= */

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


/* =========================
   LABELS
========================= */

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


/* =========================
   HEADER
========================= */

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


/* =========================
   HEADER DESCRIPTION
========================= */

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


/* =========================
   STATUS
========================= */

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


/* =========================
   MAIN BUTTONS
========================= */

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


/* =========================
   SECTION HEADINGS
========================= */

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


/* =========================
   SERVICES
========================= */

.services-section {
  margin-bottom: 190px;
}


.commissions-list {
  display: flex;

  flex-direction: column;

  gap: 70px;
}


/* =========================
   EMPTY
========================= */

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


/* =========================
   PROCESS
========================= */

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


/* =========================
   INFORMATION
========================= */

.information-section {
  display: grid;

  grid-template-columns:
    0.8fr
    1.2fr;

  align-items: center;

  gap: 90px;

  margin-bottom: 170px;
}


.information-decoration {
  display: flex;

  align-items: center;
  justify-content: center;

  min-height: 400px;
}


.big-diamond {
  position: relative;

  width: 260px;
  height: 260px;

  display: flex;

  align-items: center;
  justify-content: center;

  transform:
    rotate(45deg);

  border:
    1px solid
    rgba(255, 155, 215, 0.35);

  background:
    linear-gradient(
      135deg,
      rgba(143, 76, 255, 0.1),
      rgba(255, 79, 184, 0.08)
    );

  box-shadow:
    0 0 80px
    rgba(255, 79, 184, 0.08);

  animation:
    diamondFloat
    6s
    ease-in-out
    infinite;
}


.big-diamond::before {
  content: '';

  position: absolute;

  inset: 18px;

  border:
    1px solid
    rgba(255, 255, 255, 0.06);
}


.diamond-inner {
  transform:
    rotate(-45deg);

  color:
    var(--color-pink-soft);

  font-size: 2rem;

  text-shadow:
    0 0 20px
    rgba(255, 79, 184, 0.7);
}


/* =========================
   INFORMATION CONTENT
========================= */

.information-content {
  max-width: 650px;
}


.information-list {
  display: flex;

  flex-direction: column;

  gap: 25px;

  margin-top: 35px;
}


.information-item {
  display: flex;

  align-items: flex-start;

  gap: 16px;
}


.information-icon {
  flex-shrink: 0;

  margin-top: 4px;

  color:
    var(--color-pink);

  font-size: 0.75rem;

  text-shadow:
    0 0 8px
    rgba(255, 79, 184, 0.5);
}


.information-item h3 {
  margin-bottom: 7px;

  color:
    var(--color-white);

  font-family:
    Georgia,
    serif;

  font-size: 1.15rem;

  font-weight: 400;
}


.information-item p {
  color:
    var(--color-text-muted);

  font-size: 0.9rem;

  line-height: 1.75;
}


/* =========================
   TEXT LINK
========================= */

.text-link {
  display: inline-flex;

  align-items: center;

  gap: 10px;

  margin-top: 35px;

  padding-bottom: 5px;

  border-bottom:
    1px solid
    rgba(255, 155, 215, 0.35);

  color:
    var(--color-white);

  font-size: 0.85rem;

  font-weight: 600;

  transition:
    color 0.3s ease,
    border-color 0.3s ease;
}


.text-link:hover {
  color:
    var(--color-pink-soft);

  border-color:
    var(--color-pink);
}


.text-link span {
  color:
    var(--color-pink);

  transition:
    transform 0.3s ease;
}


.text-link:hover span {
  transform:
    translateX(5px);
}


/* =========================
   TERMS PREVIEW
========================= */

.terms-preview {
  position: relative;

  display: grid;

  grid-template-columns:
    auto
    minmax(0, 1fr)
    auto;

  align-items: center;

  gap: 35px;

  margin-bottom: 30px;

  padding:
    50px;

  overflow: hidden;

  border:
    1px solid
    rgba(255, 155, 215, 0.16);

  border-radius:
    var(--radius-large);

  background:
    radial-gradient(
      circle at right,
      rgba(255, 79, 184, 0.08),
      transparent 40%
    ),
    linear-gradient(
      135deg,
      rgba(143, 76, 255, 0.055),
      rgba(255, 79, 184, 0.04)
    );

  box-shadow:
    0 30px 80px
    rgba(0, 0, 0, 0.12);

  transition:
    border-color 0.35s ease,
    transform 0.35s ease;
}


.terms-preview:hover {
  transform:
    translateY(-4px);

  border-color:
    rgba(255, 155, 215, 0.28);
}


/* =========================
   TERMS ICON
========================= */

.terms-preview-icon {
  width: 60px;
  height: 60px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border:
    1px solid
    rgba(255, 155, 215, 0.25);

  border-radius: 50%;

  background:
    rgba(255, 79, 184, 0.04);

  color:
    var(--color-pink);

  font-size: 1rem;

  box-shadow:
    0 0 35px
    rgba(255, 79, 184, 0.1);
}


/* =========================
   TERMS CONTENT
========================= */

.terms-preview-content {
  position: relative;

  z-index: 5;

  max-width: 700px;
}


.terms-preview-content h2 {
  margin:
    10px
    0
    16px;

  color:
    var(--color-white);

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size:
    clamp(
      2.1rem,
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
  max-width: 620px;

  color:
    var(--color-text-muted);

  font-size: 0.9rem;

  line-height: 1.75;
}


/* =========================
   TERMS TAGS
========================= */

.terms-tags {
  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-top: 22px;
}


.terms-tags > span {
  padding:
    7px
    11px;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  border-radius: 999px;

  background:
    rgba(255, 255, 255, 0.025);

  color:
    var(--color-text-muted);

  font-size: 0.62rem;

  letter-spacing: 0.05em;
}


.terms-tags .merch-tag {
  border-color:
    rgba(255, 155, 215, 0.2);

  background:
    rgba(255, 79, 184, 0.06);

  color:
    var(--color-pink-soft);
}


/* =========================
   TERMS BUTTON
========================= */

.terms-button {
  display: inline-flex;

  align-items: center;

  gap: 10px;

  margin-top: 27px;

  padding-bottom: 5px;

  border-bottom:
    1px solid
    rgba(255, 155, 215, 0.35);

  color:
    var(--color-white);

  font-size: 0.82rem;

  font-weight: 600;

  transition:
    color 0.3s ease,
    border-color 0.3s ease;
}


.terms-button:hover {
  color:
    var(--color-pink-soft);

  border-color:
    var(--color-pink);
}


.terms-button > span {
  color:
    var(--color-pink);

  transition:
    transform 0.3s ease;
}


.terms-button:hover > span {
  transform:
    translateX(5px);
}


/* =========================
   TERMS DECORATION
========================= */

.terms-preview-decoration {
  position: relative;

  z-index: 1;

  width: 150px;
  height: 150px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-shrink: 0;
}


.terms-big-diamond {
  color:
    rgba(255, 79, 184, 0.13);

  font-family:
    Georgia,
    serif;

  font-size: 9rem;

  line-height: 1;

  transform:
    rotate(45deg);
}


.terms-small-star {
  position: absolute;

  color:
    var(--color-pink-soft);

  font-size: 0.9rem;

  text-shadow:
    0 0 12px
    rgba(255, 79, 184, 0.5);

  animation:
    twinkle
    3s
    ease-in-out
    infinite;
}


/* =========================
   ORDER NOTICE
========================= */

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
    18px
    22px;

  color:
    var(--color-text-muted);

  font-size: 0.75rem;

  line-height: 1.7;

  text-align: center;
}


.order-notice-icon {
  flex-shrink: 0;

  margin-top: 2px;

  color:
    var(--color-pink);

  font-size: 0.7rem;
}


.order-notice a {
  color:
    var(--color-pink-soft);

  border-bottom:
    1px solid
    rgba(255, 155, 215, 0.3);

  transition:
    color 0.3s ease,
    border-color 0.3s ease;
}


.order-notice a:hover {
  color:
    var(--color-pink);

  border-color:
    var(--color-pink);
}


/* =========================
   FINAL CTA
========================= */

.final-cta {
  position: relative;

  max-width: 900px;

  margin-inline: auto;

  padding:
    90px
    60px;

  overflow: hidden;

  border:
    1px solid
    rgba(255, 155, 215, 0.14);

  border-radius:
    var(--radius-large);

  background:
    radial-gradient(
      circle at top,
      rgba(255, 79, 184, 0.09),
      transparent 55%
    ),
    rgba(255, 255, 255, 0.018);

  text-align: center;
}


.cta-star {
  display: block;

  margin-bottom: 20px;

  color:
    var(--color-pink);

  font-size: 1.7rem;

  text-shadow:
    0 0 20px
    rgba(255, 79, 184, 0.55);
}


.final-cta p {
  max-width: 550px;

  margin:
    25px
    auto
    35px;

  color:
    var(--color-text-muted);

  line-height: 1.8;
}


/* =========================
   CTA ACTIONS
========================= */

.cta-actions {
  display: flex;

  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  gap:
    20px
    25px;
}


.cta-terms {
  padding-bottom: 4px;

  border-bottom:
    1px solid
    rgba(255, 155, 215, 0.3);

  color:
    var(--color-text-muted);

  font-size: 0.78rem;

  font-weight: 600;

  transition:
    color 0.3s ease,
    border-color 0.3s ease;
}


.cta-terms:hover {
  color:
    var(--color-pink-soft);

  border-color:
    var(--color-pink);
}


/* =========================
   ANIMATIONS
========================= */

@keyframes twinkle {

  0%,
  100% {
    opacity: 0.25;

    transform:
      scale(0.8);
  }

  50% {
    opacity: 1;

    transform:
      scale(1.1);
  }

}


@keyframes statusPulse {

  0%,
  100% {
    opacity: 0.6;

    transform:
      scale(0.9);
  }

  50% {
    opacity: 1;

    transform:
      scale(1.2);
  }

}


@keyframes diamondFloat {

  0%,
  100% {
    transform:
      rotate(45deg)
      translate(
        0,
        0
      );
  }

  50% {
    transform:
      rotate(45deg)
      translate(
        -5px,
        -5px
      );
  }

}


/* =========================
   TABLET
========================= */

@media (max-width: 950px) {

  .commissions-page {
    padding-top: 125px;
  }


  .commissions-header {
    margin-bottom: 130px;
  }


  .commissions-list {
    gap: 55px;
  }


  .process-grid {
    grid-template-columns:
      repeat(
        2,
        1fr
      );
  }


  .information-section {
    grid-template-columns:
      1fr;

    gap: 40px;
  }


  .information-decoration {
    min-height: 330px;
  }


  .information-content {
    max-width: 700px;
  }


  .terms-preview {
    grid-template-columns:
      auto
      1fr;

    padding:
      45px
      40px;
  }


  .terms-preview-decoration {
    position: absolute;

    right: 20px;
    bottom: -20px;

    opacity: 0.55;
  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 650px) {

  .commissions-page {
    padding:
      110px
      0
      70px;
  }


  .commissions-container {
    width:
      min(
        calc(100% - 30px),
        var(--max-width)
      );
  }


  .commissions-header {
    margin-bottom: 110px;
  }


  .commissions-header h1 {
    font-size:
      clamp(
        3rem,
        16vw,
        4.8rem
      );
  }


  .header-description {
    font-size: 0.95rem;
  }


  .kofi-button,
  .cta-button {
    width: 100%;

    max-width: 350px;
  }


  .services-section,
  .process-section,
  .information-section {
    margin-bottom: 120px;
  }


  .section-heading {
    margin-bottom: 45px;
  }


  .commissions-list {
    gap: 40px;
  }


  .process-grid {
    grid-template-columns:
      1fr;
  }


  .process-card {
    min-height: auto;

    padding:
      30px
      20px;
  }


  .information-decoration {
    min-height: 270px;
  }


  .big-diamond {
    width: 190px;
    height: 190px;
  }


  /* TERMS */

  .terms-preview {
    grid-template-columns:
      1fr;

    gap: 20px;

    margin-bottom: 20px;

    padding:
      35px
      25px;
  }


  .terms-preview-icon {
    width: 50px;
    height: 50px;
  }


  .terms-preview-decoration {
    right: -35px;
    bottom: -40px;

    opacity: 0.35;
  }


  .terms-big-diamond {
    font-size: 8rem;
  }


  .terms-tags {
    padding-right: 20px;
  }


  .order-notice {
    margin-bottom: 120px;

    padding:
      18px
      5px;

    text-align: left;
  }


  .final-cta {
    padding:
      65px
      25px;
  }


  .cta-actions {
    flex-direction: column;
  }

}


/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {

  .star,
  .status-dot,
  .big-diamond,
  .terms-small-star {
    animation: none;
  }


  .process-card,
  .kofi-button,
  .cta-button,
  .terms-preview {
    transition: none;
  }

}

</style>