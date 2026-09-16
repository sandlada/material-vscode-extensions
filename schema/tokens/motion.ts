import { CssTokenWithFallback } from './types'

/**
 * Motion easing + duration tokens, each with its fallback value.
 *
 * Source: @sandlada/material-design-css motion/variables.css
 * (plus the tailwind v4 tw.css mappings); cross-checked against
 * @sandlada/mdk build domain files for easing and duration.
 * mdk-only easing names (legacy, linear) have no css-package
 * definition and are not included.
 */
export const motionTokens: CssTokenWithFallback[] = [
    { name: '--md-sys-motion-easing-emphasized', fallback: 'cubic-bezier(0.2, 0.0, 0, 1.0)' },
    { name: '--md-sys-motion-easing-emphasized-decelerate', fallback: 'cubic-bezier(0.05, 0.7, 0.1, 1.0)' },
    { name: '--md-sys-motion-easing-emphasized-accelerate', fallback: 'cubic-bezier(0.3, 0.0, 0.8, 0.15)' },
    { name: '--md-sys-motion-easing-standard', fallback: 'cubic-bezier(0.2, 0.0, 0, 1.0)' },
    { name: '--md-sys-motion-easing-standard-decelerate', fallback: 'cubic-bezier(0, 0, 0, 1)' },
    { name: '--md-sys-motion-easing-standard-accelerate', fallback: 'cubic-bezier(0.3, 0, 1, 1)' },
    { name: '--md-sys-motion-easing-expressive-fast-spatial', fallback: 'cubic-bezier(0.42, 1.67, 0.21, 0.90)' },
    { name: '--md-sys-motion-easing-expressive-default-spatial', fallback: 'cubic-bezier(0.38, 1.21, 0.22, 1.00)' },
    { name: '--md-sys-motion-easing-expressive-slow-spatial', fallback: 'cubic-bezier(0.39, 1.29, 0.35, 0.98)' },
    { name: '--md-sys-motion-easing-expressive-fast-effects', fallback: 'cubic-bezier(0.31, 0.94, 0.34, 1.00)' },
    { name: '--md-sys-motion-easing-expressive-default-effects', fallback: 'cubic-bezier(0.34, 0.80, 0.34, 1.00)' },
    { name: '--md-sys-motion-easing-expressive-slow-effects', fallback: 'cubic-bezier(0.34, 0.88, 0.34, 1.00)' },
    { name: '--md-sys-motion-easing-standard-fast-spatial', fallback: 'cubic-bezier(0.27, 1.06, 0.18, 1.00)' },
    { name: '--md-sys-motion-easing-standard-default-spatial', fallback: 'cubic-bezier(0.27, 1.06, 0.18, 1.00)' },
    { name: '--md-sys-motion-easing-standard-slow-spatial', fallback: 'cubic-bezier(0.27, 1.06, 0.18, 1.00)' },
    { name: '--md-sys-motion-easing-standard-fast-effects', fallback: 'cubic-bezier(0.31, 0.94, 0.34, 1.00)' },
    { name: '--md-sys-motion-easing-standard-default-effects', fallback: 'cubic-bezier(0.34, 0.80, 0.34, 1.00)' },
    { name: '--md-sys-motion-easing-standard-slow-effects', fallback: 'cubic-bezier(0.34, 0.88, 0.34, 1.00)' },
    { name: '--md-sys-motion-duration-short1', fallback: '50ms' },
    { name: '--md-sys-motion-duration-short2', fallback: '100ms' },
    { name: '--md-sys-motion-duration-short3', fallback: '150ms' },
    { name: '--md-sys-motion-duration-short4', fallback: '200ms' },
    { name: '--md-sys-motion-duration-medium1', fallback: '250ms' },
    { name: '--md-sys-motion-duration-medium2', fallback: '300ms' },
    { name: '--md-sys-motion-duration-medium3', fallback: '350ms' },
    { name: '--md-sys-motion-duration-medium4', fallback: '400ms' },
    { name: '--md-sys-motion-duration-long1', fallback: '450ms' },
    { name: '--md-sys-motion-duration-long2', fallback: '500ms' },
    { name: '--md-sys-motion-duration-long3', fallback: '550ms' },
    { name: '--md-sys-motion-duration-long4', fallback: '600ms' },
    { name: '--md-sys-motion-duration-extra-long1', fallback: '700ms' },
    { name: '--md-sys-motion-duration-extra-long2', fallback: '800ms' },
    { name: '--md-sys-motion-duration-extra-long3', fallback: '900ms' },
    { name: '--md-sys-motion-duration-extra-long4', fallback: '1000ms' },
    { name: '--md-sys-motion-duration-expressive-fast-spatial', fallback: '350ms' },
    { name: '--md-sys-motion-duration-expressive-default-spatial', fallback: '500ms' },
    { name: '--md-sys-motion-duration-expressive-slow-spatial', fallback: '650ms' },
    { name: '--md-sys-motion-duration-expressive-fast-effects', fallback: '150ms' },
    { name: '--md-sys-motion-duration-expressive-default-effects', fallback: '200ms' },
    { name: '--md-sys-motion-duration-expressive-slow-effects', fallback: '300ms' },
    { name: '--md-sys-motion-duration-standard-fast-spatial', fallback: '350ms' },
    { name: '--md-sys-motion-duration-standard-default-spatial', fallback: '500ms' },
    { name: '--md-sys-motion-duration-standard-slow-spatial', fallback: '750ms' },
    { name: '--md-sys-motion-duration-standard-fast-effects', fallback: '150ms' },
    { name: '--md-sys-motion-duration-standard-default-effects', fallback: '200ms' },
    { name: '--md-sys-motion-duration-standard-slow-effects', fallback: '300ms' },
]
