import React from 'react'
import FeedPhotos from '../components/Feed-photos'
import get from '../get-request'
import _ from 'lodash'
require('../stylesheets/modules/feed.sass')

export default React.createClass({

  setInitialState: function () {
    return {
      photos: []
    }
  },

  loadPhotosFromServer: function () {
    get('http://localhost:3000/api/v2/photos/', '', function (err, res) {
      if (err) console.log('Error:', err)
      this.setState({photos: res})
    // setInterval(this.loadPhotosFromServer, 2000)
    }.bind(this))
  },

  componentWillMount: function () {
    this.loadPhotosFromServer()
  },

  render: function () {
    let displayPhotos = []
    if (this.state !== null) {
      displayPhotos = this.state.photos
    }
    return (
      <div>
        <FeedPhotos photos={displayPhotos} />
      </div>
    )
  }
})
