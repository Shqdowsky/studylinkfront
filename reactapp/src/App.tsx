import React,{useState} from 'react';
import Header from './components/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WorksPage from './pages/WorksPage';
import WorkIdPage from './pages/WorkIdPage';
import CreateWorkPage from './pages/CreateWorkPage';
import CategoryWorksPage from './pages/CategoryWorksPage';
import RecentWorksPage from './pages/RecentWorksPage';
import { SelectContext } from './context/SubjectContext';
import MainPage from './pages/mainpage/MainPage';

function App() {
  const [selectedSubject, setSelectedSubject] = useState("");
  const [searchQuery, setSearchQuery] = useState('')
  
  return (
    <SelectContext.Provider value={{
      selectedSubject,
      setSelectedSubject
    }}>
      <div className="App">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Routes>
          <Route path = '/' element={<MainPage/>}/>
          <Route path = '/works' element={<WorksPage searchQuery={searchQuery}/>}/>
          <Route path = '/create-work' element={<CreateWorkPage/>}/>
          <Route path = '/works/:id' element={<WorkIdPage/>} />
          <Route path = '/predmet/:predmet' element={<CategoryWorksPage searchQuery={searchQuery}/>} />
          <Route path = '/recent-works' element={<RecentWorksPage searchQuery={searchQuery}/>}/>
        </Routes>
      </div>
    </SelectContext.Provider>
  );
}

export default App;
