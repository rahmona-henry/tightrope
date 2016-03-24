import React from 'react'
import Menu from '../components/Menu'
import ProfilePic from '../components/ProfilePic'
import Photoset from '../components/Photoset'

export default React.createClass({

  getInitialState: function () {
    return {
      user: {
        username: 'Simon',
        profilepic: 'https://www.loomio.org/assets/people/simon-a37e0b965bbadd306a29caf1dd442c0b19d4c8fabac2d3fe23bab9bdc620824e.png'
      },
      photoset: [
        '/images/squares.jpeg',
        '/images/dandelion.jpg',
        '/images/laksa.jpg',
        '/images/purple.jpg',
        '/images/city.jpg'
      ]
    }
  },

  render: function () {
    return (
      <div>
        <Menu />
        <h2 className='username'>{this.state.user.username}</h2>
        <ProfilePic profilepic={this.state.user.profilepic}/>
        <Photoset photoset={this.state.photoset}/>
      </div>
    )
  }
})
