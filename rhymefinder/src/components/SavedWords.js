import './SavedWords.css';

const SavedWords = (props) => {
    console.log('Saved words is working! Thank God!');

    const savedWordsOutput = () => {
        if (props.saveWord.length === 0) {
            return "(no results)";
        } else {
            return props.saveWord.join(', ');
        }
    }

    return (
        <div className="row">
            <div className="col">Saved words: <span id="saved_words">{savedWordsOutput()}</span></div>
        </div>
    )
}

export default SavedWords;