const express = require('express')
const router  = express.Router()

router.get('/:language', (request, response) => {
    const language     = request.params.language.toLowerCase()
    const universityId = request.query.id
    let university     = require('../data/data')

    switch (language) {
        case 'en'      : university = university.univerisitesEn; break
        case 'ar'      : university = university.univerisitesAr; break
        default        : return response.status(400).send('language is not supported')
    }

    if (!universityId) return response.status(400).send('Please provide a university ID')

    university = university.find(i => i.id == universityId)

    if (!university) return response.status(400).send('The ID provided is not correct')

    response.json(university)
})

module.exports = router