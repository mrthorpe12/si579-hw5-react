import './WordOutput.css';
import SyllableGroup from './SyllableGroup';

const WordOutput = (props) => {

    const { userWord } = props;
    const { searchType } = props;
    const { saveWord } = props;
    const { setSaveWord } = props;
    const { dataOutput } = props;
    const { loadingStatus } = props;

    let outputHeader = '';

    if (searchType === 'rhyme') {
        outputHeader = `Words that rhyme with ${userWord}`;
    } else if (searchType === 'synonym') {
        outputHeader = `Words with a similar meaning to ${userWord}`;
    }

    return (
        <div>
            <h2>{loadingStatus}</h2>
            <div className="row">
                <h2 className="col" id="output_description">{outputHeader}</h2>
                <div className="output row">
                    {/* <output id="word_output" className="col">{dataOutput}</output> */}
                    <output id="word_output" className="col">{Object.keys(dataOutput).map((item) => {
                        return (
                            <SyllableGroup searchType={searchType} syllables={item} key={item} dataOutput={dataOutput[item]} saveWord={saveWord} setSaveWord={setSaveWord} />
                        )
                    })}</output>
                </div>
            </div>
        </div>
    )
}

export default WordOutput;