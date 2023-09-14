import { getRandomDecimalArgsType, getRandomIntegerArgsType } from './types'

export function getRandomDecimal({ min = 0, max, decimal = 2 }: getRandomDecimalArgsType) {
  const factor = 10 ** decimal
  const maxFactor = max * factor
  const minFactor = min * factor

  return parseFloat((Math.floor(Math.random() * (maxFactor - minFactor) + minFactor) / factor).toFixed(decimal))
}

export function getRandomInteger({ min = 0, max }: getRandomIntegerArgsType) {
  return Math.floor(Math.random() * (max - min) + min)
}
