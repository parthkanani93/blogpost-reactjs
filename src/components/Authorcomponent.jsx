import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Pagination from './Paginatecomponent';

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

                <Pagination  postsPerPage={this.props.postsPerPage}
                totalPosts={this.props.totalPosts}
                paginate={this.props.paginate}
                />




            </div>


        );
    }

}
export default Author;