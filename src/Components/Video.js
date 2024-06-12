import React from 'react'
import ReactPlayer from 'react-player/youtube';


const Video = () => {
  return (
    <ReactPlayer  light ={true} controls={true} width="100%" height ="500px"
  url="https://www.youtube.com/watch?v=QsY8fnvMn6c" />
  )
}

export default Video