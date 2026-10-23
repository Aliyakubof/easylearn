/**
 * EasyLearn - Shaxsiy So'z Yodlash Ilovasi
 * Javascript Core Application Logic
 */

// ==========================================
// 1. INITIAL STATE & SEED DATA
// ==========================================
const STARTER_PACKS = [
    {
        id: 'pack_a1',
        title: "A1-A2 Boshlang'ich (Top 30)",
        icon: '<i class="fa-solid fa-rocket text-primary"></i>',
        description: "Kundalik hayotda eng ko'p ishlatiladigan asosiy tayanch so'zlar",
        words: [
            { word: "Water", translation: "Suv" },
            { word: "Book", translation: "Kitob" },
            { word: "Friend", translation: "Do'st" },
            { word: "Family", translation: "Oila" },
            { word: "House", translation: "Uy" },
            { word: "Time", translation: "Vaqt" },
            { word: "Work", translation: "Ish, ishlamoq" },
            { word: "School", translation: "Maktab" },
            { word: "City", translation: "Shahar" },
            { word: "World", translation: "Dunyo, olam" },
            { word: "Money", translation: "Pul" },
            { word: "Car", translation: "Mashina" },
            { word: "Food", translation: "Oziq-ovqat, taom" },
            { word: "Life", translation: "Hayot" },
            { word: "People", translation: "Odamlar, xalq" },
            { word: "Child", translation: "Bola" },
            { word: "Story", translation: "Hikoya, qissa" },
            { word: "Country", translation: "Mamlakat, yurt" },
            { word: "Road", translation: "Yo'l" },
            { word: "Sun", translation: "Quyosh" },
            { word: "Night", translation: "Tun, kecha" },
            { word: "Day", translation: "Kun" },
            { word: "Music", translation: "Musiqa" },
            { word: "Question", translation: "Savol" },
            { word: "Answer", translation: "Javob" },
            { word: "Problem", translation: "Muammo" },
            { word: "Place", translation: "Joy, makon" },
            { word: "Help", translation: "Yordam bermoq" },
            { word: "Learn", translation: "O'rganmoq" },
            { word: "Speak", translation: "Gapirmoq, so'zlamoq" }
        ]
    },
    {
        id: 'pack_conversation',
        title: "Kundalik So'zlashuv (Daily Chat)",
        icon: '<i class="fa-solid fa-comments text-info"></i>',
        description: "Jonli muloqot va nutqda tez-tez ishlatiladigan sifat va ravishlar",
        words: [
            { word: "Awesome", translation: "Ajoyib, zo'r" },
            { word: "Definitely", translation: "Albatta, shubhasiz" },
            { word: "Probably", translation: "Ehtimol, balki" },
            { word: "Actually", translation: "Aslida, haqiqatda" },
            { word: "Anyway", translation: "Nima bo'lganda ham" },
            { word: "Exactly", translation: "Aynan, xuddi shunday" },
            { word: "Obviously", translation: "Aniqki, ko'rinib turibdiki" },
            { word: "Completely", translation: "Butunlay, to'liq" },
            { word: "Especially", translation: "Ayniqsa, xususan" },
            { word: "Immediately", translation: "Darhol, tezda" },
            { word: "Seriously", translation: "Jiddiy, hazilsiz" },
            { word: "Perfect", translation: "Mukammal, a'lo" },
            { word: "Basically", translation: "Asosan, mohiyatan" },
            { word: "Hopefully", translation: "Umid qilamanki" },
            { word: "Unfortunately", translation: "Afsuski, baxtga qarshi" },
            { word: "Suddenly", translation: "To'satdan, birdaniga" },
            { word: "Certainly", translation: "Albatta, shak-shubhasiz" },
            { word: "Currently", translation: "Hozirda, ayni vaqtda" },
            { word: "Usually", translation: "Odatda" },
            { word: "Grateful", translation: "Minnatdor" }
        ]
    },
    {
        id: 'pack_business',
        title: "Biznes & Ish Faoliyati (Career)",
        icon: '<i class="fa-solid fa-briefcase text-secondary"></i>',
        description: "Ofis, muloqot, rejalashtirish va ish jarayonidagi muhim atamalar",
        words: [
            { word: "Negotiate", translation: "Muzokara olib bormoq" },
            { word: "Agreement", translation: "Kelishuv, shartnoma" },
            { word: "Deadline", translation: "Oxirgi muddat" },
            { word: "Goal", translation: "Maqsad" },
            { word: "Revenue", translation: "Daromad, tushum" },
            { word: "Investment", translation: "Investitsiya, sarmoya" },
            { word: "Client", translation: "Mijoz" },
            { word: "Strategy", translation: "Strategiya, reja" },
            { word: "Leadership", translation: "Yetakchilik, rahbarlik" },
            { word: "Management", translation: "Boshqaruv" },
            { word: "Profit", translation: "Foyda" },
            { word: "Opportunity", translation: "Imkoniyat" },
            { word: "Contract", translation: "Shartnoma, bitim" },
            { word: "Employee", translation: "Xodim, ishchi" },
            { word: "Schedule", translation: "Jadval, reja" },
            { word: "Presentation", translation: "Taqdimot" },
            { word: "Performance", translation: "Natijadorlik, faoliyat" },
            { word: "Decision", translation: "Qaror" },
            { word: "Challenge", translation: "Qiyinchilik, sinov" },
            { word: "Success", translation: "Muvaffaqiyat, g'alaba" }
        ]
    },
    {
        id: 'pack_travel',
        title: "Sayohat & Turizm (Travel)",
        icon: '<i class="fa-solid fa-plane-departure text-success"></i>',
        description: "Aeroport, mehmonxona, shahar bo'ylab sayohat qilishdagi so'zlar",
        words: [
            { word: "Airport", translation: "Aeroport" },
            { word: "Passport", translation: "Pasport" },
            { word: "Luggage", translation: "Yuk, bagaj" },
            { word: "Hotel", translation: "Mehmonxona" },
            { word: "Destination", translation: "Manzil, boradigan joy" },
            { word: "Flight", translation: "Parvoz, reys" },
            { word: "Boarding", translation: "Samolyotga chiqish" },
            { word: "Reservation", translation: "Band qilish, bron" },
            { word: "Departure", translation: "Jo'nab ketish" },
            { word: "Arrival", translation: "Yetib kelish" },
            { word: "Tourist", translation: "Sayyoh, turist" },
            { word: "Journey", translation: "Sayohat, safar" },
            { word: "Adventure", translation: "Sarguzasht" },
            { word: "Vacation", translation: "Ta'til" },
            { word: "Explore", translation: "Tadqiq qilmoq, o'rganmoq" },
            { word: "Map", translation: "Xarita" },
            { word: "Passenger", translation: "Yo'lovchi" },
            { word: "Ticket", translation: "Chipta" },
            { word: "Currency", translation: "Valyuta" },
            { word: "Guide", translation: "Gid, yo'lboshchi" }
        ]
    },
    {
        id: 'pack_tech',
        title: "IT & Zamonaviy Texnologiyalar",
        icon: '<i class="fa-solid fa-laptop-code text-primary"></i>',
        description: "Dasturlash, kompyuter va axborot texnologiyalari atamalari",
        words: [
            { word: "Database", translation: "Ma'lumotlar bazasi" },
            { word: "Variable", translation: "O'zgaruvchi" },
            { word: "Function", translation: "Funksiya, vazifa" },
            { word: "Algorithm", translation: "Algoritm" },
            { word: "Framework", translation: "Freymvork, platforma" },
            { word: "Security", translation: "Xavfsizlik" },
            { word: "Deployment", translation: "Ishga tushirish (deploy)" },
            { word: "Interface", translation: "Interfeys" },
            { word: "Network", translation: "Tarmoq" },
            { word: "Repository", translation: "Repozitoriy, ombor" },
            { word: "Debug", translation: "Xatolarni to'g'rilash" },
            { word: "Server", translation: "Server" },
            { word: "Browser", translation: "Brauzer" },
            { word: "Query", translation: "So'rov" },
            { word: "Component", translation: "Komponent, tarkibiy qism" },
            { word: "Software", translation: "Dasturiy ta'minot" },
            { word: "Storage", translation: "Xotira, saqlash joyi" },
            { word: "Update", translation: "Yangilash" },
            { word: "Authentication", translation: "Autentifikatsiya, tasdiqlash" },
            { word: "Responsive", translation: "Moslashuvchan (dizayn)" }
        ]
    },
    {
        id: 'pack_ielts',
        title: "IELTS & Academic (Top 25)",
        icon: '<i class="fa-solid fa-bullseye text-danger"></i>',
        description: "Akademik ingliz tili va imtihonlarda yuqori ball olish uchun muhim so'zlar",
        words: [
            { word: "Perseverance", translation: "Qat'iyat, matonat" },
            { word: "Comprehensive", translation: "Keng qamrovli, to'liq" },
            { word: "Significant", translation: "Muhim, ahamiyatli" },
            { word: "Evaluate", translation: "Baholamoq, qiymat bermoq" },
            { word: "Perspective", translation: "Nuqtai nazar, qarash" },
            { word: "Consequence", translation: "Oqibat, natija" },
            { word: "Determine", translation: "Aniqlamoq, belgilamoq" },
            { word: "Fundamental", translation: "Asosiy, poydevorli" },
            { word: "Indicate", translation: "Ko'rsatmoq, bildirmoq" },
            { word: "Acquire", translation: "Egallamoq, orttirmoq" },
            { word: "Maintain", translation: "Saqlamoq, ushlab turmoq" },
            { word: "Emphasize", translation: "Urg'u bermoq, ta'kidlamoq" },
            { word: "Illustrate", translation: "Misollar bilan tushuntirmoq" },
            { word: "Consistent", translation: "Muntazam, barqaror" },
            { word: "Perceive", translation: "Idrok etmoq, his qilmoq" },
            { word: "Sufficient", translation: "Yetarli, qanoatli" },
            { word: "Eliminate", translation: "Yo'q qilmoq, bartaraf etmoq" },
            { word: "Approach", translation: "Yondashuv, usul" },
            { word: "Establish", translation: "Tashkil qilmoq, o'rnatmoq" },
            { word: "Contribute", translation: "Hissa qo'shmoq" },
            { word: "Crucial", translation: "Hal qiluvchi, o'ta muhim" },
            { word: "Appropriate", translation: "Munosib, to'g'ri keladigan" },
            { word: "Evidence", translation: "Dalil, isbot" },
            { word: "Potential", translation: "Salohiyat, imkoniyat" },
            { word: "Complex", translation: "Murakkab, chigal" }
        ]
    }
];

const DEFAULT_WORDS = [];

class EasyLearnApp {
    constructor() {
        this.STORAGE_KEY = 'easylearn_words_v2';
        this.SETTINGS_KEY = 'easylearn_settings_v2';

        // Clear any old dummy data cache from previous versions
        localStorage.removeItem('easylearn_words_data_v1');

        // State
        this.words = this.loadWords();
        this.currentView = 'vocabulary';
        this.selectedDateFilter = 'all';
        this.activeStudyDate = 'today';

        // Flashcards state
        this.flashcardList = [];
        this.currentCardIndex = 0;
        this.isCardFlipped = false;
        this.flashcardStartSide = 'en'; // 'en' (front is word) or 'uz' (front is translation)

        // Quiz state
        this.quizQuestions = [];
        this.currentQuizIndex = 0;
        this.quizScore = 0;
        this.quizStreak = 0;
        this.quizCorrectCount = 0;
        this.quizWrongCount = 0;
        this.quizSelectedAnswered = false;

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

        // Sound Synthesizer
        this.audioCtx = null;

        // Tutorial & Onboarding state
        this.TUTORIAL_KEY = 'easylearn_tutorial_seen_v3';
        this.currentTutorialSlide = 0;
        this.totalTutorialSlides = 6;

        // Init
        this.initDOM();
        this.initTheme();
        this.bindEvents();
        this.renderAll();
        this.checkOnboarding();
    }

    // ==========================================
    // 2. STORAGE & DATA MANAGEMENT
    // ==========================================
    getLocalDateStr(dateOrTimestamp) {
        let d;
        if (!dateOrTimestamp) {
            d = new Date();
        } else if (typeof dateOrTimestamp === 'number' || typeof dateOrTimestamp === 'string') {
            d = new Date(dateOrTimestamp);
        } else if (dateOrTimestamp instanceof Date) {
            d = dateOrTimestamp;
        } else {
            d = new Date();
        }
        if (isNaN(d.getTime())) d = new Date();
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    loadWords() {
        try {
            const data = localStorage.getItem(this.STORAGE_KEY);
            if (data) {
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
        return [...DEFAULT_WORDS];
    }

    saveWords() {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.words));
            this.updateHeaderStats();
            this.populateAllDateSelectors();
        } catch (e) {
            console.error("Storage save error:", e);
            this.showToast("Xatolik: Ma'lumotlarni saqlab bo'lmadi", "error");
        }
    }

    // ==========================================
    // 3. DOM ELEMENTS CACHING
    // ==========================================
    initDOM() {
        // Navigation
        this.navTabs = document.querySelectorAll('.nav-tab');
        this.bottomNavItems = document.querySelectorAll('.bottom-nav-item');
        this.bottomNavVocabBadge = document.getElementById('bottomNavVocabBadge');
        this.fabAddWord = document.getElementById('fabAddWord');
        this.quickAddToggleHeader = document.getElementById('quickAddToggleHeader');
        this.quickAddCard = document.getElementById('quickAddCard');
        this.viewSections = document.querySelectorAll('.view-section');

        // Header Stats
        this.headerTotalWords = document.getElementById('headerTotalWords');
        this.headerMasteredWords = document.getElementById('headerMasteredWords');
        this.headerStreak = document.getElementById('headerStreak');
        this.vocabCountBadge = document.getElementById('vocabCountBadge');

        // Vocabulary View
        this.wordsGrid = document.getElementById('wordsGrid');
        this.searchInput = document.getElementById('searchInput');
        this.clearSearchBtn = document.getElementById('clearSearchBtn');
        this.levelFilter = document.getElementById('levelFilter');
        this.sortOrder = document.getElementById('sortOrder');
        this.displayedCount = document.getElementById('displayedCount');
        this.emptyVocabState = document.getElementById('emptyVocabState');
        this.btnStudyFilteredFlashcards = document.getElementById('btnStudyFilteredFlashcards');

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
        this.btnOpenAddModal = document.getElementById('btnOpenAddModal');
        this.btnCloseWordModal = document.getElementById('btnCloseWordModal');
        this.btnCancelWordModal = document.getElementById('btnCancelWordModal');
        this.btnPreviewInputAudio = document.getElementById('btnPreviewInputAudio');

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
        this.flashcardsView = document.getElementById('flashcardsView');
        this.btnShuffleFlashcards = document.getElementById('btnShuffleFlashcards');
        this.btnToggleCardSide = document.getElementById('btnToggleCardSide');
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
        this.quizView = document.getElementById('quizView');
        this.btnRestartQuiz = document.getElementById('btnRestartQuiz');
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
        this.writingView = document.getElementById('writingView');
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
        this.matchView = document.getElementById('matchingView');
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

        // Confetti Canvas
        this.confettiCanvas = document.getElementById('confettiCanvas');
        this.toastContainer = document.getElementById('toastContainer');

        // Quick Add Form DOM
        this.quickAddForm = document.getElementById('quickAddForm');
        this.quickWordInput = document.getElementById('quickWordInput');
        this.quickTranslationInput = document.getElementById('quickTranslationInput');
        this.btnQuickAdd = document.getElementById('btnQuickAdd');

        // Starter Packs DOM
        this.packsModal = document.getElementById('packsModal');
        this.packsGrid = document.getElementById('packsGrid');
        this.btnOpenPacksTop = document.getElementById('btnOpenPacksTop');
        this.btnOpenPacksToolbar = document.getElementById('btnOpenPacksToolbar');
        this.emptyPacksBtn = document.getElementById('emptyPacksBtn');
        this.btnClosePacksModal = document.getElementById('btnClosePacksModal');
        this.btnClosePacksModalBtn = document.getElementById('btnClosePacksModalBtn');
        this.extraDetailsAccordion = document.getElementById('extraDetailsAccordion');

        // Date / Day DOM Elements
        this.quickDateInput = document.getElementById('quickDateInput');
        this.dateFilter = document.getElementById('dateFilter');
        this.customDateFilterInput = document.getElementById('customDateFilterInput');
        this.activeDateFilterBadge = document.getElementById('activeDateFilterBadge');
        this.activeDateFilterText = document.getElementById('activeDateFilterText');
        this.btnResetDateFilter = document.getElementById('btnResetDateFilter');
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

        // Synonym Input in word modal
        this.inputSynonyms = document.getElementById('inputSynonyms');

        // Synonym Quiz DOM
        this.synonymQuizView = document.getElementById('synonymQuizView');
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

        // Tutorial & Onboarding DOM
        this.tutorialModal = document.getElementById('tutorialModal');
        this.tutorialSlidesContainer = document.getElementById('tutorialSlidesContainer');
        this.tutorialSlides = document.querySelectorAll('.tutorial-slide');
        this.tutorialDots = document.querySelectorAll('.tutorial-dot');
        if (this.tutorialSlides && this.tutorialSlides.length) {
            this.totalTutorialSlides = this.tutorialSlides.length;
        }
        this.tourStagePill = document.getElementById('tourStagePill');
        this.tutorialProgressFill = document.getElementById('tutorialProgressFill');
        this.tutorialStepCounter = document.getElementById('tutorialStepCounter');
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
        this.emptyTutorialBtn = document.getElementById('emptyTutorialBtn');
        this.quickAddSpotlightTip = document.getElementById('quickAddSpotlightTip');
        this.btnCloseSpotlightTip = document.getElementById('btnCloseSpotlightTip');

        // Initialize default dates
        const todayStr = this.getLocalDateStr();
        if (this.quickDateInput) this.quickDateInput.value = todayStr;
        if (this.inputStudyDate) this.inputStudyDate.value = todayStr;
        if (this.bulkStudyDate) this.bulkStudyDate.value = todayStr;
    }

    // ==========================================
    // 4. EVENT LISTENERS
    // ==========================================
    bindEvents() {
        // Modal backdrop click to close
        [this.wordModal, this.bulkModal, this.exportImportModal, this.packsModal, this.tutorialModal].forEach(modal => {
            if (!modal) return;
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    if (modal === this.tutorialModal) {
                        this.closeTutorialModal();
                    } else {
                        modal.classList.add('hidden');
                    }
                }
            });
        });

        // Tutorial & Onboarding Triggers
        if (this.btnOpenTutorial) this.btnOpenTutorial.addEventListener('click', () => this.openTutorialModal(0));
        if (this.emptyTutorialBtn) this.emptyTutorialBtn.addEventListener('click', () => this.openTutorialModal(0));
        if (this.btnSkipTutorial) this.btnSkipTutorial.addEventListener('click', () => this.skipTutorial());
        if (this.btnCloseTutorialModal) this.btnCloseTutorialModal.addEventListener('click', () => this.closeTutorialModal());
        if (this.btnTutorialPrev) this.btnTutorialPrev.addEventListener('click', () => this.prevTutorialSlide());
        if (this.btnTutorialNext) this.btnTutorialNext.addEventListener('click', () => this.nextTutorialSlide());

        if (this.tutorialDots) {
            this.tutorialDots.forEach((dot, idx) => {
                dot.addEventListener('click', () => this.goToTutorialSlide(idx));
            });
        }

        if (this.btnTutorialLoadA1) {
            this.btnTutorialLoadA1.addEventListener('click', () => this.handleTutorialLoadA1());
        }
        if (this.tutCardChoiceA1) {
            this.tutCardChoiceA1.addEventListener('click', (e) => {
                if (e.target !== this.btnTutorialLoadA1 && !this.btnTutorialLoadA1?.contains(e.target)) {
                    this.handleTutorialLoadA1();
                }
            });
        }
        if (this.btnTutorialStartFresh) {
            this.btnTutorialStartFresh.addEventListener('click', () => this.handleTutorialStartFresh());
        }
        if (this.tutCardChoiceFresh) {
            this.tutCardChoiceFresh.addEventListener('click', (e) => {
                if (e.target !== this.btnTutorialStartFresh && !this.btnTutorialStartFresh?.contains(e.target)) {
                    this.handleTutorialStartFresh();
                }
            });
        }

        if (this.btnCloseSpotlightTip) {
            this.btnCloseSpotlightTip.addEventListener('click', () => this.dismissSpotlightTip());
        }
        if (this.quickWordInput) {
            this.quickWordInput.addEventListener('focus', () => this.dismissSpotlightTip());
        }

        // Quick Add Form
        if (this.quickAddForm) {
            this.quickAddForm.addEventListener('submit', (e) => this.handleQuickAdd(e));
        }
        if (this.quickWordInput && this.quickTranslationInput) {
            this.quickWordInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' && this.quickWordInput.value.trim() && !this.quickTranslationInput.value.trim()) {
                    e.preventDefault();
                    this.quickTranslationInput.focus();
                }
            });
        }

        // Starter Packs Modal Triggers
        if (this.btnOpenPacksTop) this.btnOpenPacksTop.addEventListener('click', () => this.openPacksModal());
        if (this.btnOpenPacksToolbar) this.btnOpenPacksToolbar.addEventListener('click', () => this.openPacksModal());
        if (this.emptyPacksBtn) this.emptyPacksBtn.addEventListener('click', () => this.openPacksModal());
        if (this.btnClosePacksModal) this.btnClosePacksModal.addEventListener('click', () => this.closePacksModal());
        if (this.btnClosePacksModalBtn) this.btnClosePacksModalBtn.addEventListener('click', () => this.closePacksModal());

        // Navigation Tabs (Desktop & Mobile)
        this.navTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const view = tab.dataset.view;
                this.switchView(view);
            });
        });

        if (this.bottomNavItems) {
            this.bottomNavItems.forEach(item => {
                item.addEventListener('click', () => {
                    const view = item.dataset.view;
                    this.switchView(view);
                });
            });
        }

        // Mobile Floating Action Button (FAB)
        if (this.fabAddWord) {
            this.fabAddWord.addEventListener('click', () => this.openAddWordModal());
        }

        // Quick Add Collapsible on Mobile
        if (this.quickAddToggleHeader && this.quickAddCard) {
            this.quickAddToggleHeader.addEventListener('click', () => {
                this.quickAddCard.classList.toggle('collapsed');
            });
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
        // Date & Day Filters
        if (this.dateFilter) {
            this.dateFilter.addEventListener('change', () => {
                const val = this.dateFilter.value;
                if (val === 'custom') {
                    if (this.customDateFilterInput) {
                        this.customDateFilterInput.classList.remove('hidden');
                        if (typeof this.customDateFilterInput.showPicker === 'function') {
                            this.customDateFilterInput.showPicker();
                        } else {
                            this.customDateFilterInput.focus();
                        }
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
        if (this.btnResetDateFilter) {
            this.btnResetDateFilter.addEventListener('click', () => {
                this.selectedDateFilter = 'all';
                if (this.dateFilter) this.dateFilter.value = 'all';
                if (this.customDateFilterInput) {
                    this.customDateFilterInput.value = '';
                    this.customDateFilterInput.classList.add('hidden');
                }
                this.updateDateFilterBadge();
                this.renderVocabularyGrid();
            });
        }

        this.levelFilter.addEventListener('change', () => this.renderVocabularyGrid());
        this.sortOrder.addEventListener('change', () => this.renderVocabularyGrid());
        this.btnStudyFilteredFlashcards.addEventListener('click', () => {
            if (this.selectedDateFilter && this.selectedDateFilter !== 'all' && this.selectedDateFilter !== 'custom') {
                this.activeStudyDate = this.selectedDateFilter;
            }
            this.syncStudyDaySelectors(this.activeStudyDate);
            this.switchView('flashcards');
        });

        // Single Word Modal
        this.btnOpenAddModal.addEventListener('click', () => this.openAddWordModal());
        this.btnCloseWordModal.addEventListener('click', () => this.closeWordModal());
        this.btnCancelWordModal.addEventListener('click', () => this.closeWordModal());
        this.wordForm.addEventListener('submit', (e) => this.handleSaveWord(e));
        this.btnPreviewInputAudio.addEventListener('click', () => {
            if (this.inputWord.value.trim()) {
                this.speak(this.inputWord.value.trim(), this.btnPreviewInputAudio);
            }
        });

        // Date Quick Buttons in Modal
        if (this.btnDateToday) {
            this.btnDateToday.addEventListener('click', () => {
                if (this.inputStudyDate) this.inputStudyDate.value = this.getLocalDateStr();
            });
        }
        if (this.btnDateTomorrow) {
            this.btnDateTomorrow.addEventListener('click', () => {
                const d = new Date();
                d.setDate(d.getDate() + 1);
                if (this.inputStudyDate) this.inputStudyDate.value = this.getLocalDateStr(d);
            });
        }
        if (this.btnDateYesterday) {
            this.btnDateYesterday.addEventListener('click', () => {
                const d = new Date();
                d.setDate(d.getDate() - 1);
                if (this.inputStudyDate) this.inputStudyDate.value = this.getLocalDateStr(d);
            });
        }

        // Bulk Modal
        this.btnOpenBulkModal.addEventListener('click', () => this.openBulkModal());
        this.btnCloseBulkModal.addEventListener('click', () => this.closeBulkModal());
        this.btnCancelBulkModal.addEventListener('click', () => this.closeBulkModal());
        this.btnSaveBulkWords.addEventListener('click', () => this.handleSaveBulkWords());
        this.bulkTextArea.addEventListener('input', () => this.updateBulkParsedCount());
        this.emptyAddBtn.addEventListener('click', () => this.openAddWordModal());
        this.emptyBulkBtn.addEventListener('click', () => this.openBulkModal());

        // Gemini Prompt Copy
        if (this.btnCopyGeminiPrompt && this.geminiPromptText) {
            this.btnCopyGeminiPrompt.addEventListener('click', () => {
                const promptToCopy = this.geminiPromptText.innerText || this.geminiPromptText.textContent;
                navigator.clipboard.writeText(promptToCopy.trim()).then(() => {
                    const originalHtml = this.btnCopyGeminiPrompt.innerHTML;
                    this.btnCopyGeminiPrompt.innerHTML = '<i class="fa-solid fa-check"></i> <span>Nusxalandi!</span>';
                    this.btnCopyGeminiPrompt.classList.add('copied');
                    this.showToast("Gemini prompti nusxalandi! Uni Gemini-ga rasm bilan yuboring.", "success");
                    setTimeout(() => {
                        this.btnCopyGeminiPrompt.innerHTML = originalHtml;
                        this.btnCopyGeminiPrompt.classList.remove('copied');
                    }, 2500);
                }).catch(() => {
                    this.showToast("Nusxalashda xatolik yuz berdi. Matnni belgilab nusxa oling.", "error");
                });
            });
        }

        // Export/Import Modal
        this.btnExportImportModal.addEventListener('click', () => this.exportImportModal.classList.remove('hidden'));
        this.btnCloseExportImportModal.addEventListener('click', () => this.exportImportModal.classList.add('hidden'));
        this.btnExportJSON.addEventListener('click', () => this.exportJSON());
        this.btnExportCSV.addEventListener('click', () => this.exportCSV());
        this.btnTriggerFileSelect.addEventListener('click', () => this.importFileInput.click());
        this.importFileInput.addEventListener('change', (e) => this.handleImportFile(e));

        // Flashcards Controls
        if (this.flashcardDaySelect) {
            this.flashcardDaySelect.addEventListener('change', (e) => {
                this.activeStudyDate = e.target.value;
                this.syncStudyDaySelectors(this.activeStudyDate);
                this.initFlashcards();
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

        // Quiz Controls
        if (this.quizDaySelect) {
            this.quizDaySelect.addEventListener('change', (e) => {
                this.activeStudyDate = e.target.value;
                this.syncStudyDaySelectors(this.activeStudyDate);
                this.initQuiz();
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

        // Writing Controls
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

        // Matching Game Controls
        if (this.matchingDaySelect) {
            this.matchingDaySelect.addEventListener('change', (e) => {
                this.activeStudyDate = e.target.value;
                this.syncStudyDaySelectors(this.activeStudyDate);
                this.initMatchingGame();
            });
        }
        this.btnRestartMatchGame.addEventListener('click', () => this.initMatchingGame());
        this.btnPlayMatchAgain.addEventListener('click', () => this.initMatchingGame());

        // Synonym Quiz Controls
        if (this.synonymQuizDaySelect) {
            this.synonymQuizDaySelect.addEventListener('change', (e) => {
                this.activeStudyDate = e.target.value;
                this.syncStudyDaySelectors(this.activeStudyDate);
                this.initSynonymQuiz();
            });
        }
        if (this.btnRestartSynonymQuiz) {
            this.btnRestartSynonymQuiz.addEventListener('click', () => this.initSynonymQuiz());
        }
        if (this.btnNextSynonymQuestion) {
            this.btnNextSynonymQuestion.addEventListener('click', () => this.nextSynonymQuestion());
        }
        if (this.btnSynonymQuizPlayAgain) {
            this.btnSynonymQuizPlayAgain.addEventListener('click', () => this.initSynonymQuiz());
        }
        if (this.btnSynonymQuizGoToVocab) {
            this.btnSynonymQuizGoToVocab.addEventListener('click', () => this.switchView('vocabulary'));
        }
        if (this.btnSynonymQuizAudio) {
            this.btnSynonymQuizAudio.addEventListener('click', () => {
                const current = this.synonymQuizQuestions[this.currentSynonymQuizIndex];
                if (current) this.speak(current.word, this.btnSynonymQuizAudio);
            });
        }

        // Stats Controls
        this.btnResetStats.addEventListener('click', () => {
            this.renderStatsView();
            this.showToast("Statistika yangilandi", "info");
        });

        // Keyboard Shortcuts
        document.addEventListener('keydown', (e) => this.handleKeydown(e));
    }

    // ==========================================
    // 5. THEME & VIEW SWITCHING
    // ==========================================
    switchView(viewName) {
        // Clear matching game timer if leaving matching view
        if (viewName !== 'matching' && this.matchTimerInterval) {
            clearInterval(this.matchTimerInterval);
            this.matchTimerInterval = null;
        }

        this.currentView = viewName;
        this.navTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.view === viewName);
        });
        if (this.bottomNavItems) {
            this.bottomNavItems.forEach(item => {
                item.classList.toggle('active', item.dataset.view === viewName);
            });
        }
        this.viewSections.forEach(sec => {
            sec.classList.toggle('active', sec.id === `${viewName}View`);
        });

        // Hide FAB on writing and matching views so it doesn't obstruct typing or tiles
        if (this.fabAddWord) {
            this.fabAddWord.style.display = (viewName === 'writing' || viewName === 'matching') ? 'none' : 'flex';
        }

        // Smooth scroll to top when changing views
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // View specific initializations
        if (viewName === 'vocabulary') {
            this.renderVocabularyGrid();
        } else if (viewName === 'flashcards') {
            this.initFlashcards();
        } else if (viewName === 'quiz') {
            this.initQuiz();
        } else if (viewName === 'writing') {
            this.initWriting();
        } else if (viewName === 'matching') {
            this.initMatchingGame();
        } else if (viewName === 'synonymquiz') {
            this.initSynonymQuiz();
        } else if (viewName === 'stats') {
            this.renderStatsView();
        }
    }

    initTheme() {
        // Enforce clean light mode permanently
        try {
            localStorage.removeItem('easylearn_theme');
            document.documentElement.removeAttribute('data-theme');
        } catch (e) {}
    }

    // ==========================================
    // STREAK & DAILY ACTIVITY TRACKING
    // ==========================================
    loadStreakData() {
        try {
            const raw = localStorage.getItem('easylearn_streak_data');
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return {
            streak: 1,
            lastDate: this.getLocalDateStr(),
            todayLearnedCount: 0
        };
    }

    saveStreakData(data) {
        try {
            localStorage.setItem('easylearn_streak_data', JSON.stringify(data));
        } catch (e) {}
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
    }

    updateStreakUI() {
        const data = this.loadStreakData();
        const streak = data.streak || 1;
        if (this.headerStreak) {
            this.headerStreak.textContent = streak;
        }
        const statsStreakDays = document.getElementById('statsStreakDays');
        if (statsStreakDays) {
            statsStreakDays.textContent = streak;
        }
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
        if (this.bottomNavVocabBadge) {
            this.bottomNavVocabBadge.textContent = total;
        }
        this.updateStreakUI();
        this.updateMotivationBanner();
    }

    updateMotivationBanner() {
        const banner = document.getElementById('motivationBanner');
        const title = document.getElementById('motivationTitle');
        const text = document.getElementById('motivationText');
        if (!banner || !title) return;

        const todayStr = this.getLocalDateStr();
        const addedToday = this.words.filter(w => (w.dateStr || this.getLocalDateStr(w.createdAt)) === todayStr).length;
        
        if (addedToday === 0) {
            title.textContent = "Bugun hali yangi so'z o'rganmadingiz!";
            text.textContent = "Keling, kunni bitta so'z qo'shishdan boshlaymiz.";
        } else if (addedToday < 5) {
            title.textContent = `Bugun ${addedToday} ta so'z kiritildi!`;
            text.textContent = "Ajoyib boshlanish! Yana bir nechtasini yodlashga nima deysiz?";
        } else {
            title.textContent = `Zo'r! Bugun ${addedToday} ta so'z belgilandi!`;
            text.textContent = "Sizni to'xtatib bo'lmaydi! Davom eting!";
        }
        
        banner.style.display = 'none';
    }

    // ==========================================
    // 6. VOCABULARY LIST LOGIC & DATE FILTERS
    // ==========================================
    populateAllDateSelectors() {
        const todayStr = this.getLocalDateStr();
        const yesterdayStr = this.getLocalDateStr(Date.now() - 86400000);

        // Group counts by date
        const dateCountMap = new Map();
        this.words.forEach(w => {
            const d = w.dateStr || this.getLocalDateStr(w.createdAt);
            dateCountMap.set(d, (dateCountMap.get(d) || 0) + 1);
        });

        const total = this.words.length;
        const todayCount = dateCountMap.get(todayStr) || 0;
        const yesterdayCount = dateCountMap.get(yesterdayStr) || 0;

        // Distinct dates sorted newest first
        const distinctDates = Array.from(dateCountMap.keys()).sort().reverse();

        // 1. Update this.dateFilter options
        if (this.dateFilter) {
            let html = `
                <option value="all">Barcha kunlar (${total})</option>
                <option value="today">Bugun (${todayCount})</option>
                <option value="yesterday">Kecha (${yesterdayCount})</option>
            `;

            distinctDates.forEach(dateKey => {
                if (dateKey !== todayStr && dateKey !== yesterdayStr) {
                    const info = this.getDateKeyAndLabel(null, dateKey);
                    const cnt = dateCountMap.get(dateKey) || 0;
                    html += `<option value="${dateKey}">${info.label} (${cnt})</option>`;
                }
            });

            html += `<option value="custom">Boshqa sana tanlash...</option>`;
            const currentVal = this.selectedDateFilter || 'all';
            this.dateFilter.innerHTML = html;
            this.dateFilter.value = currentVal;
        }

        // 2. Update Study day selectors: flashcards, quiz, writing, matching, synonymquiz
        const studySelectors = [
            this.flashcardDaySelect,
            this.quizDaySelect,
            this.writingDaySelect,
            this.matchingDaySelect,
            this.synonymQuizDaySelect
        ];

        studySelectors.forEach(sel => {
            if (!sel) return;
            let optionsHTML = '';

            optionsHTML += `<option value="today">Bugun (${todayCount})</option>`;
            if (yesterdayCount > 0) {
                optionsHTML += `<option value="yesterday">Kecha (${yesterdayCount})</option>`;
            }

            distinctDates.forEach(dateKey => {
                if (dateKey !== todayStr && dateKey !== yesterdayStr) {
                    const info = this.getDateKeyAndLabel(null, dateKey);
                    const cnt = dateCountMap.get(dateKey) || 0;
                    optionsHTML += `<option value="${dateKey}">${info.label} (${cnt})</option>`;
                }
            });

            optionsHTML += `<option value="all">Barcha so'zlar (${total})</option>`;
            sel.innerHTML = optionsHTML;
            sel.value = this.activeStudyDate || (todayCount > 0 ? 'today' : 'all');
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
            else {
                const info = this.getDateKeyAndLabel(null, val);
                label = info.label;
            }
            this.activeDateFilterText.textContent = label;
            this.activeDateFilterBadge.classList.remove('hidden');
        }
    }

    getWordsForStudy(dayChoice = this.activeStudyDate) {
        const todayStr = this.getLocalDateStr();
        const yesterdayStr = this.getLocalDateStr(Date.now() - 86400000);

        if (!dayChoice || dayChoice === 'all') {
            return [...this.words];
        } else if (dayChoice === 'today') {
            return this.words.filter(w => (w.dateStr || this.getLocalDateStr(w.createdAt)) === todayStr);
        } else if (dayChoice === 'yesterday') {
            return this.words.filter(w => (w.dateStr || this.getLocalDateStr(w.createdAt)) === yesterdayStr);
        } else {
            return this.words.filter(w => (w.dateStr || this.getLocalDateStr(w.createdAt)) === dayChoice);
        }
    }

    getFilteredWords() {
        const search = this.searchInput.value.toLowerCase().trim();
        const lvl = this.levelFilter.value;
        const sort = this.sortOrder.value;
        const dateChoice = this.selectedDateFilter;
        const todayStr = this.getLocalDateStr();
        const yesterdayStr = this.getLocalDateStr(Date.now() - 86400000);

        let list = this.words.filter(item => {
            // Search
            const matchSearch = !search || 
                item.word.toLowerCase().includes(search) || 
                item.translation.toLowerCase().includes(search) ||
                (item.example && item.example.toLowerCase().includes(search));

            // Level
            let matchLvl = true;
            if (lvl === 'new') matchLvl = item.mastery === 0;
            if (lvl === 'learning') matchLvl = item.mastery === 1;
            if (lvl === 'mastered') matchLvl = item.mastery === 2;

            // Date Filter
            const itemDate = item.dateStr || this.getLocalDateStr(item.createdAt);
            let matchDate = true;
            if (dateChoice === 'today') {
                matchDate = itemDate === todayStr;
            } else if (dateChoice === 'yesterday') {
                matchDate = itemDate === yesterdayStr;
            } else if (dateChoice && dateChoice !== 'all' && dateChoice !== 'custom') {
                matchDate = itemDate === dateChoice;
            }

            return matchSearch && matchLvl && matchDate;
        });

        // Sorting
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
        let masteryPercent = '15%';
        if (item.mastery === 1) {
            levelLabel = "O'rganilmoqda";
            levelClass = 'learning';
            masteryPercent = '55%';
        } else if (item.mastery === 2) {
            levelLabel = 'Yodlandi';
            levelClass = 'mastered';
            masteryPercent = '100%';
        }

        const dateTagText = this.formatCardDate(item);

        return `
            <div class="word-card mastery-${levelClass}" data-id="${item.id}">
                <div class="word-card-top">
                    <div class="word-card-top-left">
                        <button type="button" class="badge level-badge ${levelClass}" data-action="toggle-mastery" data-id="${item.id}" title="Holatni almashtirish uchun bosing (Yangi → O'rganilmoqda → Yodlandi)">
                            <span class="badge-dot"></span>
                            <span>${levelLabel}</span>
                        </button>
                        <span class="card-time-tag" title="Yodlash kuni: ${item.dateStr || ''}">
                            <i class="fa-regular fa-calendar"></i> ${dateTagText}
                        </span>
                    </div>
                    <div class="card-actions-group">
                        <button class="btn-action-icon btn-edit" data-action="edit" data-id="${item.id}" title="Tahrirlash">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="btn-action-icon btn-delete" data-action="delete" data-id="${item.id}" title="O'chirish">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>

                <div class="word-card-body">
                    <div class="word-primary-row">
                        <h3 class="word-title">${this.escapeHTML(item.word)}</h3>
                        <button class="btn-sound-card" data-action="speak" data-word="${this.escapeAttr(item.word)}" title="Talaffuzni tinglash">
                            <i class="fa-solid fa-volume-high"></i>
                        </button>
                    </div>
                    ${item.phonetic ? `<div class="word-phonetic-text">${this.escapeHTML(item.phonetic)}</div>` : ''}
                    <div class="word-translation-text">${this.escapeHTML(item.translation)}</div>
                    ${item.synonyms ? `
                        <div class="word-synonyms-row">
                            <span class="synonyms-label"><i class="fa-solid fa-equals"></i></span>
                            ${item.synonyms.split(',').map(s => s.trim()).filter(Boolean).map(s =>
                                `<span class="synonym-chip">${this.escapeHTML(s)}</span>`
                            ).join('')}
                        </div>
                    ` : ''}
                    ${item.example ? `
                        <div class="word-example-text">
                            "${this.escapeHTML(item.example)}"
                            ${item.exampleTrans ? `<div class="word-example-trans">${this.escapeHTML(item.exampleTrans)}</div>` : ''}
                        </div>
                    ` : ''}
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
        this.displayedCount.textContent = filtered.length;

        if (filtered.length === 0) {
            this.wordsGrid.innerHTML = '';
            this.emptyVocabState.classList.remove('hidden');
            return;
        }

        this.emptyVocabState.classList.add('hidden');

        // Group filtered words by date
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
                        <span class="date-group-count">${group.items.length} ta so'z</span>
                    </div>
                    <div class="date-group-line"></div>
                    <div class="date-group-actions">
                        <button type="button" class="btn-study-day" data-study-date="${group.dateStr}" title="Faqat shu kundagi so'zlarni yodlash">
                            <i class="fa-solid fa-play"></i> Shu kunni yodlash (${group.items.length})
                        </button>
                    </div>
                </div>
                <div class="date-group-grid">
                    ${group.items.map(item => this.renderWordCardHTML(item)).join('')}
                </div>
            </div>
        `).join('');

        // Attach click events for date group study button
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

        // Attach click events via delegation (avoids inline JS apostrophe issues)
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
        this.updateHeaderStats();

        const labels = ["Yangi (0%)", "O'rganilmoqda (50%)", "Yodlandi (100%)"];
        if (item.mastery === 2) {
            this.playChimeSuccess();
        } else {
            this.playPopSound(item.mastery === 1 ? 520 : 380);
        }
        this.showToast(`"${item.word}" holati: ${labels[item.mastery]}`, "info");
    }

    // ==========================================
    // 7. ADD & EDIT WORD MODAL HANDLERS
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
            id: 'w-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
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

        const quickBtn = document.getElementById('btnQuickAdd');
        if (quickBtn) quickBtn.classList.add('is-loading');

        setTimeout(() => {
            this.words.unshift(newWordObj);
            this.saveWords();
            this.renderVocabularyGrid();
            this.showToast(`"${word}" muvaffaqiyatli qo'shildi!`, "success");

            if (quickBtn) quickBtn.classList.remove('is-loading');
            if (this.quickWordInput) this.quickWordInput.value = '';
            if (this.quickTranslationInput) this.quickTranslationInput.value = '';
            if (this.quickWordInput) this.quickWordInput.focus();
        }, 220);
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
                    <button class="btn btn-primary pack-card-btn" data-pack-id="${pack.id}">
                        <i class="fa-solid fa-plus-circle"></i> ${pack.words.length} ta so'zni yuklash
                    </button>
                </div>
            `;
        }).join('');

        this.packsGrid.querySelectorAll('.pack-card-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const packId = btn.dataset.packId;
                this.importStarterPack(packId);
            });
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
                    id: 'w-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5) + Math.random().toString(36).substr(2, 3),
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
        if (this.extraDetailsAccordion) {
            this.extraDetailsAccordion.open = false;
        }
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
        if (this.inputStudyDate) {
            this.inputStudyDate.value = item.dateStr || this.getLocalDateStr(item.createdAt);
        }
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

        const saveBtn = document.getElementById('btnSaveWord');
        if (saveBtn) saveBtn.classList.add('is-loading');

        setTimeout(() => {
            if (editId) {
                // Update existing
                const index = this.words.findIndex(w => w.id === editId);
                if (index !== -1) {
                    this.words[index] = {
                        ...this.words[index],
                        word,
                        translation,
                        phonetic,
                        example,
                        exampleTrans,
                        synonyms,
                        dateStr: chosenDate
                    };
                    this.showToast("So'z muvaffaqiyatli yangilandi!", "success");
                }
            } else {
                // Add new
                const newWordObj = {
                    id: 'w-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
                    word,
                    translation,
                    phonetic,
                    example,
                    exampleTrans,
                    synonyms,
                    mastery: 0,
                    reviewCount: 0,
                    dateStr: chosenDate,
                    createdAt: Date.now()
                };
                this.words.unshift(newWordObj);
                this.showToast(`"${word}" lug'atga qo'shildi!`, "success");
            }

            this.saveWords();
            this.renderVocabularyGrid();
            if (saveBtn) saveBtn.classList.remove('is-loading');
            this.closeWordModal();
        }, 250);
    }

    deleteWord(id) {
        const item = this.words.find(w => w.id === id);
        if (!item) return;

        if (confirm(`Rostdan ham "${item.word}" so'zini o'chirmoqchimisiz?`)) {
            this.words = this.words.filter(w => w.id !== id);
            this.saveWords();
            this.renderVocabularyGrid();
            this.showToast("So'z o'chirildi", "info");
        }
    }

    // ==========================================
    // 8. BULK IMPORT LOGIC
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

            // 1. Strip leading numbering or bullet points: e.g. "1. ", "1) ", "• ", "- "
            line = line.replace(/^(\d+[\.\)\-\:\/\]]|\*|\•|\-)\s+/, '').trim();
            if (!line) continue;

            // 2. Strip markdown bolding: e.g. **word** -> word
            line = line.replace(/\*\*(.*?)\*\*/g, '$1');

            // 3. Delimiter priority (tab first for Excel/Sheets, spaced separators, em-dashes, then single chars)
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
            else if (line.includes(' :')) delimiter = ' :';
            else if (line.includes(': ')) delimiter = ': ';
            else if (line.includes(':')) delimiter = ':';
            else if (line.includes(' =')) delimiter = ' =';
            else if (line.includes('= ')) delimiter = '= ';
            else if (line.includes('=')) delimiter = '=';
            else if (line.includes(';')) delimiter = ';';
            else if (line.includes(' -')) delimiter = ' -';
            else if (line.includes('- ')) delimiter = '- ';
            else if (line.includes('-')) delimiter = '-';

            if (delimiter) {
                const parts = line.split(delimiter)
                    .map(p => p.trim().replace(/^["'`]|["'`]$/g, ''))
                    .filter(p => p.length > 0);

                const word = parts[0];
                const translation = parts[1] || '';
                // 3rd part is synonyms (optional)
                const synonyms = parts.slice(2).join(', ').trim();

                if (word && translation) {
                    parsed.push({ word, translation, synonyms });
                }
            }
        }
        return parsed;
    }

    updateBulkParsedCount() {
        const parsed = this.parseBulkLines(this.bulkTextArea.value);
        this.bulkParsedCount.textContent = parsed.length;
    }

    handleSaveBulkWords() {
        const parsed = this.parseBulkLines(this.bulkTextArea.value);

        if (parsed.length === 0) {
            this.showToast("Hech qanday to'g'ri qator topilmadi! Namuna: so'z - tarjima - sinonim", "error");
            return;
        }

        const chosenDate = (this.bulkStudyDate && this.bulkStudyDate.value) ? this.bulkStudyDate.value : this.getLocalDateStr();
        const bulkBtn = document.getElementById('btnSaveBulkWords');
        if (bulkBtn) bulkBtn.classList.add('is-loading');

        setTimeout(() => {
            parsed.forEach((item, idx) => {
                this.words.unshift({
                    id: 'w-' + (Date.now() + idx) + '-' + Math.random().toString(36).substr(2, 5),
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
            if (bulkBtn) bulkBtn.classList.remove('is-loading');
            this.closeBulkModal();
            this.showToast(`${parsed.length} ta yangi so'z muvaffaqiyatli kiritildi!`, "success");
            this.fireConfetti();
        }, 280);
    }

    // ==========================================
    // 9. EXPORT & IMPORT BACKUP
    // ==========================================
    exportJSON() {
        const btn = document.getElementById('btnExportJSON');
        if (btn) btn.classList.add('is-loading');

        setTimeout(() => {
            const dataStr = JSON.stringify(this.words, null, 2);
            const blob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `EasyLearn_Lugat_${new Date().toISOString().slice(0,10)}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            if (btn) btn.classList.remove('is-loading');
            this.showToast("JSON fayl yuklab olindi!", "success");
        }, 220);
    }

    exportCSV() {
        const btn = document.getElementById('btnExportCSV');
        if (btn) btn.classList.add('is-loading');

        setTimeout(() => {
            let csvContent = "Word,Translation,StudyDate,Phonetic,Example,ExampleTranslation,MasteryLevel\n";
            this.words.forEach(w => {
                const row = [
                    `"${(w.word || '').replace(/"/g, '""')}"`,
                    `"${(w.translation || '').replace(/"/g, '""')}"`,
                    `"${(w.dateStr || this.getLocalDateStr(w.createdAt)).replace(/"/g, '""')}"`,
                    `"${(w.phonetic || '').replace(/"/g, '""')}"`,
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
            a.download = `EasyLearn_Lugat_${new Date().toISOString().slice(0,10)}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            if (btn) btn.classList.remove('is-loading');
            this.showToast("CSV fayl yuklab olindi!", "success");
        }, 220);
    }

    handleImportFile(e) {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const parsed = JSON.parse(event.target.result);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    // Merge or replace
                    const existingIds = new Set(this.words.map(w => w.word.toLowerCase()));
                    let addedCount = 0;

                    parsed.forEach(item => {
                        if (item.word && item.translation) {
                            if (!existingIds.has(item.word.toLowerCase())) {
                                const createdAt = item.createdAt || Date.now();
                                this.words.push({
                                    id: item.id || 'w-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
                                    word: item.word,
                                    translation: item.translation,
                                    phonetic: item.phonetic || '',
                                    example: item.example || '',
                                    exampleTrans: item.exampleTrans || '',
                                    synonyms: item.synonyms || '',
                                    mastery: typeof item.mastery === 'number' ? item.mastery : 0,
                                    reviewCount: item.reviewCount || 0,
                                    dateStr: item.dateStr || this.getLocalDateStr(createdAt),
                                    createdAt: createdAt
                                });
                                addedCount++;
                            }
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
                console.error(err);
                this.showToast("JSON faylni o'qishda xatolik yuz berdi", "error");
            }
            this.importFileInput.value = '';
        };
        reader.readAsText(file);
    }

    // ==========================================
    // 10. FLASHCARDS 3D FLIP MODE
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
            this.flashcardElement.classList.remove('flipped');
            this.flashcardElement.classList.remove('is-flipped');
            return;
        }

        if (this.currentCardIndex >= total) this.currentCardIndex = 0;
        if (this.currentCardIndex < 0) this.currentCardIndex = total - 1;

        const current = this.flashcardList[this.currentCardIndex];
        this.currentCardIndexEl.textContent = this.currentCardIndex + 1;
        
        let dotsHTML = '';
        const maxDots = Math.min(total, 40);
        for(let i = 0; i < maxDots; i++) {
            let dotClass = 'progress-dot';
            if (i < this.currentCardIndex) dotClass += ' passed';
            if (i === this.currentCardIndex) dotClass += ' active';
            dotsHTML += `<div class="${dotClass}"></div>`;
        }
        this.flashcardProgressFill.innerHTML = dotsHTML;

        // Card side direction logic
        const isEnglishFront = this.flashcardStartSide === 'en';

        // Front Face
        this.cardFrontLangLabel.textContent = isEnglishFront ? "INGLIZCHA SO'Z" : "TARJIMASI (O'ZBEKCHA)";
        this.cardFrontWord.textContent = isEnglishFront ? current.word : current.translation;
        this.cardFrontPhonetic.textContent = isEnglishFront ? (current.phonetic || '') : '';
        this.cardFrontExample.textContent = isEnglishFront ? (current.example ? `"${current.example}"` : '') : '';

        // Synonyms on FRONT (next to word, shown only in English-front mode)
        let cardFrontSynEl = document.getElementById('cardFrontSynonyms');
        if (cardFrontSynEl) {
            if (isEnglishFront && current.synonyms && current.synonyms.trim()) {
                const synList = current.synonyms.split(',').map(s => s.trim()).filter(Boolean);
                cardFrontSynEl.innerHTML = `<span class="syn-label"><i class="fa-solid fa-equals"></i> Sinonim:</span> ${synList.map(s => `<span class="synonym-chip small">${this.escapeHTML(s)}</span>`).join(' ')}`;
                cardFrontSynEl.style.display = 'flex';
            } else {
                cardFrontSynEl.style.display = 'none';
            }
        }

        // Back Face
        this.cardBackLangLabel.textContent = isEnglishFront ? "TARJIMASI (O'ZBEKCHA)" : "INGLIZCHA SO'Z";
        this.cardBackTranslation.textContent = isEnglishFront ? current.translation : current.word;
        this.cardBackExampleTrans.textContent = isEnglishFront ? (current.exampleTrans || current.example || '') : (current.example || '');

        // Hide synonyms row on back face (it's now on the front)
        let cardBackSynEl = document.getElementById('cardBackSynonyms');
        if (cardBackSynEl) cardBackSynEl.style.display = 'none';

        // Level badge on back
        let lvlText = "Yangi";
        let lvlClass = "new";
        if (current.mastery === 1) { lvlText = "O'rganilmoqda"; lvlClass = "learning"; }
        if (current.mastery === 2) { lvlText = "Yodlandi"; lvlClass = "mastered"; }
        this.cardBackLevel.textContent = lvlText;
        this.cardBackLevel.className = `badge level-badge ${lvlClass}`;

        // Reset flip state
        this.isCardFlipped = false;
        this.flashcardElement.classList.remove('flipped');
        this.flashcardElement.classList.remove('is-flipped');
    }

    rateFlashcard(level) {
        if (this.flashcardList.length === 0) return;
        const current = this.flashcardList[this.currentCardIndex];

        // Update word mastery in main list
        const mainWord = this.words.find(w => w.id === current.id);
        if (mainWord) {
            mainWord.mastery = level;
            mainWord.reviewCount = (mainWord.reviewCount || 0) + 1;
            mainWord.lastReviewed = Date.now();
            current.mastery = level;
            this.saveWords();
        }

        // Record daily study activity & streak
        this.recordActivity();

        if (level === 0) {
            this.playTone(300, 'sawtooth', 0.1);
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

        // Advance to next card
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

        let startX = 0;
        let startY = 0;
        let currentX = 0;
        let currentY = 0;
        let isDragging = false;
        let isHorizontalSwipe = false;
        const card = this.flashcardElement;

        card.addEventListener('touchstart', (e) => {
            if (!this.flashcardList || this.flashcardList.length === 0) return;
            // Ignore if touched directly on sound button
            if (e.target.closest('#btnFrontAudio') || e.target.closest('button')) return;

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

            // If mostly horizontal movement
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 12) {
                isHorizontalSwipe = true;
                const rotate = (diffX / 28).toFixed(2);
                card.style.transition = 'none';
                card.style.transform = `${this.isCardFlipped ? 'rotateY(180deg) ' : ''}translateX(${diffX * 0.45}px) rotate(${rotate}deg)`;

                if (diffX < -35) {
                    card.classList.add('swiping-left');
                    card.classList.remove('swiping-right');
                } else if (diffX > 35) {
                    card.classList.add('swiping-right');
                    card.classList.remove('swiping-left');
                } else {
                    card.classList.remove('swiping-left', 'swiping-right');
                }
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

            // If it was a swipe (more than 50px)
            if (isHorizontalSwipe && Math.abs(diffX) > 50) {
                if (diffX < -50) {
                    // Swiped Left -> Next Card
                    this.playPopSound(480);
                    this.nextFlashcard();
                } else if (diffX > 50) {
                    // Swiped Right -> Previous Card
                    this.playPopSound(420);
                    this.prevFlashcard();
                }
            } else if (Math.abs(diffX) < 15 && Math.abs(diffY) < 15) {
                // If it was a clean tap (not dragged), flip the card
                this.flipFlashcard();
            }
        };

        card.addEventListener('touchend', endSwipe, { passive: true });
        card.addEventListener('touchcancel', endSwipe, { passive: true });
    }

    // ==========================================
    // 11. QUIZ (4 OPTION MULTIPLE CHOICE)
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
            if (subEl) subEl.textContent = "Iltimos, yuqoridagi 'Kun' menyusidan boshqa kunni tanlang yoki so'z qo'shing.";
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
        if (streakContainer) {
            streakContainer.classList.toggle('streak-active', this.quizStreak > 0);
        }

        const current = this.quizQuestions[this.currentQuizIndex];
        this.quizPromptWord.textContent = current.word;
        this.quizPromptHint.textContent = current.example ? `Misol: "${current.example}"` : '';

        // Generate 4 options (1 correct, 3 wrong from entire vocabulary)
        const correctTrans = current.translation;
        const otherWords = this.words.filter(w => w.word !== current.word);
        this.shuffleArray(otherWords);

        const options = [correctTrans];
        for (let w of otherWords) {
            if (options.length >= 4) break;
            if (!options.includes(w.translation)) {
                options.push(w.translation);
            }
        }
        // If not enough unique words, pad with dummy
        while (options.length < Math.min(4, this.words.length)) {
            options.push(`Variant ${options.length + 1}`);
        }

        this.shuffleArray(options);

        // Render option buttons using data-attribute (safe - no inline JS/apostrophe bugs!)
        this.quizOptionsGrid.innerHTML = options.map((opt, idx) => `
            <button class="btn-quiz-option" data-option="${this.escapeAttr(opt)}">
                <span class="quiz-opt-letter">${String.fromCharCode(65 + idx)}</span>
                <span class="quiz-opt-text">${this.escapeHTML(opt)}</span>
            </button>
        `).join('');

        // Attach click events safely via JS (not inline onclick)
        this.quizOptionsGrid.querySelectorAll('.btn-quiz-option').forEach(btn => {
            btn.addEventListener('click', () => {
                this.handleQuizOptionClick(btn, btn.dataset.option);
            });
        });
    }

    handleQuizOptionClick(buttonEl, selectedOption) {
        if (this.quizSelectedAnswered) return;
        this.quizSelectedAnswered = true;

        const current = this.quizQuestions[this.currentQuizIndex];
        const isCorrect = selectedOption === current.translation;

        const optionButtons = this.quizOptionsGrid.querySelectorAll('.btn-quiz-option');
        optionButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.dataset.option === current.translation) {
                btn.classList.add('correct');
            }
        });

        if (isCorrect) {
            buttonEl.classList.add('correct');
            this.quizStreak++;
            this.quizScore += 10 + (this.quizStreak * 2);
            this.quizCorrectCount++;

            // Update mastery in database
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

            this.playTone(250, 'sawtooth', 0.25);
            this.showQuizFeedback(false, `Noto'g'ri. To'g'ri javob: "${current.translation}"`);
        }

        this.quizCurrentScore.textContent = this.quizScore;
        this.quizCurrentStreak.textContent = this.quizStreak;
        const streakContainer = this.quizCurrentStreak.closest('.quiz-streak-pill');
        if (streakContainer) {
            streakContainer.classList.toggle('streak-active', this.quizStreak > 0);
        }

        // Show Next button and scroll it into view
        this.btnNextQuizQuestion.classList.remove('hidden');
        setTimeout(() => {
            this.btnNextQuizQuestion.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 200);
    }

    showQuizFeedback(isSuccess, message) {
        this.quizFeedbackBanner.className = `quiz-feedback-banner ${isSuccess ? 'success' : 'wrong'}`;
        this.feedbackIcon.innerHTML = isSuccess ? '<i class="fa-solid fa-circle-check"></i>' : '<i class="fa-solid fa-circle-xmark"></i>';
        this.feedbackText.textContent = message;
        this.quizFeedbackBanner.classList.remove('hidden');
    }

    nextQuizQuestion() {
        this.currentQuizIndex++;
        if (this.currentQuizIndex >= this.quizQuestions.length) {
            this.showQuizResults();
        } else {
            this.renderCurrentQuizQuestion();
        }
    }

    showQuizResults() {
        this.quizContainer.classList.add('hidden');
        this.quizResultsCard.classList.remove('hidden');

        const total = this.quizQuestions.length;
        const accuracy = Math.round((this.quizCorrectCount / total) * 100) || 0;

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
    // 12. WRITING / SPELLING PRACTICE
    // ==========================================
    initWriting() {
        let pool = this.getWordsForStudy(this.activeStudyDate);

        if (pool.length === 0) {
            this.writingList = [];
            this.writingCounterText.textContent = '0 / 0';
            this.writingProgressFill.style.width = '0%';
            this.writingTargetTranslation.textContent = "Bu kunda so'zlar yo'q";
            this.writingTargetExample.textContent = "Iltimos, yuqoridagi 'Kun' menyusidan boshqa kunni tanlang yoki so'z qo'shing";
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
        this.writingInput.className = '';
        this.writingFeedback.classList.add('hidden');
        this.revealedHintCount = 0;

        this.renderWritingLetterBlanks();
        setTimeout(() => this.writingInput.focus(), 100);
    }

    renderWritingLetterBlanks() {
        const current = this.writingList[this.currentWritingIndex];
        if (!current) return;

        const targetWord = current.word;
        let html = '';

        for (let i = 0; i < targetWord.length; i++) {
            const char = targetWord[i];
            if (char === ' ' || char === '-' || char === '\'') {
                html += `<div class="letter-box" style="border-bottom:none; background:transparent;">${char}</div>`;
            } else if (i < this.revealedHintCount) {
                html += `<div class="letter-box" style="color:var(--primary); font-weight:800;">${char}</div>`;
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
            // Correct
            this.playChimeSuccess();
            this.recordActivity();
            this.writingFeedback.className = "writing-feedback success";
            this.writingFeedback.innerHTML = `<i class="fa-solid fa-check-circle"></i> Barakalla! To'g'ri: <strong>${current.word}</strong>`;
            this.writingFeedback.classList.remove('hidden');

            // Upgrade mastery
            const main = this.words.find(w => w.id === current.id);
            if (main) {
                main.mastery = 2;
                this.saveWords();
            }

            setTimeout(() => {
                this.currentWritingIndex++;
                this.renderCurrentWritingWord();
            }, 1200);
        } else {
            // Wrong
            this.playTone(200, 'sawtooth', 0.2);
            this.writingFeedback.className = "writing-feedback wrong";
            this.writingFeedback.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Noto'g'ri yozildi. Qayta urinib ko'ring yoki maslahat oling!`;
            this.writingFeedback.classList.remove('hidden');
        }
    }

    skipWritingWord() {
        const current = this.writingList[this.currentWritingIndex];
        if (current) {
            this.showToast(`Javob: "${current.word}" edi`, "info");
        }
        this.currentWritingIndex++;
        this.renderCurrentWritingWord();
    }

    // ==========================================
    // 13. MATCHING GAME (JUFTLIKNI TOP)
    // ==========================================
    initMatchingGame() {
        if (this.matchTimerInterval) {
            clearInterval(this.matchTimerInterval);
        }

        this.matchCompleteCard.classList.add('hidden');
        this.matchGrid.classList.remove('hidden');

        // Select words from current study day
        let pool = this.getWordsForStudy(this.activeStudyDate);

        if (pool.length < 2) {
            this.matchGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: var(--bg-surface); border: 1px dashed var(--border-medium); border-radius: var(--radius-lg);">
                    <div style="font-size: 2.2rem; margin-bottom: 10px; color: var(--primary);"><i class="fa-solid fa-puzzle-piece"></i></div>
                    <h3 style="font-size: 1.1rem; margin-bottom: 6px;">Bu kunda yetarli so'zlar yo'q</h3>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 16px;">Juftlik o'yini uchun kamida 2 ta so'z kerak. Tanlangan kunda: ${pool.length} ta so'z mavjud.</p>
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

        // Create 12 tiles: 6 words, 6 translations
        const tiles = [];
        selectedWords.forEach(item => {
            tiles.push({ id: item.id, text: item.word, type: 'word' });
            tiles.push({ id: item.id, text: item.translation, type: 'trans' });
        });

        this.shuffleArray(tiles);
        this.matchCards = tiles;

        this.matchGrid.innerHTML = tiles.map((tile, idx) => `
            <div class="match-tile" data-index="${idx}" data-id="${tile.id}" data-type="${tile.type}" onclick="app.handleTileClick(this, ${idx})">
                ${this.escapeHTML(tile.text)}
            </div>
        `).join('');

        // Start timer
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
            // First tile selected
            this.selectedTile = { element: tileEl, data: this.matchCards[index] };
            tileEl.classList.add('selected');
        } else {
            // Second tile selected
            const first = this.selectedTile;
            const second = { element: tileEl, data: this.matchCards[index] };

            if (first.element === second.element) return;

            // Check match: Same ID and different types (one is word, other is translation)
            if (first.data.id === second.data.id && first.data.type !== second.data.type) {
                // Match!
                first.element.classList.remove('selected');
                first.element.classList.add('matched');
                second.element.classList.add('matched');

                this.playChimeSuccess();
                this.matchedPairsCount++;
                this.matchPairsLeft.textContent = this.totalMatchPairs - this.matchedPairsCount;

                this.selectedTile = null;

                if (this.matchedPairsCount === this.totalMatchPairs) {
                    this.completeMatchGame();
                }
            } else {
                // Wrong Match
                second.element.classList.add('selected');
                first.element.classList.add('wrong');
                second.element.classList.add('wrong');
                this.playTone(200, 'sawtooth', 0.2);

                setTimeout(() => {
                    first.element.classList.remove('selected', 'wrong');
                    second.element.classList.remove('selected', 'wrong');
                    this.selectedTile = null;
                }, 600);
            }
        }
    }

    completeMatchGame() {
        clearInterval(this.matchTimerInterval);
        this.recordActivity();
        const mins = String(Math.floor(this.matchSecondsElapsed / 60)).padStart(2, '0');
        const secs = String(this.matchSecondsElapsed % 60).padStart(2, '0');
        this.finalMatchTime.textContent = `${mins}:${secs}`;

        setTimeout(() => {
            this.matchGrid.classList.add('hidden');
            this.matchCompleteCard.classList.remove('hidden');
            this.fireConfetti();
        }, 500);
    }

    // ==========================================
    // 14b. SYNONYM QUIZ
    // ==========================================
    initSynonymQuiz() {
        // Only use words that have synonyms
        let pool = this.getWordsForStudy(this.activeStudyDate).filter(w => w.synonyms && w.synonyms.trim());

        if (pool.length === 0) {
            if (this.synonymQuizContainer) this.synonymQuizContainer.classList.add('hidden');
            if (this.synonymQuizResultsCard) this.synonymQuizResultsCard.classList.remove('hidden');
            const iconEl = document.getElementById('synonymQuizTrophyIcon');
            const titleEl = document.getElementById('synonymQuizResultTitle');
            const subEl = document.getElementById('synonymQuizResultSubtitle');
            if (iconEl) iconEl.innerHTML = '<i class="fa-solid fa-circle-info text-primary"></i>';
            if (titleEl) titleEl.textContent = "Sinonimli so'zlar topilmadi";
            if (subEl) subEl.textContent = "Iltimos, so'zlaringizga sinonim qo'shing. So'zni tahrirlash orqali 'Qo'shimcha ma'lumotlar' bo'limiga sinonim kiriting.";
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

        // Get correct synonym (first one)
        const synList = current.synonyms.split(',').map(s => s.trim()).filter(Boolean);
        const correctSyn = synList[0];

        // Build wrong options from other words' synonyms or words themselves
        const allSynOptions = [];
        this.words.forEach(w => {
            if (w.id !== current.id && w.synonyms) {
                w.synonyms.split(',').forEach(s => {
                    const st = s.trim();
                    if (st && !allSynOptions.includes(st)) allSynOptions.push(st);
                });
            }
        });
        // Also add translations and words as fallback distractors
        this.words.forEach(w => {
            if (w.id !== current.id) {
                if (!allSynOptions.includes(w.word)) allSynOptions.push(w.word);
            }
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
                <button class="btn-quiz-option" data-option="${this.escapeAttr(opt)}">
                    <span class="quiz-opt-letter">${String.fromCharCode(65 + idx)}</span>
                    <span class="quiz-opt-text">${this.escapeHTML(opt)}</span>
                </button>
            `).join('');

            this.synonymQuizOptionsGrid.querySelectorAll('.btn-quiz-option').forEach(btn => {
                btn.addEventListener('click', () => {
                    this.handleSynonymOptionClick(btn, btn.dataset.option, correctSyn);
                });
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
            if (btn.dataset.option.toLowerCase() === correctSyn.toLowerCase()) {
                btn.classList.add('correct');
            }
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
            this.playTone(250, 'sawtooth', 0.25);
            this.showSynonymFeedback(false, `Noto'g'ri. To'g'ri sinonim: "${correctSyn}"`);
        }

        if (this.synonymQuizCurrentScore) this.synonymQuizCurrentScore.textContent = this.synonymQuizScore;
        if (this.synonymQuizCurrentStreak) this.synonymQuizCurrentStreak.textContent = this.synonymQuizStreak;
        if (this.btnNextSynonymQuestion) {
            this.btnNextSynonymQuestion.classList.remove('hidden');
            setTimeout(() => {
                this.btnNextSynonymQuestion.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 200);
        }
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
        if (this.currentSynonymQuizIndex >= this.synonymQuizQuestions.length) {
            this.showSynonymQuizResults();
        } else {
            this.renderSynonymQuestion();
        }
    }

    showSynonymQuizResults() {
        if (this.synonymQuizContainer) this.synonymQuizContainer.classList.add('hidden');
        if (this.synonymQuizResultsCard) this.synonymQuizResultsCard.classList.remove('hidden');

        const total = this.synonymQuizQuestions.length;
        const accuracy = Math.round((this.synonymQuizCorrectCount / total) * 100) || 0;

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
    // 14. STATS VIEW
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

        // Retention & mastery rate calculation
        const masteryRate = total > 0 ? Math.round(((mastered * 1 + learning * 0.5) / total) * 100) : 0;
        const rateBadge = document.getElementById('statsMasteryRateBadge');
        if (rateBadge) rateBadge.textContent = `${masteryRate}%`;

        // Segmented bar
        const segMastered = document.getElementById('segMastered');
        const segLearning = document.getElementById('segLearning');
        const segNew = document.getElementById('segNew');
        if (segMastered && segLearning && segNew) {
            const mPct = total > 0 ? ((mastered / total) * 100).toFixed(1) : 0;
            const lPct = total > 0 ? ((learning / total) * 100).toFixed(1) : 0;
            const nPct = total > 0 ? ((newCount / total) * 100).toFixed(1) : 0;
            segMastered.style.width = `${mPct}%`;
            segLearning.style.width = `${lPct}%`;
            segNew.style.width = `${nPct}%`;
        }

        // Legend values
        const legMastered = document.getElementById('legendMasteredCount');
        const legLearning = document.getElementById('legendLearningCount');
        const legNew = document.getElementById('legendNewCount');
        if (legMastered) legMastered.textContent = mastered;
        if (legLearning) legLearning.textContent = learning;
        if (legNew) legNew.textContent = newCount;

        // Daily activity and streak
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
                goalTip.style.color = "var(--primary)";
            } else {
                goalTip.textContent = `Bugungi maqsad sari oldinga! Yana ${goalTarget - learnedToday} ta so'zni takrorlang.`;
                goalTip.style.color = "";
            }
        }
    }

    // ==========================================
    // 15. AUDIO SYNTHESIS & SOUND EFFECTS
    // ==========================================
    speak(text, btnEl = null) {
        if (!('speechSynthesis' in window)) {
            this.showToast("Brauzeringizda ovozli eshitish funksiyasi mavjud emas", "error");
            return;
        }

        window.speechSynthesis.cancel(); // cancel previous

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.9; // clear natural speech rate

        // Try to pick natural voice if available
        const voices = window.speechSynthesis.getVoices();
        const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha')));
        if (enVoice) utterance.voice = enVoice;

        if (btnEl) {
            btnEl.classList.add('is-speaking');
            utterance.onend = () => btnEl.classList.remove('is-speaking');
            utterance.onerror = () => btnEl.classList.remove('is-speaking');
        }

        window.speechSynthesis.speak(utterance);
    }

    getAudioContext() {
        if (!this.audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (AudioContextClass) {
                this.audioCtx = new AudioContextClass();
            }
        }
        if (this.audioCtx && this.audioCtx.state === 'suspended') {
            this.audioCtx.resume();
        }
        return this.audioCtx;
    }

    playTone(freq, type = 'sine', duration = 0.1) {
        try {
            const ctx = this.getAudioContext();
            if (!ctx) return;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = type;
            osc.frequency.setValueAtTime(freq, ctx.currentTime);

            gain.gain.setValueAtTime(0.12, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + duration);
        } catch (e) {}
    }

    playPopSound(freq = 440) {
        this.playTone(freq, 'sine', 0.08);
    }

    playChimeSuccess() {
        try {
            const ctx = this.getAudioContext();
            if (!ctx) return;

            [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
                setTimeout(() => {
                    this.playTone(freq, 'triangle', 0.18);
                }, i * 70);
            });
        } catch (e) {}
    }

    // ==========================================
    // 16. CONFETTI EFFECT
    // ==========================================
    fireConfetti() {
        const canvas = this.confettiCanvas;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const colors = ['#3b82f6', '#60a5fa', '#2563eb', '#f59e0b', '#38bdf8', '#0ea5e9'];

        for (let i = 0; i < 90; i++) {
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
                p.vy += 0.35; // gravity
                p.rotation += p.rotSpeed;
                p.opacity -= 0.012;

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

            if (activeCount > 0) {
                animationFrame = requestAnimationFrame(render);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                cancelAnimationFrame(animationFrame);
            }
        };

        render();
    }

    launchConfetti() {
        this.fireConfetti();
    }

    // ==========================================
    // 17. TOAST NOTIFICATIONS & UTILS
    // ==========================================
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        
        let icon = 'fa-solid fa-circle-info text-primary';
        if (type === 'success') icon = 'fa-solid fa-circle-check text-success';
        if (type === 'error') icon = 'fa-solid fa-triangle-exclamation text-danger';

        toast.innerHTML = `<i class="${icon}"></i> <span>${this.escapeHTML(message)}</span>`;
        this.toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(50px)';
            setTimeout(() => toast.remove(), 300);
        }, 3200);
    }

    handleKeydown(e) {
        // Tutorial keyboard navigation
        if (this.tutorialModal && !this.tutorialModal.classList.contains('hidden')) {
            if (e.key === 'Escape') {
                e.preventDefault();
                this.closeTutorialModal();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                this.prevTutorialSlide();
            } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
                e.preventDefault();
                this.nextTutorialSlide();
            }
            return;
        }

        // Only trigger when not typing in an input or modal is not open
        const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
        const isInputting = activeTag === 'input' || activeTag === 'textarea';
        const isModalOpen = document.querySelector('.modal-backdrop:not(.hidden)') !== null;

        if (isInputting || isModalOpen) return;

        // Flashcards view shortcuts
        if (this.currentView === 'flashcards') {
            if (e.code === 'Space' || e.key === ' ' || e.keyCode === 32) {
                e.preventDefault();
                if (document.activeElement && document.activeElement.blur) {
                    document.activeElement.blur();
                }
                this.flipFlashcard();
            } else if (e.code === 'ArrowLeft') {
                this.prevFlashcard();
            } else if (e.code === 'ArrowRight') {
                this.nextFlashcard();
            } else if (e.key === '1') {
                this.rateFlashcard(0);
            } else if (e.key === '2') {
                this.rateFlashcard(1);
            } else if (e.key === '3') {
                this.rateFlashcard(2);
            } else if (e.key.toLowerCase() === 's') {
                const current = this.flashcardList[this.currentCardIndex];
                if (current) this.speak(current.word, this.btnFrontAudio);
            }
        }

        // Quiz view shortcuts
        else if (this.currentView === 'quiz') {
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
        }

        // Synonym Quiz shortcuts
        else if (this.currentView === 'synonymquiz') {
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

    // For HTML attribute values (data-*) — keeps apostrophes but escapes quotes
    escapeAttr(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // ==========================================
    // 19. ONBOARDING & EXPLANATORY ANIMATIONS
    // ==========================================
    checkOnboarding() {
        const hasSeen = localStorage.getItem(this.TUTORIAL_KEY);
        // Automatically open animated tutorial for new users
        if (!hasSeen) {
            setTimeout(() => {
                this.openTutorialModal(0);
            }, 600);
        }
    }

    openTutorialModal(slideIndex = 0) {
        if (!this.tutorialModal) return;
        this.currentTutorialSlide = Math.max(0, Math.min(slideIndex, this.totalTutorialSlides - 1));
        this.updateTutorialSlide();
        this.tutorialModal.classList.remove('hidden');
        this.playPopSound(520);
    }

    closeTutorialModal() {
        if (!this.tutorialModal) return;
        this.tutorialModal.classList.add('hidden');
    }

    skipTutorial() {
        localStorage.setItem(this.TUTORIAL_KEY, 'true');
        this.closeTutorialModal();
        if (this.words.length === 0) {
            this.activateSpotlightBeacon();
        }
    }

    finishTutorial() {
        localStorage.setItem(this.TUTORIAL_KEY, 'true');
        this.closeTutorialModal();
        if (this.words.length === 0) {
            this.activateSpotlightBeacon();
        }
    }

    goToTutorialSlide(idx) {
        if (idx < 0 || idx >= this.totalTutorialSlides) return;
        this.currentTutorialSlide = idx;
        this.updateTutorialSlide();
        this.playPopSound(420 + idx * 45);
    }

    prevTutorialSlide() {
        if (this.currentTutorialSlide > 0) {
            this.goToTutorialSlide(this.currentTutorialSlide - 1);
        }
    }

    nextTutorialSlide() {
        if (this.currentTutorialSlide < this.totalTutorialSlides - 1) {
            this.goToTutorialSlide(this.currentTutorialSlide + 1);
        } else {
            this.finishTutorial();
        }
    }

    updateTutorialSlide() {
        if (!this.tutorialSlides || this.tutorialSlides.length === 0) return;

        this.tutorialSlides.forEach((slide, idx) => {
            if (idx === this.currentTutorialSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        if (this.tutorialDots) {
            this.tutorialDots.forEach((dot, idx) => {
                if (idx === this.currentTutorialSlide) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        if (this.tourStagePill) {
            this.tourStagePill.innerHTML = `<i class="fa-solid fa-compass"></i> ${this.currentTutorialSlide + 1} / ${this.totalTutorialSlides}`;
        }

        const pct = Math.round(((this.currentTutorialSlide + 1) / this.totalTutorialSlides) * 100);
        if (this.tutorialProgressFill) {
            this.tutorialProgressFill.style.width = `${pct}%`;
        }

        if (this.tutorialStepCounter) {
            this.tutorialStepCounter.textContent = `${this.currentTutorialSlide + 1} / ${this.totalTutorialSlides}`;
        }

        if (this.btnTutorialPrev) {
            this.btnTutorialPrev.disabled = this.currentTutorialSlide === 0;
        }

        if (this.btnTutorialNextText && this.btnTutorialNextIcon) {
            if (this.currentTutorialSlide === this.totalTutorialSlides - 1) {
                this.btnTutorialNextText.textContent = "Boshlash";
                this.btnTutorialNextIcon.className = "fa-solid fa-circle-check";
                // Trigger joyful chime and confetti on reaching final slide!
                this.playChimeSuccess();
                this.fireConfetti();
            } else {
                this.btnTutorialNextText.textContent = "Keyingisi";
                this.btnTutorialNextIcon.className = "fa-solid fa-arrow-right";
            }
        }
    }

    handleTutorialLoadA1() {
        localStorage.setItem(this.TUTORIAL_KEY, 'true');
        this.closeTutorialModal();
        this.importStarterPack('pack_a1');
        this.switchView('vocabulary');
        this.showToast("Tabriklaymiz! A1 to'plami muvaffaqiyatli yuklandi. O'rganishni boshlashingiz mumkin!", "success");
    }

    handleTutorialStartFresh() {
        localStorage.setItem(this.TUTORIAL_KEY, 'true');
        this.closeTutorialModal();
        this.switchView('vocabulary');
        this.activateSpotlightBeacon();
    }

    activateSpotlightBeacon() {
        if (this.quickAddCard) {
            this.quickAddCard.classList.remove('collapsed');
            const chevron = document.getElementById('quickAddChevron');
            if (chevron) chevron.className = 'fa-solid fa-chevron-down';

            this.quickAddCard.classList.add('spotlight-beacon');
            this.quickAddCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        if (this.quickAddSpotlightTip) {
            this.quickAddSpotlightTip.classList.remove('hidden');
        }

        if (this.quickWordInput) {
            setTimeout(() => {
                this.quickWordInput.focus();
            }, 300);
        }
    }

    dismissSpotlightTip() {
        if (this.quickAddCard) {
            this.quickAddCard.classList.remove('spotlight-beacon');
        }
        if (this.quickAddSpotlightTip) {
            this.quickAddSpotlightTip.classList.add('hidden');
        }
    }
}

// Global initialization
let app;
window.addEventListener('DOMContentLoaded', () => {
    app = new EasyLearnApp();
    window.app = app;
});
