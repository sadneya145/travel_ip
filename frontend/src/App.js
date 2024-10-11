import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from '../src/Components/Login/Login.js'
import Signup from '../src/Components/Signup/Signup.js'
import Map from '../src/Components/Map/Map.js'
import Home from '../src/Components/Home/Home.js'
import SocialMedia from '../src/Components/SocilaMedia/SocialMedia/SocialMedia.js'
import Notifications from '../src/Components/Notification/Notification.js'
import CreatePost from '../src/Components/SocilaMedia/Post/CReatePost/CreatePost.js'
import Forum from '../src/Components/Forums/Forum.js'
import ExploreNow from './Components/Explore/Explore.js';
import StateDetails from './Components/Explore/StateDetails.js';

function App() {
  return (
    <div classname="App">
      
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/map' element={<Map/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/home/SocialMedia" element={<SocialMedia />} />
        <Route path="/home/notification" element={<Notifications />} />
        <Route path='/home/create-post' element={<CreatePost />} />
        <Route path="/home/forum" element={<Forum />} />
        <Route path='/explore' element={<ExploreNow/>}/>
        <Route path="/state/:stateName" element={<StateDetails />} />
        </Routes>
    </div>
  );
}

export default App;
