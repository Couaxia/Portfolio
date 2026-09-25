<script setup>
/* =========================
   TERMS
========================= */

const terms = [
  {
    number: '01',
    title: 'Commandes & paiement',
    icon: '◇',
    paragraphs: [
      `Toutes les commandes sont réalisées et payées via Ko-fi, sauf accord contraire préalable.`,
      `Pour certaines commissions, notamment les emotes YCH, je demande à être contactée avant de passer commande afin de vérifier ensemble que votre demande peut être réalisée.`,
      `Le travail commence après réception du paiement et de toutes les informations nécessaires à la réalisation de la commande.`
    ]
  },

  {
    number: '02',
    title: 'Délais',
    icon: '✦',
    paragraphs: [
      `Aucun délai précis n'est garanti sauf accord préalable. Je travaille à mon rythme et je vous tiens informé(e) de l'avancement de votre commande.`,
      `Si vous avez besoin de votre commande avant une date particulière, merci de me contacter avant de commander afin que je puisse vous confirmer si cela est possible.`,
      `Un retard causé par l'absence d'informations, de références ou de réponse du client peut également repousser la livraison.`
    ]
  },

  {
    number: '03',
    title: 'Modifications',
    icon: '◇',
    paragraphs: [
      `Les modifications souhaitées doivent être communiquées le plus clairement possible pendant la réalisation de la commande.`,
      `Les petites corrections permettant de respecter la demande initiale peuvent être réalisées pendant le processus de création.`,
      `Une modification importante changeant la demande initiale, le concept ou une partie déjà validée pourra nécessiter un supplément ou une nouvelle commande.`
    ]
  },

  {
    number: '04',
    title: 'Annulations & remboursements',
    icon: '✦',
    paragraphs: [
      `En raison du caractère personnalisé des commissions, les possibilités d'annulation ou de remboursement peuvent dépendre de l'état d'avancement de la commande et des règles applicables à la transaction.`,
      `Merci de me contacter le plus rapidement possible en cas de problème avec une commande.`,
      `Aucune disposition des présentes conditions n'a pour objet de supprimer les droits dont vous bénéficiez obligatoirement en vertu de la législation applicable.`
    ]
  },

  {
    number: '05',
    title: 'Emotes YCH',
    icon: '◇',
    paragraphs: [
      `Certaines de mes commissions d'emotes sont réalisées à partir de bases YCH créées par d'autres artistes.`,
      `L'achat de la commission correspond à mon travail de personnalisation de la base selon votre personnage, vos couleurs et votre demande. Il ne vous donne aucun droit de propriété sur la base YCH originale.`,
      `Les bases originales ne sont jamais incluses dans les fichiers livrés et ne doivent pas être revendues, partagées ou redistribuées.`
    ]
  },

  {
    number: '06',
    title: 'Sites web personnalisés',
    icon: '○',
    paragraphs: [
      `Pour une commission de site web personnalisé, le client doit fournir les informations et ressources nécessaires au projet : textes, liens, images, avatar, logo, couleurs, références et autres éléments demandés.`,
      `Le client doit disposer des droits ou autorisations nécessaires pour utiliser les images, illustrations, logos, polices ou autres ressources qu'il me fournit.`,
      `Les fonctionnalités, animations, effets et éléments interactifs réalisés dépendent de la formule et de la demande convenue lors de la commande.`,
      `Toute fonctionnalité ou modification importante qui n'était pas prévue dans la demande initiale pourra faire l'objet d'un supplément.`
    ]
  },

  {
    number: '07',
    title: 'Droits d’utilisation',
    icon: '✦',
    paragraphs: [
      `L'achat d'une commission vous accorde les droits d'utilisation prévus pour la prestation commandée, mais ne constitue pas automatiquement un transfert de propriété intellectuelle sur la création.`,
      `Vous ne pouvez pas revendiquer la création comme étant entièrement votre propre travail, ni revendre ou redistribuer les fichiers numériques de la commission comme un produit indépendant.`,
      `Les droits appartenant aux créateurs des ressources tierces utilisées, notamment les bases YCH, restent également applicables.`
    ]
  },

  {
    number: '08',
    title: 'Portfolio & réseaux sociaux',
    icon: '◇',
    paragraphs: [
      `Je peux présenter une création terminée dans mon portfolio, sur mon site ou sur mes réseaux sociaux afin de montrer mon travail.`,
      `Je peux également partager des aperçus ou des étapes de création pendant la réalisation.`,
      `Si votre commande doit rester privée, s'il s'agit d'un cadeau ou si elle ne doit pas être publiée avant une certaine date, merci de me le préciser à l'avance. Je respecterai votre demande.`
    ]
  },

  {
    number: '09',
    title: 'Refus d’une commande',
    icon: '✦',
    paragraphs: [
      `Je me réserve le droit de refuser une demande avant son acceptation si elle ne correspond pas à mes compétences, aux services proposés ou à ce que je souhaite réaliser.`,
      `Une commande ne doit pas être considérée comme acceptée uniquement parce qu'un premier échange a eu lieu.`
    ]
  },

  {
    number: '10',
    title: 'Responsabilité du client',
    icon: '◇',
    paragraphs: [
      `Le client est responsable de l'exactitude des informations, références, textes et fichiers qu'il transmet pour la réalisation de sa commande.`,
      `Le client doit signaler les erreurs ou modifications souhaitées pendant la phase de création lorsqu'elles peuvent encore être corrigées.`,
      `Le client est également responsable de disposer des autorisations nécessaires concernant les ressources qu'il me demande d'utiliser.`
    ]
  },

  {
    number: '11',
    title: 'Livraison des fichiers',
    icon: '✦',
    paragraphs: [
      `Les commissions sont des produits numériques. Aucun produit physique n'est envoyé sauf si cela est explicitement indiqué dans l'offre.`,
      `Les fichiers sont livrés dans les formats prévus par la commission. Pour les emotes, cela peut notamment comprendre des fichiers PNG ou GIF selon la demande.`,
      `Si des dimensions particulières sont nécessaires, elles doivent être précisées pendant la commande.`
    ]
  },

  {
    number: '12',
    title: 'Acceptation des conditions',
    icon: '◇',
    paragraphs: [
      `En passant commande, vous reconnaissez avoir pris connaissance des présentes conditions ainsi que des informations spécifiques indiquées sur la commission choisie.`,
      `Ces conditions peuvent être mises à jour afin de tenir compte de l'évolution de mes services. Les conditions applicables à une commande sont celles communiquées au moment de celle-ci.`
    ]
  }
]


/* =========================
   MERCH PRICES
========================= */

const merchPrices = [
  {
    creator: 'takiimikiku',
    offer: '1 emote',
    normal: '2 €',
    license: '+0,40 €',
    total: '2,40 €'
  },

  {
    creator: 'takiimikiku',
    offer: '5 emotes',
    normal: '8 €',
    license: '+1,60 €',
    total: '9,60 €'
  },

  {
    creator: 'Nicopiyo',
    offer: '1 emote',
    normal: '3 €',
    license: '+0,60 €',
    total: '3,60 €'
  },

  {
    creator: 'Nicopiyo',
    offer: '5 emotes',
    normal: '12 €',
    license: '+2,40 €',
    total: '14,40 €'
  }
]
</script>


<template>

  <section class="terms-page">


    <!-- =========================
         BACKGROUND
    ========================== -->

    <div class="background-glow glow-one"></div>
    <div class="background-glow glow-two"></div>
    <div class="background-glow glow-three"></div>

    <div class="orbit orbit-one"></div>
    <div class="orbit orbit-two"></div>

    <span class="background-star star-one">✦</span>
    <span class="background-star star-two">✧</span>
    <span class="background-star star-three">✦</span>


    <div class="terms-container">


      <!-- =========================
           HERO
      ========================== -->

      <header class="terms-header">

        <span class="section-label">
          ✦ TERMS OF SERVICE ✦
        </span>

        <h1>
          Conditions de
          <span>commission.</span>
        </h1>

        <p class="hero-description">
          Retrouvez ici les conditions applicables à mes
          commissions, les droits d'utilisation ainsi que les
          informations importantes à connaître avant de passer
          commande.
        </p>

        <div class="last-update">

          <span class="update-dot"></span>

          Dernière mise à jour :
          septembre 2026

        </div>

      </header>


      <!-- =========================
           IMPORTANT
      ========================== -->

      <div class="important-card">

        <div class="important-icon">
          ✦
        </div>

        <div>

          <span class="important-label">
            IMPORTANT
          </span>

          <h2>
            Avant de commander
          </h2>

          <p>
            En passant commande auprès de Couaxia, vous
            reconnaissez avoir pris connaissance des présentes
            conditions ainsi que des informations spécifiques
            à la commission choisie.
          </p>

        </div>

      </div>


      <!-- =========================
           TERMS INTRO
      ========================== -->

      <div class="terms-introduction">

        <span class="small-label">
          CONDITIONS
        </span>

        <h2>
          Quelques règles pour
          <span>bien travailler ensemble.</span>
        </h2>

        <p>
          Ces conditions permettent de définir clairement le
          fonctionnement de mes commissions et les droits de
          chacun.
        </p>

      </div>


      <!-- =========================
           TERMS LIST
      ========================== -->

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

              <h3>
                {{ term.title }}
              </h3>

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


      <!-- =========================
           COMMERCIAL / MERCH
      ========================== -->

      <section class="merch-section">

        <div class="merch-heading">

          <span class="small-label">
            UTILISATION COMMERCIALE
          </span>

          <h2>
            Licence
            <span>Merchandising.</span>
          </h2>

          <p>
            Vous souhaitez utiliser vos emotes sur des produits
            que vous allez vendre ? Une licence supplémentaire
            est nécessaire.
          </p>

        </div>


        <div class="merch-license-card">


          <!-- LEFT -->

          <div class="merch-percentage">

            <span class="percentage-decoration">
              ✦
            </span>

            <strong>
              +20%
            </strong>

            <span>
              du prix de la commission
            </span>

          </div>


          <!-- RIGHT -->

          <div class="merch-description">

            <h3>
              Utiliser vos emotes sur votre merch
            </h3>

            <p>
              Le tarif standard d'une commission d'emote
              comprend son utilisation sur vos plateformes de
              streaming, vos réseaux sociaux et vos espaces
              communautaires.
            </p>

            <p>
              Si vous souhaitez utiliser l'emote sur des
              <strong>produits destinés à la vente</strong>,
              comme des stickers, vêtements, mugs,
              porte-clés, prints ou autres produits dérivés,
              une licence Merchandising correspondant à
              <strong>+20 % du prix total de la commission</strong>
              est nécessaire.
            </p>

            <p>
              Cette licence autorise l'utilisation commerciale
              de l'emote commandée sur des produits dérivés.
              Elle ne constitue pas un transfert de propriété
              intellectuelle et n'autorise pas la revente ou
              la redistribution des fichiers numériques ou des
              bases YCH.
            </p>

          </div>

        </div>


        <!-- =========================
             WHAT IS ALLOWED
        ========================== -->

        <div class="merch-rights">

          <div class="rights-column allowed">

            <span class="rights-label">
              AVEC LA LICENCE
            </span>

            <h3>
              Vous pouvez
            </h3>

            <ul>

              <li>
                <span>✓</span>
                Vendre des stickers utilisant l'emote
              </li>

              <li>
                <span>✓</span>
                L'utiliser sur des vêtements
              </li>

              <li>
                <span>✓</span>
                Créer des mugs ou porte-clés
              </li>

              <li>
                <span>✓</span>
                Créer des prints et autres produits dérivés
              </li>

            </ul>

          </div>


          <div class="rights-column forbidden">

            <span class="rights-label">
              MÊME AVEC LA LICENCE
            </span>

            <h3>
              Vous ne pouvez pas
            </h3>

            <ul>

              <li>
                <span>×</span>
                Revendre le fichier numérique de l'emote
              </li>

              <li>
                <span>×</span>
                Redistribuer la base YCH originale
              </li>

              <li>
                <span>×</span>
                Revendiquer la base comme votre création
              </li>

              <li>
                <span>×</span>
                Revendre ou partager les fichiers sources
              </li>

            </ul>

          </div>

        </div>

      </section>


      <!-- =========================
           YCH CREDITS
      ========================== -->

      <section class="ych-section">

        <div class="ych-heading">

          <span class="small-label">
            BASES YCH
          </span>

          <h2>
            Crédits &
            <span>conditions.</span>
          </h2>

        </div>


        <div class="ych-grid">


          <!-- NICOPIYO -->

          <article class="ych-card">

            <div class="ych-top">

              <span class="ych-symbol">
                ◇
              </span>

              <span class="ych-type">
                YCH BASE
              </span>

            </div>

            <h3>
              Nicopiyo
            </h3>

            <p>
              Les bases utilisées autorisent les commissions
              ainsi que les usages personnels, commerciaux et
              merchandising.
            </p>

            <ul>

              <li>
                <span>✓</span>
                Usage personnel
              </li>

              <li>
                <span>✓</span>
                Usage commercial / contenu
              </li>

              <li>
                <span>✓</span>
                Merchandising
              </li>

              <li>
                <span>✓</span>
                Modification de la base
              </li>

              <li class="special">
                <span>✦</span>
                Crédit demandé : _Nicopiyo
              </li>

              <li class="forbidden-item">
                <span>×</span>
                Utilisation avec l'IA interdite
              </li>

            </ul>

          </article>


          <!-- TAKIIMIKIKU -->

          <article class="ych-card">

            <div class="ych-top">

              <span class="ych-symbol">
                ◇
              </span>

              <span class="ych-type">
                YCH BASE
              </span>

            </div>

            <h3>
              takiimikiku
            </h3>

            <p>
              Les bases peuvent être utilisées et modifiées
              pour des commissions et des usages commerciaux,
              conformément aux conditions de leur créatrice.
            </p>

            <ul>

              <li>
                <span>✓</span>
                Usage personnel
              </li>

              <li>
                <span>✓</span>
                Usage commercial
              </li>

              <li>
                <span>✓</span>
                Commissions
              </li>

              <li>
                <span>✓</span>
                Modification de la base
              </li>

              <li class="special">
                <span>✦</span>
                Crédit demandé : takiimikiku
              </li>

              <li class="forbidden-item">
                <span>×</span>
                Revente ou redistribution de la base interdite
              </li>

            </ul>

          </article>

        </div>


        <div class="ych-note">

          <span>
            ✦
          </span>

          <p>
            Les conditions imposées par les créateurs des bases
            YCH restent applicables en complément de mes
            propres conditions de commission.
          </p>

        </div>

      </section>


      <!-- =========================
           PRICE TABLE
      ========================== -->

      <section class="price-section">

        <div class="price-heading">

          <span class="small-label">
            RÉCAPITULATIF
          </span>

          <h2>
            Tarifs &
            <span>licence Merch.</span>
          </h2>

          <p>
            Le supplément Merchandising correspond à
            <strong>20 % du prix de la commission d'emote.</strong>
          </p>

        </div>


        <!-- DESKTOP TABLE -->

        <div class="price-table-wrapper">

          <table class="price-table">

            <thead>

              <tr>

                <th>
                  Commission
                </th>

                <th>
                  Tarif standard
                </th>

                <th>
                  Licence Merch
                </th>

                <th>
                  Total avec Merch
                </th>

              </tr>

            </thead>


            <tbody>

              <tr
                v-for="price in merchPrices"
                :key="`${price.creator}-${price.offer}`"
              >

                <td>

                  <div class="table-commission">

                    <span class="table-diamond">
                      ◇
                    </span>

                    <div>

                      <strong>
                        {{ price.creator }}
                      </strong>

                      <span>
                        {{ price.offer }}
                      </span>

                    </div>

                  </div>

                </td>


                <td>
                  {{ price.normal }}
                </td>


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

              <span>
                ◇
              </span>

              <div>

                <strong>
                  {{ price.creator }}
                </strong>

                <small>
                  {{ price.offer }}
                </small>

              </div>

            </div>


            <div class="mobile-price-row">

              <span>
                Tarif standard
              </span>

              <strong>
                {{ price.normal }}
              </strong>

            </div>


            <div class="mobile-price-row">

              <span>
                Licence Merch +20 %
              </span>

              <strong class="pink-price">
                {{ price.license }}
              </strong>

            </div>


            <div class="mobile-price-total">

              <span>
                Total
              </span>

              <strong>
                {{ price.total }}
              </strong>

            </div>

          </article>

        </div>


        <!-- TABLE NOTE -->

        <div class="price-note">

          <span class="price-note-icon">
            ✦
          </span>

          <div>

            <strong>
              À quoi correspond la licence Merch ?
            </strong>

            <p>
              Elle vous permet d'utiliser l'emote commandée
              sur des produits destinés à la vente. Elle ne
              permet pas de revendre ou redistribuer les
              fichiers numériques ou les bases YCH.
            </p>

          </div>

        </div>

      </section>


      <!-- =========================
           FINAL CTA
      ========================== -->

      <section class="terms-cta">

        <span class="cta-star">
          ✦
        </span>

        <span class="small-label">
          UNE QUESTION ?
        </span>

        <h2>
          Un doute avant de
          <span>commander ?</span>
        </h2>

        <p>
          Si vous avez une question concernant votre projet,
          son utilisation ou les droits dont vous avez besoin,
          contactez-moi avant de passer commande.
        </p>

        <RouterLink
          to="/contact"
          class="contact-button"
        >
          Me contacter

          <span>
            →
          </span>
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

  padding:
    150px
    0
    100px;

  overflow: hidden;

  background:
    var(--color-background);
}


.terms-container {
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

  filter:
    blur(100px);

  pointer-events: none;
}


.glow-one {
  width: 550px;
  height: 550px;

  right: -250px;
  top: 150px;

  background:
    rgba(255, 79, 184, 0.07);
}


.glow-two {
  width: 600px;
  height: 600px;

  left: -300px;
  top: 1600px;

  background:
    rgba(143, 76, 255, 0.07);
}


.glow-three {
  width: 500px;
  height: 500px;

  right: -250px;
  bottom: 700px;

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
  width: 650px;
  height: 350px;

  right: -300px;
  top: 350px;

  transform:
    rotate(-25deg);
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

  color:
    var(--color-pink-soft);

  pointer-events: none;

  text-shadow:
    0 0 15px
    rgba(255, 79, 184, 0.6);

  animation:
    twinkle
    3s
    ease-in-out
    infinite;
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

  color:
    var(--color-pink-soft);

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

  margin:
    0
    auto
    110px;

  text-align: center;
}


.section-label {
  margin-bottom: 25px;
}


.terms-header h1 {
  margin: 0;

  color:
    var(--color-white);

  font-family:
    Georgia,
    'Times New Roman',
    serif;

  font-size:
    clamp(
      3.2rem,
      7vw,
      6.5rem
    );

  font-weight: 400;

  line-height: 0.95;

  letter-spacing: -0.055em;
}


.terms-header h1 span {
  display: block;

  margin-top: 10px;

  color:
    var(--color-pink);

  font-style: italic;

  text-shadow:
    0 0 35px
    rgba(255, 79, 184, 0.18);
}


.hero-description {
  max-width: 680px;

  margin:
    35px
    auto
    25px;

  color:
    var(--color-text-muted);

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

  padding:
    8px
    14px;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  border-radius: 999px;

  color:
    var(--color-text-muted);

  font-size: 0.68rem;

  letter-spacing: 0.06em;
}


.update-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background:
    var(--color-pink);

  box-shadow:
    0 0 8px
    var(--color-pink);
}


/* =========================
   IMPORTANT
========================= */

.important-card {
  position: relative;

  display: grid;

  grid-template-columns:
    auto
    1fr;

  gap: 25px;

  max-width: 900px;

  margin:
    0
    auto
    150px;

  padding:
    35px
    40px;

  overflow: hidden;

  border:
    1px solid
    rgba(255, 155, 215, 0.2);

  border-radius:
    var(--radius-medium);

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

  border:
    1px solid
    rgba(255, 155, 215, 0.2);

  border-radius: 50%;

  color:
    var(--color-pink);

  box-shadow:
    0 0 25px
    rgba(255, 79, 184, 0.1);
}


.important-label {
  color:
    var(--color-pink-soft);

  font-size: 0.62rem;

  font-weight: 700;

  letter-spacing: 0.18em;
}


.important-card h2 {
  margin:
    6px
    0
    10px;

  color:
    var(--color-white);

  font-family:
    Georgia,
    serif;

  font-size: 1.6rem;

  font-weight: 400;
}


.important-card p {
  color:
    var(--color-text-muted);

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
      4.5rem
    );

  font-weight: 400;

  line-height: 1.05;

  letter-spacing: -0.045em;
}


.terms-introduction h2 span,
.merch-heading h2 span,
.ych-heading h2 span,
.price-heading h2 span,
.terms-cta h2 span {
  color:
    var(--color-pink);

  font-style: italic;
}


.terms-introduction p,
.merch-heading p,
.price-heading p {
  max-width: 650px;

  margin-top: 20px;

  color:
    var(--color-text-muted);

  line-height: 1.8;
}


/* =========================
   TERMS LIST
========================= */

.terms-list {
  margin-bottom: 180px;

  border-top:
    1px solid
    rgba(255, 255, 255, 0.08);
}


.term-card {
  display: grid;

  grid-template-columns:
    120px
    1fr;

  gap: 35px;

  padding:
    45px
    20px;

  border-bottom:
    1px solid
    rgba(255, 255, 255, 0.08);

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
  color:
    rgba(255, 155, 215, 0.32);

  font-family:
    Georgia,
    serif;

  font-size: 2.4rem;

  font-style: italic;
}


.term-title {
  display: flex;

  align-items: center;

  gap: 12px;
}


.term-icon {
  color:
    var(--color-pink);

  font-size: 0.8rem;
}


.term-title h3 {
  color:
    var(--color-white);

  font-family:
    Georgia,
    serif;

  font-size: 1.6rem;

  font-weight: 400;
}


.term-paragraphs {
  max-width: 780px;

  margin-top: 18px;
}


.term-paragraphs p {
  color:
    var(--color-text-muted);

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


/* =========================
   MERCH LICENSE CARD
========================= */

.merch-license-card {
  display: grid;

  grid-template-columns:
    0.7fr
    1.3fr;

  gap: 60px;

  align-items: center;

  padding:
    55px;

  border:
    1px solid
    rgba(255, 155, 215, 0.18);

  border-radius:
    var(--radius-large);

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
  color:
    var(--color-pink);

  margin-bottom: 10px;
}


.merch-percentage strong {
  color:
    var(--color-pink);

  font-family:
    Georgia,
    serif;

  font-size:
    clamp(
      4rem,
      8vw,
      7rem
    );

  font-weight: 400;

  line-height: 1;

  text-shadow:
    0 0 40px
    rgba(255, 79, 184, 0.15);
}


.merch-percentage > span:last-child {
  margin-top: 10px;

  color:
    var(--color-text-muted);

  font-size: 0.7rem;

  letter-spacing: 0.1em;

  text-transform: uppercase;
}


.merch-description h3 {
  margin-bottom: 20px;

  color:
    var(--color-white);

  font-family:
    Georgia,
    serif;

  font-size: 1.8rem;

  font-weight: 400;
}


.merch-description p {
  color:
    var(--color-text-muted);

  font-size: 0.9rem;

  line-height: 1.8;
}


.merch-description p + p {
  margin-top: 15px;
}


.merch-description strong {
  color:
    var(--color-white);
}


/* =========================
   MERCH RIGHTS
========================= */

.merch-rights {
  display: grid;

  grid-template-columns:
    repeat(
      2,
      1fr
    );

  gap: 20px;

  margin-top: 20px;
}


.rights-column {
  padding:
    35px;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  border-radius:
    var(--radius-medium);

  background:
    rgba(255, 255, 255, 0.018);
}


.rights-label {
  color:
    var(--color-pink-soft);

  font-size: 0.6rem;

  font-weight: 700;

  letter-spacing: 0.16em;
}


.rights-column h3 {
  margin:
    8px
    0
    20px;

  color:
    var(--color-white);

  font-family:
    Georgia,
    serif;

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

  color:
    var(--color-text-muted);

  font-size: 0.82rem;

  line-height: 1.55;
}


.allowed li span {
  color:
    var(--color-pink);
}


.forbidden li span {
  color:
    var(--color-purple);
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

  grid-template-columns:
    repeat(
      2,
      1fr
    );

  gap: 25px;
}


.ych-card {
  position: relative;

  padding:
    40px;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  border-radius:
    var(--radius-large);

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
  transform:
    translateY(-5px);

  border-color:
    rgba(255, 155, 215, 0.25);
}


.ych-top {
  display: flex;

  align-items: center;

  gap: 10px;

  margin-bottom: 20px;
}


.ych-symbol {
  color:
    var(--color-pink);

  font-size: 1.5rem;
}


.ych-type {
  color:
    var(--color-text-muted);

  font-size: 0.6rem;

  font-weight: 700;

  letter-spacing: 0.16em;
}


.ych-card h3 {
  color:
    var(--color-white);

  font-family:
    Georgia,
    serif;

  font-size: 2rem;

  font-weight: 400;
}


.ych-card > p {
  margin:
    15px
    0
    25px;

  color:
    var(--color-text-muted);

  font-size: 0.85rem;

  line-height: 1.75;
}


.ych-card li span {
  color:
    var(--color-pink);
}


.ych-card .special {
  color:
    var(--color-white);
}


.ych-card .forbidden-item span {
  color:
    var(--color-purple);
}


/* =========================
   YCH NOTE
========================= */

.ych-note {
  display: flex;

  align-items: flex-start;

  gap: 12px;

  margin-top: 25px;

  padding:
    20px
    25px;

  border-left:
    2px solid
    var(--color-pink);

  background:
    rgba(255, 79, 184, 0.035);
}


.ych-note span {
  color:
    var(--color-pink);
}


.ych-note p {
  color:
    var(--color-text-muted);

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
  color:
    var(--color-white);
}


/* =========================
   TABLE
========================= */

.price-table-wrapper {
  overflow: hidden;

  border:
    1px solid
    rgba(255, 255, 255, 0.09);

  border-radius:
    var(--radius-large);

  background:
    rgba(255, 255, 255, 0.018);
}


.price-table {
  width: 100%;

  border-collapse: collapse;
}


.price-table th {
  padding:
    20px
    25px;

  border-bottom:
    1px solid
    rgba(255, 255, 255, 0.09);

  color:
    var(--color-text-muted);

  font-size: 0.62rem;

  font-weight: 700;

  letter-spacing: 0.12em;

  text-align: left;

  text-transform: uppercase;
}


.price-table td {
  padding:
    24px
    25px;

  border-bottom:
    1px solid
    rgba(255, 255, 255, 0.06);

  color:
    var(--color-text);

  font-size: 0.85rem;
}


.price-table tbody tr:last-child td {
  border-bottom: none;
}


.price-table tbody tr {
  transition:
    background 0.3s ease;
}


.price-table tbody tr:hover {
  background:
    rgba(255, 79, 184, 0.035);
}


.table-commission {
  display: flex;

  align-items: center;

  gap: 13px;
}


.table-diamond {
  color:
    var(--color-pink);

  font-size: 1.3rem;
}


.table-commission div {
  display: flex;

  flex-direction: column;

  gap: 4px;
}


.table-commission strong {
  color:
    var(--color-white);

  font-family:
    Georgia,
    serif;

  font-size: 1rem;

  font-weight: 400;
}


.table-commission div span {
  color:
    var(--color-text-muted);

  font-size: 0.68rem;
}


.merch-extra {
  color:
    var(--color-pink) !important;

  font-weight: 600;
}


.final-price {
  color:
    var(--color-white) !important;

  font-family:
    Georgia,
    serif;

  font-size:
    1.25rem !important;
}


/* =========================
   MOBILE PRICE CARDS
========================= */

.price-mobile {
  display: none;
}


.price-mobile-card {
  padding:
    25px;

  border:
    1px solid
    rgba(255, 255, 255, 0.08);

  border-radius:
    var(--radius-medium);

  background:
    rgba(255, 255, 255, 0.018);
}


.mobile-card-heading {
  display: flex;

  align-items: center;

  gap: 12px;

  margin-bottom: 20px;
}


.mobile-card-heading > span {
  color:
    var(--color-pink);

  font-size: 1.5rem;
}


.mobile-card-heading div {
  display: flex;

  flex-direction: column;
}


.mobile-card-heading strong {
  color:
    var(--color-white);

  font-family:
    Georgia,
    serif;

  font-size: 1.2rem;

  font-weight: 400;
}


.mobile-card-heading small {
  color:
    var(--color-text-muted);
}


.mobile-price-row,
.mobile-price-total {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 20px;

  padding:
    12px
    0;

  border-top:
    1px solid
    rgba(255, 255, 255, 0.06);

  color:
    var(--color-text-muted);

  font-size: 0.78rem;
}


.mobile-price-row strong {
  color:
    var(--color-white);
}


.mobile-price-row
.pink-price {
  color:
    var(--color-pink);
}


.mobile-price-total {
  margin-top: 5px;

  padding-top: 17px;

  color:
    var(--color-white);
}


.mobile-price-total strong {
  color:
    var(--color-pink-soft);

  font-family:
    Georgia,
    serif;

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

  padding:
    25px;

  border:
    1px solid
    rgba(255, 155, 215, 0.1);

  border-radius:
    var(--radius-medium);

  background:
    rgba(255, 79, 184, 0.025);
}


.price-note-icon {
  color:
    var(--color-pink);
}


.price-note strong {
  display: block;

  margin-bottom: 6px;

  color:
    var(--color-white);

  font-family:
    Georgia,
    serif;

  font-weight: 400;
}


.price-note p {
  color:
    var(--color-text-muted);

  font-size: 0.78rem;

  line-height: 1.7;
}


/* =========================
   CTA
========================= */

.terms-cta {
  max-width: 900px;

  margin-inline: auto;

  padding:
    85px
    55px;

  border:
    1px solid
    rgba(255, 155, 215, 0.13);

  border-radius:
    var(--radius-large);

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

  color:
    var(--color-pink);

  font-size: 1.6rem;

  text-shadow:
    0 0 18px
    rgba(255, 79, 184, 0.6);
}


.terms-cta p {
  max-width: 550px;

  margin:
    25px
    auto
    35px;

  color:
    var(--color-text-muted);

  line-height: 1.8;
}


.contact-button {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 10px;

  min-height: 48px;

  padding:
    0
    25px;

  border:
    1px solid
    rgba(255, 155, 215, 0.3);

  border-radius:
    999px;

  background:
    linear-gradient(
      135deg,
      rgba(143, 76, 255, 0.15),
      rgba(255, 79, 184, 0.15)
    );

  color:
    var(--color-white);

  font-size: 0.8rem;

  font-weight: 700;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    background 0.3s ease;
}


.contact-button:hover {
  transform:
    translateY(-3px);

  border-color:
    var(--color-pink);

  background:
    linear-gradient(
      135deg,
      rgba(143, 76, 255, 0.25),
      rgba(255, 79, 184, 0.25)
    );
}


.contact-button span {
  color:
    var(--color-pink);

  transition:
    transform 0.3s ease;
}


.contact-button:hover span {
  transform:
    translateX(4px);
}


/* =========================
   ANIMATION
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


/* =========================
   TABLET
========================= */

@media (max-width: 900px) {

  .terms-page {
    padding-top: 125px;
  }


  .term-card {
    grid-template-columns:
      80px
      1fr;
  }


  .merch-license-card {
    grid-template-columns:
      1fr;

    gap: 20px;
  }


  .merch-percentage {
    min-height: 180px;
  }


  .ych-grid {
    grid-template-columns:
      1fr;
  }

}


/* =========================
   MOBILE
========================= */

@media (max-width: 650px) {

  .terms-page {
    padding:
      110px
      0
      70px;
  }


  .terms-container {
    width:
      min(
        calc(100% - 30px),
        var(--max-width)
      );
  }


  .terms-header {
    margin-bottom: 80px;
  }


  .important-card {
    grid-template-columns:
      1fr;

    margin-bottom: 110px;

    padding:
      30px
      25px;
  }


  .term-card {
    grid-template-columns:
      1fr;

    gap: 12px;

    padding:
      35px
      5px;
  }


  .term-card:hover {
    padding-left: 5px;
  }


  .term-number {
    font-size: 1.6rem;
  }


  .terms-list,
  .merch-section,
  .ych-section,
  .price-section {
    margin-bottom: 120px;
  }


  .merch-license-card {
    padding:
      35px
      25px;
  }


  .merch-rights {
    grid-template-columns:
      1fr;
  }


  .rights-column,
  .ych-card {
    padding:
      30px
      25px;
  }


  /* TABLE -> CARDS */

  .price-table-wrapper {
    display: none;
  }


  .price-mobile {
    display: flex;

    flex-direction: column;

    gap: 15px;
  }


  .terms-cta {
    padding:
      65px
      25px;
  }


  .contact-button {
    width: 100%;

    max-width: 300px;
  }

}


/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {

  .background-star {
    animation: none;
  }


  .term-card,
  .ych-card,
  .contact-button {
    transition: none;
  }

}

</style>