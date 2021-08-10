import {creatiiveList} from '../../dataConfig'
import CollageItems from './CollageItem'


const Creative = () => {
    return(
        <div className="creative-container cut-nav">
            <div className="title-container l-container">
                Creative Communication
            </div>
            <div className="collage-container">
                {
                    creatiiveList.map((val,i) => {
                        return(
                            <CollageItems 
                                Title={val.Title}
                                Img={val.Img}
                                Key={i}
                                key={i}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Creative