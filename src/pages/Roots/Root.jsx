import { Outlet } from "react-router-dom";
import { NavbarWithSearch } from "../../components/Navbar";

export default function RootLayout(){
    return(
    <div className="bg-black absolute w-[100%] h-screen">
        <div className="mb-3"><NavbarWithSearch/></div>
        <Outlet/>
    </div>)
}