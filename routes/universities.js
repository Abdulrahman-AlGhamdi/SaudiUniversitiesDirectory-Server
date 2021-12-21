const express = require('express')
const router  = express.Router()

router.get('/:language', (request, response) => {
    const language   = request.params.language.toLowerCase()
    const region     = request.query.region
    let univerisites = require('../data/data')

    switch (language) {
        case 'en'      : univerisites = univerisites.univerisitesEn; break
        case 'ar'      : univerisites = univerisites.univerisitesAr; break
        default        : return response.status(400).send('language is not supported')
    }
    
    if (region) switch (region) {
        case 'central'  : univerisites = univerisites.filter(i => i.region == region); break;
        case 'eastern'  : univerisites = univerisites.filter(i => i.region == region); break;
        case 'northern' : univerisites = univerisites.filter(i => i.region == region); break;
        case 'southern' : univerisites = univerisites.filter(i => i.region == region); break;
        case 'western'  : univerisites = univerisites.filter(i => i.region == region); break;
        default         : return response.status(400).send('region is not currect')
    }
    
    response.json(univerisites)
})

module.exports = router