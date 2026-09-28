<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

/* =========================
   TERMS
========================= */

const terms = computed(() => [
  {
    number: '01',
    title: t('terms.sections.orders.title'),
    icon: '◇',
    paragraphs: [
      t('terms.sections.orders.paragraphs.first'),
      t('terms.sections.orders.paragraphs.second'),
      t('terms.sections.orders.paragraphs.third')
    ]
  },
  {
    number: '02',
    title: t('terms.sections.delays.title'),
    icon: '✦',
    paragraphs: [
      t('terms.sections.delays.paragraphs.first'),
      t('terms.sections.delays.paragraphs.second'),
      t('terms.sections.delays.paragraphs.third')
    ]
  },
  {
    number: '03',
    title: t('terms.sections.modifications.title'),
    icon: '◇',
    paragraphs: [
      t('terms.sections.modifications.paragraphs.first'),
      t('terms.sections.modifications.paragraphs.second'),
      t('terms.sections.modifications.paragraphs.third')
    ]
  },
  {
    number: '04',
    title: t('terms.sections.refunds.title'),
    icon: '✦',
    paragraphs: [
      t('terms.sections.refunds.paragraphs.first'),
      t('terms.sections.refunds.paragraphs.second'),
      t('terms.sections.refunds.paragraphs.third')
    ]
  },
  {
    number: '05',
    title: t('terms.sections.ych.title'),
    icon: '◇',
    paragraphs: [
      t('terms.sections.ych.paragraphs.first'),
      t('terms.sections.ych.paragraphs.second'),
      t('terms.sections.ych.paragraphs.third')
    ]
  },
  {
    number: '06',
    title: t('terms.sections.websites.title'),
    icon: '○',
    paragraphs: [
      t('terms.sections.websites.paragraphs.first'),
      t('terms.sections.websites.paragraphs.second'),
      t('terms.sections.websites.paragraphs.third'),
      t('terms.sections.websites.paragraphs.fourth')
    ]
  },
  {
    number: '07',
    title: t('terms.sections.rights.title'),
    icon: '✦',
    paragraphs: [
      t('terms.sections.rights.paragraphs.first'),
      t('terms.sections.rights.paragraphs.second'),
      t('terms.sections.rights.paragraphs.third')
    ]
  },
  {
    number: '08',
    title: t('terms.sections.portfolio.title'),
    icon: '◇',
    paragraphs: [
      t('terms.sections.portfolio.paragraphs.first'),
      t('terms.sections.portfolio.paragraphs.second'),
      t('terms.sections.portfolio.paragraphs.third')
    ]
  },
  {
    number: '09',
    title: t('terms.sections.refusal.title'),
    icon: '✦',
    paragraphs: [
      t('terms.sections.refusal.paragraphs.first'),
      t('terms.sections.refusal.paragraphs.second')
    ]
  },
  {
    number: '10',
    title: t('terms.sections.client.title'),
    icon: '◇',
    paragraphs: [
      t('terms.sections.client.paragraphs.first'),
      t('terms.sections.client.paragraphs.second'),
      t('terms.sections.client.paragraphs.third')
    ]
  },
  {
    number: '11',
    title: t('terms.sections.delivery.title'),
    icon: '✦',
    paragraphs: [
      t('terms.sections.delivery.paragraphs.first'),
      t('terms.sections.delivery.paragraphs.second'),
      t('terms.sections.delivery.paragraphs.third')
    ]
  },
  {
    number: '12',
    title: t('terms.sections.acceptance.title'),
    icon: '◇',
    paragraphs: [
      t('terms.sections.acceptance.paragraphs.first'),
      t('terms.sections.acceptance.paragraphs.second')
    ]
  }
])

/* =========================
   MERCH PRICES
========================= */

const merchPrices = computed(() => [
  {
    creator: 'takiimikiku',
    offer: t('terms.prices.oneEmote'),
    normal: '2 €',
    license: '+0,40 €',
    total: '2,40 €'
  },
  {
    creator: 'takiimikiku',
    offer: t('terms.prices.fiveEmotes'),
    normal: '8 €',
    license: '+1,60 €',
    total: '9,60 €'
  },
  {
    creator: 'Nicopiyo',
    offer: t('terms.prices.oneEmote'),
    normal: '3 €',
    license: '+0,60 €',
    total: '3,60 €'
  },
  {
    creator: 'Nicopiyo',
    offer: t('terms.prices.fiveEmotes'),
    normal: '12 €',
    license: '+2,40 €',
    total: '14,40 €'
  }
])
</script>

<template>
  <section class="terms-page">

    <!-- BACKGROUND -->

    <div class="background-glow glow-one"></div>
    <div class="background-glow glow-two"></div>
    <div class="background-glow glow-three"></div>

    <div class="orbit orbit-one"></div>
    <div class="orbit orbit-two"></div>

    <span class="background-star star-one">✦</span>
    <span class="background-star star-two">✧</span>
    <span class="background-star star-three">✦</span>

    <div class="terms-container">

      <!-- HERO -->

      <header class="terms-header">
        <span class="section-label">
          ✦ {{ $t('terms.hero.label') }} ✦
        </span>

        <h1>
          {{ $t('terms.hero.title.first') }}
          <span>{{ $t('terms.hero.title.second') }}</span>
        </h1>

        <p class="hero-description">
          {{ $t('terms.hero.description') }}
        </p>

        <div class="last-update">
          <span class="update-dot"></span>
          {{ $t('terms.hero.lastUpdate') }}
          {{ $t('terms.hero.date') }}
        </div>
      </header>

      <!-- IMPORTANT -->

      <div class="important-card">
        <div class="important-icon">✦</div>

        <div>
          <span class="important-label">
            {{ $t('terms.important.label') }}
          </span>

          <h2>{{ $t('terms.important.title') }}</h2>

          <p>
            {{ $t('terms.important.description') }}
          </p>
        </div>
      </div>

      <!-- INTRODUCTION -->

      <div class="terms-introduction">
        <span class="small-label">
          {{ $t('terms.introduction.label') }}
        </span>

        <h2>
          {{ $t('terms.introduction.title.first') }}
          <span>{{ $t('terms.introduction.title.second') }}</span>
        </h2>

        <p>
          {{ $t('terms.introduction.description') }}
        </p>
      </div>

      <!-- TERMS -->

      <div class="terms-list">
        <article
          v-for="term in terms"
          :key="term.number"
          class="term-card"
        >
          <div class="term-number">
            {{ term.number }}
          </div>

          <div class="term-content">
            <div class="term-title">
              <span class="term-icon">
                {{ term.icon }}
              </span>

              <h3>{{ term.title }}</h3>
            </div>

            <div class="term-paragraphs">
              <p
                v-for="paragraph in term.paragraphs"
                :key="paragraph"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>
        </article>
      </div>

      <!-- MERCHANDISING -->

      <section class="merch-section">
        <div class="merch-heading">
          <span class="small-label">
            {{ $t('terms.merch.label') }}
          </span>

          <h2>
            {{ $t('terms.merch.title.first') }}
            <span>{{ $t('terms.merch.title.second') }}</span>
          </h2>

          <p>
            {{ $t('terms.merch.description') }}
          </p>
        </div>

        <div class="merch-license-card">
          <div class="merch-percentage">
            <span class="percentage-decoration">✦</span>

            <strong>+20%</strong>

            <span>
              {{ $t('terms.merch.percentage') }}
            </span>
          </div>

          <div class="merch-description">
            <h3>
              {{ $t('terms.merch.card.title') }}
            </h3>

            <p>
              {{ $t('terms.merch.card.first') }}
            </p>

            <p>
              {{ $t('terms.merch.card.secondBefore') }}
              <strong>{{ $t('terms.merch.card.products') }}</strong>
              {{ $t('terms.merch.card.secondMiddle') }}
              <strong>+20 %</strong>
              {{ $t('terms.merch.card.secondAfter') }}
            </p>

            <p>
              {{ $t('terms.merch.card.third') }}
            </p>
          </div>
        </div>

        <!-- RIGHTS -->

        <div class="merch-rights">
          <div class="rights-column allowed">
            <span class="rights-label">
              {{ $t('terms.merch.allowed.label') }}
            </span>

            <h3>{{ $t('terms.merch.allowed.title') }}</h3>

            <ul>
              <li>
                <span>✓</span>
                {{ $t('terms.merch.allowed.stickers') }}
              </li>

              <li>
                <span>✓</span>
                {{ $t('terms.merch.allowed.clothes') }}
              </li>

              <li>
                <span>✓</span>
                {{ $t('terms.merch.allowed.mugs') }}
              </li>

              <li>
                <span>✓</span>
                {{ $t('terms.merch.allowed.prints') }}
              </li>
            </ul>
          </div>

          <div class="rights-column forbidden">
            <span class="rights-label">
              {{ $t('terms.merch.forbidden.label') }}
            </span>

            <h3>{{ $t('terms.merch.forbidden.title') }}</h3>

            <ul>
              <li>
                <span>×</span>
                {{ $t('terms.merch.forbidden.digitalFile') }}
              </li>

              <li>
                <span>×</span>
                {{ $t('terms.merch.forbidden.ychBase') }}
              </li>

              <li>
                <span>×</span>
                {{ $t('terms.merch.forbidden.claim') }}
              </li>

              <li>
                <span>×</span>
                {{ $t('terms.merch.forbidden.sources') }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- YCH -->

      <section class="ych-section">
        <div class="ych-heading">
          <span class="small-label">
            {{ $t('terms.ych.label') }}
          </span>

          <h2>
            {{ $t('terms.ych.title.first') }}
            <span>{{ $t('terms.ych.title.second') }}</span>
          </h2>
        </div>

        <div class="ych-grid">

          <!-- NICOPIYO -->

          <article class="ych-card">
            <div class="ych-top">
              <span class="ych-symbol">◇</span>
              <span class="ych-type">YCH BASE</span>
            </div>

            <h3>Nicopiyo</h3>

            <p>
              {{ $t('terms.ych.nicopiyo.description') }}
            </p>

            <ul>
              <li>
                <span>✓</span>
                {{ $t('terms.ych.common.personal') }}
              </li>

              <li>
                <span>✓</span>
                {{ $t('terms.ych.nicopiyo.commercial') }}
              </li>

              <li>
                <span>✓</span>
                {{ $t('terms.ych.common.merchandising') }}
              </li>

              <li>
                <span>✓</span>
                {{ $t('terms.ych.common.modification') }}
              </li>

              <li class="special">
                <span>✦</span>
                {{ $t('terms.ych.common.credit') }} _Nicopiyo
              </li>

              <li class="forbidden-item">
                <span>×</span>
                {{ $t('terms.ych.nicopiyo.ai') }}
              </li>
            </ul>
          </article>

          <!-- TAKIIMIKIKU -->

          <article class="ych-card">
            <div class="ych-top">
              <span class="ych-symbol">◇</span>
              <span class="ych-type">YCH BASE</span>
            </div>

            <h3>takiimikiku</h3>

            <p>
              {{ $t('terms.ych.takiimikiku.description') }}
            </p>

            <ul>
              <li>
                <span>✓</span>
                {{ $t('terms.ych.common.personal') }}
              </li>

              <li>
                <span>✓</span>
                {{ $t('terms.ych.takiimikiku.commercial') }}
              </li>

              <li>
                <span>✓</span>
                {{ $t('terms.ych.takiimikiku.commissions') }}
              </li>

              <li>
                <span>✓</span>
                {{ $t('terms.ych.common.modification') }}
              </li>

              <li class="special">
                <span>✦</span>
                {{ $t('terms.ych.common.credit') }} takiimikiku
              </li>

              <li class="forbidden-item">
                <span>×</span>
                {{ $t('terms.ych.takiimikiku.resale') }}
              </li>
            </ul>
          </article>
        </div>

        <div class="ych-note">
          <span>✦</span>

          <p>
            {{ $t('terms.ych.note') }}
          </p>
        </div>
      </section>

      <!-- PRICES -->

      <section class="price-section">
        <div class="price-heading">
          <span class="small-label">
            {{ $t('terms.prices.label') }}
          </span>

          <h2>
            {{ $t('terms.prices.title.first') }}
            <span>{{ $t('terms.prices.title.second') }}</span>
          </h2>

          <p>
            {{ $t('terms.prices.descriptionBefore') }}
            <strong>{{ $t('terms.prices.descriptionStrong') }}</strong>
          </p>
        </div>

        <!-- DESKTOP TABLE -->

        <div class="price-table-wrapper">
          <table class="price-table">
            <thead>
              <tr>
                <th>{{ $t('terms.prices.table.commission') }}</th>
                <th>{{ $t('terms.prices.table.standard') }}</th>
                <th>{{ $t('terms.prices.table.license') }}</th>
                <th>{{ $t('terms.prices.table.total') }}</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="price in merchPrices"
                :key="`${price.creator}-${price.offer}`"
              >
                <td>
                  <div class="table-commission">
                    <span class="table-diamond">◇</span>

                    <div>
                      <strong>{{ price.creator }}</strong>
                      <span>{{ price.offer }}</span>
                    </div>
                  </div>
                </td>

                <td>{{ price.normal }}</td>

                <td class="merch-extra">
                  {{ price.license }}
                </td>

                <td class="final-price">
                  {{ price.total }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- MOBILE CARDS -->

        <div class="price-mobile">
          <article
            v-for="price in merchPrices"
            :key="`mobile-${price.creator}-${price.offer}`"
            class="price-mobile-card"
          >
            <div class="mobile-card-heading">
              <span>◇</span>

              <div>
                <strong>{{ price.creator }}</strong>
                <small>{{ price.offer }}</small>
              </div>
            </div>

            <div class="mobile-price-row">
              <span>
                {{ $t('terms.prices.table.standard') }}
              </span>

              <strong>{{ price.normal }}</strong>
            </div>

            <div class="mobile-price-row">
              <span>
                {{ $t('terms.prices.mobileLicense') }}
              </span>

              <strong class="pink-price">
                {{ price.license }}
              </strong>
            </div>

            <div class="mobile-price-total">
              <span>
                {{ $t('terms.prices.mobileTotal') }}
              </span>

              <strong>{{ price.total }}</strong>
            </div>
          </article>
        </div>

        <!-- NOTE -->

        <div class="price-note">
          <span class="price-note-icon">✦</span>

          <div>
            <strong>
              {{ $t('terms.prices.note.title') }}
            </strong>

            <p>
              {{ $t('terms.prices.note.description') }}
            </p>
          </div>
        </div>
      </section>

      <!-- CTA -->

      <section class="terms-cta">
        <span class="cta-star">✦</span>

        <span class="small-label">
          {{ $t('terms.cta.label') }}
        </span>

        <h2>
          {{ $t('terms.cta.title.first') }}
          <span>{{ $t('terms.cta.title.second') }}</span>
        </h2>

        <p>
          {{ $t('terms.cta.description') }}
        </p>

        <RouterLink
          to="/contact"
          class="contact-button"
        >
          {{ $t('terms.cta.button') }}
          <span>→</span>
        </RouterLink>
      </section>

    </div>
  </section>
</template>

<style scoped>
/* =========================
   PAGE
========================= */

.terms-page {
  position: relative;
  min-height: 100vh;
  padding: 150px 0 100px;
  overflow: hidden;
  background: var(--color-background);
}

.terms-container {
  position: relative;
  z-index: 5;
  width: min(calc(100% - 40px), var(--max-width));
  margin-inline: auto;
}

/* =========================
   BACKGROUND
========================= */

.background-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.glow-one {
  width: 550px;
  height: 550px;
  right: -250px;
  top: 150px;
  background: rgba(255, 79, 184, 0.07);
}

.glow-two {
  width: 600px;
  height: 600px;
  left: -300px;
  top: 1600px;
  background: rgba(143, 76, 255, 0.07);
}

.glow-three {
  width: 500px;
  height: 500px;
  right: -250px;
  bottom: 700px;
  background: rgba(255, 79, 184, 0.05);
}

/* =========================
   ORBITS
========================= */

.orbit {
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.035);
  border-radius: 50%;
  pointer-events: none;
}

.orbit-one {
  width: 650px;
  height: 350px;
  right: -300px;
  top: 350px;
  transform: rotate(-25deg);
}

.orbit-two {
  width: 550px;
  height: 550px;
  left: -350px;
  top: 2400px;
  border-style: dashed;
}

/* =========================
   BACKGROUND STARS
========================= */

.background-star {
  position: absolute;
  color: var(--color-pink-soft);
  pointer-events: none;
  text-shadow: 0 0 15px rgba(255, 79, 184, 0.6);
  animation: twinkle 3s ease-in-out infinite;
}

.star-one {
  top: 220px;
  left: 8%;
}

.star-two {
  top: 650px;
  right: 8%;
  animation-delay: -1s;
}

.star-three {
  top: 1800px;
  left: 5%;
  animation-delay: -2s;
}

/* =========================
   LABELS
========================= */

.section-label,
.small-label {
  display: inline-block;
  color: var(--color-pink-soft);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

/* =========================
   HERO
========================= */

.terms-header {
  max-width: 900px;
  margin: 0 auto 110px;
  text-align: center;
}

.section-label {
  margin-bottom: 25px;
}

.terms-header h1 {
  margin: 0;
  color: var(--color-white);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(3.2rem, 7vw, 6.5rem);
  font-weight: 400;
  line-height: 0.95;
  letter-spacing: -0.055em;
}

.terms-header h1 span {
  display: block;
  margin-top: 10px;
  color: var(--color-pink);
  font-style: italic;
  text-shadow: 0 0 35px rgba(255, 79, 184, 0.18);
}

.hero-description {
  max-width: 680px;
  margin: 35px auto 25px;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.85;
}

/* =========================
   UPDATE
========================= */

.last-update {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 8px 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  color: var(--color-text-muted);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
}

.update-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-pink);
  box-shadow: 0 0 8px var(--color-pink);
}

/* =========================
   IMPORTANT
========================= */

.important-card {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 25px;
  max-width: 900px;
  margin: 0 auto 150px;
  padding: 35px 40px;
  overflow: hidden;
  border: 1px solid rgba(255, 155, 215, 0.2);
  border-radius: var(--radius-medium);
  background:
    linear-gradient(
      135deg,
      rgba(143, 76, 255, 0.07),
      rgba(255, 79, 184, 0.06)
    );
}

.important-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 3px;
  height: 100%;
  background:
    linear-gradient(
      var(--color-purple),
      var(--color-pink)
    );
}

.important-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 155, 215, 0.2);
  border-radius: 50%;
  color: var(--color-pink);
  box-shadow: 0 0 25px rgba(255, 79, 184, 0.1);
}

.important-label {
  color: var(--color-pink-soft);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.18em;
}

.important-card h2 {
  margin: 6px 0 10px;
  color: var(--color-white);
  font-family: Georgia, serif;
  font-size: 1.6rem;
  font-weight: 400;
}

.important-card p {
  color: var(--color-text-muted);
  line-height: 1.75;
}

/* =========================
   INTRODUCTION
========================= */

.terms-introduction {
  max-width: 750px;
  margin-bottom: 70px;
}

.terms-introduction h2,
.merch-heading h2,
.ych-heading h2,
.price-heading h2,
.terms-cta h2 {
  margin: 15px 0 0;
  color: var(--color-white);
  font-family: Georgia, 'Times New Roman', serif;
  font-size: clamp(2.3rem, 5vw, 4.5rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: -0.045em;
}

.terms-introduction h2 span,
.merch-heading h2 span,
.ych-heading h2 span,
.price-heading h2 span,
.terms-cta h2 span {
  color: var(--color-pink);
  font-style: italic;
}

.terms-introduction p,
.merch-heading p,
.price-heading p {
  max-width: 650px;
  margin-top: 20px;
  color: var(--color-text-muted);
  line-height: 1.8;
}

/* =========================
   TERMS LIST
========================= */

.terms-list {
  margin-bottom: 180px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.term-card {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 35px;
  padding: 45px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition:
    background 0.35s ease,
    padding-left 0.35s ease;
}

.term-card:hover {
  padding-left: 30px;
  background:
    linear-gradient(
      90deg,
      rgba(255, 79, 184, 0.035),
      transparent
    );
}

.term-number {
  color: rgba(255, 155, 215, 0.32);
  font-family: Georgia, serif;
  font-size: 2.4rem;
  font-style: italic;
}

.term-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.term-icon {
  color: var(--color-pink);
  font-size: 0.8rem;
}

.term-title h3 {
  color: var(--color-white);
  font-family: Georgia, serif;
  font-size: 1.6rem;
  font-weight: 400;
}

.term-paragraphs {
  max-width: 780px;
  margin-top: 18px;
}

.term-paragraphs p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.8;
}

.term-paragraphs p + p {
  margin-top: 12px;
}

/* =========================
   MERCH
========================= */

.merch-section {
  margin-bottom: 180px;
}

.merch-heading {
  max-width: 750px;
  margin-bottom: 55px;
}

.merch-license-card {
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: 60px;
  align-items: center;
  padding: 55px;
  border: 1px solid rgba(255, 155, 215, 0.18);
  border-radius: var(--radius-large);
  background:
    radial-gradient(
      circle at left,
      rgba(255, 79, 184, 0.08),
      transparent 45%
    ),
    rgba(255, 255, 255, 0.018);
}

.merch-percentage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  text-align: center;
}

.percentage-decoration {
  color: var(--color-pink);
  margin-bottom: 10px;
}

.merch-percentage strong {
  color: var(--color-pink);
  font-family: Georgia, serif;
  font-size: clamp(4rem, 8vw, 7rem);
  font-weight: 400;
  line-height: 1;
  text-shadow: 0 0 40px rgba(255, 79, 184, 0.15);
}

.merch-percentage > span:last-child {
  margin-top: 10px;
  color: var(--color-text-muted);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.merch-description h3 {
  margin-bottom: 20px;
  color: var(--color-white);
  font-family: Georgia, serif;
  font-size: 1.8rem;
  font-weight: 400;
}

.merch-description p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
  line-height: 1.8;
}

.merch-description p + p {
  margin-top: 15px;
}

.merch-description strong {
  color: var(--color-white);
}

/* =========================
   MERCH RIGHTS
========================= */

.merch-rights {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.rights-column {
  padding: 35px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-medium);
  background: rgba(255, 255, 255, 0.018);
}

.rights-label {
  color: var(--color-pink-soft);
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.rights-column h3 {
  margin: 8px 0 20px;
  color: var(--color-white);
  font-family: Georgia, serif;
  font-size: 1.4rem;
  font-weight: 400;
}

.rights-column ul,
.ych-card ul {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  list-style: none;
}

.rights-column li,
.ych-card li {
  display: flex;
  gap: 10px;
  color: var(--color-text-muted);
  font-size: 0.82rem;
  line-height: 1.55;
}

.allowed li span {
  color: var(--color-pink);
}

.forbidden li span {
  color: var(--color-purple);
}

/* =========================
   YCH
========================= */

.ych-section {
  margin-bottom: 180px;
}

.ych-heading {
  margin-bottom: 55px;
}

.ych-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
}

.ych-card {
  position: relative;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-large);
  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.025),
      rgba(255, 79, 184, 0.02)
    );
  transition:
    transform 0.35s ease,
    border-color 0.35s ease;
}

.ych-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 155, 215, 0.25);
}

.ych-top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.ych-symbol {
  color: var(--color-pink);
  font-size: 1.5rem;
}

.ych-type {
  color: var(--color-text-muted);
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.16em;
}

.ych-card h3 {
  color: var(--color-white);
  font-family: Georgia, serif;
  font-size: 2rem;
  font-weight: 400;
}

.ych-card > p {
  margin: 15px 0 25px;
  color: var(--color-text-muted);
  font-size: 0.85rem;
  line-height: 1.75;
}

.ych-card li span {
  color: var(--color-pink);
}

.ych-card .special {
  color: var(--color-white);
}

.ych-card .forbidden-item span {
  color: var(--color-purple);
}

/* =========================
   YCH NOTE
========================= */

.ych-note {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 25px;
  padding: 20px 25px;
  border-left: 2px solid var(--color-pink);
  background: rgba(255, 79, 184, 0.035);
}

.ych-note span {
  color: var(--color-pink);
}

.ych-note p {
  color: var(--color-text-muted);
  font-size: 0.8rem;
  line-height: 1.7;
}

/* =========================
   PRICE SECTION
========================= */

.price-section {
  margin-bottom: 180px;
}

.price-heading {
  margin-bottom: 55px;
}

.price-heading strong {
  color: var(--color-white);
}

/* =========================
   TABLE
========================= */

.price-table-wrapper {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: var(--radius-large);
  background: rgba(255, 255, 255, 0.018);
}

.price-table {
  width: 100%;
  border-collapse: collapse;
}

.price-table th {
  padding: 20px 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
  color: var(--color-text-muted);
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-align: left;
  text-transform: uppercase;
}

.price-table td {
  padding: 24px 25px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--color-text);
  font-size: 0.85rem;
}

.price-table tbody tr:last-child td {
  border-bottom: none;
}

.price-table tbody tr {
  transition: background 0.3s ease;
}

.price-table tbody tr:hover {
  background: rgba(255, 79, 184, 0.035);
}

.table-commission {
  display: flex;
  align-items: center;
  gap: 13px;
}

.table-diamond {
  color: var(--color-pink);
  font-size: 1.3rem;
}

.table-commission div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.table-commission strong {
  color: var(--color-white);
  font-family: Georgia, serif;
  font-size: 1rem;
  font-weight: 400;
}

.table-commission div span {
  color: var(--color-text-muted);
  font-size: 0.68rem;
}

.merch-extra {
  color: var(--color-pink) !important;
  font-weight: 600;
}

.final-price {
  color: var(--color-white) !important;
  font-family: Georgia, serif;
  font-size: 1.25rem !important;
}

/* =========================
   MOBILE PRICE CARDS
========================= */

.price-mobile {
  display: none;
}

.price-mobile-card {
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-medium);
  background: rgba(255, 255, 255, 0.018);
}

.mobile-card-heading {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.mobile-card-heading > span {
  color: var(--color-pink);
  font-size: 1.5rem;
}

.mobile-card-heading div {
  display: flex;
  flex-direction: column;
}

.mobile-card-heading strong {
  color: var(--color-white);
  font-family: Georgia, serif;
  font-size: 1.2rem;
  font-weight: 400;
}

.mobile-card-heading small {
  color: var(--color-text-muted);
}

.mobile-price-row,
.mobile-price-total {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: var(--color-text-muted);
  font-size: 0.78rem;
}

.mobile-price-row strong {
  color: var(--color-white);
}

.mobile-price-row .pink-price {
  color: var(--color-pink);
}

.mobile-price-total {
  margin-top: 5px;
  padding-top: 17px;
  color: var(--color-white);
}

.mobile-price-total strong {
  color: var(--color-pink-soft);
  font-family: Georgia, serif;
  font-size: 1.5rem;
  font-weight: 400;
}

/* =========================
   PRICE NOTE
========================= */

.price-note {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-top: 25px;
  padding: 25px;
  border: 1px solid rgba(255, 155, 215, 0.1);
  border-radius: var(--radius-medium);
  background: rgba(255, 79, 184, 0.025);
}

.price-note-icon {
  color: var(--color-pink);
}

.price-note strong {
  display: block;
  margin-bottom: 6px;
  color: var(--color-white);
  font-family: Georgia, serif;
  font-weight: 400;
}

.price-note p {
  color: var(--color-text-muted);
  font-size: 0.78rem;
  line-height: 1.7;
}

/* =========================
   CTA
========================= */

.terms-cta {
  max-width: 900px;
  margin-inline: auto;
  padding: 85px 55px;
  border: 1px solid rgba(255, 155, 215, 0.13);
  border-radius: var(--radius-large);
  background:
    radial-gradient(
      circle at top,
      rgba(255, 79, 184, 0.08),
      transparent 55%
    ),
    rgba(255, 255, 255, 0.015);
  text-align: center;
}

.cta-star {
  display: block;
  margin-bottom: 20px;
  color: var(--color-pink);
  font-size: 1.6rem;
  text-shadow: 0 0 18px rgba(255, 79, 184, 0.6);
}

.terms-cta p {
  max-width: 550px;
  margin: 25px auto 35px;
  color: var(--color-text-muted);
  line-height: 1.8;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 0 25px;
  border: 1px solid rgba(255, 155, 215, 0.3);
  border-radius: 999px;
  background:
    linear-gradient(
      135deg,
      rgba(143, 76, 255, 0.15),
      rgba(255, 79, 184, 0.15)
    );
  color: var(--color-white);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-decoration: none;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;
}

.contact-button:hover {
  transform: translateY(-3px);
  border-color: rgba(255, 155, 215, 0.55);
  background:
    linear-gradient(
      135deg,
      rgba(143, 76, 255, 0.25),
      rgba(255, 79, 184, 0.25)
    );
}

.contact-button span {
  transition: transform 0.3s ease;
}

.contact-button:hover span {
  transform: translateX(4px);
}

/* =========================
   ANIMATIONS
========================= */

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(0.9);
  }

  50% {
    opacity: 1;
    transform: scale(1.15);
  }
}

/* =========================
   RESPONSIVE 1000PX
========================= */

@media (max-width: 1000px) {
  .terms-page {
    padding-top: 130px;
  }

  .terms-header {
    margin-bottom: 90px;
  }

  .important-card {
    margin-bottom: 120px;
  }

  .terms-list,
  .merch-section,
  .ych-section,
  .price-section {
    margin-bottom: 140px;
  }

  .merch-license-card {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .merch-percentage {
    min-height: 180px;
  }
}

/* =========================
   RESPONSIVE 800PX
========================= */

@media (max-width: 800px) {
  .terms-page {
    padding: 120px 0 80px;
  }

  .terms-container {
    width: min(calc(100% - 30px), var(--max-width));
  }

  .term-card {
    grid-template-columns: 75px 1fr;
    gap: 20px;
  }

  .term-number {
    font-size: 2rem;
  }

  .merch-rights,
  .ych-grid {
    grid-template-columns: 1fr;
  }

  .price-table-wrapper {
    display: none;
  }

  .price-mobile {
    display: grid;
    gap: 15px;
  }

  .terms-cta {
    padding: 65px 35px;
  }
}

/* =========================
   RESPONSIVE 600PX
========================= */

@media (max-width: 600px) {
  .terms-page {
    padding-top: 105px;
  }

  .terms-header {
    margin-bottom: 70px;
  }

  .hero-description {
    font-size: 0.9rem;
  }

  .important-card {
    grid-template-columns: 1fr;
    margin-bottom: 100px;
    padding: 30px 25px;
  }

  .important-icon {
    width: 40px;
    height: 40px;
  }

  .terms-introduction {
    margin-bottom: 50px;
  }

  .terms-list,
  .merch-section,
  .ych-section,
  .price-section {
    margin-bottom: 110px;
  }

  .term-card {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 35px 5px;
  }

  .term-card:hover {
    padding-left: 10px;
  }

  .term-number {
    font-size: 1.6rem;
  }

  .term-title h3 {
    font-size: 1.35rem;
  }

  .merch-license-card {
    padding: 35px 25px;
  }

  .merch-percentage {
    min-height: 150px;
  }

  .merch-description h3 {
    font-size: 1.5rem;
  }

  .rights-column,
  .ych-card {
    padding: 30px 25px;
  }

  .terms-cta {
    padding: 55px 25px;
  }
}

/* =========================
   RESPONSIVE 420PX
========================= */

@media (max-width: 420px) {
  .terms-container {
    width: min(calc(100% - 24px), var(--max-width));
  }

  .terms-header h1 {
    font-size: clamp(2.8rem, 15vw, 4rem);
  }

  .last-update {
    font-size: 0.6rem;
  }

  .important-card {
    padding: 25px 20px;
  }

  .merch-license-card {
    padding: 30px 20px;
  }

  .rights-column,
  .ych-card {
    padding: 25px 20px;
  }

  .price-mobile-card {
    padding: 22px 18px;
  }

  .mobile-price-row {
    gap: 10px;
  }

  .terms-cta {
    padding: 50px 20px;
  }
}
</style>