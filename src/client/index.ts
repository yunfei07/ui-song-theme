import type { Context } from '@deepseek-ai/cordis'
import type {} from '@deepseek-ai/dsh-client-ui-theme/client'
import { SONG_THEME_TOKENS } from './theme.ts'

const SOURCE = 'ui-song-theme'

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
}
