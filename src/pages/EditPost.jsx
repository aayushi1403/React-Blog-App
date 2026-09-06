import React,{useEffect,useState} from 'react'
import { Container } from '../components/index.js'
import service from '../appwrite/config.js'
import { useNavigate, useParams } from 'react-router-dom'
import PostForm from '../components/PostForm/PostForm.jsx'

function EditPost() {
  const [post,setPosts]=useState(null)
  const {slug}=useParams()
  const navigate=useNavigate()

  useEffect(()=>{
    if(slug){
      service.getPost(slug).then((post)=>{
        if(post)
          {
          setPosts(post)
        }
      })
    }
    else{
      navigate('/')
    }
  },[slug,navigate])
  return post? (
    <div className='py-8'>
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  ):null
}

export default EditPost
