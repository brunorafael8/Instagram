import React, {PureComponent} from 'react'
import Post from './Post'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class ListPage extends PureComponent {

  render () {
    return (
      <div className='w-100 flex justify-center'>
        <div className='w-100' style={{ maxWidth: 400 }}>
          {this.props.viewer.allPosts.edges.map(({node}) =>
          <Post key={node.id} post={node} />
          )}
        </div>
      </div>
    )
  }

}

export default createFragmentContainer(ListPage, graphql`
fragment ListPage_viewer on Viewer {
  allPosts(last: 100, orderBy: createdAt_DESC) @connection(key: "ListPage_allPosts", filters: []) {
    edges {
      node {
        ...Post_post
      }
    }
  }
}
`)
