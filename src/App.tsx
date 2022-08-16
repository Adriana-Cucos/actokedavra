import './App.css'

import { Footer } from 'components/Footer/Footer'
import { Actor } from './components/Actor/Actor'

import styles from './App.module.scss'

function App() {
  const actor = {
    name: 'Leonardo Dicaprio',
    score: 10,
    hobbies: 'Music and dancing naked in the rain',
    description: 'He is a good guy with a thick mustache.',
  }

  return (
    <div className={styles.app}>
      <div className={styles.appContent}>
        <Actor {...actor} />
      </div>
      <Footer />
    </div>
  )
}

export default App
