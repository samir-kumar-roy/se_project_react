import avatar from "../../assets/avatar.svg";
import "./Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar__user-container">
      <img src={avatar} alt="Terrence Tegegne" className="sidebar__avatar" />
      <p className="sidebar__username">Terrence Tegegne</p>
    </div>
  );
}
