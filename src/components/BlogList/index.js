// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {details} = props

  return (
    <ul className="blog-list">
      {details.map(each => (
        <BlogItem key={each.id} listDetails={each} />
      ))}
    </ul>
  )
}

export default BlogList
