// https://github.com/dequelabs/axe-core-npm
// https://www.npmjs.com/package/@axe-core/react

/* eslint-disable global-require */

export function checkAccessibilityIssues(react: unknown, reactDOM: unknown, delay: number) {
  if (process.env.NODE_ENV !== 'production') {
    import axe = require('@axe-core/react')

    axe(react, reactDOM, delay)
  }
}
