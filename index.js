(() => {
  const init = () => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    let lastScrollY = window.scrollY;
    let ticking = false;
    let isHidden = false;

    const applyFooterVisibility = (hide) => {
      isHidden = hide;
      const offset = footer.offsetHeight || 60;
      footer.style.bottom = hide ? `-${offset}px` : '0';
    };

    const update = () => {
      const currentY = window.scrollY;
      const hide = currentY > lastScrollY; // scrolling down -> hide
      applyFooterVisibility(hide);
      lastScrollY = currentY;
      ticking = false;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );

    window.addEventListener('resize', () => {
      applyFooterVisibility(isHidden);
    });

    applyFooterVisibility(false);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
