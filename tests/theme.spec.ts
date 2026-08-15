import { afterEach, describe, expect, it, vi } from 'vitest'
import type { Context } from '@deepseek-ai/cordis'
import { apply, inject } from '../src/client/index.ts'
import { SONG_THEME_TOKENS } from '../src/client/theme.ts'

describe('Song theme plugin', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('registers and disposes its token layer through the theme service', () => {
    const dispose = vi.fn()
    const overrideTokens = vi.fn(() => dispose)
    const effect = vi.fn((setup: () => () => void) => setup())
    const ctx = { effect, theme: { overrideTokens } } as unknown as Context

    apply(ctx)

    expect(inject).toEqual(['theme'])
    expect(overrideTokens).toHaveBeenCalledWith('ui-song-theme', SONG_THEME_TOKENS)
    expect(effect).toHaveBeenCalledTimes(2)
    expect(effect.mock.results[0]?.value).toBe(dispose)
  })

  it('mounts and removes the theme-colored browser focus rule', () => {
    const style = { dataset: {}, textContent: '', remove: vi.fn() }
    const append = vi.fn()
    vi.stubGlobal('document', {
      createElement: vi.fn(() => style),
      head: { append },
    })
    const effect = vi.fn((setup: () => () => void) => setup())
    const ctx = {
      effect,
      theme: { overrideTokens: vi.fn(() => vi.fn()) },
    } as unknown as Context

    apply(ctx)

    expect(style.dataset).toEqual({ uiSongTheme: 'focus-ring' })
    expect(style.textContent).toContain('outline-color: var(--dsw-alias-state-business-primary)')
    expect(append).toHaveBeenCalledWith(style)

    const removeStyle = effect.mock.results[1]?.value as () => void
    removeStyle()
    expect(style.remove).toHaveBeenCalledOnce()
  })

  it('defines a non-empty light and dark value for every token', () => {
    expect(Object.keys(SONG_THEME_TOKENS).length).toBeGreaterThan(50)
    for (const modes of Object.values(SONG_THEME_TOKENS)) {
      expect(modes.light.length).toBeGreaterThan(0)
      expect(modes.dark.length).toBeGreaterThan(0)
    }
  })

  it('uses botanical greens and pine-ink dark surfaces without legacy cyan accents', () => {
    expect(SONG_THEME_TOKENS['--dsw-alias-brand-primary']).toEqual({
      light: 'oklch(0.42 0.045 150)',
      dark: 'oklch(0.74 0.05 150)',
    })
    expect(SONG_THEME_TOKENS['--dsw-alias-bg-base'].dark).toBe('oklch(0.18 0.01 145)')
    expect(SONG_THEME_TOKENS['--dsw-static-blue-500']).toEqual({
      light: 'oklch(0.52 0.06 150)',
      dark: 'oklch(0.64 0.055 150)',
    })
    expect(Object.values(SONG_THEME_TOKENS).flatMap(({ light, dark }) => [light, dark]))
      .not.toContainEqual(expect.stringContaining(' 174'))
  })
})
