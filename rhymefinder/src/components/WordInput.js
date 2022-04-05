import './WordInput.css';

const WordInput = (props) => {

    const { userWord } = props;
    const { setUserWord } = props;
    const { setSearchType } = props;
    const { dataOutput } = props;
    const { setDataOutput } = props;
    const { setLoadingStatus } = props;

    /**
     * Returns a list of objects grouped by some property. For example:
     * groupBy([{name: 'Steve', team:'blue'}, {name: 'Jack', team: 'red'}, {name: 'Carol', team: 'blue'}], 'team')
     *
     * returns:
     * { 'blue': [{name: 'Steve', team: 'blue'}, {name: 'Carol', team: 'blue'}],
     *    'red': [{name: 'Jack', team: 'red'}]
     * }
     *
     * @param {any[]} objects: An array of objects
     * @param {string|Function} property: A property to group objects by
     * @returns  An object where the keys representing group names and the values are the items in objects that are in that group
     */
    function groupBy(objects, property) {
        // If property is not a function, convert it to a function that accepts one argument (an object) and returns that object's
        // value for property (obj[property])
        if (typeof property !== 'function') {
            const propName = property;
            property = (obj) => obj[propName];
        }

        const groupedObjects = new Map(); // Keys: group names, value: list of items in that group
        for (const object of objects) {
            const groupName = property(object);
            //Make sure that the group exists
            if (!groupedObjects.has(groupName)) {
                groupedObjects.set(groupName, []);
            }
            groupedObjects.get(groupName).push(object);
        }

        // Create an object with the results. Sort the keys so that they are in a sensible "order"
        const result = {};
        for (const key of Array.from(groupedObjects.keys()).sort()) {
            result[key] = groupedObjects.get(key);
        }
        return result;
    }

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

    const keyHandler = (key) => {
        if (key === 'Enter') {
            rhymeHandler();
        }
    }

    function rhymeHandler() {
        setLoadingStatus('Loading....')
        setSearchType('rhyme');
        datamuseRequest(getDatamuseRhymeUrl(userWord), (rhymeResults) => {
            setLoadingStatus('');
            // setDataOutput(rhymeResults.map((i) => <li key={i.toString()}>{i.word}<button onClick={(e) => { e.stopPropagation(); saveHandler(i.word) }} className="save" >Save</button></li>));
            if (rhymeResults.length !== 0) {
                setDataOutput(groupBy(rhymeResults, 'numSyllables'))
            }
        });
        console.log(dataOutput);
    }

    function synonymHandler() {
        setLoadingStatus('Loading....')
        setSearchType('synonym');
        datamuseRequest(getDatamuseSimilarToUrl(userWord), (synonymResults) => {
            setLoadingStatus('');
            if (synonymResults.length !== 0) {
                setDataOutput(groupBy(synonymResults, 'numSyllables'));
            }
        });
        console.log(dataOutput);
    }


    return (
        <div className="row">
            <div className="input-group col">
                <input onChange={(e) => setUserWord(e.target.value)} onKeyPress={(e) => keyHandler(e.key)} id="word_input" className="form-control" type="text" placeholder="Enter a word" />
                <button onClick={rhymeHandler} id="show_rhymes" type="button" className="btn btn-primary">Show rhyming words</button>
                <button onClick={synonymHandler} id="show_synonyms" type="button" className="btn btn-secondary">Show synonyms</button>
            </div>
        </div>
    )
}

export default WordInput;