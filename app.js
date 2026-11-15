/**
 * EasyLearn - Shaxsiy So'z Yodlash Ilovasi
 * Upgraded Interactive Core Logic
 */

const STARTER_PACKS = [
    {
        id: 'pack_a1',
        title: "A1-A2 Boshlang'ich (Top 30)",
        icon: '<i class="fa-solid fa-rocket text-primary"></i>',
        description: "Kundalik hayotda eng ko'p ishlatiladigan asosiy tayanch so'zlar",
        words: [
            { word: "Water", translation: "Suv", synonyms: "liquid, aqua" },
            { word: "Book", translation: "Kitob", synonyms: "volume, publication" },
            { word: "Friend", translation: "Do'st", synonyms: "companion, buddy" },
            { word: "Family", translation: "Oila", synonyms: "relatives, household" },
            { word: "House", translation: "Uy", synonyms: "home, residence" },
            { word: "Time", translation: "Vaqt", synonyms: "period, moment" },
            { word: "Work", translation: "Ish, ishlamoq", synonyms: "job, labor" },
            { word: "School", translation: "Maktab", synonyms: "academy, institute" },
            { word: "City", translation: "Shahar", synonyms: "metropolis, town" },
            { word: "World", translation: "Dunyo, olam", synonyms: "earth, globe" },
            { word: "Money", translation: "Pul", synonyms: "cash, currency" },
            { word: "Car", translation: "Mashina", synonyms: "vehicle, automobile" },
            { word: "Food", translation: "Oziq-ovqat, taom", synonyms: "meal, nourishment" },
            { word: "Life", translation: "Hayot", synonyms: "existence, living" },
            { word: "People", translation: "Odamlar, xalq", synonyms: "humans, society" },
            { word: "Child", translation: "Bola", synonyms: "kid, youngster" },
            { word: "Story", translation: "Hikoya, qissa", synonyms: "tale, narrative" },
            { word: "Country", translation: "Mamlakat, yurt", synonyms: "nation, state" },
            { word: "Road", translation: "Yo'l", synonyms: "street, pathway" },
            { word: "Sun", translation: "Quyosh", synonyms: "star, daylight" },
            { word: "Night", translation: "Tun, kecha", synonyms: "evening, midnight" },
            { word: "Day", translation: "Kun", synonyms: "daylight, date" },
            { word: "Music", translation: "Musiqa", synonyms: "melody, tune" },
            { word: "Question", translation: "Savol", synonyms: "inquiry, query" },
            { word: "Answer", translation: "Javob", synonyms: "reply, response" },
            { word: "Problem", translation: "Muammo", synonyms: "issue, trouble" },
            { word: "Place", translation: "Joy, makon", synonyms: "location, spot" },
            { word: "Help", translation: "Yordam bermoq", synonyms: "assist, support" },
            { word: "Learn", translation: "O'rganmoq", synonyms: "study, acquire" },
            { word: "Speak", translation: "Gapirmoq, so'zlamoq", synonyms: "talk, utter" }
        ]
    },
    {
        id: 'pack_conversation',
        title: "Kundalik So'zlashuv (Daily Chat)",
        icon: '<i class="fa-solid fa-comments text-info"></i>',
        description: "Jonli muloqot va nutqda tez-tez ishlatiladigan sifat va ravishlar",
        words: [
            { word: "Awesome", translation: "Ajoyib, zo'r", synonyms: "amazing, fantastic" },
            { word: "Definitely", translation: "Albatta, shubhasiz", synonyms: "certainly, surely" },
            { word: "Probably", translation: "Ehtimol, balki", synonyms: "likely, possibly" },
            { word: "Actually", translation: "Aslida, haqiqatda", synonyms: "in fact, truly" },
            { word: "Anyway", translation: "Nima bo'lganda ham", synonyms: "anyhow, regardless" },
            { word: "Exactly", translation: "Aynan, xuddi shunday", synonyms: "precisely, accurately" },
            { word: "Obviously", translation: "Aniqki, ko'rinib turibdiki", synonyms: "clearly, evidently" },
            { word: "Completely", translation: "Butunlay, to'liq", synonyms: "totally, entirely" },
            { word: "Especially", translation: "Ayniqsa, xususan", synonyms: "particularly, notably" },
            { word: "Immediately", translation: "Darhol, tezda", synonyms: "instantly, promptly" },
            { word: "Seriously", translation: "Jiddiy, hazilsiz", synonyms: "earnestly, genuinely" },
            { word: "Perfect", translation: "Mukammal, a'lo", synonyms: "flawless, ideal" },
            { word: "Basically", translation: "Asosan, mohiyatan", synonyms: "essentially, mainly" },
            { word: "Hopefully", translation: "Umid qilamanki", synonyms: "optimistically" },
            { word: "Unfortunately", translation: "Afsuski, baxtga qarshi", synonyms: "regrettably, sadly" },
            { word: "Suddenly", translation: "To'satdan, birdaniga", synonyms: "abruptly, unexpectedly" },
            { word: "Certainly", translation: "Albatta, shak-shubhasiz", synonyms: "undoubtedly, surely" },
            { word: "Currently", translation: "Hozirda, ayni vaqtda", synonyms: "presently, nowadays" },
            { word: "Usually", translation: "Odatda", synonyms: "normally, typically" },
            { word: "Grateful", translation: "Minnatdor", synonyms: "thankful, appreciative" }
        ]
    },
    {
        id: 'pack_business',
        title: "Biznes & Ish Faoliyati (Career)",
        icon: '<i class="fa-solid fa-briefcase text-primary"></i>',
        description: "Ofis, muloqot, rejalashtirish va ish jarayonidagi muhim atamalar",
        words: [
            { word: "Negotiate", translation: "Muzokara olib bormoq", synonyms: "bargain, discuss" },
            { word: "Agreement", translation: "Kelishuv, shartnoma", synonyms: "contract, deal" },
            { word: "Deadline", translation: "Oxirgi muddat", synonyms: "due date, time limit" },
            { word: "Goal", translation: "Maqsad", synonyms: "objective, target" },
            { word: "Revenue", translation: "Daromad, tushum", synonyms: "income, earnings" },
            { word: "Investment", translation: "Investitsiya, sarmoya", synonyms: "funding, capital" },
            { word: "Client", translation: "Mijoz", synonyms: "customer, buyer" },
            { word: "Strategy", translation: "Strategiya, reja", synonyms: "plan, approach" },
            { word: "Leadership", translation: "Yetakchilik, rahbarlik", synonyms: "guidance, direction" },
            { word: "Management", translation: "Boshqaruv", synonyms: "administration, control" },
            { word: "Profit", translation: "Foyda", synonyms: "gain, benefit" },
            { word: "Opportunity", translation: "Imkoniyat", synonyms: "chance, prospect" },
            { word: "Contract", translation: "Shartnoma, bitim", synonyms: "pact, treaty" },
            { word: "Employee", translation: "Xodim, ishchi", synonyms: "worker, staff" },
            { word: "Schedule", translation: "Jadval, reja", synonyms: "timetable, agenda" },
            { word: "Presentation", translation: "Taqdimot", synonyms: "pitch, showcase" },
            { word: "Performance", translation: "Natijadorlik, faoliyat", synonyms: "efficiency, output" },
            { word: "Decision", translation: "Qaror", synonyms: "choice, verdict" },
            { word: "Challenge", translation: "Qiyinchilik, sinov", synonyms: "obstacle, test" },
            { word: "Success", translation: "Muvaffaqiyat, g'alaba", synonyms: "achievement, triumph" }
        ]
    },
    {
        id: 'pack_travel',
        title: "Sayohat & Turizm (Travel)",
        icon: '<i class="fa-solid fa-plane-departure text-success"></i>',
        description: "Aeroport, mehmonxona, shahar bo'ylab sayohat qilishdagi so'zlar",
        words: [
            { word: "Airport", translation: "Aeroport", synonyms: "airfield, terminal" },
            { word: "Passport", translation: "Pasport", synonyms: "travel document" },
            { word: "Luggage", translation: "Yuk, bagaj", synonyms: "baggage, suitcases" },
            { word: "Hotel", translation: "Mehmonxona", synonyms: "inn, resort" },
            { word: "Destination", translation: "Manzil, boradigan joy", synonyms: "target, stop" },
            { word: "Flight", translation: "Parvoz, reys", synonyms: "air trip, voyage" },
            { word: "Boarding", translation: "Samolyotga chiqish", synonyms: "embarking" },
            { word: "Reservation", translation: "Band qilish, bron", synonyms: "booking" },
            { word: "Departure", translation: "Jo'nab ketish", synonyms: "leaving, exit" },
            { word: "Arrival", translation: "Yetib kelish", synonyms: "coming, landing" },
            { word: "Tourist", translation: "Sayyoh, turist", synonyms: "traveler, visitor" },
            { word: "Journey", translation: "Sayohat, safar", synonyms: "trip, expedition" },
            { word: "Adventure", translation: "Sarguzasht", synonyms: "exploit, quest" },
            { word: "Vacation", translation: "Ta'til", synonyms: "holiday, break" },
            { word: "Explore", translation: "Tadqiq qilmoq, o'rganmoq", synonyms: "discover, investigate" },
            { word: "Map", translation: "Xarita", synonyms: "chart, atlas" },
            { word: "Passenger", translation: "Yo'lovchi", synonyms: "commuter, rider" },
            { word: "Ticket", translation: "Chipta", synonyms: "pass, voucher" },
            { word: "Currency", translation: "Valyuta", synonyms: "money, cash" },
            { word: "Guide", translation: "Gid, yo'lboshchi", synonyms: "escort, leader" }
        ]
    },
    {
        id: 'pack_tech',
        title: "IT & Zamonaviy Texnologiyalar",
        icon: '<i class="fa-solid fa-laptop-code text-violet"></i>',
        description: "Dasturlash, kompyuter va axborot texnologiyalari atamalari",
        words: [
            { word: "Database", translation: "Ma'lumotlar bazasi", synonyms: "data store, archive" },
            { word: "Variable", translation: "O'zgaruvchi", synonyms: "parameter, value" },
            { word: "Function", translation: "Funksiya, vazifa", synonyms: "method, routine" },
            { word: "Algorithm", translation: "Algoritm", synonyms: "formula, procedure" },
            { word: "Framework", translation: "Freymvork, platforma", synonyms: "structure, toolkit" },
            { word: "Security", translation: "Xavfsizlik", synonyms: "protection, safety" },
            { word: "Deployment", translation: "Ishga tushirish (deploy)", synonyms: "launch, release" },
            { word: "Interface", translation: "Interfeys", synonyms: "UI, connection" },
            { word: "Network", translation: "Tarmoq", synonyms: "system, web" },
            { word: "Repository", translation: "Repozitoriy, ombor", synonyms: "codebase, archive" },
            { word: "Debug", translation: "Xatolarni to'g'rilash", synonyms: "fix, troubleshoot" },
            { word: "Server", translation: "Server", synonyms: "host, backend" },
            { word: "Browser", translation: "Brauzer", synonyms: "web client" },
            { word: "Query", translation: "So'rov", synonyms: "request, search" },
            { word: "Component", translation: "Komponent, tarkibiy qism", synonyms: "module, element" },
            { word: "Software", translation: "Dasturiy ta'minot", synonyms: "program, application" },
            { word: "Storage", translation: "Xotira, saqlash joyi", synonyms: "memory, disk" },
            { word: "Update", translation: "Yangilash", synonyms: "upgrade, patch" },
            { word: "Authentication", translation: "Autentifikatsiya, tasdiqlash", synonyms: "verification, login" },
            { word: "Responsive", translation: "Moslashuvchan (dizayn)", synonyms: "adaptive, flexible" }
        ]
    },
    {
        id: 'pack_ielts',
        title: "IELTS & Academic (Top 25)",
        icon: '<i class="fa-solid fa-bullseye text-danger"></i>',
        description: "Akademik ingliz tili va imtihonlarda yuqori ball olish uchun muhim so'zlar",
        words: [
            { word: "Perseverance", translation: "Qat'iyat, matonat", synonyms: "persistence, endurance" },
            { word: "Comprehensive", translation: "Keng qamrovli, to'liq", synonyms: "thorough, complete" },
            { word: "Significant", translation: "Muhim, ahamiyatli", synonyms: "crucial, notable" },
            { word: "Evaluate", translation: "Baholamoq, qiymat bermoq", synonyms: "assess, judge" },
            { word: "Perspective", translation: "Nuqtai nazar, qarash", synonyms: "viewpoint, outlook" },
            { word: "Consequence", translation: "Oqibat, natija", synonyms: "outcome, result" },
            { word: "Determine", translation: "Aniqlamoq, belgilamoq", synonyms: "establish, identify" },
            { word: "Fundamental", translation: "Asosiy, poydevorli", synonyms: "essential, basic" },
            { word: "Indicate", translation: "Ko'rsatmoq, bildirmoq", synonyms: "show, signify" },
            { word: "Acquire", translation: "Egallamoq, orttirmoq", synonyms: "obtain, gain" },
            { word: "Maintain", translation: "Saqlamoq, ushlab turmoq", synonyms: "preserve, sustain" },
            { word: "Emphasize", translation: "Urg'u bermoq, ta'kidlamoq", synonyms: "highlight, stress" },
            { word: "Illustrate", translation: "Misollar bilan tushuntirmoq", synonyms: "demonstrate, clarify" },
            { word: "Consistent", translation: "Muntazam, barqaror", synonyms: "steady, reliable" },
            { word: "Perceive", translation: "Idrok etmoq, his qilmoq", synonyms: "notice, recognize" },
            { word: "Sufficient", translation: "Yetarli, qanoatli", synonyms: "adequate, enough" },
            { word: "Eliminate", translation: "Yo'q qilmoq, bartaraf etmoq", synonyms: "remove, eradicate" },
            { word: "Approach", translation: "Yondashuv, usul", synonyms: "method, strategy" },
            { word: "Establish", translation: "Tashkil qilmoq, o'rnatmoq", synonyms: "found, create" },
            { word: "Contribute", translation: "Hissa qo'shmoq", synonyms: "donate, supply" },
            { word: "Crucial", translation: "Hal qiluvchi, o'ta muhim", synonyms: "vital, critical" },
            { word: "Appropriate", translation: "Munosib, to'g'ri keladigan", synonyms: "suitable, proper" },
            { word: "Evidence", translation: "Dalil, isbot", synonyms: "proof, confirmation" },
            { word: "Potential", translation: "Salohiyat, imkoniyat", synonyms: "capability, capacity" },
            { word: "Complex", translation: "Murakkab, chigal", synonyms: "intricate, complicated" }
        ]
    }
];

function createDefaultSeedWords(dateStr) {
    const now = Date.now();
    return [
        {
            id: 'seed-1',
            word: 'Perseverance',
            translation: "Qat'iyat, matonat",
            phonetic: '/ˌpɜː.sɪˈvɪə.rəns/',
            synonyms: 'persistence, endurance, tenacity',
            example: 'Success requires perseverance and daily practice.',
            exampleTrans: "Muvaffaqiyat qat'iyat va kunlik mashqni talab qiladi.",
            mastery: 2,
            reviewCount: 3,
            dateStr,
            createdAt: now - 1000
        },
        {
            id: 'seed-2',
            word: 'Opportunity',
            translation: 'Imkoniyat, qulay fursat',
            phonetic: '/ˌɒp.əˈtjuː.nə.ti/',
            synonyms: 'chance, prospect',
            example: 'Every morning brings a new opportunity to learn.',
            exampleTrans: "Har tong o'rganish uchun yangi imkoniyat olib keladi.",
            mastery: 1,
            reviewCount: 1,
            dateStr,
            createdAt: now - 2000
        },
        {
            id: 'seed-3',
            word: 'Accurate',
            translation: "Aniq, to'g'ri",
            phonetic: '/ˈæk.jə.rət/',
            synonyms: 'precise, exact',
            example: 'Please provide an accurate translation of the sentence.',
            exampleTrans: "Iltimos, gapning aniq tarjimasini bering.",
            mastery: 0,
            reviewCount: 0,
            dateStr,
            createdAt: now - 3000
        },
        {
            id: 'seed-4',
            word: 'Consistent',
            translation: 'Muntazam, barqaror',
            phonetic: '/kənˈsɪs.tənt/',
            synonyms: 'steady, reliable',
            example: 'Consistent effort leads to fluency.',
            exampleTrans: 'Muntazam harakat ravon nutqqa olib keladi.',
            mastery: 2,
            reviewCount: 2,
            dateStr,
            createdAt: now - 4000
        },
        {
            id: 'seed-5',
            word: 'Comprehend',
            translation: 'Tushunmoq, anglamoq',
            phonetic: '/ˌkɒm.prɪˈhend/',
            synonyms: 'understand, grasp',
            example: 'It takes time to comprehend complex ideas.',
            exampleTrans: "Murakkab g'oyalarni tushunish uchun vaqt kerak.",
            mastery: 1,
            reviewCount: 1,
            dateStr,
            createdAt: now - 5000
        },
        {
            id: 'seed-6',
            word: 'Inspire',
            translation: 'Ilhomlantirmoq',
            phonetic: '/ɪnˈspaɪər/',
            synonyms: 'motivate, encourage',
            example: 'Great teachers inspire their students.',
            exampleTrans: "Ajoyib ustozlar o'quvchilarini ilhomlantiradi.",
            mastery: 0,
            reviewCount: 0,
            dateStr,
            createdAt: now - 6000
        }
    ];
}

class EasyLearnApp {
    constructor() {
        this.STORAGE_KEY = 'easylearn_words_v2';
        this.SETTINGS_KEY = 'easylearn_settings_v2';
        this.TUTORIAL_KEY = 'easylearn_tutorial_seen_v3';

        try {
            localStorage.removeItem('easylearn_words_data_v1');
        } catch (e) { }

        // Settings
        this.settings = this.loadSettings();

        // State
        this.words = this.loadWords();
        this.currentView = 'vocabulary';
        this.selectedDateFilter = 'all';
        this.activeStudyDate = 'all';

        // Flashcards state
        this.flashcardList = [];
        this.currentCardIndex = 0;
        this.isCardFlipped = false;
        this.flashcardStartSide = 'en';

        // Quiz state
        this.quizQuestions = [];
        this.currentQuizIndex = 0;
        this.quizScore = 0;
        this.quizStreak = 0;
        this.quizCorrectCount = 0;
        this.quizWrongCount = 0;
        this.quizSelectedAnswered = false;
        this.quizDirection = 'en-uz'; // 'en-uz' or 'uz-en'

        // Synonym Quiz state
        this.synonymQuizQuestions = [];
        this.currentSynonymQuizIndex = 0;
        this.synonymQuizScore = 0;
        this.synonymQuizStreak = 0;
        this.synonymQuizCorrectCount = 0;
        this.synonymQuizWrongCount = 0;
        this.synonymQuizAnswered = false;

        // Writing state
        this.writingList = [];
        this.currentWritingIndex = 0;
        this.revealedHintCount = 0;

        // Matching game state
        this.matchCards = [];
        this.selectedTile = null;
        this.matchedPairsCount = 0;
        this.totalMatchPairs = 0;
        this.matchTimerInterval = null;
        this.matchSecondsElapsed = 0;

        // Confirm callback & deleted backup for Undo
        this.pendingConfirmCallback = null;
        this.lastDeletedWord = null;

        // Sound Synthesizer
        this.audioCtx = null;

        // Tutorial state
        this.currentTutorialSlide = 0;
        this.totalTutorialSlides = 6;

        // Init
        this.initDOM();
        this.bindEvents();
        this.applySettingsUI();
        this.renderAll();
        this.checkOnboarding();
    }

    // ==========================================
    // STORAGE & SETTINGS
    // ==========================================
    loadSettings() {
        try {
            const raw = localStorage.getItem(this.SETTINGS_KEY);
            if (raw) return JSON.parse(raw);
        } catch (e) { }
        return { soundEnabled: true, autoSpeakFlashcards: false, speechRate: 0.92 };
    }

    saveSettings() {
        try {
            localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(this.settings));
        } catch (e) { }
    }

    getLocalDateStr(dateOrTimestamp) {
        let d;
        if (!dateOrTimestamp) d = new Date();
        else if (typeof dateOrTimestamp === 'number' || typeof dateOrTimestamp === 'string') d = new Date(dateOrTimestamp);
        else if (dateOrTimestamp instanceof Date) d = dateOrTimestamp;
        else d = new Date();
        if (isNaN(d.getTime())) d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    loadWords() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            if (data !== null) {
                const parsed = JSON.parse(data);
                if (Array.isArray(parsed)) {
                    const now = Date.now();
                    return parsed.map((item, idx) => {
                        const createdAt = item.createdAt || (now - (idx + 1) * 3600000);
                        return {
                            ...item,
                            createdAt,
                            dateStr: item.dateStr || this.getLocalDateStr(createdAt)
                        };
                    });
                }
            }
        } catch (e) {
            console.error("Storage load error:", e);
        }
        // First visit: seed with rich starter examples so every tab works right away
        const todayStr = this.getLocalDateStr();
        const seeded = createDefaultSeedWords(todayStr);
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(seeded));
        } catch (e) { }
        return seeded;
    }

    saveWords() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.words));
        } catch (e) {
            console.error("Storage save error:", e);
        }
        this.updateHeaderStats();
        this.populateAllDateSelectors();
    }

    // ==========================================
    // DOM ELEMENTS CACHING
    // ==========================================
    initDOM() {
        this.brandLogoBtn = document.getElementById('brandLogoBtn');
        this.navTabs = document.querySelectorAll('.nav-tab');
        this.bottomNavItems = document.querySelectorAll('.bottom-nav-item');
        this.bottomNavVocabBadge = document.getElementById('bottomNavVocabBadge');
        this.fabAddWord = document.getElementById('fabAddWord');
        this.quickAddToggleHeader = document.getElementById('quickAddToggleHeader');
        this.quickAddCard = document.getElementById('quickAddCard');
        this.viewSections = document.querySelectorAll('.view-section');

        // Header Stats & Controls
        this.headerTotalWords = document.getElementById('headerTotalWords');
        this.headerMasteredWords = document.getElementById('headerMasteredWords');
        this.headerStreak = document.getElementById('headerStreak');
        this.vocabCountBadge = document.getElementById('vocabCountBadge');
        this.btnToggleSoundEffects = document.getElementById('btnToggleSoundEffects');

        // Vocabulary View
        this.wordsGrid = document.getElementById('wordsGrid');
        this.searchInput = document.getElementById('searchInput');
        this.clearSearchBtn = document.getElementById('clearSearchBtn');
        this.levelFilter = document.getElementById('levelFilter');
        this.sortOrder = document.getElementById('sortOrder');
        this.emptyVocabState = document.getElementById('emptyVocabState');

        // Modals
        this.wordModal = document.getElementById('wordModal');
        this.wordForm = document.getElementById('wordForm');
        this.wordModalTitle = document.getElementById('wordModalTitle');
        this.editWordId = document.getElementById('editWordId');
        this.inputWord = document.getElementById('inputWord');
        this.inputTranslation = document.getElementById('inputTranslation');
        this.inputPhonetic = document.getElementById('inputPhonetic');
        this.inputExample = document.getElementById('inputExample');
        this.inputExampleTrans = document.getElementById('inputExampleTrans');
        this.inputSynonyms = document.getElementById('inputSynonyms');
        this.btnOpenAddModal = document.getElementById('btnOpenAddModal');
        this.btnCloseWordModal = document.getElementById('btnCloseWordModal');
        this.btnCancelWordModal = document.getElementById('btnCancelWordModal');
        this.btnPreviewInputAudio = document.getElementById('btnPreviewInputAudio');

        // Confirm Modal
        this.confirmModal = document.getElementById('confirmModal');
        this.confirmMessage = document.getElementById('confirmMessage');
        this.btnCloseConfirmModal = document.getElementById('btnCloseConfirmModal');
        this.btnConfirmCancel = document.getElementById('btnConfirmCancel');
        this.btnConfirmOk = document.getElementById('btnConfirmOk');

        // Bulk Modal
        this.bulkModal = document.getElementById('bulkModal');
        this.btnOpenBulkModal = document.getElementById('btnOpenBulkModal');
        this.btnCloseBulkModal = document.getElementById('btnCloseBulkModal');
        this.btnCancelBulkModal = document.getElementById('btnCancelBulkModal');
        this.btnSaveBulkWords = document.getElementById('btnSaveBulkWords');
        this.bulkTextArea = document.getElementById('bulkTextArea');
        this.bulkParsedCount = document.getElementById('bulkParsedCount');
        this.emptyAddBtn = document.getElementById('emptyAddBtn');
        this.emptyBulkBtn = document.getElementById('emptyBulkBtn');
        this.btnCopyGeminiPrompt = document.getElementById('btnCopyGeminiPrompt');
        this.geminiPromptText = document.getElementById('geminiPromptText');

        // Export/Import Modal
        this.exportImportModal = document.getElementById('exportImportModal');
        this.btnExportImportModal = document.getElementById('btnExportImportModal');
        this.btnCloseExportImportModal = document.getElementById('btnCloseExportImportModal');
        this.btnExportJSON = document.getElementById('btnExportJSON');
        this.btnExportCSV = document.getElementById('btnExportCSV');
        this.importFileInput = document.getElementById('importFileInput');
        this.btnTriggerFileSelect = document.getElementById('btnTriggerFileSelect');

        // Flashcards DOM
        this.btnShuffleFlashcards = document.getElementById('btnShuffleFlashcards');
        this.btnToggleCardSide = document.getElementById('btnToggleCardSide');
        this.btnAutoSpeakFlashcards = document.getElementById('btnAutoSpeakFlashcards');
        this.btnToggleSpeechRate = document.getElementById('btnToggleSpeechRate');
        this.flashcardElement = document.getElementById('flashcardElement');
        this.cardFrontWord = document.getElementById('cardFrontWord');
        this.cardFrontPhonetic = document.getElementById('cardFrontPhonetic');
        this.cardFrontExample = document.getElementById('cardFrontExample');
        this.cardFrontLangLabel = document.getElementById('cardFrontLangLabel');
        this.cardBackTranslation = document.getElementById('cardBackTranslation');
        this.cardBackExampleTrans = document.getElementById('cardBackExampleTrans');
        this.cardBackLevel = document.getElementById('cardBackLevel');
        this.cardBackLangLabel = document.getElementById('cardBackLangLabel');
        this.flashcardProgressFill = document.getElementById('flashcardProgressFill');
        this.currentCardIndexEl = document.getElementById('currentCardIndex');
        this.totalCardsCountEl = document.getElementById('totalCardsCount');
        this.btnFrontAudio = document.getElementById('btnFrontAudio');
        this.btnPrevCard = document.getElementById('btnPrevCard');
        this.btnNextCard = document.getElementById('btnNextCard');
        this.btnFlipCardAction = document.getElementById('btnFlipCardAction');
        this.btnRateAgain = document.getElementById('btnRateAgain');
        this.btnRateGood = document.getElementById('btnRateGood');
        this.btnRateEasy = document.getElementById('btnRateEasy');

        // Quiz DOM
        this.btnRestartQuiz = document.getElementById('btnRestartQuiz');
        this.btnToggleQuizDirection = document.getElementById('btnToggleQuizDirection');
        this.quizDirectionLabel = document.getElementById('quizDirectionLabel');
        this.quizQuestionType = document.getElementById('quizQuestionType');
        this.quizContainer = document.getElementById('quizContainer');
        this.quizResultsCard = document.getElementById('quizResultsCard');
        this.quizQuestionIndex = document.getElementById('quizQuestionIndex');
        this.quizTotalQuestions = document.getElementById('quizTotalQuestions');
        this.quizCurrentScore = document.getElementById('quizCurrentScore');
        this.quizCurrentStreak = document.getElementById('quizCurrentStreak');
        this.quizPromptWord = document.getElementById('quizPromptWord');
        this.quizPromptHint = document.getElementById('quizPromptHint');
        this.btnQuizAudio = document.getElementById('btnQuizAudio');
        this.quizOptionsGrid = document.getElementById('quizOptionsGrid');
        this.quizFeedbackBanner = document.getElementById('quizFeedbackBanner');
        this.feedbackIcon = document.getElementById('feedbackIcon');
        this.feedbackText = document.getElementById('feedbackText');
        this.btnNextQuizQuestion = document.getElementById('btnNextQuizQuestion');
        this.quizCorrectCountEl = document.getElementById('quizCorrectCount');
        this.quizWrongCountEl = document.getElementById('quizWrongCount');
        this.quizAccuracyPercentEl = document.getElementById('quizAccuracyPercent');
        this.btnQuizPlayAgain = document.getElementById('btnQuizPlayAgain');
        this.btnQuizGoToVocab = document.getElementById('btnQuizGoToVocab');

        // Writing DOM
        this.writingProgressFill = document.getElementById('writingProgressFill');
        this.writingCounterText = document.getElementById('writingCounterText');
        this.writingTargetTranslation = document.getElementById('writingTargetTranslation');
        this.writingTargetExample = document.getElementById('writingTargetExample');
        this.writingHintDisplay = document.getElementById('writingHintDisplay');
        this.writingForm = document.getElementById('writingForm');
        this.writingInput = document.getElementById('writingInput');
        this.btnWritingHint = document.getElementById('btnWritingHint');
        this.btnWritingAudio = document.getElementById('btnWritingAudio');
        this.btnWritingSkip = document.getElementById('btnWritingSkip');
        this.writingFeedback = document.getElementById('writingFeedback');

        // Matching DOM
        this.matchGrid = document.getElementById('matchGrid');
        this.matchTimerText = document.getElementById('matchTimerText');
        this.matchPairsLeft = document.getElementById('matchPairsLeft');
        this.btnRestartMatchGame = document.getElementById('btnRestartMatchGame');
        this.matchCompleteCard = document.getElementById('matchCompleteCard');
        this.finalMatchTime = document.getElementById('finalMatchTime');
        this.btnPlayMatchAgain = document.getElementById('btnPlayMatchAgain');

        // Stats DOM
        this.statsTotalWords = document.getElementById('statsTotalWords');
        this.statsMasteredWords = document.getElementById('statsMasteredWords');
        this.statsLearningWords = document.getElementById('statsLearningWords');
        this.statsNewWords = document.getElementById('statsNewWords');
        this.btnResetStats = document.getElementById('btnResetStats');
        this.btnStatsGoFlashcards = document.getElementById('btnStatsGoFlashcards');
        this.btnStatsGoQuiz = document.getElementById('btnStatsGoQuiz');

        this.confettiCanvas = document.getElementById('confettiCanvas');
        this.toastContainer = document.getElementById('toastContainer');

        // Quick Add Form DOM
        this.quickAddForm = document.getElementById('quickAddForm');
        this.quickWordInput = document.getElementById('quickWordInput');
        this.quickTranslationInput = document.getElementById('quickTranslationInput');

        // Starter Packs DOM
        this.packsModal = document.getElementById('packsModal');
        this.packsGrid = document.getElementById('packsGrid');
        this.btnOpenPacksToolbar = document.getElementById('btnOpenPacksToolbar');
        this.emptyPacksBtn = document.getElementById('emptyPacksBtn');
        this.btnClosePacksModal = document.getElementById('btnClosePacksModal');
        this.btnClosePacksModalBtn = document.getElementById('btnClosePacksModalBtn');
        this.extraDetailsAccordion = document.getElementById('extraDetailsAccordion');

        // Date Selectors
        this.dateFilter = document.getElementById('dateFilter');
        this.customDateFilterInput = document.getElementById('customDateFilterInput');
        this.flashcardDaySelect = document.getElementById('flashcardDaySelect');
        this.quizDaySelect = document.getElementById('quizDaySelect');
        this.writingDaySelect = document.getElementById('writingDaySelect');
        this.matchingDaySelect = document.getElementById('matchingDaySelect');
        this.synonymQuizDaySelect = document.getElementById('synonymQuizDaySelect');
        this.inputStudyDate = document.getElementById('inputStudyDate');
        this.btnDateToday = document.getElementById('btnDateToday');
        this.btnDateTomorrow = document.getElementById('btnDateTomorrow');
        this.btnDateYesterday = document.getElementById('btnDateYesterday');
        this.bulkStudyDate = document.getElementById('bulkStudyDate');

        // Synonym Quiz DOM
        this.synonymQuizContainer = document.getElementById('synonymQuizContainer');
        this.synonymQuizResultsCard = document.getElementById('synonymQuizResultsCard');
        this.synonymQuizPromptWord = document.getElementById('synonymQuizPromptWord');
        this.synonymQuizOptionsGrid = document.getElementById('synonymQuizOptionsGrid');
        this.synonymQuizFeedbackBanner = document.getElementById('synonymQuizFeedbackBanner');
        this.synonymFeedbackIcon = document.getElementById('synonymFeedbackIcon');
        this.synonymFeedbackText = document.getElementById('synonymFeedbackText');
        this.btnNextSynonymQuestion = document.getElementById('btnNextSynonymQuestion');
        this.synonymQuizQuestionIndex = document.getElementById('synonymQuizQuestionIndex');
        this.synonymQuizTotalQuestions = document.getElementById('synonymQuizTotalQuestions');
        this.synonymQuizCurrentScore = document.getElementById('synonymQuizCurrentScore');
        this.synonymQuizCurrentStreak = document.getElementById('synonymQuizCurrentStreak');
        this.btnRestartSynonymQuiz = document.getElementById('btnRestartSynonymQuiz');
        this.btnSynonymQuizPlayAgain = document.getElementById('btnSynonymQuizPlayAgain');
        this.btnSynonymQuizGoToVocab = document.getElementById('btnSynonymQuizGoToVocab');
        this.synonymQuizCorrectCountEl = document.getElementById('synonymQuizCorrectCount');
        this.synonymQuizWrongCountEl = document.getElementById('synonymQuizWrongCount');
        this.synonymQuizAccuracyPercentEl = document.getElementById('synonymQuizAccuracyPercent');
        this.btnSynonymQuizAudio = document.getElementById('btnSynonymQuizAudio');

        // Tutorial DOM
        this.tutorialModal = document.getElementById('tutorialModal');
        this.tutorialSlides = document.querySelectorAll('.tutorial-slide');
        this.tutorialDots = document.querySelectorAll('.tutorial-dot');
        if (this.tutorialSlides && this.tutorialSlides.length) {
            this.totalTutorialSlides = this.tutorialSlides.length;
        }
        this.tourStagePill = document.getElementById('tourStagePill');
        this.tutorialProgressFill = document.getElementById('tutorialProgressFill');
        this.btnSkipTutorial = document.getElementById('btnSkipTutorial');
        this.btnCloseTutorialModal = document.getElementById('btnCloseTutorialModal');
        this.btnTutorialPrev = document.getElementById('btnTutorialPrev');
        this.btnTutorialNext = document.getElementById('btnTutorialNext');
        this.btnTutorialNextText = document.getElementById('btnTutorialNextText');
        this.btnTutorialNextIcon = document.getElementById('btnTutorialNextIcon');
        this.btnTutorialLoadA1 = document.getElementById('btnTutorialLoadA1');
        this.btnTutorialStartFresh = document.getElementById('btnTutorialStartFresh');
        this.tutCardChoiceA1 = document.getElementById('tutCardChoiceA1');
        this.tutCardChoiceFresh = document.getElementById('tutCardChoiceFresh');
        this.btnOpenTutorial = document.getElementById('btnOpenTutorial');

        const todayStr = this.getLocalDateStr();
        if (this.inputStudyDate) this.inputStudyDate.value = todayStr;
        if (this.bulkStudyDate) this.bulkStudyDate.value = todayStr;
    }

    // ==========================================
    // EVENT LISTENERS
    // ==========================================
    bindEvents() {
        if (this.brandLogoBtn) {
            this.brandLogoBtn.addEventListener('click', () => this.switchView('vocabulary'));
        }

        if (this.btnToggleSoundEffects) {
            this.btnToggleSoundEffects.addEventListener('click', () => {
                this.settings.soundEnabled = !this.settings.soundEnabled;
                this.saveSettings();
                this.applySettingsUI();
                if (this.settings.soundEnabled) this.playPopSound(560);
                this.showToast(
                    this.settings.soundEnabled ? "O'yin tovushlari yoqildi" : "O'yin tovushlari o'chirildi",
                    "info"
                );
            });
        }

        [this.wordModal, this.bulkModal, this.exportImportModal, this.packsModal, this.tutorialModal, this.confirmModal].forEach(modal => {
            if (!modal) return;
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    if (modal === this.tutorialModal) this.closeTutorialModal();
                    else if (modal === this.confirmModal) this.closeConfirmModal();
                    else modal.classList.add('hidden');
                }
            });
        });

        // Confirm modal buttons
        if (this.btnCloseConfirmModal) this.btnCloseConfirmModal.addEventListener('click', () => this.closeConfirmModal());
        if (this.btnConfirmCancel) this.btnConfirmCancel.addEventListener('click', () => this.closeConfirmModal());
        if (this.btnConfirmOk) {
            this.btnConfirmOk.addEventListener('click', () => {
                const cb = this.pendingConfirmCallback;
                this.closeConfirmModal();
                if (typeof cb === 'function') cb();
            });
        }

        // Tutorial & Onboarding
        if (this.btnOpenTutorial) this.btnOpenTutorial.addEventListener('click', () => this.openTutorialModal(0));
        if (this.btnSkipTutorial) this.btnSkipTutorial.addEventListener('click', () => this.skipTutorial());
        if (this.btnCloseTutorialModal) this.btnCloseTutorialModal.addEventListener('click', () => this.closeTutorialModal());
        if (this.btnTutorialPrev) this.btnTutorialPrev.addEventListener('click', () => this.prevTutorialSlide());
        if (this.btnTutorialNext) this.btnTutorialNext.addEventListener('click', () => this.nextTutorialSlide());

        this.tutorialDots.forEach((dot, idx) => {
            dot.addEventListener('click', () => this.goToTutorialSlide(idx));
        });

        if (this.btnTutorialLoadA1) this.btnTutorialLoadA1.addEventListener('click', () => this.handleTutorialLoadA1());
        if (this.tutCardChoiceA1) {
            this.tutCardChoiceA1.addEventListener('click', (e) => {
                if (e.target !== this.btnTutorialLoadA1 && !this.btnTutorialLoadA1?.contains(e.target)) {
                    this.handleTutorialLoadA1();
                }
            });
        }
        if (this.btnTutorialStartFresh) this.btnTutorialStartFresh.addEventListener('click', () => this.handleTutorialStartFresh());
        if (this.tutCardChoiceFresh) {
            this.tutCardChoiceFresh.addEventListener('click', (e) => {
                if (e.target !== this.btnTutorialStartFresh && !this.btnTutorialStartFresh?.contains(e.target)) {
                    this.handleTutorialStartFresh();
                }
            });
        }


        // Quick Add
        if (this.quickAddForm) this.quickAddForm.addEventListener('submit', (e) => this.handleQuickAdd(e));
        if (this.quickWordInput && this.quickTranslationInput) {
            this.quickWordInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && this.quickWordInput.value.trim() && !this.quickTranslationInput.value.trim()) {
                    e.preventDefault();
                    this.quickTranslationInput.focus();
                }
            });
        }

        // Starter Packs
        if (this.btnOpenPacksToolbar) this.btnOpenPacksToolbar.addEventListener('click', () => this.openPacksModal());
        if (this.emptyPacksBtn) this.emptyPacksBtn.addEventListener('click', () => this.openPacksModal());
        if (this.btnClosePacksModal) this.btnClosePacksModal.addEventListener('click', () => this.closePacksModal());
        if (this.btnClosePacksModalBtn) this.btnClosePacksModalBtn.addEventListener('click', () => this.closePacksModal());

        // Navigation
        this.navTabs.forEach(tab => {
            tab.addEventListener('click', () => this.switchView(tab.dataset.view));
        });
        this.bottomNavItems.forEach(item => {
            item.addEventListener('click', () => this.switchView(item.dataset.view));
        });

        if (this.fabAddWord) this.fabAddWord.addEventListener('click', () => this.openAddWordModal());
        if (this.quickAddToggleHeader && this.quickAddCard) {
            this.quickAddToggleHeader.addEventListener('click', () => this.quickAddCard.classList.toggle('collapsed'));
        }

        // Search & Filters
        this.searchInput.addEventListener('input', () => {
            this.clearSearchBtn.classList.toggle('visible', this.searchInput.value.length > 0);
            this.renderVocabularyGrid();
        });
        this.clearSearchBtn.addEventListener('click', () => {
            this.searchInput.value = '';
            this.clearSearchBtn.classList.remove('visible');
            this.renderVocabularyGrid();
            this.searchInput.focus();
        });

        if (this.dateFilter) {
            this.dateFilter.addEventListener('change', () => {
                const val = this.dateFilter.value;
                if (val === 'custom') {
                    if (this.customDateFilterInput) {
                        this.customDateFilterInput.classList.remove('hidden');
                        if (typeof this.customDateFilterInput.showPicker === 'function') this.customDateFilterInput.showPicker();
                        else this.customDateFilterInput.focus();
                    }
                } else {
                    if (this.customDateFilterInput) this.customDateFilterInput.classList.add('hidden');
                    this.selectedDateFilter = val;
                    this.updateDateFilterBadge();
                    this.renderVocabularyGrid();
                }
            });
        }
        if (this.customDateFilterInput) {
            this.customDateFilterInput.addEventListener('change', () => {
                if (this.customDateFilterInput.value) {
                    this.selectedDateFilter = this.customDateFilterInput.value;
                    this.updateDateFilterBadge();
                    this.renderVocabularyGrid();
                }
            });
        }

        this.levelFilter.addEventListener('change', () => this.renderVocabularyGrid());
        this.sortOrder.addEventListener('change', () => this.renderVocabularyGrid());

        // Word Modal
        this.btnOpenAddModal.addEventListener('click', () => this.openAddWordModal());
        this.btnCloseWordModal.addEventListener('click', () => this.closeWordModal());
        this.btnCancelWordModal.addEventListener('click', () => this.closeWordModal());
        this.wordForm.addEventListener('submit', (e) => this.handleSaveWord(e));
        this.btnPreviewInputAudio.addEventListener('click', () => {
            if (this.inputWord.value.trim()) this.speak(this.inputWord.value.trim(), this.btnPreviewInputAudio);
        });

        if (this.btnDateToday) this.btnDateToday.addEventListener('click', () => { if (this.inputStudyDate) this.inputStudyDate.value = this.getLocalDateStr(); });
        if (this.btnDateTomorrow) this.btnDateTomorrow.addEventListener('click', () => {
            const d = new Date(); d.setDate(d.getDate() + 1);
            if (this.inputStudyDate) this.inputStudyDate.value = this.getLocalDateStr(d);
        });
        if (this.btnDateYesterday) this.btnDateYesterday.addEventListener('click', () => {
            const d = new Date(); d.setDate(d.getDate() - 1);
            if (this.inputStudyDate) this.inputStudyDate.value = this.getLocalDateStr(d);
        });

        // Bulk Modal
        this.btnOpenBulkModal.addEventListener('click', () => this.openBulkModal());
        this.btnCloseBulkModal.addEventListener('click', () => this.closeBulkModal());
        this.btnCancelBulkModal.addEventListener('click', () => this.closeBulkModal());
        this.btnSaveBulkWords.addEventListener('click', () => this.handleSaveBulkWords());
        this.bulkTextArea.addEventListener('input', () => this.updateBulkParsedCount());
        this.emptyAddBtn.addEventListener('click', () => this.openAddWordModal());
        this.emptyBulkBtn.addEventListener('click', () => this.openBulkModal());

        if (this.btnCopyGeminiPrompt && this.geminiPromptText) {
            this.btnCopyGeminiPrompt.addEventListener('click', () => this.copyGeminiPrompt());
        }

        // Export / Import
        this.btnExportImportModal.addEventListener('click', () => this.exportImportModal.classList.remove('hidden'));
        this.btnCloseExportImportModal.addEventListener('click', () => this.exportImportModal.classList.add('hidden'));
        this.btnExportJSON.addEventListener('click', () => this.exportJSON());
        this.btnExportCSV.addEventListener('click', () => this.exportCSV());
        this.btnTriggerFileSelect.addEventListener('click', () => this.importFileInput.click());
        this.importFileInput.addEventListener('change', (e) => this.handleImportFile(e));

        // Flashcards
        if (this.flashcardDaySelect) {
            this.flashcardDaySelect.addEventListener('change', (e) => {
                this.activeStudyDate = e.target.value;
                this.syncStudyDaySelectors(this.activeStudyDate);
                this.initFlashcards();
            });
        }
        if (this.btnToggleSpeechRate) {
            this.btnToggleSpeechRate.addEventListener('click', () => {
                const isSlow = this.settings.speechRate && this.settings.speechRate < 0.8;
                this.settings.speechRate = isSlow ? 0.92 : 0.68;
                this.saveSettings();
                this.applySettingsUI();
                this.playPopSound(isSlow ? 560 : 460);
                this.showToast(isSlow ? "Talaffuz tezligi: Oddiy (1x)" : "Talaffuz tezligi: Sekin va aniq (0.7x)", "info");
                const current = this.flashcardList[this.currentCardIndex];
                if (current) this.speak(current.word, this.btnFrontAudio);
            });
        }
        if (this.btnToggleSpeechRate) {
            const isSlow = this.settings.speechRate && this.settings.speechRate < 0.8;
            this.btnToggleSpeechRate.textContent = isSlow ? '0.7x' : '1x';
            this.btnToggleSpeechRate.classList.toggle('active-toggle', !!isSlow);
        }
        if (this.btnAutoSpeakFlashcards) {
            this.btnAutoSpeakFlashcards.addEventListener('click', () => {
                this.settings.autoSpeakFlashcards = !this.settings.autoSpeakFlashcards;
                this.saveSettings();
                this.applySettingsUI();
                this.showToast(
                    this.settings.autoSpeakFlashcards ? "Avto-talaffuz yoqildi" : "Avto-talaffuz o'chirildi",
                    "info"
                );
                if (this.settings.autoSpeakFlashcards && this.flashcardList[this.currentCardIndex]) {
                    this.speak(this.flashcardList[this.currentCardIndex].word, this.btnFrontAudio);
                }
            });
        }
        this.flashcardElement.addEventListener('click', () => {
            if (this.lastTouchEnd && Date.now() - this.lastTouchEnd < 400) return;
            this.flipFlashcard();
        });
        this.setupFlashcardSwipeGestures();
        this.btnFlipCardAction.addEventListener('click', () => this.flipFlashcard());
        this.btnFrontAudio.addEventListener('click', (e) => {
            e.stopPropagation();
            const current = this.flashcardList[this.currentCardIndex];
            if (current) this.speak(current.word, this.btnFrontAudio);
        });
        this.btnShuffleFlashcards.addEventListener('click', () => {
            this.shuffleArray(this.flashcardList);
            this.currentCardIndex = 0;
            this.renderCurrentFlashcard();
            this.showToast("Kartalar aralashtirildi!", "info");
        });
        this.btnToggleCardSide.addEventListener('click', () => {
            this.flashcardStartSide = this.flashcardStartSide === 'en' ? 'uz' : 'en';
            this.isCardFlipped = false;
            this.renderCurrentFlashcard();
            this.showToast(this.flashcardStartSide === 'en' ? "Old tomoni: Inglizcha" : "Old tomoni: O'zbekcha", "info");
        });
        this.btnPrevCard.addEventListener('click', () => this.prevFlashcard());
        this.btnNextCard.addEventListener('click', () => this.nextFlashcard());
        if (this.btnRateAgain) this.btnRateAgain.addEventListener('click', () => this.rateFlashcard(0));
        if (this.btnRateGood) this.btnRateGood.addEventListener('click', () => this.rateFlashcard(1));
        if (this.btnRateEasy) this.btnRateEasy.addEventListener('click', () => this.rateFlashcard(2));
        if (this.btnStatsGoFlashcards) this.btnStatsGoFlashcards.addEventListener('click', () => this.switchView('flashcards'));
        if (this.btnStatsGoQuiz) this.btnStatsGoQuiz.addEventListener('click', () => this.switchView('quiz'));

        // Quiz
        if (this.quizDaySelect) {
            this.quizDaySelect.addEventListener('change', (e) => {
                this.activeStudyDate = e.target.value;
                this.syncStudyDaySelectors(this.activeStudyDate);
                this.initQuiz();
            });
        }
        if (this.btnToggleQuizDirection) {
            this.btnToggleQuizDirection.addEventListener('click', () => {
                this.quizDirection = this.quizDirection === 'en-uz' ? 'uz-en' : 'en-uz';
                if (this.quizDirectionLabel) {
                    this.quizDirectionLabel.textContent = this.quizDirection === 'en-uz' ? 'EN → UZ' : 'UZ → EN';
                }
                this.initQuiz();
                this.showToast(
                    this.quizDirection === 'en-uz' ? "Savollar: Inglizcha → O'zbekcha" : "Savollar: O'zbekcha → Inglizcha",
                    "info"
                );
            });
        }
        this.btnRestartQuiz.addEventListener('click', () => this.initQuiz());
        this.btnNextQuizQuestion.addEventListener('click', () => this.nextQuizQuestion());
        this.btnQuizPlayAgain.addEventListener('click', () => this.initQuiz());
        this.btnQuizGoToVocab.addEventListener('click', () => this.switchView('vocabulary'));
        this.btnQuizAudio.addEventListener('click', () => {
            const current = this.quizQuestions[this.currentQuizIndex];
            if (current) this.speak(current.word, this.btnQuizAudio);
        });

        // Writing
        if (this.writingDaySelect) {
            this.writingDaySelect.addEventListener('change', (e) => {
                this.activeStudyDate = e.target.value;
                this.syncStudyDaySelectors(this.activeStudyDate);
                this.initWriting();
            });
        }
        this.writingForm.addEventListener('submit', (e) => this.handleWritingSubmit(e));
        this.btnWritingHint.addEventListener('click', () => this.giveWritingHint());
        this.btnWritingAudio.addEventListener('click', () => {
            const current = this.writingList[this.currentWritingIndex];
            if (current) this.speak(current.word, this.btnWritingAudio);
        });
        this.btnWritingSkip.addEventListener('click', () => this.skipWritingWord());

        // Matching Game
        if (this.matchingDaySelect) {
            this.matchingDaySelect.addEventListener('change', (e) => {
                this.activeStudyDate = e.target.value;
                this.syncStudyDaySelectors(this.activeStudyDate);
                this.initMatchingGame();
            });
        }
        this.btnRestartMatchGame.addEventListener('click', () => this.initMatchingGame());
        this.btnPlayMatchAgain.addEventListener('click', () => this.initMatchingGame());

        // Synonym Quiz
        if (this.synonymQuizDaySelect) {
            this.synonymQuizDaySelect.addEventListener('change', (e) => {
                this.activeStudyDate = e.target.value;
                this.syncStudyDaySelectors(this.activeStudyDate);
                this.initSynonymQuiz();
            });
        }
        if (this.btnRestartSynonymQuiz) this.btnRestartSynonymQuiz.addEventListener('click', () => this.initSynonymQuiz());
        if (this.btnNextSynonymQuestion) this.btnNextSynonymQuestion.addEventListener('click', () => this.nextSynonymQuestion());
        if (this.btnSynonymQuizPlayAgain) this.btnSynonymQuizPlayAgain.addEventListener('click', () => this.initSynonymQuiz());
        if (this.btnSynonymQuizGoToVocab) this.btnSynonymQuizGoToVocab.addEventListener('click', () => this.switchView('vocabulary'));
        if (this.btnSynonymQuizAudio) {
            this.btnSynonymQuizAudio.addEventListener('click', () => {
                const current = this.synonymQuizQuestions[this.currentSynonymQuizIndex];
                if (current) this.speak(current.word, this.btnSynonymQuizAudio);
            });
        }

        // Stats
        this.btnResetStats.addEventListener('click', () => {
            this.renderStatsView();
            this.showToast("Statistika yangilandi", "info");
        });

        document.addEventListener('keydown', (e) => this.handleKeydown(e));
    }

    applySettingsUI() {
        if (this.btnToggleSoundEffects) {
            const icon = this.btnToggleSoundEffects.querySelector('i');
            if (this.settings.soundEnabled) {
                if (icon) icon.className = 'fa-solid fa-volume-high';
                this.btnToggleSoundEffects.title = "O'yin tovushlari: Yoqilgan";
                this.btnToggleSoundEffects.classList.remove('text-muted');
            } else {
                if (icon) icon.className = 'fa-solid fa-volume-xmark';
                this.btnToggleSoundEffects.title = "O'yin tovushlari: O'chirilgan";
                this.btnToggleSoundEffects.classList.add('text-muted');
            }
        }
        if (this.btnAutoSpeakFlashcards) {
            this.btnAutoSpeakFlashcards.classList.toggle('active-toggle', !!this.settings.autoSpeakFlashcards);
            this.btnAutoSpeakFlashcards.title = this.settings.autoSpeakFlashcards
                ? "Avtomatik talaffuz (Yoqilgan)"
                : "Avtomatik talaffuz (O'chiq)";
        }
    }

    copyGeminiPrompt() {
        const promptToCopy = (this.geminiPromptText.innerText || this.geminiPromptText.textContent || '').trim();
        const onSuccess = () => {
            const originalHtml = this.btnCopyGeminiPrompt.innerHTML;
            this.btnCopyGeminiPrompt.innerHTML = '<i class="fa-solid fa-check"></i> <span>Nusxalandi!</span>';
            this.btnCopyGeminiPrompt.classList.add('copied');
            this.showToast("Gemini prompti nusxalandi!", "success");
            setTimeout(() => {
                this.btnCopyGeminiPrompt.innerHTML = originalHtml;
                this.btnCopyGeminiPrompt.classList.remove('copied');
            }, 2200);
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(promptToCopy).then(onSuccess).catch(() => this.fallbackCopy(promptToCopy, onSuccess));
        } else {
            this.fallbackCopy(promptToCopy, onSuccess);
        }
    }

    fallbackCopy(text, onSuccess) {
        try {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            onSuccess();
        } catch (err) {
            this.showToast("Nusxalashda xatolik yuz berdi.", "error");
        }
    }

    // ==========================================
    // VIEW SWITCHING & STREAK
    // ==========================================
    switchView(viewName) {
        if (viewName !== 'matching' && this.matchTimerInterval) {
            clearInterval(this.matchTimerInterval);
            this.matchTimerInterval = null;
        }

        this.currentView = viewName;
        this.navTabs.forEach(tab => tab.classList.toggle('active', tab.dataset.view === viewName));
        this.bottomNavItems.forEach(item => item.classList.toggle('active', item.dataset.view === viewName));
        this.viewSections.forEach(sec => sec.classList.toggle('active', sec.id === `${viewName}View`));

        if (this.fabAddWord) {
            this.fabAddWord.style.display = (viewName === 'writing' || viewName === 'matching') ? 'none' : 'flex';
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (viewName === 'vocabulary') this.renderVocabularyGrid();
        else if (viewName === 'flashcards') this.initFlashcards();
        else if (viewName === 'quiz') this.initQuiz();
        else if (viewName === 'writing') this.initWriting();
        else if (viewName === 'matching') this.initMatchingGame();
        else if (viewName === 'synonymquiz') this.initSynonymQuiz();
        else if (viewName === 'stats') this.renderStatsView();
    }

    loadStreakData() {
        try {
            const raw = localStorage.getItem('easylearn_streak_data');
            if (raw) {
                const parsed = JSON.parse(raw);
                const todayStr = this.getLocalDateStr();
                if (parsed.lastDate !== todayStr) {
                    const yesterdayStr = this.getLocalDateStr(Date.now() - 86400000);
                    return {
                        streak: parsed.lastDate === yesterdayStr ? (parsed.streak || 1) : 1,
                        lastDate: parsed.lastDate,
                        todayLearnedCount: 0
                    };
                }
                return parsed;
            }
        } catch (e) { }
        return { streak: 1, lastDate: this.getLocalDateStr(), todayLearnedCount: 0 };
    }

    saveStreakData(data) {
        try {
            localStorage.setItem('easylearn_streak_data', JSON.stringify(data));
        } catch (e) { }
    }

    recordActivity() {
        const data = this.loadStreakData();
        const todayStr = this.getLocalDateStr();
        const yesterdayStr = this.getLocalDateStr(Date.now() - 86400000);

        if (data.lastDate === todayStr) {
            data.todayLearnedCount = (data.todayLearnedCount || 0) + 1;
        } else if (data.lastDate === yesterdayStr) {
            data.streak = (data.streak || 1) + 1;
            data.lastDate = todayStr;
            data.todayLearnedCount = 1;
        } else {
            data.streak = 1;
            data.lastDate = todayStr;
            data.todayLearnedCount = 1;
        }

        this.saveStreakData(data);
        this.updateStreakUI();
        this.updateMotivationBanner();
    }

    updateStreakUI() {
        const data = this.loadStreakData();
        const streak = data.streak || 1;
        if (this.headerStreak) this.headerStreak.textContent = streak;
        const statsStreakDays = document.getElementById('statsStreakDays');
        if (statsStreakDays) statsStreakDays.textContent = streak;
    }

    renderAll() {
        this.updateHeaderStats();
        this.populateAllDateSelectors();
        this.renderVocabularyGrid();
    }

    updateHeaderStats() {
        const total = this.words.length;
        const mastered = this.words.filter(w => w.mastery === 2).length;
        this.headerTotalWords.textContent = total;
        this.headerMasteredWords.textContent = mastered;
        this.vocabCountBadge.textContent = total;
        if (this.bottomNavVocabBadge) this.bottomNavVocabBadge.textContent = total;
        this.updateStreakUI();
        this.updateMotivationBanner();
    }

    updateMotivationBanner() { }

    // ==========================================
    // VOCABULARY LIST & DATE FILTERS
    // ==========================================
    populateAllDateSelectors() {
        const todayStr = this.getLocalDateStr();
        const yesterdayStr = this.getLocalDateStr(Date.now() - 86400000);

        const dateCountMap = new Map();
        this.words.forEach(w => {
            const d = w.dateStr || this.getLocalDateStr(w.createdAt);
            dateCountMap.set(d, (dateCountMap.get(d) || 0) + 1);
        });

        const total = this.words.length;
        const todayCount = dateCountMap.get(todayStr) || 0;
        const yesterdayCount = dateCountMap.get(yesterdayStr) || 0;
        const distinctDates = Array.from(dateCountMap.keys()).sort().reverse();

        if (this.dateFilter) {
            let html = `
                <option value="all">Barcha kunlar (${total})</option>
                <option value="today">Bugun (${todayCount})</option>
                <option value="yesterday">Kecha (${yesterdayCount})</option>
            `;
            distinctDates.forEach(dateKey => {
                if (dateKey !== todayStr && dateKey !== yesterdayStr) {
                    const info = this.getDateKeyAndLabel(null, dateKey);
                    html += `<option value="${dateKey}">${info.label} (${dateCountMap.get(dateKey) || 0})</option>`;
                }
            });
            html += `<option value="custom">Boshqa sana tanlash...</option>`;
            const currentVal = this.selectedDateFilter || 'all';
            this.dateFilter.innerHTML = html;
            this.dateFilter.value = currentVal;
        }

        const studySelectors = [
            this.flashcardDaySelect,
            this.quizDaySelect,
            this.writingDaySelect,
            this.matchingDaySelect,
            this.synonymQuizDaySelect
        ];

        studySelectors.forEach(sel => {
            if (!sel) return;
            let optionsHTML = `<option value="all">Barcha so'zlar (${total})</option>`;
            optionsHTML += `<option value="today">Bugun (${todayCount})</option>`;
            if (yesterdayCount > 0) optionsHTML += `<option value="yesterday">Kecha (${yesterdayCount})</option>`;
            distinctDates.forEach(dateKey => {
                if (dateKey !== todayStr && dateKey !== yesterdayStr) {
                    const info = this.getDateKeyAndLabel(null, dateKey);
                    optionsHTML += `<option value="${dateKey}">${info.label} (${dateCountMap.get(dateKey) || 0})</option>`;
                }
            });
            sel.innerHTML = optionsHTML;
            sel.value = this.activeStudyDate || 'all';
        });

        this.updateDateFilterBadge();
    }

    syncStudyDaySelectors(value) {
        [this.flashcardDaySelect, this.quizDaySelect, this.writingDaySelect, this.matchingDaySelect, this.synonymQuizDaySelect].forEach(sel => {
            if (sel) sel.value = value;
        });
    }

    updateDateFilterBadge() {
        if (!this.activeDateFilterBadge || !this.activeDateFilterText) return;
        const val = this.selectedDateFilter;
        if (!val || val === 'all') {
            this.activeDateFilterBadge.classList.add('hidden');
        } else {
            let label = val;
            if (val === 'today') label = 'Bugun';
            else if (val === 'yesterday') label = 'Kecha';
            else label = this.getDateKeyAndLabel(null, val).label;
            this.activeDateFilterText.textContent = label;
            this.activeDateFilterBadge.classList.remove('hidden');
        }
    }

    getWordsForStudy(dayChoice = this.activeStudyDate) {
        const todayStr = this.getLocalDateStr();
        const yesterdayStr = this.getLocalDateStr(Date.now() - 86400000);
        if (!dayChoice || dayChoice === 'all') return [...this.words];
        if (dayChoice === 'today') return this.words.filter(w => (w.dateStr || this.getLocalDateStr(w.createdAt)) === todayStr);
        if (dayChoice === 'yesterday') return this.words.filter(w => (w.dateStr || this.getLocalDateStr(w.createdAt)) === yesterdayStr);
        return this.words.filter(w => (w.dateStr || this.getLocalDateStr(w.createdAt)) === dayChoice);
    }

    getFilteredWords() {
        const search = this.searchInput.value.toLowerCase().trim();
        const lvl = this.levelFilter.value;
        const sort = this.sortOrder.value;
        const dateChoice = this.selectedDateFilter;
        const todayStr = this.getLocalDateStr();
        const yesterdayStr = this.getLocalDateStr(Date.now() - 86400000);

        const list = this.words.filter(item => {
            const matchSearch = !search ||
                item.word.toLowerCase().includes(search) ||
                item.translation.toLowerCase().includes(search) ||
                (item.synonyms && item.synonyms.toLowerCase().includes(search)) ||
                (item.example && item.example.toLowerCase().includes(search));

            let matchLvl = true;
            if (lvl === 'new') matchLvl = !item.mastery || item.mastery === 0;
            if (lvl === 'learning') matchLvl = item.mastery === 1;
            if (lvl === 'mastered') matchLvl = item.mastery === 2;

            const itemDate = item.dateStr || this.getLocalDateStr(item.createdAt);
            let matchDate = true;
            if (dateChoice === 'today') matchDate = itemDate === todayStr;
            else if (dateChoice === 'yesterday') matchDate = itemDate === yesterdayStr;
            else if (dateChoice && dateChoice !== 'all' && dateChoice !== 'custom') matchDate = itemDate === dateChoice;

            return matchSearch && matchLvl && matchDate;
        });

        list.sort((a, b) => {
            if (sort === 'newest') return (b.createdAt || 0) - (a.createdAt || 0);
            if (sort === 'oldest') return (a.createdAt || 0) - (b.createdAt || 0);
            if (sort === 'alpha-asc') return a.word.localeCompare(b.word);
            if (sort === 'alpha-desc') return b.word.localeCompare(a.word);
            if (sort === 'mastery-asc') return (a.mastery || 0) - (b.mastery || 0);
            if (sort === 'mastery-desc') return (b.mastery || 0) - (a.mastery || 0);
            return 0;
        });

        return list;
    }

    getDateKeyAndLabel(timestamp, dateStr) {
        const todayStr = this.getLocalDateStr();
        const yesterdayStr = this.getLocalDateStr(Date.now() - 86400000);
        const actualDateStr = dateStr || this.getLocalDateStr(timestamp);

        if (actualDateStr === todayStr) {
            return { key: todayStr, dateStr: todayStr, label: 'Bugun', icon: 'fa-solid fa-wand-magic-sparkles text-warning' };
        } else if (actualDateStr === yesterdayStr) {
            return { key: yesterdayStr, dateStr: yesterdayStr, label: 'Kecha', icon: 'fa-regular fa-calendar-check text-primary' };
        }

        const parts = (actualDateStr || '').split('-');
        if (parts.length === 3) {
            const y = parseInt(parts[0], 10);
            const m = parseInt(parts[1], 10) - 1;
            const d = parseInt(parts[2], 10);
            const dt = new Date(y, m, d);
            const now = new Date();
            const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];
            const days = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
            const yearStr = y === now.getFullYear() ? '' : `, ${y}`;
            const dayName = days[dt.getDay()];
            return {
                key: actualDateStr,
                dateStr: actualDateStr,
                label: `${dayName ? dayName + ', ' : ''}${d}-${months[m]}${yearStr}`,
                icon: 'fa-regular fa-calendar-days text-primary'
            };
        }

        return { key: 'older', dateStr: actualDateStr, label: "Oldinroq qo'shilganlar", icon: 'fa-regular fa-clock' };
    }

    formatCardDate(item) {
        const dateStr = item.dateStr || this.getLocalDateStr(item.createdAt);
        const todayStr = this.getLocalDateStr();
        const yesterdayStr = this.getLocalDateStr(Date.now() - 86400000);
        if (dateStr === todayStr) return "Bugun";
        if (dateStr === yesterdayStr) return "Kecha";
        const parts = dateStr.split('-');
        if (parts.length === 3) {
            const months = ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'];
            return `${parseInt(parts[2], 10)}-${months[parseInt(parts[1], 10) - 1]}`;
        }
        return dateStr;
    }

    renderWordCardHTML(item) {
        let levelLabel = 'Yangi';
        let levelClass = 'new';
        let masteryPercent = '20%';
        if (item.mastery === 1) {
            levelLabel = "O'rganilmoqda";
            levelClass = 'learning';
            masteryPercent = '60%';
        } else if (item.mastery === 2) {
            levelLabel = 'Yodlandi';
            levelClass = 'mastered';
            masteryPercent = '100%';
        }

        const metaParts = [];
        if (item.synonyms && item.synonyms.trim()) metaParts.push('≈ ' + item.synonyms.trim());
        else if (item.example && item.example.trim()) metaParts.push('"' + item.example.trim() + '"');
        const metaLine = metaParts.length ? `<div class="word-meta-line">${this.escapeHTML(metaParts[0])}</div>` : '';

        return `
            <div class="word-card mastery-${levelClass}" data-id="${item.id}">
                <div class="word-card-top">
                    <button type="button" class="badge level-badge ${levelClass}" data-action="toggle-mastery" data-id="${item.id}" title="Holatni almashtirish">
                        <span class="badge-dot"></span>
                        <span>${levelLabel}</span>
                    </button>
                    <div class="card-actions-group">
                        <button type="button" class="btn-action-icon btn-edit" data-action="edit" data-id="${item.id}" title="Tahrirlash">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button type="button" class="btn-action-icon btn-delete" data-action="delete" data-id="${item.id}" title="O'chirish">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>

                <div class="word-card-body">
                    <div class="word-primary-row">
                        <h3 class="word-title" data-action="speak" data-word="${this.escapeAttr(item.word)}" title="Talaffuzni tinglash">${this.escapeHTML(item.word)}</h3>
                        <button type="button" class="btn-sound-card" data-action="speak" data-word="${this.escapeAttr(item.word)}" title="Tinglash">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                    </div>
                    <div class="word-translation-text">${this.escapeHTML(item.translation)}</div>
                    ${metaLine}
                </div>

                <div class="word-card-footer" data-action="toggle-mastery" data-id="${item.id}" title="Holatni o'zgartirish">
                    <div class="mastery-track">
                        <div class="mastery-bar-fill ${levelClass}" style="width: ${masteryPercent};"></div>
                    </div>
                </div>
            </div>
        `;
    }

    renderVocabularyGrid() {
        const filtered = this.getFilteredWords();
        if (this.displayedCount) this.displayedCount.textContent = filtered.length;

        if (filtered.length === 0) {
            this.wordsGrid.innerHTML = '';
            this.emptyVocabState.classList.remove('hidden');
            return;
        }

        this.emptyVocabState.classList.add('hidden');

        const groups = [];
        const groupMap = new Map();

        filtered.forEach(item => {
            const dateInfo = this.getDateKeyAndLabel(item.createdAt, item.dateStr);
            if (!groupMap.has(dateInfo.key)) {
                const groupObj = {
                    key: dateInfo.key,
                    dateStr: dateInfo.dateStr,
                    label: dateInfo.label,
                    icon: dateInfo.icon,
                    items: []
                };
                groupMap.set(dateInfo.key, groupObj);
                groups.push(groupObj);
            }
            groupMap.get(dateInfo.key).items.push(item);
        });

        this.wordsGrid.innerHTML = groups.map(group => `
            <div class="date-group-section">
                <div class="date-group-header">
                    <div class="date-group-title">
                        <i class="${group.icon}"></i>
                        <span>${group.label}</span>
                        <span class="date-group-count">· ${group.items.length} ta</span>
                    </div>
                    <div class="date-group-line"></div>
                    <div class="date-group-actions">
                        <button type="button" class="btn-study-day" data-study-date="${group.dateStr}" title="Faqat shu kundagi so'zlarni yodlash">
                            <i class="fa-solid fa-play"></i> Yodlash
                        </button>
                    </div>
                </div>
                <div class="date-group-grid">
                    ${group.items.map(item => this.renderWordCardHTML(item)).join('')}
                </div>
            </div>
        `).join('');

        this.wordsGrid.querySelectorAll('.btn-study-day').forEach(btn => {
            btn.addEventListener('click', () => {
                const studyDate = btn.dataset.studyDate;
                this.activeStudyDate = studyDate;
                this.syncStudyDaySelectors(studyDate);
                this.switchView('flashcards');
                const info = this.getDateKeyAndLabel(null, studyDate);
                this.showToast(`"${info.label}" so'zlari yuklandi!`, "info");
            });
        });

        this.wordsGrid.querySelectorAll('[data-action]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const action = btn.dataset.action;
                const id = btn.dataset.id;
                const word = btn.dataset.word;
                if (action === 'edit') this.openEditWordModal(id);
                else if (action === 'delete') this.deleteWord(id);
                else if (action === 'speak') this.speak(word, btn);
                else if (action === 'toggle-mastery') this.toggleWordMastery(id);
            });
        });
    }

    toggleWordMastery(id) {
        const item = this.words.find(w => w.id === id);
        if (!item) return;

        item.mastery = ((item.mastery || 0) + 1) % 3;
        this.saveWords();
        this.renderVocabularyGrid();

        const labels = ["Yangi (0%)", "O'rganilmoqda (50%)", "Yodlandi (100%)"];
        if (item.mastery === 2) this.playChimeSuccess();
        else this.playPopSound(item.mastery === 1 ? 520 : 380);
        this.showToast(`"${item.word}" holati: ${labels[item.mastery]}`, "info");
    }

    // ==========================================
    // ADD, EDIT & SANDBOX-SAFE DELETE + UNDO
    // ==========================================
    handleQuickAdd(e) {
        e.preventDefault();
        const word = this.quickWordInput ? this.quickWordInput.value.trim() : '';
        const translation = this.quickTranslationInput ? this.quickTranslationInput.value.trim() : '';

        if (!word || !translation) {
            this.showToast("Iltimos, so'z va tarjimani kiriting!", "error");
            return;
        }

        const chosenDate = this.quickDateInput && this.quickDateInput.value ? this.quickDateInput.value : this.getLocalDateStr();
        const newWordObj = {
            id: 'w-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
            word,
            translation,
            phonetic: '',
            example: '',
            exampleTrans: '',
            synonyms: '',
            mastery: 0,
            reviewCount: 0,
            dateStr: chosenDate,
            createdAt: Date.now()
        };

        this.words.unshift(newWordObj);
        this.saveWords();
        this.renderVocabularyGrid();
        this.playPopSound(560);
        this.showToast(`"${word}" muvaffaqiyatli qo'shildi!`, "success");

        if (this.quickWordInput) this.quickWordInput.value = '';
        if (this.quickTranslationInput) this.quickTranslationInput.value = '';
        if (this.quickWordInput) this.quickWordInput.focus();
    }

    openPacksModal() {
        this.renderPacksGrid();
        if (this.packsModal) this.packsModal.classList.remove('hidden');
    }

    closePacksModal() {
        if (this.packsModal) this.packsModal.classList.add('hidden');
    }

    renderPacksGrid() {
        if (!this.packsGrid) return;
        this.packsGrid.innerHTML = STARTER_PACKS.map(pack => {
            const previewWords = pack.words.slice(0, 4).map(w => `${w.word} (${w.translation})`).join(', ') + '...';
            return `
                <div class="pack-card">
                    <div class="pack-card-top">
                        <div class="pack-icon-box">${pack.icon}</div>
                        <div class="pack-info">
                            <h4>${pack.title}</h4>
                            <p>${pack.description}</p>
                        </div>
                    </div>
                    <div class="pack-samples">
                        <strong>Namunalar:</strong> ${previewWords}
                    </div>
                    <button type="button" class="btn btn-primary btn-sm pack-card-btn" data-pack-id="${pack.id}">
                        <i class="fa-solid fa-plus-circle"></i> ${pack.words.length} ta so'zni yuklash
                    </button>
                </div>
            `;
        }).join('');

        this.packsGrid.querySelectorAll('.pack-card-btn').forEach(btn => {
            btn.addEventListener('click', () => this.importStarterPack(btn.dataset.packId));
        });
    }

    importStarterPack(packId) {
        const pack = STARTER_PACKS.find(p => p.id === packId);
        if (!pack) return;

        let addedCount = 0;
        const existingWordsLower = new Set(this.words.map(w => w.word.toLowerCase().trim()));
        const todayStr = this.getLocalDateStr();

        for (const item of pack.words) {
            if (!existingWordsLower.has(item.word.toLowerCase().trim())) {
                this.words.unshift({
                    id: 'w-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8),
                    word: item.word,
                    translation: item.translation,
                    phonetic: '',
                    example: '',
                    exampleTrans: '',
                    synonyms: item.synonyms || '',
                    mastery: 0,
                    reviewCount: 0,
                    dateStr: todayStr,
                    createdAt: Date.now()
                });
                existingWordsLower.add(item.word.toLowerCase().trim());
                addedCount++;
            }
        }

        this.saveWords();
        this.renderVocabularyGrid();
        this.closePacksModal();

        if (addedCount > 0) {
            this.playChimeSuccess();
            this.showToast(`"${pack.title}" to'plamidan ${addedCount} ta yangi so'z qo'shildi!`, "success");
            this.fireConfetti();
        } else {
            this.showToast(`Ushbu to'plamdagi so'zlar allaqachon lug'atingizda mavjud.`, "info");
        }
    }

    openAddWordModal() {
        this.wordModalTitle.innerHTML = '<i class="fa-solid fa-plus-circle text-primary"></i> Yangi So\'z Qo\'shish';
        this.editWordId.value = '';
        this.inputWord.value = '';
        this.inputTranslation.value = '';
        this.inputPhonetic.value = '';
        this.inputExample.value = '';
        this.inputExampleTrans.value = '';
        if (this.inputSynonyms) this.inputSynonyms.value = '';
        if (this.extraDetailsAccordion) this.extraDetailsAccordion.open = false;
        if (this.inputStudyDate) {
            let defaultDate = this.getLocalDateStr();
            if (this.selectedDateFilter && this.selectedDateFilter !== 'all' && this.selectedDateFilter !== 'custom') {
                if (this.selectedDateFilter === 'today') defaultDate = this.getLocalDateStr();
                else if (this.selectedDateFilter === 'yesterday') defaultDate = this.getLocalDateStr(Date.now() - 86400000);
                else defaultDate = this.selectedDateFilter;
            }
            this.inputStudyDate.value = defaultDate;
        }
        this.wordModal.classList.remove('hidden');
        setTimeout(() => this.inputWord.focus(), 50);
    }

    openEditWordModal(id) {
        const item = this.words.find(w => w.id === id);
        if (!item) return;

        this.wordModalTitle.innerHTML = '<i class="fa-solid fa-pen text-primary"></i> So\'zni Tahrirlash';
        this.editWordId.value = item.id;
        this.inputWord.value = item.word;
        this.inputTranslation.value = item.translation;
        this.inputPhonetic.value = item.phonetic || '';
        this.inputExample.value = item.example || '';
        this.inputExampleTrans.value = item.exampleTrans || '';
        if (this.inputSynonyms) this.inputSynonyms.value = item.synonyms || '';
        if (this.inputStudyDate) this.inputStudyDate.value = item.dateStr || this.getLocalDateStr(item.createdAt);
        if (this.extraDetailsAccordion) {
            this.extraDetailsAccordion.open = !!(item.phonetic || item.example || item.exampleTrans || item.synonyms);
        }
        this.wordModal.classList.remove('hidden');
        setTimeout(() => this.inputWord.focus(), 50);
    }

    closeWordModal() {
        this.wordModal.classList.add('hidden');
    }

    handleSaveWord(e) {
        e.preventDefault();
        const word = this.inputWord.value.trim();
        const translation = this.inputTranslation.value.trim();
        const phonetic = this.inputPhonetic.value.trim();
        const example = this.inputExample.value.trim();
        const exampleTrans = this.inputExampleTrans.value.trim();
        const synonyms = this.inputSynonyms ? this.inputSynonyms.value.trim() : '';
        const editId = this.editWordId.value;
        const chosenDate = (this.inputStudyDate && this.inputStudyDate.value) ? this.inputStudyDate.value : this.getLocalDateStr();

        if (!word || !translation) {
            this.showToast("Iltimos, so'z va uning tarjimasini kiriting!", "error");
            return;
        }

        if (editId) {
            const index = this.words.findIndex(w => w.id === editId);
            if (index !== -1) {
                this.words[index] = {
                    ...this.words[index],
                    word, translation, phonetic, example, exampleTrans, synonyms, dateStr: chosenDate
                };
                this.showToast("So'z muvaffaqiyatli yangilandi!", "success");
            }
        } else {
            this.words.unshift({
                id: 'w-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
                word, translation, phonetic, example, exampleTrans, synonyms,
                mastery: 0, reviewCount: 0, dateStr: chosenDate, createdAt: Date.now()
            });
            this.showToast(`"${word}" lug'atga qo'shildi!`, "success");
        }

        this.playPopSound(540);
        this.saveWords();
        this.renderVocabularyGrid();
        this.closeWordModal();
    }

    openConfirmModal(message, onConfirm) {
        if (!this.confirmModal) return;
        this.confirmMessage.textContent = message;
        this.pendingConfirmCallback = onConfirm;
        this.confirmModal.classList.remove('hidden');
    }

    closeConfirmModal() {
        if (!this.confirmModal) return;
        this.confirmModal.classList.add('hidden');
        this.pendingConfirmCallback = null;
    }

    deleteWord(id) {
        const idx = this.words.findIndex(w => w.id === id);
        if (idx === -1) return;
        const item = this.words[idx];

        this.openConfirmModal(`Rostdan ham "${item.word}" so'zini o'chirmoqchimisiz?`, () => {
            this.lastDeletedWord = { item, idx };
            this.words = this.words.filter(w => w.id !== id);
            this.saveWords();
            this.renderVocabularyGrid();
            this.showToast(`"${item.word}" o'chirildi`, "info", () => {
                if (this.lastDeletedWord) {
                    const { item: restored, idx: oldIdx } = this.lastDeletedWord;
                    this.words.splice(Math.min(oldIdx, this.words.length), 0, restored);
                    this.lastDeletedWord = null;
                    this.saveWords();
                    this.renderVocabularyGrid();
                    this.showToast(`"${restored.word}" qayta tiklandi!`, "success");
                }
            });
        });
    }

    // ==========================================
    // BULK IMPORT
    // ==========================================
    openBulkModal() {
        this.bulkTextArea.value = '';
        this.bulkParsedCount.textContent = '0';
        if (this.bulkStudyDate) {
            let defaultDate = this.getLocalDateStr();
            if (this.selectedDateFilter && this.selectedDateFilter !== 'all' && this.selectedDateFilter !== 'custom') {
                if (this.selectedDateFilter === 'today') defaultDate = this.getLocalDateStr();
                else if (this.selectedDateFilter === 'yesterday') defaultDate = this.getLocalDateStr(Date.now() - 86400000);
                else defaultDate = this.selectedDateFilter;
            }
            this.bulkStudyDate.value = defaultDate;
        }
        this.bulkModal.classList.remove('hidden');
        setTimeout(() => this.bulkTextArea.focus(), 50);
    }

    closeBulkModal() {
        this.bulkModal.classList.add('hidden');
    }

    parseBulkLines(text) {
        const lines = text.split('\n');
        const parsed = [];

        for (let line of lines) {
            line = line.trim();
            if (!line) continue;
            line = line.replace(/^(\d+[\.\)\-\:\/\]]|\*|\•|\-)\s+/, '').trim();
            if (!line) continue;
            line = line.replace(/\*\*(.*?)\*\*/g, '$1');

            let delimiter = null;
            if (line.includes('\t')) delimiter = '\t';
            else if (line.includes(' - ')) delimiter = ' - ';
            else if (line.includes(' — ')) delimiter = ' — ';
            else if (line.includes(' – ')) delimiter = ' – ';
            else if (line.includes(' -> ')) delimiter = ' -> ';
            else if (line.includes(' => ')) delimiter = ' => ';
            else if (line.includes(' : ')) delimiter = ' : ';
            else if (line.includes(' = ')) delimiter = ' = ';
            else if (line.includes(' | ')) delimiter = ' | ';
            else if (line.includes('|')) delimiter = '|';
            else if (line.includes('—')) delimiter = '—';
            else if (line.includes('–')) delimiter = '–';
            else if (line.includes(':')) delimiter = ':';
            else if (line.includes('=')) delimiter = '=';
            else if (line.includes(';')) delimiter = ';';
            else if (line.includes('-')) delimiter = '-';

            if (delimiter) {
                const parts = line.split(delimiter)
                    .map(p => p.trim().replace(/^["'`]|["'`]$/g, ''))
                    .filter(p => p.length > 0);
                const word = parts[0];
                const translation = parts[1] || '';
                const synonyms = parts.slice(2).join(', ').trim();
                if (word && translation) parsed.push({ word, translation, synonyms });
            }
        }
        return parsed;
    }

    updateBulkParsedCount() {
        this.bulkParsedCount.textContent = this.parseBulkLines(this.bulkTextArea.value).length;
    }

    handleSaveBulkWords() {
        const parsed = this.parseBulkLines(this.bulkTextArea.value);
        if (parsed.length === 0) {
            this.showToast("Hech qanday to'g'ri qator topilmadi! Namuna: so'z - tarjima", "error");
            return;
        }

        const chosenDate = (this.bulkStudyDate && this.bulkStudyDate.value) ? this.bulkStudyDate.value : this.getLocalDateStr();
        parsed.forEach((item, idx) => {
            this.words.unshift({
                id: 'w-' + (Date.now() + idx) + '-' + Math.random().toString(36).slice(2, 7),
                word: item.word,
                translation: item.translation,
                phonetic: '',
                example: '',
                exampleTrans: '',
                synonyms: item.synonyms || '',
                mastery: 0,
                reviewCount: 0,
                dateStr: chosenDate,
                createdAt: Date.now() + idx
            });
        });

        this.saveWords();
        this.renderVocabularyGrid();
        this.closeBulkModal();
        this.playChimeSuccess();
        this.showToast(`${parsed.length} ta yangi so'z muvaffaqiyatli kiritildi!`, "success");
        this.fireConfetti();
    }

    // ==========================================
    // EXPORT & IMPORT
    // ==========================================
    exportJSON() {
        const dataStr = JSON.stringify(this.words, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `EasyLearn_Lugat_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.showToast("JSON fayl yuklab olindi!", "success");
    }

    exportCSV() {
        let csvContent = "Word,Translation,StudyDate,Phonetic,Synonyms,Example,ExampleTranslation,MasteryLevel\n";
        this.words.forEach(w => {
            const row = [
                `"${(w.word || '').replace(/"/g, '""')}"`,
                `"${(w.translation || '').replace(/"/g, '""')}"`,
                `"${(w.dateStr || this.getLocalDateStr(w.createdAt)).replace(/"/g, '""')}"`,
                `"${(w.phonetic || '').replace(/"/g, '""')}"`,
                `"${(w.synonyms || '').replace(/"/g, '""')}"`,
                `"${(w.example || '').replace(/"/g, '""')}"`,
                `"${(w.exampleTrans || '').replace(/"/g, '""')}"`,
                w.mastery || 0
            ];
            csvContent += row.join(",") + "\n";
        });

        const blob = new Blob(["\uFEFF" + csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `EasyLearn_Lugat_${new Date().toISOString().slice(0, 10)}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        this.showToast("CSV fayl yuklab olindi!", "success");
    }

    handleImportFile(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const parsed = JSON.parse(event.target.result);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    const existingWords = new Set(this.words.map(w => w.word.toLowerCase()));
                    let addedCount = 0;

                    parsed.forEach(item => {
                        if (item.word && item.translation && !existingWords.has(item.word.toLowerCase())) {
                            const createdAt = item.createdAt || Date.now();
                            this.words.push({
                                id: item.id || 'w-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
                                word: item.word,
                                translation: item.translation,
                                phonetic: item.phonetic || '',
                                example: item.example || '',
                                exampleTrans: item.exampleTrans || '',
                                synonyms: item.synonyms || '',
                                mastery: typeof item.mastery === 'number' ? item.mastery : 0,
                                reviewCount: item.reviewCount || 0,
                                dateStr: item.dateStr || this.getLocalDateStr(createdAt),
                                createdAt
                            });
                            existingWords.add(item.word.toLowerCase());
                            addedCount++;
                        }
                    });

                    this.saveWords();
                    this.renderAll();
                    this.exportImportModal.classList.add('hidden');
                    this.showToast(`${addedCount} ta so'z import qilindi!`, "success");
                } else {
                    this.showToast("Fayl formati noto'g'ri", "error");
                }
            } catch (err) {
                this.showToast("JSON faylni o'qishda xatolik yuz berdi", "error");
            }
            this.importFileInput.value = '';
        };
        reader.readAsText(file);
    }

    // ==========================================
    // FLASHCARDS 3D FLIP MODE
    // ==========================================
    initFlashcards() {
        this.flashcardList = this.getWordsForStudy(this.activeStudyDate);
        this.currentCardIndex = 0;
        this.isCardFlipped = false;
        this.renderCurrentFlashcard();
    }

    flipFlashcard() {
        if (this.flashcardList.length === 0) return;
        this.isCardFlipped = !this.isCardFlipped;
        this.flashcardElement.classList.toggle('flipped', this.isCardFlipped);
        this.flashcardElement.classList.toggle('is-flipped', this.isCardFlipped);
        this.playPopSound(this.isCardFlipped ? 520 : 440);
    }

    renderCurrentFlashcard() {
        const total = this.flashcardList.length;
        this.totalCardsCountEl.textContent = total;

        if (total === 0) {
            this.currentCardIndexEl.textContent = '0';
            this.flashcardProgressFill.innerHTML = '';
            this.cardFrontWord.textContent = "Bu kunda so'z yo'q";
            this.cardFrontPhonetic.textContent = '';
            this.cardFrontExample.textContent = "Yuqoridan boshqa kunni tanlang yoki yangi so'z qo'shing";
            this.cardBackTranslation.textContent = "So'z topilmadi";
            this.cardBackExampleTrans.textContent = '';
            this.flashcardElement.classList.remove('flipped', 'is-flipped');
            return;
        }

        if (this.currentCardIndex >= total) this.currentCardIndex = 0;
        if (this.currentCardIndex < 0) this.currentCardIndex = total - 1;

        const current = this.flashcardList[this.currentCardIndex];
        this.currentCardIndexEl.textContent = this.currentCardIndex + 1;

        let dotsHTML = '';
        const maxDots = Math.min(total, 30);
        for (let i = 0; i < maxDots; i++) {
            const mappedIdx = total > maxDots ? Math.floor((this.currentCardIndex / total) * maxDots) : this.currentCardIndex;
            let dotClass = 'progress-dot';
            if (i < mappedIdx) dotClass += ' passed';
            if (i === mappedIdx) dotClass += ' active';
            dotsHTML += `<div class="${dotClass}"></div>`;
        }
        this.flashcardProgressFill.innerHTML = dotsHTML;

        const isEnglishFront = this.flashcardStartSide === 'en';
        this.cardFrontLangLabel.textContent = isEnglishFront ? "INGLIZCHA SO'Z" : "TARJIMASI (O'ZBEKCHA)";
        this.cardFrontWord.textContent = isEnglishFront ? current.word : current.translation;
        this.cardFrontPhonetic.textContent = isEnglishFront ? (current.phonetic || '') : '';
        this.cardFrontExample.textContent = isEnglishFront ? (current.example ? `"${current.example}"` : '') : '';

        const cardFrontSynEl = document.getElementById('cardFrontSynonyms');
        if (cardFrontSynEl) {
            if (isEnglishFront && current.synonyms && current.synonyms.trim()) {
                const synList = current.synonyms.split(',').map(s => s.trim()).filter(Boolean);
                cardFrontSynEl.innerHTML = `<span class="syn-label"><i class="fa-solid fa-equals"></i> Sinonim:</span> ${synList.map(s => `<span class="synonym-chip small">${this.escapeHTML(s)}</span>`).join(' ')}`;
                cardFrontSynEl.style.display = 'flex';
            } else {
                cardFrontSynEl.style.display = 'none';
            }
        }

        this.cardBackLangLabel.textContent = isEnglishFront ? "TARJIMASI (O'ZBEKCHA)" : "INGLIZCHA SO'Z";
        this.cardBackTranslation.textContent = isEnglishFront ? current.translation : current.word;
        this.cardBackExampleTrans.textContent = isEnglishFront ? (current.exampleTrans || current.example || '') : (current.example || '');

        let lvlText = "Yangi";
        let lvlClass = "new";
        if (current.mastery === 1) { lvlText = "O'rganilmoqda"; lvlClass = "learning"; }
        if (current.mastery === 2) { lvlText = "Yodlandi"; lvlClass = "mastered"; }
        this.cardBackLevel.textContent = lvlText;
        this.cardBackLevel.className = `badge level-badge ${lvlClass}`;

        this.isCardFlipped = false;
        this.flashcardElement.classList.remove('flipped', 'is-flipped');

        if (this.settings.autoSpeakFlashcards && this.currentView === 'flashcards') {
            this.speak(current.word, this.btnFrontAudio);
        }
    }

    rateFlashcard(level) {
        if (this.flashcardList.length === 0) return;
        const current = this.flashcardList[this.currentCardIndex];

        const mainWord = this.words.find(w => w.id === current.id);
        if (mainWord) {
            mainWord.mastery = level;
            mainWord.reviewCount = (mainWord.reviewCount || 0) + 1;
            mainWord.lastReviewed = Date.now();
            current.mastery = level;
            this.saveWords();
        }

        this.recordActivity();

        if (level === 0) {
            this.playErrorSound();
            this.showToast("Qaytadan o'rganishga belgilandi", "info");
        } else if (level === 1) {
            this.playTone(550, 'sine', 0.1);
            this.showToast("O'rganilmoqda deb belgilandi", "info");
        } else if (level === 2) {
            this.playChimeSuccess();
            this.showToast("Barakalla! So'z yodlandi!", "success");
            if (this.currentCardIndex === this.flashcardList.length - 1) {
                this.fireConfetti();
            }
        }

        this.nextFlashcard();
    }

    nextFlashcard() {
        if (this.flashcardList.length === 0) return;
        this.currentCardIndex = (this.currentCardIndex + 1) % this.flashcardList.length;
        this.renderCurrentFlashcard();
    }

    prevFlashcard() {
        if (this.flashcardList.length === 0) return;
        this.currentCardIndex = (this.currentCardIndex - 1 + this.flashcardList.length) % this.flashcardList.length;
        this.renderCurrentFlashcard();
    }

    setupFlashcardSwipeGestures() {
        if (!this.flashcardElement) return;
        let startX = 0, startY = 0, currentX = 0, currentY = 0;
        let isDragging = false, isHorizontalSwipe = false;
        const card = this.flashcardElement;

        card.addEventListener('touchstart', (e) => {
            if (!this.flashcardList || this.flashcardList.length === 0) return;
            if (e.target.closest('button')) return;
            const touch = e.touches[0];
            startX = touch.clientX;
            startY = touch.clientY;
            currentX = startX;
            currentY = startY;
            isDragging = true;
            isHorizontalSwipe = false;
        }, { passive: true });

        card.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            currentX = touch.clientX;
            currentY = touch.clientY;
            const diffX = currentX - startX;
            const diffY = currentY - startY;

            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 12) {
                isHorizontalSwipe = true;
                const rotate = (diffX / 28).toFixed(2);
                card.style.transition = 'none';
                card.style.transform = `${this.isCardFlipped ? 'rotateY(180deg) ' : ''}translateX(${diffX * 0.45}px) rotate(${rotate}deg)`;
                if (diffX < -35) { card.classList.add('swiping-left'); card.classList.remove('swiping-right'); }
                else if (diffX > 35) { card.classList.add('swiping-right'); card.classList.remove('swiping-left'); }
                else { card.classList.remove('swiping-left', 'swiping-right'); }
            }
        }, { passive: true });

        const endSwipe = () => {
            if (!isDragging) return;
            isDragging = false;
            this.lastTouchEnd = Date.now();
            card.style.transition = '';
            card.style.transform = '';
            card.classList.remove('swiping-left', 'swiping-right');
            const diffX = currentX - startX;
            const diffY = currentY - startY;

            if (isHorizontalSwipe && Math.abs(diffX) > 50) {
                if (diffX < -50) { this.playPopSound(480); this.nextFlashcard(); }
                else if (diffX > 50) { this.playPopSound(420); this.prevFlashcard(); }
            } else if (Math.abs(diffX) < 15 && Math.abs(diffY) < 15) {
                this.flipFlashcard();
            }
        };

        card.addEventListener('touchend', endSwipe, { passive: true });
        card.addEventListener('touchcancel', endSwipe, { passive: true });
    }

    // ==========================================
    // QUIZ (EN->UZ & UZ->EN)
    // ==========================================
    initQuiz() {
        let pool = this.getWordsForStudy(this.activeStudyDate);

        if (pool.length === 0) {
            this.quizContainer.classList.add('hidden');
            this.quizResultsCard.classList.remove('hidden');
            const iconEl = document.getElementById('quizTrophyIcon');
            const titleEl = document.getElementById('quizResultTitle');
            const subEl = document.getElementById('quizResultSubtitle');
            if (iconEl) iconEl.innerHTML = '<i class="fa-solid fa-calendar-xmark text-muted"></i>';
            if (titleEl) titleEl.textContent = "Bu kunda so'zlar topilmadi";
            if (subEl) subEl.textContent = "Yuqoridagi 'Kun' menyusidan boshqa kunni tanlang yoki so'z qo'shing.";
            this.quizCorrectCountEl.textContent = '0';
            this.quizWrongCountEl.textContent = '0';
            this.quizAccuracyPercentEl.textContent = '0%';
            return;
        }

        this.shuffleArray(pool);
        this.quizQuestions = pool.slice(0, Math.min(10, pool.length));
        this.currentQuizIndex = 0;
        this.quizScore = 0;
        this.quizStreak = 0;
        this.quizCorrectCount = 0;
        this.quizWrongCount = 0;

        this.quizContainer.classList.remove('hidden');
        this.quizResultsCard.classList.add('hidden');
        this.btnNextQuizQuestion.classList.add('hidden');
        this.quizFeedbackBanner.classList.add('hidden');

        this.renderCurrentQuizQuestion();
    }

    renderCurrentQuizQuestion() {
        this.quizSelectedAnswered = false;
        this.btnNextQuizQuestion.classList.add('hidden');
        this.quizFeedbackBanner.classList.add('hidden');

        const total = this.quizQuestions.length;
        this.quizQuestionIndex.textContent = this.currentQuizIndex + 1;
        this.quizTotalQuestions.textContent = total;
        this.quizCurrentScore.textContent = this.quizScore;
        this.quizCurrentStreak.textContent = this.quizStreak;
        const streakContainer = this.quizCurrentStreak.closest('.quiz-streak-pill');
        if (streakContainer) streakContainer.classList.toggle('streak-active', this.quizStreak > 0);

        const current = this.quizQuestions[this.currentQuizIndex];
        const isEnToUz = this.quizDirection === 'en-uz';

        if (this.quizQuestionType) {
            this.quizQuestionType.textContent = isEnToUz ? "INGLIZCHA SO'Z:" : "O'ZBEKCHA TARJIMASI:";
        }
        this.quizPromptWord.textContent = isEnToUz ? current.word : current.translation;
        this.quizPromptHint.textContent = isEnToUz && current.example ? `Misol: "${current.example}"` : '';
        this.btnQuizAudio.style.display = isEnToUz ? 'inline-flex' : 'none';

        const correctAnswer = isEnToUz ? current.translation : current.word;
        const otherWords = this.words.filter(w => w.id !== current.id);
        this.shuffleArray(otherWords);

        const options = [correctAnswer];
        for (let w of otherWords) {
            if (options.length >= 4) break;
            const candidate = isEnToUz ? w.translation : w.word;
            if (candidate && !options.includes(candidate)) options.push(candidate);
        }
        while (options.length < Math.min(4, Math.max(2, this.words.length))) {
            options.push(`Variant ${options.length + 1}`);
        }
        this.shuffleArray(options);

        this.quizOptionsGrid.innerHTML = options.map((opt, idx) => `
            <button type="button" class="btn-quiz-option" data-option="${this.escapeAttr(opt)}">
                <span class="quiz-opt-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="quiz-opt-text">${this.escapeHTML(opt)}</span>
            </button>
        `).join('');

        this.quizOptionsGrid.querySelectorAll('.btn-quiz-option').forEach(btn => {
            btn.addEventListener('click', () => this.handleQuizOptionClick(btn, btn.dataset.option, correctAnswer));
        });
    }

    handleQuizOptionClick(buttonEl, selectedOption, correctAnswer) {
        if (this.quizSelectedAnswered) return;
        this.quizSelectedAnswered = true;

        const current = this.quizQuestions[this.currentQuizIndex];
        const isCorrect = selectedOption === correctAnswer;

        this.quizOptionsGrid.querySelectorAll('.btn-quiz-option').forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.option === correctAnswer) btn.classList.add('correct');
        });

        if (isCorrect) {
            buttonEl.classList.add('correct');
            this.quizStreak++;
            this.quizScore += 10 + (this.quizStreak * 2);
            this.quizCorrectCount++;

            const main = this.words.find(w => w.id === current.id);
            if (main) {
                main.mastery = Math.min(2, (main.mastery || 0) + 1);
                this.saveWords();
            }
            this.recordActivity();
            this.playChimeSuccess();
            this.showQuizFeedback(true, "To'g'ri javob! Barakalla!");
        } else {
            buttonEl.classList.add('wrong');
            this.quizStreak = 0;
            this.quizWrongCount++;
            this.playErrorSound();
            this.showQuizFeedback(false, `Noto'g'ri. To'g'ri javob: "${correctAnswer}"`);
        }

        this.quizCurrentScore.textContent = this.quizScore;
        this.quizCurrentStreak.textContent = this.quizStreak;
        const streakContainer = this.quizCurrentStreak.closest('.quiz-streak-pill');
        if (streakContainer) streakContainer.classList.toggle('streak-active', this.quizStreak > 0);

        this.btnNextQuizQuestion.classList.remove('hidden');
    }

    showQuizFeedback(isSuccess, message) {
        this.quizFeedbackBanner.className = `quiz-feedback-banner ${isSuccess ? 'success' : 'wrong'}`;
        this.feedbackIcon.innerHTML = isSuccess ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-solid fa-circle-xmark"></i>';
        this.feedbackText.textContent = message;
        this.quizFeedbackBanner.classList.remove('hidden');
    }

    nextQuizQuestion() {
        this.currentQuizIndex++;
        if (this.currentQuizIndex >= this.quizQuestions.length) this.showQuizResults();
        else this.renderCurrentQuizQuestion();
    }

    showQuizResults() {
        this.quizContainer.classList.add('hidden');
        this.quizResultsCard.classList.remove('hidden');

        const total = this.quizQuestions.length;
        const accuracy = total > 0 ? Math.round((this.quizCorrectCount / total) * 100) : 0;

        this.quizCorrectCountEl.textContent = this.quizCorrectCount;
        this.quizWrongCountEl.textContent = this.quizWrongCount;
        this.quizAccuracyPercentEl.textContent = `${accuracy}%`;

        const titleEl = document.getElementById('quizResultTitle');
        const subEl = document.getElementById('quizResultSubtitle');
        const iconEl = document.getElementById('quizTrophyIcon');

        if (accuracy >= 80) {
            iconEl.innerHTML = '<i class="fa-solid fa-trophy text-warning"></i>';
            titleEl.textContent = "Ajoyib natija!";
            subEl.textContent = `Siz so'zlarni a'lo darajada o'zlashtiribsiz (${this.quizScore} ball)`;
            this.fireConfetti();
        } else if (accuracy >= 50) {
            iconEl.innerHTML = '<i class="fa-solid fa-thumbs-up text-primary"></i>';
            titleEl.textContent = "Yaxshi harakat!";
            subEl.textContent = `Yana biroz mashq qilsangiz, natijangiz yanada yaxshilanadi (${this.quizScore} ball)`;
        } else {
            iconEl.innerHTML = '<i class="fa-solid fa-rotate-right text-secondary"></i>';
            titleEl.textContent = "Qayta takrorlash kerak!";
            subEl.textContent = "Fleshkartalar bo'limida so'zlarni yana bir bor ko'rib chiqing";
        }
    }

    // ==========================================
    // WRITING PRACTICE
    // ==========================================
    initWriting() {
        let pool = this.getWordsForStudy(this.activeStudyDate);
        if (pool.length === 0) {
            this.writingList = [];
            this.writingCounterText.textContent = '0 / 0';
            this.writingProgressFill.style.width = '0%';
            this.writingTargetTranslation.textContent = "Bu kunda so'zlar yo'q";
            this.writingTargetExample.textContent = "Yuqoridagi 'Kun' menyusidan boshqa kunni tanlang yoki so'z qo'shing";
            this.writingHintDisplay.innerHTML = '';
            this.writingInput.value = '';
            this.writingFeedback.classList.add('hidden');
            return;
        }
        this.shuffleArray(pool);
        this.writingList = pool;
        this.currentWritingIndex = 0;
        this.revealedHintCount = 0;
        this.renderCurrentWritingWord();
    }

    renderCurrentWritingWord() {
        const total = this.writingList.length;
        if (total === 0) return;

        if (this.currentWritingIndex >= total) {
            this.currentWritingIndex = 0;
            this.fireConfetti();
            this.showToast("Barcha so'zlarni yozish mashqi yakunlandi!", "success");
        }

        const current = this.writingList[this.currentWritingIndex];
        this.writingCounterText.textContent = `${this.currentWritingIndex + 1} / ${total}`;
        this.writingProgressFill.style.width = `${((this.currentWritingIndex + 1) / total) * 100}%`;

        this.writingTargetTranslation.textContent = current.translation;
        this.writingTargetExample.textContent = current.example ? `Masalan: "${current.example}"` : '';

        this.writingInput.value = '';
        this.writingFeedback.classList.add('hidden');
        this.revealedHintCount = 0;
        this.renderWritingLetterBlanks();
        setTimeout(() => this.writingInput.focus(), 80);
    }

    renderWritingLetterBlanks() {
        const current = this.writingList[this.currentWritingIndex];
        if (!current) return;
        const targetWord = current.word;
        let html = '';
        for (let i = 0; i < targetWord.length; i++) {
            const char = targetWord[i];
            if (char === ' ' || char === '-' || char === "'") {
                html += `<div class="letter-box" style="border-bottom:none;">${this.escapeHTML(char)}</div>`;
            } else if (i < this.revealedHintCount) {
                html += `<div class="letter-box" style="color:var(--primary);">${this.escapeHTML(char)}</div>`;
            } else {
                html += `<div class="letter-box">_</div>`;
            }
        }
        this.writingHintDisplay.innerHTML = html;
    }

    giveWritingHint() {
        const current = this.writingList[this.currentWritingIndex];
        if (!current) return;
        if (this.revealedHintCount < current.word.length) {
            this.revealedHintCount++;
            this.renderWritingLetterBlanks();
            this.playTone(600, 'sine', 0.08);
        }
    }

    handleWritingSubmit(e) {
        if (e) e.preventDefault();
        const current = this.writingList[this.currentWritingIndex];
        if (!current) return;

        const userVal = this.writingInput.value.trim().toLowerCase();
        const targetVal = current.word.trim().toLowerCase();
        if (!userVal) return;

        if (userVal === targetVal) {
            this.playChimeSuccess();
            this.recordActivity();
            this.writingFeedback.className = "writing-feedback success";
            this.writingFeedback.innerHTML = `<i class="fa-solid fa-check-circle"></i> Barakalla! To'g'ri: <strong>${this.escapeHTML(current.word)}</strong>`;
            this.writingFeedback.classList.remove('hidden');

            const main = this.words.find(w => w.id === current.id);
            if (main) { main.mastery = 2; this.saveWords(); }

            setTimeout(() => {
                this.currentWritingIndex++;
                this.renderCurrentWritingWord();
            }, 1100);
        } else {
            this.playErrorSound();
            this.writingFeedback.className = "writing-feedback wrong";
            this.writingFeedback.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Noto'g'ri yozildi. Qayta urinib ko'ring yoki maslahat oling!`;
            this.writingFeedback.classList.remove('hidden');
        }
    }

    skipWritingWord() {
        const current = this.writingList[this.currentWritingIndex];
        if (current) this.showToast(`Javob: "${current.word}" edi`, "info");
        this.currentWritingIndex++;
        this.renderCurrentWritingWord();
    }

    // ==========================================
    // MATCHING GAME
    // ==========================================
    initMatchingGame() {
        if (this.matchTimerInterval) clearInterval(this.matchTimerInterval);
        this.matchCompleteCard.classList.add('hidden');
        this.matchGrid.classList.remove('hidden');

        let pool = this.getWordsForStudy(this.activeStudyDate);
        if (pool.length < 2) {
            this.matchGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: var(--bg-surface); border: 1.5px dashed var(--border-medium); border-radius: var(--radius-lg);">
                    <div style="font-size: 2.2rem; margin-bottom: 10px; color: var(--primary);"><i class="fa-solid fa-puzzle-piece"></i></div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 6px;">Bu kunda yetarli so'zlar yo'q</h3>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 16px;">Juftlik o'yini uchun kamida 2 ta so'z kerak.</p>
                    <button type="button" class="btn btn-primary btn-sm" id="btnMatchFallbackAll"><i class="fa-solid fa-layer-group"></i> Barcha so'zlar bilan o'ynash</button>
                </div>
            `;
            const btnFallback = document.getElementById('btnMatchFallbackAll');
            if (btnFallback) {
                btnFallback.addEventListener('click', () => {
                    this.activeStudyDate = 'all';
                    this.syncStudyDaySelectors('all');
                    this.initMatchingGame();
                });
            }
            this.matchPairsLeft.textContent = '0';
            this.matchTimerText.textContent = "00:00";
            return;
        }

        this.shuffleArray(pool);
        const selectedWords = pool.slice(0, Math.min(6, pool.length));
        this.totalMatchPairs = selectedWords.length;
        this.matchedPairsCount = 0;
        this.selectedTile = null;
        this.matchSecondsElapsed = 0;
        this.matchPairsLeft.textContent = this.totalMatchPairs;
        this.matchTimerText.textContent = "00:00";

        const tiles = [];
        selectedWords.forEach(item => {
            tiles.push({ id: item.id, text: item.word, type: 'word' });
            tiles.push({ id: item.id, text: item.translation, type: 'trans' });
        });
        this.shuffleArray(tiles);
        this.matchCards = tiles;

        this.matchGrid.innerHTML = tiles.map((tile, idx) => `
            <div class="match-tile" data-index="${idx}" data-id="${tile.id}" data-type="${tile.type}">
                ${this.escapeHTML(tile.text)}
            </div>
        `).join('');

        this.matchGrid.querySelectorAll('.match-tile').forEach(tileEl => {
            tileEl.addEventListener('click', () => {
                const idx = parseInt(tileEl.dataset.index, 10);
                this.handleTileClick(tileEl, idx);
            });
        });

        this.matchTimerInterval = setInterval(() => {
            this.matchSecondsElapsed++;
            const mins = String(Math.floor(this.matchSecondsElapsed / 60)).padStart(2, '0');
            const secs = String(this.matchSecondsElapsed % 60).padStart(2, '0');
            this.matchTimerText.textContent = `${mins}:${secs}`;
        }, 1000);
    }

    handleTileClick(tileEl, index) {
        if (tileEl.classList.contains('matched') || tileEl.classList.contains('selected')) return;
        this.playTone(480, 'sine', 0.05);

        if (!this.selectedTile) {
            this.selectedTile = { element: tileEl, data: this.matchCards[index] };
            tileEl.classList.add('selected');
        } else {
            const first = this.selectedTile;
            const second = { element: tileEl, data: this.matchCards[index] };
            if (first.element === second.element) return;

            if (first.data.id === second.data.id && first.data.type !== second.data.type) {
                first.element.classList.remove('selected');
                first.element.classList.add('matched');
                second.element.classList.add('matched');
                this.playChimeSuccess();
                this.matchedPairsCount++;
                this.matchPairsLeft.textContent = this.totalMatchPairs - this.matchedPairsCount;
                this.selectedTile = null;
                if (this.matchedPairsCount === this.totalMatchPairs) this.completeMatchGame();
            } else {
                second.element.classList.add('selected');
                first.element.classList.add('wrong');
                second.element.classList.add('wrong');
                this.playErrorSound();
                setTimeout(() => {
                    first.element.classList.remove('selected', 'wrong');
                    second.element.classList.remove('selected', 'wrong');
                    this.selectedTile = null;
                }, 550);
            }
        }
    }

    completeMatchGame() {
        clearInterval(this.matchTimerInterval);
        this.matchTimerInterval = null;
        this.recordActivity();
        const mins = String(Math.floor(this.matchSecondsElapsed / 60)).padStart(2, '0');
        const secs = String(this.matchSecondsElapsed % 60).padStart(2, '0');
        this.finalMatchTime.textContent = `${mins}:${secs}`;
        setTimeout(() => {
            this.matchGrid.classList.add('hidden');
            this.matchCompleteCard.classList.remove('hidden');
            this.fireConfetti();
        }, 450);
    }

    // ==========================================
    // SYNONYM QUIZ
    // ==========================================
    initSynonymQuiz() {
        let pool = this.getWordsForStudy(this.activeStudyDate).filter(w => w.synonyms && w.synonyms.trim());

        if (pool.length === 0) {
            if (this.synonymQuizContainer) this.synonymQuizContainer.classList.add('hidden');
            if (this.synonymQuizResultsCard) this.synonymQuizResultsCard.classList.remove('hidden');
            const iconEl = document.getElementById('synonymQuizTrophyIcon');
            const titleEl = document.getElementById('synonymQuizResultTitle');
            const subEl = document.getElementById('synonymQuizResultSubtitle');
            if (iconEl) iconEl.innerHTML = '<i class="fa-solid fa-circle-info text-primary"></i>';
            if (titleEl) titleEl.textContent = "Sinonimli so'zlar topilmadi";
            if (subEl) subEl.textContent = "So'zni tahrirlash orqali 'Qo'shimcha ma'lumotlar' bo'limiga sinonim kiriting.";
            if (this.synonymQuizCorrectCountEl) this.synonymQuizCorrectCountEl.textContent = '0';
            if (this.synonymQuizWrongCountEl) this.synonymQuizWrongCountEl.textContent = '0';
            if (this.synonymQuizAccuracyPercentEl) this.synonymQuizAccuracyPercentEl.textContent = '0%';
            return;
        }

        this.shuffleArray(pool);
        this.synonymQuizQuestions = pool.slice(0, Math.min(10, pool.length));
        this.currentSynonymQuizIndex = 0;
        this.synonymQuizScore = 0;
        this.synonymQuizStreak = 0;
        this.synonymQuizCorrectCount = 0;
        this.synonymQuizWrongCount = 0;

        if (this.synonymQuizContainer) this.synonymQuizContainer.classList.remove('hidden');
        if (this.synonymQuizResultsCard) this.synonymQuizResultsCard.classList.add('hidden');
        if (this.btnNextSynonymQuestion) this.btnNextSynonymQuestion.classList.add('hidden');
        if (this.synonymQuizFeedbackBanner) this.synonymQuizFeedbackBanner.classList.add('hidden');

        this.renderSynonymQuestion();
    }

    renderSynonymQuestion() {
        this.synonymQuizAnswered = false;
        if (this.btnNextSynonymQuestion) this.btnNextSynonymQuestion.classList.add('hidden');
        if (this.synonymQuizFeedbackBanner) this.synonymQuizFeedbackBanner.classList.add('hidden');

        const total = this.synonymQuizQuestions.length;
        if (this.synonymQuizQuestionIndex) this.synonymQuizQuestionIndex.textContent = this.currentSynonymQuizIndex + 1;
        if (this.synonymQuizTotalQuestions) this.synonymQuizTotalQuestions.textContent = total;
        if (this.synonymQuizCurrentScore) this.synonymQuizCurrentScore.textContent = this.synonymQuizScore;
        if (this.synonymQuizCurrentStreak) this.synonymQuizCurrentStreak.textContent = this.synonymQuizStreak;

        const current = this.synonymQuizQuestions[this.currentSynonymQuizIndex];
        if (this.synonymQuizPromptWord) {
            this.synonymQuizPromptWord.innerHTML = `
                <span class="syn-quiz-word">${this.escapeHTML(current.word)}</span>
                <span class="syn-quiz-translation">(${this.escapeHTML(current.translation)})</span>
            `;
        }

        const synList = current.synonyms.split(',').map(s => s.trim()).filter(Boolean);
        const correctSyn = synList[0];

        const allSynOptions = [];
        this.words.forEach(w => {
            if (w.id !== current.id && w.synonyms) {
                w.synonyms.split(',').forEach(s => {
                    const st = s.trim();
                    if (st && !allSynOptions.includes(st)) allSynOptions.push(st);
                });
            }
        });
        this.words.forEach(w => {
            if (w.id !== current.id && !allSynOptions.includes(w.word)) allSynOptions.push(w.word);
        });

        this.shuffleArray(allSynOptions);
        const options = [correctSyn];
        for (let opt of allSynOptions) {
            if (options.length >= 4) break;
            if (!options.includes(opt)) options.push(opt);
        }
        while (options.length < 4) options.push(`Variant ${options.length + 1}`);
        this.shuffleArray(options);

        if (this.synonymQuizOptionsGrid) {
            this.synonymQuizOptionsGrid.innerHTML = options.map((opt, idx) => `
                <button type="button" class="btn-quiz-option" data-option="${this.escapeAttr(opt)}">
                    <span class="quiz-opt-letter">${String.fromCharCode(65 + idx)}</span>
                    <span class="quiz-opt-text">${this.escapeHTML(opt)}</span>
                </button>
            `).join('');

            this.synonymQuizOptionsGrid.querySelectorAll('.btn-quiz-option').forEach(btn => {
                btn.addEventListener('click', () => this.handleSynonymOptionClick(btn, btn.dataset.option, correctSyn));
            });
        }
    }

    handleSynonymOptionClick(buttonEl, selectedOption, correctSyn) {
        if (this.synonymQuizAnswered) return;
        this.synonymQuizAnswered = true;

        const current = this.synonymQuizQuestions[this.currentSynonymQuizIndex];
        const isCorrect = selectedOption.toLowerCase() === correctSyn.toLowerCase();

        const optionButtons = this.synonymQuizOptionsGrid ? this.synonymQuizOptionsGrid.querySelectorAll('.btn-quiz-option') : [];
        optionButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.option.toLowerCase() === correctSyn.toLowerCase()) btn.classList.add('correct');
        });

        if (isCorrect) {
            buttonEl.classList.add('correct');
            this.synonymQuizStreak++;
            this.synonymQuizScore += 10 + (this.synonymQuizStreak * 2);
            this.synonymQuizCorrectCount++;
            this.recordActivity();
            this.playChimeSuccess();
            this.showSynonymFeedback(true, `To'g'ri! "${current.word}" so'zining sinonimi: "${correctSyn}"`);
        } else {
            buttonEl.classList.add('wrong');
            this.synonymQuizStreak = 0;
            this.synonymQuizWrongCount++;
            this.playErrorSound();
            this.showSynonymFeedback(false, `Noto'g'ri. To'g'ri sinonim: "${correctSyn}"`);
        }

        if (this.synonymQuizCurrentScore) this.synonymQuizCurrentScore.textContent = this.synonymQuizScore;
        if (this.synonymQuizCurrentStreak) this.synonymQuizCurrentStreak.textContent = this.synonymQuizStreak;
        if (this.btnNextSynonymQuestion) this.btnNextSynonymQuestion.classList.remove('hidden');
    }

    showSynonymFeedback(isSuccess, message) {
        if (!this.synonymQuizFeedbackBanner) return;
        this.synonymQuizFeedbackBanner.className = `quiz-feedback-banner ${isSuccess ? 'success' : 'wrong'}`;
        if (this.synonymFeedbackIcon) this.synonymFeedbackIcon.innerHTML = isSuccess ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-solid fa-circle-xmark"></i>';
        if (this.synonymFeedbackText) this.synonymFeedbackText.textContent = message;
        this.synonymQuizFeedbackBanner.classList.remove('hidden');
    }

    nextSynonymQuestion() {
        this.currentSynonymQuizIndex++;
        if (this.currentSynonymQuizIndex >= this.synonymQuizQuestions.length) this.showSynonymQuizResults();
        else this.renderSynonymQuestion();
    }

    showSynonymQuizResults() {
        if (this.synonymQuizContainer) this.synonymQuizContainer.classList.add('hidden');
        if (this.synonymQuizResultsCard) this.synonymQuizResultsCard.classList.remove('hidden');

        const total = this.synonymQuizQuestions.length;
        const accuracy = total > 0 ? Math.round((this.synonymQuizCorrectCount / total) * 100) : 0;

        if (this.synonymQuizCorrectCountEl) this.synonymQuizCorrectCountEl.textContent = this.synonymQuizCorrectCount;
        if (this.synonymQuizWrongCountEl) this.synonymQuizWrongCountEl.textContent = this.synonymQuizWrongCount;
        if (this.synonymQuizAccuracyPercentEl) this.synonymQuizAccuracyPercentEl.textContent = `${accuracy}%`;

        const titleEl = document.getElementById('synonymQuizResultTitle');
        const subEl = document.getElementById('synonymQuizResultSubtitle');
        const iconEl = document.getElementById('synonymQuizTrophyIcon');

        if (accuracy >= 80) {
            if (iconEl) iconEl.innerHTML = '<i class="fa-solid fa-trophy text-warning"></i>';
            if (titleEl) titleEl.textContent = "Sinonimlarni a'lo bilasiz!";
            if (subEl) subEl.textContent = `Zo'r natija! (${this.synonymQuizScore} ball)`;
            this.fireConfetti();
        } else if (accuracy >= 50) {
            if (iconEl) iconEl.innerHTML = '<i class="fa-solid fa-thumbs-up text-primary"></i>';
            if (titleEl) titleEl.textContent = "Yaxshi harakat!";
            if (subEl) subEl.textContent = `Yana mashq qiling! (${this.synonymQuizScore} ball)`;
        } else {
            if (iconEl) iconEl.innerHTML = '<i class="fa-solid fa-rotate-right text-secondary"></i>';
            if (titleEl) titleEl.textContent = "Sinonimlarni ko'proq o'rganing!";
            if (subEl) subEl.textContent = "So'zlarga sinonim qo'shib, qayta sinab ko'ring";
        }
    }

    // ==========================================
    // STATS VIEW
    // ==========================================
    renderStatsView() {
        const total = this.words.length;
        const mastered = this.words.filter(w => w.mastery === 2).length;
        const learning = this.words.filter(w => w.mastery === 1).length;
        const newCount = this.words.filter(w => !w.mastery || w.mastery === 0).length;

        if (this.statsTotalWords) this.statsTotalWords.textContent = total;
        if (this.statsMasteredWords) this.statsMasteredWords.textContent = mastered;
        if (this.statsLearningWords) this.statsLearningWords.textContent = learning;
        if (this.statsNewWords) this.statsNewWords.textContent = newCount;

        const masteryRate = total > 0 ? Math.round(((mastered + learning * 0.5) / total) * 100) : 0;
        const rateBadge = document.getElementById('statsMasteryRateBadge');
        if (rateBadge) rateBadge.textContent = `${masteryRate}%`;

        const segMastered = document.getElementById('segMastered');
        const segLearning = document.getElementById('segLearning');
        const segNew = document.getElementById('segNew');
        if (segMastered && segLearning && segNew) {
            segMastered.style.width = `${total > 0 ? ((mastered / total) * 100).toFixed(1) : 0}%`;
            segLearning.style.width = `${total > 0 ? ((learning / total) * 100).toFixed(1) : 0}%`;
            segNew.style.width = `${total > 0 ? ((newCount / total) * 100).toFixed(1) : 0}%`;
        }

        const legMastered = document.getElementById('legendMasteredCount');
        const legLearning = document.getElementById('legendLearningCount');
        const legNew = document.getElementById('legendNewCount');
        if (legMastered) legMastered.textContent = mastered;
        if (legLearning) legLearning.textContent = learning;
        if (legNew) legNew.textContent = newCount;

        const streakData = this.loadStreakData();
        const streak = streakData.streak || 1;
        const statsStreakDays = document.getElementById('statsStreakDays');
        if (statsStreakDays) statsStreakDays.textContent = streak;

        const learnedToday = streakData.todayLearnedCount || 0;
        const dailyLearnedEl = document.getElementById('statsDailyLearnedCount');
        const dailyPercentEl = document.getElementById('statsDailyPercent');
        const dailyGoalFill = document.getElementById('statsDailyGoalFill');
        const goalTip = document.getElementById('statsGoalTip');

        const goalTarget = 5;
        const goalPercent = Math.min(100, Math.round((learnedToday / goalTarget) * 100));

        if (dailyLearnedEl) dailyLearnedEl.textContent = learnedToday;
        if (dailyPercentEl) dailyPercentEl.textContent = `${goalPercent}%`;
        if (dailyGoalFill) dailyGoalFill.style.width = `${goalPercent}%`;

        if (goalTip) {
            if (learnedToday >= goalTarget) {
                goalTip.textContent = "Barakalla! Bugungi maqsadga yetdingiz! O'rganishda davom etishingiz mumkin.";
                goalTip.style.color = "var(--success-hover)";
            } else {
                goalTip.textContent = `Bugungi maqsad sari oldinga! Yana ${goalTarget - learnedToday} ta so'zni takrorlang.`;
                goalTip.style.color = "";
            }
        }
    }

    // ==========================================
    // SPEECH & AUDIO SYNTHESIS (Warm & Reliable)
    // ==========================================
    getEnglishVoice() {
        if (!('speechSynthesis' in window)) return null;
        const voices = window.speechSynthesis.getVoices() || [];
        return (
            voices.find(v => v.lang === 'en-US' && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha'))) ||
            voices.find(v => v.lang.startsWith('en-US')) ||
            voices.find(v => v.lang.startsWith('en')) ||
            null
        );
    }

    speak(text, btnEl = null) {
        if (!('speechSynthesis' in window)) {
            this.showToast("Brauzeringizda ovozli talaffuz mavjud emas", "error");
            return;
        }
        try {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = this.settings.speechRate || 0.92;
            utterance.pitch = 1.0;

            const enVoice = this.getEnglishVoice();
            if (enVoice) utterance.voice = enVoice;

            if (btnEl) {
                btnEl.classList.add('is-speaking');
                const clearSpeak = () => btnEl.classList.remove('is-speaking');
                utterance.onend = clearSpeak;
                utterance.onerror = clearSpeak;
                setTimeout(clearSpeak, 3500);
            }
            window.speechSynthesis.speak(utterance);
        } catch (e) { }
    }

    getAudioContext() {
        if (!this.audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) this.audioCtx = new AudioContextClass();
        }
        if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume().catch(() => { });
        }
        return this.audioCtx;
    }

    playTone(freq, type = 'sine', duration = 0.12, volume = 0.09) {
        if (!this.settings.soundEnabled) return;
        try {
            const ctx = this.getAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, now);

            gain.gain.setValueAtTime(0.001, now);
            gain.gain.linearRampToValueAtTime(volume, now + 0.015);
            gain.gain.exponentialRampToValueAtTime(0.0008, now + duration);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + duration + 0.02);
        } catch (e) { }
    }

    playPopSound(freq = 480) {
        this.playTone(freq, 'sine', 0.075, 0.07);
    }

    playErrorSound() {
        if (!this.settings.soundEnabled) return;
        this.playTone(240, 'sine', 0.12, 0.08);
        setTimeout(() => this.playTone(195, 'sine', 0.16, 0.07), 85);
    }

    playChimeSuccess() {
        if (!this.settings.soundEnabled) return;
        [523.25, 659.25, 783.99, 987.77].forEach((freq, i) => {
            setTimeout(() => this.playTone(freq, 'sine', 0.22, 0.08), i * 55);
        });
    }

    // ==========================================
    // CONFETTI
    // ==========================================
    fireConfetti() {
        const canvas = this.confettiCanvas;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = ['#2563eb', '#10b981', '#f59e0b', '#0ea5e9', '#7c3aed', '#f43f5e'];

        for (let i = 0; i < 85; i++) {
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: (Math.random() - 0.5) * 16,
                vy: (Math.random() - 0.8) * 16,
                size: Math.random() * 8 + 4,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 10,
                opacity: 1
            });
        }

        let animationFrame;
        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let activeCount = 0;

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.35;
                p.rotation += p.rotSpeed;
                p.opacity -= 0.013;

                if (p.opacity > 0) {
                    activeCount++;
                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate((p.rotation * Math.PI) / 180);
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = Math.max(0, p.opacity);
                    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
                    ctx.restore();
                }
            });

            if (activeCount > 0) animationFrame = requestAnimationFrame(render);
            else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                cancelAnimationFrame(animationFrame);
            }
        };
        render();
    }

    // ==========================================
    // TOASTS & KEYBOARD SHORTCUTS
    // ==========================================
    showToast(message, type = 'info', undoCallback = null) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        let icon = 'fa-solid fa-circle-info text-primary';
        if (type === 'success') icon = 'fa-solid fa-circle-check text-success';
        if (type === 'error') icon = 'fa-solid fa-triangle-exclamation text-danger';

        const leftDiv = document.createElement('div');
        leftDiv.className = 'toast-left';
        leftDiv.innerHTML = `<i class="${icon}"></i> <span>${this.escapeHTML(message)}</span>`;
        toast.appendChild(leftDiv);

        if (typeof undoCallback === 'function') {
            const undoBtn = document.createElement('button');
            undoBtn.type = 'button';
            undoBtn.className = 'toast-undo-btn';
            undoBtn.textContent = 'Bekor qilish';
            undoBtn.addEventListener('click', () => {
                undoCallback();
                toast.remove();
            });
            toast.appendChild(undoBtn);
        }

        this.toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(40px)';
            setTimeout(() => toast.remove(), 260);
        }, undoCallback ? 4800 : 3000);
    }

    handleKeydown(e) {
        if (this.tutorialModal && !this.tutorialModal.classList.contains('hidden')) {
            if (e.key === 'Escape') { e.preventDefault(); this.closeTutorialModal(); }
            else if (e.key === 'ArrowLeft') { e.preventDefault(); this.prevTutorialSlide(); }
            else if (e.key === 'ArrowRight' || e.key === 'Enter') { e.preventDefault(); this.nextTutorialSlide(); }
            return;
        }

        if (e.key === 'Escape') {
            [this.wordModal, this.bulkModal, this.exportImportModal, this.packsModal, this.confirmModal].forEach(m => {
                if (m && !m.classList.contains('hidden')) m.classList.add('hidden');
            });
            return;
        }

        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        const isInputting = activeTag === 'input' || activeTag === 'textarea' || activeTag === 'select';
        const isModalOpen = document.querySelector('.modal-backdrop:not(.hidden)') !== null;
        if (isInputting || isModalOpen) return;

        if (this.currentView === 'flashcards') {
            if (e.code === 'Space' || e.key === ' ') {
                e.preventDefault();
                if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
                this.flipFlashcard();
            } else if (e.code === 'ArrowLeft') this.prevFlashcard();
            else if (e.code === 'ArrowRight') this.nextFlashcard();
            else if (e.key === '1') this.rateFlashcard(0);
            else if (e.key === '2') this.rateFlashcard(1);
            else if (e.key === '3') this.rateFlashcard(2);
            else if (e.key.toLowerCase() === 's') {
                const current = this.flashcardList[this.currentCardIndex];
                if (current) this.speak(current.word, this.btnFrontAudio);
            }
        } else if (this.currentView === 'quiz') {
            if (this.quizSelectedAnswered) {
                if (e.key === 'Enter' || e.code === 'Space') {
                    e.preventDefault();
                    if (this.btnNextQuizQuestion && !this.btnNextQuizQuestion.classList.contains('hidden')) {
                        this.btnNextQuizQuestion.click();
                    }
                }
            } else {
                const optionButtons = this.quizOptionsGrid ? this.quizOptionsGrid.querySelectorAll('.btn-quiz-option') : [];
                let optIdx = -1;
                if (e.key === '1' || e.key.toLowerCase() === 'a') optIdx = 0;
                else if (e.key === '2' || e.key.toLowerCase() === 'b') optIdx = 1;
                else if (e.key === '3' || e.key.toLowerCase() === 'c') optIdx = 2;
                else if (e.key === '4' || e.key.toLowerCase() === 'd') optIdx = 3;

                if (optIdx >= 0 && optionButtons[optIdx] && !optionButtons[optIdx].disabled) {
                    e.preventDefault();
                    optionButtons[optIdx].click();
                } else if (e.key.toLowerCase() === 's') {
                    const current = this.quizQuestions[this.currentQuizIndex];
                    if (current) this.speak(current.word, this.btnQuizAudio);
                }
            }
        } else if (this.currentView === 'synonymquiz') {
            if (this.synonymQuizAnswered) {
                if (e.key === 'Enter' || e.code === 'Space') {
                    e.preventDefault();
                    if (this.btnNextSynonymQuestion && !this.btnNextSynonymQuestion.classList.contains('hidden')) {
                        this.btnNextSynonymQuestion.click();
                    }
                }
            } else {
                const optionButtons = this.synonymQuizOptionsGrid ? this.synonymQuizOptionsGrid.querySelectorAll('.btn-quiz-option') : [];
                let optIdx = -1;
                if (e.key === '1' || e.key.toLowerCase() === 'a') optIdx = 0;
                else if (e.key === '2' || e.key.toLowerCase() === 'b') optIdx = 1;
                else if (e.key === '3' || e.key.toLowerCase() === 'c') optIdx = 2;
                else if (e.key === '4' || e.key.toLowerCase() === 'd') optIdx = 3;

                if (optIdx >= 0 && optionButtons[optIdx] && !optionButtons[optIdx].disabled) {
                    e.preventDefault();
                    optionButtons[optIdx].click();
                } else if (e.key.toLowerCase() === 's') {
                    const current = this.synonymQuizQuestions[this.currentSynonymQuizIndex];
                    if (current) this.speak(current.word, this.btnSynonymQuizAudio);
                }
            }
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    escapeHTML(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    escapeAttr(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // ==========================================
    // ONBOARDING TUTORIAL
    // ==========================================
    checkOnboarding() {
        try {
            const hasSeen = localStorage.getItem(this.TUTORIAL_KEY);
            if (!hasSeen) {
                // Mark as seen when dismissed; keep app immediately usable on first load
                localStorage.setItem(this.TUTORIAL_KEY, 'true');
            }
        } catch (e) { }
    }

    openTutorialModal(slideIndex = 0) {
        if (!this.tutorialModal) return;
        this.currentTutorialSlide = Math.max(0, Math.min(slideIndex, this.totalTutorialSlides - 1));
        this.updateTutorialSlide();
        this.tutorialModal.classList.remove('hidden');
        this.playPopSound(520);
    }

    closeTutorialModal() {
        if (this.tutorialModal) this.tutorialModal.classList.add('hidden');
    }

    skipTutorial() {
        try { localStorage.setItem(this.TUTORIAL_KEY, 'true'); } catch (e) { }
        this.closeTutorialModal();
    }

    finishTutorial() {
        try { localStorage.setItem(this.TUTORIAL_KEY, 'true'); } catch (e) { }
        this.closeTutorialModal();
    }

    goToTutorialSlide(idx) {
        if (idx < 0 || idx >= this.totalTutorialSlides) return;
        this.currentTutorialSlide = idx;
        this.updateTutorialSlide();
        this.playPopSound(420 + idx * 45);
    }

    prevTutorialSlide() {
        if (this.currentTutorialSlide > 0) this.goToTutorialSlide(this.currentTutorialSlide - 1);
    }

    nextTutorialSlide() {
        if (this.currentTutorialSlide < this.totalTutorialSlides - 1) this.goToTutorialSlide(this.currentTutorialSlide + 1);
        else this.finishTutorial();
    }

    updateTutorialSlide() {
        if (!this.tutorialSlides || this.tutorialSlides.length === 0) return;

        this.tutorialSlides.forEach((slide, idx) => slide.classList.toggle('active', idx === this.currentTutorialSlide));
        this.tutorialDots.forEach((dot, idx) => dot.classList.toggle('active', idx === this.currentTutorialSlide));

        if (this.tourStagePill) {
            this.tourStagePill.innerHTML = `<i class="fa-solid fa-compass"></i> ${this.currentTutorialSlide + 1} / ${this.totalTutorialSlides}`;
        }
        const pct = Math.round(((this.currentTutorialSlide + 1) / this.totalTutorialSlides) * 100);
        if (this.tutorialProgressFill) this.tutorialProgressFill.style.width = `${pct}%`;
        if (this.btnTutorialPrev) this.btnTutorialPrev.disabled = this.currentTutorialSlide === 0;

        if (this.btnTutorialNextText && this.btnTutorialNextIcon) {
            if (this.currentTutorialSlide === this.totalTutorialSlides - 1) {
                this.btnTutorialNextText.textContent = "Boshlash";
                this.btnTutorialNextIcon.className = "fa-solid fa-circle-check";
                this.playChimeSuccess();
                this.fireConfetti();
            } else {
                this.btnTutorialNextText.textContent = "Keyingisi";
                this.btnTutorialNextIcon.className = "fa-solid fa-chevron-right";
            }
        }
    }

    handleTutorialLoadA1() {
        try { localStorage.setItem(this.TUTORIAL_KEY, 'true'); } catch (e) { }
        this.closeTutorialModal();
        this.importStarterPack('pack_a1');
        this.switchView('vocabulary');
    }

    handleTutorialStartFresh() {
        try { localStorage.setItem(this.TUTORIAL_KEY, 'true'); } catch (e) { }
        this.closeTutorialModal();
        this.switchView('vocabulary');
        this.activateSpotlightBeacon();
    }

    activateSpotlightBeacon() {
        if (this.quickAddCard) {
            this.quickAddCard.classList.remove('collapsed');
            this.quickAddCard.classList.add('spotlight-beacon');
            this.quickAddCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        if (this.quickAddSpotlightTip) this.quickAddSpotlightTip.classList.remove('hidden');
        if (this.quickWordInput) setTimeout(() => this.quickWordInput.focus(), 300);
    }

    dismissSpotlightTip() {
        if (this.quickAddCard) this.quickAddCard.classList.remove('spotlight-beacon');
        if (this.quickAddSpotlightTip) this.quickAddSpotlightTip.classList.add('hidden');
    }
}

if ('speechSynthesis' in window) { try { window.speechSynthesis.getVoices(); } catch (e) { } }
window.addEventListener('DOMContentLoaded', () => {
    window.app = new EasyLearnApp();
});
