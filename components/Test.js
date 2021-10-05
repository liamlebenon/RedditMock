export const Test = () => {
    const redditAPI  = async () => {
        let response = await fetch('https://www.reddit.com/r/TheoryOfReddit/wiki/collecting_data.json')
        console.log(response)
    }
    
    return(
        <div className='test'>
            {redditAPI()};
        </div>
    )
}