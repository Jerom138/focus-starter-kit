/*global _*/
//Function use to build the site description from the 
var site = function(p) {
    return {
        headers: [{
            name: "home",
            url: "#home",
            roles: ['DEFAULT_ROLE'],
            //requiredParams: ["param1"]
        }, {
            name: "administration",
            url: '#administration/contacts',
            roles: ['DEFAULT_ROLE'],
            headers: [{
                name: "contact",
                url: '#administration/contact/1',
                roles: ['DEFAULT_ROLE']
            }]
        }, {
            name: "aviation",
            url: '#aviation/sites',
            roles: ['DEFAULT_ROLE'],
            pages: [{
                name: "site",
                url: '#aviation/site/' + p.siteId.value,
                roles: ['DEFAULT_ROLE']
            }]
        }],
        pages: [
            //Test page 
            {
                name: "domainTest",
                url: "#administration/domainTest",
                roles: ['DEFAULT_ROLE']
            }
        ]
    };
};


//Container for the module exports.
var siteDescription = {};

//Default name and value parameters.
var defaultParams = {
    siteId: {
        name: "siteId",
        value: ":siteId"
    }
};

//Exports ther params for initialization.
siteDescription.params = defaultParams;

//Function to build the site description depending on parameters.
siteDescription.value = function(params) {

    //Extend the params.
    var p = _.extend({}, defaultParams, params);

    //Process the site description construction.
    return site(p);
};

//Export site description.
module.exports = siteDescription;