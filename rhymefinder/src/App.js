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
    const [loadingStatus, setLoadingStatus] = useState('');

    return (
        <main className="container">
            <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
            <p>Repo: <a href="https://github.com/mrthorpe12/si579-hw5-react">https://github.com/mrthorpe12/si579-hw5-react</a></p>
            <SavedWords saveWord={saveWord} />
            <WordInput userWord={userWord} setUserWord={setUserWord} setSearchType={setSearchType} dataOutput={dataOutput} setDataOutput={setDataOutput} setLoadingStatus={setLoadingStatus} />
            <WordOutput userWord={userWord} searchType={searchType} saveWord={saveWord} setSaveWord={setSaveWord} dataOutput={dataOutput} loadingStatus={loadingStatus} />
        </main>
    );
}

export default App;
