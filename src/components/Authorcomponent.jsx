import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Pagination from './Paginatecomponent';

class Author extends Component {
    render() {
        return (

            <div className="container mt-4" >

                <div className="row d-flex justify-content-center " >
                    <div className="col-6"  >
                        {this.props.author.map((data) =>

                            <ListGroup className="container-md" >
                                <Link to={`/author/${data.id}`}>
                                    <ListGroupItem style={{backgroundColor : "#EBEBEB"}}> {data.firstName}</ListGroupItem>
                                </Link>
                            </ListGroup>



                        )}
                    </div>


                </div>
                <div className="row d-flex justify-content-center mt-4">
                    <Pagination postsPerPage={this.props.postsPerPage}
                        totalPosts={this.props.totalPosts}
                        paginate={this.props.paginate}
                    />

                </div>






            </div>


        );
    }

}
export default Author;