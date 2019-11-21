import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class DogsList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}> <Link to={ `/dog-breeds/${breed}` }>{breed}</Link></li>
  }

  render() {
    const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        { !dogBreeds && <img src="https://cdn.dribbble.com/users/1782673/screenshots/4683964/ezgif.com-video-to-gif__2_.gif"/> }

        {
          dogBreeds &&
          <ul>{ dogBreeds.map(this.renderDogBreed) }</ul>
        }
      </div>
    )
  }
}