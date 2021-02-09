import React /* ,{ useState } */ from 'react'

import Header from './view/header'
import Content from './view/content'
import Footer from './view/footer'

function App () {
  // const [ count, setCount ] = useState( 0 )
  return (
    <section className="todoapp">
      <Header />
      <Content />
      <Footer />
    </section >
  )
}

export default App
