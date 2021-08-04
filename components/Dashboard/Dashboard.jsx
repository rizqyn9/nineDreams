import {imgDashboard} from '../../dataConfig'

// _dashboard.scss

const Dashboard = () => {

    return(
        <div style={{color:'red'}} className="dashboard-container">
            <div style={{backgroundImage:`url(${imgDashboard[0].path})`}} className="img-dashboard">
            </div>
            <div className="dashboard-title-container l-container">
                <div className="title-container cut-nav">
                    <h1 className="title-dashboard larger">DO GOOD WORK</h1>
                    <h1 className="title-dashboard smaller">FOR GOOD PEOPLE</h1>
                </div>
            </div>
        </div>
    )
}

export default Dashboard