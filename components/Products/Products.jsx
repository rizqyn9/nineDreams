import {ProductItems} from '../../dataConfig'
import ProductItem from './ProductItem';
import use from '@react-hook/window-size'
import {useSwipeable} from 'react-swipeable';
import SliderProducts from "./SliderProducts";


export default function Products () {
    const handler = useSwipeable({
        onSwiped:(e)=> {
            console.log(e)
        },
        onTap: (e) => {
            console.log(e.event)
        }
    })
    return (
        <div className="product-container cut-nav l-container">
            <div className="title-container">
                <h2 className="text-lg">Explore other Products</h2>
                <div className="product-2-container">
                    <h1 className="text-4xl">Explore other Products</h1>
                    <div className="text-lg">
                        View more . . .
                    </div>
                </div>
            </div>
            <div className="category-container text-lg">
                <h3 className="text-md">hehehe</h3>
                <h3 className="text-md">hehehe</h3>
                <h3 className="text-md">hehehe</h3>
                <h3 className="text-md">hehehe</h3>
            </div>
            <div className="product-list-container">
                <div className="product-list" {...handler}>
                    <SliderProducts/>
                    {/*{*/}
                    {/*    ProductItems.map((val,i) => {*/}
                    {/*        return(*/}
                    {/*            <ProductItem*/}
                    {/*                key={`product-${i}`}*/}
                    {/*                Title={val.Title}*/}
                    {/*                Desc={val.Desc}*/}
                    {/*            />*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                </div>
            </div>
        </div>
    )
}