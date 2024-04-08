export const noop = () => {}

export const isDefined = <T>(value: T | null | undefined): value is T =>
  value !== null && typeof value !== 'undefined'
