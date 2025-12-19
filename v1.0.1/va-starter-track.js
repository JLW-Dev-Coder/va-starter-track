(function () {
  const VERSION = "v1.0.1";
  const BASE = `${location.origin}/${VERSION}`;

  let cascadeIo = null;
  let cascadeShown = 0;
  let prefersReduced = false;
  let prefersReducedReady = false;

  function ensureCss() {
    const id = "va-starter-track-css";
    if (document.getElementById(id)) return;

    const link = document.createElement("link");
    link.href = `${BASE}/va-starter-track.css`;
    link.id = id;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  function initCascade() {
    if (!prefersReducedReady) {
      prefersReducedReady = true;
      try {
        prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      } catch (e) {
        prefersReduced = false;
      }
    }

    const items = Array.prototype.slice.call(document.querySelectorAll(".lx-cascade"));
    if (!items.length) return;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    if (!cascadeIo) {
      cascadeIo = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;

            const el = entry.target;
            if (el.classList.contains("is-visible")) return;

            el.style.transitionDelay = cascadeShown * 90 + "ms";
            cascadeShown += 1;

            el.classList.add("is-visible");
            cascadeIo.unobserve(el);
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.15
        }
      );
    }

    items.forEach(function (el) {
      if (el.classList.contains("is-visible")) return;
      if (el.dataset.lxCascadeObserved === "1") return;

      el.dataset.lxCascadeObserved = "1";
      cascadeIo.observe(el);
    });
  }

  function render() {
    const nodes = document.querySelectorAll("[data-lx-embed='va-starter-track']");
    nodes.forEach((node) => {
      if (node.dataset.lxMounted === "1") return;
      node.dataset.lxMounted = "1";

      node.innerHTML = `
        <div class="lx-st-wrap text-default">
          <div class="lx-st-hero">
            <div class="lx-st-title voyage-progress">VA Starter Track</div>
            <div class="lx-st-subtitle">Structured onboarding + verified opportunities + clean delivery.</div>
          </div>
        </div>
      `;
    });
  }

  function boot() {
    ensureCss();
    render();
    initCascade();

    const obs = new MutationObserver(function () {
      render();
      initCascade();
    });

    obs.observe(document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
