import React, { Component } from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';
import Pagination from './Paginatecomponent';

class Author extends Component {
    render() {
        return (

            <div className="container mt-4" >

                <div className="row d-flex justify-content-center " >

                    {this.props.author.map((data) =>

                        <Card body inverse key={data.id} style={{ backgroundColor: '#95dada', borderColor: '#95dada', color: 'black' }} className="col-12 col-sm-3 mx-3 my-3 card-container ">
                            <CardBody style={{ backgroundColor: "#EBEBEB" }}>
                                <Link to={`/author/${data.id}`}>
                                    <CardText ><svg class="bi bi-person-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"/>
  <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"/>
</svg> {data.firstName}{' '}{data.lastName}</CardText>
                                </Link>

                            </CardBody>
                        </Card>



                    )}



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