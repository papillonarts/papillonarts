/* eslint-disable @typescript-eslint/no-var-requires */
import { withTests } from '@storybook/addon-jest'
import { blankslateVariantEnum } from '../Blankslate.prop'
import results from '../../../../../../.jest-test-results.json'

const Blankslate =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../../../index').primer.Blankslate.Blankslate
    : require('../../../../build').primer.Blankslate.Blankslate

const heading = 'This is a blank slate'
const text = 'Use it to provide information when no dynamic content exists.'

export default {
  title: 'Primer/Atom/Blankslate',
  component: Blankslate,
  decorators: [withTests({ results })],
  parameters: { jest: ['Blankslate.int.test.ts'] },
  excludeStories: ['custom'],
}

export function regular() {
  return <Blankslate variant={blankslateVariantEnum.default} heading={heading} text={text} />
}

export function narrow() {
  return <Blankslate variant={blankslateVariantEnum.narrow} heading={heading} text={text} />
}

export function capped() {
  return <Blankslate variant={blankslateVariantEnum.capped} heading={heading} text={text} />
}

export function spacious() {
  return <Blankslate variant={blankslateVariantEnum.spacious} heading={heading} text={text} />
}

export function large() {
  return <Blankslate variant={blankslateVariantEnum.large} heading={heading} text={text} />
}

export function cleanBackground() {
  return <Blankslate hasCleanBackground={true} heading={heading} text={text} />
}
