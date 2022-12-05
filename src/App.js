import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SearchBar from './components/searchBar';


const emails = [
  {
    id: "email-01",
    title: "Reporte de resultados",
  },
  {
    id: "email-02",
    title: "Requisitos para cambio",
  },
  {
    id: "email-03",
    title: "Estatus de funcionalidad",
  },
  {
    id: "email-04",
    title: "Próximos eventos",
  },
  {
    id: "email-05",
    title: "Participa en la encuesta",
  },
];

const calendar = [
  {
    id: "calendar-01",
    title: "Sesión de seguimiento",
  },
  {
    id: "calendar-02",
    title: "Revisión de propuestas",
  },
  {
    id: "calendar-03",
    title: "Evento para donar juguetes",
  },
  {
    id: "calendar-04",
    title: "Junta semanal de equipo",
  },
  {
    id: "calendar-05",
    title: "Revisión de pendientes con cliente",
  },
];

const people = [
  {
    id: "people-01",
    title: "Juan Perez",
  },
  {
    id: "people-02",
    title: "Marcos Rivas",
  },
  {
    id: "people-03",
    title: "Sergio Martinez",
  },
  {
    id: "people-04",
    title: "Laura Jimenez",
  },
  {
    id: "people-05",
    title: "Horario Martinez",
  },
];


function App() {
  const [data, setData] = useState([...people, ...calendar, ...emails])
  const [selection, setSelection] = useState(null)
  const [currentOption, setCurrentOption] = useState('all')
  const [text, setText] = useState()
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('');


  function handleClic(e) {
    const op = e.target.name
    console.log(op)
    switch (op) {
      case "all":
        setData([...people, ...emails, ...calendar]);
        setCurrentOption("all");
        setText('#44B544')
        break;

      case "people":
        setData([...people]);
        setCurrentOption("people");
        setText('blue')
        break;

      case "emails":
        setData([...emails]);
        setCurrentOption("emails");
        setText('#EAE71A')
        break;

      case "calendar":
        setData([...calendar]);
        setCurrentOption("calendar");
        setText('#44B544')
        break;

      default:
        break;
    }


  }



  function handleOnItemSelected(item) {
    setSelection(item);
  }

  console.log(currentOption.toUpperCase())


  return (
    <>

      <div class="night">
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>
        <div class="shooting_star"></div>

      </div>
      <div className='Header'>
        <div className='inner-header'>
          <div className='buttonsApp'>
            <button className='buttonCSS' onClick={handleClic} name='all'>All</button>

            <button className='buttonCSS' onClick={handleClic} name='people'>People</button>
            <button className='buttonCSS' onClick={handleClic} name='calendar'>Calendar</button>
            <button className='buttonCSS' onClick={handleClic} name='emails'>Emails</button>
          </div>
          <div className='textCSS' style={{ color: text }}>You search in: {currentOption.toUpperCase()}</div>
          {selection ? <div className='textSelected'>You selected: {selection.title}</div> : ''}
          <SearchBar items={data} onItemSelected={handleOnItemSelected} />
        </div>
      </div>
     
    </>
  );
}

export default App;
