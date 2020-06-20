import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderPost({ post }) {
    return (
        


            <Card>
                
                <CardBody style={{backgroundColor : "#EBEBEB"}}>
                <h2>Post Details</h2>

                    <CardTitle><h4>{post.title}</h4></CardTitle>
                    <CardText>datePublished :- {post.datePublished}</CardText>
                    <CardText>number of likes :-{post.numLikes}</CardText>
                    <CardText>Description :-{post.description}</CardText>

                </CardBody>
            </Card>

    
    );
}

function RenderComment({ comment }) {
    return (
        <div>
            <h2>Post Comments</h2>
            {comment.map((comment) =>
                <Card>
                    <CardBody style={{backgroundColor : "#EBEBEB"}}>
                        <CardText><h4>{comment.text}</h4></CardText>
                        <Link to={`/author/${comment.authorId}`}>
                            <CardText><h7>Author</h7></CardText>
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
                <div className="row d-flex justify-content-center">
                    <div>
                        <RenderPost post={this.props.post} />

                    </div>



                </div>
                <div className="row d-flex justify-content-center">
                    <div>
                        <RenderComment comment={this.props.comment} />

                    </div>


                </div>

            </div>

        );
    }


}

export default Postdetails;