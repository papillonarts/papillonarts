// import { runJestSetup } from '@papillonarts/setup/jest'

import 'jsdom-global/register'
import { render } from '@testing-library/react'
import { configureAxe, toHaveNoViolations } from 'jest-axe'

function runJestSetup() {
  global.renderToJSON = (component) => render(component).container
  global.axe = configureAxe({ rules: { region: { enabled: false } } })
  expect.extend(toHaveNoViolations)
}

runJestSetup()
