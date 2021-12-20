const express = require('express')
const router = express.Router()

let univerisitesEn = [
    {
        id          : 100,
        name        : "Central Province Universities",
        region      : "central",
        province    : true
    },
    {
        id          : 101,
        name        : "Hail University",
        about       : "The university was established by a royal decree on Tuesday 30 Jumada 1426 AH corresponding to 7 2005 AD, and in 2019 the university received two awards for excellence in scientific production, the highest impact and the most productive in the Scopus base of the branch of medical sciences. All subjects are in English, except for Islamic and Arabic studies.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fhail_logo.png?alt=media&token=c7210d1a-8da6-4a32-8f0b-ead1a84c02d6",
        location    : "https://goo.gl/maps/Lnmbs1LCRiHAXzz47",
        website     : "http://www.uoh.edu.sa/Pages/default.aspx",
        region      : "central",
        twitter     : "https://twitter.com/_uoh",
        facebook    : "https://www.facebook.com/UOH.Page/?ref=page_internal",
        youtube     : "https://www.youtube.com/user/UOHTubeSA"
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
        id          : 200,
        name        : "Eastern Province Universities",
        region      : "eastern",
        province    : true
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
    },
    {
        id          : 300,
        name        : "Northern Province Universities",
        region      : "northern",
        province    : true
    },
    {
        id          : 301,
        name        : "Jouf University",
        about       : "Al Jouf University is located in Al-Jawf, Saudi Arabia. It was founded in 2005 by royal decree.[1][2] It is currently the only university serving the Al-Jouf Region.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fjouf_logo.gif?alt=media&token=e95ece1b-ef15-47f9-b7cd-834b864c4209",
        location    : "https://goo.gl/maps/KZU1sJo5HEEkXwhEA",
        website     : "https://www.ju.edu.sa/%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9/",
        region      : "northern",
        twitter     : "https://twitter.com/JoufUniversity",
        facebook    : "https://www.facebook.com/ju.edu.sa",
        instagram   : "https://www.instagram.com/joufuniversity/",
        youtube     : "https://www.youtube.com/c/joufuniversity"
    },
    {
        id          : 302,
        name        : "Northern Borders University",
        about       : "Northern Border University (NBU) is located in Arar, Saudi Arabia. It was founded in 2007. It contains 16 colleges: 9 in Arar, 4 in Rafha, 2 in Turayf, and 1 in Al Uwayqilah. It has a variety of majors in multiple levels, including bachelor's and master's degrees.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fnorthern_borders_logo.png?alt=media&token=aedd2294-d238-4525-9747-47950b0336a8",
        location    : "https://goo.gl/maps/6PKM8qqFcxDtqehbA",
        website     : "https://www.nbu.edu.sa/AR/Pages/default.aspx",
        application : "https://play.google.com/store/apps/details?id=edu.nbu.nbuapp",
        region      : "northern",
        twitter     : "https://twitter.com/NBU_KSA?s=20",
        facebook    : "https://www.facebook.com/NBU2007/",
        instagram   : "https://www.instagram.com/nbu_ksa/",
        snapchat    : "https://www.snapchat.com/add/nbu_ksa",
        youtube     : "https://www.youtube.com/channel/UC3do-obj6Iwv9mtbsnFoSFg"
    },
    {
        id          : 303,
        name        : "Tabuk University",
        about       : "University of Tabuk is located in Tabuk, Saudi Arabia, founded in 2006.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Ftabuk_logo.png?alt=media&token=3b054ae6-7d42-4c72-809c-0b61283f6127",
        location    : "https://goo.gl/maps/qWRMtZcS7taNifQGA",
        website     : "https://www.ut.edu.sa/",
        application : "https://play.google.com/store/apps/details?id=com.ut.DSA",
        region      : "northern",
        twitter     : "https://twitter.com/U_Tabuk?s=20",
        facebook    : "https://www.facebook.com/UniversityOfTabuk/",
        youtube     : "https://www.youtube.com/channel/UCJLwfuPo6yXou4x_nCiCoBQ"
    },
    {
        id          : 400,
        name        : "Southern Province Universities",
        region      : "southern",
        province    : true
    },
    {
        id          : 401,
        name        : "Albaha University",
        about       : "Albaha University is a university in Al Baha city, the capital of Al Baha province, Saudi Arabia. It is a public university that was founded in 2006. The main campus is at Alaqiq about 25 km away from Al Baha city. The university emphasizes public services in all of its disciplines. A new organization project at the university was named a lighting platform that was established by students.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Falbaha_logo.png?alt=media&token=ca6549a6-287a-4db1-a6a0-2e61c1c7e939",
        location    : "https://goo.gl/maps/ir1BmAT6Y4zaAJLL6",
        website     : "https://bu.edu.sa/",
        region      : "southern",
        twitter     : "https://twitter.com/BahaUniversity?s=20",
        facebook    : "https://www.facebook.com/abahauniversity/",
    },
    {
        id          : 402,
        name        : "Bisha University",
        about       : "Founded in 2014, University of Bisha is a non-profit public higher-education institution located in Bisha, Asir. Officially recognized by the Ministry of Education of Saudi Arabia, University of Bisha (UB) is a coeducational Saudi Arabian higher education institution. University of Bisha (UB) offers courses and programs leading to officially recognized higher education degrees such as bachelor degrees in several areas of study.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fbisha_logo.png?alt=media&token=361fa5a1-9f21-487f-adee-26a9737f2a04",
        location    : "https://goo.gl/maps/RmjrUmFkvKSzaVQv6",
        website     : "https://www.ub.edu.sa/",
        region      : "southern",
        twitter     : "https://twitter.com/Bisha_U?s=20",
        facebook    : "https://www.facebook.com/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%A8%D9%8A%D8%B4%D8%A9-645574282246386/",
        youtube     : "https://www.youtube.com/channel/UCEz4UQw7Q3ZTIvET8v4caUg"
    },
    {
        id          : 403,
        name        : "Jazan University",
        about       : "Jazan University (commonly referred to as JazanU) is a public research university based in the city of Jazan . Founded in 2006, it is the province's only university and one of the largest public, nonprofit institutions of higher education in the Kingdom of Saudi Arabia.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fjazan_logo.png?alt=media&token=0eda10ee-000c-404a-ab1e-b14403ed8035",
        location    : "https://goo.gl/maps/2R3NA4jCqY7gu42h7",
        website     : "https://www.jazanu.edu.sa/",
        region      : "southern",
        twitter     : "https://twitter.com/JazanUniversity?s=20",
        facebook    : "https://www.facebook.com/%D8%AC%D8%A7%D9%85%D8%B9%D8%A9-%D8%AC%D8%A7%D8%B2%D8%A7%D9%86-225505867463751/"
    },
    {
        id          : 404,
        name        : "King Khalid University",
        about       : "King Khalid University is a public university in Abha, Saudi Arabia. In 1998, HRH Crown Prince ordered the merger of Imam Mohammad Ibn Saud Islamic University and King Saud University in the Southern Region into one entity under the new identity of 'King Khalid University'.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fkhalid_logo.jpg?alt=media&token=8734a3be-6cf8-4525-9274-0cb882717e3d",
        location    : "https://goo.gl/maps/6dtf4J67fSqsEoLKA",
        website     : "https://www.kku.edu.sa/",
        application : "https://play.google.com/store/apps/details?id=com.ats.android.kku.student.app",
        region      : "southern",
        twitter     : "https://twitter.com/kkueduksa?s=20",
        facebook    : "https://www.facebook.com/KingKhalidUniversity/",
        instagram   : "https://www.instagram.com/insta_kku/",
        youtube     : "https://www.youtube.com/user/kkutubeChannel"
    },
    {
        id          : 405,
        name        : "Najran University",
        about       : "Najran University began as a community college of King Khalid University. On 11 November 2006,[1] King Abdullah Bin Abdulaziz issued the royal directive to convert the community college in Najran into an independent self-sustaining university.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fnajran_logo.png?alt=media&token=8d6d1440-7466-4471-8986-934e303a652e",
        location    : "https://goo.gl/maps/rqUuBnUAVjqP238G9",
        website     : "https://www.nu.edu.sa/",
        application : "https://play.google.com/store/apps/details?id=com.ats.android.najranuni.student.app",
        region      : "southern",
        twitter     : "https://twitter.com/Najran_Univers?s=20",
        facebook    : "https://www.facebook.com/Najran-University-194489110567358"
    },
    {
        id          : 500,
        name        : "Western Province Universities",
        region      : "western",
        province    : true
    },
    {
        id          : 501,
        name        : "Islamic University",
        about       : "The Islamic University of Madinah was founded by the government of Saudi Arabia by a royal decree in 1961 in the Islamic holy city of Medina. Many have associated the university with the Salafi ideology, and have stated it has exported Salafi-inclined theologians around the world.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fislamic_logo.png?alt=media&token=ea30ab82-9caf-460e-9b5b-15bfbf58e84c",
        location    : "https://goo.gl/maps/mkKoFNwZBbrajzbQA",
        website     : "https://www.iu.edu.sa/",
        region      : "western",
        twitter     : "https://twitter.com/iu_edu?s=20",
        facebook    : "https://www.facebook.com/iu.edu.sa/",
        instagram   : "https://www.instagram.com/iu_edu/"
    },
    {
        id          : 502,
        name        : "Jeddah University",
        about       : "Jeddah University is a public university located in Jeddah, Makkah, Saudi Arabia. The University of Jeddah was established in 2014 and recognized by the Ministry of Education Saudi Arabia.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fjeddah_logo.png?alt=media&token=2e4b8ce2-b1a3-418c-9912-7e133c2ed972",
        location    : "https://goo.gl/maps/K15RddG3bTh5ak8B8",
        website     : "https://www.uj.edu.sa/Home.aspx",
        region      : "western",
        twitter     : "https://twitter.com/UOfjeddah?s=20",
        facebook    : "https://www.facebook.com/UOfjeddah/",
        instagram   : "https://www.instagram.com/ujeddah/",
        youtube     : "https://www.youtube.com/channel/UCphjXdU60T_ZrH_j17fQBxQ/"
    },
    {
        id          : 503,
        name        : "King Abdulaziz University",
        about       : "King Abdulaziz University (KAU) is a public university in Jeddah, Saudi Arabia. It was established in 1967 as a private university. In 1974, King Abdulaziz University was converted to a public university by a decision of the Council Ministers of Saudi Arabia under then-King Faisal's orders. In 2021, it is ranked the #1 Arab university by Times Higher Education.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Fabdulaziz_logo.png?alt=media&token=e7e558c2-eb67-46a1-83f3-291decf49290",
        location    : "https://goo.gl/maps/hgSCvVGVtSBM9hXb9",
        website     : "https://www.kau.edu.sa/Home.aspx",
        application : "https://play.google.com/store/apps/details?id=com.kau.mykau",
        region      : "western",
        twitter     : "https://twitter.com/kauweb",
        facebook    : "https://www.facebook.com/KingAbdulazizUniversity",
        youtube     : "https://www.youtube.com/user/kauUniversity"
    },
    {
        id          : 504,
        name        : "Taibah University",
        about       : "Taibah University is a university in Medina, Saudi Arabia, established in 2003. Taibah University has witnessed an enormous increase in the number of its students (both men and women). In 2003, there were 7,761 enrolled students. there are more than 20,000 students enrolled.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Ftaibah_logo.png?alt=media&token=1714abb0-5aa0-4939-ab98-c628fb50b344",
        location    : "https://goo.gl/maps/LzXz9vqicTi5jcwTA",
        website     : "https://www.taibahu.edu.sa/Pages/AR/Home.aspx",
        application : "https://play.google.com/store/apps/details?id=com.taibah.university",
        news        : "https://www.taibahu.edu.sa/Pages/AR/Rss.aspx",
        region      : "western",
        twitter     : "https://twitter.com/taibahu",
        facebook    : "https://www.facebook.com/UniversityOfTaibah/",
        instagram   : "https://www.instagram.com/taibah_uni/",
        youtube     : "https://www.youtube.com/user/universityoftaibah"
    },
    {
        id          : 505,
        name        : "Taif University",
        about       : "Taif University is located in Taif, Saudi Arabia. It was established in 2004.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Ftaif_logo.png?alt=media&token=f1f5d94f-791d-472f-a66b-15b45ac831fd",
        location    : "https://goo.gl/maps/ZqkKag88tTWGDQ147",
        website     : "https://www.tu.edu.sa/",
        application : "https://play.google.com/store/apps/details?id=io.cordova.myapp2b29b9",
        region      : "western",
        twitter     : "https://twitter.com/TaifUniversity",
        facebook    : "https://www.facebook.com/taifuniv/",
        youtube     : "https://www.youtube.com/user/TaifUniversity"
    },
    {
        id          : 506,
        name        : "Umm Al-Qura University",
        about       : "Umm Al-Qura University (UQU) is a large public Islamic university in Mecca, Saudi Arabia. The university was established as the College of Sharia (Islamic Law) in 1949 before being joined by new colleges and renamed as Umm Al-Qura by royal decree in 1981.",
        logo        : "https://firebasestorage.googleapis.com/v0/b/universities-directory.appspot.com/o/Universities%20Logo%2Falqura_logo.png?alt=media&token=de160ea2-ab0d-40d5-a654-0a92beebc1d8",
        location    : "https://goo.gl/maps/AUfetiHb2y1caQdJ7",
        website     : "https://uqu.edu.sa/",
        application : "https://play.google.com/store/apps/details?id=uqu.edu.sa",
        news        : "https://uqu.edu.sa/App/Rss/all",
        region      : "western",
        twitter     : "https://twitter.com/uqu_edu?lang=ar",
        facebook    : "https://www.facebook.com/uquedu/",
        youtube     : "https://www.youtube.com/user/uqutube"
    }
]

router.get('/', (request, response) => {
    const language = request.query.language
    const region   = request.query.region
    let univerisites;

    switch (language) {
        case undefined : return response.status(404).send('Must provide a language'); break;
        case 'en'      : univerisites = univerisitesEn; break;
        default        : return response.status(404).send('language is not supported'); break;
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