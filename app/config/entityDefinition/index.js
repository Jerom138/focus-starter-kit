// ******************************************************************************** //
// ******** SCRIPT GENERE AUTOMATIQUEMENT, NE PAS MODIFIER MANUELLLEMENT ********** //
// ******************************************************************************** //

module.exports = {
    "administration": {
        "contact": {
            "firstName": {
                domain: "DO_TEXTE_30",
                required: true
            },
            "lastName": {
                domain: "DO_TEXTE_30",
                required: false
            },
            "email": {
                domain: "DO_EMAIL"
            }
        },
        "diagnostic": {
            "Test": {
                "domain": "DO_TEXTE_50",
                "required": true
            },
            "IsSuccesful": {
                "domain": "DO_BOOLEAN",
                "required": true
            }
        },
        "domainTest": {
            "Boolean": {
                "domain": "DO_BOOLEAN"
            },
            "Date": {
                "domain": "DO_DATE",
                "required": true
            },
            "DateHeure": {
                "domain": "DO_DATE_HEURE"
            },
            "Montant": {
                "domain": "DO_MONTANT"
            },
            "Email": {
                "domain": "DO_EMAIL"
            },
            "Entier": {
                "domain": "DO_ENTIER",
                "required": true
            },
            "Id": {
                "domain": "DO_ID"
            },
            "Texte50": {
                "domain": "DO_TEXTE_50"
            },
            "SampleReferencedId": {
                "domain": "DO_ID"
            },
            "SampleMultipleReferencedId": {
                "domain": "DO_LISTE_MULTI"
            }
        }
    },
    "user": require('./user'),
    "message": require('./message'),
    "accueil": require('./accueil')
};