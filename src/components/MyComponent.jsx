import React, { Component } from 'react'
import Chargement from './Chargement'

export default class MyComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  }
  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), 4000)
  }
  render() {
    if (this.state.isLoading) return <Chargement />
    return <div>Le chargement du composant est terminé .....</div>
  }
}
