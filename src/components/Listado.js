import React, { Component } from 'react'
import Post from "./Post";

class Listado extends Component {
    showPosts = () => {
        const posts=this.props.posts;
        if (posts.length===0) return null;
        return(
            <React.Fragment>
                {Object.keys(posts).map(post =>(
                    <Post
                        key={post}    
                        info = {this.props.posts[post]}                        
                    />
                ))}
            </React.Fragment>
        )
    }
    render() {
    return (
        <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Titulo</th>
            <th scope="col">Acción</th>            
          </tr>
        </thead>
        <tbody>
            {this.showPosts()}
        </tbody>
        </table>
    )
  }
}

export default Listado
