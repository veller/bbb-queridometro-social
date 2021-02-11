require('dotenv').config();
const { socialblade } = require('socialblade-com-api')
const { format, subDays } = require('date-fns')

const participants = [
    {
        participant: 'Arcrebiano',
        instagram: 'bilaraujjo',
        twitter: 'bilaraujjo',
    },
    {
        participant: 'Arthur',
        instagram: 'arthurpicoli',
        twitter: 'arthurpicoli',
    },
    {
        participant: 'Caio',
        instagram: 'afiune_caio',
        twitter: 'afiunecaio',
    },
    {
        participant: 'Camilla',
        instagram: 'camilladelucas',
        twitter: 'camilladelucas',
    },
    {
        participant: 'Carla',
        instagram: 'carladiaz',
        twitter: 'carladiaz',
    },
    {
        participant: 'Fiuk',
        instagram: 'fiuk',
        twitter: 'fiuk',
    },
    {
        participant: 'Gilberto',
        instagram: 'gilnogueiraofc',
        twitter: 'gilnogueiraofc',
    },
    {
        participant: 'João',
        instagram: 'joaolpedrosa',
        twitter: 'joaoluizpedrosa',
    },
    {
        participant: 'Juliette',
        instagram: 'juliette.freire',
        twitter: 'freirejuliette',
    },
    {
        participant: 'Karol',
        instagram: 'karolconka',
        twitter: 'karolconka',
    },
    {
        participant: 'Kerline',
        instagram: 'kercardoso',
        twitter: 'kerlinecardoso',
    },
    {
        participant: 'Lucas',
        instagram: 'lucaskokapenteado',
        twitter: 'koka_lucas',
    },
    {
        participant: 'Lumena',
        instagram: 'lumena.aleluia',
        twitter: 'lumenaaleluia',
    },
    {
        participant: 'Nego',
        instagram: 'negodioficial',
        twitter: 'negodioficial',
    },
    {
        participant: 'Pocah',
        instagram: 'pocah',
        twitter: 'pocah',
    },
    {
        participant: 'Projota',
        instagram: 'projota',
        twitter: 'projota',
    },
    {
        participant: 'Rodolffo',
        instagram: 'irodolffo',
        twitter: 'irodolffo',
    },
    {
        participant: 'Sarah',
        instagram: 'sarah_andrade',
        twitter: 'ssarahandrade',
    },
    {
        participant: 'Thais',
        instagram: 'thaisfbraz',
        twitter: 'thaisfbraz',
    },
    {
        participant: 'Viih',
        instagram: 'viihtube',
        twitter: 'viihtube',
    },
]

const api_key = process.env.API_KEY
const baseUrl = `http://api.scraperapi.com?api_key=${api_key}&url=`

// async function main () {
//     const response = await socialblade(baseUrl, 'twitter', 'bilaraujjo') //nao funciona
//     // const response = await socialblade(baseUrl, 'twitter', 'barackobama') //funciona
//     console.log(response)
// }

// main()

function delay(t) {
    return new Promise(resolve => setTimeout(resolve, t));
}

async function instagramFollowers() {
    let participantsAndFollowers = []
    
    for (let item of participants) {
        console.log(`getting data for ${item.participant}`)

        let response = await socialblade(baseUrl, 'instagram', item.instagram)
        let yesterday = format(subDays(new Date(), 1), 'yyyy/MM/dd')
        let yesterdaysData = response.table.find(td => td.date == yesterday)
        let yesterdaysFollowersDelta = yesterdaysData?.followersDelta ?? 0

        participantsAndFollowers.push({
            participant: item.participant, 
            media: 'instagram',
            yesterdaysFollowersDelta
        })

        await delay(1000);
    }
    
    sortedParticipantsAndFollowers = participantsAndFollowers.sort((a, b) => (a.yesterdaysFollowersDelta > b.yesterdaysFollowersDelta) ? 1 : -1)
    
    console.log(sortedParticipantsAndFollowers)
}

instagramFollowers().then(() => {
   console.log("all done");
}).catch(err => {
   console.log(err);
});
