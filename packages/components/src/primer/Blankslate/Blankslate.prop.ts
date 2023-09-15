export enum blankslateVariantEnum {
  default,
  narrow,
  capped,
  spacious,
  large,
}

export type blankslateVariantType =
  | blankslateVariantEnum.default
  | blankslateVariantEnum.narrow
  | blankslateVariantEnum.capped
  | blankslateVariantEnum.spacious
  | blankslateVariantEnum.large

export interface IBlankslateProps {
  className?: string
  heading: string
  text: string
  variant: blankslateVariantType
  hasCleanBackground: boolean
}

export const defaultProps: IBlankslateProps = {
  className: null,
  heading: '',
  text: '',
  variant: blankslateVariantEnum.default,
  hasCleanBackground: false,
}
