let activeCategory = null;

const hyperlinkAndCategoryTab = {
  support: [
    { label: "Calculatrice NumWorks", url: "numworksCalculator.html" },
    { label: "OS Epsilon", url: "operatingSystemEpsilon.html" },
    {
      label: "Environnement MicroPython",
      url: "micropythonEnvironnement.html",
    },
  ],
  ide: [
    { label: "Coeur (C1)", url: "ecmmpMainCore.html" },
    { label: "Modules (C2)", url: "ecmmpLanguagesAndToolsModules.html" },
    { label: "Compléments (C3)", url: "ecmmpComplementsAndAddOn.html" },
  ],
  veille: [
    { label: "Article 1", url: "firstArticle.html" },
    { label: "Article 2", url: "secondArticle.html" },
    { label: "Article 3", url: "thirdArticle.html" },
    { label: "Synthèse", url: "synthesisArticles.html" },
  ],
  plus: [
    {
      label: "Ressources et Documentation",
      url: "ressourcesAndDocumentation.html",
    },
    { label: "Crédits", url: "credits.html" },
  ],
};

function toggleCategory(category) {
  const container = document.getElementById("subMenuContainer");

  if (activeCategory === category) {
    container.innerHTML = "";
    activeCategory = null;
    return;
  }

  activeCategory = category;
  container.innerHTML = "";

  const listItemsNav = hyperlinkAndCategoryTab[category];
  if (listItemsNav && listItemsNav.length > 0) {
    let insertHtml = '<div style="margin-top: 5px;">';
    let navItemsCounter = 0;
    listItemsNav.forEach((item) => {
      navItemsCounter++;
      insertHtml += '<a href="' + item.url + '">' + item.label + "</a>";
      if (navItemsCounter !== listItemsNav.length) {
        insertHtml += " | ";
      }
    });
    insertHtml += "</div>";
    container.innerHTML = insertHtml;
  }
}


/* CARROUSEL DE LA PAGE D'ACCUEIL */

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".home-carousel");

    // Le carrousel n'existe pas sur les autres pages.
    if (!carousel) {
        return;
    }

    const slides = Array.from(
        carousel.querySelectorAll(".home-carousel-slide")
    );

    const previousButton = carousel.querySelector(".home-carousel-previous");
    const nextButton = carousel.querySelector(".home-carousel-next");
    const pauseButton = carousel.querySelector(".home-carousel-pause");
    const counter = carousel.querySelector(".home-carousel-counter");

    if (slides.length === 0) {
        return;
    }

    let currentIndex = slides.findIndex(
        slide => slide.classList.contains("is-active")
    );

    if (currentIndex === -1) {
        currentIndex = 0;
    }

    let intervalId = null;
    let pausedByUser = false;
    let pointerInside = false;
    let focusInside = false;

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    // Actualisation de la diapositive affichée.
    function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            const isActive = i === currentIndex;

            slide.classList.toggle("is-active", isActive);
            slide.setAttribute("aria-hidden", String(!isActive));
        });

        if (counter) {
            const current = String(currentIndex + 1).padStart(2, "0");
            const total = String(slides.length).padStart(2, "0");

            counter.textContent = current + " / " + total;
        }
    }

    function showNextSlide() {
        showSlide(currentIndex + 1);
    }

    function showPreviousSlide() {
        showSlide(currentIndex - 1);
    }

    // Arrêt du défilement automatique.
    function stopAutoplay() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    // Démarrage du défilement automatique.
    function startAutoplay() {
        stopAutoplay();

        if (
            slides.length < 2 ||
            pausedByUser ||
            pointerInside ||
            focusInside ||
            document.hidden ||
            prefersReducedMotion.matches
        ) {
            return;
        }

        intervalId = setInterval(showNextSlide, 6000);
    }

    // Initialisation de la première diapositive.
    showSlide(currentIndex);

    if (slides.length < 2) {
        if (previousButton) previousButton.hidden = true;
        if (nextButton) nextButton.hidden = true;
        if (pauseButton) pauseButton.hidden = true;
        return;
    }

    // Navigation manuelle.
    if (previousButton) {
        previousButton.addEventListener("click", () => {
            showPreviousSlide();
            startAutoplay();
        });
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => {
            showNextSlide();
            startAutoplay();
        });
    }

    // Pause et reprise manuelles.
    if (pauseButton) {
        if (prefersReducedMotion.matches) {
            pauseButton.hidden = true;
        } else {
            pauseButton.addEventListener("click", () => {
                pausedByUser = !pausedByUser;

                pauseButton.textContent = pausedByUser
                    ? "Reprendre"
                    : "Pause";

                pauseButton.setAttribute(
                    "aria-pressed",
                    String(pausedByUser)
                );

                pauseButton.setAttribute(
                    "aria-label",
                    pausedByUser
                        ? "Reprendre le défilement automatique"
                        : "Mettre le défilement automatique en pause"
                );

                startAutoplay();
            });
        }
    }

    // Pause lorsque la souris survole le carrousel.
    carousel.addEventListener("mouseenter", () => {
        pointerInside = true;
        stopAutoplay();
    });

    carousel.addEventListener("mouseleave", () => {
        pointerInside = false;
        startAutoplay();
    });

    // Pause lorsqu'un élément du carrousel reçoit le focus.
    carousel.addEventListener("focusin", () => {
        focusInside = true;
        stopAutoplay();
    });

    carousel.addEventListener("focusout", event => {
        if (!carousel.contains(event.relatedTarget)) {
            focusInside = false;
            startAutoplay();
        }
    });

    // Pause lorsque l'onglet du navigateur devient invisible.
    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            stopAutoplay();
        } else {
            startAutoplay();
        }
    });

    // Lancement initial.
    startAutoplay();
});
