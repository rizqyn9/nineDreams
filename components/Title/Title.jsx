const Title = (props) => {
    const {isHamburger} = props
    return(
        <div className="title"
            style={{
                color:`${isHamburger ? 'black' : 'white' }` 
                // order: `${isHamburger ? 1 : 'none'}`
            }}
        >
            <span>
              ninedreams
            </span>
        </div>
    )
}

export default Title;