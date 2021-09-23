import './styles/importStyles.css'
import './App.css';
import { Header } from './Components/header/Header';
import  {Input}  from './Components/input/Input';
import { Navbar } from './Components/Navbar/Navbar';
import { CardTeam } from './Components/Card_team/CardTeam';
import { CardPlayer } from './Components/Card_player/CardPlayer';
import { TeamSmallCard } from './Components/TeamSmallCard/TeamSmallCard'
import {PlayerSmallCard} from './Components/PlayerSmallCard/PlayerSmallCard'
import { Sign_In_but } from './Components/Buttons/SignIn/Sign_In-but'
import { Add_button } from './Components/Buttons/Add_button/Add_button'
import { Cancel_button } from './Components/Buttons/Cancel_button/Cancel_button'
import { ImageUpload } from './Components/ImageUpload/ImageUpload'
import { Table } from './Components/Table/Table'
import {PageNotFound} from './Pages/PageNotFound/PageNotFound'
import { SignIn } from './Pages/page_enter/SignIn';
import { SignUp } from './Pages/SignUp/SignUp';
import { SignInError } from './Pages/page_enter_error/SignInError';
import { Card_teams } from './Pages/card_teams/card_teams';
import { Card_players } from './Pages/card_players/card_players';

function App() {
  return (
    <>
      <Card_players/>
    </>
  );
}

export default App;
