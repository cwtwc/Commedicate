import React, { useEffect } from 'react'
import { useCounter } from '../../store/reducer'
import styled from 'styled-components'
import Header from '../../components/header/header'
import Desc from '../../components/desc/desc'
import Layout from '../../layout/layout'
import Wrap from '../../layout/wrap'
import Skeleton from 'react-loading-skeleton'

const StyledDesc = styled(Desc)`
  height: 154px;
`

const Article = props => {
  const [state, actions] = useCounter()

  useEffect(() => {
    actions.fetchArticle()
  }, [])

  return (
    <Layout>
      <Wrap as="article">
        <Header bold margin>
          {state.title || <Skeleton />}
        </Header>
        <StyledDesc>
          {state.desc || <Skeleton />}
        </StyledDesc>
      </Wrap>
    </Layout>
  )
}

export default Article