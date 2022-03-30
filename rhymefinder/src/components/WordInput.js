import './WordInput.css';

let rhymeArray = [];
let synonymArray = [];

const WordInput = (props) => {

    /**
* Makes a request to Datamuse and updates the page with the
* results.
* 
* Use the getDatamuseRhymeUrl()/getDatamuseSimilarToUrl() functions to make
* calling a given endpoint easier:
* - RHYME: `datamuseRequest(getDatamuseRhymeUrl(), () => { <your callback> })
* - SIMILAR TO: `datamuseRequest(getDatamuseRhymeUrl(), () => { <your callback> })
*
* @param {String} url
*   The URL being fetched.
* @param {Function} callback
*   A function that updates the page.
*/
    function datamuseRequest(url, callback) {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // This invokes the callback that updates the page.
                callback(data);
            }, (err) => {
                console.error(err);
            });
    }

    /**
    * Gets a URL to fetch rhymes from Datamuse
     *
     * @param {string} rel_rhy
     *   The word to be rhymed with.
     *
     * @returns {string}
     *   The Datamuse request URL.
    */
    function getDatamuseRhymeUrl(input) {
        return `https://api.datamuse.com/words?${(new URLSearchParams({ 'rel_rhy': input })).toString()}`;
    }

    /**
 * Gets a URL to fetch 'similar to' from Datamuse.
 *
 * @param {string} ml
 *   The word to find similar words for.
 *
 * @returns {string}
 *   The Datamuse request URL.
 */
    function getDatamuseSimilarToUrl(input) {
        return `https://api.datamuse.com/words?${(new URLSearchParams({ 'ml': input })).toString()}`;
    }

    // function keyHandler(e) {
    //     if (e.key === 'Enter') {
    //         rhymeHandler();
    //     }
    // }

    function saveHandler(input) {
        props.saveWord.push(input)
    }

    function rhymeHandler() {
        props.setRhymeFlag(true);
        datamuseRequest(getDatamuseRhymeUrl(props.userWord), (results) => {
            console.log(results);
            rhymeArray = results.map((i) => <li key={i.toString()}>{i.word}<button className="save" onClick={saveHandler(i.word)}>Save</button></li>)
            // props.rhymeData.push(rhymeArray);
            props.setRhymeData(rhymeArray);
            console.log(props.rhymeData);
        });
    }

    function synonymHandler() {
        props.setSynonymFlag(true);
        datamuseRequest(getDatamuseSimilarToUrl(props.userWord), (results) => {
            synonymArray = results.map((i) => <li key={i.toString()}>{i.word}<button className="save" onClick={saveHandler(i.word)}>Save</button></li>)
            props.synonymData.push(synonymArray);
        });
    }


    return (
        <div className="row">
            <div className="input-group col">
                <input onChange={(e) => props.setUserWord(e.target.value)} id="word_input" className="form-control" type="text" placeholder="Enter a word" />
                <button onClick={rhymeHandler} id="show_rhymes" type="button" className="btn btn-primary">Show rhyming words</button>
                <button onClick={synonymHandler} id="show_synonyms" type="button" className="btn btn-secondary">Show synonyms</button>
            </div>
        </div>
    )
}

export default WordInput;