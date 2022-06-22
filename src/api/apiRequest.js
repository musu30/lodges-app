import React from 'react'
import axios from 'axios'

const getApiDetails=()=>{
   return axios.get("http://localhost:3000/posts")
}
const postApiDetails=(data)=>{
    return axios.post("http://localhost:3000/posts",data)
 }
 

export { getApiDetails,postApiDetails}