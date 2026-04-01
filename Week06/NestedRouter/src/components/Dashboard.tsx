import {Link, Outlet} from 'react-router-dom'

const DashBoard = () => {
    return (
        <>
        <h2>Dashboard</h2>
        <nav>
            <Link to="profile">Profile</Link>
            <Link to="orders">Orders</Link>
            <Link to="setting">Settings</Link>
        </nav>
        <Outlet/>
        </>
    )
}

export default DashBoard