import type { Context } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-ui-theme/client'
import { SONG_THEME_TOKENS } from './theme.ts'

const SOURCE = 'ui-song-theme'
const FOCUS_RING_CSS = `
:where(button, [role='button'], input, textarea, select, a[href]):focus-visible {
  outline-color: var(--dsw-alias-state-business-primary);
}
`

/** Theme service required before the Song token layer can be mounted. */
export const inject = ['theme']

/**
 * Mount the paired Song-inspired token layer for the lifetime of this plugin.
 * @param ctx Client Cordis context carrying ThemeRuntime.
 */
export function apply(ctx: Context): void {
  ctx.effect(
    () => ctx.theme.overrideTokens(SOURCE, SONG_THEME_TOKENS),
    'ui-song-theme: paired token override',
  )
  ctx.effect(() => {
    if (typeof document === 'undefined') return () => {}
    const style = document.createElement('style')
    style.dataset.uiSongTheme = 'focus-ring'
    style.textContent = FOCUS_RING_CSS
    document.head.append(style)
    return () => style.remove()
  }, 'ui-song-theme: focus-ring color')
}
