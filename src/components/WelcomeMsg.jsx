const WelcomeMsg = ({onGetPostClicks}) => {
    return (
      
    <center  className="msg">
    <h1>Thre is not posts</h1>
    <button type="button" className="btn btn-primary" onClick={onGetPostClicks}>Get post from server</button>
    </center>
    )
}



export default WelcomeMsg;