const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    const language = request.query.language
    const region   = request.query.region
    let univerisites = require('./data')

    switch (language) {
        case undefined : return response.status(404).send('Must provide a language')
        case 'en'      : univerisites = univerisites.univerisitesEn; break
        default        : return response.status(404).send('language is not supported')
    }
    
    if (region) {
        switch (region) {
            case 'central'  : univerisites = univerisites.filter(i => i.region == region); break;
            case 'eastern'  : univerisites = univerisites.filter(i => i.region == region); break;
            case 'northern' : univerisites = univerisites.filter(i => i.region == region); break;
            case 'southern' : univerisites = univerisites.filter(i => i.region == region); break;
            case 'western'  : univerisites = univerisites.filter(i => i.region == region); break;
            default         : return response.status(404).send('region is not currect')
        }

        return response.json(univerisites)
    }
    
    response.json(univerisites)
})

module.exports = router