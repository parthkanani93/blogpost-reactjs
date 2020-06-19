import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderAuthor({ author }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardBody>
                    <h1>Author Details</h1>
                    <CardTitle>Author First Name :- {author.firstName}</CardTitle>
                    <CardText>Author Last Name :- {author.lastName}</CardText>
                    <CardText>Author Phone No :-{author.phone}</CardText>
                    <CardText>Author Number of Post :-{author.numPosts}</CardText>
                    <CardText>Author Number of likes :-{author.numLikes}</CardText>
                    <CardText>Author Number of Comments :-{author.numComments}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}
function RenderPost({ post }) {
    return (
        <div className="col-12 col-md-5 m-1">
            <h1>Author posts</h1>
            {post.map((post) =>
                <Card>
                    <CardBody>
                        <Link to={`/author/${post.authorId}/${post.id}`}>
                            <CardTitle>{post.title}</CardTitle>
                        </Link>
                    </CardBody>
                </Card>
            )}
        </div>
    );
}

class AuthorDetails extends Component {
 

    render() {
        return (

            <div className="container">
                <div className="row">
                    <RenderAuthor author={this.props.author} />
                </div>
                <div className="row">
                    <RenderPost post={this.props.post} />
                </div>

            </div>

        );

    }

}
export default AuthorDetails;