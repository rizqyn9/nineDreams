import React,{useEffect} from 'react';
import {ProductItems} from '../../dataConfig'
import ProductItem from "./ProductItem";

const SliderProducts = () => {
    return(
        <div className={`slider-container`}>
            {
                ProductItems.map((val,i) => {
                    return(
                        <ProductItem
                            key={`product-${i}`}
                            Title={val.Title}
                            Desc={val.Desc}
                        />
                    )
                })
            }
        </div>
    )
}

export default  SliderProducts;