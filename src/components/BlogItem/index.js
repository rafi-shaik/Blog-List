// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {listDetails} = props
  const {title, description, publishedDate} = listDetails

  return (
    <li className="list-item">
      <div className="header">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="para">{description}</p>
    </li>
  )
}
export default BlogItem
