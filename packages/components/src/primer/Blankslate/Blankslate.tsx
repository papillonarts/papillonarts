/* eslint-disable @typescript-eslint/no-var-requires */
import { FC } from 'react'
import cx from 'classnames'
import { defaultProps, blankslateVariantEnum, IBlankslateProps } from './Blankslate.prop'

const styles = require('./Blankslate.scss').default

export const Blankslate: FC<IBlankslateProps> = ({ className, heading, text, variant, hasCleanBackground }: IBlankslateProps) => (
  <div
    className={cx(className, styles.blankslate, {
      [styles['blankslate-narrow']]: variant === blankslateVariantEnum.narrow,
      [styles['blankslate-capped']]: (variant === blankslateVariantEnum.capped) === true,
      [styles['blankslate-spacious']]: variant === blankslateVariantEnum.spacious,
      [styles['blankslate-large']]: variant === blankslateVariantEnum.large,
      [styles['blankslate-clean-background']]: hasCleanBackground === true,
    })}
  >
    <h3>{heading}</h3>
    <p>{text}</p>
  </div>
)

Blankslate.defaultProps = defaultProps
