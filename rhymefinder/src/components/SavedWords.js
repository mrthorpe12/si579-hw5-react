import './SavedWords.css';

const SavedWords = (props) => {
    const { saveWord } = props;

    // console.log('Saved words is working! Thank God!');

    const savedWordsOutput = () => {
        if (saveWord.length === 0) {
            return "(no results)";
        } else {
            return saveWord.join(', ');
        }
    }

    return (
        <div className="row">
            <div className="col">Saved words: <span id="saved_words">{savedWordsOutput()}</span></div>
        </div>
    )
}

export default SavedWords;