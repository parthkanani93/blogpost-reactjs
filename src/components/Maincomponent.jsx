import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Author from './Authorcomponent';
import AuthorDetails from './AuthorDetails';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: [],
            post : []
        }




    }
    componentDidMount() {
        fetch('http://localhost:3001/authors').then(responce => responce.json()).then(user => { this.setState({ author: user }) })
        fetch('http://localhost:3001/posts').then(responce => responce.json()).then(user => { this.setState({ post: user }) })



    }

    render() {

        const AuthorWithId = ({ match }) => {
            return (

                <div>
                    <AuthorDetails author={this.state.author.filter((author) => (author.id) === (match.params.authorid))[0]}
                        post={this.state.post.filter((post)=> post.authorId === parseInt(match.params.authorid))}
                        
                    
                    />

                </div>
            );


        }
        return (
            <div>

                <Switch>
                    <Route exact path="/author" component={() => <Author author={this.state.author} />} />
                    <Route path="/author/:authorid" component={AuthorWithId} />
                    <Redirect to="/author" />
                </Switch>

            </div>
        );
    }
}

export default withRouter(Main);
