import '../../assets/styles/css/essentials.css';
import MySkill from '../contents/MySkill';
import History from '../contents/History';

export default function Main() {
  return (
    <div className="main-body-container">
      <History />
      <MySkill />
    </div>
  );
}
