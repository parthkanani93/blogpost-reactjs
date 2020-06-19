import React, { Component } from 'react';
import {Card,CardBody,CardTitle,CardText} from 'reactstrap';


function RenderPost({ post }) {
    return (
        <div className="col-12 col-md-5 m-1">


            <Card>
                <h1>Post Details</h1>
                <CardBody>

                    <CardTitle><h3>{post.title}</h3></CardTitle>
                    <CardText>datePublished :- {post.datePublished}</CardText>
                    <CardText>number of likes :-{post.numLikes}</CardText>
                    <CardText>Description :-{post.description}</CardText>

                </CardBody>
            </Card>

        </div>
    );
}

class Postdetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    
                    <RenderPost post={this.props.post} />

                </div>
                <div className="row">

                </div>

            </div>

        );
    }


}

export default Postdetails;