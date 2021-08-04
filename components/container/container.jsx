
import Header from "../Header/Header"

const Container = ({children, data}) => {
    
    return(
        <div className="container">
            <Header/>
            {children}
        </div>
    )
}


export default Container