import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Author extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="container" >

                {this.props.author.map((name) =>
                    <div className="row md-5 d-flex justify-content-center">
                        <ListGroup className="container-md">
                            <ListGroupItem > {name.firstName}</ListGroupItem>
                        </ListGroup>


                    </div>
                )}


            </div>


        );
    }

}
export default Author;