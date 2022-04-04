import './WordOutput.css';

const WordOutput = (props) => {

    let header = '';

    if (props.searchType === 'rhyme') {
        header = `Words that rhyme with ${props.userWord}`;
    } else if (props.searchType === 'synonym') {
        header = `Words with a similar meaning to ${props.userWord}`;
    }

    return (
        <div className="row">
            <h2 className="col" id="output_description">{header}</h2>
            <div className="output row">
                <output id="word_output" className="col">{props.dataOutput}</output>
            </div>
        </div>
    )
}

export default WordOutput;