import React, { Component } from 'react'

class SinglePost extends Component {
  showpost = (props)=>{
    if(!props.post) return null;
    const {title,body,userId} = this.props.post;
    return (
        <React.Fragment>
            <h3>{title}</h3>
            <p>Author: {userId}</p>
            {body}
        </React.Fragment>
    )

  }
  
    render() {
    
    return (
      <div className="col-12">
        {this.showpost(this.props)}
      </div>
    )
  }
}

export default SinglePost
