import React, { Component } from 'react'
import Results from './Results'
var axios = require('axios')

export default class Layout extends Component {
  constructor (props) {
    super(props)
    this.state = {
      desc: 'Search for an Artist, Song, Album or Playlist',
      placeholder: 'Search on Spotify...',
      submitted: false,
      searchValue: '',
      data: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }
  handleChange (e) {
    this.setState({ searchValue: e.target.value })
  }
  handleEnter (e) {
    if (e.key === 'Enter') {
      this.handleSubmit()
    }
  }
  handleSubmit (e) {
    const query = encodeURIComponent(this.state.searchValue)
    this.searchSpotify(query)
  }
  searchSpotify (q) {
    if (!q.length > 0) {
      return
    }
    const uri = `https://api.spotify.com/v1/search?q=${q}&type=album,artist,playlist,track`
    axios.get(uri)
      .then((response) => {
        this.setState({data: response.data})
        this.setState({'submitted': true})
        console.log(this.state.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render () {
    let resultsEl = null
    if (this.state.submitted) {
      resultsEl = <Results searchData={this.state.data} />
    }
    return (
      <div className='search'>
        <div className='s-wrapper'>
          <span>{this.state.desc}</span>
          <input type='text' placeholder={this.state.placeholder} value={this.state.searchValue} onKeyPress={this.handleEnter} onChange={this.handleChange} />
          <i className='material-icons search-icon' onClick={this.handleSubmit} >search</i>
        </div>
        {resultsEl}
      </div>
    )
  }
}
