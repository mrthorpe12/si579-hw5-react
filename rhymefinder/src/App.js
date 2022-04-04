// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SavedWords from "./components/SavedWords";
import WordInput from "./components/WordInput";
import WordOutput from './components/WordOutput';

function App() {
    const [userWord, setUserWord] = useState('');
    const [searchType, setSearchType] = useState('');
    const [saveWord, setSaveWord] = useState([]);
    const [dataOutput, setDataOutput] = useState([]);

    return (
        <main className="container">
            <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
            <p>Repo: <a href="https://github.com/mrthorpe12/si579-hw5-react">https://github.com/mrthorpe12/si579-hw5-react</a></p>
            <SavedWords saveWord={saveWord} setSaveWord={setSaveWord} />
            <WordInput userWord={userWord} setUserWord={setUserWord} searchType={searchType} setSearchType={setSearchType} saveWord={saveWord} setSaveWord={setSaveWord} dataOutput={dataOutput} setDataOutput={setDataOutput} />
            <WordOutput userWord={userWord} searchType={searchType} dataOutput={dataOutput} />
        </main>
    );
}

export default App;
