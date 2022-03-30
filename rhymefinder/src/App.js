// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SavedWords from "./components/SavedWords";
import WordInput from "./components/WordInput";
import WordOutput from './components/WordOutput';

function App() {
    const [userWord, setUserWord] = useState('');
    const [rhymeData, setRhymeData] = useState([]);
    const [synonymData, setSynonymData] = useState([]);
    const [rhymeFlag, setRhymeFlag] = useState(false);
    const [synonymFlag, setSynonymFlag] = useState(false);
    const [saveWord, setSaveWord] = useState([]);

    console.log(`APP RHYME DATA: ${rhymeData}`);
    console.log(`APP SYNONYM DATA: ${synonymData}`);

    console.log(`RHYME FLAG: ${rhymeFlag}`);
    console.log(`SYNONYM FLAG: ${synonymFlag}`);

    return (
        <main className="container">
            <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
            <SavedWords saveWord={saveWord} setSaveWord={setSaveWord} />
            <WordInput userWord={userWord} setUserWord={setUserWord} rhymeData={rhymeData} setRhymeData={setRhymeData} synonymData={synonymData} setSynonymData={setSynonymData} rhymeFlag={rhymeFlag} setRhymeFlag={setRhymeFlag} synonymFlag={synonymFlag} setSynonymFlag={setSynonymFlag} saveWord={saveWord} setSaveWord={setSaveWord} />
            <WordOutput userWord={userWord} rhymeData={rhymeData} synonymData={synonymData} rhymeFlag={rhymeFlag} synonymFlag={synonymFlag} saveWord={saveWord} setSaveWord={setSaveWord} />
        </main>
    );
}

export default App;
