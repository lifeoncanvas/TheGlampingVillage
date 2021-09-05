import React from 'react'
import video from './videoPlayer'
import ReactPlayer from 'react-player/youtube'

const videoPlayer = () => {
	return (
		<div>
			<div className='video-player'>
			<ReactPlayer
          className='react-player'
		  controls={true}
		  
          url='https://youtu.be/fEErySYqItI'
          width='80%'
          height='80%'
        />
				
			</div>
		</div>
	)
}

export default videoPlayer
