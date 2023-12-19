import React, { Component } from 'react'
import styles from './chargement.module.css'

export default class extends Component {
  render() {
    return (
      <div className={styles.chargement}>
        {' '}
        <img
          src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b952um01wn6jwy7jngcowsguyisa0ry3xbx6b71y95z7&ep=v1_gifs_search&rid=200w.gif&ct=g"
          alt="image de chargement"
        />{' '}
      </div>
    )
  }
}
