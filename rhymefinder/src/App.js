// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SavedWords from "./components/SavedWords";
import WordInput from "./components/WordInput";
import WordOutput from './components/WordOutput';

function App() {
    const [userWord, setUserWord] = useState('');
    const [rhymeFlag, setRhymeFlag] = useState(false);
    const [synonymFlag, setSynonymFlag] = useState(false);
    const [saveWord, setSaveWord] = useState([]);
    const [dataOutput, setDataOutput] = useState([]);

    console.log(`RHYME FLAG: ${rhymeFlag}`);
    console.log(`SYNONYM FLAG: ${synonymFlag}`);

    return (
        <main className="container">
            <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
            <p>Repo: <a href="https://github.com/mrthorpe12/si579-hw5-react">https://github.com/mrthorpe12/si579-hw5-react</a></p>
            <SavedWords saveWord={saveWord} setSaveWord={setSaveWord} />
            <WordInput userWord={userWord} setUserWord={setUserWord} rhymeFlag={rhymeFlag} setRhymeFlag={setRhymeFlag} synonymFlag={synonymFlag} setSynonymFlag={setSynonymFlag} saveWord={saveWord} setSaveWord={setSaveWord} dataOutput={dataOutput} setDataOutput={setDataOutput} />
            <WordOutput userWord={userWord} rhymeFlag={rhymeFlag} synonymFlag={synonymFlag} saveWord={saveWord} setSaveWord={setSaveWord} dataOutput={dataOutput} setDataOutput={setDataOutput} />
        </main>
    );
}

export default App;
