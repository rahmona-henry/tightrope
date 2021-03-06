import { Link } from 'react-router'
import React from 'react'

export default React.createClass({
  propTypes: {
    photo: React.PropTypes.object
  },
  render: function () {
    let routeID = '/photos/' + this.props.photo.photo_id
    return (
      <div className='photo panel'>
        <Link to={routeID}>
          <img src={this.props.photo.photo_url} className='img-responsive thumbnail'/>
          <div className='feedInfo'>
            <span className='likes'><i className='fa fa-star'> {this.props.photo.likes}</i></span>
            <span className='comments'><i className='fa fa-comment'> {this.props.photo.comments}</i></span>
          </div>
        </Link>
      </div>
    )
  }
})
