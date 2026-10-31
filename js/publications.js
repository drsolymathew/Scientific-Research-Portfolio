/**
 * Publications Module - Dr. Soly Mathew Portfolio
 * Search, filter, and render peer-reviewed publications
 */

(function () {
  'use strict';

  // Verified publications dataset (embedded fallback ensures zero failures in static offline/file preview)
  const fallbackPublications = [
    {
      id: "mathew-2026-smart-materials",
      title: "Fabrication and characterization of PDMS–TiO2–ZnO ternary dielectric composite based flexible capacitance pressure sensors",
      authors: ["Soly Mathew", "Krishnamoorthi Chintagumpala"],
      journal: "Smart Materials and Structures",
      publisher: "IOP Publishing",
      year: 2026,
      month: "July",
      doi: "10.1088/1361-665X/ae8228",
      url: "https://doi.org/10.1088/1361-665X/ae8228",
      type: "Journal Article",
      topics: ["PDMS Composites", "Ternary Dielectrics", "Pressure Sensors"],
      featured: true,
      summary: "Engineered parallel-plate capacitive pressure sensors utilizing spin-coated PDMS elastomer thin films loaded with ternary TiO2 and ZnO nanoparticle fillers. Achieved substantial sensitivity enhancement within the linear 0–1.5 kPa regime due to amplified dielectric permittivity and optimized mechanical compliance under pressure.",
      bibtex: "@article{Mathew_2026_SmartMater,\n  author = {Mathew, Soly and Chintagumpala, Krishnamoorthi},\n  title = {Fabrication and characterization of PDMS–TiO2–ZnO ternary dielectric composite based flexible capacitance pressure sensors},\n  journal = {Smart Materials and Structures},\n  year = {2026},\n  volume = {35},\n  number = {7},\n  doi = {10.1088/1361-665X/ae8228}\n}"
    },
    {
      id: "mathew-2026-applied-polymer",
      title: "A Highly Sensitive Capacitance Pressure Sensor With ZnO‐GO‐PVDF Dielectric Composite Layer for Wearable Applications",
      authors: ["Soly Mathew", "Krishnamoorthi Chintagumpala"],
      journal: "Journal of Applied Polymer Science",
      publisher: "Wiley",
      year: 2026,
      month: "April",
      doi: "10.1002/app.70439",
      url: "https://doi.org/10.1002/app.70439",
      type: "Journal Article",
      topics: ["PVDF Composites", "Graphene Oxide", "Wearable Sensors"],
      featured: true,
      summary: "Synthesized a synergistic ZnO–Graphene Oxide–PVDF dielectric composite layer. The combined presence of 2D conductive GO nanosheets and high-permittivity ZnO in a flexible PVDF matrix produced micro-capacitor networks, yielding high capacitive sensitivity and rapid response times for wearable tactile sensing.",
      bibtex: "@article{Mathew_2026_JAppPolymSci,\n  author = {Mathew, Soly and Chintagumpala, Krishnamoorthi},\n  title = {A Highly Sensitive Capacitance Pressure Sensor With ZnO-GO-PVDF Dielectric Composite Layer for Wearable Applications},\n  journal = {Journal of Applied Polymer Science},\n  year = {2026},\n  doi = {10.1002/app.70439}\n}"
    },
    {
      id: "mathew-2025-fpe",
      title: "Design and characterization of PDMS-CB-ZnO-ternary composite based flexible capacitance pressure sensors for wearable applications",
      authors: ["Soly Mathew", "Krishnamoorthi Chintagumpala"],
      journal: "Flexible and Printed Electronics",
      publisher: "IOP Publishing",
      year: 2025,
      month: "June",
      doi: "10.1088/2058-8585/adc81e",
      url: "https://doi.org/10.1088/2058-8585/adc81e",
      type: "Journal Article",
      topics: ["PDMS Composites", "Carbon Black", "Wearable Sensors"],
      featured: true,
      summary: "Investigated conductive percolation thresholds and dielectric polarization in PDMS-CB-ZnO ternary elastomer composites. Demonstrated robust capacitive transduction with low hysteresis across repeated loading-unloading cycles for human motion and tactile sensing.",
      bibtex: "@article{Mathew_2025_FlexPrintElectron,\n  author = {Mathew, Soly and Chintagumpala, Krishnamoorthi},\n  title = {Design and characterization of PDMS-CB-ZnO-ternary composite based flexible capacitance pressure sensors for wearable applications},\n  journal = {Flexible and Printed Electronics},\n  year = {2025},\n  volume = {10},\n  number = {2},\n  doi = {10.1088/2058-8585/adc81e}\n}"
    },
    {
      id: "mathew-2025-sensors-intl",
      title: "Design and characterization of zirconia nanoparticles filled polydimethylsiloxane composites based flexible capacitance pressure sensor",
      authors: ["Soly Mathew", "Krishnamoorthi Chintagumpala"],
      journal: "Sensors International",
      publisher: "Elsevier",
      year: 2025,
      month: "February",
      doi: "10.1016/j.sintl.2025.100330",
      url: "https://doi.org/10.1016/j.sintl.2025.100330",
      type: "Journal Article",
      topics: ["PDMS Composites", "Nanoparticle Fillers", "Pressure Sensors"],
      featured: false,
      summary: "Formulated zirconia (ZrO2) nanoparticle-reinforced PDMS elastomeric dielectric films. Evaluated the dielectric permittivity enhancement, viscoelastic response, and pressure sensitivity over low-to-medium compressive stress domains.",
      bibtex: "@article{Mathew_2025_SensIntl,\n  author = {Mathew, Soly and Chintagumpala, Krishnamoorthi},\n  title = {Design and characterization of zirconia nanoparticles filled polydimethylsiloxane composites based flexible capacitance pressure sensor},\n  journal = {Sensors International},\n  year = {2025},\n  volume = {6},\n  pages = {100330},\n  doi = {10.1016/j.sintl.2025.100330}\n}"
    },
    {
      id: "mathew-2025-ieee-access",
      title: "Fabrication and Evaluation of Polydimethylsiloxane-La2O3 Composites-Based Flexible Capacitance Pressure Sensors’ Parameters and Applications",
      authors: ["Soly Mathew", "Krishnamoorthi Chintagumpala"],
      journal: "IEEE Access",
      publisher: "IEEE",
      year: 2025,
      month: "June",
      doi: "10.1109/ACCESS.2025.3577066",
      url: "https://doi.org/10.1109/ACCESS.2025.3577066",
      type: "Journal Article",
      topics: ["PDMS Composites", "Rare-Earth Oxides", "Wearable Sensors"],
      featured: false,
      summary: "Evaluated the dielectric and electromechanical performance of Lanthanum Oxide (La2O3) nanoparticle-doped PDMS composites. Demonstrated excellent endurance over 2,000 continuous compression cycles with high signal-to-noise ratio and fast relaxation times.",
      bibtex: "@article{Mathew_2025_IEEEAccess,\n  author = {Mathew, Soly and Chintagumpala, Krishnamoorthi},\n  title = {Fabrication and Evaluation of Polydimethylsiloxane-La2O3 Composites-Based Flexible Capacitance Pressure Sensors’ Parameters and Applications},\n  journal = {IEEE Access},\n  year = {2025},\n  volume = {13},\n  pages = {1--11},\n  doi = {10.1109/ACCESS.2025.3577066}\n}"
    }
  ];

  let publicationsData = fallbackPublications;
  let activeYear = 'all';
  let activeTopic = 'all';
  let searchQuery = '';

  // DOM elements
  const listContainer = document.getElementById('publications-list');
  const countDisplay = document.getElementById('publication-count');
  const searchInput = document.getElementById('pub-search-input');
  const yearFilterContainer = document.getElementById('year-filters');
  const topicFilterContainer = document.getElementById('topic-filters');

  // Initialize
  async function initPublications() {
    // Attempt relative fetch from data/publications.json
    try {
      // Determine relative path based on page location
      const isSubDir = window.location.pathname.includes('/publications/') || window.location.pathname.includes('/research/');
      const jsonPath = isSubDir ? '../data/publications.json' : 'data/publications.json';
      const response = await fetch(jsonPath);
      if (response.ok) {
        publicationsData = await response.json();
      }
    } catch (e) {
      // Fallback used silently
    }

    setupEventListeners();
    render();
  }

  function setupEventListeners() {
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        render();
      });
    }

    if (yearFilterContainer) {
      yearFilterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-pill');
        if (!btn) return;
        yearFilterContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        activeYear = btn.dataset.year || 'all';
        render();
      });
    }

    if (topicFilterContainer) {
      topicFilterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-pill');
        if (!btn) return;
        topicFilterContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        btn.classList.add('active');
        activeTopic = btn.dataset.topic || 'all';
        render();
      });
    }
  }

  function filterPublications() {
    return publicationsData.filter(pub => {
      // Year filter
      if (activeYear !== 'all' && String(pub.year) !== String(activeYear)) {
        return false;
      }
      // Topic filter
      if (activeTopic !== 'all' && !pub.topics.includes(activeTopic)) {
        return false;
      }
      // Text search
      if (searchQuery) {
        const textToSearch = [
          pub.title,
          pub.journal,
          pub.publisher,
          pub.summary,
          pub.authors.join(' '),
          pub.topics.join(' '),
          pub.doi
        ].join(' ').toLowerCase();

        if (!textToSearch.includes(searchQuery)) {
          return false;
        }
      }
      return true;
    });
  }

  function render() {
    if (!listContainer) return;

    const filtered = filterPublications();

    if (countDisplay) {
      countDisplay.textContent = `Displaying ${filtered.length} of ${publicationsData.length} verified publications`;
    }

    if (filtered.length === 0) {
      listContainer.innerHTML = `
        <div style="text-align: center; padding: 48px 24px; background: #ffffff; border: 1px dashed var(--color-border-medium); border-radius: var(--radius-md);">
          <p style="font-size: 16px; font-weight: 600; color: var(--color-text-primary); margin-bottom: 8px;">No matching publications found</p>
          <p style="font-size: 14px; color: var(--color-text-muted);">Try adjusting your search terms or clearing active filters.</p>
          <button class="btn btn-secondary btn-sm" style="margin-top: 16px;" onclick="window.resetPublicationFilters()">Reset Filters</button>
        </div>
      `;
      return;
    }

    listContainer.innerHTML = filtered.map(pub => {
      // Highlight Dr. Soly Mathew in author list
      const formattedAuthors = pub.authors.map(author => {
        if (author.toLowerCase().includes('soly mathew')) {
          return `<strong>${author}</strong>`;
        }
        return author;
      }).join(', ');

      const topicBadges = pub.topics.map(t => `<span class="badge badge-slate">${t}</span>`).join(' ');

      // JSON stringified for inline bibtex trigger
      const escapedBibtex = encodeURIComponent(pub.bibtex);
      const escapedTitle = encodeURIComponent(pub.title);

      return `
        <article class="card card-pub" id="${pub.id}">
          <div class="pub-header">
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span class="pub-journal">${pub.journal}</span>
              <span class="badge badge-blue">${pub.year}</span>
              <span class="badge badge-teal">${pub.publisher}</span>
            </div>
            <div class="tag-list">
              ${topicBadges}
            </div>
          </div>

          <h3 class="pub-title">${pub.title}</h3>

          <p class="pub-authors">
            <span style="font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; color: var(--color-text-muted); margin-right: 4px;">Authors:</span>
            ${formattedAuthors}
          </p>

          <p class="pub-summary">${pub.summary}</p>

          <div class="pub-footer">
            <span class="pub-doi">DOI: <a href="${pub.url}" target="_blank" rel="noopener noreferrer">${pub.doi}</a></span>
            <div class="pub-actions">
              <button class="btn btn-secondary btn-sm" onclick="copyToClipboard('${pub.doi}', 'DOI copied to clipboard!')" title="Copy DOI">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy DOI
              </button>
              <button class="btn btn-secondary btn-sm" onclick="showBibtex(decodeURIComponent('${escapedBibtex}'), decodeURIComponent('${escapedTitle}'))" title="Cite Publication">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Cite (BibTeX)
              </button>
              <a href="${pub.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                View at Publisher
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  window.resetPublicationFilters = function () {
    activeYear = 'all';
    activeTopic = 'all';
    searchQuery = '';
    if (searchInput) searchInput.value = '';
    if (yearFilterContainer) {
      yearFilterContainer.querySelectorAll('.filter-pill').forEach((p, idx) => {
        if (idx === 0) p.classList.add('active');
        else p.classList.remove('active');
      });
    }
    if (topicFilterContainer) {
      topicFilterContainer.querySelectorAll('.filter-pill').forEach((p, idx) => {
        if (idx === 0) p.classList.add('active');
        else p.classList.remove('active');
      });
    }
    render();
  };

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPublications);
  } else {
    initPublications();
  }

})();
