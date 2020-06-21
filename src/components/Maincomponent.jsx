import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Author from './Authorcomponent';
import AuthorDetails from './AuthorDetails';
import Postdetails from './Postdetails';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: [],
            post: [],
            comment: [],
            currentPage: 1,
            postsPerPage: 50

        }




    }
    componentDidMount() {
        fetch('http://localhost:3001/authors').then(responce => responce.json()).then(user => { this.setState({ author: user }) })
        fetch('http://localhost:3001/posts').then(responce => responce.json()).then(user => { this.setState({ post: user }) })
        fetch('http://localhost:3001/comments').then(responce => responce.json()).then(user => { this.setState({ comment: user }) })



    }


    render() {

        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.state.author.slice(indexOfFirstPost, indexOfLastPost);

        const paginate = pageNumber =>{this.setState({currentPage : pageNumber})}
   

       

        const AuthorWithId = ({ match }) => {
            return (

                <div>
                    <AuthorDetails author={this.state.author.filter((author) => (author.id) === (match.params.authorid))[0]}
                        post={this.state.post.filter((post) => post.authorId === parseInt(match.params.authorid))}


                    />

                </div>
            );

        }
        const PostwithId = ({ match }) => {
            return (
                <div>
                    <Postdetails post={this.state.post.filter((post) => post.id === (match.params.postid))[0]}
                        comment={this.state.comment.filter((comment) => comment.postId === parseInt(match.params.postid))} />
                </div>

            );
        }
        return (
            <div>
                <h1>Blog Posts</h1>

                <Switch>
                    <Route exact path="/author" component={() => <Author author={currentPosts}
                     postsPerPage={this.state.postsPerPage} 
                     totalPosts={this.state.author.length} 
                     paginate={paginate}  />} />
                    <Route exact path="/author/:authorid" component={AuthorWithId} />
                    <Route path="/author/:authorid/:postid" component={PostwithId} />
                    <Redirect to="/author" />
                </Switch>
              

            </div>
        );
    }
}

export default withRouter(Main);
