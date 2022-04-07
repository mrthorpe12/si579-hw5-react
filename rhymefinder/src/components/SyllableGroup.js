import './SyllableGroup.css';

const SyllableGroup = (props) => {
    const { searchType } = props;
    const { syllables } = props;
    const { dataOutput } = props;
    const { saveWord } = props;
    const { setSaveWord } = props;

    let syllableHeader = '';

    if (searchType === 'rhyme') {
        syllableHeader = `Syllables: ${syllables}`;
    }
    /**
     * Accepts word passed by user when user clicks 'Save' button.  Adds word to local array and assigns updated local array to state variable.
     * @param  {string} input: Word which the user wants to save.
     */
    const saveHandler = (input) => {
        console.log(`Input: ${input}`);
        setSaveWord((savedWordArray) => {
            const updatedWords = [...savedWordArray, input];
            return updatedWords;
        })
        console.log(saveWord);
    }

    return (
        <div>
            <h3>{syllableHeader}</h3>
            {dataOutput.map((item) => {
                return (
                    <li>
                        {item.word}<button onClick={(e) => { saveHandler(item.word) }} class="save">Save</button>
                    </li>
                )
            })}
        </div>
    )
}

export default SyllableGroup;