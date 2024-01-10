import '../../assets/styles/css/essentials.css';
import MySkill from '../contents/MySkill';
import History from '../contents/History';
import Info from '../contents/Info';

export default function Main() {
  return (
    <div className="main-body-container">
      <Info />
      <History />
      <MySkill />
    </div>
  );
}
