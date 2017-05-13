import React from 'react'
import PropTypes from 'prop-types'
const defaultImg = 'http://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png'

export default class Results extends React.Component {
  render () {
    console.log(this.props.searchData)
    // return this.props.searchData.albums.items.map((album) => {
    //   console.log(album.name)
    // })
    const albums = this.props.searchData.albums.items.map((e, i) =>
      (
        <li key={e.id}>
          <a href={e.external_urls.spotify} target='_blank'>
            <img src={e.images[0] ? e.images[0].url : defaultImg} alt='' />
            <p>{e.name}</p>
            <p className='artist-name'>By {e.artists[0].name}</p>
          </a>
        </li>
      )
    )
    const artists = this.props.searchData.artists.items.map((e, i) =>
      (
        <li key={e.id}>
          <a href={e.external_urls.spotify} target='_blank'>
            <img src={e.images[0] ? e.images[0].url : defaultImg} alt='' />
            <p>{e.name}</p>
          </a>
        </li>
      )
    )
    const playlists = this.props.searchData.playlists.items.map((e, i) =>
      (
        <li key={e.id}>
          <a href={e.external_urls.spotify} target='_blank'>
            <img src={e.images[0] ? e.images[0].url : defaultImg} alt='' />
            <p>{e.name}</p>
            <p className='artist-name'>By {e.owner.id}</p>
          </a>
        </li>
      )
    )
    const tracks = this.props.searchData.tracks.items.map((e, i) =>
      (
        <li key={e.id}>
          <a href={e.external_urls.spotify} target='_blank'>
            <div className='img-cont'>
              <img src={e.album.images[0] ? e.album.images[0].url : defaultImg} alt='' />
            </div>
            <div className='desc'>
              <p>{e.name}</p>
              <p className='artist-name'>{e.artists[0].name} &bull; {e.album.name}</p>
            </div>
          </a>
        </li>
      )
    )
    return (
      <div className='s-results'>
        <div className='albums'>
          <h2>Albums</h2>
          <ul>{albums}</ul>
        </div>
        <div className='artists'>
          <h2>Artists</h2>
          <ul>{artists}</ul>
        </div>
        <div className='playlists'>
          <h2>Playlists</h2>
          <ul>{playlists}</ul>
        </div>
        <div className='tracks'>
          <h2>Tracks</h2>
          <ul>{tracks}</ul>
        </div>
      </div>
    )
  }
}
Results.propTypes = {
  searchData: PropTypes.string.isRequired
}
