import './SavedWords.css';

const SavedWords = (props) => {
    console.log('Saved words is working! Thank God!');
    const wordList = props.saveWord;
    console.log(wordList);
    
    const savedWordsOutput = () => {
        // return wordList;
        if (wordList.length === 0) {
            return "(no results)";
        } else {
            return wordList.join(', ');
        }
    }

    return (
        <div className="row">
            <div className="col">Saved words: <span id="saved_words">{savedWordsOutput()}</span></div>
        </div>
    )
}

export default SavedWords;