import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom'
import Post from './Post'
import {
  createFragmentContainer,
  graphql
} from 'react-relay'

class ListPage extends PureComponent {

  render () {
    return (
      <div className='w-100 flex justify-center'>
        <Link to='/create' className='fixed bg-white top-0 right-0 pa4 ttu dim black no-underline'>
        + New Post
      </Link>
        <div className='w-100' style={{ maxheight: 200, maxWidth: 600 }}>
          {this.props.viewer.allPosts.edges.map(({node}) =>
          <Post key={node.id} post={node} viewer={this.props.viewer} />
          )}
        </div>
      </div>
    )
  }

}

export default createFragmentContainer(ListPage, graphql`
fragment ListPage_viewer on Viewer {
  ...Post_viewer
  allPosts(last: 100, orderBy: createdAt_DESC) @connection(key: "ListPage_allPosts", filters: []) {
    edges {
      node {
        ...Post_post
      }
    }
  }
}
`)
