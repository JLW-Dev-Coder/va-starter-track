// v1.0.1 – VA Agency Template Embed (Standalone Loader)
// This file injects HTML, CSS & JS for the VA Agency Template Tour + Map.
// No script tags inside this file. It runs automatically when loaded.

(function () {
  "use strict";

  // ------------------------------------------------------------
  // 1. Inject FONT
  // ------------------------------------------------------------
  const fontLink = document.createElement("link");
  fontLink.href = "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap";
  fontLink.rel = "stylesheet";
  document.head.appendChild(fontLink);

  // ------------------------------------------------------------
  // 2. Inject CSS
  // ------------------------------------------------------------

  const style = document.createElement("style");
  style.textContent = `

  body, * {
    font-family: 'Raleway', system-ui, -apple-system, BlinkMacSystemFont, sans-serif !important;
  }

  /* ==========================================================
     VIEW TRANSITIONS
     ========================================================== */
  .view-section {
    opacity: 0;
    transform: translateY(18px);
    max-height: 0;
    overflow: hidden;
    transition:
      opacity 0.40s cubic-bezier(0.16, 1, 0.3, 1),
      transform 0.40s cubic-bezier(0.16, 1, 0.3, 1),
      max-height 0.40s ease;
    will-change: opacity, transform, max-height;
  }

  .view-section.is-active {
    opacity: 1;
    transform: translateY(0px);
    max-height: 3500px;
    overflow: visible;
  }

  .view-section.is-inactive {
    opacity: 0;
    transform: translateY(-18px);
    max-height: 0;
  }

  /* ==========================================================
     MODEL TABS
     ========================================================== */
  .model-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 10px auto 18px auto;
    padding-bottom: 6px;
    border-bottom: 1px solid #333;
    max-width: 900px;
  }

  .model-tab {
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.5px;
    cursor: pointer;
    padding: 10px 16px;
    color: #d1d5db;
    text-transform: uppercase;
    transition: color .25s ease, border-color .25s ease;
    border-bottom: 3px solid transparent;
  }

  .model-tab.active {
    color: #ffb300;
    border-color: #ffb300;
  }

  .model-slide {
    display: none;
    animation: fadeIn .35s ease;
  }
  .model-slide.active { display: block; }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .model-title {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #fff;
  }

  .model-subtitle {
    font-size: 18px;
    margin-bottom: 20px;
    color: #d1d5db;
  }

  .model-item {
    margin-bottom: 14px;
    font-size: 20px;
    line-height: 1.45;
  }

  .model-actions {
    margin-top: 24px;
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  /* CTA Buttons */
  .item-btn-cta,
  .model-next-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 10px 22px;
    border-radius: 999px;
    background: linear-gradient(135deg, #ffb347, #ff7b00);
    color: #111 !important;
    font-size: 15px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    transition: .2s ease;
  }
  .item-btn-cta:hover,
  .model-next-btn:hover {
    filter: brightness(1.05);
    transform: translateY(-2px);
  }

  /* HERO CIRCLE */
  .hero-circle {
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 26px;
    margin: 0 auto;
    cursor: pointer;
    transition: transform .25s ease, box-shadow .25s ease;
  }
  .hero-circle:hover {
    transform: translateY(-6px);
    box-shadow: 0 18px 45px rgba(0,0,0,0.4);
  }

  /* TEMPLATE MAP */
  #templateFrame {
    max-width: 1000px;
    margin: 0 auto 20px auto;
    padding: 0 20px 20px 20px;
    color: #fff;
  }

  .template-layout {
    display: flex;
    gap: 24px;
    align-items: flex-start;
    margin-top: 8px;
  }

  .template-tabs {
    width: 260px;
    min-width: 220px;
    border-right: 1px solid #333;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-right: 10px;
  }

  .template-tab {
    padding: 8px 10px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    color: #9ca3af;
    text-transform: uppercase;
    transition: background .2s ease, color .2s ease;
  }

  .template-tab.active {
    background: #111827;
    color: #ffb300;
  }

  .template-panel {
    display: none;
    animation: fadeIn .3s ease;
  }
  .template-panel.active { display: block; }

  .sector-extra {
    opacity: 0;
    transition: opacity 1.2s ease;
    margin-top: 12px;
  }
  .sector-extra.visible { opacity: 1; }

  `;
  document.head.appendChild(style);

  // ------------------------------------------------------------
  // 3. Inject HTML (template)
  // ------------------------------------------------------------

  const container = document.createElement("div");
  container.innerHTML = `
  
  <div id="pathHero" class="view-section is-active" style="max-width:1100px;margin:0 auto;text-align:center;padding:10px 20px;color:#fff;">

    <h1 style="font-size:50px;font-weight:800;color:#ffb300;">Your VA Agency Template</h1>
    <h2 style="font-size:26px;font-weight:500;color:#fff;">Here’s exactly what you’re getting when we build your agency.</h2>

    <div class="hero-circle" id="heroBeginTour">
      <img src="https://secure.lentax.co/file/0a0af450c48dd34f78dd5242ebd80d88/73d39410-08f3-4229-9c09-7c557121aa96/SVG_VA+Agency+Setup_1080x1350+%282%29.svg?original=1"
           style="width:100%;height:100%;object-fit:contain;">
    </div>

    <p style="margin-top:16px;color:#d1d5db;">Click to preview every model — or skip straight to the template map.</p>

    <button id="skipToTemplate" class="item-btn-cta" style="margin-top:16px;">Skip To Template →</button>

  </div>


  <!-- MODEL TOUR -->
  <div id="modelTour" class="view-section is-inactive">

    <h2 style="font-size:34px;font-weight:800;color:#ffb300;text-align:center;">
      The 5 Models That Build Your VA Agency
    </h2>

    <p style="font-size:18px;color:#d1d5db;text-align:center;margin-bottom:20px;">
      These are the core structures that make your agency scalable.
    </p>

    <div class="model-tabs">
      <div class="model-tab active" data-step="0">Client Journey</div>
      <div class="model-tab" data-step="1">DOMSSS</div>
      <div class="model-tab" data-step="2">Pipeline</div>
      <div class="model-tab" data-step="3">Portal</div>
      <div class="model-tab" data-step="4">Launch</div>
    </div>

    <!-- Slides -->
    <div class="model-slide active" data-index="0">
      <div class="model-title">MODEL A · CLIENT JOURNEY</div>
      <div class="model-subtitle">Every step a client takes through your agency.</div>

      <p class="model-item"><strong>Lead Development</strong> — Attraction + trust-building.</p>
      <p class="model-item"><strong>Prospect Engagement</strong> — Conversations that convert.</p>
      <p class="model-item"><strong>Client Experience</strong> — Messaging + delivery.</p>
      <p class="model-item"><strong>Plan Management</strong> — Clean workflows + retainers.</p>
      <p class="model-item"><strong>Lifecycle Outcomes</strong> — Renew, refer, upgrade, exit.</p>

      <div class="model-actions">
        <button class="item-btn-cta model-back-btn">← Back</button>
        <button class="model-next-btn" data-next="1">Next →</button>
      </div>
    </div>

    <!-- DOMSSS -->
    <div class="model-slide" data-index="1">
      <div class="model-title">MODEL B · DOMSSS</div>
      <div class="model-subtitle">Your internal six-piece engine.</div>

      <p class="model-item"><strong>Development</strong> — Offers + frameworks.</p>
      <p class="model-item"><strong>Operations</strong> — SOPs + automations.</p>
      <p class="model-item"><strong>Marketing</strong> — Visibility + messaging.</p>
      <p class="model-item"><strong>Sales</strong> — Follow-ups + closes.</p>
      <p class="model-item"><strong>Services</strong> — Delivery system.</p>
      <p class="model-item"><strong>Support</strong> — Customer care.</p>

      <div class="model-actions">
        <button class="item-btn-cta model-back-btn">← Back</button>
        <button class="model-next-btn" data-next="2">Next →</button>
      </div>
    </div>

    <!-- Pipeline -->
    <div class="model-slide" data-index="2">
      <div class="model-title">MODEL C · PIPELINE</div>
      <div class="model-subtitle">From first touch to client onboarding.</div>

      <p class="model-item"><strong>Lead Capture</strong> — Discovery.</p>
      <p class="model-item"><strong>Qualification</strong> — Fit filters.</p>
      <p class="model-item"><strong>Discovery</strong> — Clarity questions.</p>
      <p class="model-item"><strong>Offer & Close</strong> — Simple + authoritative.</p>
      <p class="model-item"><strong>Onboarding</strong> — Assets + access.</p>
      <p class="model-item"><strong>Early Wins</strong> — Immediate value.</p>
      <p class="model-item"><strong>Upsell & Referral</strong> — Depth before width.</p>

      <div class="model-actions">
        <button class="item-btn-cta model-back-btn">← Back</button>
        <button class="model-next-btn" data-next="3">Next →</button>
      </div>
    </div>

    <!-- Portal -->
    <div class="model-slide" data-index="3">
      <div class="model-title">MODEL D · PORTAL</div>
      <div class="model-subtitle">The stages inside your client portal.</div>

      <p class="model-item"><strong>Explore</strong> — Dashboards + clarity.</p>
      <p class="model-item"><strong>Cart</strong> — Add-ons + upgrades.</p>
      <p class="model-item"><strong>Setup</strong> — Forms + onboarding.</p>
      <p class="model-item"><strong>Support</strong> — Messages + tickets.</p>
      <p class="model-item"><strong>Cancel</strong> — Clean exits.</p>

      <div class="model-actions">
        <button class="item-btn-cta model-back-btn">← Back</button>
        <button class="model-next-btn" data-next="4">Next →</button>
      </div>
    </div>

    <!-- Launch -->
    <div class="model-slide" data-index="4">
      <div class="model-title">MODEL E · 5-STEP LAUNCH</div>
      <div class="model-subtitle">A clean path to get your agency live.</div>

      <p class="model-item"><strong>Weigh Anchor</strong> — Positioning.</p>
      <p class="model-item"><strong>Hoist the Sails</strong> — Digital HQ.</p>
      <p class="model-item"><strong>Raise Your Flag</strong> — Outreach system.</p>
      <p class="model-item"><strong>Trim the Weight</strong> — Lean enterprise.</p>
      <p class="model-item"><strong>Steer Ahead</strong> — Conversion + fulfillment.</p>

      <div class="model-actions">

        <button class="item-btn-cta model-back-btn">← Back</button>

        <button class="item-btn-cta"
          onclick="window.location.href='https://secure.lentax.co/portal/dashboard/view/156931#VA-Agency-Setup-Checkout-Cart'">
          Go To Cart →
        </button>

        <button class="model-next-btn"
          onclick="window.location.href='https://secure.lentax.co/portal/dashboard/view/156940#Explore-VA-Agency-Setup'">
          Book Setup Call →
        </button>

      </div>
    </div>

  </div>



  <!-- TEMPLATE MAP -->
  <div id="templateFrame" class="view-section is-inactive">

    <h2 style="font-size:34px;font-weight:800;color:#ffb300;">VA Agency Template Map</h2>
    <p style="font-size:18px;color:#d1d5db;">A high-level look at the structures your VA agency is built on.</p>

    <div class="template-layout">

      <div class="template-tabs">
        <div class="template-tab active" data-template-step="0">Business Sectors</div>
        <div class="template-tab" data-template-step="1">Content Categories</div>
        <div class="template-tab" data-template-step="2">Custom Fields</div>
        <div class="template-tab" data-template-step="3">Document Generators</div>
        <div class="template-tab" data-template-step="4">Drip Sequences</div>
        <div class="template-tab" data-template-step="5">Email Cannons</div>
        <div class="template-tab" data-template-step="6">Email Marketing</div>
        <div class="template-tab" data-template-step="7">Form Templates</div>
        <div class="template-tab" data-template-step="8">Invoice Items</div>
        <div class="template-tab" data-template-step="9">Portal Page Templates</div>
        <div class="template-tab" data-template-step="10">Proposal Templates</div>
      </div>

      <div class="template-panels">

        <!-- BUSINESS SECTORS -->
        <div class="template-panel active" data-template-index="0">
          <h3>Business Sectors</h3>
          <p>This helps map your services by business size.</p>

          <div id="sectorExtra" class="sector-extra">
            <p><strong>Individual / Solopreneur</strong></p>
            <p><strong>Small Business</strong></p>
            <p><strong>Medium Business</strong></p>
            <p><strong>Large Business</strong></p>
          </div>
        </div>

        <!-- SIMPLE PANELS -->
        <div class="template-panel" data-template-index="1"><h3>Content Categories</h3></div>
        <div class="template-panel" data-template-index="2"><h3>Custom Fields</h3></div>
        <div class="template-panel" data-template-index="3"><h3>Document Generators</h3></div>
        <div class="template-panel" data-template-index="4"><h3>Drip Sequence Template</h3></div>
        <div class="template-panel" data-template-index="5"><h3>Email Cannons</h3></div>
        <div class="template-panel" data-template-index="6"><h3>Email Marketing Templates</h3></div>
        <div class="template-panel" data-template-index="7"><h3>Form Templates</h3></div>
        <div class="template-panel" data-template-index="8"><h3>Invoice Items</h3></div>
        <div class="template-panel" data-template-index="9"><h3>Portal Pages</h3></div>
        <div class="template-panel" data-template-index="10"><h3>Proposal Templates</h3></div>

      </div>
    </div>

    <div class="template-bottom-cta" style="margin-top:20px;">
      <button class="item-btn-cta" id="templateBackBtnBottom">← Back</button>
    </div>

  </div>

  `;
  document.body.appendChild(container);

  // ------------------------------------------------------------
  // 4. JavaScript interactions
  // ------------------------------------------------------------

  const pathHero = document.getElementById("pathHero");
  const modelTour = document.getElementById("modelTour");
  const templateFrame = document.getElementById("templateFrame");

  const heroBegin = document.getElementById("heroBeginTour");
  const skipToTemplate = document.getElementById("skipToTemplate");

  const modelTabs = document.querySelectorAll(".model-tab");
  const modelSlides = document.querySelectorAll(".model-slide");
  const nextBtns = document.querySelectorAll("[data-next]");
  const modelBackBtns = document.querySelectorAll(".model-back-btn");

  const templateTabs = document.querySelectorAll(".template-tab");
  const templatePanels = document.querySelectorAll(".template-panel");
  const templateBackBtnBottom = document.getElementById("templateBackBtnBottom");

  const sectorExtra = document.getElementById("sectorExtra");
  let sectorTimeout = null;

  function setView(target) {
    [pathHero, modelTour, templateFrame].forEach(section => {
      section.classList.remove("is-active", "is-inactive");
    });

    target.classList.add("is-active");

    [pathHero, modelTour, templateFrame].forEach(section => {
      if (section !== target) section.classList.add("is-inactive");
    });
  }

  function showHero() { setView(pathHero); }
  function showTour() { setView(modelTour); }
  function showTemplate() { setView(templateFrame); }

  if (heroBegin) heroBegin.addEventListener("click", showTour);
  if (skipToTemplate) skipToTemplate.addEventListener("click", showTemplate);

  modelBackBtns.forEach(btn => btn.addEventListener("click", showHero));
  if (templateBackBtnBottom) templateBackBtnBottom.addEventListener("click", showHero);

  function setModelTab(i) {
    modelTabs.forEach(t => t.classList.remove("active"));
    modelSlides.forEach(s => s.classList.remove("active"));
    modelTabs[i].classList.add("active");
    modelSlides[i].classList.add("active");
  }

  modelTabs.forEach(tab =>
    tab.addEventListener("click", () => setModelTab(parseInt(tab.dataset.step, 10)))
  );

  nextBtns.forEach(btn =>
    btn.addEventListener("click", () => setModelTab(parseInt(btn.dataset.next, 10)))
  );

  function triggerSectorFade() {
    if (!sectorExtra) return;
    sectorExtra.classList.remove("visible");
    clearTimeout(sectorTimeout);
    sectorTimeout = setTimeout(() => sectorExtra.classList.add("visible"), 300);
  }

  function setTemplateTab(i) {
    templateTabs.forEach(t => t.classList.remove("active"));
    templatePanels.forEach(p => p.classList.remove("active"));
    templateTabs[i].classList.add("active");
    templatePanels[i].classList.add("active");

    if (i === 0) triggerSectorFade();
    else {
      sectorExtra.classList.remove("visible");
      clearTimeout(sectorTimeout);
    }
  }

  templateTabs.forEach(tab =>
    tab.addEventListener("click", () => {
      setTemplateTab(parseInt(tab.dataset.templateStep, 10));
    })
  );

  triggerSectorFade();

})();
