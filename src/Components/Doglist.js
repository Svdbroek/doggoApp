import React, { Component } from 'react';

class Doglist extends Component {
    state ={
        dogBreeds: null
    }

    componentDidMount(){fetch ('https://dog.ceo/api/breeds/list/all') // make the request
        .then(response => response.json()) 
        .then(myJson => {
            const breeds= Object.keys( myJson.message);
            this.updateBreeds(breeds)
        })
        .catch(console.error)

    }


updateBreeds(breed){
    this.setState({dogBreeds: breed})
}

    render() {
        return (
            <div className ="dogs-list">
                <h1>Dogs List</h1>        
                {this.state.dogBreads === null && <img src="https://cdn.dribbble.com/users/1782673/screenshots/4683964/ezgif.com-video-to-gif__2_.gif"/>}        
            </div>
        );
    }
}

export default Doglist;