const error = ({ message }) => {
  console.log(
    `%cError!
      ${message}`,
    'color: #FFF; background: red',
  )
}

const warning = ({ message }) => {
  console.log(
    `%cWarning!
      ${message}`,
    'color: #FFF; background: orange',
  )
}

export const Log = {
  error,
  warning,
}
