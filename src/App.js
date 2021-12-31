import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navapp from './components/nav/Nav'
import './App.css';
function App() {

  const [tasks, setTasks] = useState([]);
  console.log(tasks);
  const addTask = (id, title, description, date) => {
    setTasks([
      ...tasks,
      {
        id: id,
        title: title,
        description: description,
        date: date,
      },
    ]);
  };
  const [contacts, setContacts] = useState([]);
  console.log(contacts);
  const addContact = (id, name, address, email, tel, mob) => {
    setContacts([
      ...contacts,
      {
        id: id,
        name: name,
        address: address,
        email: email,
        tel: tel,
        mob: mob,
      },
    ]);
  };
  return (
    <>
      <Navapp
        addTask={(id, title, description, date) => addTask(id, title, description, date)}
        addContact={(id, name, address, email, tel, mob) => addContact(id, name, address, email, tel, mob)}
      />
    </>

  );
}

export default App;
