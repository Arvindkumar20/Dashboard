//icons for dashboard 
import { RxDashboard } from "react-icons/rx";
// icons for orders 
import { FaCartShopping } from "react-icons/fa6";
//icons for Customers 
import { FaUsers } from "react-icons/fa";
// icons for rupees 
import { FaRupeeSign } from "react-icons/fa";
// icon for Deals
import { FaHandHolding } from "react-icons/fa";
// icons for Categories
import { LiaListOlSolid } from "react-icons/lia";
//icons for products 
import { MdFormatListNumberedRtl } from "react-icons/md";
// icons for employee 
import { BsFillPeopleFill } from "react-icons/bs";
// icons for Banners
import { FaImages } from "react-icons/fa";
// icons for Transactions
import { PiCardholderFill } from "react-icons/pi";
// icon for setting
import { IoSettingsOutline } from "react-icons/io5";
// icon for app releases
import { IoAppsSharp } from "react-icons/io5";
// icon for integrations 
import { BsUsbSymbol } from "react-icons/bs";
// import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-light-primary elevation-4">
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar Menu */}
          <nav className="mt-2   ">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item  menu-open bg-secondary rounded">
                <a href={'/dashboard'} className=" nav-link activebg-gray-200 rounded ">
                  <RxDashboard className="mr-3   " />
                  <p className="">Dashboard</p>
                </a>
              </li>
              <li className="nav-item ">
                <a href={'/orders'} className="nav-link ">
                  <FaCartShopping className="mr-3    gap-3" />
                  <p className="">Orders</p>
                </a>
              </li>
              <li className="nav-item">
                <a href={'customers'} className="nav-link">
                  <FaUsers className="mr-3   " />
                  <p className="">
                    Customers
                    {/* <i className="fas fa-angle-left right" /> */}
                    {/* <span className="badge badge-info right">6</span> */}
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/coupons" className="nav-link">
                  <FaRupeeSign className="mr-3    gap-3" />
                  <p className="">Coupons</p>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/deals"
                  className="nav-link"
                >
                  <FaHandHolding className="mr-3    gap-3" />
                  <p className="">Deals</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="categories" className="nav-link">
                  <LiaListOlSolid className="mr-3   " />
                  <p className="">
                    Categories
                    {/* <i className="right fas fa-angle-left" /> */}
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
<MdFormatListNumberedRtl className="mr-3   "/>
                  <p className="">
                   Products
                   
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                <BsFillPeopleFill className="mr-3    gap-3" />
                  <p className="">
                    Employees
                  </p>
                </a>
              
              </li>

              <li className="nav-item">
                <a href="#" className="nav-link">
                  <FaImages className="mr-3   " />
                  <p className="">Banners</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <PiCardholderFill className="mr-3   " />
                  <p className="">Transactions</p>
                </a>
              </li>
              <div className="bg-gray border"></div>
             
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <IoSettingsOutline className="mr-3   " />
                  <p className="">
                    Setting
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/gallery.html" className="nav-link">
                  <BsUsbSymbol className="mr-3   " />
                  <p className="">Integrations</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/kanban.html" className="nav-link">
                  <IoAppsSharp className="mr-3   "/>
                  <p className="">App Releases</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
}
