import React, { Component } from 'react'
import axios from 'axios'

const api =axios.create({
    baseURL : 'http://localhost:3000/courses/'
})

 class App extends Component {
     constructor(props) {
         super(props)
     
         api.get('/').then(res => {
             console.log(res.data)

         })
     }
     
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default App
