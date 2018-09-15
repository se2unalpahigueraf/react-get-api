
//rce
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import  Header from "./Header";
import  Navegacion from "./Navegacion";
import Posts from "./Posts";
import SinglePost from "./SinglePost";


class Router extends Component {
    state={
        posts:[]
    }

    componentDidMount(){
        this.getPost();
    }

    getPost=()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res=>{
                this.setState({
                    posts: res.data
                })
            })
    }
    

    render() {
    return (
      <BrowserRouter>
        <div className="container">
            <Header/>
            <Navegacion/>
            <Switch>
                <Route exact path="/" render={ () =>{
                    return (
                        <Posts
                            posts={this.state.posts}                            
                        />
                    )
                }

                }
                />
                <Route exact path="/post/:postId" render={ (props) =>{
                    let idPost = props.location.pathname.replace('/post/','');
                    const posts = this.state.posts;
                    let filter;
                    filter= posts.filter(post => (
                        post.id === Number(idPost)
                    ))
                    return (
                        <SinglePost
                            post={filter[0]}
                        />
                    )
                }

                }
                />
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default Router

