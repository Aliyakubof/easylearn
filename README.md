# EasyLearn - Shaxsiy So'z Yodlash & Lug'at Ilovasi

**EasyLearn** — yangi so'zlarni o'zingiz kiritib, ularni turli interaktiv va qiziqarli usullarda (3D Fleshkartalar, Test, Yozma mashq, Juftlik o'yini) tez va samarali yodlash uchun yaratilgan zamonaviy web ilova.

---

## Ilovani Ishga Tushirish

Ilovani ishlatish juda oson! Hech qanday murakkab dastur o'rnatish shart emas:
1. `index.html` faylini istalgan brauzerda (Google Chrome, Microsoft Edge, Safari, Firefox) ikki marta bosib oching.
2. Yoki VS Code Live Server / istalgan lokal server orqali ishga tushiring.

---

## Asosiy Imkoniyatlar va Qo'llanma

### 1. So'z Qo'shish Usullari
- **Tezkor 2 qatorli kiritish (Quick Add Bar)**: Bosh sahifaning yuqori qismidagi panel orqali faqat **Inglizcha so'z** va **O'zbekcha tarjimasi**ni yozib `Enter` bosish kifoya! 2 soniyada yangi so'z lug'atga tushadi.
- **Tayyor Lug'at To'plamlari (Starter Packs)**: Bitta tugma orqali *«A1-A2 Boshlang'ich»*, *«Kundalik so'zlashuv»*, *«Biznes»*, *«Sayohat»*, *«IT & Texnologiya»*, *«IELTS Top»* kabi tayyor mavzuli so'zlarni bir zumda lug'atingizga yuklab oling.
- **Ommaviy kiritish (Bulk Import)**: Matndan yoki lug'atdan nusxalab olingan 50-100 ta so'zlarni bitta maydonga tashlang:
  ```text
  apple - olma
  perseverance - matonat, qat'iyat - persistence, endurance
  accurate : aniq, to'g'ri : precise, exact
  flexible = moslashuvchan = adaptable
  ```
  Ilova ularning barchasini avtomatik ajratib oladi va bitta tugma bilan saqlaydi!

  > **AI Maslahat (Passage yoki kitob sahifasidan so'zlarni bir zumda olish):**
  > 1. Kitob, maqola yoki IELTS Reading passageni telefoningizda **suratga oling** (yoki skrinshot qiling).
  > 2. Suratni **Google Gemini**ga yuklang va quyidagi promptni yuboring:
  >    ```text
  >    Ushbu rasmdagi barcha yangi va muhim inglizcha so'zlarni, ularning o'zbekcha tarjimasi va sinonimlari bilan birga quyidagi formatda chiqarib ber (boshqa hech qanday ortiqcha gap yozma):
  >    so'z - o'zbekcha tarjimasi - sinonim1, sinonim2
  >    ```
  > 3. Gemini bergan ro'yxatdan nusxa olib, EasyLearn-dagi *«Ommaviy kiritish»* maydoniga tashlang va bitta bosishda saqlang! (Modal ichida tayyor promptni nusxalash tugmasi mavjud).

---

### 2. 3D Fleshkartalar (Flashcards)
- Kartani ustiga bosganda karta 3D ko'rinishda aylanib uning tarjimasini ko'rsatadi.
- **Klaviatura tugmalari**:
  - `Probel (Space)` — Kartani aylantirish (oldinga / orqaga).
  - `1` — Qaytadan (so'zni qayta takrorlash).
  - `2` — Yaxshi (o'rganilmoqda).
  - `3` — Yodlandi (to'liq xotirada).
  - `Chapga / O'ngga strelkalar` — Oldingi yoki keyingi kartaga o'tish.
  - `S` — So'zning ovozli talaffuzini eshitish.

---

### 3. Variantli Test (Quiz)
- Har bir so'z uchun 4 ta variantdan to'g'ri tarjimani toping.
- To'g'ri javoblar uchun ballar va ketma-ketlik (streak) yig'iladi.
- Test oxirida umumiy aniqlik foizi va tavsiyalar ko'rsatiladi.

---

### 4. Yozma Mashq (Spelling Practice)
- Tarjimaga qarab so'zni klaviaturadan to'g'ri harflar bilan yozing.
- Qiyin bo'lsa **"Maslahat (1 ta harf)"** tugmasini bosib harflarni bittalab ochish mumkin.

---

### 5. Juftlikni Top (Match Game)
- So'zlar va ularning tarjimalari aralashib turgan plitkalar orasidan mos juftliklarni tezkorlik bilan toping.
- Vaqt bo'yicha o'z rekordingizni yangilang!

---

### 6. Ovozli Talaffuz (Text-to-Speech)
- Har bir so'z yonidagi ovoz chiqarish (karnay) tugmasini bosib, so'zning to'g'ri inglizcha talaffuzini eshitishingiz mumkin.

---

### 7. Zaxira Nusxa (Export & Import)
- Kiritgan barcha so'zlaringiz hech qachon yo'qolmasligi uchun **"Zaxira"** tugmasini bosib, barcha ma'lumotlarni `JSON` yoki `Excel (CSV)` fayl sifatida kompyuteringizga saqlab olishingiz va keyinchalik yana tiklashingiz mumkin.

---

### 8. Yangi Foydalanuvchilar Uchun Animatsion Qo'llanma (Onboarding Guide)
- Ilovaga ilk bor kirgan foydalanuvchilar uchun 6 bosqichli interaktiv animatsion yo'riqnoma avtomatik ravishda ochiladi:
  - 1-bosqich: EasyLearn imkoniyatlari bilan tanishuv va xush kelibsiz animatsiyasi.
  - 2-bosqich: Tezkor so'z qo'shish simulatsiyasi (harflar terilishi, virtual kursor va kartaning saqlanishi).
  - 3-bosqich: 3D Fleshkartalarning avtomatik aylanishi, talaffuz to'lqinlari va klaviatura tugmalari.
  - 4-bosqich: 4 xil interaktiv mashqlar (Test, Yozish mashqi, Juftlik o'yini, Sinonimlar) ko'rgazmasi.
  - 5-bosqich: Xavfsizlik, 100% oflayn ishlash va ma'lumotlarni zaxiralash himoyasi.
  - 6-bosqich: Tayyor A1-A2 to'plamini 1 bosishda yuklash yoki noldan so'z kiritishni boshlash (Salomlashish konfettisi bilan).
- Yo'riqnomani istalgan vaqtda yuqori paneldagi **«Qo'llanma»** tugmasi orqali qayta tomosha qilish mumkin.
