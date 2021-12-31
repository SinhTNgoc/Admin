import Chart from "../../components/Chart/Chart"
import FeaturedInfo from "../FeaturedInfo/FeaturedInfo"
import "./home.css"
import {userData} from "../../dummyData"
import WidgetSm from "../../components/WidgetSm/WidgetSm"
import WidgetLg from "../../components/WidgetLg/WidgetLg"

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User analytics" grid dataKey="user"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}

export default Home
