import css from '../App/App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteOptions from '../VoteOptions/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'

function App() {
  return <div className={css.app}>
    <CafeInfo />
  </div>;
}

export default App;