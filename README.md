# AETHER HYPERION GTS // Digital Flagship

> **The Quantum of Automotive Perfection.**  
> An ultra-premium, interactive digital showcase and bespoke atelier for the limited-production **AETHER Hyperion GTS** hypercar (1,850 BHP Quad-Motor Hybrid // 11,000 RPM Atmospheric V12).

---

## ⚡ Live Preview

The application is fully self-contained (HTML5, Tailwind CSS, Web Audio API, Vanilla ES6+ JavaScript).

To run locally using Python:
```bash
# Navigate to project directory
cd practice

# Launch local HTTP server
python -m http.server 8080
```
Open **[http://localhost:8080](http://localhost:8080)** in any modern browser.

---

## 🏎️ Key Features

### 1. Cinematic 1080p Hero & 3-Scene Video Reel
- **Full-Viewport Background Video**: High-bitrate loop with dark vignetting and scanline overlay.
- **Dynamic Scene Selector**: Switch between 3 track perspectives directly on the hero HUD:
  - `01 // Alpine Pass`: High-altitude mountain hairpins.
  - `02 // Track Panning`: High-speed circuit tracking shots.
  - `03 // V-Max Sprint`: Aerodynamic high-velocity shakedowns.
- **Floating Telemetry HUD**: Real-time performance indicators:
  - **1,850 BHP** System Output
  - **1.74s** 0–100 km/h (0–62 mph)
  - **452 km/h** (281 mph) Terminal Velocity
  - **1,200 kg** Active Venturi Downforce

### 2. The Atelier 3D Design Studio & Configurator
- **4-Angle Stance Selector**:
  - *Front 3/4 Aggressive Stance*
  - *Pure Aerodynamic Profile*
  - *Rear Diffuser & Active Wing*
  - *Driver-Centric Monocoque Cockpit*
- **6 Tri-Stage Paint Formulations**:
  - *Rosso Corsa Hypersonic* (Candy Tri-Coat Red)
  - *Liquid Quicksilver* (Mirrored Billet Aluminum)
  - *Nero Nocturne Satin* (Exposed Carbon Fiber)
  - *Verde Mantis Aero* (Hyper-Luminescent Track Green)
  - *Blu Le Mans Electric* (Deep Sapphire Metallic)
  - *Bianco Monaco Pearl* (Silicate Crystal Pearl)
- **Ambient Color Underglow**: The studio floor lighting dynamically matches the chosen exterior paint formulation.
- **Dynamic MSRP Counter**: Recalculates build price in real time with animated counter transitions.
- **Chassis VIN Generator**: Automatically computes unique build codes (e.g. `ATH-HYP-ROS-TUR-042`).
- **Wheel Architecture & Calipers**: Select forged aero turbofans, monoblock alloys, or Superleggera magnesium wheels paired with ceramic brake glaze finishes.

### 3. Procedural V12 Sound Laboratory & Tachometer
- **Web Audio API Engine**: Synthesizes authentic multi-oscillator engine harmonics without pre-recorded audio dependencies:
  - Sawtooth fundamental cylinder pulses (scaled to 11,000 RPM firing order)
  - Harmonic overtone screaming triangle wave
  - Sub-bass rumble frequency
  - Dynamic low-pass Biquad filter opening with throttle load
  - WaveShaper distortion node for raw exhaust rasp
- **Interactive HTML5 Canvas Tachometer**: Renders a dynamic radial gauge with redline shift lights (0–11,000 RPM).
- **Interactive Throttle Pedal & Controls**:
  - Click and hold the throttle button or press the **`Spacebar`** to rev the engine.
  - Exhaust afterburn flame burst animations ignite at high RPM.
  - Deceleration above 6,000 RPM automatically triggers overrun exhaust burble and backfire pops.

### 4. Aerodynamic Blueprint & Tactical Hotspots
- Pulsating radar markers across the chassis reveal tactical engineering telemetry:
  - **Active Venturi Front Splitter**: 420 kg downforce @ 250 km/h without aerodynamic stall.
  - **Carbon-Titanium Monocoque Tub**: 72,000 Nm/deg torsional rigidity at an 88 kg tub weight.
  - **Propulsion**: Atmospheric 6.5L V12 + tri-axial flux electric torque vectoring.
  - **Deceleration**: 410mm Carbon Silicon Carbide (CCMR) discs with 8-piston titanium calipers.
  - **Dual-Element Rear Wing**: Low-Drag V-Max mode transitioning to a 1.5G aerodynamic airbrake.

### 5. Dominance Quantified (Telemetry Benchmark Radar)
- Comparative technical matrix evaluating the Hyperion GTS against industry peers:
  - **Bugatti Chiron Super Sport** (8.0L Quad-Turbo W16)
  - **Rimac Nevera Time Attack** (Quad Permanent Magnet EV)
  - **Ferrari SF90 XX Stradale** (4.0L Twin-Turbo V8 Hybrid)

### 6. Aeronautical Cockpit Sanctuary & Ambient Lighting
- High-definition material inspection of Italian Alcantara and Grade-5 titanium switchgear.
- **4-Way Photonic Cabin Lighting Studio**:
  - `Cyber Cyan` // Futuristic cockpit illumination
  - `Amber GT` // Classic endurance night racing
  - `Track Crimson` // High-stress attack telemetry
  - `Arctic Ice` // High-contrast clarity

### 7. Media Archives & Full-Screen Lightbox
- High-definition gallery filterable by:
  - `All Archive`, `Track Action`, `Studio`, `Cockpit`, and `Engineering Details`.
- Full-screen lightbox modal with high-res zoom and technical captions.
- **Watch 4K Track Film**: Custom high-definition track reel video player modal.

### 8. VIP Allocation Commission System
- Multi-step booking form allowing prospective collectors to select VIP delivery circuits:
  - *Nürburgring Nordschleife Private Track Handover*
  - *Circuit de Monaco Private Yacht Harbor Handover*
  - *Silverstone Grand Prix Circuit VIP Track Delivery*
  - *Private Hangar Airfreight Delivery*
- Real-time generation of a numbered provisional digital allocation certificate (e.g. `#AETH-042 / 150`).

---

## 📂 File Architecture

```text
practice/
├── index.html        # Main semantic markup, glassmorphic HUD, modals, and sections
├── styles.css        # Custom CSS, carbon fiber patterns, animations, and glassmorphism
├── app.js            # Web Audio API engine, Canvas tachometer, studio logic & state store
└── README.md         # Documentation & project guide
```

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Markup & Semantics** | HTML5, Semantic Elements, Responsive Meta |
| **Styling & Theme** | Tailwind CSS (CDN), Custom CSS Variables, Glassmorphism, CSS Grid/Flexbox |
| **Typography** | Google Fonts (`Syne`, `Space Grotesk`, `Outfit`, `Inter`) |
| **Audio Synthesis** | Web Audio API (`AudioContext`, `OscillatorNode`, `BiquadFilterNode`, `WaveShaperNode`) |
| **Visual Rendering** | HTML5 Canvas 2D Context (`requestAnimationFrame` physics loop) |
| **State Management** | Vanilla JavaScript (ES6+ Event-driven store) |

---

## ⌨️ Keyboard Shortcuts & Interactions

| Action | Shortcut / Trigger |
| :--- | :--- |
| **V12 Throttle Rev** | Hold **`Spacebar`** or hold the **`PRESS & HOLD THROTTLE`** button |
| **Sound Engine Idle Pop** | Release throttle above 6,000 RPM |
| **Ambient Cabin Drone** | Click the **`AUDIO: OFF / ON`** equalizer badge in the top bar |
| **View Scene Switcher** | Click **`01`**, **`02`**, or **`03`** on the hero reel HUD |
| **Exit Modals** | Click the **`✕`** icon or click outside the modal dialog |

---

## 📜 Homologation & Legal Notice

*AETHER Hyperion GTS is a concept demonstration showcasing high-end interactive automotive UI/UX design, Web Audio sound synthesis, and aerodynamic telemetry visualization.*  
*All rights reserved © 2026 AETHER AUTOMOTIVE AG.*
