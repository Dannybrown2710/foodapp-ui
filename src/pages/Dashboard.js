import { useSelector } from "react-redux";
import RestaurantList from "./customer/RestaurantList"

function Dashboard(props){
    const {userData} = useSelector(state => state.auth)
    return (
        <div>
            hi
            {userData.role === 'Admin' ? <>Admin</> : <RestaurantList/>}
        </div>
    )
}
export default Dashboard;