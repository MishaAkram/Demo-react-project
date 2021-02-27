import React, { Component } from 'react'
import axios from 'axios'
export class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
      componentDidMount(){
          axios.get()
      }
    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default PostList
