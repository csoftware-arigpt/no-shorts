// content.js

(function () {
  // ===== REDIRECT BLOCKED PAGES =====

  function redirectBlockedPages() {
    const path = location.pathname.toLowerCase()

    // YouTube Shorts
    if (path.startsWith('/shorts/')) {
      location.replace('https://m.youtube.com/')
      return
    }

    // Instagram Reels
    if (
      path.startsWith('/reels/') ||
      path.startsWith('/reel/')
    ) {
      location.replace('https://www.instagram.com/')
      return
    }
  }

  // ===== CSS HIDING =====

  function injectCSS() {
    if (document.getElementById('anti-shortform-style')) {
      return
    }

    const style = document.createElement('style')
    style.id = 'anti-shortform-style'

    style.textContent = `
      /* ========================= */
      /* YOUTUBE                   */
      /* ========================= */

      /* Shorts shelves */
      ytd-reel-shelf-renderer,
      ytm-reel-shelf-renderer,
      ytm-shorts-lockup-view-model {
        display: none !important;
      }

      /* Shorts links */
      a[href*="/shorts/"] {
        display: none !important;
      }

      /* Mobile bottom nav shorts */
      ytm-pivot-bar-item-renderer:has(a[href*="/shorts"]) {
        display: none !important;
      }

      /* Desktop sidebar shorts */
      ytd-guide-entry-renderer:has(a[href*="/shorts"]) {
        display: none !important;
      }

      /* ========================= */
      /* INSTAGRAM                 */
      /* ========================= */

      a[href*="/reels/"],
      a[href*="/reel/"] {
        display: none !important;
      }
    `

    document.head.appendChild(style)
  }

  // ===== YOUTUBE =====

  function removeYouTubeShorts() {
    // Remove shorts cards/shelves
    document.querySelectorAll('a[href*="/shorts/"]').forEach(link => {
      const container =
        link.closest('ytd-rich-item-renderer') ||
        link.closest('ytm-shorts-lockup-view-model') ||
        link.closest('ytd-reel-shelf-renderer') ||
        link.closest('ytm-reel-shelf-renderer') ||
        link.closest('ytm-pivot-bar-item-renderer') ||
        link.closest('ytd-guide-entry-renderer')

      if (container) {
        container.remove()
      }
    })

    // Remove mobile bottom nav button
    document
      .querySelectorAll('ytm-pivot-bar-item-renderer')
      .forEach(el => {
        const href =
          el.querySelector('a')?.getAttribute('href') || ''

        const text =
          (el.textContent || '').toLowerCase()

        if (
          href.includes('/shorts') ||
          text.includes('shorts')
        ) {
          el.style.display = 'none'
          el.remove()
        }
      })

    // Remove desktop sidebar item
    document
      .querySelectorAll('ytd-guide-entry-renderer')
      .forEach(el => {
        const href =
          el.querySelector('a')?.getAttribute('href') || ''

        const text =
          (el.textContent || '').toLowerCase()

        if (
          href.includes('/shorts') ||
          text.includes('shorts')
        ) {
          el.style.display = 'none'
          el.remove()
        }
      })
  }

  // ===== INSTAGRAM =====

  function removeInstagramReels() {
    document
      .querySelectorAll(
        'a[href*="/reels/"], a[href*="/reel/"]'
      )
      .forEach(link => {
        const article =
          link.closest('article') ||
          link.closest('div')

        if (article) {
          article.remove()
        }
      })
  }

  // ===== MAIN =====

  function run() {
    redirectBlockedPages()
    injectCSS()

    const host = location.hostname

    if (host.includes('youtube.com')) {
      removeYouTubeShorts()
    }

    if (host.includes('instagram.com')) {
      removeInstagramReels()
    }
  }

  // Initial run
  run()

  // Dynamic updates
  new MutationObserver(() => {
    run()
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
  })

  // Extra fallback for YouTube SPA updates
  setInterval(run, 1000)
})()
