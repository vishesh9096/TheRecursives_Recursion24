import AgoraUIKit from 'agora-rn-uikit';

const VideoCall = () => {
    const connectionData = {
        appId: 'b907762bc06a4b5695a7e12f1e6f6cbd',
        channel: 'test',
        token: '007eJxTYIgurgtM9LqtH5K/xn6baPnx049FFx10KxbL4kxk4v3mMkOBIcnSwNzczCgp2cAs0STJ1MzSNNE81dAozTDVLM0sOSnFfu2t1IZARoaX8QdZGRkgEMRnYShJLS5hYAAAyhQejA==', // enter your channel token as a string 
       };
  return(
    <AgoraUIKit connectionData={connectionData} />
   )
}

export default VideoCall; 