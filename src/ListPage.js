import React from 'react'
import Post from './Post'
​
const mockPostData = [
  {
    node: {
      id: "1",
      description: "Howdy Partner",
      imageUrl: "http://www.cutestpaw.com/wp-content/uploads/2015/09/s-Howdy-partner.jpeg"
    }
  },
  {
    node: {
      id: "2",
      description: "Ice Cream!",
      imageUrl: "https://s-media-cache-ak0.pinimg.com/originals/b9/ba/b9/b9bab9dcacb9efde92e015af07834473.jpg"
    }
  }
]
​
class ListPage extends React.Component {
​
  render () {
    return (
      <div className='w-100 flex justify-center'>
        <div className='w-100' style={{ maxWidth: 400 }}>
          {mockPostData.map(({node}) =>
            <Post key={node.id} post={node} />
          )}
        </div>
      </div>
    )
  }
​
}
​
export default ListPage