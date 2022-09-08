const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const capitalizeFirstLetter = (string: string) => string.charAt(0).toUpperCase() + string.slice(1)

const getDayMonthYear = (date: Date) => `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

export const UtilService = {
  capitalizeFirstLetter,
  getDayMonthYear,
}
