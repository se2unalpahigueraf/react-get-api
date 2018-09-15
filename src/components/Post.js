import React, { Component } from 'react'
import Link from '../../node_modules/react-router-dom/Link';
 class Post extends Component {
  render() {
    const {id,title} = this.props.info;
    return (

        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>
                <Link to={`/post/${id}`} className="btn btn-danger">Ver</Link>                
            </td>
        </tr>
    )
  }
}

export default Post
