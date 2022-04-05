# si579-hw5-react
React app for SI 579.  App consists of four components: WordInput, WordOutput, SavedWords, and SyllableGroup.  User enters word in input field.  Word is passed to a helper function which calls an API and returns a JSON object containing a list of the input word's rhymes/synonyms.  JSON object is assigned to state variable and is parsed in WordOutput using SyllableGroup component.  User can create personalized list of their favorite words by clicking 'Save' button next to each word.