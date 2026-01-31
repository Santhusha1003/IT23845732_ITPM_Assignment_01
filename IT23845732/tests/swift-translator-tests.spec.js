const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
  
    {
      tcId: 'Pos_Fun_001',
      name: 'Convert a short daily language usage',
      input: 'mama nuvara giyaa ',
      expected: 'මම නුවර ගියා',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Convert a Simple request',
      input: 'mata ara potha oonee',
      expected: 'මට අර පොත ඕනේ',
      category: 'Convert a Simple request',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Convert a Command forme',
      input: 'issarahata yanna',
      expected: 'ඉස්සරහට යන්න',
      category: 'Convert a Command forme',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_004',
      name: 'Convert a Polite request',
      input: 'karunaakaralaa mata udhavvak karanna puLuvandha?',
      expected: 'කරුනාකරලා මට උදව්වක් කරන්න පුළුවන්ද?',
      category: 'Convert a Polite request',
      grammar: 'simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Convert a Past tense',
      input: 'mama giya sathiyea panthi giyaa',
      expected: 'මම ගිය සතියේ පන්ති ගියා',
      category: 'Convert a Past tense',
      grammar: 'past sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_006',
      name: 'Convert a Mixed English',
      input: 'teams meeting ekak thiyennee',
      expected: 'teams meeting එකක් තියෙන්නේ',
      category: 'Convert a Mixed English',
      grammar: 'Complex sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_007',
      name: 'Convert a Place name',
      input: 'api colombo gihin enna yamu',
      expected: 'අපි colombo ගිහින් එන්න යමු',
      category: 'Convert a Place name',
      grammar: 'simple sentences',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Convert a Real-time conversion',
      input: 'mama gedhara yanavaa',
      expected: 'මම ගෙදර යනවා',
      category: 'Convert a Real-time conversion',
      grammar: 'simple sentences',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Polite question request',
      input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha oyaata ? mama adha kadee vaedakata parakku venavaa kiyala mata hithenavaa',
      expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද ඔයාට ? මම අද කඩේ වැඩකට පරක්කු වෙනවා කියල මට හිතෙනවා',
      category: 'Greeting / request / response',
      grammar: 'Polite question request',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_010',
      name: 'Convert compound  sentence',
      input: 'mama hootalayata yanavaa saha passe api kavuruth ekka chithrapatayak balanavaa kiyala api kathaa unaa',
      expected: 'මම හෝටලයට යනවා සහ පස්සෙ අපි කවුරුත් එක්ක චිත්‍රපටයක් බලනවා කියල අපි කතා උනා',
      category: 'Convert compound  sentence',
      grammar: 'simple sentences',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Convert a tense variation sentence',
      input: 'mama iiyee gedhara giya nisaa adha udhee idhala godak mahansiyi saha epaa velaa inne ',
      expected: 'මම ඊයේ ගෙදර ගිය නිසා අද උදේ ඉදල ගොඩක් මහන්සියි සහ එපා වෙලා ඉන්නේ',
      category: 'Greeting / request / response',
      grammar: 'Convert a tense variation sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_012',
      name: 'Convert mixed Singlish with English terms',
      input: 'mama adha class yanna kalin teams meeting ekakata sambanDha venna oona nisaa laptop eka open karalaa inne. meeting eka ivaravela passe email ekak yavala reports tika attach karanna puluvan veevi. ehema bari unoth WhatsApp message ekakin dhanvanna puluvan',
      expected: 'මම අද class යන්න කලින් teams meeting එකකට සම්බන්ධ වෙන්න ඕන නිසා laptop එක open කරලා ඉන්නේ. meeting එක ඉවරවෙල පස්සෙ email එකක් යවල reports ටික attach කරන්න පුලුවන් වේවි. එහෙම bari උනොත් WhatsApp message එකකින් දන්වන්න පුලුවන්',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Convert informal slang paragraph',
      input: 'ela machan adha vaeda godak thiyenavaa. udhea idhala hari mahansiyi. ehema unath passe api poddak relax venna yamu kiyala hithan inne. oyath ekka aavoth hari lassanai kiyala hithenavaa. ehema nam  passe call ekak dhaala balanna.',
      expected: 'එල මචන් අද වැඩ ගොඩක් තියෙනවා. උදේ ඉදල හරි මහන්සියි. එහෙම උනත් පස්සෙ අපි පොඩ්ඩක් relax වෙන්න යමු කියල හිතන් ඉන්නේ. ඔයත් එක්ක ආවොත් හරි ලස්සනෛ කියල හිතෙනවා. එහෙම නම්  පස්සෙ call එකක් දාල බලන්න.',
      category: 'informal paragraph',
      grammar: 'informal slang paragraph',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_014',
      name: 'Convert a simple need',
      input: 'machan customer feedback tika balala karala report ekak hadhala email karanna oonee kiyala boss kivvaa, mokadha ehema data thibboth service quality improve karanna puluvan kiyalaa hithenavaa.',
      expected: 'මචන් customer feedback ටික බලල කරල report එකක් හදල email කරන්න ඕනේ කියල boss කිව්වා, මොකද එහෙම data තිබ්බොත් service quality improve කරන්න පුලුවන් කියලා හිතෙනවා.',
      category: 'Daily language usage',
      grammar: 'Convert a simple need',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Convert mixed english language ',
      input: 'api adha class meeting ekaka discuss karapu ideas tika file ekakata compile karala email karanna oonee kiyala team leader kiyala thiyennee, ehema karoth future campaigns plan karanna loku udhavvak venavaa.',
      expected: 'අපි අද class meeting එකක discuss කරපු ideas ටික file එකකට compile කරල email කරන්න ඕනේ කියල team leader කියල තියෙන්නේ, එහෙම කරොත් future campaigns plan කරන්න ලොකු උදව්වක් වෙනවා.',
      category: 'mixed english language',
      grammar: 'mixed english language',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_016',
      name: 'Convert future tense',
      input: 'mama heta system update ekak deploy karanna hadhannee.ita passe update eka passe logs check karala email ekak vidhihata summary ekak evanna kiyala engineer kivvaa.',
      expected: 'මම හෙට system update එකක් deploy කරන්න හදන්නේ.ඉට පස්සෙ update එක පස්සෙ logs check කරල email එකක් විදිහට summary එකක් එවන්න කියල engineer කිව්වා.',
      category: 'Convert future tense',
      grammar: 'future tense',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Convert medium tense-mixed paragraph',
      input: 'machan development team eka adha release eka plan karanavaa.ee vagema testing reports tika send karanna oonee kiyala HR team eka kivvaa.issues thiyana reports thibboth kalin  dhaenuvath karanna kiyalaa kivvaa.',
      expected: 'මචන් development team එක අද release එක plan කරනවා.ඒ වගෙම testing reports ටික send කරන්න ඕනේ කියල HR team එක කිව්වා.issues තියන reports තිබ්බොත් කලින්  දැනුවත් කරන්න කියලා කිව්වා.',
      category: 'Convert medium tense-mixed paragraph',
      grammar: 'medium tense-mixed paragraph',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_018',
      name: 'Convert daily language usage',
      input: 'mama adha udhae idhala gedhara inne loku vaedak nisaa. lamayi school yanna ready venne thibuna nisaa mama eyaalata udhav kalaa. passe bath eka hadala lamayi kaeevata passe mama office vaedakata yanna hadhanne kiyala hithan inne. ehema unath vaessa vahinavaa saha traffic thiyenavaa nisaa poddak late venna puluvan kiyala hithenava',
      expected: 'මම අද උදැ ඉදල ගෙදර ඉන්නේ ලොකු වැඩක් නිසා. ලමයි school යන්න ready වෙන්නෙ තිබුන නිසා මම එයාලට උදව් කලා. පස්සෙ බත් එක හඩල ලමයි කෑවට පස්සෙ මම office වැඩකට යන්න හදන්නෙ කියල හිතන් ඉන්නේ. එහෙම උනත් වැස්ස වහිනවා සහ traffic තියෙනවා නිසා පොඩ්ඩක් late වෙන්න පුලුවන් කියල හිතෙනව',
      category: 'Daily language usage',
      grammar: 'Convert daily language usage',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_019',
      name: 'Convert medium family conversation paragraph',
      input: 'mama iiyee gedhara giyaa passe amma ekka podi velaavak kathaa kalaa. eya adha vaessa vahinavaa kiyalaa lamayi school yanna epaa vei kiyala hithuva. passe api okkoma ekka ekathu velaa mea gana kathaa karala thiranaya kalaa',
      expected: 'මම ඊයේ ගෙදර ගියා පස්සෙ අම්ම එක්ක පොඩි වෙලාවක් කතා කලා. එය අද වැස්ස වහිනවා කියලා ලමයි school යන්න එපා වේ කියල හිතුව. පස්සෙ අපි ඔක්කොම එක්ක එකතු වෙලා මේ ගන කතා කරල තිරනය කලා',
      category: 'Convert medium family conversation paragraph',
      grammar: 'Simple sentence',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_020',
      name: 'Convert medium informal discussion paragraph',
      input: 'ela machan adha  hari amaru vuna. udhae idhala meeting godak thibuna saha mind eka tikak tired unaa. ehema unath passe api okkoma ekka podi velaavak kathaa karala stress eka adu karaganna puluvan kiyala hithan inne',
      expected: 'එල මචන් අද  හරි අමරු වුන. උදැ ඉදල meeting ගොඩක් තිබුන සහ mind එක ටිකක් tired උනා. එහෙම උනත් පස්සෙ අපි ඔක්කොම එක්ක පොඩි වෙලාවක් කතා කරල stress එක අඩු කරගන්න පුලුවන් කියල හිතන් ඉන්නේ',
      category: 'Convert medium informal discussion paragraph',
      grammar: 'medium informal discussion paragraph',
      length: 'M'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Convert a question ',
      input: 'oyaa enavadha',
      expected: 'ඔයා එනවද',
      category: 'Convert a question ',
      grammar: 'question ',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_022',
      name: 'Convert present tense sentence',
      input: 'mama vaeda karanavaa',
      expected: 'මම වැඩ කරනවා',
      category: 'Convert present tense sentence',
      grammar: 'present tense sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_023',
      name: 'Convert long real-life narrative paragraph',
      input: 'mama adha udhe paandharama nidhaagena aeththoth hari lassanata vaessa vahinavaa kiyala ahagena hithuva. nidhaagena idhala netha aran baladhdhi udhe indhala hari loku vaessa vahinavaa saha gedhara issaraha maarga tika okkoma jalayen pirila thibunaa. ehema nisaa mama lamayi school yanna ready karanna podi kaalayak gaththaa. lamayi school yanna hithan inne unath bus service eka adha loku prashnayakata path vela thibunaa kiyala aaranchiya labunaa. ehema unath mama lamayinta kiyuve api balamu monavadha karanne kiyala. passe mama office vaedakata yanna ona nisaa laptop eka open karalaa email tika check kalaa. eeta passe teams meeting ekak thiyenavaa kiyala calendar eke notification ekak avaa. meeting eka sambandha venna kalin reports tika balala hariyata ready karanna hithuva. vaessa vahinavaa saha traffic thiyenavaa kiyala manager ta message ekak yavala late venna puluvan kiyala dhanavala thibunaa. meeting eka ivaravela passe lamayi school yanna bariuna nisaa eyaala gedhara thiyala mama office vaedaya gedharama idhala karanna thiranaya kalaa. mehema situations vala system eka Singlish valin Sinhala valata hariyata convert karanavadha kiyala balanna me paragraph eka hondha example ekak venne kiyala hithenavaa',
      expected: 'මම අද උදෙ පාන්දරම නිදාගෙන ඇත්තොත් හරි ලස්සනට වැස්ස වහිනවා කියල අහගෙන හිතුව. නිදාගෙන ඉදල නෙත අරන් බලද්දි උදෙ ඉන්දල හරි ලොකු වැස්ස වහිනවා සහ ගෙදර ඉස්සරහ මාර්ග ටික ඔක්කොම ජලයෙන් පිරිල තිබුනා. එහෙම නිසා මම ලමයි school යන්න ready කරන්න පොඩි කාලයක් ගත්තා. ලමයි school යන්න හිතන් ඉන්නේ උනත් bus service එක අද ලොකු ප්‍රශ්නයකට පත් වෙල තිබුනා කියල ආරන්චිය ලබුනා. එහෙම උනත් මම ලමයින්ට කියුවෙ අපි බලමු මොනවද කරන්නේ කියල. පස්සෙ මම office වැඩකට යන්න ඔන නිසා laptop එක open කරලා email ටික check කලා. ඒට පස්සෙ teams meeting එකක් තියෙනවා කියල calendar eke notification එකක් අවා. meeting එක සම්බන්ද වෙන්න කලින් reports ටික බලල හරියට ready කරන්න හිතුව. වැස්ස වහිනවා සහ traffic තියෙනවා කියල manager ට message එකක් යවල late වෙන්න පුලුවන් කියල දනවල තිබුනා. meeting එක ඉවරවෙල පස්සෙ ලමයි school යන්න බරිඋන නිසා එයාල ගෙදර තියල මම office වැඩය ගෙදරම ඉදල කරන්න තිරනය කලා. මෙහෙම situations වල system එක සින්ග්ලිශ් වලින් Sinhala වලට හරියට convert කරනවද කියල බලන්න මෙ paragraph එක හොන්ද example එකක් වෙන්නෙ කියල හිතෙනවා',
      category: 'Convert long real-life narrative paragraph',
      grammar: 'long real-life narrative paragraph',
      length: 'L'
    },
    {
      tcId: 'Pos_Fun_024',
      name: 'Convert imperative command',
      input: 'vahaama enna',
      expected: 'වහාම එන්න',
      category: 'Convert imperative command',
      grammar: 'imperative command',
      length: 'S'
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Convert Joined words cause incorrect conversion',
      input: 'mamagedharayanavaaheta',
      expected: 'මමගෙදරයනවාහෙට',
      category: 'Joined words cause incorrect conversion',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Convert a greeting',
      input: 'oya sanependa',
      expected: 'ඔය සනෙපෙන්ඩ',
      category: 'greeting',
      grammar: 'Convert a greeting',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Convert Misspelled key word',
      input: 'mata bat oonee',
      expected: 'මට bat ඕනේ',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Convert Excess repeated characters',
      input: 'mata baaath oonee',
      expected: 'මට බාඅත් ඕනේ',
      category: 'repeat characters',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Convert Mixed English verb usage',
      input: 'mama went gedhara',
      expected: 'මම went ගෙදර',
      category: 'Mixed English verb usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Convert Unsupported abbreviation',
      input: 'mama office yanavaa ASAP',
      expected: 'මම office යනවා ASAP',
      category: 'Unsupported abbreviation',
      grammar: 'simple question',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Convert Slang-heavy sentence',
      input: 'adoo machan meeka hari wadak',
      expected: 'අඩෝ මචන් මේක හරි wඅඩක්',
      category: 'Slang-heavy sentence',
      grammar: 'Slang-heavy sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Convert Missing vowels',
      input: 'mta bth onee',
      expected: 'ම්ට බ්ත් ඔනේ',
      category: 'Convert Missing vowels',
      grammar: 'vowels',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Convert Invalid word order',
      input: 'yanavaa mama gedhara',
      expected: 'යනවා මම ගෙදර',
      category: 'Convert Invalid word order',
      grammar: 'Invalid word order',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Convert Joined words cause incorrect conversion',
      input: 'mama bath kanawa',
      expected: 'මම බත් කනwඅ',
      category: 'Convert Joined words cause incorrect conversion',
      grammar: 'incorrect conversion',
      length: 'S'
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama paan kanavaa',
    partialInput: 'mama kae',
    expectedFull: 'මම පාන් කනවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};

// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
