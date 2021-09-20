import { useState } from 'react'; 
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './components/Blog/BlogDetails';
import Redux from './pages/Redux';
import Image from './pages/Image';
import Todo from './pages/Todo';
import Modefied from './components/Blog/Modefied';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './pageNotFound/NotFound';
import AllMeetups from './components/Todo/pages/AllMeetups';
import NewMeetup from './components/Todo/pages/NewMeetup';
import Favorites from './components/Todo/pages/Favorites';
import CakeShop from './pages/CakeShop';





// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:80/reactImageUpload.php', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// App.use<any>(cors(corsOptions));


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        title: 'Selling Card',
        day: 'Feb 14th at 2:30pm',
        reminder: false
    },
    {
        id: 2,
        title: 'Food Shopping',
        day: 'Feb 15th at 8:30am',
        reminder: true
    },
    {
        id: 3,
        title: 'Food Trip',
        day: 'Feb 16th at 6:30pm',
        reminder: false
    },
    {
        id: 4,
        title: 'General Meeting',
        day: 'Feb 17th at 7:00am',
        reminder: false
    }
]);


  //Delete Items
  const deleteTask = (id) => { 
    setTasks(tasks.filter((task)=> task.id !== id)); 
  }
  //To toggle reminder
  const toggleReminder = (id)=> {
    setTasks(
      tasks.map(
        (task)=>task.id === id ? 
        { ...task, reminder: !task.reminder  } : task )
      )
  }
  //add task

  const addTask = (task) => {  
    const id = Math.floor(Math.random() * 10000) + 1; 
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
  }


  return (
    <> 
      <Router>
        <div className="container"> 
              <Header title='Igrev' totalTasks={tasks.filter(c=> c.id > 0).length}/>   
              <Switch>  
                  <Route exact path="/"> 
                    <Home 
                    onAdd={addTask} 
                    tasks={tasks}
                    onDelete={deleteTask} 
                    onToggle={toggleReminder}
                    />   
                  </Route> 
                  <Route path="/about"> 
                    <About /> 
                  </Route> 
                  <Route path="/blog"> 
                    <Blog /> 
                  </Route>
                  <Route path="/blogs/:id"> 
                    <BlogDetails /> 
                  </Route>
                  <Route path="/contact"> 
                    <ContactUs /> 
                  </Route> 
                  <Route path="/redux"> 
                    <Redux /> 
                  </Route> 
                  <Route path="/image"> 
                    <Image /> 
                  </Route> 
                  <Route path="/modefied/:id"> 
                    <Modefied /> 
                  </Route> 
                  <Route path="/todo"> 
                    <Todo /> 
                  </Route> 
                  <Route path="/allmeetup"> 
                    <AllMeetups />
                  </Route> 
                  <Route path="/new-meetup"> 
                    <NewMeetup />
                  </Route> 
                  <Route path="/favorites"> 
                    <Favorites />
                  </Route> 
                  <Route path="/CakeShop"> 
                    <CakeShop />
                  </Route> 
                  <Route path="*"> 
                    <NotFound /> 
                  </Route>
              </Switch> 
        </div> 
      </Router>
 
    </>


  );
}

export default App;

