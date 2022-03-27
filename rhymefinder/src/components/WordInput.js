import './WordInput.css';
import RhymeHandler from './RhymeHandler';
import { useState } from 'react';

const WordInput = () => {
    console.log('Word input is working!');
    const [userWord, setUserWord] = useState('');

    return (
        <div className="row">
            <div className="input-group col">
                <input value={userWord} onChange={(e) => setUserWord(e.target.value)} id="word_input" className="form-control" type="text" placeholder="Enter a word" />
                <button onClick={RhymeHandler} id="show_rhymes" type="button" className="btn btn-primary">Show rhyming words</button>
                <button id="show_synonyms" type="button" className="btn btn-secondary">Show synonyms</button>
            </div>
        </div>
    )
}

export default WordInput;