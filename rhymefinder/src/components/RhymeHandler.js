import './RhymeHandler.css';
const RhymeHandler = (props) => {
    console.log('This is the rhymefinder!');
    const { wordInput } = props;
    console.log(`WORD INPUT: ${props}`);

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
    function getDatamuseRhymeUrl(rel_rhy) {
        return `https://api.datamuse.com/words?${(new URLSearchParams({ 'rel_rhy': { wordInput } })).toString()}`;
    }

    // console.log(document.querySelector('#word_input'));

    let groupedResult = [];
    const wordOutput = document.createElement('output');
    wordOutput.classList.add('col');

    return (
        getDatamuseRhymeUrl(wordInput)
    )
}

export default RhymeHandler;