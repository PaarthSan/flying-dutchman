var language = 'en';

// ==========================================================================
// The dictionary consists of a simple JSON structure. It also keeps
// track of the different keys that are available  for IDs.
//
var dict = {

    // TODO: Store the set of strings in a JSON file for each language to be loaded on request.
    'en': {
        'hello_text': "Welcome to Flying Dutchman",
    },
    'de' : {
        'hello_text' : "Willkommen zum Flying Dutchman",
    },
    'pt' : {
        'hello_text' : "Bemvindo ao Flying Dutchman"
    }
};

// This function will return the appropriate string for each
// key. The language handling is made "automatic".
//
function get_string(key) {
    return dict[language][key];
}

// ==========================================================================
// END OF FILE
// ==========================================================================
