const express = require('express')
const router = express.Router()

let univerisites = [
    {
        id       : 100,
        name     : "Central Province Universities",
        region   : "central",
        province : true
    },
    {
        id       : 101,
        name     : "Hail University",
        about    : "The university was established by a royal decree on Tuesday 30 Jumada 1426 AH corresponding to 7 2005 AD, and in 2019 the university received two awards for excellence in scientific production, the highest impact and the most productive in the Scopus base of the branch of medical sciences. All subjects are in English, except for Islamic and Arabic studies.",
        logo     : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fhail_logo.png?alt=media&token=c7210d1a-8da6-4a32-8f0b-ead1a84c02d6",
        location : "https://goo.gl/maps/Lnmbs1LCRiHAXzz47",
        website  : "http://www.uoh.edu.sa/Pages/default.aspx",
        region   : "central",
        twitter  : "https://twitter.com/_uoh",
        facebook : "https://www.facebook.com/UOH.Page/?ref=page_internal",
        youtube  : "https://www.youtube.com/user/UOHTubeSA"
    },
    {
        id          : 102,
        name        : "Imam University",
        about       : "Imam Muhammad bin Saud Islamic University was established in Riyadh, Saudi Arabia in 1953. In 1951, the university was established by merging the College of Islamic Law and the College of Arabic Language in Riyadh. In 1974, the university was awarded by royal decree. The university includes 14 colleges. It currently has more than 60,000 students and 4,000 faculty members.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fimam_logo.png?alt=media&token=6d88d847-3ce3-4d39-a8cd-afbd9ba79a14",
        location    : "https://goo.gl/maps/jb7ZZjBZULRFXKpJ8",
        colleges    : "https://imamu.edu.sa/UnitsAndBranches/Pages/colleges.aspx",
        website     : "https://imamu.edu.sa/Pages/default.aspx",
        application : "https://play.google.com/store/apps/details?id=com.imamuniversity.app",
        region      : "central",
        twitter     : "https://twitter.com/IMSIU_edu_sa",
        facebook    : "https://www.facebook.com/imamu1sa/?ref=py_c",
        snapchat    : "https://www.snapchat.com/add/imamu.edu"
    },
    {
        id          : 103,
        name        : "King Saud University for Health Sciences",
        about       : "King Saud bin Abdulaziz University for Health Sciences (KSAU-HS) (Arabic: جامعة الملك سعود بن عبد العزيز للعلوم الصحية) is the first public university in the Kingdom of Saudi Arabia and the Middle East region specialized in health sciences. Its headquarters is in the main campus in Riyadh, the capital of Saudi Arabia. It has two other campuses in Jeddah and Al-Ahsa.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fsuad_health.png?alt=media&token=3933cedd-1de8-40fe-82d0-88e0931e6577",
        location    : "https://goo.gl/maps/ADCejzaDexP3JnHx7",
        website     : "https://www.ksau-hs.edu.sa/Arabic/Pages/default.aspx",
        region      : "central",
        twitter     : "https://twitter.com/KSAU_HS",
        facebook    : "https://www.facebook.com/KSAUHS",
        instagram   : "https://www.instagram.com/ksauhs/",
        snapchat    : "https://www.snapchat.com/add/ksau-hs",
        youtube     : "https://www.youtube.com/user/KSAUHSmedia"
    },
    {
        id          : 104,
        name        : "King Saud University",
        about       : "King Saud University (KSU) is a public university in Riyadh, Saudi Arabia, founded in 1957 by King Saud bin Abdulaziz as Riyadh University, as the first university in the Kingdom of Saudi Arabia. The university was created to meet the shortage of skilled workers in Saudi Arabia. It was renamed King Saud University in 1982.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fsaud_logo.png?alt=media&token=a6c83925-5210-45b6-847b-b337df1a0ec1",
        location    : "https://goo.gl/maps/KQPSzajAsBfDRh5r9",
        website     : "https://www.ksu.edu.sa/",
        colleges    : "https://www.ksu.edu.sa/ar/colleges",
        region      : "central",
        twitter     : "https://twitter.com/_KSU",
        facebook    : "https://www.facebook.com/King.Saud.University",
        youtube     : "https://www.youtube.com/user/pdksuchannel"
    },
    {
        id          : 105,
        name        : "Majmaah University",
        about       : "Majmaah University (MU) is located in Al Majma'ah, Saudi Arabia. It was founded in 2009. The university main campus is located in the south part of Majmaah City. Teaching and research are delivered in 13 academic schools. The university is established to serve a wide area including Majmmah, Zulfi, Remah, Ghat and Hawtat Sudair.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fmajmaah_logo.png?alt=media&token=5710ad18-990b-44cf-8b38-21f3c3bcc255",
        location    : "https://goo.gl/maps/4H6LetW5fVa4SGVXA",
        website     : "https://www.mu.edu.sa/",
        colleges    : "https://m.mu.edu.sa/ar/%D8%A7%D9%84%D9%83%D9%84%D9%8A%D8%A7%D8%AA",
        application : "https://play.google.com/store/apps/details?id=com.ats.android.majmaah.student.app",
        news        : "https://www.mu.edu.sa/ar/news.xml",
        region      : "central",
        twitter     : "https://twitter.com/umajmaah?s=20",
        facebook    : "https://www.facebook.com/majmaahuniversity1/",
        instagram   : "https://www.instagram.com/majmaah_university/",
        youtube     : "https://www.youtube.com/user/MuUniversity"
    },
    {
        id          : 106,
        name        : "Prince Nora University",
        about       : "Princess Nourah Bint Abdulrahman University (PNU) is a public women's university located in Riyadh, the capital of Saudi Arabia. It is the largest women's university in the world. The university offers diplomas, bachelor and postgraduate degrees. It has 34 colleges in the city of Riyadh and in the neighbouring cities, an Arabic Language Institute (for non-speakers of Arabic)",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fnora_university.png?alt=media&token=0791ffea-0842-4595-ae74-21f5da8213d3",
        location    : "https://goo.gl/maps/yc7aVkGkj1L6pBF99",
        website     : "https://www.pnu.edu.sa/ar/Pages/home.aspx",
        colleges    : "https://www.pnu.edu.sa/ar/Faculties/Pages/Home.aspx",
        application : "https://play.google.com/store/apps/details?id=sa.edu.pnu_students",
        region      : "central",
        twitter     : "https://twitter.com/_pnu_ksa?lang=ar",
        facebook    : "https://www.facebook.com/PNUKSA0/",
        instagram   : "https://www.instagram.com/_PNU_KSA/",
        youtube     : "https://www.youtube.com/channel/UC-0BTuZ46ApPXt6dWONTyGg"
    },
    {
        id          : 107,
        name        : "Prince Sattam University",
        about       : "Prince Sattam Bin Abdulaziz University was formerly known as Prince Salman Bin Abdulaziz University or the University of Al-Kharj . It is a Saudi University located in the city of Al-Kharj, Saudi Arabia. It is under the supervision of the Ministry of Higher Education Saudi Arabia and managed by the Rector of the University, Dr. ِAbdulaziz Abdullah Alhamid.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fsattam_logo.png?alt=media&token=758843c4-b705-4d57-b4e6-80632bc36f45",
        location    : "https://goo.gl/maps/rnMxSpaucC5N9Spp6",
        website     : "https://www.psau.edu.sa/ar",
        colleges    : "https://dar.psau.edu.sa/ar/page/1-41",
        news        : "https://www.psau.edu.sa/ar/rss.xml",
        region      : "central",
        twitter     : "https://twitter.com/itdl_psau",
        facebook    : "https://www.facebook.com/psau.edu.sa",
        instagram   : "https://www.instagram.com/psau_edu_sa/",
        snapchat    : "https://www.snapchat.com/add/psau.edu",
        youtube     : "https://www.youtube.com/user/sauedusa"
    },
    {
        id          : 108,
        name        : "Qassim University",
        about       : "Qassim University is a public university in the Al-Qassim Province of Saudi Arabia. It was established in 2004. Qassim University has over 38 Colleges, offering 17 PhD, 62 master, and 731 Bachelor and diploma programs. The government approved allotments for Qassim University in 2013 was 2,351 million riyals (approx 626.87 million US Dollar).",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fqassim_logo.png?alt=media&token=6a7e5efe-4611-4ca5-a00e-e19dc2563a77",
        location    : "https://goo.gl/maps/ompNLfXuJjv8HrXg9",
        website     : "https://www.qu.edu.sa/",
        colleges    : "https://reg.qu.edu.sa/content/p/29",
        application : "https://play.google.com/store/apps/details?id=com.ats.android.qassim.student.app",
        region      : "central",
        twitter     : "https://twitter.com/QassimUniv1?s=20",
        facebook    : "https://www.facebook.com/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A7%D9%84%D9%82%D8%B5%D9%8A%D9%85-Qassim-University-164810496933658/",
        instagram   : "https://www.instagram.com/qu_uni/",
        snapchat    : "https://www.snapchat.com/add/qu_uni"
    },
    {
        id          : 109,
        name        : "Saudi Electronic University",
        about       : "The Saudi Electronic University is a Saudi Arabian university that grants both undergraduate and graduate degrees. It was established by royal decree on 8 October 2011 to provide a combination of online and regular education known as blended learning.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fsaudi_electronic_logo.png?alt=media&token=3947776b-1b67-4fbf-8944-1e8615efc6d8",
        location    : "https://goo.gl/maps/hhVk8uwFFDjYzRkJ7",
        website     : "https://www.seu.edu.sa/",
        application : "https://play.google.com/store/apps/details?id=net.ysolution.seu",
        region      : "central",
        twitter     : "https://twitter.com/Saudi_EUni",
        facebook    : "https://www.facebook.com/SaudiElectronicUniversity",
        youtube     : "https://www.youtube.com/user/SaudiEUniversity"
    },
    {
        id          : 110,
        name        : "Shaqra University",
        about       : "Shaqra University (SU) is located in Shaqra, Saudi Arabia (190 km (120 mi) northwest of Riyadh). It comes under the supervision of the Ministry of Education.[1][2][3] The University has twenty-four colleges in various disciplines. It is headquartered in Shaqra with its various colleges being geographically spread in the largest area of the Kingdom of Saudi Arabia covering several governorates and sub-governorates lying in the west of Riyadh.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fshaqra_logo.png?alt=media&token=8fc158e8-2f8a-4181-b15e-e0cf9a028c9f",
        location    : "https://goo.gl/maps/ykAmpMhRkwSfYrr37",
        website     : "https://www.su.edu.sa/ar",
        colleges    : "https://www.su.edu.sa/ar/%D8%A7%D9%84%D9%83%D9%84%D9%8A%D8%A7%D8%AA",
        region      : "central",
        twitter     : "https://twitter.com/ShaqraUni?s=20",
        facebook    : "https://www.facebook.com/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%B4%D9%82%D8%B1%D8%A7%D8%A1-119256518143298/",
        instagram   : "https://www.instagram.com/shaqra_uni/",
        youtube     : "https://www.youtube.com/user/shaqrauniv"
    },
    {
        id       : 200,
        name     : "Eastern Province Universities",
        region   : "eastern",
        province : true
    },
    {
        id          : 201,
        name        : "Hafr Al-Batin University",
        about       : "University of Hafr Al Batin, often referred to as UOHB, is a Saudi public university that located in Hafr Albatin city in the eastern province. It was founded in 2014 on the royal decree by King Abdullah on April 3, 2014.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fhafr_batin_logo.png?alt=media&token=26f004af-a4f0-42a3-a2ca-8a12b7ae9436",
        location    : "https://goo.gl/maps/s5rdnzXMrfsSNdLm6",
        website     : "https://www.uhb.edu.sa/ar/Pages/default.aspx",
        region      : "eastern",
        twitter     : "https://twitter.com/UoHB_Official?s=20"
    },
    {
        id          : 202,
        name        : "Imam Abdulrahman University",
        about       : "Imam Abdulrahman Bin Faisal University (IAU), formerly known as the University of Dammam (UoD), is a university in Dammam, Saudi Arabia. It is one of the oldest universities in the Eastern Province of Saudi Arabia. It is one of the leading universities in medicine for both male and female students. After its separation from King Faisal University, it is now thriving to become one of the best universities in the Kingdom.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fimam_abdulrahman_logo.png?alt=media&token=d4f45d22-9f4b-4c25-b23d-dcc183522c81",
        location    : "https://goo.gl/maps/sS2VyxXAPkMZaLoaA",
        website     : "https://www.iau.edu.sa/ar",
        colleges    : "https://www.iau.edu.sa/ar/colleges",
        application : "https://play.google.com/store/apps/details?id=myiau.uod.com.myiau",
        news        : "https://www.iau.edu.sa/ar/rss.xml",
        region      : "eastern",
        twitter     : "https://twitter.com/UOD_EDU_SA",
        facebook    : "https://www.facebook.com/Imam.Abdulrahman.Bin.Faisal.University",
        youtube     : "https://www.youtube.com/user/dammamuniversity"
    },
    {
        id          : 203,
        name        : "King Fahd University of Petroleum and Minerals",
        about       : "King Fahd University of Petroleum and Minerals (KFUPM or UPM) is a public university in Dhahran, Saudi Arabia. Among Saudi universities, its science, engineering, business and management programs are the most highly regarded in the country as well as in the whole region. The university has ranked fourth among top 100 worldwide universities granted US Utility Patents in 2018.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Ffahd_logo.png?alt=media&token=b9721fe6-9ddf-4f72-a63c-9d6ca3bb6849",
        location    : "https://goo.gl/maps/MKeoba5vUC3x7mVs7",
        website     : "http://www.kfupm.edu.sa/ar/Default.aspx",
        application : "https://play.google.com/store/apps/details?id=sa.edu.kfupm",
        region      : "eastern",
        twitter     : "https://twitter.com/kfupm",
        facebook    : "https://www.facebook.com/KFUPM",
        instagram   : "https://www.instagram.com/kfupm/"
    },
    {
        id          : 204,
        name        : "King Faisal University",
        about       : "King Faisal University (KFU) is a public university with the main campus in the city of Hofuf in Al Ahsa, Saudi Arabia founded in 1975. KFU was initially established with four colleges: two in Dammam and the other two in Al-Ahsa. Later, the colleges in Dammam have been segregated to become the Imam Abdulrahman Bin Faisal University.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Ffaisal_logo.png?alt=media&token=87e5fbe7-31ba-46ce-b75a-b673615e777d",
        location    : "https://goo.gl/maps/CzhV5stPwiFvH98W8",
        website     : "https://www.kfu.edu.sa/sites/Home/",
        application : "https://play.google.com/store/apps/details?id=com.kingfisal.university",
        region      : "eastern",
        twitter     : "https://twitter.com/kfuniversity",
        facebook    : "https://www.facebook.com/KFUuniversity/",
        instagram   : "https://www.instagram.com/kfuniversity/",
        snapchat    : "https://www.snapchat.com/add/kfuniversity",
        youtube     : "https://www.youtube.com/user/KingFaisalUniversity"
    }
]

router.get('/', (request, response) => {
    const language = request.query.language
    const region   = request.query.region

    if (!language) response.status(404).send('Must provide a language')
    
    if (region) {
        let university;

        switch (region) {
            case 'central': university = univerisites.filter(i => i.region == region); break;
            case 'eastern': university = univerisites.filter(i => i.region == region); break;
            default: response.status(404).send('region is not currect')
        }

        response.json(university)
    }
    
    response.json(univerisites)
})

module.exports = router