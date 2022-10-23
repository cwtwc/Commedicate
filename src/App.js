/*global chrome*/
import React from 'react'
import styled from 'styled-components'

import './App.css'
import Banner from './partials/banner/banner'
import Article from './partials/article/article'

const Wrap = styled.div`
  display: grid;
  row-gap: 20px;
`

function App() {
  return (
    <div className="App">
      <Wrap>
        <Banner />
        <Article />
      </Wrap>
    </div>
  )
}

export default App