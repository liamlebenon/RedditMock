import './Post.css';

export const Post = (props) => {
    return(
        <div className='post'>
            <h1>{props.title}</h1>
            <p>Posted By: {props.author}</p>
            <img src={props.src} width='600px' height='600px'/>
            <p>{props.userText}</p>
        </div>
    )
}