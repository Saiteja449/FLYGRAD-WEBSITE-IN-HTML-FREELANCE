// Access icon renderers exposed by scripts/icons.js
const renderIcon = (typeof window !== 'undefined' && window.renderIcon) 
  ? window.renderIcon 
  : (window.FlyGradIcons && window.FlyGradIcons.renderIcon) || ((name, weight, cls) => '');

const renderLucide = (typeof window !== 'undefined' && window.renderLucide) 
  ? window.renderLucide 
  : (window.FlyGradIcons && window.FlyGradIcons.renderLucide) || ((name, cls) => '');

// 1. Hydrate Icons
function hydrateIcons() {
  document.querySelectorAll('[data-icon]').forEach(el => {
    const iconName = el.getAttribute('data-icon');
    const weight = el.getAttribute('data-weight') || 'regular';
    const classes = (el.getAttribute('class') || '').replace(/\bhidden\b/g, '').trim();
    el.innerHTML = renderIcon(iconName, weight, classes);
  });

  document.querySelectorAll('[data-lucide]').forEach(el => {
    const iconName = el.getAttribute('data-lucide');
    const classes = (el.getAttribute('class') || '').replace(/\bhidden\b/g, '').trim();
    el.innerHTML = renderLucide(iconName, classes);
  });
}

// 2. Header Scroll Effect
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  const container = document.getElementById('header-container');
  if (!header || !container) return;

  function update() {
    const isScrolled = window.scrollY > 24;
    if (isScrolled) {
      header.classList.remove('border-transparent', 'bg-transparent');
      header.classList.add('border-border', 'bg-background/80', 'shadow-sm', 'backdrop-blur-xl');
      container.classList.remove('h-20');
      container.classList.add('h-16');
    } else {
      header.classList.remove('border-border', 'bg-background/80', 'shadow-sm', 'backdrop-blur-xl');
      header.classList.add('border-transparent', 'bg-transparent');
      container.classList.remove('h-16');
      container.classList.add('h-20');
    }
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

// 3. Mobile Navigation Menu Toggle
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  if (!toggle || !menu) return;

  let isOpen = false;

  function setOpen(open) {
    isOpen = open;
    toggle.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) {
      menu.classList.remove('hidden');
      menuIcon?.classList.add('hidden');
      closeIcon?.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
      menuIcon?.classList.remove('hidden');
      closeIcon?.classList.add('hidden');
    }
  }

  toggle.addEventListener('click', () => setOpen(!isOpen));

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });
}

// 4. Stats Counter Animation
function initStatsCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        obs.unobserve(el);

        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out expo: 1 - Math.pow(2, -10 * progress)
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          const currentVal = Math.round(target * easeProgress);

          el.textContent = currentVal.toLocaleString() + suffix;

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = target.toLocaleString() + suffix;
          }
        }

        requestAnimationFrame(update);
      }
    });
  }, { threshold: 0.1, rootMargin: '-60px' });

  counters.forEach(c => observer.observe(c));
}


// 6. Toast Notification Helper
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'pointer-events-auto flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium shadow-xl transition-all duration-300 translate-y-4 opacity-0';
  
  const iconSpan = document.createElement('span');
  iconSpan.className = type === 'success' ? 'text-green-500 flex items-center' : 'text-destructive flex items-center';
  iconSpan.innerHTML = renderIcon(type === 'success' ? 'CheckCircleIcon' : 'XIcon', 'fill', 'size-5');
  
  const textSpan = document.createElement('span');
  textSpan.textContent = message;

  toast.appendChild(iconSpan);
  toast.appendChild(textSpan);
  container.appendChild(toast);

  // Animate in
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Remove after 4s
  setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-4', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// 7. Form Submission & Validation
function initForm() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;

  const nameInput = document.getElementById('form-name');
  const phoneInput = document.getElementById('form-phone');
  const emailInput = document.getElementById('form-email');

  const errName = document.getElementById('err-name');
  const errPhone = document.getElementById('err-phone');
  const errEmail = document.getElementById('err-email');

  function validate() {
    let isValid = true;

    // Name validation
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      errName.textContent = 'Please enter your full name';
      errName.classList.remove('hidden');
      nameInput.classList.add('border-destructive');
      isValid = false;
    } else {
      errName.textContent = '';
      errName.classList.add('hidden');
      nameInput.classList.remove('border-destructive');
    }

    // Phone validation
    const phoneVal = phoneInput.value.trim();
    if (!phoneVal || phoneVal.length < 7) {
      errPhone.textContent = 'Please enter a valid phone number';
      errPhone.classList.remove('hidden');
      phoneInput.classList.add('border-destructive');
      isValid = false;
    } else {
      errPhone.textContent = '';
      errPhone.classList.add('hidden');
      phoneInput.classList.remove('border-destructive');
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailVal = emailInput.value.trim();
    if (!emailVal || !emailRegex.test(emailVal)) {
      errEmail.textContent = 'Please enter a valid email';
      errEmail.classList.remove('hidden');
      emailInput.classList.add('border-destructive');
      isValid = false;
    } else {
      errEmail.textContent = '';
      errEmail.classList.add('hidden');
      emailInput.classList.remove('border-destructive');
    }

    return isValid;
  }

  // Clear errors on input
  [nameInput, phoneInput, emailInput].forEach(inp => {
    inp.addEventListener('input', () => {
      inp.classList.remove('border-destructive');
      const errEl = document.getElementById(`err-${inp.id.replace('form-', '')}`);
      if (errEl) {
        errEl.textContent = '';
        errEl.classList.add('hidden');
      }
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const submitBtn = document.getElementById('submit-btn');
    const originalContent = submitBtn.innerHTML;

    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-75');
    submitBtn.innerHTML = `
      <svg class="animate-spin size-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Submitting...
    `;

    // Simulate network delay
    await new Promise(r => setTimeout(r, 600));

    submitBtn.disabled = false;
    submitBtn.classList.remove('opacity-75');
    submitBtn.innerHTML = originalContent;

    showToast('Thank you! Our team will contact you shortly.', 'success');
    form.reset();
  });
}

// Initialize everything on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  hydrateIcons();
  initHeaderScroll();
  initMobileMenu();
  initStatsCounters();
  initForm();
});
