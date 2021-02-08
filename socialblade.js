const { socialblade } = require('socialblade-com-api')
const { format } = require('date-fns')

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
 
async function main () {
    let baseUrl = 'http://api.scraperapi.com?api_key=f941895b4d245ae8491266fe2f58bfef&url='
    let today = format(new Date(), 'yyyy/MM/dd')
    
    // let response = await socialblade(baseUrl, 'instagram', participants[0]['instagram'])
    
    // let todaysData = response.table.find(td => td.date == today)

    // console.log(todaysData)

    console.log(participants.map(p => {
        return {
            participant: p.participant,
            instagramHandle: p.instagram,
            twitterHandle: p.twitter
        }
    }))

    // console.log(response.table)
    // console.log(today)
}

main()