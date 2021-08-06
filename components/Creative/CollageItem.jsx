
const CollageItems = (props) => {
    const {
        Title,
        Img,
        Key,
        children
    } = props


    return(
        <div
            key={Key}
            className="collage-item-container"
            // style={{backgroundImage:`url(${Img})`}}
        >
            <img src={Img} alt={Title} srcset="" className=""/>
            {Title}
        </div>
    )
}

export default CollageItems