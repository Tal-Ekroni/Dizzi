export const questionnaireDynamicCmps = {
  CarType: {
    cmpClassName: "type-pick",
    containerClassName: "types-container",
    header: "איזה סוג רכב אתה מעדיף?",
    subHeader: "*ניתן לבחור יותר מסוג אחד",
    data: [
      { text: "מנהלים", svgPath: "assets/imgs/questionnaireSvgs/manager.svg" },
      { text: "משפחתי", svgPath: "assets/imgs/questionnaireSvgs/family.svg" },
      { text: "קטן", svgPath: "assets/imgs/questionnaireSvgs/mini.svg" },
      { text: "פנאי ושטח", svgPath: "assets/imgs/questionnaireSvgs/suv.svg" },
      { text: "מסחרי", svgPath: "assets/imgs/questionnaireSvgs/12.svg" },
      { text: "ספורט", svgPath: "assets/imgs/questionnaireSvgs/11.svg" },
      { text: "יוקרה", svgPath: "assets/imgs/questionnaireSvgs/10.svg" },
      { text: "מיניואן", svgPath: "assets/imgs/questionnaireSvgs/12.svg" },
    ],
    stateName: "carTypes",
    isLimitedPicks: false,
    nextSectionBtnOption: ["יאללה ממשיכים","אין לי העדפה"],
    
    nextSection: "FeaturesPick",
  },
  FeaturesPick: {
    cmpClassName: "features-pick",
    containerClassName: "features-container",
    header: "מה חשוב לך ברכב?",
    subHeader: "ניתן לבחור עד 3 מאפיינים",
    data: [
      { text: "בטיחות", svgPath: "assets/imgs/questionnaireSvgs/16.svg" },
      { text: "ביצועים", svgPath: "assets/imgs/questionnaireSvgs/15.svg" },
      { text: "חיסכון בדלק", svgPath: "assets/imgs/questionnaireSvgs/14.svg" },
      { text: "אבזור", svgPath: "assets/imgs/questionnaireSvgs/13.svg" },
      { text: "מרחב", svgPath: "assets/imgs/questionnaireSvgs/19.svg" },
      { text: "תא מטען גדול", svgPath: "assets/imgs/questionnaireSvgs/18.svg" },
      { text: "נוחות", svgPath: "assets/imgs/questionnaireSvgs/.svg" },
      { text: "רכב גבוה", svgPath: "assets/imgs/questionnaireSvgs/17.svg" },
    ],
    stateName: "threeImportantFeaturs",
    isLimitedPicks: true,
    nextSectionBtnOption: ["יאללה ממשיכים"],
    nextSection: "AccessoriesPick",
  },
  AccessoriesPick: {
    cmpClassName: "accessories-pick",
    containerClassName: "accessories-container",
    header: "מה מהדברים הבאים חשובים לך מבחינת אבזור?",
    subHeader: false,
    data: [
      { text: "גלגלי מגנזיום", svgPath: "assets/imgs/questionnaireSvgs/24.svg" },
      { text: "מערכת מולטימדיה", svgPath: "assets/imgs/questionnaireSvgs/23.svg" },
      { text: "CAR PLAY", svgPath: "assets/imgs/questionnaireSvgs/22.svg" },
      { text: "גג פנרומי נפתח", svgPath: "assets/imgs/questionnaireSvgs/21.svg" },
      { text: "ריפודי עור", svgPath: "assets/imgs/questionnaireSvgs/28.svg" },
      { text: "לוח מחוונים דיגטלי", svgPath: "assets/imgs/questionnaireSvgs/27.svg" },
      { text: "כניסה והנעה ללא מפתח", svgPath: "assets/imgs/questionnaireSvgs/26.svg" },
      { text: "בלם יד חשמלי", svgPath: "assets/imgs/questionnaireSvgs/25.svg" },
    ],
    stateName: "importantAccessories",
    isLimitedPicks: false,
    nextSectionBtnOption: ["לא חשוב לי האבזור"],
    nextSection: "LuggagePick",
  },
  LuggagePick: {
    cmpClassName: "luggage-pick",
    containerClassName: "luggage-container",
    header: "סמן את הדברים שתרצה להכניס לרכב",
    subHeader: "*ניתן לבחור יותר מפריט אחד",
    data: [
      { text: "עגלת תינוק", svgPath: "assets/imgs/questionnaireSvgs/30.svg" },
     { text: "כיסא תינוק", svgPath: "assets/imgs/questionnaireSvgs/29.svg" },
     { text: "קניות", svgPath: "assets/imgs/questionnaireSvgs/.svg" },
     { text: "נוסעים מרובים", svgPath: "assets/imgs/questionnaireSvgs/.svg" },
     { text: "ציוד קמפינג", svgPath: "assets/imgs/questionnaireSvgs/32.svg" },
     { text: "מזוודה", svgPath: "assets/imgs/questionnaireSvgs/31.svg" },
     { text: "עוד משהו?", svgPath: "" },
     { text: "עוד משהו?", svgPath: "" },
    ],
    stateName: "luggageTypes",
    isLimitedPicks: false,
    nextSectionBtnOption: ["לא חשוב לי"],
    nextSection: "GearboxPick",
  },
  GenderPick: {
    cmpClassName: "gender-pick",
    header: "איך תרצו שנפנה אליכם?",
    subHeader: "על מנת שנוכל לפנות אליכם במין הנכון",
    stateName: "gender",
    options: [
      {
        option: "Male",
        svgPath: "assets/imgs/questionnaireSvgs/male.svg",
      },
      {
        option: "Female",
        svgPath: "assets/imgs/questionnaireSvgs/female.svg",
      },
    ],
    btnOption: { option: "None", text: "למי אכפת?!" },
    nextSection: "BudgetPick",
  },
  GearboxPick: {
    cmpClassName: "gearbox-pick",
    header: "מה היית מעדיף?",
    stateName: "gearboxType",
    options: [
      { option: "Manual", text: "גיר ידני" ,svgPath:"assets/imgs/questionnaireSvgs/34.svg"},
      { option: "Auto", text: "גיר אוטומטי" ,svgPath:"assets/imgs/questionnaireSvgs/33.svg" },
    ],
    btnOption: { option: "Both", text: "לא חשוב לי" },
    nextSection: false,
    endUrl: "/results",
  },
};
