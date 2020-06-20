import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderAuthor({ author }) {
    return (
      
            <Card >
                <CardBody style={{backgroundColor : "#EBEBEB"}}>
                    <h2>Author Details</h2>
                    <CardTitle>Author First Name :- {author.firstName}</CardTitle>
                    <CardText>Author Last Name :- {author.lastName}</CardText>
                    <CardText>Author Phone No :-{author.phone}</CardText>
                    <CardText>Author Number of Post :-{author.numPosts}</CardText>
                    <CardText>Author Number of likes :-{author.numLikes}</CardText>
                    <CardText>Author Number of Comments :-{author.numComments}</CardText>
                </CardBody>
            </Card>
    
    );
}
function RenderPost({ post }) {
    return (
        <div>

            <h2>Author posts</h2>
            {post.map((post) =>
                <Card>
                    <CardBody style={{backgroundColor : "#EBEBEB"}}>
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
                <div className="row d-flex justify-content-center" >
                    <div className="col-8">
                        <RenderAuthor author={this.props.author} />
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <RenderPost post={this.props.post} />
                    </div>
                </div>

            </div>

        );

    }

}
export default AuthorDetails;