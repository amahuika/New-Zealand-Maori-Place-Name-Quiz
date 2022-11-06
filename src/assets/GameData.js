const gameData = [
  {
    placeName: "Ahuroa",
    hint: "ahu: mound, roa: long",
    meaning: "Long mound",
  },
  {
    placeName: "Aoroa",
    hint: "ao: cloud, roa: long",
    meaning: "Long cloud",
  },
  {
    placeName: "Aotearoa",
    hint: "ao: cloud, tea: white, roa: long",
    meaning: "Land of the long white cloud",
  },
  {
    placeName: "Aramoana",
    hint: "ara: path, moana: sea",
    meaning: "Sea pathway",
  },
  {
    placeName: "Aranui",
    hint: "ara: path, nui: great",
    meaning: "Great pathway",
  },
  {
    placeName: "Arapae",
    hint: "ara: path, pae: ridgeway",
    meaning: "Pathway along the ridge",
  },
  {
    placeName: "Arapito",
    hint: "ara: path, pito: end or extremity",
    meaning: "End of the path",
  },
  {
    placeName: "Arapohue",
    hint: "ara: path, pohue: climbing plant",
    meaning: "Path of the climbing plant",
  },
  {
    placeName: "Arapuni",
    hint: "ara: path, puni: blocked or covered",
    meaning: "Blocked path",
  },
  {
    placeName: "Ararata",
    hint: "ara: path, rata: native tree",
    meaning: "Rata tree path",
  },
  {
    placeName: "Ararimu",
    hint: "ara: path, rimu: native tree",
    meaning: "Rimu tree path",
  },
  {
    placeName: "Ararua",
    hint: "ara: path, rua: two",
    meaning: "Two paths",
  },
  {
    placeName: "Arataha",
    hint: "ara: path, taha: side",
    meaning: "Side path",
  },
  {
    placeName: "Aratapu",
    hint: "ara: path, tapu: sacred or restricted",
    meaning: "Sacred path",
  },
  {
    placeName: "Aratiatia Lakes, Aratiatia Rapids",
    hint: "ara: path, tiatia: pegs",
    meaning: "Pegged ladder",
  },
  {
    placeName: "Aratika",
    hint: "ara: path, tika: correct or straight",
    meaning: "Direct path",
  },
  {
    placeName: "Aratoro",
    hint: "ara: path, toro: discover",
    meaning: "Path of discovery",
  },
  {
    placeName: "Aropaonui",
    hint: "aro: kidney fat, paoa: to bash",
    meaning: "Bashed kidney fat",
  },
  {
    placeName: "Aukati",
    hint: "au: line, kati: block",
    meaning: "Frontier",
  },
  {
    placeName: "Auripo",
    hint: "au: current, ripo: whirlpool, or eddying",
    meaning: "Eddying current",
  },
  {
    placeName: "Auroa",
    hint: "au: cloud or mist, roa: long",
    meaning: "Long cloud",
  },
  {
    placeName: "Awa",
    hint: "awa: river",
    meaning: "River",
  },
  {
    placeName: "Awahohonu River",
    hint: "awa: river, hohonu: deep",
    meaning: "Deep river",
  },
  {
    placeName: "Awahou",
    hint: "awa: river, hou: new",
    meaning: "New river",
  },
  {
    placeName: "Awaiti",
    hint: "awa: river, iti: little",
    meaning: "Little river",
  },
  {
    placeName: "Awa-kaeaea",
    hint: "awa: valley or stream, kaeaea: the sparrow-hawk",
    meaning: "Sparrow-hawk stream",
  },
  {
    placeName: "Awakeri",
    hint: "awa: river, keri: dig",
    meaning: "Ditch or trench",
  },
  {
    placeName: "Awakino",
    hint: "awa: river, kino: bad, evil, or of bad appearance",
    meaning: "Bad creek",
  },
  {
    placeName: "Awamangu",
    hint: "awa: river, mangu: black",
    meaning: "Black river",
  },
  {
    placeName: "Awamarino",
    hint: "awa: stream, marino: calm",
    meaning: "Calm stream",
  },
  {
    placeName: "Awamoana",
    hint: "awa: stream, moana: sea",
    meaning: "Sea stream",
  },
  {
    placeName: "Awamoko",
    hint: "awa: stream, moko: lizard",
    meaning: "Lizard stream",
  },
  {
    placeName: "Awanui",
    hint: "awa: river, nui: large",
    meaning: "Large river",
  },
  {
    placeName: "Awapikopiko",
    hint: "awa: stream, pikopiko: winding about",
    meaning: "Winding stream",
  },
  {
    placeName: "Awapuni",
    hint: "awa: stream, puni: blocked up",
    meaning: "Blocked-up river",
  },
  {
    placeName: "Awarere",
    hint: "awa: stream, rere: to flow",
    meaning: "Flowing stream",
  },
  {
    placeName: "Awariki",
    hint: "awa: river, riki: small",
    meaning: "Little river",
  },
  {
    placeName: "Awaroa",
    hint: "awa: river or valley, roa: long",
    meaning: "Long river",
  },
  {
    placeName: "Awarua",
    hint: "awa: stream or river, rua: two",
    meaning: "Two streams",
  },
  {
    placeName: "Awatere River",
    hint: "awa: river, tere: swift",
    meaning: "Swift river",
  },
  {
    placeName: "Awatoitoi",
    hint: "awa: stream, toitoi: giant bully",
    meaning: "Giant bully stream",
  },
  {
    placeName: "Awatoto",
    hint: "awa: stream, toto: hauling place",
    meaning: "Stream for hauling (canoes)",
  },
  {
    placeName: "Awatuna",
    hint: "awa: stream, tuna: eel",
    meaning: "Eel stream",
  },
  {
    placeName: "Eketahuna",
    hint: "eke: run aground or land, tahuna: sandbank",
    meaning: "Land on the sandbank",
  },
  {
    placeName: "Epiha",
    hint: "Maori form of biblical name Ephesus",
    meaning: "Ephesus",
  },
  {
    placeName: "Erua",
    hint: "e: used before cardinal numbers from two to nine, rua: two",
    meaning: "Two",
  },
  {
    placeName: "Hapua-waikawa",
    hint: "hapua: pool, wai: water, kawa: bitter",
    meaning: "Pool of bitter water",
  },
  {
    placeName: "Haumoana",
    hint: "hau: wind, moana: sea",
    meaning: "Sea breeze",
  },
  {
    placeName: "Haunui",
    hint: "hau: wind, nui: big or many",
    meaning: "Strong wind",
  },
  {
    placeName: "Hiwinui",
    hint: "hiwi: ridge, nui: big",
    meaning: "Big ridge",
  },
  {
    placeName: "Hokanui",
    hint: "hoka: projecting sharply upwards, nui: large",
    meaning: "Large projection",
  },
  {
    placeName: "Houipapa",
    hint: "houi: lacebark, papa: flat",
    meaning: "Ribbonwood flat",
  },
  {
    placeName: "Houpoto",
    hint: "hou: feathers, poto: short",
    meaning: "Short feathers",
  },
  {
    placeName: "Hukanui",
    hint: "huka: foam, frost or snow, nui: big",
    meaning: "Heavy snow",
  },
  {
    placeName: "Hukerenui",
    hint: "hukere: cascade, nui: large",
    meaning: "Large cascade",
  },
  {
    placeName: "Hurimoana",
    hint: "huri: to overflow, moana: ocean",
    meaning: "Overflowing ocean",
  },
  {
    placeName: "Ihumatao",
    hint: "ihu: nose, matao: cold",
    meaning: "Cold nose",
  },
  {
    placeName: "Ihumoana",
    hint: "ihu: nose, moana: sea",
    meaning: "Nose into the sea",
  },
  {
    placeName: "Ikawai",
    hint: "ika: fish, wai: water",
    meaning: "Waters of fish",
  },
  {
    placeName: "Ka Pukehore",
    hint: "A descriptive name, ka (nga): the, puke: hill, hore: bare (the peaks were bare of vegetation)",
    meaning: "The bare hills",
  },
  {
    placeName: "Ka Pukemaeroero",
    hint: "ka (nga): the, puke: hill, maeroero: ogres of the South Island forests",
    meaning: "The hill of ogres",
  },
  {
    placeName: "Kaharoa",
    hint: "kaha: net, roa: long",
    meaning: "Large net",
  },
  {
    placeName: "Kaiata",
    hint: "kai: to eat: ata: early morning",
    meaning: "Eating in the morning",
  },
  {
    placeName: "Kaiaua",
    hint: "kai: to eat, aua: mullet or herrings",
    meaning: "Eating mullets",
  },
  {
    placeName: "Kai-Hau-o-Kupe",
    hint: "kai: to eat, hau: wind, o: of, Kupe",
    meaning: "The place where Kupe ‘ate wind’",
  },
  {
    placeName: "Kaihiku",
    hint: "kai: te eat, hiku: tail of a fish",
    meaning: "Eating a fish tail",
  },
  {
    placeName: "Kaihinu",
    hint: "kai: food, hinu: fat",
    meaning: "Food preserved in fat",
  },
  {
    placeName: "Kaihu",
    hint: "An abbreviation of kai-hu-a-Ihenga, kai: to eat, hu: secretly, a: of, Ihenga",
    meaning: "Eat secretly",
  },
  {
    placeName: "Kaikarae",
    hint: "kai: food, karae: seabird",
    meaning: "Eat a seabird",
  },
  {
    placeName: "Kaikoura",
    hint: "kai: to eat, koura: crayfish",
    meaning: "Eat crayfish",
  },
  {
    placeName: "Kaikumera Bay",
    hint: "kai: to eat, kumera (alternate spelling of kumara): sweet potato",
    meaning: "Eat kumara",
  },
  {
    placeName: "Kaimai",
    hint: "kai: food or to eat, mai: mussels, or slightly fermented food",
    meaning: "Eat fermented food",
  },
  {
    placeName: "Kaimamaku",
    hint: "kai: food or to eat, mamaku: edible tree-fern",
    meaning: "Eat edible tree-fern",
  },
  {
    placeName: "Kaimanawa Mountains",
    hint: "kai: food or to eat, manawa: breath (also meaning heart or emotion)",
    meaning: "Breath for food",
  },
  {
    placeName: "Kaimango",
    hint: "kai: food or to eat, mango: shark",
    meaning: "Eating shark",
  },
  {
    placeName: "Kaimata",
    hint: "kaimata: unripe or uncooked food",
    meaning: "Eat raw food",
  },
  {
    placeName: "Kaimataitai",
    hint: "kai: food, mataitai: salty",
    meaning: "Eat seafood",
  },
  {
    placeName: "Kaimaumau",
    hint: "kai: food, maumau: to waste",
    meaning: "Eat food",
  },
  {
    placeName: "Kaimiro",
    hint: "kai: food or to eat, miro: a tree",
    meaning: "Eat miro berries",
  },
  {
    placeName: "Kainamu",
    hint: "kai: to eat, namu: sandflies",
    meaning: "Eat sandflies",
  },
  {
    placeName: "Kaingaroa",
    hint: "kainga: area of land, roa: long",
    meaning: "Long area of land",
  },
  {
    placeName: "Kaingaroa Plain",
    hint: "Kainga: place where food has been cooked and eaten, roa: long",
    meaning: "Long meal",
  },
  {
    placeName: "Kaipakirikiri",
    hint: "kai: food, pakirikiri: rock cod",
    meaning: "Eating rock cod",
  },
  {
    placeName: "Kaipara Flats",
    hint: "kai: te eat, para: fern-root",
    meaning: "Eat fern-root",
  },
  {
    placeName: "Kaiparoro",
    hint: "kai: to eat, paroro: bad weather",
    meaning: "Eating up bad weather",
  },
  {
    placeName: "Kaipo Bay",
    hint: "kai: to eat, po: night",
    meaning: "Eat night",
  },
  {
    placeName: "Kaipuke",
    hint: "kai: to eat, puke: swell, flood",
    meaning: "Ship (wave eater)",
  },
  {
    placeName: "Kaipupu",
    hint: "kai: food, pupu: shellfish",
    meaning: "Eat shellfish",
  },
  {
    placeName: "Kairakau",
    hint: "kai: to eat, rakau: wood.",
    meaning: "Eat wood",
  },
  {
    placeName: "Kairaki",
    hint: "kai: eat, raki (South Island form of rangi), sky",
    meaning: "Sky eater",
  },
  {
    placeName: "Kairara",
    hint: "kai: food, rara: to be spread out on a stage for drying in the sun",
    meaning: "Food spread out on a stage to dry",
  },
  {
    placeName: "Kairua",
    hint: "kai: food, rua: pit",
    meaning: "Food pit",
  },
  {
    placeName: "Kaitakata",
    hint: "South Island variant of Kaitangata – kai: to eat, tangata: man",
    meaning: "Man eater (South Island form)",
  },
  {
    placeName: "Kaitangata",
    hint: "kai: to eat, tangata: man",
    meaning: "Man eater",
  },
  {
    placeName: "Kaitangiweka",
    hint: "kai: food, tangi: to cry, weka: wood hen",
    meaning: "Crying of the weka for food",
  },
  {
    placeName: "Kaitapeha",
    hint: "kai: to eat, tapeha: rind or skin",
    meaning: "Eat the rind",
  },
  {
    placeName: "Kaitawa",
    hint: "kai: food, tawa: tree or berries",
    meaning: "Eat tawa berries",
  },
  {
    placeName: "Kaitieke",
    hint: "kai: to eat, tieke: the saddleback bird",
    meaning: "Eat the saddleback bird",
  },
  {
    placeName: "Kaitoke",
    hint: "kai: to eat, or food, take: worm",
    meaning: "Eat worms",
  },
  {
    placeName: "Kaitoki",
    hint: "kai: food, toki: adze",
    meaning: "Food for the adze",
  },
  {
    placeName: "Kaituna",
    hint: "kai: to eat, tuna: eel",
    meaning: "Eat eels",
  },
  {
    placeName: "Kai-waha-onepu",
    hint: "kai: food, waha: mouth, onepu: sand",
    meaning: "Biting the sand",
  },
  {
    placeName: "Kaiwaka",
    hint: "kai: to eat, waka: canoe",
    meaning: "Eating the canoes",
  },
  {
    placeName: "Kaiwera",
    hint: "kai: food, wera: hot",
    meaning: "Hot food",
  },
  {
    placeName: "Kaiwharawhara",
    hint: "kai: food or to eat, wharawhara: the fruit of the astelia",
    meaning: "Eat the fruit of the astelia",
  },
  {
    placeName: "Kakiroa",
    hint: "kaki: neck or throat, roa: large",
    meaning: "Long neck",
  },
  {
    placeName: "Kararoa",
    hint: "kara: this word has many meanings, one of which is old man, roa: tall",
    meaning: "Tall elderly man",
  },
  {
    placeName: "Kauroa",
    hint: "kau: to swim, roa: long",
    meaning: "Long swim",
  },
  {
    placeName: "Kereone",
    hint: "kere: earth, one: sand or sandy",
    meaning: "Sandy earth",
  },
  {
    placeName: "Kereru",
    hint: "kereru: wood pigeon",
    meaning: "Wood pigeon",
  },
  {
    placeName: "Keteketerau",
    hint: "ketekete: click the tongue, rau: many times",
    meaning: "Click the tongue repeatedly",
  },
  {
    placeName: "Ketetahi springs",
    hint: "Kete: basket, tahi: one",
    meaning: "One spring",
  },
  {
    placeName: "Kihikihi",
    hint: "kihikihi: cicada",
    meaning: "Cicada",
  },
  {
    placeName: "Kihitu",
    hint: "kihi: to strip off, tu: girdle or belt to which a maro (loincloth) was attached",
    meaning: "Strip off the girdle",
  },
  {
    placeName: "Kioreroa",
    hint: "kiore: native rat, roa: long",
    meaning: "Long rat",
  },
  {
    placeName: "Kirkiriroa",
    hint: "kirikiri: gravel, roa: long",
    meaning: "Long gravel",
  },
  {
    placeName: "Kiwinui",
    hint: "kiwi: bird, nui: many",
    meaning: "Many kiwi birds",
  },
  {
    placeName: "Kohinui",
    hint: "kohi: dark mud (used in dyeing), heavy rain, skeleton, youth, etc., nui: large, many or plenty",
    meaning: "Plenty of dark mud",
  },
  {
    placeName: "Kohukohunui",
    hint: "Lit: kohukohu: mist, nui: big or many",
    meaning: "Great mist",
  },
  {
    placeName: "Koputai",
    hint: "kopu: full, tai: tide",
    meaning: "Full tide",
  },
  {
    placeName: "Koputaroa",
    hint: "koputa: snare for catching parakeets, roa: long",
    meaning: "Long snare for catching parakeets",
  },
  {
    placeName: "Kopuwai",
    hint: "kopu: belly or full, wai: water",
    meaning: "Water swallower",
  },
  {
    placeName: "Korakonui",
    hint: "korako: albino, nui: big",
    meaning: "Large albino (bird)",
  },
  {
    placeName: "Kororareka",
    hint: "korora: blue penguin, reka: sweet or tasty",
    meaning: "Tasty blue penguin",
  },
  {
    placeName: "Kotuku",
    hint: "koku: white heron",
    meaning: "White heron",
  },
  {
    placeName: "Kotuku-moana",
    hint: "kotuku: white heron, moana: lake",
    meaning: "Lake of white herons",
  },
  {
    placeName: "Kourarau",
    hint: "koura: crayfish, rau: many",
    meaning: "Many crayfish",
  },
  {
    placeName: "Koutunui",
    hint: "koutu: headland, nui: large",
    meaning: "Large headland",
  },
  {
    placeName: "Kumeroa",
    hint: "kume: to pull, roa: long",
    meaning: "Long drag",
  },
  {
    placeName: "Kuranui",
    hint: "kura: red, nui: large red birds",
    meaning: "Big red (birds)",
  },
  {
    placeName: "Makakahikatoa",
    hint: "maka: strike, kahikatoa: red manuka (Leptospermum scoparium) or more probably a weapon made from this wood",
    meaning: "Striking with manuka stick",
  },
  {
    placeName: "Makaranui",
    hint: "makara: to come and go, nui: many",
    meaning: "Much coming and going",
  },
  {
    placeName: "Makikihi",
    hint: "ma: stream, kikihi: cicada (Amphipsalta cingulata)",
    meaning: "Cicada stream",
  },
  {
    placeName: "Makirikiri",
    hint: "ma: stream: kirikiri: gravel",
    meaning: "Gravelly stream",
  },
  {
    placeName: "Makohine Valley",
    hint: "ma: stream, kohine: girl",
    meaning: "Young woman's stream",
  },
  {
    placeName: "Makotuku",
    hint: "ma: stream, kotuku: white heron",
    meaning: "White heron stream",
  },
  {
    placeName: "Makowhai",
    hint: "Ma: stream, kowhai: tree",
    meaning: "Kowhai tree stream",
  },
  {
    placeName: "Makuri",
    hint: "ma: stream, kuri: dog",
    meaning: "Dog stream",
  },
  {
    placeName: "Mamaranui",
    hint: "ma: stream, mara: farm or cultivation, nui: large or many",
    meaning: "Stream for many gardens",
  },
  {
    placeName: "Manaroa",
    hint: "mana: power or prestige, roa: great or long",
    meaning: "Enduring prestige",
  },
  {
    placeName: "Mangaharakeke",
    hint: "manga: stream, harakeke: flax bush",
    meaning: "Stream of flax",
  },
  {
    placeName: "Mangahoe",
    hint: "manga: stream, hoe: canoe paddle",
    meaning: "Stream of canoe paddles",
  },
  {
    placeName: "Mangahouhounui Stream",
    hint: "manga: stream, houhou: five-finger tree, nui: large or many",
    meaning: "Stream of many five finger trees",
  },
  {
    placeName: "Mangaiti",
    hint: "manga: stream, iti: tiny",
    meaning: "Small stream",
  },
  {
    placeName: "Mangakahia",
    hint: "manga: stream, kahia or kohia: native passion vine",
    meaning: "Stream of New Zealand passionfruit",
  },
  {
    placeName: "Mangakino",
    hint: "manga: stream, kino: bad, usless or stagnant",
    meaning: "Stagnant stream",
  },
  {
    placeName: "Mangakura",
    hint: "manga: stream, kura: red or red ochre",
    meaning: "Stream of red ochre",
  },
  {
    placeName: "Mangamahoe",
    hint: "manga: stream, mahoe: native tree, whiteywood (Melicytus ramiflorus)",
    meaning: "Mahoe stream",
  },
  {
    placeName: "Mangamahu",
    hint: "manga: stream, mahu: gentle",
    meaning: "Gentle stream",
  },
  {
    placeName: "Mangamaire",
    hint: "manga: stream, maire: native tree",
    meaning: "Maire stream",
  },
  {
    placeName: "Mangamuka",
    hint: "manga: stream, muka: the furled shoot of the nikau palm",
    meaning: "Stream of the furled shoot of the nikau palm",
  },
  {
    placeName: "Mangamutu",
    hint: "manga: stream, mutu: finished",
    meaning: "Finished stream",
  },
  {
    placeName: "Mangangarongaro: Mangangarongaro Stream",
    hint: "manga: stream, ngarongaro: somewhat abated",
    meaning: "Abated stream",
  },
  {
    placeName: "Manganui-a-te-Ao",
    hint: "manga: stream, nui: great, a: of, te: the, ao: world",
    meaning: "Great stream of the world",
  },
  {
    placeName: "Mangaohae",
    hint: "manga: stream o: of, Hae",
    meaning: "The stream of Hae",
  },
  {
    placeName: "Mangaohutu",
    hint: "manga: stream, o: of, Hutu",
    meaning: "The stream of Hutu",
  },
  {
    placeName: "Mangaonoho",
    hint: "manga: stream, o: of, Noho",
    meaning: "The stream of Noho",
  },
  {
    placeName: "Mangaorapa",
    hint: "manga: stream, o: of, Rapa",
    meaning: "The stream of Rapa",
  },
  {
    placeName: "Mangaore",
    hint: "manga: stream, ore: to poke with a stick, or to bore a hole",
    meaning: "The stream where a hole was bored",
  },
  {
    placeName: "Mangaotaki",
    hint: "manga: stream, o: of, taki: oratory or to make a speech",
    meaning: "Stream of oratory",
  },
  {
    placeName: "Mangaowera: Mangaowera Stream",
    hint: "manga: stream, o: of, Wera",
    meaning: "The stream of Wera",
  },
  {
    placeName: "Mangapai",
    hint: "manga: stream, pai: good",
    meaning: "Good stream",
  },
  {
    placeName: "Mangapehi",
    hint: "manga: stream, pehi: troubled",
    meaning: "Stream of trouble",
  },
  {
    placeName: "Mangapiko",
    hint: "manga: stream, piko: bent or crooked",
    meaning: "Winding stream",
  },
  {
    placeName: "Mangapouri",
    hint: "manga: stream, pouri: dark",
    meaning: "Dark stream",
  },
  {
    placeName: "Mangapu",
    hint: "manga: stream, pu: double",
    meaning: "Double stream",
  },
  {
    placeName: "Mangapuaka",
    hint: "manga: stream , puaka: bird snare or rimu tree",
    meaning: "Bird snare stream",
  },
  {
    placeName: "Mangapurua",
    hint: "manga: stream, purua: abundant or plenty",
    meaning: "Abundant stream",
  },
  {
    placeName: "Mangarakau",
    hint: "manga: stream, rakau: tree",
    meaning: "Stream of trees",
  },
  {
    placeName: "Mangaramarama",
    hint: "manga: stream, ramarama: native shrub",
    meaning: "Stream of the ramarama shrub",
  },
  {
    placeName: "Mangarapa",
    hint: "manga: stream, rapa: broad or spread out",
    meaning: "Broad stream",
  },
  {
    placeName: "Mangarata",
    hint: "manga: stream, rata: native tree",
    meaning: "Rata stream",
  },
  {
    placeName: "Mangarawa",
    hint: "manga: stream, rawa: swamp",
    meaning: "Swampy stream",
  },
  {
    placeName: "Mangarimu",
    hint: "manga: stream, rimu: native tree",
    meaning: "Rimu stream",
  },
  {
    placeName: "Mangaroa",
    hint: "manga: stream, roa: long",
    meaning: "Long stream",
  },
  {
    placeName: "Mangatahi",
    hint: "manga: stream, tahi: single",
    meaning: "Single stream",
  },
  {
    placeName: "Mangatainoka",
    hint: "manga: stream, tainoka: native broom",
    meaning: "Native broom stream",
  },
  {
    placeName: "Mangatangi",
    hint: "manga: stream, tangi: weeping or sounding",
    meaning: "Stream of weeping",
  },
  {
    placeName: "Mangatapu",
    hint: "manga: stream, tapu: sacred or forbidden",
    meaning: "Sacred stream",
  },
  {
    placeName: "Mangatarata",
    hint: "manga: stream, tarata: native tree known as lemonwood",
    meaning: "Lemonwood stream",
  },
  {
    placeName: "Mangatawhiri",
    hint: "manga: stream, tawhiri: native tree",
    meaning: "Tawhiri tree stream",
  },
  {
    placeName: "Mangatea",
    hint: "manga: stream, tea: white or clear",
    meaning: "Clear stream",
  },
  {
    placeName: "Mangateparu",
    hint: "manga: stream, te: the paru: mud, dirt, dirty or deep",
    meaning: "Stream of mud",
  },
  {
    placeName: "Mangatepopo",
    hint: "manga: stream, te: the, popo: anything rotten or decayed",
    meaning: "Stream of rotten items",
  },
  {
    placeName: "Mangateretere",
    hint: "manga: stream, teretere: swiftly flowing",
    meaning: "Swiftly flowing river",
  },
  {
    placeName: "Mangati",
    hint: "manga: stream, ti: cabbage tree",
    meaning: "Cabbage-tree stream",
  },
  {
    placeName: "Mangatina",
    hint: "manga: stream, tina: exhausted",
    meaning: "Exhausted at the stream",
  },
  {
    placeName: "Mangatoetoe",
    hint: "manga: stream, toetoe: native grass",
    meaning: "Toetoe stream",
  },
  {
    placeName: "Mangatuna",
    hint: "manga: stream, tuna: eel",
    meaning: "Eel stream",
  },
  {
    placeName: "Mangawara",
    hint: "manga: stream, wara: to make an indistinct sound",
    meaning: "Quiet stream",
  },
  {
    placeName: "Mangaweka:",
    hint: "manga: stream, weka: wood-hen",
    meaning: "Weka stream",
  },
  {
    placeName: "Mangawhata",
    hint: "manga: stream, whata: a raised storehouse for food",
    meaning: "Raised storehouse stream",
  },
  {
    placeName: "Mangawhero",
    hint: "manga: stream, whero: red",
    meaning: "Red stream",
  },
  {
    placeName: "Mangonui",
    hint: "mango: shark, nui: large or many",
    meaning: "Great shark",
  },
  {
    placeName: "Mania-rauhea",
    hint: "mania: plain of flat land, rauhea: tussock grass",
    meaning: "Plain of shining tussock",
  },
  {
    placeName: "Maniatoto",
    hint: "mania: plain, o: of, toto: blood",
    meaning: "Plain of blood",
  },
  {
    placeName: "Maniatutu",
    hint: "mania: plain, tutu: a native tree",
    meaning: "Tutu-tree plain",
  },
  {
    placeName: "Manui",
    hint: "ma: stream, nui: large",
    meaning: "Large stream",
  },
  {
    placeName: "Maraenui",
    hint: "marae: courtyard or meeting area, nui: large",
    meaning: "Great marae",
  },
  {
    placeName: "Maraeroa",
    hint: "marae: courtyard or meeting area, roa: long",
    meaning: "Long marae",
  },
  {
    placeName: "Maraetai",
    hint: "marae: courtyard or meeting area, tai: coast",
    meaning: "Coastal marae",
  },
  {
    placeName: "Mararoa",
    hint: "mara: cultivated area, roa: long, long lasting",
    meaning: "Long lasting cultivations",
  },
  {
    placeName: "Matakanui",
    hint: "mata: face, ka: blow or scar, nui: large",
    meaning: "Scarred face of a large cliff",
  },
  {
    placeName: "Mataroa",
    hint: "mata: headland or bluff, roa: long",
    meaning: "Long headland",
  },
  {
    placeName: "Maunga Ma",
    hint: "maunga: mountain, ma: white",
    meaning: "White mountain",
  },
  {
    placeName: "Maunga-atua",
    hint: "maunga: mountain, atua: gods",
    meaning: "Mountain of the gods",
  },
  {
    placeName: "Maungaharuru",
    hint: "maunga: mountain, haruru: to rumble",
    meaning: "Rumbling mountain",
  },
  {
    placeName: "Maungahaumi",
    hint: "maunga: mountain, haumi: timber to lengthen or raise the sides of a canoe",
    meaning: "Mountain of canoe timber",
  },
  {
    placeName: "Maungakaramea",
    hint: "maunga: mountain, karamea: red ochre or speargrass",
    meaning: "Red ochre mountain",
  },
  {
    placeName: "Maungakiekie",
    hint: "maunga: mountain, kiekie: a climbing plant",
    meaning: "Kiekie plant mountain",
  },
  {
    placeName: "Maunganui",
    hint: "maunga: mountain, nui: tall or large",
    meaning: "Large mountain",
  },
  {
    placeName: "Maungapohatu",
    hint: "maunga: mountain, pohatu: rock or stone",
    meaning: "Rocky mountain",
  },
  {
    placeName: "Maungaraki",
    hint: "maunga: mountain or mountains, raki: north",
    meaning: "Northern mountain",
  },
  {
    placeName: "Maungaroa",
    hint: "maunga: mountain, roa: long",
    meaning: "Long mountain",
  },
  {
    placeName: "Maungataketake",
    hint: "maunga: mountain, taketake: base, long-established or well-founded",
    meaning: "Broad mountain",
  },
  {
    placeName: "Maungataniwha",
    hint: "maunga: mountain, taniwha: supernatural creature",
    meaning: "Taniwha mountain",
  },
  {
    placeName: "Maungatapere",
    hint: "maunga: mountain, tapere: red, volcanic earth",
    meaning: "Mountain of red volcanic earth",
  },
  {
    placeName: "Maungatapu",
    hint: "maunga: mountain, tapu: sacred or forbidden",
    meaning: "Sacred mountain",
  },
  {
    placeName: "Maungatautari",
    hint: "maunga: mountain, tautari: an upright stick",
    meaning: "Mountain of the upright stick",
  },
  {
    placeName: "Maungati",
    hint: "maunga: mountain, ti: cabbage tree",
    meaning: "Cabbage tree mountain",
  },
  {
    placeName: "Maungatua",
    hint: "maunga: mountain, a: of, atua: god",
    meaning: "Mountain of the gods",
  },
  {
    placeName: "Maungaturoto",
    hint: "maunga: mountain, tu: to stand, roto: lake",
    meaning: "Mountain standing up in lagoons",
  },
  {
    placeName: "Maungawera",
    hint: "maunga: mountain, wera: burnt or hot",
    meaning: "Burnt mountain",
  },
  {
    placeName: "Maungawhau",
    hint: "maunga: mountain, whau: a native tree",
    meaning: "Whau tree mountain",
  },
  {
    placeName: "Mawheranui",
    hint: "Mawhera: open, widesread, nui: large (referring particularly to the river mouth).",
    meaning: "Broad and widespread (river mouth)",
  },
  {
    placeName: "Mititai",
    hint: "miti: to lick, tai: tide",
    meaning: "Lick the tide",
  },
  {
    placeName: "Moana",
    hint: "Ocean or large lake",
    meaning: "Ocean",
  },
  {
    placeName: "Moanariri",
    hint: "moana: sea, riri: to be angry or to fight",
    meaning: "Angry sea",
  },
  {
    placeName: "Moanaroa",
    hint: "moana: ocean, roa: large or broad",
    meaning: "Broad sea",
  },
  {
    placeName: "Moanawhenuapouri",
    hint: "moana: sea, whenua: land, pouri: sad or dark",
    meaning: "Sombre arm of the sea",
  },
  {
    placeName: "Moeroa",
    hint: "moe: to sleep, roa: long",
    meaning: "Long sleep",
  },
  {
    placeName: "Mokihinui",
    hint: "mokihi: raft made of flax stalks, nui: large",
    meaning: "Large flax-stalk raft",
  },
  {
    placeName: "Mokoroa",
    hint: "moko: tattoo, roa: long",
    meaning: "Long tattoo",
  },
  {
    placeName: "Mokoroa: Mokoroa Stream",
    hint: "moko: lizard, roa, long",
    meaning: "Long lizard",
  },
  {
    placeName: "Motuara: Motuara Island",
    hint: "motu: island, ara: path",
    meaning: "Island in the path (of a canoe)",
  },
  {
    placeName: "Motuarohia: Motuarohia Island",
    hint: "motu:island, arohia: reconnoitred",
    meaning: "Reconnoitred island",
  },
  {
    placeName: "Motukairangi",
    hint: "motu: island, kairangi: wonderful, chief, or wandering",
    meaning: "Wonderful island",
  },
  {
    placeName: "Motukaraka",
    hint: "motu: clump of trees, karaka: native tree",
    meaning: "Clump of karaka trees",
  },
  {
    placeName: "Motukaranui",
    hint: "Motu: island, kara: basalt, nui: large",
    meaning: "Island of large basalt stone",
  },
  {
    placeName: "Motukauatiiti",
    hint: "motu: grove of trees, kauati: rubbing stick for firemaking, iti: little",
    meaning: "Little clump of trees used for fire sticks",
  },
  {
    placeName: "Motukauatirahi",
    hint: "motu: grove of trees, kauati: rubbing stick for firemaking, rahi: large",
    meaning: "Large clump of trees used for fire sticks",
  },
  {
    placeName: "Motukauri: Motukauri Island",
    hint: "motu: island, kauri: native tree",
    meaning: "Clump of kauri trees",
  },
  {
    placeName: "Motukiekie",
    hint: "motu: island, kiekie: a native plant",
    meaning: "Kiekie island",
  },
  {
    placeName: "Motukina",
    hint: "motu: island or isolated headland, kina: sea urchin",
    meaning: "Kina island",
  },
  {
    placeName: "Motukiore",
    hint: "motu: island, kiore: native rat",
    meaning: "Rat island",
  },
  {
    placeName: "Motukokopu",
    hint: "motu: island, kokopu: cockabully fish",
    meaning: "Cockabully island",
  },
  {
    placeName: "Motumahanga",
    hint: "motu: island, mahanga: twin",
    meaning: "Twin islands",
  },
  {
    placeName: "Motumaire",
    hint: "motu: island, maire: native tree",
    meaning: "Maire island",
  },
  {
    placeName: "Motumaoho",
    hint: "motu: clump of trees, maoho: to intrude",
    meaning: "Intruding clump of trees",
  },
  {
    placeName: "Motunau",
    hint: "motu: island, nau: scurvy grass",
    meaning: "Scurvy grass island",
  },
  {
    placeName: "Motungarara",
    hint: "motu: island, ngarara: lizard",
    meaning: "Lizard island",
  },
  {
    placeName: "Motunui",
    hint: "motu: island, nui: large",
    meaning: "Large island",
  },
  {
    placeName: "Motuoapa",
    hint: "motu: island or grove of trees, o: of, Apa",
    meaning: "Grove of trees belonging to Apa",
  },
  {
    placeName: "Motu-o-Kura",
    hint: "motu: island, o: of, Kura",
    meaning: "Island of Kura",
  },
  {
    placeName: "Motuopuhi: Motuopuhi Island",
    hint: "motu: island, o: of, Puhi",
    meaning: "Island of Puhi",
  },
  {
    placeName: "Motuoroi: Motuoroi Island",
    hint: "motu: island, o: of, Roi",
    meaning: "Island of Roi",
  },
  {
    placeName: "Motuotaraia",
    hint: "motu: isolated area, o: of, Taraia",
    meaning: "Isolated area of Taraia",
  },
  {
    placeName: "Motupipi",
    hint: "motu: island, pipi: common edible shellfish",
    meaning: "Pipi island",
  },
  {
    placeName: "Motupiu",
    hint: "motu: island, piu: to swing",
    meaning: "Swinging island",
  },
  {
    placeName: "Moturoa",
    hint: "motu: island, roa: long",
    meaning: "Long island",
  },
  {
    placeName: "Motutaiko",
    hint: "motu: island, taiko: petrel",
    meaning: "Island of the black petrel",
  },
  {
    placeName: "Motutapu: Motutapu Island",
    hint: "motu: island, tapu: sacred or forbidden",
    meaning: "Sacred island",
  },
  {
    placeName: "Motutara: Motutara Island",
    hint: "motu: island, tara: gull",
    meaning: "Gull island",
  },
  {
    placeName: "Motutawa",
    hint: "motu: island, tawa: a tree",
    meaning: "Tawa tree island",
  },
  {
    placeName: "Motutere",
    hint: "motu: island, tere: to float",
    meaning: "Floating island",
  },
  {
    placeName: "Muritai",
    hint: "muri: breeze, tai: sea or tide",
    meaning: "Sea breeze",
  },
  {
    placeName: "Muriwai",
    hint: "muri: end, wai: water",
    meaning: "Waters’ end",
  },
  {
    placeName: "Ngakawau",
    hint: "nga: the, kauwau: shags",
    meaning: "The shags",
  },
  {
    placeName: "Ngamatapouri",
    hint: "nga: the, matapouri: black teal",
    meaning: "The black teals",
  },
  {
    placeName: "Ngamoko",
    hint: "nga: the, moko: lizards",
    meaning: "The lizards",
  },
  {
    placeName: "Ngamotu",
    hint: "nga: the, motu: islands",
    meaning: "The islands",
  },
  {
    placeName: "Ngapohatu",
    hint: "nga: the, pohatu: rocks",
    meaning: "The rocks",
  },
  {
    placeName: "Ngapuhi",
    hint: "nga: the, puhi: plumes",
    meaning: "The plumes",
  },
  {
    placeName: "Ngapuna",
    hint: "nga, the, puna: springs",
    meaning: "The springs",
  },
  {
    placeName: "Ngarimu Bay",
    hint: "nga: the, rimu: native tree",
    meaning: "The rimu trees",
  },
  {
    placeName: "Ngaroma",
    hint: "nga: the, roma: currents",
    meaning: "The currents",
  },
  {
    placeName: "Ngaionui",
    hint: "ngaio: a native tree, nui: large or many",
    meaning: "Great ngaio tree",
  },
  {
    placeName: "Ngapuke",
    hint: "nga: the, puke: hills",
    meaning: "The hills",
  },
  {
    placeName: "Ngaroto",
    hint: "nga: the, roto: lakes",
    meaning: "The lakes",
  },
  {
    placeName: "Ngatira",
    hint: "nga, the, tira: parties of travellers",
    meaning: "The parties of travellers",
  },
  {
    placeName: "Ngatuku",
    hint: "nga: the, tuku: ridges of a hill",
    meaning: "The ridges of a hill",
  },
  {
    placeName: "Ngauranga",
    hint: "nga: the, uranga: landing place for canoes",
    meaning: "The landing place for canoes",
  },
  {
    placeName: "Ngaurukehu",
    hint: "nga: the, urukehu: red-haired, fair-skinned Maori",
    meaning: "The red-haired, fair-skinned Maori",
  },
  {
    placeName: "Ngawaka",
    hint: "nga: the, waka: canoes",
    meaning: "The canoes",
  },
  {
    placeName: "Ngawaro",
    hint: "nga: the, waro: burning coals",
    meaning: "The burning coals",
  },
  {
    placeName: "Ngawha",
    hint: "ngawha: hot springs",
    meaning: "The hot springs",
  },
  {
    placeName: "Ngawhatu",
    hint: "nga: the, whatu: eyes",
    meaning: "The eyes",
  },
  {
    placeName: "Ngawi",
    hint: "nga: the, wi: native tussock grass",
    meaning: "The native tussock grass",
  },
  {
    placeName: "Ngutunui",
    hint: "ngutu: lip, nui: big",
    meaning: "Big lips",
  },
  {
    placeName: "Nukumania",
    hint: "nuku: wide extent, mania: plains",
    meaning: "Wide plains",
  },
  {
    placeName: "Nukuroa",
    hint: "nuku: to move, roa: long",
    meaning: "Long travles",
  },
  {
    placeName: "Oamaru",
    hint: "o: place, a: of, Maru",
    meaning: "The place of Maru",
  },
  {
    placeName: "Oaonui",
    hint: "o: place of, ao: clouds: nui: many",
    meaning: "Place of many clouds",
  },
  {
    placeName: "Oaro",
    hint: "o: place of, aro: front",
    meaning: "Front-facing place",
  },
  {
    placeName: "Oeo",
    hint: "o: place of, eo: louse or lice",
    meaning: "Place of lice",
  },
  {
    placeName: "Ohaeawai",
    hint: "o: place of, haeawai: thermal waters",
    meaning: "Place of thermal waters",
  },
  {
    placeName: "Ohakune",
    hint: "o: place of, hakune: to be careful",
    meaning: "Place of care",
  },
  {
    placeName: "Ohangai",
    hint: "o: place of, hangai: opposite, across, or at right angles",
    meaning: "Opposite place",
  },
  {
    placeName: "Ohau",
    hint: "o: place of, Hau",
    meaning: "Place of Hau",
  },
  {
    placeName: "Ohauiti",
    hint: "o: place of, hau: wind, iti: little",
    meaning: "Place of little wind",
  },
  {
    placeName: "Ohaupo",
    hint: "o: place of, hau: wind, po: night",
    meaning: "Place of a breeze at night",
  },
  {
    placeName: "Ohawe",
    hint: "o: place of, hawe: bend in a river or path",
    meaning: "Place of many (river) bends",
  },
  {
    placeName: "Ohikaiti",
    hint: "o: place of, hika: a rite involving certain incantations, iti: small",
    meaning: "The place of small incantations",
  },
  {
    placeName: "Ohikanui",
    hint: "o: place of, hika: a rite involving certain incantations, nui: large",
    meaning: "The place of large incantations",
  },
  {
    placeName: "Ohinekura",
    hint: "Named after Hinekura",
    meaning: "Place of Hinekura",
  },
  {
    placeName: "Ohinepanea",
    hint: "o: place of, Hinepanea: probably a personal name",
    meaning: "Place of Hinepanea",
  },
  {
    placeName: "Ohinerau",
    hint: "o: place of, Hinerau, the goddess of whirlwinds",
    meaning: "Place of Hinerau",
  },
  {
    placeName: "Ohinerehia",
    hint: "o: place of, Hinerehia, a legendary creature or mermaid.",
    meaning: "Place of Hinerehia",
  },
  {
    placeName: "Ohingahape",
    hint: "o: place of, hinga: fall, hape: crooked foot",
    meaning: "Place of a slip causing a crooked foot",
  },
  {
    placeName: "Ohiwa",
    hint: "o: place of, hiwa: watchful or alert",
    meaning: "Place of alertness",
  },
  {
    placeName: "Ohoka",
    hint: "o: place of, hoka: a stake to which a decoy kaka (parrot) was tied. Earlier spelt Hohoka",
    meaning: "Place of the stake for a decoy parrot",
  },
  {
    placeName: "Ohope",
    hint: "o: place of, hope (or ope): main body of an army",
    meaning: "Place of main body of an army",
  },
  {
    placeName: "Ohotu",
    hint: "o: place of, hotu: fifteenth night of the moon",
    meaning: "Place of fifteenth night of the moon",
  },
  {
    placeName: "Ohoukaka",
    hint: "o: place of, hou: feather, kaka: parrot",
    meaning: "Place of the parrot feather",
  },
  {
    placeName: "Ohura",
    hint: "o: place of, hura: to uncover, or uncovered spot",
    meaning: "Place which is uncovered",
  },
  {
    placeName: "Oihi",
    hint: "o: place of, ihi: power or authority",
    meaning: "Place of spiritual power",
  },
  {
    placeName: "Oio",
    hint: "o: place of, io: spur",
    meaning: "Place of the spur",
  },
  {
    placeName: "Okahu",
    hint: "o: place of, Kahu",
    meaning: "Place of Kahu",
  },
  {
    placeName: "Okahukura",
    hint: "o: place of, Kahukura: atua related to rainbow",
    meaning: "Place of Kahukura",
  },
  {
    placeName: "Okahutai",
    hint: "o: place, kahu: garment, tai: tide",
    meaning: "Place of cloaking waters",
  },
  {
    placeName: "Okaihae",
    hint: "o: place of, kai: food, hae: to dislike",
    meaning: "Place of disliked food",
  },
  {
    placeName: "Okaihau",
    hint: "o: place of, kai: to eat or food, hau: wind",
    meaning: "Place of feast of the winds",
  },
  {
    placeName: "Okarae",
    hint: "o: place of, karae: a seabird",
    meaning: "Place of the seabird",
  },
  {
    placeName: "Okarahia",
    hint: "o: place of, karahia: assistance called for in war, in this case in vain",
    meaning: "Place of a call for assistance",
  },
  {
    placeName: "Okareka",
    hint: "o: food for a long journey, kareka: sweet or tasty",
    meaning: "Sweet food for a long journey",
  },
  {
    placeName: "Okarito",
    hint: "o: place of, karito: young shoots of the bulrush or raupo",
    meaning: "Place of young shoots of the bulrush",
  },
  {
    placeName: "Okataina",
    hint: "o: place of, kataina: laughter",
    meaning: "Place of laughter",
  },
  {
    placeName: "Okato",
    hint: "o: place of, Kato: a personal name",
    meaning: "Place of Kato",
  },
  {
    placeName: "Okau",
    hint: "o: place of, kau: to swim",
    meaning: "Place of swimming",
  },
  {
    placeName: "Okauia",
    hint: "o: place of, kauia: articles threaded on string or on a stick",
    meaning: "Place of articles threaded on a stick",
  },
  {
    placeName: "Okawa",
    hint: "o: place of, kawa: bitter",
    meaning: "Place of bitter (water)",
  },
  {
    placeName: "Okehu",
    hint: "o: place of, Kehu: a personal name",
    meaning: "Place of Kehu",
  },
  {
    placeName: "Okere",
    hint: "o: place of, kere: to drift or float",
    meaning: "Place of drifting",
  },
  {
    placeName: "Okete",
    hint: "o: place of, kete: basket",
    meaning: "Place of baskets",
  },
  {
    placeName: "Okiato",
    hint: "o: place of, kiato: a receptacle for holding sacred objects",
    meaning: "Place of receptable for holding sacred objects",
  },
  {
    placeName: "Okiwi",
    hint: "o: place of, kiwi: native bird",
    meaning: "Place of the kiwi",
  },
  {
    placeName: "Okiwi",
    hint: "o: place of, Kiwi",
    meaning: "Place of Kiwi",
  },
  {
    placeName: "Okoki",
    hint: "o: place of, koki: a small canoe",
    meaning: "Place of a small canoe",
  },
  {
    placeName: "Okoroire",
    hint: "o: place of, koroire: ring-necked native duck, now extinct",
    meaning: "Place of the koroire duck",
  },
  {
    placeName: "Okotuku",
    hint: "o: place of, kotuku: white heron",
    meaning: "Place of the white heron",
  },
  {
    placeName: "Okupu",
    hint: "o: place of, kupu: message",
    meaning: "Place of a message",
  },
  {
    placeName: "Okura",
    hint: "o: place, kura: red",
    meaning: "Place of red (clay)",
  },
  {
    placeName: "Okuri",
    hint: "o: place of, kuri: Polynesian dog",
    meaning: "Place of the Polynesian dog",
  },
  {
    placeName: "Omaha",
    hint: "o: place of, maha: pleasure",
    meaning: "Place of pleasure",
  },
  {
    placeName: "Omahu",
    hint: "o: place of, o: provisions for a travelling party, Mahu: a personal name",
    meaning: "The place where Mahu ran out of food.",
  },
  {
    placeName: "Omaio",
    hint: "o: place of, maio: calm",
    meaning: "Place of calm",
  },
  {
    placeName: "Omaka",
    hint: "o: place of, maka: South island form of manga (stream)",
    meaning: "Place of the stream",
  },
  {
    placeName: "Omakau",
    hint: "o: place of, makau: spouse",
    meaning: "Belonging to husband and wife",
  },
  {
    placeName: "Omakere",
    hint: "o: place of, makere: to be lost, abandoned or to die",
    meaning: "Place of abandonment",
  },
  {
    placeName: "Omamari",
    hint: "o: place of, Mamari: a famous canoe that come from Hawaiki.",
    meaning: "Place of Mamari canoe",
  },
  {
    placeName: "Omana",
    hint: "o: place of, Mana: a personal name",
    meaning: "Place of Mana",
  },
  {
    placeName: "Omanaia",
    hint: "o: place of, Manaia: a personal name",
    meaning: "Place of Manaia",
  },
  {
    placeName: "Omanawa",
    hint: "o: place of, Manawa: a personal name",
    meaning: "Place of Manawa",
  },
  {
    placeName: "Omanawanui",
    hint: "o: place of, manawanui: stout-hearted, long-suffering or forbearing",
    meaning: "Place of unswerving dedication",
  },
  {
    placeName: "Omapere",
    hint: "o: place of, mapere: cutty grass",
    meaning: "Place of cutty grass",
  },
  {
    placeName: "Omarama",
    hint: "o: place of, Marama: a personal name",
    meaning: "Place of Marama",
  },
  {
    placeName: "Omaru",
    hint: "o: place of, maru: shelter",
    meaning: "Place of shelter",
  },
  {
    placeName: "Omarumutu",
    hint: "o: place of, maru: shade or shelter, mutu: cut off or terminated",
    meaning: "Place of cut-off shelter",
  },
  {
    placeName: "Omarunui",
    hint: "o: place of, maru: shade, nui: great or much",
    meaning: "Place of great shade",
  },
  {
    placeName: "Omarupapaku",
    hint: "o: place of, maru: shade, papaku: shallow",
    meaning: "Place of shallow shade",
  },
  {
    placeName: "Omaui",
    hint: "o: place of, Maui",
    meaning: "Place of Maui",
  },
  {
    placeName: "Omihi",
    hint: "o: place of, mihi: greeting, also possibly wailing or lamentation",
    meaning: "Place of greeting",
  },
  {
    placeName: "Omimi",
    hint: "o: place o, mimi: urine",
    meaning: "Place of urine",
  },
  {
    placeName: "Omoana",
    hint: "o: place of, moana: ocean",
    meaning: "Place of the sea",
  },
  {
    placeName: "Omoeroa",
    hint: "o: place of, moe: sleep, roa: long",
    meaning: "Place of the long sleep",
  },
  {
    placeName: "Onaeroa",
    hint: "o: place of, naeroa: mosquitoes",
    meaning: "Place of mosquitoes",
  },
  {
    placeName: "Onawe",
    hint: "o: place of, nawe: to set on fire",
    meaning: "Place of arson",
  },
  {
    placeName: "Onehunga",
    hint: "o: place of, nehunga: burial",
    meaning: "Place of burial",
  },
  {
    placeName: "Onekaka",
    hint: "one: sand, kaka: hot",
    meaning: "Hot sand",
  },
  {
    placeName: "Onekawa",
    hint: "one: sand, kawa: bitter or sour",
    meaning: "Salty soil",
  },
  {
    placeName: "Onekeneke",
    hint: "o: place of, nekeneke: to move gradually",
    meaning: "Place of movement",
  },
  {
    placeName: "Onemaewao",
    hint: "one: sand, Maewao: fairy-like beings",
    meaning: "Place of the Maewao (fairy-like beings)",
  },
  {
    placeName: "Oneone",
    hint: "oneone: earth, soil",
    meaning: "Earth",
  },
  {
    placeName: "Onepoto",
    hint: "one: beach, poto: short",
    meaning: "Short beach",
  },
  {
    placeName: "Onepu",
    hint: "one: sand, pu: loose",
    meaning: "Loose sandy soil",
  },
  {
    placeName: "Onepunui",
    hint: "one: sand, pupuni: covered, fill up",
    meaning: "Extensive sand dune",
  },
  {
    placeName: "Onerahi",
    hint: "one: beach, rahi: long or wide",
    meaning: "Long beach",
  },
  {
    placeName: "Oneriri",
    hint: "one: beach, riri: combat, battle, fight, to quarrel or be angry",
    meaning: "Battle beach",
  },
  {
    placeName: "Oneroa",
    hint: "one: sand or beach, roa: long",
    meaning: "Long beach",
  },
  {
    placeName: "Onetahua",
    hint: "one: sand, tahua: heaped up",
    meaning: "Heaped-up sand (sand dunes)",
  },
  {
    placeName: "Onetangi",
    hint: "one: sandy beach, tangi: to weep or to sound",
    meaning: "Beach of weeping",
  },
  {
    placeName: "Onetapu",
    hint: "one: sand or in this case, desert, tapu: sacred or forbidden",
    meaning: "Sacred desert",
  },
  {
    placeName: "Onetea",
    hint: "one: sandy soil, tea: light-coloured",
    meaning: "Light soil",
  },
  {
    placeName: "Onewhero",
    hint: "one: soil, whero: red",
    meaning: "Red soil",
  },
  {
    placeName: "Ongaroto",
    hint: "o: place of, nga: the, roto: lakes",
    meaning: "Place of the lakes",
  },
  {
    placeName: "Ongaruanuku",
    hint: "o: place, nga, the, ruanuku: learned people",
    meaning: "Place of the learned people",
  },
  {
    placeName: "Ongarue",
    hint: "o: place of, ngarue: to shake, as in an earthquake",
    meaning: "Place of shaking",
  },
  {
    placeName: "Ongatoro",
    hint: "o: place of, Ngatoro: personal name",
    meaning: "The place of Ngatoro",
  },
  {
    placeName: "Onoke",
    hint: "o: place of, noke: earthworm",
    meaning: "Place of earthworms",
  },
  {
    placeName: "Onuku",
    hint: "o: place of, nuku: food for a journey",
    meaning: "Place of Nuku",
  },
  {
    placeName: "Opaheke",
    hint: "o: place of, paheke: slip or landslide",
    meaning: "Place of a landslide",
  },
  {
    placeName: "Opaki",
    hint: "o: place of, paki: fine weather",
    meaning: "Place of fine weather",
  },
  {
    placeName: "Opaku",
    hint: "o: place of, paku: to make a sudden sound or report, to resound or to knock",
    meaning: "Place of sudden noise",
  },
  {
    placeName: "Opanuku",
    hint: "o: place of, Panuku: a personal name",
    meaning: "Place of Panuku",
  },
  {
    placeName: "Opapa",
    hint: "o: place of, papa: flat land",
    meaning: "Place of flat land",
  },
  {
    placeName: "Opara",
    hint: "o: place of, para: mud or dust, or a place where sacred ceremonies were performed",
    meaning: "Place of mud",
  },
  {
    placeName: "Oparara",
    hint: "o: place of, parara: to lie open towards",
    meaning: "A place which lies open (to the Tasman Sea)",
  },
  {
    placeName: "Oparau",
    hint: "o: place of, pa: fortified villages, rau: many, or parau: dissembling or falsehood",
    meaning: "Place of many fortified villages, or Place of falsehood",
  },
  {
    placeName: "Oparure",
    hint: "o: place of, parure: to plunder",
    meaning: "Place of plunder",
  },
  {
    placeName: "Opepe",
    hint: "o: place of, pepe: moth",
    meaning: "Place of the moth",
  },
  {
    placeName: "Opihi",
    hint: "o: place of, pihi: springing up (referring to plants)",
    meaning: "Place of springing-up (plants)",
  },
  {
    placeName: "Opiki",
    hint: "o: place of, piki: to climb or ascend",
    meaning: "Place of climbing",
  },
  {
    placeName: "Opito",
    hint: "o: place of, pito: umbilical cord",
    meaning: "Place of umbilical cords",
  },
  {
    placeName: "Opoe",
    hint: "o: place of, Poe",
    meaning: "Place of Poe",
  },
  {
    placeName: "Opoho",
    hint: "o: place of, Poho",
    meaning: "Place of Poho",
  },
  {
    placeName: "Opononi",
    hint: "o: place of, pou: post, noni: crooked",
    meaning: "Place of crooked fishing post",
  },
  {
    placeName: "Opouri",
    hint: "o: place of, pouri: sadness",
    meaning: "Place of sadness",
  },
  {
    placeName: "Opoutama",
    hint: "o: place of, poutama: pattern on the tukutuku panels of a whare",
    meaning: "Place of the poutama pattern",
  },
  {
    placeName: "Opoutere",
    hint: "o: place of, pou: pour out, tere: quickly",
    meaning: "The place (where the sea-waters) swiftly empty out",
  },
  {
    placeName: "Opua",
    hint: "o: place of, pua: flower",
    meaning: "Place of the flower",
  },
  {
    placeName: "Opuke",
    hint: "o: place of, puke: hill",
    meaning: "Place of the hill",
  },
  {
    placeName: "Orakau",
    hint: "o: place of, rakau: trees",
    meaning: "Place of trees",
  },
  {
    placeName: "Orakei",
    hint: "o: place of, rakei: adornment",
    meaning: "Place of adornment",
  },
  {
    placeName: "Orakei Korako",
    hint: "o: place of, rakei: adornment, korako: white",
    meaning: "Place of adornment near the white (sinter flat)",
  },
  {
    placeName: "Oranga",
    hint: "o: place of, ranga: rising ground, hill, sandbank, or fishing ground",
    meaning: "Place of rising ground",
  },
  {
    placeName: "Orari",
    hint: "o: place of, rari: butterfish",
    meaning: "Place of the butterfish",
  },
  {
    placeName: "Oratia",
    hint: "o: place of, ra: sun, tia: persistency",
    meaning: "Place of long-lingering sun",
  },
  {
    placeName: "Orere",
    hint: "o: place of, rere: waterfall",
    meaning: "Place of the waterfall",
  },
  {
    placeName: "Oreti",
    hint: "o: place of, reti: snare",
    meaning: "Place of the snare",
  },
  {
    placeName: "Oringi",
    hint: "o: place of, Ringi",
    meaning: "Place of Ringi",
  },
  {
    placeName: "Orongo",
    hint: "o: place of, rongo: listening-post",
    meaning: "Place of the listening post",
  },
  {
    placeName: "Orongorongo",
    hint: "o: of, rongorongo: a woman’s name",
    meaning: "Place of Rongorongo",
  },
  {
    placeName: "Oropi",
    hint: "o: place of, ropi: to cover up",
    meaning: "Place of covering up",
  },
  {
    placeName: "Oroua",
    hint: "o: place of, roua: dredging for shellfish",
    meaning: "Place of dredging for shellfish",
  },
  {
    placeName: "Oruaiti",
    hint: "o: place of, rua: pit, iti: small",
    meaning: "Place of small pit",
  },
  {
    placeName: "Oruanui",
    hint: "o: place of, rua: pit, nui: large or many",
    meaning: "Place of many pits",
  },
  {
    placeName: "Oruawairua",
    hint: "o: place of, rua: two, wairua: soul or spirit",
    meaning: "Meeting-place of spirits",
  },
  {
    placeName: "Oruawharo",
    hint: "o: place of, rua: hole or pit, wharo: stretched out in full length",
    meaning: "Place of stretched-out pit",
  },
  {
    placeName: "Oruawharo",
    hint: "o: place of, Ruawharo: a personal name",
    meaning: "Place of Ruawharo",
  },
  {
    placeName: "Orukuwai",
    hint: "o: place of, Rukuwai: a personal name",
    meaning: "Place of Rukuwai",
  },
  {
    placeName: "Oruru",
    hint: "o: place of, ruru: morepork",
    meaning: "Place of the morepork",
  },
  {
    placeName: "Orurutumaro",
    hint: "o: place of, ruru: morepork, tu: stand, maro: firm",
    meaning: "Place of the unmoving morepork",
  },
  {
    placeName: "Otahei",
    hint: "o: place of, tahei: a bird snare",
    meaning: "Place of the bird snare",
  },
  {
    placeName: "Otahu",
    hint: "o: place of, Tahu: a personal name",
    meaning: "Place of Tahu",
  },
  {
    placeName: "Otahuhu",
    hint: "o: place of tahuhu: ridgepole of a house",
    meaning: "Place of the ridgepole of a house",
  },
  {
    placeName: "Otaihanga",
    hint: "o: place of: Taihanga: a personal name",
    meaning: "Place of Taihanga",
  },
  {
    placeName: "Otaika",
    hint: "o: place of, taika: to lie in a heap",
    meaning: "Place of lying in a heap",
  },
  {
    placeName: "Otakapuneke",
    hint: "o: place of, Takapuneke: a personal name",
    meaning: "Place of Takapuneke",
  },
  {
    placeName: "Otakaro",
    hint: "o: place of, Takaro: a personal name",
    meaning: "Place of Takaro",
  },
  {
    placeName: "Otakeho",
    hint: "o: place of, Takeho: a personal name",
    meaning: "Place of Takeho",
  },
  {
    placeName: "Otaki",
    hint: "o: place of, taki: stick in",
    meaning: "Place of sticking a staff into the ground",
  },
  {
    placeName: "Otakiri",
    hint: "o: place of, takiri: loosening or making free from tapu",
    meaning: "Place of loosening or freeing from tapu",
  },
  {
    placeName: "Otakou",
    hint: "o: place of, takou: red ochre",
    meaning: "Place of red ochre, or place of Takou",
  },
  {
    placeName: "Otama",
    hint: "o: place of,  Tama: a personal name",
    meaning: "Place of Tama",
  },
  {
    placeName: "Otamakura",
    hint: "o: place of, tama: son, kura: ornamented with red feathers",
    meaning: "Place of boy ornamented with red feathers",
  },
  {
    placeName: "Otamarakau",
    hint: "o: place of, tama: young men, rakau: weapons",
    meaning: "Place of young warriors",
  },
  {
    placeName: "Otamarau",
    hint: "o: place of, Tamarau: a personal name",
    meaning: "Place of Tamarau",
  },
  {
    placeName: "Otamatea",
    hint: "o: place of, Tamatea: a personal name",
    meaning: "Place of Tamatea",
  },
  {
    placeName: "Otane",
    hint: "o: place of, tane: man",
    meaning: "Place of a man",
  },
  {
    placeName: "Otangarei",
    hint: "o: place of, tanga: row or company of people, rei: leaping",
    meaning: "Place of group of people leaping",
  },
  {
    placeName: "Otangaroa",
    hint: "o: place of, Tangaroa: a personal name, or the god of the ocean",
    meaning: "Place of Tangaroa",
  },
  {
    placeName: "Otangihaku",
    hint: "o: place of, tangi: to sound or weep, haku: to murmur",
    meaning: "Place of murmured weeping",
  },
  {
    placeName: "Otangimoana",
    hint: "o: place of, tangi: weeping, moana: waters",
    meaning: "Place of weeping waters",
  },
  {
    placeName: "Otangiwai",
    hint: "o: place of, tangi: weeping, wai: waters",
    meaning: "Place of weeping waters",
  },
  {
    placeName: "Otapara",
    hint: "o: place of, tapara: desire, or wooden digging implement",
    meaning: "Place of digging implement",
  },
  {
    placeName: "Otapiri",
    hint: "o: place of, tapiri: a vigorous shoot growing beside the main stem of a plant",
    meaning: "Place of vigorous growing shoot",
  },
  {
    placeName: "Otara",
    hint: "o: place of, tara: peak",
    meaning: "Place of the peak",
  },
  {
    placeName: "Otara",
    hint: "o: place of, Tara: a personal name",
    meaning: "Place of Tara",
  },
  {
    placeName: "Otaraia",
    hint: "o: place of, Taraia: a personal name",
    meaning: "Place of Taraia",
  },
  {
    placeName: "Otaranga",
    hint: "o: place of, taranga: separation",
    meaning: "Place of separation",
  },
  {
    placeName: "Otatara",
    hint: "o: place of, tatara: to untie or loosen",
    meaning: "Place of loosening",
  },
  {
    placeName: "Otauaki",
    hint: "o: place of, tauaki: to show or expose",
    meaning: "Place of exposure",
  },
  {
    placeName: "Otautau",
    hint: "o: place of, tautau: greenstone ear pendant with a straight shank curved at the lower end",
    meaning: "Place of ear pendant",
  },
  {
    placeName: "Otawewe",
    hint: "o: place of: tawewe: weighted net",
    meaning: "Place of a weighted net",
  },
  {
    placeName: "Otawhao",
    hint: "o: place of, tawhao: fragments, refuse or brushwood",
    meaning: "Place of brushwood scrub",
  },
  {
    placeName: "Otehei",
    hint: "o: place of, te: the, hei: neck ornament",
    meaning: "Place of the neck ornament",
  },
  {
    placeName: "Otehiwai",
    hint: "o: place of, te: the, hiwai: springing up",
    meaning: "Place of springing up of water",
  },
  {
    placeName: "Otekura",
    hint: "o: place of, te: the, kura: red feather",
    meaning: "Place of the red feather",
  },
  {
    placeName: "Otepopo",
    hint: "o: place of, te: the, popo: decayed wood",
    meaning: "Place of the decayed wood",
  },
  {
    placeName: "Otipua",
    hint: "o: place of, tipua: enchanted object or person",
    meaning: "Place of supernatural creature",
  },
  {
    placeName: "Otiria",
    hint: "o: place of, tiria: to be planted",
    meaning: "Place of planting",
  },
  {
    placeName: "Otiwha",
    hint: "o: place of: tiwha: a patch of shell or wood to cover a hole in a kelp bag",
    meaning: "Place of patch",
  },
  {
    placeName: "Otoatahi",
    hint: "o: place of, toa: warrior, tahi: one",
    meaning: "Place of a single warrior",
  },
  {
    placeName: "Otohi",
    hint: "o: place of, tohi: ritual ceremony",
    meaning: "Place of ceremony",
  },
  {
    placeName: "Otoko",
    hint: "o: place of, toko: stick or staff",
    meaning: "Place of the staff",
  },
  {
    placeName: "Otonga",
    hint: "o: place of, tonga: south, or south wind",
    meaning: "Place of the south wind",
  },
  {
    placeName: "Otoroa",
    hint: "o: place of, toroa: albatross",
    meaning: "Place of the albatross",
  },
  {
    placeName: "Otukapuarangai",
    hint: "o: place of, tu: to stand, kapua: cloud, rangi: sky",
    meaning: "Place of the standing cloud in the sky",
  },
  {
    placeName: "Otumatua",
    hint: "o: place of, tu: stand, matua: parent",
    meaning: "Where the elder stands",
  },
  {
    placeName: "Otumoetai",
    hint: "o: place of, tu: to stand, moe: to sleep, tai: tide",
    meaning: "Place where the tide stands still as if asleep",
  },
  {
    placeName: "Otupaopao",
    hint: "o: place of, tu: to stand, paopao: to break by repeated strokes",
    meaning: "Place of standing and breaking",
  },
  {
    placeName: "Oturaki",
    hint: "o: place of, tu: to stand, raki (rangi): sky",
    meaning: "Place of standing in the sky",
  },
  {
    placeName: "Oturehua",
    hint: "o: place of, tu: to stand, Rehua: the star Antares",
    meaning: "Place where the summer star stands still",
  },
  {
    placeName: "Oturoto",
    hint: "o: place of, Turoto: a personal name",
    meaning: "Place of Turoto",
  },
  {
    placeName: "Oturu",
    hint: "o: place of, Turu: a personal name",
    meaning: "Place of Turu",
  },
  {
    placeName: "Oue",
    hint: "o: place of, Ue: a personal name",
    meaning: "Place of Ue",
  },
  {
    placeName: "Oueroa",
    hint: "o: place of, ue: species of flax, roa: long",
    meaning: "Place of long flax",
  },
  {
    placeName: "Oui",
    hint: "o: place of, ui: to ask",
    meaning: "Place of questioning",
  },
  {
    placeName: "Ouruhia",
    hint: "o: place of, uruhia: to be attacked",
    meaning: "Place of being attacked",
  },
  {
    placeName: "Owahanga",
    hint: "o: place of, wahanga: burden",
    meaning: "Place of burden",
  },
  {
    placeName: "Owairaka",
    hint: "o: place of, Wairaka, a chieftainess of repute",
    meaning: "Place of Wairaka",
  },
  {
    placeName: "Owairaka",
    hint: "o: place of, wai: stream, Raka: an ancestor",
    meaning: "Place of the stream of Raka",
  },
  {
    placeName: "Owaka",
    hint: "o: place of, waka: canoe or wooden trough",
    meaning: "Place of a canoe",
  },
  {
    placeName: "Oweka",
    hint: "o: place of, weka: wood-hen",
    meaning: "Place of the weka",
  },
  {
    placeName: "Owhango",
    hint: "o: place of, whango: hoarse voice or wheezy sound",
    meaning: "Place of wheezy noises",
  },
  {
    placeName: "Owhata",
    hint: "o: place of, whata: elevated stage to protect food from bush rats, and for drying",
    meaning: "Place of the elevated stage",
  },
  {
    placeName: "Owhawhe",
    hint: "o: place of, whawhe: put round",
    meaning: "The place encircled",
  },
  {
    placeName: "Owhiro",
    hint: "o: place of, Whiro",
    meaning: "Place of Whiro",
  },
  {
    placeName: "Paehinahina",
    hint: "pae: ridge, headland, hinahina: a small tree also knwn as mahoe",
    meaning: "Hinahina ridge",
  },
  {
    placeName: "Paekakariki",
    hint: "pae: perch or snare, kakariki: parakeet (Cyanoramphus novaezelandiae)",
    meaning: "Parakeet perch",
  },
  {
    placeName: "Paekoka",
    hint: "pae: ridge, koka: an unidentified species of seabird that was caught here",
    meaning: "Seabird ridge",
  },
  {
    placeName: "Paeoterangi",
    hint: "pae: perching place, o: of, te: the, rangi: sky",
    meaning: "Footstool of the sky",
  },
  {
    placeName: "Paerata",
    hint: "pae: ridge, rata: native tree",
    meaning: "Ridge of the rata tree",
  },
  {
    placeName: "Paerau",
    hint: "pae: ridges or steps, rau: many or a hundred",
    meaning: "Many ridges",
  },
  {
    placeName: "Paeroa",
    hint: "pae: ridge of hills, roa: long",
    meaning: "Long ridge of hills",
  },
  {
    placeName: "Paetiki",
    hint: "pae: ridge, tiki: carved wooden or stone figure",
    meaning: "Ridge of carved figure",
  },
  {
    placeName: "Pakirarahi",
    hint: "pakira: bald, rahi: big",
    meaning: "Large bald dome",
  },
  {
    placeName: "Papahinau",
    hint: "papa: flat, hinau: native tree",
    meaning: "Hinau flats",
  },
  {
    placeName: "Papaiti",
    hint: "papa: flat, iti: small",
    meaning: "Small flats",
  },
  {
    placeName: "Papakaio",
    hint: "papa: flat, kaio: native tree (South Island form of ngaio)",
    meaning: "Kaio tree flats",
  },
  {
    placeName: "Papakura",
    hint: "papa: flat, kura: red",
    meaning: "Red flats",
  },
  {
    placeName: "Papamoa",
    hint: "papa: flat, moa: raisted mounds for growing vegetables",
    meaning: "Raised mounds for growing vegetables on the flats",
  },
  {
    placeName: "Papanui",
    hint: "papa: flat, nui: large",
    meaning: "Large flat",
  },
  {
    placeName: "Paparangi",
    hint: "papa: flat, rangi: sky",
    meaning: "Flat sky",
  },
  {
    placeName: "Paparata",
    hint: "papa: flat, rata: native tree",
    meaning: "Rata tree flats",
  },
  {
    placeName: "Paparimu",
    hint: "papa: flat, rimu: native tree",
    meaning: "Rimu tree flats",
  },
  {
    placeName: "Paparoa",
    hint: "papa: flat, roa: long",
    meaning: "Long flats",
  },
  {
    placeName: "Papatawa",
    hint: "papa: flat, tawa: native tree",
    meaning: "Tawa tree flats",
  },
  {
    placeName: "Papatawhara",
    hint: "papa: ground, tawhara: kiekie flowers",
    meaning: "Kiekie flower flats",
  },
  {
    placeName: "Papatoetoe",
    hint: "papa: flat, toetoe: native grass",
    meaning: "Toetoe grass flat",
  },
  {
    placeName: "Papatotara",
    hint: "papa: flat, totara: native tree",
    meaning: "Totara flat",
  },
  {
    placeName: "Papatowai",
    hint: "papa: flat, towai: native tree",
    meaning: "Towai tree flat",
  },
  {
    placeName: "Papawai",
    hint: "papa: flat, wai: water",
    meaning: "Inundated land",
  },
  {
    placeName: "Pareranui",
    hint: "parera: grey duck (Anas superciliosa): nui: large",
    meaning: "Large grey duck",
  },
  {
    placeName: "Paretai",
    hint: "pare: divert, tai: the tide",
    meaning: "River bank",
  },
  {
    placeName: "Paretetaitonga",
    hint: "para: dust, te: the, tai: sea, tonga: south",
    meaning: "The dust from the south sea",
  },
  {
    placeName: "Parewanui",
    hint: "pa: fortified village, rewa: swamp, nui: large",
    meaning: "Fortified village in a large swamp",
  },
  {
    placeName: "Pari-nui-te-ra",
    hint: "pari: cliff, nui: great, te: the, ra: sun",
    meaning: "Great cliff in the sun",
  },
  {
    placeName: "Pariparitetai",
    hint: "paripari: cliffs, te: the, tai: coast",
    meaning: "Cliffs on the coast",
  },
  {
    placeName: "Pariroa",
    hint: "pari: cliff, roa: long",
    meaning: "Long cliff",
  },
  {
    placeName: "Paroa",
    hint: "pa: fortified village, roa: long, broad",
    meaning: "Broad fortified village",
  },
  {
    placeName: "Paruroa",
    hint: "paru: mud, roa: long",
    meaning: "Long mud",
  },
  {
    placeName: "Paturoa",
    hint: "patu: to strike or kill, roa: long",
    meaning: "Much hitting",
  },
  {
    placeName: "Pauanui",
    hint: "paua: shellfish, nui: many or large",
    meaning: "Many or large paua",
  },
  {
    placeName: "Pikowai",
    hint: "piko: corner or bend, wai: stream",
    meaning: "Bend in the stream",
  },
  {
    placeName: "Pipiroa",
    hint: "pipi: cockle, roa: long",
    meaning: "Long pipi",
  },
  {
    placeName: "Piroa",
    hint: "pi: headwaters, roa: long",
    meaning: "Long headwaters",
  },
  {
    placeName: "Pohatunui",
    hint: "pohatu: rock, nui: great",
    meaning: "Great rock",
  },
  {
    placeName: "Pohaturoa",
    hint: "pohatu: rock, roa: tall",
    meaning: "Tall rock",
  },
  {
    placeName: "Pohonui",
    hint: "poho: stomach, nui: big",
    meaning: "Big stomach",
  },
  {
    placeName: "Pohuenui",
    hint: "pohue: convolvulus or other climbing plants, nui: many",
    meaning: "Large climbing plant",
  },
  {
    placeName: "Pongaroa",
    hint: "ponga: tree fern, roa: tall or long",
    meaning: "Tall tree fern",
  },
  {
    placeName: "Ponui",
    hint: "po: night, nui: long",
    meaning: "Long night",
  },
  {
    placeName: "Puatai",
    hint: "pua: foam, tai: sea",
    meaning: "Foam of the sea",
  },
  {
    placeName: "Pukearuhe",
    hint: "puke: hill, aruhe: bitter",
    meaning: "Hill of bitterness",
  },
  {
    placeName: "Puhinui",
    hint: "puhi: plume at the bow of a war canoe, nui: large",
    meaning: "Large plume at bow of war canoe",
  },
  {
    placeName: "Pukeatua",
    hint: "puke: hill, atua: god",
    meaning: "Hill of the deity",
  },
  {
    placeName: "Pukehinau",
    hint: "puke: hill, hinau: a native tree",
    meaning: "Hinau tree hill",
  },
  {
    placeName: "Puke-hiwi-tahi",
    hint: "puke: hill, hiwi: ridge, tahi: one",
    meaning: "One-ridge hill",
  },
  {
    placeName: "Pukehuhu",
    hint: "puke: hill, huhu: grub",
    meaning: "Huhu grub hill",
  },
  {
    placeName: "Pukehuia",
    hint: "puke: hill, huia: cluster",
    meaning: "Cluster of hills",
  },
  {
    placeName: "Pukeiti",
    hint: "puke: hill, ti: cabbage tree",
    meaning: "Cabbage tree hill",
  },
  {
    placeName: "Pukekahu",
    hint: "puke: hill, kahu: hawk",
    meaning: "Hill of the hawk",
  },
  {
    placeName: "Pukekaikiore",
    hint: "puke: hill, kai: to eat, kiore: rat",
    meaning: "Hill of the eaten rat",
  },
  {
    placeName: "Pukekakariki",
    hint: "puke: hill, kakariki: parakeet",
    meaning: "Hill of the parakeet",
  },
  {
    placeName: "Pukekapia",
    hint: "puke: hill, kapia: kauri gum",
    meaning: "Kauri gum hill",
  },
  {
    placeName: "Pukekoikoi",
    hint: "puke: hill, koikoi: pointed",
    meaning: "Pointed hill",
  },
  {
    placeName: "Pukekoma",
    hint: "puke: hill, koma: light-coloured or bright, or a kind of stone",
    meaning: "Light-coloured hill",
  },
  {
    placeName: "Pukekowhai",
    hint: "puke: hill, kowhai: native tree",
    meaning: "Kowhai tree hill",
  },
  {
    placeName: "Pukekura",
    hint: "puke: hill, kura: red",
    meaning: "Red hill",
  },
  {
    placeName: "Puke-maeroero",
    hint: "puke: hill, maeroero: ogres of the forest",
    meaning: "Hill of ogres",
  },
  {
    placeName: "Pukemaori",
    hint: "puke: hill, maori: Maori",
    meaning: "Maori hill",
  },
  {
    placeName: "Pukemarama",
    hint: "puke: hill, marama: moon",
    meaning: "Moon hill",
  },
  {
    placeName: "Pukematawai",
    hint: "puke: hill: matawai: source of streams",
    meaning: "Hill is source of stream",
  },
  {
    placeName: "Pukematekeo",
    hint: "puke: hill, mate: end, keo: peak",
    meaning: "The hill at the end of the range",
  },
  {
    placeName: "Pukemiro",
    hint: "puke: hill, miro: native tree",
    meaning: "Miro tree hill",
  },
  {
    placeName: "Pukemoko",
    hint: "puke: hill, moko: tattoo",
    meaning: "Hill of tattoos",
  },
  {
    placeName: "Pukemoremore",
    hint: "puke: hill, more, a freshwater fish",
    meaning: "Hill of many pinbellied freshwater fish",
  },
  {
    placeName: "Pukengahu",
    hint: "puke: hill, ngahu: point or promontory",
    meaning: "Hill",
  },
  {
    placeName: "Pukenui",
    hint: "puke: hill, nui: large",
    meaning: "Large hill",
  },
  {
    placeName: "Pukeokahu",
    hint: "puke: hill, o: of, Kahu: personal name",
    meaning: "Hill of Kahu",
  },
  {
    placeName: "Puke-o-Tara",
    hint: "puke: hill, o: of, Tara",
    meaning: "Hill of Tara",
  },
  {
    placeName: "Pukepiripiri",
    hint: "puke: hill, piripiri: the ‘biddy-bid’ (Acaena anserinifolia)",
    meaning: "‘Biddy-bid’ hill",
  },
  {
    placeName: "Pukepito",
    hint: "puke: hill, pito: end",
    meaning: "Hill end",
  },
  {
    placeName: "Pukepohatu",
    hint: "puke: hill, pohatu: rock",
    meaning: "Rock hill",
  },
  {
    placeName: "Pukepoto",
    hint: "puke: hill, poto: dark blue earth present in a nearby swamp, used as a pigment",
    meaning: "Dark blue pigment hill",
  },
  {
    placeName: "Pukerangi",
    hint: "puke: hill, rangi: sky",
    meaning: "Sky hill",
  },
  {
    placeName: "Pukerangiora",
    hint: "puke: hill, rangiora: native shrub",
    meaning: "Rangiora shrub hill",
  },
  {
    placeName: "Pukerau",
    hint: "puke: hills, rau: a leaf, a hundred or many",
    meaning: "Hill of leaves",
  },
  {
    placeName: "Pukerauaruhe",
    hint: "puke: hill, rauaruhe: bracken fronds",
    meaning: "Hill of bracken fronds",
  },
  {
    placeName: "Pukerimu",
    hint: "puke: hill, rimu: native tree",
    meaning: "Rimu tree hill",
  },
  {
    placeName: "Pukeora",
    hint: "puke: hill, ora: well or in good health",
    meaning: "Hill of good health",
  },
  {
    placeName: "Pukeroa",
    hint: "puke: hill, roa: long or tall",
    meaning: "Tall hill",
  },
  {
    placeName: "Pukerua",
    hint: "puke: hill, rua: two",
    meaning: "Two hills",
  },
  {
    placeName: "Puketaha",
    hint: "puke: hill, taha: side",
    meaning: "Hill side",
  },
  {
    placeName: "Puketapapa",
    hint: "puke: hill, tapapa: edge or flat-topped",
    meaning: "Flat-topped hill",
  },
  {
    placeName: "Puketapu",
    hint: "puke: hill, tapu: sacred or forbidden",
    meaning: "Sacred hill",
  },
  {
    placeName: "Puketawa",
    hint: "puke: hill, tawa: native tree",
    meaning: "Tawa tree hill",
  },
  {
    placeName: "Puketi",
    hint: "puke: hill, ti: cabbage tree",
    meaning: "Cabbage tree hill",
  },
  {
    placeName: "Puketihi",
    hint: "puke: hill, tihi: top or summit",
    meaning: "Summit of the hill",
  },
  {
    placeName: "Puketiro",
    hint: "puke: hill, tiro: view",
    meaning: "View from the hill",
  },
  {
    placeName: "Puke-tirohia-marama",
    hint: "puke: hill, tirohia: to survey or view, marama: moon",
    meaning: "Hill giving a view of the moon",
  },
  {
    placeName: "Puketoi",
    hint: "puke: hill, toi: summit",
    meaning: "Summit of the hill",
  },
  {
    placeName: "Puketotara",
    hint: "puke: hill, totara tree",
    meaning: "Totara hill",
  },
  {
    placeName: "Puketui",
    hint: "puke: hill, tui: native bird",
    meaning: "Tui hill",
  },
  {
    placeName: "Puketuroto",
    hint: "puke: hill, tu: to stand, roto: lake",
    meaning: "Hillside beside the lake",
  },
  {
    placeName: "Puketutu",
    hint: "puke: hill, tutu: native shrub (Coriaria arborea)",
    meaning: "Tutu shrub hill",
  },
  {
    placeName: "Pukewhau",
    hint: "puke: hill, whau: a native tree",
    meaning: "Whau tree hill",
  },
  {
    placeName: "Pukewhero",
    hint: "puke: hill, whero: red",
    meaning: "Red hill",
  },
  {
    placeName: "Pukurahi",
    hint: "puku: belly, rahi: large",
    meaning: "Large belly",
  },
  {
    placeName: "Rahotu",
    hint: "ra: sun, hotu: to long for",
    meaning: "Long for the sun",
  },
  {
    placeName: "Rakaunui",
    hint: "rakau: tree, nui: many or large",
    meaning: "Many trees",
  },
  {
    placeName: "Rakauroa",
    hint: "rakau: tree, roa: tall",
    meaning: "Tall trees",
  },
  {
    placeName: "Ramaroa",
    hint: "rama: torch, roa: long",
    meaning: "Long torch",
  },
  {
    placeName: "Ranganui",
    hint: "ranga: parade, nui: large",
    meaning: "Large parade",
  },
  {
    placeName: "Rangi-roa",
    hint: "rangi: sky, roa: long",
    meaning: "Long sky",
  },
  {
    placeName: "Ranui",
    hint: "ra: sun, nui: many",
    meaning: "Plenty of sunshine",
  },
  {
    placeName: "Rapanui",
    hint: "rapa: there are many meanings of rapa, including to seek, nui: many",
    meaning: "Much seeking",
  },
  {
    placeName: "Rarangi-roa",
    hint: "rarangi: line or row, roa: long",
    meaning: "Long line",
  },
  {
    placeName: "Raroa",
    hint: "ra, day, roa: long",
    meaning: "Long day",
  },
  {
    placeName: "Ratanui",
    hint: "rata: native tree, nui: large or many",
    meaning: "Many or large rata trees",
  },
  {
    placeName: "Rawhitiroa",
    hint: "ra: sun, whiti: to shine, roa: long",
    meaning: "Long-shining sun",
  },
  {
    placeName: "Reporoa",
    hint: "repo: swamp, roa: long or wide",
    meaning: "Long swamp",
  },
  {
    placeName: "Rimunui",
    hint: "rimu: native tree, nui: many or large",
    meaning: "Many or large rimu trees",
  },
  {
    placeName: "Rongotai",
    hint: "rongo: sound, tai: sea",
    meaning: "Sound of the sea",
  },
  {
    placeName: "Rotoaira",
    hint: "roto: lake, a: of, Ira",
    meaning: "Lake of Ira",
  },
  {
    placeName: "Roto-a-Tara",
    hint: "roto: lake, a: of, Tara",
    meaning: "Lake of Tara",
  },
  {
    placeName: "Rotoehu",
    hint: "roto: lake, ehu: turbid",
    meaning: "Turbid lake",
  },
  {
    placeName: "Rotoiti",
    hint: "roto: lake, iti: small",
    meaning: "Little lake",
  },
  {
    placeName: "Rotokakahi",
    hint: "roto: lake, kakahi: freshwater shellfish",
    meaning: "Freshwater shellfish lake",
  },
  {
    placeName: "Rotokauri",
    hint: "roto: lake, kauri: native tree",
    meaning: "Kauri tree lake",
  },
  {
    placeName: "Rotokawa",
    hint: "roto: lake, kawa, bitter",
    meaning: "Bitter lake",
  },
  {
    placeName: "Rotokawau",
    hint: "roto: lake, kawau: shag",
    meaning: "Shag lake",
  },
  {
    placeName: "Rotokohu",
    hint: "roto: lake, kohu: mist",
    meaning: "Misty lake",
  },
  {
    placeName: "Rotokura",
    hint: "roto: lake, kura: red",
    meaning: "Red glow of sunset on the water",
  },
  {
    placeName: "Rotoma",
    hint: "roto: lake, ma: clear",
    meaning: "Clear lake",
  },
  {
    placeName: "Rotomahana",
    hint: "roto: lake, mahana: warm",
    meaning: "Warm lake",
  },
  {
    placeName: "Rotomanu",
    hint: "roto: lake, manu: bird",
    meaning: "Bird lake",
  },
  {
    placeName: "Rotongaro",
    hint: "roto: lake, ngaro: hidden or lost",
    meaning: "Hidden lake",
  },
  {
    placeName: "Roto-o-rangi",
    hint: "roto: lake, o: of, rangi: sky",
    meaning: "Lake of the sky",
  },
  {
    placeName: "Rotoroa",
    hint: "roto: lake, roa: long",
    meaning: "Long lake",
  },
  {
    placeName: "Rotorua",
    hint: "roto: lake, rua: two",
    meaning: "Two lakes",
  },
  {
    placeName: "Rototuna",
    hint: "roto: lake, tuna: eel",
    meaning: "Eel lake",
  },
  {
    placeName: "Rotowaro",
    hint: "roto: lake, waro: coal or glowing embers",
    meaning: "Lake of glowing embers",
  },
  {
    placeName: "Ruapuke Island",
    hint: "rua: two, puke: hills",
    meaning: "Two hill island",
  },
  {
    placeName: "Ruaroa",
    hint: "rua: cave or pit, roa: long",
    meaning: "Long pit",
  },
  {
    placeName: "Ruawai",
    hint: "rua: hole, wai: water",
    meaning: "Watery hole",
  },
  {
    placeName: "Rukumoana",
    hint: "ruku: to dive, moana: sea, or deep pool in river",
    meaning: "Diving into the pool",
  },
  {
    placeName: "Tahaenui",
    hint: "tahae: thief, nui: big or many",
    meaning: "Many thieves",
  },
  {
    placeName: "Taharoa",
    hint: "taha: calabash, gourd, roa: long",
    meaning: "Long calabash",
  },
  {
    placeName: "Tahawai",
    hint: "taha: side, wai: water",
    meaning: "Seaside",
  },
  {
    placeName: "Tahekereroa",
    hint: "taheke: waterfall, roa: high or long",
    meaning: "High waterfall",
  },
  {
    placeName: "Tahoraiti",
    hint: "tahora: forest clearing, iti: little",
    meaning: "Little forest clearing",
  },
  {
    placeName: "Tahuhunui",
    hint: "tahuhu: ridge-pole, nui: large",
    meaning: "Large ridge-pole",
  },
  {
    placeName: "Tahunanui",
    hint: "tahuna: shoal or sandbank, nui: large",
    meaning: "Large sandbank",
  },
  {
    placeName: "Taiharuru",
    hint: "tai: sea, haruru: resounding",
    meaning: "Resounding sea",
  },
  {
    placeName: "Taikorea",
    hint: "tai: sea, korea: a small canoe",
    meaning: "Tide of the small canoe",
  },
  {
    placeName: "Taimate",
    hint: "tai: tide, mate: dead",
    meaning: "A salt pool blocked off from the tide",
  },
  {
    placeName: "Tainui",
    hint: "tai: tide, nui: great",
    meaning: "Great tide",
  },
  {
    placeName: "Tairua",
    hint: "tai: tides, rua: two",
    meaning: "Two tides",
  },
  {
    placeName: "Taitapu",
    hint: "tai: coast, tapu: sacred",
    meaning: "Sacred coast",
  },
  {
    placeName: "Taitimu",
    hint: "tai: tide, timu: to ebb",
    meaning: "Ebb of the tide",
  },
  {
    placeName: "Taitomo",
    hint: "tai: sea, tomo: shaft",
    meaning: "Shaft of the sea",
  },
  {
    placeName: "Takahiwai",
    hint: "takahi: to trample, wai: water",
    meaning: "Trample water",
  },
  {
    placeName: "Takutai",
    hint: "taku: coast, tai: sea",
    meaning: "Sea coast",
  },
  {
    placeName: "Tangimoana",
    hint: "tangi: to weep or lament, moana: ocean",
    meaning: "Weeping sea",
  },
  {
    placeName: "Tangiwai",
    hint: "tangi: to cry or weep, wai: water",
    meaning: "Weeping water",
  },
  {
    placeName: "Taonui",
    hint: "tao: spear, nui: many",
    meaning: "Large spear",
  },
  {
    placeName: "Taoroa",
    hint: "tao: spear, roa: long",
    meaning: "Long spear",
  },
  {
    placeName: "Tapuwaeroa",
    hint: "tapuwae: footsteps, roa: long",
    meaning: "Long footsteps",
  },
  {
    placeName: "Tatuanui",
    hint: "tatua: girdle, nui: large or many",
    meaning: "Large girdle",
  },
  {
    placeName: "Taumarunui",
    hint: "taumaru: screen, nui: large",
    meaning: "Large screen",
  },
  {
    placeName: "Taumatawhakatangihanga koauauotamatea pokaiwhenuakitanatahu",
    hint: "taumata: brow of a hill, whakatangihanga: place of sounding or playing, koauau: flute, o: of, Tamatea-pokai-whenua, ki: to, tana: his, tahu: lover",
    meaning:
      "The brow of the hill where Tamatea who travelled all over the land played his flute to his lover",
  },
  {
    placeName: "Taumoana",
    hint: "tau: to come to rest (and many other meanings), moana: sea",
    meaning: "Come to rest at sea",
  },
  {
    placeName: "Tauranganui",
    hint: "taura: landing places, nui: many, great",
    meaning: "Great landing place",
  },
  {
    placeName: "Tauraroa",
    hint: "taura: rope, roa: long",
    meaning: "Long rope",
  },
  {
    placeName: "Tawanui",
    hint: "tawa: native tree (Beilschmiedia tawa), nui: many",
    meaning: "Great tawa tree",
  },
  {
    placeName: "Tawharanui",
    hint: "tawhara: flower of the kiekie (Freycinetia banksii), nui: many",
    meaning: "Many flowers of the kiekie",
  },
  {
    placeName: "Te Araroa",
    hint: "te: the, ara: path, roa: long",
    meaning: "The long path",
  },
  {
    placeName: "Te Awa",
    hint: "te: the, awa: valley or channel",
    meaning: "The valley",
  },
  {
    placeName: "Te Awahou",
    hint: "te: the, awa: river, hou: new",
    meaning: "The new river",
  },
  {
    placeName: "Te Awaiti",
    hint: "te: the, awa: stream, iti: little",
    meaning: "The little stream",
  },
  {
    placeName: "Te Awa-maeroero",
    hint: "te: the, awa: river, maeroero: ogres of the South Island forests",
    meaning: "The river of the ogres",
  },
  {
    placeName: "Te Awamutu",
    hint: "te: the, awa: river, mutu: cut off or ended",
    meaning: "The ended river",
  },
  {
    placeName: "Te Awa-parahi",
    hint: "te: the, awa: valley, parahi: steep",
    meaning: "The steep valley",
  },
  {
    placeName: "Te Awaure",
    hint: "te: the, awa: river, ure: male",
    meaning: "The male river",
  },
  {
    placeName: "Te Haehaenga",
    hint: "te: the, haehaenga: torn or lacerated",
    meaning: "The laceration",
  },
  {
    placeName: "Te Hana",
    hint: "te: the, hana: glow or gleam",
    meaning: "The glow",
  },
  {
    placeName: "Te Hapara",
    hint: "te: the, hapara: dawn",
    meaning: "The dawn",
  },
  {
    placeName: "Te Haparangi",
    hint: "te: the, haparangi",
    meaning: "The circumstance of shouting",
  },
  {
    placeName: "Te Hapua",
    hint: "te: the, hapua: lagoon",
    meaning: "The lagoon",
  },
  {
    placeName: "Te Haroto",
    hint: "te: the, haroto: pool",
    meaning: "The pool",
  },
  {
    placeName: "Te Henga",
    hint: "te: the, henga: food for a work party",
    meaning: "The food for a work party",
  },
  {
    placeName: "Te Henui",
    hint: "te: the, he: amongst its several meanings are wrong, erring, error, difficulty, trouble, nui: big",
    meaning: "The great mistake",
  },
  {
    placeName: "Te Ika-a-Maui",
    hint: "te: the, ika: fish, a: of, Maui: a personal name",
    meaning: "The fish of Maui",
  },
  {
    placeName: "Te Ika-a-Ranganui",
    hint: "te: the, ika: fish, a: of, Ranganui: a personal name",
    meaning: "The fish of Ranganui",
  },
  {
    placeName: "Te Horo",
    hint: "te: the, horo: landslide",
    meaning: "The landslide",
  },
  {
    placeName: "Te Kaha",
    hint: "te: the, kaha: rope",
    meaning: "The rope",
  },
  {
    placeName: "Te Kao",
    hint: "te: the, kao: dried kumara",
    meaning: "The dried kumara",
  },
  {
    placeName: "Te Kauwhata",
    hint: "te: the, kau: empty, whata: storehouse",
    meaning: "The empty storehouse",
  },
  {
    placeName: "Te Kawakawa",
    hint: "te: the, kawakawa: a native shrub",
    meaning: "The kawakawa shrub",
  },
  {
    placeName: "Te Kopua",
    hint: "te: the, kopua: deep pool",
    meaning: "The deep pool",
  },
  {
    placeName: "Te Kiri",
    hint: "te: the, kiri: bark",
    meaning: "The bark",
  },
  {
    placeName: "Te Kohanga",
    hint: "te: the, kohanga: nest",
    meaning: "The nest",
  },
  {
    placeName: "Te Kowhai",
    hint: "te: the, kowhai: a tree",
    meaning: "The kowhai tree",
  },
  {
    placeName: "Te Mania",
    hint: "te: the, mania: plain",
    meaning: "The plain",
  },
  {
    placeName: "Te Moana",
    hint: "te: the, moana: ocean",
    meaning: "The sea",
  },
  {
    placeName: "Te Moana o Toi te Huatahi",
    hint: "te: the, moana: ocean, o: of, Toi te Huatahi",
    meaning: "The ocean of Toi te Huatahi",
  },
  {
    placeName: "Te Moananui",
    hint: "te: the, moana: ocean, nui: large",
    meaning: "The great ocean",
  },
  {
    placeName: "Te Moananui-a-Kiwa",
    hint: "te: the, moana: ocean, nui: large, a: of, Kiwa",
    meaning: "The great ocean of Kiwa",
  },
  {
    placeName: "Te Onepu",
    hint: "te: the, onepu: sand",
    meaning: "The sand",
  },
  {
    placeName: "Te Onewa",
    hint: "te: the, one: earth, soil or land, wa: unenclosed country",
    meaning: "Soil of the unenclosed land",
  },
  {
    placeName: "Te Papatapu",
    hint: "te: the, papa: flat, tapu: sacred or forbidden",
    meaning: "The sacred flat",
  },
  {
    placeName: "Te Puke",
    hint: "te: the, puke: hill",
    meaning: "The hill",
  },
  {
    placeName: "Te Tai Tamahine",
    hint: "te: the, tai: sea, coast, tamahine: daughter, girl",
    meaning: "The female coast",
  },
  {
    placeName: "Te Tai Tamatane",
    hint: "te: the, tai: sea, coast, tamatane: son, body",
    meaning: "The male coast",
  },
  {
    placeName: "Te Tai o Marokura",
    hint: "te: the, tai: sea, coast, o: of, Marokura",
    meaning: "The coast of Marokura",
  },
  {
    placeName: "Te Tai o Mahaanui",
    hint: "te: the, tai: sea, coast, o: of, Mahaanui",
    meaning: "The coast of Mahaanui",
  },
  {
    placeName: "Te Tai o Aorere",
    hint: "te: the, tai: sea, coast, o: of, Aorere",
    meaning: "The coast of Aorere",
  },
  {
    placeName: "Te Tai Poutini",
    hint: "te: the, tai: sea, coast, Poutini",
    meaning: "The coast of Poutini",
  },
  {
    placeName: "Te Tukeroa",
    hint: "te: the , tuke: elbow or bend, roa: tall",
    meaning: "The long bend",
  },
  {
    placeName: "Te Waharoa",
    hint: "te: the, waha: to carry on the back, roa: long",
    meaning: "The long carry",
  },
  {
    placeName: "Te Wai Pounamu",
    hint: "te, the, wai: water, pounamu: greenstone",
    meaning: "The greenstone waters",
  },
  {
    placeName: "Te Waiiti",
    hint: "te: the, wai: stream, iti: small",
    meaning: "The little stream",
  },
  {
    placeName: "Te Waiopani",
    hint: "te: the wai: water, o: of, Pani",
    meaning: "The water of Pani",
  },
  {
    placeName: "Te Wairoa",
    hint: "te: the, wai: river or stream, roa: long",
    meaning: "The long stream",
  },
  {
    placeName: "Te Waitere",
    hint: "te: the, wai: water, tere: swiftly flowing",
    meaning: "The swift stream",
  },
  {
    placeName: "Te Weiti",
    hint: "te: the, we: water, iti: little",
    meaning: "The little water",
  },
  {
    placeName: "Te Whare-kai-atua",
    hint: "te: the, whare: house, kai: eat, atua: gods",
    meaning: "The abode that consumes deities",
  },
  {
    placeName: "Tikapa Moana",
    hint: "tikapa: mournful, moana: sea",
    meaning: "The mournful sea",
  },
  {
    placeName: "Tikinui",
    hint: "tiki: human representation in wood or stone, nui: large or many",
    meaning: "The great human carving",
  },
  {
    placeName: "Tinui",
    hint: "ti: cabbage tree, nui: large or many",
    meaning: "Many cabbage trees",
  },
  {
    placeName: "Tiroa",
    hint: "ti: cabbage tree, roa: tall",
    meaning: "Long cabbage tree",
  },
  {
    placeName: "Tiromoana",
    hint: "tiro: view, moana: ocean",
    meaning: "View the sea",
  },
  {
    placeName: "Tironui",
    hint: "tiro: view, nui: large or expansive",
    meaning: "Expansive view",
  },
  {
    placeName: "Tiroroa",
    hint: "tiro: view, roa: long",
    meaning: "Long view",
  },
  {
    placeName: "Titiroa",
    hint: "titi: long streaks of cloud, roa: long",
    meaning: "Long streaks of cloud",
  },
  {
    placeName: "Tokanui",
    hint: "toka: rock, nui: large or many",
    meaning: "Large rock",
  },
  {
    placeName: "Tokarahi",
    hint: "toka: rock, rahi: large or many",
    meaning: "Many rocks",
  },
  {
    placeName: "Tokaroa",
    hint: "toka: rock, roa: tall or long",
    meaning: "Tall rock",
  },
  {
    placeName: "Tokoiti",
    hint: "toko: pole, iti: small",
    meaning: "Little pole",
  },
  {
    placeName: "Tokoroa",
    hint: "toko: pole: roa: long",
    meaning: "Long pole",
  },
  {
    placeName: "Tomoana",
    hint: "to: to drag or as far up as, moana: ocean",
    meaning: "Drag to the ocean",
  },
  {
    placeName: "Totaranui",
    hint: "totara: trees, nui: many",
    meaning: "Many totara trees",
  },
  {
    placeName: "Tunanui",
    hint: "tuna: eels, nui: many",
    meaning: "Many eels",
  },
  {
    placeName: "Turanganui",
    hint: "turanga: standing, nui: great",
    meaning: "Great standing place",
  },
  {
    placeName: "Turangaomoana",
    hint: "turanga: standing place, o: of, moana: the sea",
    meaning: "Resting place of the sea",
  },
  {
    placeName: "Tutaenui",
    hint: "tutae: dung, nui: large",
    meaning: "Large dung",
  },
  {
    placeName: "Umutaoroa",
    hint: "umu: oven, taoroa: long spear",
    meaning: "Oven of the long spear",
  },
  {
    placeName: "Urenui",
    hint: "ure: courage (a figurative expression), nui: great",
    meaning: "Great courage",
  },
  {
    placeName: "Utuwai",
    hint: "utu: dip into, in order to fill a bowl, wai: water",
    meaning: "Dip into water",
  },
  {
    placeName: "Waianiwaniwa",
    hint: "wai: water, aniwaniwa: rainbow",
    meaning: "Rainbow waters",
  },
  {
    placeName: "Waiapu",
    hint: "wai: water, apu: to swallow",
    meaning: "Swallowing river",
  },
  {
    placeName: "Waiareka",
    hint: "wai: water, a: of, reka: sweet or sweetness",
    meaning: "Sweet water",
  },
  {
    placeName: "Waiariari",
    hint: "wai: water, ariari: gleaming or undisturbed",
    meaning: "Gleaming water",
  },
  {
    placeName: "Waiariki",
    hint: "wai: water, ariki: chief",
    meaning: "Waters of the chief",
  },
  {
    placeName: "Waiaro",
    hint: "wai: water, aro: wistful",
    meaning: "Wistful water",
  },
  {
    placeName: "Waiatoto",
    hint: "wai: water, a: of, toto: blood",
    meaning: "Water of blood",
  },
  {
    placeName: "Waiau",
    hint: "wai: water, au: current",
    meaning: "Swirling waters",
  },
  {
    placeName: "Waiaua",
    hint: "wai: water, aua: herring",
    meaning: "Waters containing herring",
  },
  {
    placeName: "Waihaha",
    hint: "wai: water, haha: noisy",
    meaning: "Noisy water",
  },
  {
    placeName: "Waihakeke",
    hint: "wai: water, hakeke: wood ear fungus",
    meaning: "Wood ear fungus water",
  },
  {
    placeName: "Waihao",
    hint: "wai: water, hao: to catch in a net",
    meaning: "Water of net fishing",
  },
  {
    placeName: "Waihao",
    hint: "wai: river: hao: a species of small eel",
    meaning: "Water with eels",
  },
  {
    placeName: "Waihaorunga",
    hint: "wai: river: hao: a species of small eel, runga: top or upper part",
    meaning: "Water with eels at the top",
  },
  {
    placeName: "Waiharakeke",
    hint: "wai: stream, harakeke: flax",
    meaning: "Flax stream",
  },
  {
    placeName: "Waiharuru",
    hint: "wai: water, haruru: to reverberate or rumble",
    meaning: "Rumbling waters",
  },
  {
    placeName: "Waihau",
    hint: "wai: water, hau: wind",
    meaning: "Windy water",
  },
  {
    placeName: "Waiheke",
    hint: "wai: water, heke: to ebb, drip or descend",
    meaning: "The descending waters",
  },
  {
    placeName: "Waihemo",
    hint: "wai: water or stream, hemo: to cease",
    meaning: "The finished stream",
  },
  {
    placeName: "Waihinau",
    hint: "wai: stream, hinau: a native tree",
    meaning: "Hinau tree stream",
  },
  {
    placeName: "Waihirere",
    hint: "wai: water, hirere: to rush",
    meaning: "Rushing waters",
  },
  {
    placeName: "Waihoaka",
    hint: "wai: stream, hoaka (South Island form of hoanga): sandstone, used for grinding and polishing greenstone",
    meaning: "Water of sandstone",
  },
  {
    placeName: "Waihohepa",
    hint: "wai: stream, water, Hohepa: the Maori form of Joseph",
    meaning: "The water of Hohepa",
  },
  {
    placeName: "Waihohonu",
    hint: "wai: river, hohonu: deep",
    meaning: "Deep water",
  },
  {
    placeName: "Waihopo",
    hint: "wai: river, hopo: to be apprehensive or doubtful",
    meaning: "A river one fears to cross",
  },
  {
    placeName: "Waihora",
    hint: "wai: water, hora: spread out",
    meaning: "Spread-out waters",
  },
  {
    placeName: "Waihou",
    hint: "wai: river, hou: new",
    meaning: "New waters",
  },
  {
    placeName: "Waihua",
    hint: "wai: water, hua: fish roe",
    meaning: "Fish roe waters",
  },
  {
    placeName: "Waihue",
    hint: "wai: river, hue: gourd",
    meaning: "River gourd waters",
  },
  {
    placeName: "Wai-iti",
    hint: "wai: stream, iti: little",
    meaning: "Little stream",
  },
  {
    placeName: "Waikaka",
    hint: "wai: water, kaka: parrot",
    meaning: "Parrot stream",
  },
  {
    placeName: "Waikakahi",
    hint: "wai: water, kakahi: freshwater shellfish",
    meaning: "Waters of freshwater shellfish",
  },
  {
    placeName: "Waikakaho",
    hint: "wai: water, kakaho: flowering plumes of the toetoe",
    meaning: "Waters of the flowering plumes of the toetoe",
  },
  {
    placeName: "Waikanae",
    hint: "wai: water, kanae: mullet",
    meaning: "Mullet waters",
  },
  {
    placeName: "Waikaraka",
    hint: "wai: stream, karaka: native tree",
    meaning: "Karaka tree stream",
  },
  {
    placeName: "Waikarakia",
    hint: "wai: stream, karakia: prayer or incantation",
    meaning: "Stream of ritual",
  },
  {
    placeName: "Waikare",
    hint: "wai: water, kare: to ripple",
    meaning: "Rippling waters",
  },
  {
    placeName: "Waikareiti",
    hint: "wai: water, kare: to ripple or dash, iti: little",
    meaning: "Little waters",
  },
  {
    placeName: "Waikaremoana",
    hint: "wai: water, kare: to ripple, moana: sea or large lake",
    meaning: "Sea of rippling waters",
  },
  {
    placeName: "Waikaretu",
    hint: "wai: water, karetu: a sweet-scented grass",
    meaning: "Waters of the karetu grass",
  },
  {
    placeName: "Waikari",
    hint: "wai: water, kari: dig",
    meaning: "Dig for water",
  },
  {
    placeName: "Waikato",
    hint: "wai: river, kato: to flow",
    meaning: "Flowing water",
  },
  {
    placeName: "Waikawa",
    hint: "wai: water, kawa: bitter",
    meaning: "Bitter water",
  },
  {
    placeName: "Waikawau",
    hint: "wai: water, kawau: shag",
    meaning: "Water of the shag",
  },
  {
    placeName: "Waikereru",
    hint: "wai: water, kereru: wood pigeon",
    meaning: "Water of the wood pigeon",
  },
  {
    placeName: "Waikeria",
    hint: "wai: water, keria: dug out",
    meaning: "Dug out water",
  },
  {
    placeName: "Waikerikeri",
    hint: "wai: water, kerikeri: to rush along violently",
    meaning: "Water that rushes along",
  },
  {
    placeName: "Waikiekie",
    hint: "wai: water, kiekie: a climbing plant",
    meaning: "Kiekie waters",
  },
  {
    placeName: "Waikino",
    hint: "wai: water, kino: unpleasant, stinking",
    meaning: "Harmful waters",
  },
  {
    placeName: "Waikirikiri",
    hint: "wai: stream, kirikiri: gravel",
    meaning: "Gravelly stream",
  },
  {
    placeName: "Waikite",
    hint: "wai: water, kite: to see or gaze upon",
    meaning: "Discovered water",
  },
  {
    placeName: "Waikiwi",
    hint: "wai: stream, kiwi: a flightless nocturnal bird",
    meaning: "Kiwi waters",
  },
  {
    placeName: "Waikoau",
    hint: "wai: water, koau: shag",
    meaning: "Waters of the shag",
  },
  {
    placeName: "Waikohu",
    hint: "wai: water, kohu: mist",
    meaning: "Misty waters",
  },
  {
    placeName: "Waikokopu",
    hint: "wai: water, kokopu: cockabully fish",
    meaning: "Waters of the cockabully",
  },
  {
    placeName: "Waikokowai",
    hint: "wai: water, kokowai: red ochre",
    meaning: "Waters of the red ochre",
  },
  {
    placeName: "Waikorea",
    hint: "wai: water, korea: a small canoe",
    meaning: "Waters of the small canoe",
  },
  {
    placeName: "Waikouaiti",
    hint: "wai: stream, koua (the poetical form of kua): to become, iti: little",
    meaning: "Stream which has become small",
  },
  {
    placeName: "Waikoukou",
    hint: "wai: water, koukou: morepork or native owl",
    meaning: "Water of the morepork",
  },
  {
    placeName: "Waikowhai",
    hint: "wai: stream, kowhai: native tree",
    meaning: "Kowhai tree waters",
  },
  {
    placeName: "Waikowhitiwhiti",
    hint: "wai: water, kowhitiwhiti: dancing (of water)",
    meaning: "Dancing waters",
  },
  {
    placeName: "Waikuku",
    hint: "wai: water, kuku: freshwater mussel",
    meaning: "Freshwater mussel waters",
  },
  {
    placeName: "Waikumete",
    hint: "wai: water, kumete: wooden bowl often used to snare wood pigeons",
    meaning: "Waters of the kumete bowl",
  },
  {
    placeName: "Waikuta",
    hint: "wai: water, kuta: rushes",
    meaning: "Waters of the kuta rushes",
  },
  {
    placeName: "Waima",
    hint: "wai: river, ma: white or clear",
    meaning: "Clear water",
  },
  {
    placeName: "Wai-maeroero",
    hint: "wai: water, maeroero: ogres of the South Island forests",
    meaning: "Waters of the ogres of the forests",
  },
  {
    placeName: "Waimahaka",
    hint: "wai: waters, mahaka (mahanga): twin",
    meaning: "Twin waters",
  },
  {
    placeName: "Waimahora",
    hint: "wai: water, mahora: spread out",
    meaning: "Spread out waters",
  },
  {
    placeName: "Waimahuru",
    hint: "wai, stream, mahuru: placid",
    meaning: "Placid waters",
  },
  {
    placeName: "Waimakariri",
    hint: "wai: river, makariri: cold",
    meaning: "Cold river",
  },
  {
    placeName: "Waimamaku",
    hint: "wai: stream, mamaku: tree-fern",
    meaning: "Tree-fern stream",
  },
  {
    placeName: "Waimana",
    hint: "wai: stream, mana: esteem or influence",
    meaning: "Stream of influence",
  },
  {
    placeName: "Waimangaroa",
    hint: "wai: river, manga: tributary, roa: long",
    meaning: "River with a long tributary",
  },
  {
    placeName: "Waimangu",
    hint: "wai: water, mangu: black",
    meaning: "Black water",
  },
  {
    placeName: "Waimarama",
    hint: "wai: water, marama: clear",
    meaning: "Clear water",
  },
  {
    placeName: "Waimarie",
    hint: "wai: water, marie: quiet",
    meaning: "Quiet water",
  },
  {
    placeName: "Waimarino",
    hint: "wai: water or stream, marino: calm or still",
    meaning: "Calm stream",
  },
  {
    placeName: "Waimaru",
    hint: "wai, water, maru: shade or sheltered",
    meaning: "Sheltered water",
  },
  {
    placeName: "Waimataitai",
    hint: "wai, water, mataitai: salty or brackish water",
    meaning: "Salty water",
  },
  {
    placeName: "Waimate",
    hint: "wai: water, mate: dead, sick or stagnant",
    meaning: "Stagnant water",
  },
  {
    placeName: "Waimatua",
    hint: "wai: water, matua: large or important",
    meaning: "Important water",
  },
  {
    placeName: "Waimatuku",
    hint: "wai: water, matuku: bittern",
    meaning: "Bittern water",
  },
  {
    placeName: "Waimauku",
    hint: "wai: stream, mauku: small ferns",
    meaning: "Fern water",
  },
  {
    placeName: "Waimaunga",
    hint: "wai: stream, maunga: mountain",
    meaning: "Mountain stream",
  },
  {
    placeName: "Waimimi",
    hint: "wai: stream, mimi: urine",
    meaning: "Urine stream",
  },
  {
    placeName: "Waimiro",
    hint: "wai: stream, miro: a native tree",
    meaning: "Miro stream",
  },
  {
    placeName: "Waimotu",
    hint: "wai: water or river, motu: island",
    meaning: "Island stream",
  },
  {
    placeName: "Waimumu",
    hint: "wai: stream, mumu: boisterous",
    meaning: "Boisterous stream",
  },
  {
    placeName: "Waingake",
    hint: "wai: water, ngake: capacious, or the middle section of a fishing net",
    meaning: "Waters to fill a large net",
  },
  {
    placeName: "Waingaro",
    hint: "wai: water or stream, ngaro: lost or hidden",
    meaning: "Lost stream",
  },
  {
    placeName: "Waingongoro",
    hint: "wai: river, ngongoro: to snore or gurgle",
    meaning: "Gurgling water",
  },
  {
    placeName: "Wainoni",
    hint: "wai: stream, noni: bend or turn",
    meaning: "Bendy stream",
  },
  {
    placeName: "Wainui",
    hint: "wai: water, nui: large",
    meaning: "Large waters",
  },
  {
    placeName: "Wainuiomata",
    hint: "wai: stream, nui: big, o: of, Mata: a personal name",
    meaning: "Big stream of Mata",
  },
  {
    placeName: "Wainuioru",
    hint: "wai: water or stream, nui: large, o of, Ru: personal name",
    meaning: "Large waters of Ru",
  },
  {
    placeName: "Waiohau",
    hint: "wai: water, o: of, Hau: personal name",
    meaning: "Waters of Hau",
  },
  {
    placeName: "Waiohine",
    hint: "wai: river, o: of, Hine",
    meaning: "River of Hine",
  },
  {
    placeName: "Waiomatatini",
    hint: "wai: water or stream, o: of, Matatini",
    meaning: "Stream of Matatini",
  },
  {
    placeName: "Waiomio",
    hint: "wai: water or stream, o: of, Mio",
    meaning: "Stream of Mio",
  },
  {
    placeName: "Waiomu",
    hint: "wai: water or stream, o: of, Mu",
    meaning: "Stream of Mu",
  },
  {
    placeName: "Waione",
    hint: "wai: water, one: beach or sand",
    meaning: "Stream on the beach",
  },
  {
    placeName: "Waiongana",
    hint: "wai: water or stream, o: of, Ngana",
    meaning: "Stream of Ngata",
  },
  {
    placeName: "Wai-ora-a-Tane",
    hint: "wai: water, ora: life, a: of, Tane",
    meaning: "The life-giving water of Tane",
  },
  {
    placeName: "Waiorongomai",
    hint: "wai: water or stream, o: of, Rongomai",
    meaning: "Stream of Rongomai",
  },
  {
    placeName: "Waiotahi",
    hint: "wai: water or stream, o: of, Tahi",
    meaning: "Stream of Tahi",
  },
  {
    placeName: "Wai-o-taiki",
    hint: "te: the, wai: stream, o: of, Taiki",
    meaning: "Stream of Taiki",
  },
  {
    placeName: "Waiotapu",
    hint: "wai: water, o: of, tapu: sacred or reserved",
    meaning: "Sacred waters",
  },
  {
    placeName: "Waiotemarama",
    hint: "wai: water, o: of, Te Marama",
    meaning: "Waters of Te Marama",
  },
  {
    placeName: "Waiotira",
    hint: "wai: water or pool, a: of, tira: to set up sticks for divination",
    meaning: "Pool of divination",
  },
  {
    placeName: "Waiotu",
    hint: "wai: water, o: of, Tu: a personal name",
    meaning: "Waters of Tu",
  },
  {
    placeName: "Waiouru",
    hint: "wai: river, o:of, uru: west",
    meaning: "River of the west",
  },
  {
    placeName: "Waipa",
    hint: "wai: river, pa: fortified village or villages",
    meaning: "River of fortified villages",
  },
  {
    placeName: "Waipahi",
    hint: "wai: water, Pahi",
    meaning: "Stream of Pahi",
  },
  {
    placeName: "Waipahihi",
    hint: "wai: water, pahihi: welling up or flowing in driblets",
    meaning: "Water flowing in driblets",
  },
  {
    placeName: "Waipakaru",
    hint: "wai: water, pakaru: broken",
    meaning: "Stream broken through",
  },
  {
    placeName: "Waipango",
    hint: "wai: water, pango: black",
    meaning: "Black water",
  },
  {
    placeName: "Waipapa",
    hint: "wai: stream, papa: flat",
    meaning: "Stream on flats",
  },
  {
    placeName: "Waipapakauri",
    hint: "wai: water, papa: flat, kauri: native tree",
    meaning: "Swampy ground where the kauri grow",
  },
  {
    placeName: "Waipaparoa",
    hint: "wai: water, papa: flat, roa: long",
    meaning: "Stream on long flats",
  },
  {
    placeName: "Waipara",
    hint: "wai: water, para: mud, silt or sediment",
    meaning: "Silty water",
  },
  {
    placeName: "Waipareira",
    hint: "wai: water, Pareira",
    meaning: "Stream of Pareira",
  },
  {
    placeName: "Waipari",
    hint: "wai: stream, pari: cliff",
    meaning: "Clifftop stream",
  },
  {
    placeName: "Waipati",
    hint: "wai: water, pati: shallow or splashing",
    meaning: "Shallow waters",
  },
  {
    placeName: "Waipatiki",
    hint: "wai: water, patiki: flounder",
    meaning: "Flounder waters",
  },
  {
    placeName: "Waipatu",
    hint: "wai: water, patu: struck",
    meaning: "Strike water",
  },
  {
    placeName: "Waipeto",
    hint: "wai: stream, peto: to be consumed",
    meaning: "Consumed by the stream",
  },
  {
    placeName: "Waipiata",
    hint: "wai: water, piata: glistening or clear",
    meaning: "Clear water",
  },
  {
    placeName: "Waipipi",
    hint: "wai: water, pipi: cockle",
    meaning: "Pipi waters",
  },
  {
    placeName: "Waipiro",
    hint: "wai: water, piro: evil-smelling",
    meaning: "Evil-smelling water",
  },
  {
    placeName: "Waipoua",
    hint: "wai: water, po: night, ua: rain",
    meaning: "Water from rain in the night",
  },
  {
    placeName: "Waipounamu",
    hint: "wai: river, pounamu: greenstone",
    meaning: "Greenstone waters",
  },
  {
    placeName: "Waipouri",
    hint: "wai: water or stream, pouri: dark or sad.",
    meaning: "Dark waters",
  },
  {
    placeName: "Waipu",
    hint: "wai: water, pu: reddish in colour",
    meaning: "Reddish water",
  },
  {
    placeName: "Waipuhinui",
    hint: "wai: water, puhi: plume at the bow of a war canoe, nui: large",
    meaning: "Water of the large canoe bow plume",
  },
  {
    placeName: "Waipuku",
    hint: "wai: water, puku: to swell",
    meaning: "Swelling water",
  },
  {
    placeName: "Waipukurau",
    hint: "wai: stream, pukurau: a large white fungus",
    meaning: "Stream of the pukurau fungus",
  },
  {
    placeName: "Wairakei",
    hint: "wai: water, rakei: adorning",
    meaning: "A place where pools of water were used as mirrors",
  },
  {
    placeName: "Wairangi",
    hint: "wai: water, rangi: sky",
    meaning: "Water skies",
  },
  {
    placeName: "Wairarapa",
    hint: "wai: water, rarapa: glistening",
    meaning: "Glistening water",
  },
  {
    placeName: "Waireka",
    hint: "wai: water, reka: sweet",
    meaning: "Sweet water",
  },
  {
    placeName: "Wairepo",
    hint: "wai: water, repo, swamp",
    meaning: "Swampy water",
  },
  {
    placeName: "Wairere",
    hint: "wai: water or stream, rere: to flow",
    meaning: "Waterfall",
  },
  {
    placeName: "Wairio",
    hint: "wai: water or stream, rio: dried up",
    meaning: "Dried-up stream",
  },
  {
    placeName: "Wairoa",
    hint: "wai: river or stream, roa: long",
    meaning: "Long stream",
  },
  {
    placeName: "Wairongoa",
    hint: "wai: springs, rongoa: medicine",
    meaning: "Medicinal stream",
  },
  {
    placeName: "Wairua",
    hint: "wai: stream or river, rua: two",
    meaning: "Twin waters",
  },
  {
    placeName: "Wairuna",
    hint: "wai: stream, runa: dock",
    meaning: "Dock waters",
  },
  {
    placeName: "Wairunga",
    hint: "wai: water, runga: above",
    meaning: "Stream that flows from the mountains",
  },
  {
    placeName: "Waitaanga",
    hint: "wai: stream, a of, Anga",
    meaning: "Stream of Anga",
  },
  {
    placeName: "Waitaha",
    hint: "wai: river or stream, taha: to pass on one side",
    meaning: "Backwater",
  },
  {
    placeName: "Waitahanui",
    hint: "wai: stream, tahanui: a variety of cabbage tree with broad leaves",
    meaning: "Stream of cabbage trees",
  },
  {
    placeName: "Waitahora",
    hint: "wai: water, tahora: spread out or open space",
    meaning: "Wide-open waters",
  },
  {
    placeName: "Waitahu",
    hint: "wai: stream, tahu: continuous or running in a straight line",
    meaning: "Straight-running stream",
  },
  {
    placeName: "Waitahuna",
    hint: "wai: stream, Tahuna: a personal name",
    meaning: "Stream of Tahuna",
  },
  {
    placeName: "Waitai",
    hint: "wai: water, tai: salt or brackish",
    meaning: "Salty water",
  },
  {
    placeName: "Waitakaro",
    hint: "wai: stream, takaro: to play or wrestle",
    meaning: "Wrestling waters",
  },
  {
    placeName: "Waitakaruru",
    hint: "wai: water, takaruru: stagnant",
    meaning: "Stagnant water",
  },
  {
    placeName: "Waitakere",
    hint: "wai: water or stream, takere: deep or cascading",
    meaning: "Cascading stream",
  },
  {
    placeName: "Waitaki",
    hint: "wai: river, taki (tangi): noisy or weeping",
    meaning: "Weeping waters",
  },
  {
    placeName: "Waitane",
    hint: "wai: river, tane: man or men",
    meaning: "River of men",
  },
  {
    placeName: "Waitangi",
    hint: "wai: waters, tangi: noisy or weeping",
    meaning: "Weeping waters",
  },
  {
    placeName: "Waitangiruru",
    hint: "wai: water or stream, tangi: to sound, ruru: morepork",
    meaning: "Stream that sounds like a morepork",
  },
  {
    placeName: "Waitanguru",
    hint: "wai: water, tanguru: rushing rapidly",
    meaning: "Rapidly rushing water",
  },
  {
    placeName: "Waitao",
    hint: "wai: water, tao: spear",
    meaning: "Spear waters",
  },
  {
    placeName: "Waitapu",
    hint: "wai: water: tapu: sacred or forbidden",
    meaning: "Sacred waters",
  },
  {
    placeName: "Waitaramea",
    hint: "wai: stream, taramea: speargrass",
    meaning: "Speargrass stream",
  },
  {
    placeName: "Waitararoa",
    hint: "wai:water, tara: sun’s ray or shafts of light, roa: long",
    meaning: "First rays of the sun appearing on the water",
  },
  {
    placeName: "Waitarere",
    hint: "wai: stream, tarere: to flow copiously",
    meaning: "Copiously flowing waters",
  },
  {
    placeName: "Waitaria",
    hint: "wai: water, taria: to wait for",
    meaning: "Waters of waiting",
  },
  {
    placeName: "Waitaruke",
    hint: "wai: stream, taruke: hurrying",
    meaning: "Hurrying stream",
  },
  {
    placeName: "Waitata",
    hint: "wai: water, tata: to dash or beat down",
    meaning: "Dashing stream",
  },
  {
    placeName: "Waitawa",
    hint: "wai: stream, tawa: tree",
    meaning: "Tawa tree stream",
  },
  {
    placeName: "Waitawheta",
    hint: "wai: water, tawheta: to flounder",
    meaning: "Restless stream",
  },
  {
    placeName: "Waitekauri",
    hint: "wai: stream, te: the, kauri: native tree",
    meaning: "Stream of the kauri tree",
  },
  {
    placeName: "Waitepeka",
    hint: "wai: stream, te: the, peka: branch",
    meaning: "Tributary stream",
  },
  {
    placeName: "Waiterimu",
    hint: "wai: stream, te: the, rimu: native tree",
    meaning: "Stream of the rimu tree",
  },
  {
    placeName: "Waiteti",
    hint: "wai: stream, te: the, ti: cabbage tree",
    meaning: "Stream of the cabbage tree",
  },
  {
    placeName: "Waitetuna",
    hint: "wai: stream, te: the, tuna: eel",
    meaning: "Stream of the eel",
  },
  {
    placeName: "Waitiri",
    hint: "wai: water or stream, tiri: to toss about or disturb",
    meaning: "Disturbed stream",
  },
  {
    placeName: "Waitoa",
    hint: "wai: water, toa: rough or stormy",
    meaning: "Rough waters",
  },
  {
    placeName: "Waitoetoe",
    hint: "wai: water or stream, toetoe: native grass",
    meaning: "Toetoe grass stream",
  },
  {
    placeName: "Waitohi",
    hint: "wai: water, tohi: baptismal rite",
    meaning: "Stream for baptismal rite",
  },
  {
    placeName: "Waitohu",
    hint: "wai: water, tohu: to point out",
    meaning: "Water that points out the way",
  },
  {
    placeName: "Waitoki",
    hint: "wai: water, toki: adze",
    meaning: "Adze waters",
  },
  {
    placeName: "Waitomo",
    hint: "wai: water, tomo: shaft",
    meaning: "Shafts from water",
  },
  {
    placeName: "Waitoriki",
    hint: "wai: water, toriki: little",
    meaning: "Small stream",
  },
  {
    placeName: "Waitotara",
    hint: "wai: river, totara: native tree",
    meaning: "Totara tree river",
  },
  {
    placeName: "Waituhi",
    hint: "wai: water, tuhi: to glow",
    meaning: "Glowing waters",
  },
  {
    placeName: "Waitui",
    hint: "wai: water, tui: bird",
    meaning: "Tui waters",
  },
  {
    placeName: "Waituna",
    hint: "wai: stream, tuna: eel",
    meaning: "Eel stream",
  },
  {
    placeName: "Waiuku",
    hint: "wai: stream, uku: white clay",
    meaning: "Stream with banks of white clay",
  },
  {
    placeName: "Waiuta",
    hint: "wai: river, uta: inland, or to load a burden",
    meaning: "Inland river",
  },
  {
    placeName: "Waiwawa",
    hint: "wai: stream, wawa: roaring",
    meaning: "Roaring stream",
  },
  {
    placeName: "Waiwera",
    hint: "wai: water, wera: hot",
    meaning: "Hot water",
  },
  {
    placeName: "Wai-whakaata",
    hint: "wai: water, whakaata: to reflect",
    meaning: "Reflecting waters",
  },
  {
    placeName: "Waiwhero",
    hint: "wai: water, whero: red",
    meaning: "Red waters",
  },
  {
    placeName: "Waiwhetu",
    hint: "wai: stream, whetu: star",
    meaning: "Star-reflecting stream",
  },
  {
    placeName: "Waiwhio",
    hint: "wai: stream, whio: blue or whistling duck",
    meaning: "Stream of the blue duck",
  },
  {
    placeName: "Waiwhiu",
    hint: "wai: stream, whiu: sudden bend",
    meaning: "Sudden bend in the stream",
  },
  {
    placeName: "Wakanui",
    hint: "waka: canoe, nui: large or many",
    meaning: "Many waka",
  },
  {
    placeName: "Waronui",
    hint: "waro: chasm or coals, nui: large",
    meaning: "Large coals",
  },
  {
    placeName: "Waitete",
    hint: "wai: stream, tete: shovel-nosed duck, now extinct",
    meaning: "Shovel-nosed duck stream",
  },
  {
    placeName: "Weiti",
    hint: "we: liquid or water, iti: little",
    meaning: "Little waters",
  },
  {
    placeName: "Whakaari",
    hint: "whakaari: To show or expose to view",
    meaning: "Expose to view",
  },
  {
    placeName: "Whakaroa",
    hint: "Whaka (South Island form of whanga): harbour or bay, roa: long",
    meaning: "Long harbour",
  },
  {
    placeName: "Whangakoko",
    hint: "whanga: harbour, koko: corner, or to take up with a shovel",
    meaning: "Shovelled harbour",
  },
  {
    placeName: "Whangamarino",
    hint: "whanga: stretch of water, marino: peaceful",
    meaning: "Peaceful harbour",
  },
  {
    placeName: "Whangamata",
    hint: "whanga: harbour, mata: obsidian",
    meaning: "Obsidian harbour",
  },
  {
    placeName: "Whangamoa",
    hint: "whanga: valley or sheltered place, moa: probably the raised mounds in a plantation",
    meaning: "Valley with raised mounds in plantation",
  },
  {
    placeName: "Whangamomona",
    hint: "whanga: valley, momona: fat",
    meaning: "Bountiful valley",
  },
  {
    placeName: "Whanganui",
    hint: "whanga: bay, nui: large",
    meaning: "Large harbour",
  },
  {
    placeName: "Whanganui-o-Hei",
    hint: "whanga: bay, nui: large, o: of, Hei",
    meaning: "Large harbour of Hei",
  },
  {
    placeName: "Whangapara",
    hint: "whanga: harbour, para: sediment",
    meaning: "Sedimentary harbour",
  },
  {
    placeName: "Whangaparaoa",
    hint: "whanga: bay, paraoa: whale",
    meaning: "Whale bay",
  },
  {
    placeName: "Whangape",
    hint: "whanga: to wait, pe: fish roe",
    meaning: "Fish roe harbour",
  },
  {
    placeName: "Whangapoua",
    hint: "whanga: bay or harbour, poua: a mollusc",
    meaning: "Mollusc harbour",
  },
  {
    placeName: "Whangara",
    hint: "whanga: bay, ra: sun",
    meaning: "Sunny bay",
  },
  {
    placeName: "Whangarata",
    hint: "whanga: valley, rata: native tree",
    meaning: "Rata tree valley",
  },
  {
    placeName: "Whangarei",
    hint: "whanga: waiting, rei: abbreviation of Reipae",
    meaning: "Waiting for Reipae",
  },
  {
    placeName: "Whangaripo",
    hint: "whanga: stretch of water, ripo: deep pool or whirlpool",
    meaning: "Deep stretch of water",
  },
  {
    placeName: "Whangaroa",
    hint: "whanga: harbour, roa: long",
    meaning: "Long harbour",
  },
  {
    placeName: "Whangaruru",
    hint: "whanga: harbour, ruru: morepork",
    meaning: "Morepork harbour",
  },
  {
    placeName: "Whangateau",
    hint: "whanga: harbour, te: the, au: current, smoke or mist",
    meaning: "Harbour of smoke",
  },
  {
    placeName: "Whangatoetoe",
    hint: "whanga: bay, toetoe: native grass",
    meaning: "Toetoe grass bay",
  },
  {
    placeName: "Whanui",
    hint: "whanui: wide",
    meaning: "Wide-open waters",
  },
  {
    placeName: "Whareroa",
    hint: "whare: house, roa: long",
    meaning: "Long house",
  },
  {
    placeName: "Wharo One-roa-a-Tohe",
    hint: "wharo: stretched out, one: beach, roa: long, a: of, Tohe, a chief",
    meaning: "The beach on which Tohe stretched out",
  },
  {
    placeName: "Whataroa",
    hint: "whata: elevated stage: roa: long or tall",
    meaning: "Long, elevated stage",
  },
  {
    placeName: "Whekenui",
    hint: "wheke: octopus, nui: large",
    meaning: "Great octopus",
  },
  {
    placeName: "Whenuanui",
    hint: "whenua: land, nui: large",
    meaning: "Great land",
  },
  {
    placeName: "Whenuapai",
    hint: "whenua: land, pai: good",
    meaning: "Good land",
  },
  {
    placeName: "Whanui",
    hint: "whanui: broad or wide",
    meaning: "Wide",
  },
  {
    placeName: "Wharanui",
    hint: "wharanui: species of flax",
    meaning: "Wharanui flax",
  },
  {
    placeName: "Whare",
    hint: "whare: house",
    meaning: "House",
  },
  {
    placeName: "Whareakeake",
    hint: "whare: house, akeake: poor land, or a species of tree",
    meaning: "House on poor land",
  },
  {
    placeName: "Whareama",
    hint: "whare: house, ama: carved posts supporting the maihi",
    meaning: "House of carved posts",
  },
  {
    placeName: "Wharehine",
    hint: "whare: house, hine: girls or young women",
    meaning: "House of young women",
  },
  {
    placeName: "Wharehuanui",
    hint: "whare: house, huanui: road or path",
    meaning: "House by a path",
  },
  {
    placeName: "Wharehuia",
    hint: "whare: house, huia (the possessive case of hui): assembled",
    meaning: "House of assembly",
  },
  {
    placeName: "Wharehunga",
    hint: "whare: house, hunga: company of people",
    meaning: "Meeting house, or meeting of people in a house",
  },
  {
    placeName: "Wharekaho",
    hint: "whare: house, kaho: fence rail",
    meaning: "Enclosed palisade",
  },
  {
    placeName: "Wharekaka",
    hint: "whare: probably nesting place, kaka: parrots",
    meaning: "Nesting place of parrots",
  },
  {
    placeName: "Wharekopae",
    hint: "whare: house, kopae: circular",
    meaning: "House with a side door",
  },
  {
    placeName: "Wharekowhiti",
    hint: "whare: house, ko: father side, whiti: to cross",
    meaning: "Cross to house on the far side",
  },
  {
    placeName: "Whareongaonga",
    hint: "whare: house, ongaonga: nettle",
    meaning: "Nettle house",
  },
  {
    placeName: "Whareora",
    hint: "whare: house, ora: safe or in good health",
    meaning: "House of good health",
  },
  {
    placeName: "Wharepaina",
    hint: "whare: house, paina: to warm oneself",
    meaning: "House to warm oneself",
  },
  {
    placeName: "Wharepapa",
    hint: "whare: house, papa: flat",
    meaning: "House flats",
  },
  {
    placeName: "Wharepoa",
    hint: "whare: house: poa: smouldering or smoking",
    meaning: "Smouldering house",
  },
  {
    placeName: "Whareponga",
    hint: "whare: house, ponga: tree-fern",
    meaning: "Tree-fern house",
  },
  {
    placeName: "Wharerata",
    hint: "whare: house, rata: native tree",
    meaning: "House among the rata trees",
  },
  {
    placeName: "Whatamango",
    hint: "whata: elevated food store: mango (the same word as mako): shark",
    meaning: "A stage for storing dried shark flesh",
  },
  {
    placeName: "Whatatutu",
    hint: "whata: elevated food platform, tutu: native tree or bush",
    meaning: "Storage platform among the tutu bushes",
  },
  {
    placeName: "Whatawhata",
    hint: "whata: elevated food platform",
    meaning: "Elevated food platforms",
  },
  {
    placeName: "Whatitiri",
    hint: "whatitiri: thunder",
    meaning: "Thunder",
  },
  {
    placeName: "Whatiwhatihoe",
    hint: "whatiwhati: to break in pieces, hoe: paddle",
    meaning: "Paddle broken into pieces",
  },
  {
    placeName: "Whau",
    hint: "whau: a native tree",
    meaning: "Whau tree",
  },
  {
    placeName: "Whawharua",
    hint: "whawha: to feel about, rua: pit",
    meaning: "Grope about in kumara pit",
  },
  {
    placeName: "Whenuahou",
    hint: "whenua: land, hou: new",
    meaning: "New land",
  },
  {
    placeName: "Whenuakite",
    hint: "whenua: land, kite: discover",
    meaning: "Discovered land",
  },
  {
    placeName: "Whenuakura",
    hint: "whenua: land, kura: red",
    meaning: "Red land",
  },
  {
    placeName: "Whetukura",
    hint: "whetu: star, kura: red",
    meaning: "Red star",
  },
  {
    placeName: "Whitianga",
    hint: "whitianga: the crossing",
    meaning: "The crossing (of a river)",
  },
  {
    placeName: "Whitikau",
    hint: "whiti: to cross, kau: to wade",
    meaning: "Wade across",
  },
];

export default gameData;
