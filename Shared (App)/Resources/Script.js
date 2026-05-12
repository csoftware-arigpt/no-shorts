function show(platform, enabled, useSettingsInsteadOfPreferences) {
  document.body.classList.add(`platform-${platform}`)

  if (platform === 'mac') {
    document.body.classList.add(enabled ? 'state-on' : 'state-off')
  }

  if (useSettingsInsteadOfPreferences) {
    const button = document.querySelector('.open-preferences')

    if (button) {
      button.textContent = 'Quit and Open Safari Extensions Settings'
    }
  }
}

document.querySelector('.open-preferences')?.addEventListener('click', () => {
  window.webkit.messageHandlers.controller.postMessage('open-preferences')
})
