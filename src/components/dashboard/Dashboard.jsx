import { data } from "./DashboardData";
import { CiSearch } from "react-icons/Ci";
import { IoMdNotificationsOutline } from "react-icons/Io";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-session">
      <div className="search-container">
        <CiSearch className="search-icon" />
        <input type="text" placeholder="Search" name="" id="" />
        <IoMdNotificationsOutline style={{background:"#fff",padding:"5px",color:"black",fontSize:"35px",borderRadius:"8px",marginLeft:"365px"}} />
      </div>
      <p>Sales Information</p>
      <div className="searching-field">
        <div className="search-input">
          <p>Customer</p>
          <input type="text" placeholder="Enter Costumer Name" name="" id="" />
        </div>
        <div className="search-input">
          <p>Invoice ID</p>
          <input type="text" placeholder="Enter Invoice ID" name="" id="" />
        </div>
        <div className="search-input">
          <p>Start Date</p>
          <input type="text" placeholder="Start Date" name="" id="" />
        </div>
        <div className="search-input">
          <p>End Date</p>
          <input type="text" placeholder="End Date" name="" id="" />
        </div>
      </div>
      <div className="data-container">
        <div className="data-titles">
          <div style={{ display: "flex", columnGap: "25px" }}>
            <input
              type="checkbox"
              name=""
              id=""
              style={{ marginBottom: "11px" }}
            />
            <p>invoice</p>
          </div>

          <p className="date">date</p>
          <p className="customer">customer</p>
          <p className="payableAmount">payableAmount</p>
          <p className="paidAmount">paidAmount</p>
          <p className="due">due</p>
        </div>
        {data.map((e, i) => {
          return (
            <div className="data" key={i}>
              <div style={{ display: "flex", columnGap: "25px" }}>
                <input type="checkbox" style={{ marginBottom: "11px" }} />
                <p>{e.invoice}</p>
              </div>

              <p>{e.date}</p>
              <p>{e.customer}</p>
              <p>{e.payableAmount}</p>
              <p>{e.paidAmount}</p>
              <p>{e.due}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
