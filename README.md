# Dr. Soly Mathew | Scientific Research Portfolio

A premium, production-ready scientific portfolio and publication repository for **Dr. Soly Mathew**, Materials Scientist specialising in flexible capacitive pressure sensors, polymer nanocomposites, wearable electronics, and practical AI-assisted scientific computing.

Designed with a contemporary Scandinavian scientific editorial aesthetic, Apple-grade typographical discipline, and WCAG 2.2 AA accessibility standards.

---

## 🔬 Scientific Profile & Verified Research

- **Researcher:** Dr. Soly Mathew
- **Specialisation:** Flexible Capacitive Pressure Sensors &bull; Polymer Nanocomposites &bull; Wearable Electronics &bull; Scientific Computing
- **Current Position:** Scientific Officer, Department of Art Conservation, Indian Institute of Heritage, Delhi (Jul 2026 &ndash; Present)
- **Academic Background:**
  - Project Associate, Indian Institute of Technology Jodhpur (IIT Jodhpur) (Oct 2025 &ndash; Jun 2026)
  - Assistant Professor (Adhoc), NSS College of Engineering, Palakkad (Aug 2025 &ndash; Oct 2025)
  - PhD in Materials Science, Department of Physics, School of Advanced Sciences, Vellore Institute of Technology (VIT), India
- **Doctoral Supervisor:** Dr. Krishnamoorthi Chintagumpala
- **Verified ORCID:** [0009-0001-2480-4682](https://orcid.org/0009-0001-2480-4682)
- **Target Audience:** Danish and international research institutions, industrial R&D teams, hiring managers, professors, and scientific collaborators.

---

## 📚 Verified Peer-Reviewed Publications

1. **Smart Materials and Structures (2026)**  
   *Fabrication and characterization of PDMS–TiO₂–ZnO ternary dielectric composite based flexible capacitance pressure sensors*  
   DOI: [10.1088/1361-665X/ae8228](https://doi.org/10.1088/1361-665X/ae8228) &bull; IOP Publishing

2. **Journal of Applied Polymer Science (2026)**  
   *A Highly Sensitive Capacitance Pressure Sensor With ZnO‐GO‐PVDF Dielectric Composite Layer for Wearable Applications*  
   DOI: [10.1002/app.70439](https://doi.org/10.1002/app.70439) &bull; Wiley

3. **Flexible and Printed Electronics (2025)**  
   *Design and characterization of PDMS-CB-ZnO-ternary composite based flexible capacitance pressure sensors for wearable applications*  
   DOI: [10.1088/2058-8585/adc81e](https://doi.org/10.1088/2058-8585/adc81e) &bull; IOP Publishing

4. **Sensors International (2025)**  
   *Design and characterization of zirconia nanoparticles filled polydimethylsiloxane composites based flexible capacitance pressure sensor*  
   DOI: [10.1016/j.sintl.2025.100330](https://doi.org/10.1016/j.sintl.2025.100330) &bull; Elsevier

5. **IEEE Access (2025)**  
   *Fabrication and Evaluation of Polydimethylsiloxane-La₂O₃ Composites-Based Flexible Capacitance Pressure Sensors’ Parameters and Applications*  
   DOI: [10.1109/ACCESS.2025.3577066](https://doi.org/10.1109/ACCESS.2025.3577066) &bull; IEEE

---

## 💻 Digital Research & AI-Assisted Scientific Computing

The portfolio highlights practical digital skills and computational tools applied directly to materials science research workflows:

- **Scientific Python Development:** Automated data pipelines for LCR meter logs, sensitivity curve fitting ($S = \delta(\Delta C/C_0)/\delta P$), hysteresis calculation, and response kinetics analysis (`NumPy`, `Pandas`, `SciPy`, `Matplotlib`, `pytest`).
- **AI-Assisted Research Workflows:** Practical prompt engineering with AI coding assistants (Claude Code, GitHub Copilot, Google Antigravity), custom domain instruction files (`SKILL.md` / `CLAUDE.md`), and automated test generation under strict human scientific review.
- **Evidence-Verified Literature Synthesis:** Literature exploration using existing MCP integrations (arXiv, PubMed, DOI cross-reference) with mandatory human source verification to eliminate scientific hallucinations.

### Practical Research Projects
1. **SensorLab Analytics:** Reproducible Python data-analysis pipeline for flexible capacitive pressure sensors.
2. **AI-Assisted Sensor Research:** AI-assisted scientific scripting and testing workflow with domain rules and human review.
3. **Scientific Literature & Research Workflow:** Evidence-backed literature review and citation verification methodology.

---

## 🛠️ Architecture & Directory Structure

```text
├── index.html                   # Main homepage (Hero, About, Expertise, Projects, Digital Research, Publications, Skills, CV, Contact)
├── computational/
│   └── index.html               # Digital Research & AI-Assisted Scientific Computing hub
├── research/
│   ├── index.html               # Research overview hub
│   ├── pdms-pressure-sensors.html    # Flagship Study 01 (PDMS-TiO2-ZnO CPS)
│   ├── nanocomposite-materials.html  # Flagship Study 02 (Interfacial MWS Polarization)
│   └── wearable-sensing.html         # Flagship Study 03 (ZnO-GO-PVDF Pulse Sensing)
├── publications/
│   └── index.html               # Searchable, filterable publications gallery
├── cv/
│   └── index.html               # Academic Curriculum Vitae & print-ready layout
├── css/
│   ├── tokens.css               # Design tokens (colors, typography, spacing, shadows)
│   ├── main.css                 # Base reset, typography scale, responsive containers
│   ├── components.css           # Header, buttons, cards, filter toolbar, modals
│   └── pages.css                # Layout styles for hero, research case studies, and CV
├── js/
│   ├── main.js                  # Sticky nav, mobile drawer, clipboard copy, modal controllers
│   ├── publications.js          # Client-side live search, year/topic filtering, BibTeX citations
│   └── computational.js         # Interactive capabilities explorer and project modal controller
├── data/
│   ├── publications.json        # Verified publication metadata in JSON format
│   └── computational-projects.json # Digital research project data and architecture specs
├── assets/
│   ├── images/
│   │   ├── dr_soly_mathew.jpg   # Professional researcher portrait
│   │   └── diagrams/            # Vector scientific SVGs (sensors, percolation, pulse, computational)
│   └── documents/
│       └── Dr_Soly_Mathew_Academic_CV.pdf # Downloadable academic CV (with latest appointments)
├── .nojekyll                    # GitHub Pages static asset bypass
└── README.md                    # Repository documentation
```

---

## 🚀 Local Development & Preview

Because the website is built with vanilla HTML5, CSS3, and JavaScript, it runs without any compilation step or heavy framework dependencies.

To run locally using a local development server:

```bash
# Using Node.js npx serve
npx serve .

# Or using Python 3
python -m http.server 8000
```

Then navigate to `http://localhost:3000` or `http://localhost:8000` in your web browser.

---

## 🌐 GitHub Pages Deployment

This repository is structured for direct deployment on **GitHub Pages**:

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "Deploy Dr. Soly Mathew Scientific Portfolio"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPOSITORY.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Navigate to **Settings** &rarr; **Pages**.
   - Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/(root)`.
   - Click **Save**.
3. Your website will be live in 1–2 minutes at:
   - `https://USERNAME.github.io/REPOSITORY/` (or your custom domain).

---

## ♿ Accessibility & Quality Standards

- **Target Standard:** WCAG 2.2 AA compliant.
- **Contrast Ratios:** Exceeds 4.5:1 for body copy and 3:1 for large display elements.
- **Keyboard Navigation:** Full focus management (`:focus-visible`), skip-to-content links, modal focus traps.
- **Reduced Motion:** Automatic support for `@media (prefers-reduced-motion: reduce)`.
- **Search Engine Optimization (SEO):** Semantic HTML5, canonical URLs, Open Graph tags, and Schema.org `Person` JSON-LD structured data.

---

## 📄 License & Attribution

Copyright &copy; 2026 Dr. Soly Mathew. All rights reserved. Scientific diagrams and publications are documented from peer-reviewed works.
