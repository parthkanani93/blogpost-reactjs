import React, { Component } from 'react';
import Author from './Authorcomponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: []
        }




    }
    componentDidMount() {
        fetch('http://localhost:3001/authors').then(responce => responce.json()).then(user => { this.setState({ author: user }) })


    }

    render() {
        return (
            <div>
                <Author author={this.state.author} />

            </div>
        );
    }
}

export default Main;
