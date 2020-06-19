import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';


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

function RenderComment({ comment }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <h1>Post Comments</h1>
            {comment.map((comment) =>
                <Card>
                    <CardBody>
                        <CardText><h3>{comment.text}</h3></CardText>
                        <Link to={`/author/${comment.authorId}`}> 
                            <CardText><h6>Author</h6></CardText>
                        </Link>

                    </CardBody>
                </Card>

            )}
        </div>
    );
}

class Postdetails extends Component {

    render() {

        return (
            <div className="container">
                <div className="row">

                    <RenderPost post={this.props.post} />

                </div>
                <div className="row">
                    <RenderComment comment={this.props.comment} />

                </div>

            </div>

        );
    }


}

export default Postdetails;