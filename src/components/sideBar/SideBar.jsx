import { RxDashboard } from "react-icons/rx";
import { BsBagCheck } from "react-icons/Bs";
import { RxEnvelopeClosed } from "react-icons/rx";
import { BsWallet2 } from "react-icons/Bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/Io";
import { BsClipboardCheck } from "react-icons/Bs";
import { MdDateRange } from "react-icons/Md";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="side-bar-session">
      <h3 className="title">Medico Sales</h3>
      <div className="side-bar-container">
        <div className="side-bar-content">
          <RxDashboard className="icon" />
          <p>Dashboard</p>
        </div>
        <div className="side-bar-content">
          <BsClipboardCheck className="icon" />
          <p>Lab Test</p>
        </div>
        <div className="side-bar-content">
          <MdDateRange className="icon" />
          <p>Appointment</p>
        </div>
        <div className="side-bar-content">
          <BsBagCheck className="icon" />
          <p>Medicine Order</p>
        </div>
        <div className="side-bar-content">
          <RxEnvelopeClosed className="icon" />
          <p>Message</p>
        </div>
        <div className="side-bar-content">
          <BsWallet2 className="icon" />
          <p>Payment</p>
        </div>
        <div className="side-bar-content">
          <IoSettingsOutline className="icon" />
          <p>Settings</p>
        </div>
      </div>
      <div
        style={{
          marginTop: "112px",
          display: "flex",
          alignItems: "center",
          columnGap: "14px",
        }}
      >
        <IoIosHelpCircleOutline style={{ marginBottom: "15px" }} />
        <p>Help</p>
      </div>
    </div>
  );
}

export default SideBar;
