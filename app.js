/**
 * AETHER HYPERION GTS - CORE INTERACTIVE ENGINE
 * Luxury Supercar Web Platform
 */

// ==========================================
// 1. DATA DEFINITIONS & CONFIGURATIONS
// ==========================================

const CAR_MEDIA = {
  angles: {
    front: {
      title: "Front 3/4 Aggressive Stance",
      subtitle: "Low-slung predatory stance featuring carbon splitter and active vortex tunnels",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2000&q=85"
    },
    profile: {
      title: "Pure Aerodynamic Profile",
      subtitle: "Tear-drop aerospace canopy with dihedral synchro-helix actuation doors",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85"
    },
    rear: {
      title: "Rear Diffuser & Active Wing",
      subtitle: "Dual venturi underbody with 3D-printed titanium Inconel quad exhaust",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2000&q=85"
    },
    cockpit: {
      title: "Driver-Centric Monocoque Cockpit",
      subtitle: "Hand-stitched Italian Alcantara with tactile milled titanium switchgear",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=2000&q=85"
    }
  },
  paints: [
    {
      id: "rosso",
      name: "Rosso Corsa Hypersonic",
      type: "Multi-Coat Candy Tri-Stage",
      colorCode: "#dc2626",
      accent: "#f87171",
      filterClass: "paint-rosso",
      price: 15000,
      imageOverride: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=2000&q=85"
    },
    {
      id: "quicksilver",
      name: "Liquid Quicksilver",
      type: "Billet Aluminum Mirrored Metallic",
      colorCode: "#94a3b8",
      accent: "#e2e8f0",
      filterClass: "paint-quicksilver",
      price: 0,
      imageOverride: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=85"
    },
    {
      id: "nocturne",
      name: "Nero Nocturne Satin",
      type: "Matte Exposed Forged Carbon Fiber",
      colorCode: "#171717",
      accent: "#404040",
      filterClass: "paint-nocturne",
      price: 28000,
      imageOverride: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=2000&q=85"
    },
    {
      id: "mantis",
      name: "Verde Mantis Aero",
      type: "Hyper-Luminescent Track Green",
      colorCode: "#84cc16",
      accent: "#bef264",
      filterClass: "paint-mantis",
      price: 22000,
      imageOverride: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=2000&q=85"
    },
    {
      id: "lemans",
      name: "Blu Le Mans Electric",
      type: "Deep Sapphire Metallic Flake",
      colorCode: "#2563eb",
      accent: "#60a5fa",
      filterClass: "paint-lemans",
      price: 18000,
      imageOverride: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=2000&q=85"
    },
    {
      id: "monaco",
      name: "Bianco Monaco Pearl",
      type: "Silicate Crystal Pearl Luster",
      colorCode: "#f1f5f9",
      accent: "#ffffff",
      filterClass: "paint-monaco",
      price: 12000,
      imageOverride: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=2000&q=85"
    }
  ],
  wheels: [
    {
      id: "turbofan",
      name: "21\" Aero-Disc Turbofans",
      desc: "Autoclaved pre-preg carbon fiber brake extraction cooling fins",
      price: 24000
    },
    {
      id: "forged",
      name: "20/21\" Forged Monoblock",
      desc: "Ultra-high tensile aerospace aluminum milled from solid 80kg billet",
      price: 0
    },
    {
      id: "magnesium",
      name: "Superleggera Magnesium",
      desc: "Formula 1 spec lightweight alloy reducing unsprung mass by 14.8 kg",
      price: 36000
    }
  ],
  calipers: [
    { id: "gold", name: "Solar Gold Ceramic", color: "#eab308" },
    { id: "crimson", name: "Rosso Scuderia", color: "#dc2626" },
    { id: "cyan", name: "Electric Cyan", color: "#06b6d4" },
    { id: "stealth", name: "Stealth Titanium", color: "#475569" }
  ],
  hotspots: [
    {
      id: "splitter",
      title: "Active Venturi Front Splitter",
      category: "AERODYNAMICS",
      stat: "420 kg Downforce @ 250 km/h",
      desc: "Dual electro-mechanical flaps dynamically adjust ride height and angle of attack to suck the nose to the tarmac without stalling frontal airflow.",
      x: 18,
      y: 62
    },
    {
      id: "monocoque",
      title: "Carbon-Titanium Monocoque Tub",
      category: "CHASSIS ARCHITECTURE",
      stat: "72,000 Nm/deg Rigidity",
      desc: "A proprietary weave of Toray T1000 carbon fiber bonded with titanium threads, delivering extreme occupant safety at a core tub weight of just 88 kg.",
      x: 48,
      y: 50
    },
    {
      id: "powertrain",
      title: "6.5L V12 + Tri-Axial Flux Motors",
      category: "PROPULSION",
      stat: "1,850 HP // 1,750 Nm Torque",
      desc: "Atmospheric screaming V12 revving to 11,000 RPM, paired with three lightweight axial-flux electric motors providing instant torque vectoring.",
      x: 62,
      y: 45
    },
    {
      id: "brakes",
      title: "Carbon Silicon Carbide (CCMR)",
      category: "DECELERATION",
      stat: "100-0 km/h in 26.8 Meters",
      desc: "410mm front ventilated discs clamped by 8-piston monoblock titanium calipers capable of continuous 950°C track temperatures without fade.",
      x: 28,
      y: 72
    },
    {
      id: "wing",
      title: "Active Dual-Element Rear Wing",
      category: "AERO & AIRBRAKE",
      stat: "1.5G Aerodynamic Airbrake",
      desc: "Twin hydraulic struts alter camber from Low-Drag V-Max (Cd 0.28) to High-Downforce Cornering, and deploys vertically in 0.2 seconds under hard braking.",
      x: 82,
      y: 38
    }
  ],
  gallery: [
    {
      category: "track",
      title: "Apex Cornering at Nürburgring Nordschleife",
      subtitle: "Aerodynamic stability under 2.1g lateral load in high-speed Karussell banking",
      image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=80"
    },
    {
      category: "studio",
      title: "Sculpted Air Extraction Flanks",
      subtitle: "Computational fluid dynamics generated negative pressure side ducts",
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=80"
    },
    {
      category: "cockpit",
      title: "OLED Telemetry Steering Wheel",
      subtitle: "Integrated shift lights, rotary drive-mode dials, and forged carbon tactile paddles",
      image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1600&q=80"
    },
    {
      category: "track",
      title: "High-Speed Shakedown Run",
      subtitle: "Surpassing 400 km/h during endurance velocity trials on Ehra-Lessien straight",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80"
    },
    {
      category: "details",
      title: "Carbon Ceramic Matrix & Forged Hubs",
      subtitle: "Center-locking titanium wheel nuts inspired by FIA World Endurance Championship",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1600&q=80"
    },
    {
      category: "cockpit",
      title: "Bespoke Italian Leather & Alcantara Craft",
      subtitle: "Hand-finished saddle stitch with laser-perforated cooling apertures",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1600&q=80"
    },
    {
      category: "details",
      title: "Rear Diffuser Matrix & LED Blade",
      subtitle: "Continuous edge-to-edge photonic blade with integrated brake aero lights",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80"
    },
    {
      category: "track",
      title: "Night Circuit Velocity Testing",
      subtitle: "Laser matrix headlights illuminating 650 meters ahead during 24-hour endurance runs",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1600&q=80"
    }
  ]
};

// State Store
const state = {
  currentAngle: "front",
  selectedPaint: CAR_MEDIA.paints[0],
  selectedWheel: CAR_MEDIA.wheels[0],
  selectedCaliper: CAR_MEDIA.calipers[0],
  basePrice: 3450000,
  audioMuted: true,
  engineRunning: false,
  currentRpm: 900,
  targetRpm: 900,
  driveMode: "CORSA",
  activeGalleryFilter: "all",
  activeHotspot: null,
  cabinLighting: "cyan"
};

// ==========================================
// 2. WEB AUDIO SYNTHESIS & V12 ENGINE SOUND
// ==========================================

class HypercarAudioEngine {
  constructor() {
    this.ctx = null;
    this.initialized = false;
    
    // Engine nodes
    this.osc1 = null;
    this.osc2 = null;
    this.subOsc = null;
    this.engineGain = null;
    this.filter = null;
    this.distortion = null;
    
    // Ambient drone
    this.ambientGain = null;
    this.ambientOsc1 = null;
    this.ambientOsc2 = null;
  }

  init() {
    if (this.initialized) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();

    // 1. Distortion WaveShaper
    this.distortion = this.ctx.createWaveShaper();
    this.distortion.curve = this.makeDistortionCurve(18);
    this.distortion.oversample = '4x';

    // 2. Dynamic Low-Pass Filter
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(3.5, this.ctx.currentTime);

    // 3. Engine Master Gain
    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.setValueAtTime(0, this.ctx.currentTime);

    // 4. Oscillators for V12 Firing Order
    // Fundamental cylinder pulses
    this.osc1 = this.ctx.createOscillator();
    this.osc1.type = 'sawtooth';
    this.osc1.frequency.setValueAtTime(90, this.ctx.currentTime);

    // Harmonic screaming overtone
    this.osc2 = this.ctx.createOscillator();
    this.osc2.type = 'triangle';
    this.osc2.frequency.setValueAtTime(180, this.ctx.currentTime);

    // Sub rumble
    this.subOsc = this.ctx.createOscillator();
    this.subOsc.type = 'sine';
    this.subOsc.frequency.setValueAtTime(45, this.ctx.currentTime);

    // Wire Engine Nodes
    this.osc1.connect(this.distortion);
    this.osc2.connect(this.distortion);
    this.subOsc.connect(this.filter);
    this.distortion.connect(this.filter);
    this.filter.connect(this.engineGain);
    this.engineGain.connect(this.ctx.destination);

    this.osc1.start();
    this.osc2.start();
    this.subOsc.start();

    // 5. Setup Luxury Ambient Cabin Tone
    this.setupAmbientSound();

    this.initialized = true;
  }

  makeDistortionCurve(amount) {
    const k = typeof amount === 'number' ? amount : 50;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  setupAmbientSound() {
    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0, this.ctx.currentTime);

    this.ambientOsc1 = this.ctx.createOscillator();
    this.ambientOsc1.type = 'sine';
    this.ambientOsc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 note

    this.ambientOsc2 = this.ctx.createOscillator();
    this.ambientOsc2.type = 'sine';
    this.ambientOsc2.frequency.setValueAtTime(82.4, this.ctx.currentTime); // E2 fifth

    const ambientFilter = this.ctx.createBiquadFilter();
    ambientFilter.type = 'lowpass';
    ambientFilter.frequency.setValueAtTime(200, this.ctx.currentTime);

    this.ambientOsc1.connect(ambientFilter);
    this.ambientOsc2.connect(ambientFilter);
    ambientFilter.connect(this.ambientGain);
    this.ambientGain.connect(this.ctx.destination);

    this.ambientOsc1.start();
    this.ambientOsc2.start();
  }

  toggleAmbientAudio(unmute) {
    if (!this.initialized) this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();

    if (unmute) {
      this.ambientGain.gain.linearRampToValueAtTime(0.06, this.ctx.currentTime + 1.2);
    } else {
      this.ambientGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5);
    }
  }

  startEngine() {
    if (!this.initialized) this.init();
    if (this.ctx.state === 'suspended') this.ctx.resume();

    this.engineGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.engineGain.gain.linearRampToValueAtTime(0.25, this.ctx.currentTime + 0.3);
  }

  stopEngine() {
    if (!this.initialized) return;
    this.engineGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.engineGain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 0.5);
  }

  updateRpm(rpm) {
    if (!this.initialized || !this.ctx) return;
    const now = this.ctx.currentTime;
    
    // V12 fundamental: 12 cylinders / 2 revs per cycle = 6 ignition pulses per rev
    // Hz = (RPM / 60) * 6 = RPM / 10
    const fundamentalHz = Math.max(30, (rpm / 10) * 0.75);
    
    this.osc1.frequency.setTargetAtTime(fundamentalHz, now, 0.05);
    this.osc2.frequency.setTargetAtTime(fundamentalHz * 2.01, now, 0.05);
    this.subOsc.frequency.setTargetAtTime(fundamentalHz * 0.5, now, 0.05);

    // Cutoff frequency opens with throttle
    const cutoff = 300 + (rpm / 11000) * 7200;
    this.filter.frequency.setTargetAtTime(cutoff, now, 0.06);

    // Slight gain boost at high rpm
    const targetGain = 0.22 + (rpm / 11000) * 0.28;
    this.engineGain.gain.setTargetAtTime(targetGain, now, 0.04);
  }

  triggerBackfirePop() {
    if (!this.initialized || !this.ctx) return;
    const bufferSize = this.ctx.sampleRate * 0.08;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    
    const popFilter = this.ctx.createBiquadFilter();
    popFilter.type = 'bandpass';
    popFilter.frequency.value = 650;
    popFilter.Q.value = 2.0;

    const popGain = this.ctx.createGain();
    popGain.gain.value = 0.45;

    noise.connect(popFilter);
    popFilter.connect(popGain);
    popGain.connect(this.ctx.destination);
    noise.start();
  }
}

const audio = new HypercarAudioEngine();

// ==========================================
// 3. STUDIO CONFIGURATOR LOGIC
// ==========================================

function updateStudioPreview() {
  const previewImg = document.getElementById("studio-car-image");
  const angleTitle = document.getElementById("angle-title");
  const angleSubtitle = document.getElementById("angle-subtitle");
  const currentPaintBadge = document.getElementById("current-paint-badge");
  const currentWheelBadge = document.getElementById("current-wheel-badge");
  const currentCaliperBadge = document.getElementById("current-caliper-badge");
  const livePriceDisplay = document.getElementById("live-price-display");
  const buildCodeDisplay = document.getElementById("build-code-display");

  // Determine current image
  let targetSrc = CAR_MEDIA.angles[state.currentAngle].image;
  if (state.currentAngle === "front" && state.selectedPaint.imageOverride) {
    targetSrc = state.selectedPaint.imageOverride;
  }

  // Smooth image swap transition
  if (previewImg) {
    previewImg.style.opacity = "0.3";
    previewImg.style.transform = "scale(0.98)";
    setTimeout(() => {
      previewImg.src = targetSrc;
      previewImg.onload = () => {
        previewImg.style.opacity = "1";
        previewImg.style.transform = "scale(1)";
      };
    }, 150);
  }

  // Text updates
  if (angleTitle) angleTitle.textContent = CAR_MEDIA.angles[state.currentAngle].title;
  if (angleSubtitle) angleSubtitle.textContent = CAR_MEDIA.angles[state.currentAngle].subtitle;
  if (currentPaintBadge) currentPaintBadge.textContent = state.selectedPaint.name;
  if (currentWheelBadge) currentWheelBadge.textContent = state.selectedWheel.name;
  if (currentCaliperBadge) currentCaliperBadge.textContent = state.selectedCaliper.name;

  // Dynamic Studio Underglow matching paint selection
  const ambientGlow = document.getElementById("studio-ambient-glow");
  if (ambientGlow) {
    ambientGlow.style.background = `radial-gradient(circle at 50% 50%, ${state.selectedPaint.colorCode}40 0%, transparent 70%)`;
  }

  // Calculate Price
  const totalPrice = state.basePrice + state.selectedPaint.price + state.selectedWheel.price;
  if (livePriceDisplay) {
    animateValue(livePriceDisplay, parseInt(livePriceDisplay.getAttribute("data-current-val") || 3450000), totalPrice, 600);
    livePriceDisplay.setAttribute("data-current-val", totalPrice);
  }

  // Unique VIN Generation
  const vin = `ATH-HYP-${state.selectedPaint.id.toUpperCase().slice(0, 3)}-${state.selectedWheel.id.toUpperCase().slice(0, 3)}-${Math.abs(totalPrice % 999)}`;
  if (buildCodeDisplay) buildCodeDisplay.textContent = vin;
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    obj.innerHTML = `$${current.toLocaleString()}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// Render Swatches
function renderConfiguratorControls() {
  // Paint Swatches
  const paintContainer = document.getElementById("paint-swatches");
  if (paintContainer) {
    paintContainer.innerHTML = CAR_MEDIA.paints.map((p) => `
      <button 
        data-paint-id="${p.id}"
        class="paint-swatch-btn group relative flex items-center gap-3 p-2.5 rounded-xl border ${p.id === state.selectedPaint.id ? 'border-red-500 bg-white/10' : 'border-white/10 bg-white/5'} hover:border-white/30 transition-all text-left w-full"
      >
        <span class="w-7 h-7 rounded-full shadow-inner border border-white/20 shrink-0" style="background-color: ${p.colorCode}; box-shadow: 0 0 10px ${p.colorCode}66"></span>
        <div class="min-w-0 flex-1">
          <div class="text-xs font-semibold text-white truncate">${p.name}</div>
          <div class="text-[10px] text-gray-400 font-tech">${p.price === 0 ? 'Included' : `+$${p.price.toLocaleString()}`}</div>
        </div>
      </button>
    `).join("");

    paintContainer.querySelectorAll(".paint-swatch-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-paint-id");
        state.selectedPaint = CAR_MEDIA.paints.find(p => p.id === id);
        renderConfiguratorControls();
        updateStudioPreview();
      });
    });
  }

  // Wheel Options
  const wheelContainer = document.getElementById("wheel-options");
  if (wheelContainer) {
    wheelContainer.innerHTML = CAR_MEDIA.wheels.map(w => `
      <button 
        data-wheel-id="${w.id}"
        class="wheel-btn p-3 rounded-xl border text-left transition-all ${w.id === state.selectedWheel.id ? 'border-red-500 bg-white/10' : 'border-white/10 bg-white/5'} hover:border-white/30"
      >
        <div class="flex items-center justify-between mb-1">
          <span class="text-xs font-bold text-white font-tech">${w.name}</span>
          <span class="text-[11px] text-red-400 font-semibold">${w.price === 0 ? 'Standard' : `+$${w.price.toLocaleString()}`}</span>
        </div>
        <p class="text-[10px] text-gray-400 leading-snug">${w.desc}</p>
      </button>
    `).join("");

    wheelContainer.querySelectorAll(".wheel-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-wheel-id");
        state.selectedWheel = CAR_MEDIA.wheels.find(w => w.id === id);
        renderConfiguratorControls();
        updateStudioPreview();
      });
    });
  }

  // Calipers
  const caliperContainer = document.getElementById("caliper-options");
  if (caliperContainer) {
    caliperContainer.innerHTML = CAR_MEDIA.calipers.map(c => `
      <button 
        data-caliper-id="${c.id}"
        title="${c.name}"
        class="caliper-btn w-9 h-9 rounded-full border-2 transition-all flex items-center justify-center ${c.id === state.selectedCaliper.id ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-80 hover:opacity-100'}"
        style="background: ${c.color}"
      >
        ${c.id === state.selectedCaliper.id ? '<span class="w-2 h-2 rounded-full bg-white"></span>' : ''}
      </button>
    `).join("");

    caliperContainer.querySelectorAll(".caliper-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-caliper-id");
        state.selectedCaliper = CAR_MEDIA.calipers.find(c => c.id === id);
        renderConfiguratorControls();
        updateStudioPreview();
      });
    });
  }
}

// Setup View Angle Buttons
function setupAngleButtons() {
  const angleBtns = document.querySelectorAll("[data-angle]");
  angleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      angleBtns.forEach(b => b.classList.remove("bg-white/20", "border-red-500", "text-white"));
      btn.classList.add("bg-white/20", "border-red-500", "text-white");
      state.currentAngle = btn.getAttribute("data-angle");
      updateStudioPreview();
    });
  });
}

// ==========================================
// 4. INTERACTIVE HOTSPOTS ENGINE
// ==========================================

function setupHotspots() {
  const container = document.getElementById("hotspot-container");
  const modal = document.getElementById("hotspot-modal");
  const modalCategory = document.getElementById("hotspot-modal-cat");
  const modalTitle = document.getElementById("hotspot-modal-title");
  const modalStat = document.getElementById("hotspot-modal-stat");
  const modalDesc = document.getElementById("hotspot-modal-desc");
  const modalClose = document.getElementById("hotspot-modal-close");

  if (!container) return;

  container.innerHTML = CAR_MEDIA.hotspots.map((h, i) => `
    <div 
      class="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
      style="left: ${h.x}%; top: ${h.y}%;"
      data-hotspot-index="${i}"
    >
      <div class="relative flex items-center justify-center w-7 h-7">
        <span class="radar-pulse absolute text-red-500"></span>
        <span class="w-4 h-4 rounded-full bg-red-600 border-2 border-white shadow-lg transition-transform group-hover:scale-125"></span>
      </div>
      <!-- Tooltip Tag -->
      <div class="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap bg-black/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 shadow-xl">
        <p class="text-[10px] text-red-400 font-tech font-bold uppercase tracking-wider">${h.category}</p>
        <p class="text-xs font-bold text-white font-display">${h.title}</p>
      </div>
    </div>
  `).join("");

  container.querySelectorAll("[data-hotspot-index]").forEach(elem => {
    elem.addEventListener("click", () => {
      const idx = parseInt(elem.getAttribute("data-hotspot-index"));
      const data = CAR_MEDIA.hotspots[idx];
      state.activeHotspot = data;

      if (modal) {
        modalCategory.textContent = data.category;
        modalTitle.textContent = data.title;
        modalStat.textContent = data.stat;
        modalDesc.textContent = data.desc;
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    });
  });

  if (modalClose && modal) {
    modalClose.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
  }
}

// ==========================================
// 5. RPM TACHOMETER & V12 REV ENGINE SIMULATOR
// ==========================================

let revInterval = null;
let isReving = false;

function initTachometer() {
  const canvas = document.getElementById("rpm-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const digitalRpm = document.getElementById("digital-rpm");
  const revBtn = document.getElementById("throttle-pedal-btn");
  const flameEffect = document.getElementById("exhaust-flame");

  function drawGauge() {
    const w = canvas.width;
    const h = canvas.height;
    const centerX = w / 2;
    const centerY = h / 2;
    const radius = w * 0.4;

    ctx.clearRect(0, 0, w, h);

    // Background track arc (from 135 deg to 405 deg)
    const startAngle = Math.PI * 0.75;
    const endAngle = Math.PI * 2.25;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineWidth = 14;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    ctx.stroke();

    // Redline Zone arc (9,500 to 11,000 RPM)
    const redlineStart = startAngle + (endAngle - startAngle) * (9500 / 11000);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, redlineStart, endAngle);
    ctx.lineWidth = 14;
    ctx.strokeStyle = "rgba(239, 68, 68, 0.3)";
    ctx.stroke();

    // Current RPM Arc
    const rpmFrac = Math.min(1, Math.max(0, state.currentRpm / 11000));
    const currentAngle = startAngle + (endAngle - startAngle) * rpmFrac;

    const gradient = ctx.createLinearGradient(0, h, w, 0);
    gradient.addColorStop(0, "#06b6d4");
    gradient.addColorStop(0.6, "#f59e0b");
    gradient.addColorStop(1, "#ef4444");

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, currentAngle);
    ctx.lineWidth = 14;
    ctx.strokeStyle = gradient;
    ctx.lineCap = "round";
    ctx.stroke();

    // Ticks & Numbers
    for (let r = 0; r <= 11; r++) {
      const angle = startAngle + (endAngle - startAngle) * (r / 11);
      const innerR = radius - 16;
      const outerR = radius - 6;

      const x1 = centerX + Math.cos(angle) * innerR;
      const y1 = centerY + Math.sin(angle) * innerR;
      const x2 = centerX + Math.cos(angle) * outerR;
      const y2 = centerY + Math.sin(angle) * outerR;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineWidth = r >= 10 ? 3 : 1.5;
      ctx.strokeStyle = r >= 10 ? "#ef4444" : "rgba(255, 255, 255, 0.3)";
      ctx.stroke();
    }

    // Smooth RPM physics loop
    if (isReving) {
      state.targetRpm = 10850;
      state.currentRpm += (state.targetRpm - state.currentRpm) * 0.15;
      if (flameEffect) flameEffect.classList.remove("opacity-0");
    } else {
      state.targetRpm = 950;
      const decel = (state.targetRpm - state.currentRpm) * 0.08;
      state.currentRpm += decel;
      if (flameEffect) flameEffect.classList.add("opacity-0");
    }

    // Audio frequency update
    if (state.engineRunning) {
      audio.updateRpm(state.currentRpm);
    }

    if (digitalRpm) {
      digitalRpm.textContent = Math.round(state.currentRpm).toLocaleString();
    }

    requestAnimationFrame(drawGauge);
  }

  requestAnimationFrame(drawGauge);

  // Event handlers for Rev Pedal
  function startRev() {
    isReving = true;
    if (!state.engineRunning) {
      state.engineRunning = true;
      audio.startEngine();
      const ignitionIndicator = document.getElementById("engine-status-text");
      if (ignitionIndicator) {
        ignitionIndicator.textContent = "V12 ACTIVE // 11,000 RPM READY";
        ignitionIndicator.classList.remove("text-gray-500");
        ignitionIndicator.classList.add("text-red-500", "glow-text-red");
      }
    }
  }

  function stopRev() {
    if (isReving) {
      isReving = false;
      // Trigger pops & bangs if decel from high RPM
      if (state.currentRpm > 6000) {
        audio.triggerBackfirePop();
        setTimeout(() => audio.triggerBackfirePop(), 120);
      }
    }
  }

  if (revBtn) {
    revBtn.addEventListener("mousedown", startRev);
    window.addEventListener("mouseup", stopRev);

    revBtn.addEventListener("touchstart", (e) => {
      e.preventDefault();
      startRev();
    });
    window.addEventListener("touchend", stopRev);
  }

  // Keyboard shortcut: Spacebar to rev!
  window.addEventListener("keydown", (e) => {
    if (e.code === "Space" && e.target.tagName !== "INPUT" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      if (!isReving) startRev();
    }
  });

  window.addEventListener("keyup", (e) => {
    if (e.code === "Space") {
      stopRev();
    }
  });
}

// ==========================================
// 6. GALLERY & LIGHTBOX
// ==========================================

function initGallery() {
  const container = document.getElementById("gallery-grid");
  const filterBtns = document.querySelectorAll("[data-gallery-filter]");
  const lightbox = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxSubtitle = document.getElementById("lightbox-subtitle");
  const lightboxClose = document.getElementById("lightbox-close");

  function renderGallery(filter = "all") {
    if (!container) return;
    const filtered = filter === "all" 
      ? CAR_MEDIA.gallery 
      : CAR_MEDIA.gallery.filter(item => item.category === filter);

    container.innerHTML = filtered.map((item, idx) => `
      <div 
        class="gallery-card group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer border border-white/10 glass-panel-subtle hover:border-white/30 transition-all duration-500"
        data-img-src="${item.image}"
        data-img-title="${item.title}"
        data-img-sub="${item.subtitle}"
      >
        <img 
          src="${item.image}" 
          alt="${item.title}" 
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
        <div class="absolute bottom-0 inset-x-0 p-5 transform transition-transform duration-300">
          <span class="inline-block text-[10px] font-tech font-bold uppercase tracking-widest text-red-400 mb-1 px-2 py-0.5 rounded bg-red-950/60 border border-red-500/30">${item.category}</span>
          <h4 class="text-sm md:text-base font-bold text-white font-display mb-1 group-hover:text-red-300 transition-colors">${item.title}</h4>
          <p class="text-xs text-gray-300 line-clamp-1">${item.subtitle}</p>
        </div>
      </div>
    `).join("");

    // Bind lightbox clicks
    container.querySelectorAll(".gallery-card").forEach(card => {
      card.addEventListener("click", () => {
        if (!lightbox) return;
        lightboxImg.src = card.getAttribute("data-img-src");
        lightboxTitle.textContent = card.getAttribute("data-img-title");
        lightboxSubtitle.textContent = card.getAttribute("data-img-sub");
        lightbox.classList.remove("hidden");
        lightbox.classList.add("flex");
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("bg-white/20", "border-red-500", "text-white"));
      btn.classList.add("bg-white/20", "border-red-500", "text-white");
      const f = btn.getAttribute("data-gallery-filter");
      renderGallery(f);
    });
  });

  if (lightboxClose && lightbox) {
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.add("hidden");
      lightbox.classList.remove("flex");
    });
  }

  renderGallery("all");
}

// ==========================================
// 7. VIDEO SHOWCASE MODAL
// ==========================================

function setupVideoModal() {
  const watchFilmBtn = document.getElementById("watch-film-btn");
  const modal = document.getElementById("video-modal");
  const modalVideo = document.getElementById("modal-player");
  const closeBtn = document.getElementById("video-modal-close");

  if (watchFilmBtn && modal && modalVideo) {
    watchFilmBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
      modal.classList.add("flex");
      modalVideo.play();
    });
  }

  if (closeBtn && modal && modalVideo) {
    closeBtn.addEventListener("click", () => {
      modalVideo.pause();
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
  }
}

// ==========================================
// 8. COCKPIT AMBIENT LIGHTING SWITCHER
// ==========================================

function setupCockpitLighting() {
  const cockpitImg = document.getElementById("cockpit-interior-img");
  const lightBtns = document.querySelectorAll("[data-cockpit-glow]");
  const glowOverlay = document.getElementById("cockpit-ambient-glow");

  const themes = {
    cyan: { color: "rgba(6, 182, 212, 0.35)", filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.4))" },
    amber: { color: "rgba(245, 158, 11, 0.35)", filter: "drop-shadow(0 0 30px rgba(245, 158, 11, 0.4))" },
    crimson: { color: "rgba(239, 68, 68, 0.35)", filter: "drop-shadow(0 0 30px rgba(239, 68, 68, 0.4))" },
    ice: { color: "rgba(224, 242, 254, 0.3)", filter: "drop-shadow(0 0 30px rgba(224, 242, 254, 0.4))" }
  };

  lightBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-cockpit-glow");
      lightBtns.forEach(b => b.classList.remove("ring-2", "ring-white"));
      btn.classList.add("ring-2", "ring-white");

      if (glowOverlay && themes[mode]) {
        glowOverlay.style.background = `radial-gradient(ellipse at 50% 65%, ${themes[mode].color} 0%, transparent 60%)`;
      }
    });
  });
}

// ==========================================
// 9. VIP ALLOCATION MODAL & RESERVATION
// ==========================================

function setupReservationModal() {
  const openBtns = document.querySelectorAll(".btn-open-reserve");
  const modal = document.getElementById("reserve-modal");
  const closeBtn = document.getElementById("reserve-close-btn");
  const form = document.getElementById("reserve-form");
  const successState = document.getElementById("reserve-success-state");
  const formFields = document.getElementById("reserve-form-fields");
  const vipSerial = document.getElementById("vip-serial-number");

  openBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (modal) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    });
  });

  if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const randomAlloc = Math.floor(Math.random() * 120) + 1;
      const serial = `#AETH-${String(randomAlloc).padStart(3, "0")} / 150`;
      if (vipSerial) vipSerial.textContent = serial;

      if (formFields && successState) {
        formFields.classList.add("hidden");
        successState.classList.remove("hidden");
      }
    });
  }
}

// ==========================================
// 10. GLOBAL AUDIO TOGGLE & NAV BAR
// ==========================================

function setupHeroVideoSwitcher() {
  const sceneBtns = document.querySelectorAll(".btn-scene");
  const video = document.getElementById("hero-bg-video");

  sceneBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-video-scene");
      sceneBtns.forEach(b => {
        b.classList.remove("bg-red-600", "text-white");
        b.classList.add("bg-white/5", "text-gray-300");
      });
      btn.classList.remove("bg-white/5", "text-gray-300");
      btn.classList.add("bg-red-600", "text-white");

      if (video) {
        video.style.opacity = "0.2";
        setTimeout(() => {
          video.src = src;
          video.load();
          video.play();
          video.style.opacity = "1";
        }, 300);
      }
    });
  });
}

function setupAudioToggle() {
  const toggleBtn = document.getElementById("audio-toggle-btn");
  const soundBars = document.querySelectorAll(".sound-bar");
  const statusText = document.getElementById("audio-status-label");

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    state.audioMuted = !state.audioMuted;
    audio.toggleAmbientAudio(!state.audioMuted);

    if (state.audioMuted) {
      soundBars.forEach(b => b.classList.add("opacity-30"));
      if (statusText) statusText.textContent = "AUDIO: OFF";
    } else {
      soundBars.forEach(b => b.classList.remove("opacity-30"));
      if (statusText) statusText.textContent = "CABIN ACOUSTICS: ON";
    }
  });
}

// Mobile Menu Navigation
function setupMobileMenu() {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-nav-menu");
  const links = document.querySelectorAll(".mobile-nav-link");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  links.forEach(l => {
    l.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderConfiguratorControls();
  setupAngleButtons();
  updateStudioPreview();
  setupHotspots();
  initTachometer();
  initGallery();
  setupVideoModal();
  setupCockpitLighting();
  setupReservationModal();
  setupAudioToggle();
  setupHeroVideoSwitcher();
  setupMobileMenu();
});
