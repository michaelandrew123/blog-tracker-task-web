import { useState } from 'react'; 
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Blog from './pages/Blog';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';



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
 
    <Router>
    <div className="container">
       
            <Header title='Total Tasks' totalTasks={tasks.filter(c=> c.id > 0).length}/>  
       
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
                <Route path="/blog/:id"> 
                  <Blog /> 
                </Route>
                <Route path="/contact"> 
                  <ContactUs /> 
                </Route>
            </Switch>
    
    </div>

    </Router>
  


  );
}

export default App;

