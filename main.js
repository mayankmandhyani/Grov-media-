/* ============================================================
   GROV MEDIA — Shared Data + Behaviour
   Edit the objects below to update content site-wide.
   All copy/stats sourced from https://grovmedia.com/ (Aug 2026).
   ============================================================ */

/* ---------- CENTRAL DATA ---------- */

const caseStudies = [
  {
    id: "wellness-coach",
    tag: "Quiz Funnel + AI System",
    client: "Online Wellness Coach",
    location: "North America · Fitness & Transformation",
    problem: "Engaged audience of 12K followers. No structured path from follower to client. Every sale required the founder personally chasing leads. No funnel, no automation, no follow-up system.",
    stats: [
      { value: "312%", label: "increase in qualified enquiries within 60 days" },
      { value: "87%", label: "reduction in manual follow-up time" },
      { value: "4.2x", label: "lead-to-call conversion improvement" }
    ],
    quote: "Before I even hired them, they put so much work into showing me where the gaps were. They actually care.",
    sparkline: "M0,30 L15,28 L30,25 L45,22 L60,12 L75,8 L90,5 L100,2"
  },
  {
    id: "health-practitioner",
    tag: "Diagnostic Funnel Launch",
    client: "Functional Health Practitioner",
    location: "United Kingdom · Health & Wellness",
    problem: "Wanted a qualification funnel before patient bookings — but had no system, no tech experience, and no structured intake process before consultations.",
    stats: [
      { value: "2.5wk", label: "from kickoff to fully live, qualified funnel" },
      { value: "100%", label: "personalised path per quiz result segment" },
      { value: "68%", label: "reduction in unqualified consultation bookings" }
    ],
    quote: "Well exceeded expectations. Better communication and follow-up than anyone we've worked with.",
    sparkline: "M0,30 L20,29 L40,27 L60,20 L80,10 L100,4"
  },
  {
    id: "health-coach",
    tag: "AI Lead Handling System",
    client: "Functional Health Coach",
    location: "United States · Chronic Illness Recovery",
    problem: "Personally managing every lead conversation — manually responding, qualifying, following up. Draining energy and losing clients to slow response times.",
    stats: [
      { value: "~15hrs", label: "per week returned from manual lead handling" },
      { value: "0", label: "leads falling through gaps post-system" },
      { value: "2x", label: "conversion rate on warm leads in 45 days" }
    ],
    quote: "They know exactly what my clients' needs, worries, and frustrations are. That is huge.",
    sparkline: "M0,30 L15,30 L30,25 L45,18 L60,15 L75,9 L90,6 L100,3"
  },
  {
    id: "business-consultant",
    tag: "Full Acquisition System",
    client: "Business Consultant",
    location: "United Arab Emirates · Strategy & Growth",
    problem: "Strong referral base but no inbound system. Revenue was entirely relationship-dependent with no scalable acquisition infrastructure in place.",
    stats: [
      { value: "220%", label: "increase in inbound qualified enquiries" },
      { value: "$28K", label: "additional monthly revenue within 90 days" },
      { value: "3.1x", label: "improvement in lead-to-proposal conversion" }
    ],
    quote: "Finally a team that understood the full picture — not just one part of the funnel.",
    sparkline: "M0,30 L18,27 L36,24 L54,17 L72,11 L86,6 L100,2"
  },
  {
    id: "executive-coach",
    tag: "Messaging + Funnel Rebuild",
    client: "Executive Coach",
    location: "Australia · Leadership & Performance",
    problem: "Positioned too broadly. Messaging wasn't converting despite strong credentials. Website traffic existed but leads weren't booking calls.",
    stats: [
      { value: "190%", label: "increase in website lead conversion rate" },
      { value: "5.4x", label: "return on investment within first 60 days" },
      { value: "11d", label: "average time from enquiry to signed client" }
    ],
    quote: "The clarity they brought to our messaging changed everything. Leads started converting immediately.",
    sparkline: "M0,30 L22,26 L44,22 L60,14 L80,7 L100,2"
  },
  {
    id: "wellness-practitioner",
    tag: "Retention + Referral System",
    client: "Wellness Practitioner",
    location: "Canada · Integrative Health",
    problem: "High client satisfaction but poor retention and no referral structure. Was re-acquiring clients constantly instead of growing from an existing base.",
    stats: [
      { value: "74%", label: "increase in client retention rate at 90 days" },
      { value: "32%", label: "of new clients from structured referral program" },
      { value: "2.3x", label: "improvement in average client lifetime value" }
    ],
    quote: "We stopped losing clients we should have kept. The system did what we couldn't do manually.",
    sparkline: "M0,30 L20,28 L40,24 L60,19 L80,11 L100,5"
  }
];

const testimonials = [
  { quote: "Before I even hired her, she put so much work into looking at my business and showing me where the gaps were. They actually care. They actually look into your business.", name: "Amanda Mauer", role: "Owner, Sustained Fitness · USA" },
  { quote: "Not only does it take the stress off of me — they know exactly what my clients' needs, worries, and frustrations are. That is huge for lead generation.", name: "Karmen Feist", role: "Founder, Simply Restore Health · USA" },
  { quote: "Mokshita just grasped what I needed immediately. The research is phenomenal. One year later we're still in touch — they became like friends. Cannot recommend enough.", name: "Radka Hubenova", role: "Business Owner · Europe" },
  { quote: "She seemed to come at the perfect moment. Just from a short call she provided so much support — things I hadn't received after spending lots of money on courses.", name: "Sorcha", role: "Small Business Owner · Ireland" },
  { quote: "They have been so amazing, very personalized. Their messaging is so clear and that is what I need. That is what my clients need. This is your sign — don't doubt it.", name: "Amanda Mauer", role: "Owner, Sustained Fitness · USA" },
  { quote: "It was like a breath of fresh air. I felt heard and seen — and got permission to stop doing things that felt wrong and focus on what's aligned. My results went up in two days.", name: "Heather", role: "Wellness Business Owner · USA" }
];

/* Central video registry — replace URLs / titles here only */
const videos = {
  clientStory01: { url: "https://www.youtube.com/embed/hw_hiVsU1Jw", watchUrl: "https://www.youtube.com/watch?v=hw_hiVsU1Jw", title: "Client Story", client: "Amanda Mauer, Sustained Fitness" },
  clientStory02: { url: "https://www.youtube.com/embed/Wphx9432KAM", watchUrl: "https://www.youtube.com/watch?v=Wphx9432KAM", title: "Client Story", client: "Karmen Feist, Simply Restore Health" },
  clientStory03: { url: "https://www.youtube.com/embed/Vnngs4nGP6s", watchUrl: "https://www.youtube.com/watch?v=Vnngs4nGP6s", title: "Client Story", client: "Radka Hubenova" },
  clientStory04: { url: "https://www.youtube.com/embed/P3WNq5pnzv0", watchUrl: "https://www.youtube.com/watch?v=P3WNq5pnzv0", title: "Client Story", client: "Sorcha" },
  clientStory05: { url: "https://www.youtube.com/embed/2VTIdaBCkWY", watchUrl: "https://www.youtube.com/watch?v=2VTIdaBCkWY", title: "Client Story", client: "Amanda Mauer, Sustained Fitness" },
  clientStory06: { url: "https://www.youtube.com/embed/WZbZADxZDPw", watchUrl: "https://www.youtube.com/watch?v=WZbZADxZDPw", title: "Client Story", client: "Heather" }
};

/* Verified before/after metrics (source: grovmedia.com, "The Data" section) */
const beforeAfterMetrics = [
  { label: "Qualified Leads", before: "2/mo", after: "9/mo" },
  { label: "Lead → Call", before: "18%", after: "54%" },
  { label: "Call → Client", before: "22%", after: "61%" },
  { label: "Admin/Week", before: "8hrs", after: "1.5hrs" },
  { label: "Response Time", before: "3d", after: "<2hr" }
];

const REVENUE_AUDIT_URL = "https://gm.grovmedia.com/widget/bookings/growthopportunitygrov";

/* ---------- NAV / SCROLL PROGRESS ---------- */
function initNav() {
  const nav = document.getElementById('main-nav');
  const progress = document.getElementById('scroll-progress');
  function onScroll() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? winScroll / height : 0;
    if (progress) progress.style.transform = `scaleX(${scrolled})`;
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- MOBILE DRAWER ---------- */
function initMobileMenu() {
  const openBtn = document.getElementById('menu-open');
  const closeBtn = document.getElementById('menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');
  if (!openBtn || !drawer) return;

  function open() {
    drawer.classList.add('open');
    overlay.classList.add('open');
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  openBtn.addEventListener('click', open);
  closeBtn?.addEventListener('click', close);
  overlay?.addEventListener('click', close);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ---------- HERO PAGE-LOAD CHOREOGRAPHY ----------
   Elements marked .hero-in with a data-hero-order attribute settle
   into place in sequence on initial load (not scroll-triggered — the
   hero is above the fold, so this runs immediately). Order: eyebrow,
   headline, paragraph, primary CTA, secondary CTA, visual, marquee.
   Kept quick so the page never feels like it's "waiting" to be usable —
   content is readable well before the sequence finishes. */
function initHeroChoreography() {
  const items = document.querySelectorAll('.hero-in[data-hero-order]');
  if (!items.length) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    items.forEach(el => el.classList.add('hero-in-active'));
    return;
  }
  const STEP = 90; // ms between each element in the sequence
  const BASE = 60; // small initial delay so it doesn't feel instant/jarring
  items.forEach(el => {
    const order = parseInt(el.getAttribute('data-hero-order'), 10) || 0;
    setTimeout(() => el.classList.add('hero-in-active'), BASE + order * STEP);
  });
}

/* ---------- SCROLL REVEAL ---------- */
function initReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  const graphContainers = document.querySelectorAll('.graph-trigger');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    revealElements.forEach(el => el.classList.add('active'));
    graphContainers.forEach(el => el.classList.add('graph-active'));
    document.querySelectorAll('.count-up').forEach(setFinalCount);
    document.querySelectorAll('.data-bar,.hz-bar').forEach(bar => bar.style.width = bar.getAttribute('data-width'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('active');
      if (entry.target.querySelector('.dashboard-stats') || entry.target.classList.contains('dashboard-stats')) {
        triggerDataViz(entry.target);
      }
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  revealElements.forEach(el => revealObserver.observe(el));

  const graphObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('graph-active');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.2 });
  graphContainers.forEach(el => graphObserver.observe(el));
}

function setFinalCount(counter) {
  const target = counter.getAttribute('data-target');
  const suffix = counter.getAttribute('data-suffix') || '';
  const prefix = counter.getAttribute('data-prefix') || '';
  counter.textContent = prefix + target + suffix;
}

function triggerDataViz(container) {
  container.querySelectorAll('.data-bar').forEach(bar => { bar.style.width = bar.getAttribute('data-width'); });
  container.querySelectorAll('.hz-bar').forEach(bar => { bar.style.width = bar.getAttribute('data-width'); });
  container.querySelectorAll('.count-up').forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const prefix = counter.getAttribute('data-prefix') || '';
    const isDecimal = String(counter.getAttribute('data-target')).includes('.');
    let count = 0;
    const duration = 1400;
    const steps = duration / 16;
    const increment = target / steps;
    function tick() {
      count += increment;
      if (count < target) {
        const display = isDecimal ? count.toFixed(1) : Math.ceil(count);
        counter.textContent = prefix + display + suffix;
        requestAnimationFrame(tick);
      } else {
        counter.textContent = prefix + (isDecimal ? target.toFixed(1) : target) + suffix;
      }
    }
    tick();
  });
}

/* ---------- ACCORDION (FAQ) ---------- */
function initAccordion() {
  document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    if (trigger.dataset.accordionBound === 'true') return; // avoid double-binding on re-init
    trigger.dataset.accordionBound = 'true';
    trigger.addEventListener('click', () => {
      const expanded = trigger.getAttribute('aria-expanded') === 'true';
      const panel = document.getElementById(trigger.getAttribute('aria-controls'));
      trigger.setAttribute('aria-expanded', String(!expanded));
      if (panel) panel.style.maxHeight = expanded ? '0px' : panel.scrollHeight + 'px';
    });
  });
}

/* ---------- HERO / FOOTER SPINE CYCLE ----------
   Sequential highlight across .spine-node / .spine-label pairs, with the
   connecting .spine-fill segment animating alongside. Works for any
   spine instance on the page (hero uses one, footer echo uses another). */
function initSpineCycle() {
  document.querySelectorAll('[data-spine]').forEach(spine => {
    const nodes = Array.from(spine.querySelectorAll('.spine-node'));
    const labels = Array.from(spine.querySelectorAll('.spine-label'));
    const fills = Array.from(spine.querySelectorAll('.spine-fill'));
    if (!nodes.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes[nodes.length - 1]?.classList.add('spine-active');
      labels[labels.length - 1]?.classList.add('spine-label-active');
      fills.forEach(f => f.classList.add('spine-fill-active'));
      return;
    }
    let i = 0;
    function step() {
      nodes.forEach(n => n.classList.remove('spine-active'));
      labels.forEach(l => l.classList.remove('spine-label-active'));
      fills.forEach(f => f.classList.remove('spine-fill-active'));
      nodes[i]?.classList.add('spine-active');
      labels[i]?.classList.add('spine-label-active');
      for (let j = 0; j < i; j++) fills[j]?.classList.add('spine-fill-active');
      i = (i + 1) % nodes.length;
    }
    step();
    setInterval(step, 1400);
  });
}

/* ---------- METHOD PAGE — SCROLL-LINKED VERTICAL SPINE ----------
   Fills a vertical track proportional to scroll progress through the
   methodology section, and highlights the current stage marker. */
function initMethodSpine() {
  const track = document.getElementById('method-spine-fill');
  const wrapper = document.getElementById('method-spine-wrapper');
  if (!track || !wrapper) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function update() {
    const rect = wrapper.getBoundingClientRect();
    const total = rect.height - window.innerHeight * 0.5;
    const scrolled = Math.min(Math.max(-rect.top + window.innerHeight * 0.3, 0), total);
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    track.style.height = pct + '%';
  }
  if (reduce) { track.style.height = '100%'; return; }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
}

/* ---------- DIAGNOSTIC SEQUENCE (Revenue Audit) ----------
   Click/keyboard toggle for touch devices where :hover doesn't apply. */
function initDiagnosticStages() {
  document.querySelectorAll('.diag-stage').forEach(stage => {
    const trigger = stage.querySelector('[data-diag-trigger]');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      const isOpen = stage.classList.contains('diag-open');
      document.querySelectorAll('.diag-stage').forEach(s => s.classList.remove('diag-open'));
      if (!isOpen) stage.classList.add('diag-open');
    });
  });
}

/* ---------- FOUNDER PARALLAX ---------- */
function initFounderParallax() {
  const f1 = document.getElementById('founder-1');
  const f2 = document.getElementById('founder-2');
  if (!f1 || !f2) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  window.addEventListener('scroll', () => {
    if (window.innerWidth < 768) return;
    const rect = f1.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      f1.style.transform = `translateY(${window.scrollY * 0.03}px)`;
      f2.style.transform = `translateY(${window.scrollY * -0.015}px)`;
    }
  }, { passive: true });
}

/* ---------- CUSTOM CURSOR (desktop only) ---------- */
function initCursor() {
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
  const dot = document.getElementById('cursor-dot');
  if (!dot) return;
  window.addEventListener('mousemove', e => {
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
    dot.classList.add('visible');
  });
  document.addEventListener('mouseleave', () => dot.classList.remove('visible'));
  document.querySelectorAll('.interactive-zone').forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('expand'));
    el.addEventListener('mouseleave', () => dot.classList.remove('expand'));
  });
}

/* ---------- VIDEO MODAL ---------- */
function openVideo(key) {
  const v = videos[key];
  if (!v) return;
  window.open(v.watchUrl, '_blank', 'noopener');
}

/* ---------- MARQUEE ----------
   Builds the doubled track from a single item list so the loop is
   seamless (translateX(-50%) always lands on an identical frame). */
function initMarquee() {
  const track = document.getElementById('marquee-track');
  if (!track) return;
  const items = ['Grov Media', 'Client Acquisition', 'Paid Media', 'Lead Generation', 'Sales Systems', 'Retention'];
  const renderSet = () => items.map(label =>
    `<span class="marquee-item">${label}<span class="marquee-sep">/</span></span>`
  ).join('');
  track.innerHTML = renderSet() + renderSet();
}
/* ---------- KINETIC GRID (hero background canvas) ----------
   Ported from a React/canvas reference component to vanilla JS.
   Scoped to the hero section only — not a full-page background —
   so body copy, cards, and data elsewhere stay undistracted.
   Desktop: cursor warp + click ripple, continuous rAF loop.
   Touch: tap ripple only, no continuous per-frame tracking (battery).
   Fully disabled under prefers-reduced-motion. */
function initKineticGrid() {
  const canvas = document.getElementById('kinetic-grid');
  if (!canvas) return;
  const section = canvas.closest('section');
  if (!section) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

  // Grov palette — gold accent on ink, not the reference component's blue.
  const LINE_BASE = { r: 236, g: 233, b: 226, a: 0.06 };
  const LINE_ACTIVE = { r: 201, g: 169, b: 97, a: 0.55 };
  const NODE_BASE = { r: 236, g: 233, b: 226, a: 0.10 };
  const NODE_ACTIVE = { r: 201, g: 169, b: 97, a: 0.9 };
  const GLOW = '201,169,97';
  const RIPPLE = '201,169,97';

  // Smaller/sparser grid on touch — fewer cells to draw, cheaper per frame.
  const CELL_SIZE = isTouch ? 68 : 58;
  const INFLUENCE_RADIUS = isTouch ? 0 : 240; // 0 = cursor warp effectively off on touch
  const MAX_WARP = 20;
  const LERP_SPEED = 0.08;

  let W = 0, H = 0;
  let mouse = { x: -9999, y: -9999 };
  let targetMouse = { x: -9999, y: -9999 };
  let ripples = [];
  let rafId = null;
  let running = false;

  function lerpN(a, b, t) { return a + (b - a) * t; }
  function lerpColor(base, active, t) {
    const r = Math.round(lerpN(base.r, active.r, t));
    const g = Math.round(lerpN(base.g, active.g, t));
    const b = Math.round(lerpN(base.b, active.b, t));
    const a = lerpN(base.a, active.a, t);
    return `rgba(${r},${g},${b},${a.toFixed(3)})`;
  }

  function setSize() {
    const rect = section.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap DPR — perf on high-density phones
    W = rect.width;
    H = rect.height;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function getWarpedPoint(gx, gy, col, row, cols, rows) {
    const edgeMargin = 1.5;
    const colPin = Math.min(col / edgeMargin, (cols - 1 - col) / edgeMargin, 1);
    const rowPin = Math.min(row / edgeMargin, (rows - 1 - row) / edgeMargin, 1);
    const pinFactor = colPin * colPin * rowPin * rowPin;

    const dx = gx - mouse.x;
    const dy = gy - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const proximity = INFLUENCE_RADIUS > 0 ? Math.max(0, 1 - dist / INFLUENCE_RADIUS) * pinFactor : 0;

    let rx = 0, ry = 0;
    for (const r of ripples) {
      const rdx = gx - r.x;
      const rdy = gy - r.y;
      const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
      const waveWidth = 50;
      const diff = rdist - r.radius;
      if (Math.abs(diff) < waveWidth) {
        const strength = (1 - Math.abs(diff) / waveWidth) * r.opacity * 16 * pinFactor;
        const angle = Math.atan2(rdy, rdx);
        const sign = diff < 0 ? -1 : 1;
        rx += Math.cos(angle) * strength * sign * -1;
        ry += Math.sin(angle) * strength * sign * -1;
      }
    }

    if (INFLUENCE_RADIUS > 0 && dist < INFLUENCE_RADIUS && dist > 0 && pinFactor > 0) {
      const t = dist / INFLUENCE_RADIUS;
      const eased = t < 0.01 ? 0 : (1 - t) * (1 - t) * Math.min(1, dist / 60);
      const warpAmt = eased * MAX_WARP * pinFactor;
      const angle = Math.atan2(dy, dx);
      return {
        pt: { x: gx - Math.cos(angle) * warpAmt + rx, y: gy - Math.sin(angle) * warpAmt + ry },
        proximity
      };
    }
    return { pt: { x: gx + rx, y: gy + ry }, proximity };
  }

  function draw(now) {
    ctx.clearRect(0, 0, W, H);

    for (let i = ripples.length - 1; i >= 0; i--) {
      const r = ripples[i];
      const age = (now - r.born) / 1000;
      r.radius = Math.max(0, age * 380);
      r.opacity = Math.max(0, 1 - age * 1.3);
      if (r.opacity <= 0) ripples.splice(i, 1);
    }

    const cols = Math.max(2, Math.ceil(W / CELL_SIZE)) + 1;
    const rows = Math.max(2, Math.ceil(H / CELL_SIZE)) + 1;
    const cellW = W / (cols - 1);
    const cellH = H / (rows - 1);

    const pts = [];
    const prox = [];
    for (let row = 0; row < rows; row++) {
      pts[row] = []; prox[row] = [];
      for (let col = 0; col < cols; col++) {
        const { pt, proximity } = getWarpedPoint(col * cellW, row * cellH, col, row, cols, rows);
        pts[row][col] = pt;
        prox[row][col] = proximity;
      }
    }

    function drawSeg(p1, p2, pr1, pr2) {
      const avg = (pr1 + pr2) / 2;
      const t = avg * avg * (3 - 2 * avg);
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.strokeStyle = lerpColor(LINE_BASE, LINE_ACTIVE, t);
      ctx.lineWidth = lerpN(0.7, 1.3, t);
      ctx.stroke();
    }
    ctx.lineCap = 'butt';
    for (let row = 0; row < rows; row++)
      for (let col = 0; col < cols - 1; col++)
        drawSeg(pts[row][col], pts[row][col + 1], prox[row][col], prox[row][col + 1]);
    for (let col = 0; col < cols; col++)
      for (let row = 0; row < rows - 1; row++)
        drawSeg(pts[row][col], pts[row + 1][col], prox[row][col], prox[row + 1][col]);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const p = pts[row][col];
        const pr = prox[row][col];
        const t = pr * pr * (3 - 2 * pr);
        const r = lerpN(1.5, 2.6, t);
        if (t > 0.3) {
          const glowR = r + lerpN(0, 5, (t - 0.3) / 0.7);
          const grd = ctx.createRadialGradient(p.x, p.y, r * 0.5, p.x, p.y, glowR);
          grd.addColorStop(0, `rgba(${GLOW},${(t * 0.25).toFixed(3)})`);
          grd.addColorStop(1, `rgba(${GLOW},0)`);
          ctx.beginPath(); ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2); ctx.fillStyle = grd; ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = lerpColor(NODE_BASE, NODE_ACTIVE, t);
        ctx.fill();
      }
    }

    for (const r of ripples) {
      const safeRadius = Math.max(0, r.radius);
      ctx.beginPath();
      ctx.arc(r.x, r.y, safeRadius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${RIPPLE},${(r.opacity * 0.22).toFixed(3)})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
  }

  function animate(now) {
    if (!running) return;
    mouse.x = lerpN(mouse.x, targetMouse.x, LERP_SPEED);
    mouse.y = lerpN(mouse.y, targetMouse.y, LERP_SPEED);
    draw(now);
    rafId = requestAnimationFrame(animate);
  }

  function start() {
    if (running) return;
    running = true;
    rafId = requestAnimationFrame(animate);
  }
  function stop() {
    running = false;
    if (rafId) cancelAnimationFrame(rafId);
  }

  setSize();

  // Desktop: live cursor tracking, scoped to the hero section (not window).
  if (!isTouch) {
    section.addEventListener('mousemove', (e) => {
      const rect = section.getBoundingClientRect();
      targetMouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    });
    section.addEventListener('mouseleave', () => {
      targetMouse = { x: -9999, y: -9999 };
    });
  }

  // Both desktop and touch: click/tap ripple.
  section.addEventListener(isTouch ? 'touchstart' : 'click', (e) => {
    const rect = section.getBoundingClientRect();
    const point = isTouch ? e.touches[0] : e;
    ripples.push({
      x: point.clientX - rect.left,
      y: point.clientY - rect.top,
      radius: 0,
      opacity: 1,
      born: performance.now()
    });
    if (!running) start(); // wake the loop for the ripple even if idle
  }, { passive: true });

  window.addEventListener('resize', setSize);

  // Pause the rAF loop entirely when the hero scrolls out of view —
  // meaningful battery/CPU saving, since this is the one continuously-
  // running animation on the site.
  const visibilityObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) start(); else stop();
    });
  }, { threshold: 0 });
  visibilityObserver.observe(section);

  // On touch, skip the continuous loop entirely until a ripple needs it —
  // draw one static frame so the grid is visible at rest.
  if (isTouch) {
    draw(performance.now());
  } else {
    start();
  }
}

function markActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('[data-nav-link]').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initMobileMenu();
  initHeroChoreography();
  initReveal();
  initAccordion();
  initSpineCycle();
  initMethodSpine();
  initDiagnosticStages();
  initFounderParallax();
  initCursor();
  initMarquee();
  initKineticGrid();
  markActiveNav();
});
