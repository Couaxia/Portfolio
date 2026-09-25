<script setup>

import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'


/* =========================
   I18N
========================= */

const { t } = useI18n()


/* =========================
   PROPS
========================= */

const props = defineProps({

  commission: {
    type: Object,
    required: true
  },

  index: {
    type: Number,
    default: 0
  }

})


/* =========================
   CURRENT IMAGE
========================= */

const currentImage = ref(0)


/* =========================
   IMAGES
========================= */

const images = computed(() => {

  return props.commission.images || []

})


const hasImages = computed(() => {

  return images.value.length > 0

})


const hasMultipleImages = computed(() => {

  return images.value.length > 1

})


/* =========================
   NUMBER
========================= */

const commissionNumber = computed(() => {

  return String(
    props.index + 1
  ).padStart(2, '0')

})


/* =========================
   CURRENT IMAGE NUMBER
========================= */

const currentImageNumber = computed(() => {

  return currentImage.value + 1

})


/* =========================
   ACCESSIBILITY
========================= */

const imageAlt = computed(() => {

  return t(
    'commissions.card.imageAlt',
    {
      title: props.commission.title,
      number: currentImageNumber.value
    }
  )

})


const previousImageLabel = computed(() => {

  return t(
    'commissions.card.previousImage',
    {
      title: props.commission.title
    }
  )

})


const nextImageLabel = computed(() => {

  return t(
    'commissions.card.nextImage',
    {
      title: props.commission.title
    }
  )

})


const orderLabel = computed(() => {

  return t(
    'commissions.card.orderAria',
    {
      title: props.commission.title
    }
  )

})


/* =========================
   CAROUSEL
========================= */

const nextImage = () => {

  if (!hasMultipleImages.value) {
    return
  }

  currentImage.value =
    (
      currentImage.value + 1
    ) %
    images.value.length

}


const previousImage = () => {

  if (!hasMultipleImages.value) {
    return
  }

  currentImage.value =
    (
      currentImage.value -
      1 +
      images.value.length
    ) %
    images.value.length

}


const selectImage = (index) => {

  if (
    index < 0 ||
    index >= images.value.length
  ) {
    return
  }

  currentImage.value = index

}


const selectImageLabel = (index) => {

  return t(
    'commissions.card.showImage',
    {
      number: index + 1
    }
  )

}

</script>


<template>

  <article
    class="commission-card"
    :class="{
      'commission-card-reverse':
        index % 2 !== 0
    }"
  >


    <!-- =========================
         VISUAL
    ========================== -->

    <div class="commission-visual">


      <!-- BACKGROUND GLOW -->

      <div class="visual-glow"></div>


      <!-- COMMISSION NUMBER -->

      <span class="visual-number">
        {{ commissionNumber }}
      </span>


      <!-- =========================
           IMAGE
      ========================== -->

      <div
        v-if="hasImages"
        class="image-area"
      >


        <div class="image-frame">

          <Transition
            name="commission-image"
            mode="out-in"
          >

            <img
              :key="currentImage"
              :src="images[currentImage]"
              :alt="imageAlt"
              class="commission-image"
              loading="lazy"
              draggable="false"
            >

          </Transition>


          <!-- IMAGE GRADIENT -->

          <div class="image-overlay"></div>


          <!-- CATEGORY -->

          <span
            v-if="commission.category"
            class="image-category"
          >
            {{ commission.category }}
          </span>

        </div>


        <!-- =========================
             CAROUSEL ARROWS
        ========================== -->

        <template v-if="hasMultipleImages">

          <button
            class="carousel-button carousel-previous"
            type="button"
            :aria-label="previousImageLabel"
            @click="previousImage"
          >
            ‹
          </button>


          <button
            class="carousel-button carousel-next"
            type="button"
            :aria-label="nextImageLabel"
            @click="nextImage"
          >
            ›
          </button>

        </template>


        <!-- =========================
             COUNTER
        ========================== -->

        <div
          v-if="hasMultipleImages"
          class="image-counter"
        >
          {{ currentImageNumber }}
          /
          {{ images.length }}
        </div>


        <!-- =========================
             DOTS
        ========================== -->

        <div
          v-if="hasMultipleImages"
          class="carousel-dots"
        >

          <button
            v-for="(_, imageIndex) in images"
            :key="imageIndex"
            type="button"
            class="carousel-dot"
            :class="{
              active:
                currentImage === imageIndex
            }"
            :aria-label="
              selectImageLabel(imageIndex)
            "
            @click="
              selectImage(imageIndex)
            "
          ></button>

        </div>

      </div>


      <!-- =========================
           FALLBACK
      ========================== -->

      <div
        v-else
        class="image-area image-placeholder"
      >

        <span class="placeholder-diamond">
          ◇
        </span>

        <span class="placeholder-text">
          Couaxia
        </span>

      </div>


      <!-- =========================
           DECORATIVE CORNERS
      ========================== -->

      <span class="corner corner-top-left"></span>

      <span class="corner corner-top-right"></span>

      <span class="corner corner-bottom-left"></span>

      <span class="corner corner-bottom-right"></span>

    </div>


    <!-- =========================
         CONTENT
    ========================== -->

    <div class="commission-content">


      <!-- =========================
           META
      ========================== -->

      <div class="commission-meta">

        <span
          v-if="commission.category"
          class="commission-category"
        >
          {{ commission.category }}
        </span>

        <span class="meta-diamond">
          ◇
        </span>

        <span>
          {{ $t('commissions.card.commission') }}
        </span>

      </div>


      <!-- =========================
           TITLE
      ========================== -->

      <h3>
        {{ commission.title }}
      </h3>


      <!-- =========================
           CREDIT
      ========================== -->

      <p
        v-if="commission.credit"
        class="commission-credit"
      >
        {{ commission.credit }}
      </p>


      <!-- =========================
           DESCRIPTION
      ========================== -->

      <p
        v-if="commission.description"
        class="commission-description"
      >
        {{ commission.description }}
      </p>


      <!-- =========================
           NOTICE
      ========================== -->

      <div
        v-if="commission.notice"
        class="commission-notice"
      >

        <span class="notice-icon">
          ✦
        </span>

        <p>
          {{ commission.notice }}
        </p>

      </div>


      <!-- =========================
           FEATURES
      ========================== -->

      <ul
        v-if="
          commission.features &&
          commission.features.length
        "
        class="commission-features"
      >

        <li
          v-for="feature in commission.features"
          :key="feature"
        >

          <span class="feature-icon">
            ✦
          </span>

          <span>
            {{ feature }}
          </span>

        </li>

      </ul>


      <!-- =========================
           BOTTOM
      ========================== -->

      <div class="commission-bottom">


        <!-- PRICE -->

        <div
          v-if="commission.price"
          class="commission-price"
        >

          <span class="price-label">

            {{
              commission.priceLabel ||
              $t('commissions.card.startingFrom')
            }}

          </span>

          <strong>
            {{ commission.price }}
          </strong>

        </div>


        <!-- KO-FI BUTTON -->

        <a
          v-if="commission.link"
          :href="commission.link"
          target="_blank"
          rel="noopener noreferrer"
          class="commission-button"
          :aria-label="orderLabel"
        >

          <span>
            {{ $t('commissions.card.order') }}
          </span>

          <span
            class="button-arrow"
            aria-hidden="true"
          >
            ↗
          </span>

        </a>

      </div>

    </div>


    <!-- =========================
         DECORATIVE STAR
    ========================== -->

    <span class="card-star">
      ✦
    </span>

  </article>

</template>


<style scoped>

/* =========================
   CARD
========================= */

.commission-card {

  position: relative;

  display: grid;

  grid-template-columns:
    minmax(0, 0.95fr)
    minmax(0, 1.05fr);

  min-height: 520px;

  overflow: hidden;

  border:
    1px solid
    rgba(255, 255, 255, 0.09);

  border-radius:
    var(--radius-large);

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.028),
      rgba(255, 79, 184, 0.018)
    );

  box-shadow:
    0 25px 80px
    rgba(0, 0, 0, 0.15);

  transition:
    transform 0.4s ease,
    border-color 0.4s ease,
    box-shadow 0.4s ease;

}


.commission-card:hover {

  transform:
    translateY(-6px);

  border-color:
    rgba(255, 155, 215, 0.28);

  box-shadow:
    0 35px 90px
    rgba(0, 0, 0, 0.22);

}


/* =========================
   ALTERNATE CARD
========================= */

.commission-card-reverse
.commission-visual {

  order: 2;

}


.commission-card-reverse
.commission-content {

  order: 1;

  padding:
    55px
    35px
    55px
    55px;

}


/* =========================
   VISUAL
========================= */

.commission-visual {

  position: relative;

  min-width: 0;

  min-height: 520px;

  padding:
    55px
    35px;

  display: flex;

  align-items: center;
  justify-content: center;

  overflow: hidden;

  background:
    radial-gradient(
      circle at center,
      rgba(255, 79, 184, 0.09),
      transparent 65%
    );

}


/* =========================
   GLOW
========================= */

.visual-glow {

  position: absolute;

  width: 380px;
  height: 380px;

  border-radius: 50%;

  background:
    radial-gradient(
      circle,
      rgba(255, 79, 184, 0.14),
      rgba(143, 76, 255, 0.07) 45%,
      transparent 70%
    );

  filter:
    blur(40px);

  pointer-events: none;

}


/* =========================
   NUMBER
========================= */

.visual-number {

  position: absolute;

  z-index: 15;

  left: 25px;
  top: 22px;

  color:
    rgba(255, 255, 255, 0.25);

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 0.8rem;

  font-style: italic;

  letter-spacing: 0.12em;

}


/* =========================
   IMAGE AREA
========================= */

.image-area {

  position: relative;

  z-index: 5;

  width: 100%;

  display: flex;

  align-items: center;
  justify-content: center;

}


/* =========================
   IMAGE FRAME
========================= */

.image-frame {

  position: relative;

  width: 100%;
  max-width: 440px;

  aspect-ratio: 1 / 1;

  overflow: hidden;

  border:
    1px solid
    rgba(255, 155, 215, 0.18);

  border-radius:
    24px;

  background:
    var(--color-background-card);

  box-shadow:
    0 25px 55px
    rgba(0, 0, 0, 0.25);

}


/* =========================
   IMAGE
========================= */

.commission-image {

  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  display: block;

  object-fit: contain;

  object-position: center;

  background:
    rgba(255, 255, 255, 0.02);

  user-select: none;

  transition:
    transform 0.65s ease;

}


.commission-card:hover
.commission-image {

  transform:
    scale(1.025);

}


/* =========================
   IMAGE OVERLAY
========================= */

.image-overlay {

  position: absolute;

  inset: 0;

  pointer-events: none;

  background:
    linear-gradient(
      180deg,
      transparent 65%,
      rgba(15, 9, 20, 0.65)
    );

}


/* =========================
   CATEGORY ON IMAGE
========================= */

.image-category {

  position: absolute;

  z-index: 4;

  left: 20px;
  bottom: 18px;

  padding:
    7px
    11px;

  border:
    1px solid
    rgba(255, 255, 255, 0.1);

  border-radius:
    999px;

  background:
    rgba(15, 9, 20, 0.7);

  color:
    var(--color-white);

  font-size: 0.58rem;

  font-weight: 700;

  letter-spacing: 0.14em;

  text-transform: uppercase;

  backdrop-filter:
    blur(10px);

}


/* =========================
   CAROUSEL BUTTONS
========================= */

.carousel-button {

  position: absolute;

  z-index: 20;

  top: 50%;

  width: 42px;
  height: 42px;

  display: flex;

  align-items: center;
  justify-content: center;

  border:
    1px solid
    rgba(255, 255, 255, 0.14);

  border-radius: 50%;

  background:
    rgba(15, 9, 20, 0.82);

  color:
    var(--color-white);

  font-family:
    Georgia,
    serif;

  font-size: 1.8rem;

  line-height: 1;

  box-shadow:
    0 8px 20px
    rgba(0, 0, 0, 0.25);

  transform:
    translateY(-50%);

  transition:
    background 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;

}


.carousel-button:hover {

  border-color:
    var(--color-pink);

  background:
    rgba(255, 79, 184, 0.2);

}


.carousel-previous {

  left: -18px;

}


.carousel-next {

  right: -18px;

}


/* =========================
   COUNTER
========================= */

.image-counter {

  position: absolute;

  z-index: 20;

  right: 12px;
  top: 12px;

  padding:
    6px
    10px;

  border:
    1px solid
    rgba(255, 255, 255, 0.1);

  border-radius:
    999px;

  background:
    rgba(15, 9, 20, 0.78);

  color:
    var(--color-white);

  font-size: 0.65rem;

  font-weight: 600;

  letter-spacing: 0.08em;

  backdrop-filter:
    blur(10px);

}


/* =========================
   DOTS
========================= */

.carousel-dots {

  position: absolute;

  z-index: 20;

  left: 50%;
  bottom: -30px;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 7px;

  transform:
    translateX(-50%);

}


.carousel-dot {

  width: 6px;
  height: 6px;

  padding: 0;

  border: none;

  border-radius: 50%;

  background:
    rgba(255, 255, 255, 0.25);

  cursor: pointer;

  transition:
    width 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;

}


.carousel-dot.active {

  width: 20px;

  border-radius: 999px;

  background:
    var(--color-pink);

  box-shadow:
    0 0 8px
    rgba(255, 79, 184, 0.5);

}


/* =========================
   IMAGE TRANSITION
========================= */

.commission-image-enter-active,
.commission-image-leave-active {

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;

}


.commission-image-enter-from {

  opacity: 0;

  transform:
    scale(1.03);

}


.commission-image-leave-to {

  opacity: 0;

  transform:
    scale(0.98);

}


/* =========================
   PLACEHOLDER
========================= */

.image-placeholder {

  min-height: 400px;

  flex-direction: column;

  gap: 12px;

  border:
    1px solid
    rgba(255, 155, 215, 0.12);

  border-radius:
    24px;

  background:
    rgba(255, 255, 255, 0.02);

}


.placeholder-diamond {

  color:
    var(--color-pink);

  font-family:
    Georgia,
    serif;

  font-size: 7rem;

  line-height: 0.8;

  text-shadow:
    0 0 25px
    rgba(255, 79, 184, 0.4);

}


.placeholder-text {

  color:
    var(--color-text-muted);

  font-size: 0.7rem;

  font-weight: 600;

  letter-spacing: 0.16em;

  text-transform: uppercase;

}


/* =========================
   CORNERS
========================= */

.corner {

  position: absolute;

  z-index: 6;

  width: 22px;
  height: 22px;

  pointer-events: none;

}


.corner-top-left {

  left: 18px;
  top: 18px;

  border-left:
    1px solid
    rgba(255, 155, 215, 0.35);

  border-top:
    1px solid
    rgba(255, 155, 215, 0.35);

}


.corner-top-right {

  right: 18px;
  top: 18px;

  border-right:
    1px solid
    rgba(255, 155, 215, 0.35);

  border-top:
    1px solid
    rgba(255, 155, 215, 0.35);

}


.corner-bottom-left {

  left: 18px;
  bottom: 18px;

  border-left:
    1px solid
    rgba(255, 155, 215, 0.35);

  border-bottom:
    1px solid
    rgba(255, 155, 215, 0.35);

}


.corner-bottom-right {

  right: 18px;
  bottom: 18px;

  border-right:
    1px solid
    rgba(255, 155, 215, 0.35);

  border-bottom:
    1px solid
    rgba(255, 155, 215, 0.35);

}


/* =========================
   CONTENT
========================= */

.commission-content {

  position: relative;

  z-index: 4;

  min-width: 0;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding:
    55px
    55px
    55px
    35px;

}


/* =========================
   META
========================= */

.commission-meta {

  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 9px;

  margin-bottom: 15px;

  color:
    var(--color-text-muted);

  font-size: 0.63rem;

  font-weight: 600;

  letter-spacing: 0.14em;

  text-transform: uppercase;

}


.commission-category {

  color:
    var(--color-pink-soft);

}


.meta-diamond {

  color:
    var(--color-pink);

  font-size: 0.85rem;

}


/* =========================
   TITLE
========================= */

.commission-content h3 {

  margin: 0;

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
      3.3rem
    );

  font-weight: 400;

  line-height: 1.05;

  letter-spacing: -0.035em;

}


/* =========================
   CREDIT
========================= */

.commission-credit {

  margin-top: 9px;

  color:
    var(--color-pink-soft);

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 0.86rem;

  font-style: italic;

  opacity: 0.85;

}


/* =========================
   DESCRIPTION
========================= */

.commission-description {

  max-width: 540px;

  margin-top: 20px;

  color:
    var(--color-text-muted);

  font-size: 0.92rem;

  line-height: 1.8;

}


/* =========================
   NOTICE
========================= */

.commission-notice {

  display: flex;

  align-items: flex-start;

  gap: 10px;

  margin-top: 22px;

  padding:
    13px
    15px;

  border-left:
    2px solid
    var(--color-pink);

  background:
    rgba(255, 79, 184, 0.045);

}


.notice-icon {

  flex-shrink: 0;

  margin-top: 2px;

  color:
    var(--color-pink);

  font-size: 0.7rem;

}


.commission-notice p {

  color:
    var(--color-text);

  font-size: 0.75rem;

  line-height: 1.6;

}


/* =========================
   FEATURES
========================= */

.commission-features {

  display: grid;

  grid-template-columns:
    repeat(
      2,
      minmax(0, 1fr)
    );

  gap:
    10px
    18px;

  margin:
    25px
    0
    0;

  padding: 0;

  list-style: none;

}


.commission-features li {

  display: flex;

  align-items: flex-start;

  gap: 8px;

  min-width: 0;

  color:
    var(--color-text);

  font-size: 0.76rem;

  line-height: 1.5;

}


.feature-icon {

  flex-shrink: 0;

  margin-top: 2px;

  color:
    var(--color-pink);

  font-size: 0.58rem;

  text-shadow:
    0 0 8px
    rgba(255, 79, 184, 0.5);

}


/* =========================
   BOTTOM
========================= */

.commission-bottom {

  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  gap: 25px;

  margin-top: 35px;

  padding-top: 25px;

  border-top:
    1px solid
    rgba(255, 255, 255, 0.07);

}


/* =========================
   PRICE
========================= */

.commission-price {

  display: flex;

  flex-direction: column;

  gap: 5px;

}


.price-label {

  color:
    var(--color-text-muted);

  font-size: 0.62rem;

  font-weight: 600;

  letter-spacing: 0.12em;

  text-transform: uppercase;

}


.commission-price strong {

  color:
    var(--color-white);

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size: 2rem;

  font-weight: 400;

}


/* =========================
   BUTTON
========================= */

.commission-button {

  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 10px;

  min-height: 46px;

  padding:
    0
    21px;

  border:
    1px solid
    rgba(255, 155, 215, 0.25);

  border-radius:
    999px;

  background:
    linear-gradient(
      135deg,
      rgba(143, 76, 255, 0.12),
      rgba(255, 79, 184, 0.12)
    );

  color:
    var(--color-white);

  font-size: 0.72rem;

  font-weight: 700;

  letter-spacing: 0.06em;

  text-transform: uppercase;

  white-space: nowrap;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease,
    box-shadow 0.3s ease;

}


.commission-button:hover {

  transform:
    translateY(-2px);

  border-color:
    rgba(255, 155, 215, 0.6);

  background:
    linear-gradient(
      135deg,
      rgba(143, 76, 255, 0.25),
      rgba(255, 79, 184, 0.25)
    );

  box-shadow:
    0 12px 25px
    rgba(255, 79, 184, 0.1);

}


.button-arrow {

  color:
    var(--color-pink);

  font-size: 0.95rem;

  transition:
    transform 0.3s ease;

}


.commission-button:hover
.button-arrow {

  transform:
    translate(
      3px,
      -3px
    );

}


/* =========================
   STAR
========================= */

.card-star {

  position: absolute;

  z-index: 25;

  right: 25px;
  top: 22px;

  color:
    var(--color-pink-soft);

  font-size: 0.85rem;

  opacity: 0.5;

  pointer-events: none;

  text-shadow:
    0 0 10px
    rgba(255, 79, 184, 0.6);

  animation:
    cardStar
    3s
    ease-in-out
    infinite;

}


/* =========================
   STAR ANIMATION
========================= */

@keyframes cardStar {

  0%,
  100% {

    opacity: 0.25;

    transform:
      scale(0.8)
      rotate(0deg);

  }


  50% {

    opacity: 0.8;

    transform:
      scale(1.1)
      rotate(10deg);

  }

}


/* =========================
   TABLET
========================= */

@media (max-width: 900px) {

  .commission-card {

    grid-template-columns:
      1fr;

  }


  .commission-card-reverse
  .commission-visual,
  .commission-card-reverse
  .commission-content {

    order: initial;

  }


  .commission-visual {

    min-height: 520px;

    padding:
      55px
      50px;

  }


  .image-frame {

    max-width: 430px;

  }


  .commission-content,
  .commission-card-reverse
  .commission-content {

    padding:
      25px
      45px
      50px;

  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {

  .commission-card {

    min-height: auto;

  }


  .commission-visual {

    min-height: 390px;

    padding:
      55px
      30px;

  }


  .image-frame {

    max-width: 310px;

    border-radius: 18px;

  }


  .carousel-button {

    width: 38px;
    height: 38px;

    font-size: 1.5rem;

  }


  .carousel-previous {

    left: -15px;

  }


  .carousel-next {

    right: -15px;

  }


  .commission-content,
  .commission-card-reverse
  .commission-content {

    padding:
      15px
      25px
      35px;

  }


  .commission-content h3 {

    font-size:
      clamp(
        2rem,
        10vw,
        2.8rem
      );

  }


  .commission-features {

    grid-template-columns:
      1fr;

  }


  .commission-bottom {

    align-items: stretch;

    flex-direction: column;

  }


  .commission-button {

    width: 100%;

  }


  .image-category {

    left: 12px;
    bottom: 12px;

  }

}


/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 400px) {

  .commission-visual {

    min-height: 340px;

    padding:
      50px
      25px;

  }


  .commission-content,
  .commission-card-reverse
  .commission-content {

    padding:
      10px
      20px
      30px;

  }


  .carousel-previous {

    left: -12px;

  }


  .carousel-next {

    right: -12px;

  }

}


/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {

  .commission-card,
  .commission-image,
  .carousel-button,
  .carousel-dot,
  .commission-button,
  .button-arrow {

    transition: none;

  }


  .card-star {

    animation: none;

  }


  .commission-image-enter-active,
  .commission-image-leave-active {

    transition: none;

  }

}

</style>