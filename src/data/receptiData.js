
const recepti = [
  {
    id:1,
    naziv: 'Frosted Brownies',
    opis: 'Brzi, fini i jeftini desert za svaku priliku',
    namirnice: [
        {
          id:0,
          naziv:'Maslac',
          kolicina:250,
          mjera:'g'
        },
        {
          id:1,
          naziv:'Tamna Čokolada',
          kolicina:200,
          mjera:'g'
        },
        {
          id:2,
          naziv: 'Kakao prah za pečenje',
          kolicina:80,
          mjera:'g'
        },
        {
          id:3,
          naziv: 'Glatko Brašno',
          kolicina:65,
          mjera:'g'
        },
        {
          id:4,
          naziv: 'Šećer',
          kolicina:200,
          mjera:'g'
        },
        {
          id:5,
          naziv: 'Jaja',
          kolicina:4,
          mjera:'kom'
        },
        {
          id:6,
          naziv: 'Prašak za pecivo',
          kolicina:1,
          mjera:'kom'
        },
        {
          id:7,
          naziv:'Grčki jogurt',
          kolicina: 200,
          mjera:'ml'
        },
        {
          id:8,
          naziv:'Šlag',
          kolicina:90,
          mjera:'g'
        }

    ],
    koraci: [
      {
        
        opis:"Izmiksati jaja sa šećerom dok se ne zapjene",
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.liK_0-gnKDoDqZUJlNCEdwHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=0ec8003e1a52f46fe4cca7ddf0c977981eb4353130cfa1274c770418e074f9e2&ipo=images"
      },
      {
        
        opis:"Otopiti prvo maslac koristeći double boiler metodu, pa u to dodati čokoladu",
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthf.bing.com%2Fth%2Fid%2FOIP.Y58D5KUsfWLX_UAXGdNaawHaJ2%3Fr%3D0%26cb%3Dthfc1falcon2%26pid%3DApi&f=1&ipt=02a2eecc06cff8c8174ed606cd4646ca0965f9fccdb7c5eefc442f6d4acdd230&ipo=images"
      },
      {
        
        opis:"Suhe sastojke pomješati posebno ( brašno, kakao i prašak )",
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwearenotmartha.com%2Fwp-content%2Fuploads%2Fbrownie-dry-ingredients-bowl-2-2-1024x1536.jpg&f=1&nofb=1&ipt=cbd27905bd6d84526a6303a802fa1aac696b3dc0050fc3f89fa1a32cc349571d"
      },
      {
        
        opis:"Dodaj otopljenu čokoladu u jaja, izmiksaj sa mikserom"
      },
      {
        
        opis:"Dodaj suhe sastojke u mokre i lagano  izmješaj, ali ne previše",
        img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthf.bing.com%2Fth%2Fid%2FOIP.adyxJLeHaWl5LDKHYvyHhAHaLH%3Fcb%3Dthfc1falcon2%26pid%3DApi&f=1&ipt=ace9061be820c5318b9c5f1fdcc3883c7e309e952b7a750185de596ab6ced689&ipo=images"
      },
      {
       
        opis:"Izli u tepsiju i peci 20 min na 180°C"
      },
      {
        
        opis:"Pustiti neka se ohladi min 1 sat u frižideru prije rezanja"
      },
      {
        
        opis:"Šlag i jogurt izmiksati zajedno i staviti preko ohlađenog brownia"
      }
    ],

    vrijeme: 30,
    mjera_vremena:'min',
    kompleksnost: 1,
    tip_obroka:"Desert"
  },
  {
    id:2,
    naziv:"Focaccia",
    opis:"Hrskava focaccia, savršena uz pivu",
    namirnice:
    [
      {
        id:9,
        naziv:"Voda",
        kolicina:600,
        mjera:"ml"
      },
      {
        id:3,
        naziv: 'Glatko Brašno',
        kolicina:750,
        mjera:'g'
      },
      {
        id:10,
        naziv:"Suhi kvasac",
        kolicina:7,
        mjera:"g"
      },
      ,
      {
        id:11,
        naziv:"Sitna sol",
        kolicina:12,
        mjera:"g"
      },
      ,
      {
        id:12,
        naziv:"Maslinovo ulje",
        kolicina:30,
        mjera:"ml"
      },
      {
        id:13,
        naziv:"Punjene masline",
        kolicina:15,
        mjera:"kom"
      }
    ],
    koraci:[
      {
        opis:"U velikoj posudi staviti toplu vodu, sol, kvasac i maslinovo ulje. Sve to zajedno izmješati i staviti da stoji 2-3 min"
      },
      {
        opis:"Dodati brašno i dobro izmjesiti rukama"
      },
      {
        opis:"Prekriti plastičnom folijom i krpom. Ostaviti 20 min na temp većoj od 27°C"
      },
      {
        opis:"Napraviti 3 serije strech-and-fold u intervalima od 15 min"
      },
      {
        opis:"Nakon konačnog strecha dodati malo maslinovog ulja, prekriti foliijom i krpom i ostaviti u frižideru 24-48 h"
      },
      {
        opis:"Nakon frižidera, staviti u lined pleh i ponovo ostaviti da stoji 2h na sobnoj temp"
      },
      {
        opis:"Preliti jos maslinovog ulja i napravit dimples da se stvore mjehuriči i dodati masline po želji"
      },
      {
        opis:"Staviti u pećnicu na 220°C 30 min"
      },
      {
        opis:"Nakon 30 min, pomoćiti koricu sa maslinovim uljem i zapeći dok se ne stvori zlatna korica(15-20 min)"
      }
    ],
    vrijeme: 52,
    mjera_vremena:'Sati',
    kompleksnost: 5,
    tip_obroka:"Kruh"
  }
 
]

export default recepti