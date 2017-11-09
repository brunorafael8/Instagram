import React, { PureComponent } from 'react'
import ListPage from './components/ListPage'
import {
  QueryRenderer,
  graphql
} from 'react-relay'
import environment from './Environment'

const query = graphql`
query AppAllPostQuery {
  viewer {
    ...ListPage_viewer
  }
}
`

class App extends PureComponent {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={query}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return <ListPage viewer={props.viewer} />
          }
          return <div>Loading</div>
        }}
      />
    )
  }
}
export default App
