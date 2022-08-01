const Actor = ({ name, score, hobbies, description }) => {
  return (
    <ul style={{ textAlign: 'left' }}>
      <li>Name: {name}</li>
      <li>Score: {score} </li>
      <li>Hobbies: {hobbies}</li>
      <li>Description: {description}</li>
    </ul>
  )
}

export { Actor }
