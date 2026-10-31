/**
 * Dr. Soly Mathew - Scientific Portfolio Main JavaScript
 * Production-ready, zero-dependency vanilla JS for GitHub Pages
 */

(function () {
  'use strict';

  // 1. Sticky Navigation & Header Scrolled State
  const header = document.querySelector('.site-header');
  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 2. Mobile Menu Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');
  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      siteNav.classList.toggle('open');
      menuToggle.setAttribute('aria-label', isExpanded ? 'Open Navigation Menu' : 'Close Navigation Menu');
    });

    // Close menu when clicking navigation links
    siteNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Open Navigation Menu');
      });
    });
  }

  // 3. Global Toast Notification for Clipboard Copying
  function showToast(message, duration = 2500) {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        background: #0b1424;
        color: #ffffff;
        border: 1px solid rgba(255, 255, 255, 0.2);
        padding: 12px 20px;
        border-radius: 8px;
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 14px;
        font-weight: 500;
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        z-index: 9999;
        transform: translateY(20px);
        opacity: 0;
        transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
        display: flex;
        align-items: center;
        gap: 8px;
      `;
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>${message}</span>
    `;

    // Animate In
    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    // Animate Out
    clearTimeout(toast.dismissTimeout);
    toast.dismissTimeout = setTimeout(() => {
      toast.style.transform = 'translateY(20px)';
      toast.style.opacity = '0';
    }, duration);
  }

  // Expose toast globally
  window.showToast = showToast;

  // 4. Copy to Clipboard Utility
  window.copyToClipboard = function (text, successMsg = 'Copied to clipboard!') {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg);
      }).catch(() => {
        fallbackCopyText(text, successMsg);
      });
    } else {
      fallbackCopyText(text, successMsg);
    }
  };

  function fallbackCopyText(text, successMsg) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMsg);
    } catch (err) {
      showToast('Press Ctrl+C to copy');
    }
    document.body.removeChild(textArea);
  }

  // 5. Generic Accessible Modal Controller
  window.openModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) firstFocusable.focus();
    document.body.style.overflow = 'hidden';
  };

  window.closeModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Close modals on Esc or Backdrop click
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop.open').forEach(modal => {
        closeModal(modal.id);
      });
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.classList && e.target.classList.contains('modal-backdrop')) {
      closeModal(e.target.id);
    }
  });

  // 6. BibTeX Citation Modal Trigger
  window.showBibtex = function (bibtexString, title) {
    let modal = document.getElementById('bibtex-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'bibtex-modal';
      modal.className = 'modal-backdrop';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-labelledby', 'bibtex-modal-title');
      modal.innerHTML = `
        <div class="modal-dialog">
          <div class="modal-header">
            <h3 class="modal-title" id="bibtex-modal-title">BibTeX Citation</h3>
            <button class="modal-close" onclick="closeModal('bibtex-modal')" aria-label="Close modal">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <p id="bibtex-paper-title" style="font-size: 13px; color: var(--color-text-secondary); margin-bottom: 12px; font-weight: 500;"></p>
            <pre class="code-snippet-box"><code id="bibtex-content"></code></pre>
            <div style="display: flex; justify-content: flex-end; gap: 8px;">
              <button class="btn btn-secondary btn-sm" onclick="closeModal('bibtex-modal')">Close</button>
              <button class="btn btn-primary btn-sm" id="bibtex-copy-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
                Copy BibTeX
              </button>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    const titleEl = document.getElementById('bibtex-paper-title');
    const contentEl = document.getElementById('bibtex-content');
    const copyBtn = document.getElementById('bibtex-copy-btn');

    if (titleEl) titleEl.textContent = title || '';
    if (contentEl) contentEl.textContent = bibtexString || '';
    if (copyBtn) {
      copyBtn.onclick = () => {
        copyToClipboard(bibtexString, 'BibTeX copied to clipboard!');
      };
    }

    openModal('bibtex-modal');
  };

})();
