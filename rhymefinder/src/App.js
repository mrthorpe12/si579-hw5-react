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

    console.log(`APP RHYME DATA: ${rhymeData}`);
    console.log(`APP SYNONYM DATA: ${synonymData}`);

    console.log(`RHYME FLAG: ${rhymeFlag}`);
    console.log(`SYNONYM FLAG: ${synonymFlag}`);

    return (
        <main className="container">
            <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
            <SavedWords />
            <WordInput userWord={userWord} setUserWord={setUserWord} rhymeData={rhymeData} setRhymeData={setRhymeData} synonymData={synonymData} setSynonymData={setSynonymData} rhymeFlag={rhymeFlag} setRhymeFlag={setRhymeFlag} synonymFlag={synonymFlag} setSynonymFlag={setSynonymFlag} />
            <WordOutput userWord={userWord} rhymeData={rhymeData} synonymData={synonymData} rhymeFlag={rhymeFlag} synonymFlag={synonymFlag}/>
            {/* <div className="row">
                <div className="col">Saved words: <span id="saved_words"></span></div>
            </div>
            <div className="row">
                <div className="input-group col">
                    <input className="form-control" type="text" placeholder="Enter a word" id="word_input"/>
                    <button id="show_rhymes" type="button" className="btn btn-primary">Show rhyming words</button>
                    <button id="show_synonyms" type="button" className="btn btn-secondary">Show synonyms</button>
                </div>
            </div> */}
            {/* <div className="row">
                <h2 className="col" id="output_description"></h2>
            </div> */}
            {/* <div className="output row">
                <output id="word_output" className="col"></output>
            </div> */}
        </main>
    );
}

export default App;
