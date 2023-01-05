import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Lists from './components/Lists';
import SearchToDo from './components/SearchToDo';
import MainHeading from './components/MainHeading';
import SortOnCreatedDate from './components/SortOnCreatedDate';


function App() {
  return (
    <div class="bg-gray-800">
      <MainHeading />
      <div class="flex justify-around">
      <Title />
      <SearchToDo/>
      </div>
      <Lists />
    </div>
  );
}

export default App;
