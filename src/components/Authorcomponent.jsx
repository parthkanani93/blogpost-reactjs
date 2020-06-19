import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Author extends Component {
    render() {
        return (

            <div className="container" >

                {this.props.author.map((data) =>
                    <div className="row md-5 d-flex justify-content-center">
                        <ListGroup className="container-md">
                            <Link to={`/author/${data.id}`}>
                                <ListGroupItem > {data.firstName}</ListGroupItem>
                            </Link>
                        </ListGroup>


                    </div>
                )}


            </div>


        );
    }

}
export default Author;