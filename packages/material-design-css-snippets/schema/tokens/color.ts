import { CssTokenWithFallback } from './types'

/**
 * Material system color tokens, each with its fallback value.
 *
 * Upstream1: {@link https://github.com/material-components/material-web/tree/main/tokens}
 *
 * Upstream2 (self-hosted deployment, not the official m3.material.io): {@link https://material-theme-builder.sandlada.com/}
 *
 * Colors come from the MCU dynamic color system; only one selected value
 * per token is kept, sourced from ../../color-mcu-mapping.css
 * second :root block (sys colors plus palette-key-color tokens).
 */
export const colorTokens: CssTokenWithFallback[] = [
    { name: '--md-sys-color-background', fallback: 'light-dark(#f8faf3, #0c0f0b)' },
    { name: '--md-sys-color-error', fallback: 'light-dark(#a73b21, #f97758)' },
    { name: '--md-sys-color-error-container', fallback: 'light-dark(#fd795a, #85230a)' },
    { name: '--md-sys-color-error-dim', fallback: 'light-dark(#791903, #c44f34)' },
    { name: '--md-sys-color-error-palette-key-color', fallback: 'light-dark(#c75236, #c75236)' },
    { name: '--md-sys-color-inverse-on-surface', fallback: 'light-dark(#9b9e97, #535650)' },
    { name: '--md-sys-color-inverse-primary', fallback: 'light-dark(#cefdc8, #486746)' },
    { name: '--md-sys-color-inverse-surface', fallback: 'light-dark(#0c0f0b, #f8faf3)' },
    { name: '--md-sys-color-neutral-palette-key-color', fallback: 'light-dark(#757872, #757872)' },
    { name: '--md-sys-color-neutral-variant-palette-key-color', fallback: 'light-dark(#72796f, #72796f)' },
    { name: '--md-sys-color-on-background', fallback: 'light-dark(#2d342c, #e0e8db)' },
    { name: '--md-sys-color-on-error', fallback: 'light-dark(#fff7f6, #450900)' },
    { name: '--md-sys-color-on-error-container', fallback: 'light-dark(#6e1400, #ff9b82)' },
    { name: '--md-sys-color-on-primary', fallback: 'light-dark(#eaffe3, #294729)' },
    { name: '--md-sys-color-on-primary-container', fallback: 'light-dark(#335b33, #c9edc3)' },
    { name: '--md-sys-color-on-primary-fixed', fallback: 'light-dark(#204822, #294628)' },
    { name: '--md-sys-color-on-primary-fixed-variant', fallback: 'light-dark(#3d653c, #446342)' },
    { name: '--md-sys-color-on-secondary', fallback: 'light-dark(#ebfee5, #344432)' },
    { name: '--md-sys-color-on-secondary-container', fallback: 'light-dark(#465643, #b2c4ad)' },
    { name: '--md-sys-color-on-secondary-fixed', fallback: 'light-dark(#334332, #334332)' },
    { name: '--md-sys-color-on-secondary-fixed-variant', fallback: 'light-dark(#4f604d, #4f604d)' },
    { name: '--md-sys-color-on-surface', fallback: 'light-dark(#2d342c, #e0e8db)' },
    { name: '--md-sys-color-on-surface-variant', fallback: 'light-dark(#5a6157, #a6ada2)' },
    { name: '--md-sys-color-on-tertiary', fallback: 'light-dark(#fafeba, #5f622e)' },
    { name: '--md-sys-color-on-tertiary-container', fallback: 'light-dark(#5f622e, #565a26)' },
    { name: '--md-sys-color-on-tertiary-fixed', fallback: 'light-dark(#4c501d, #4c501d)' },
    { name: '--md-sys-color-on-tertiary-fixed-variant', fallback: 'light-dark(#696d37, #696d37)' },
    { name: '--md-sys-color-outline', fallback: 'light-dark(#757d72, #70786d)' },
    { name: '--md-sys-color-outline-variant', fallback: 'light-dark(#adb4a8, #434a41)' },
    { name: '--md-sys-color-primary', fallback: 'light-dark(#40683f, #add0a8)' },
    { name: '--md-sys-color-primary-container', fallback: 'light-dark(#c1efbb, #3b5a3a)' },
    { name: '--md-sys-color-primary-dim', fallback: 'light-dark(#345c34, #a0c29b)' },
    { name: '--md-sys-color-primary-fixed', fallback: 'light-dark(#c1efbb, #c9ecc2)' },
    { name: '--md-sys-color-primary-fixed-dim', fallback: 'light-dark(#b3e0ad, #bbdeb5)' },
    { name: '--md-sys-color-primary-palette-key-color', fallback: 'light-dark(#588156, #5f7f5c)' },
    { name: '--md-sys-color-scrim', fallback: 'light-dark(#000000, #000000)' },
    { name: '--md-sys-color-secondary', fallback: 'light-dark(#536350, #b9ccb4)' },
    { name: '--md-sys-color-secondary-container', fallback: 'light-dark(#d5e8cf, #303f2e)' },
    { name: '--md-sys-color-secondary-dim', fallback: 'light-dark(#475744, #acbea7)' },
    { name: '--md-sys-color-secondary-fixed', fallback: 'light-dark(#d5e8cf, #d5e8cf)' },
    { name: '--md-sys-color-secondary-fixed-dim', fallback: 'light-dark(#c7dac1, #c7dac1)' },
    { name: '--md-sys-color-secondary-palette-key-color', fallback: 'light-dark(#6b7c67, #6b7c67)' },
    { name: '--md-sys-color-shadow', fallback: 'light-dark(#000000, #000000)' },
    { name: '--md-sys-color-surface', fallback: 'light-dark(#f8faf3, #0c0f0b)' },
    { name: '--md-sys-color-surface-bright', fallback: 'light-dark(#f8faf3, #272e26)' },
    { name: '--md-sys-color-surface-container', fallback: 'light-dark(#eaf0e5, #161b15)' },
    { name: '--md-sys-color-surface-container-high', fallback: 'light-dark(#e4eadf, #1b211a)' },
    { name: '--md-sys-color-surface-container-highest', fallback: 'light-dark(#dde5d8, #21281f)' },
    { name: '--md-sys-color-surface-container-low', fallback: 'light-dark(#f1f5eb, #10150f)' },
    { name: '--md-sys-color-surface-container-lowest', fallback: 'light-dark(#ffffff, #000000)' },
    { name: '--md-sys-color-surface-dim', fallback: 'light-dark(#d5dcd0, #0c0f0b)' },
    { name: '--md-sys-color-surface-tint', fallback: 'light-dark(#40683f, #add0a8)' },
    { name: '--md-sys-color-surface-variant', fallback: 'light-dark(#dde5d8, #21281f)' },
    { name: '--md-sys-color-tertiary', fallback: 'light-dark(#5f622e, #fbfeba)' },
    { name: '--md-sys-color-tertiary-container', fallback: 'light-dark(#fbfeba, #ecf0ad)' },
    { name: '--md-sys-color-tertiary-dim', fallback: 'light-dark(#535623, #e3e7a5)' },
    { name: '--md-sys-color-tertiary-fixed', fallback: 'light-dark(#fbfeba, #fbfeba)' },
    { name: '--md-sys-color-tertiary-fixed-dim', fallback: 'light-dark(#ecf0ad, #ecf0ad)' },
    { name: '--md-sys-color-tertiary-palette-key-color', fallback: 'light-dark(#777b44, #777b44)' },
]
