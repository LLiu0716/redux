import React /* ,{ useState } */ from 'react'

import Header from './view/header'
import Content from './view/content'
import Footer from './view/footer'

function App ( props: any ) {
  // const [ count, setCount ] = useState( 0 )
  return (
    <section className="todoapp">
      <Header store={ props.store } />
      <Content store={ props.store } />
      <Footer store={ props.store } />
    </section >
  )
}

export default App
