
const ProductItem = (props) => {
    const {
        children, 
        Title, 
        Desc
    } = props

    return (
        <div className='item-container'>
            {Title}
        </div>
    )
}

export default ProductItem