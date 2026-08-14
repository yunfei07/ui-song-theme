import { describe, expect, it, vi } from 'vitest'
import type { Context } from '@deepseek-ai/cordis'
import { apply, inject } from '../src/client/index.ts'
import { SONG_THEME_TOKENS } from '../src/client/theme.ts'

describe('Song theme plugin', () => {
  it('registers and disposes its token layer through the theme service', () => {
    const dispose = vi.fn()
    const overrideTokens = vi.fn(() => dispose)
    const effect = vi.fn((setup: () => () => void) => setup())
    const ctx = { effect, theme: { overrideTokens } } as unknown as Context

    apply(ctx)

    expect(inject).toEqual(['theme'])
    expect(overrideTokens).toHaveBeenCalledWith('ui-song-theme', SONG_THEME_TOKENS)
    expect(effect).toHaveReturnedWith(dispose)
  })

  it('defines a non-empty light and dark value for every token', () => {
    expect(Object.keys(SONG_THEME_TOKENS).length).toBeGreaterThan(50)
    for (const modes of Object.values(SONG_THEME_TOKENS)) {
      expect(modes.light.length).toBeGreaterThan(0)
      expect(modes.dark.length).toBeGreaterThan(0)
    }
  })
})
