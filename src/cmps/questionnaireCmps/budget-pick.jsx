export default function BudgetPick({
  questionnaire,
  setQuestionnaire,
  currentSection,
  setCurrentSection,
}) {
  const onChooseOption = () => {
    setQuestionnaire({
      ...questionnaire,
      isFullPayment: !questionnaire.isFullPayment,
    });
  };
  return (
    <div className="budget-pick">
      <h1>מה התקציב שלך?</h1>
      <p>ניתן לסנן לפי אופן התשלום הרצוי</p>

      <div className="switch-container">
        <span>מחיר מלא</span>
        <label className="switch">
          <input
            type="checkbox"
            defaultChecked={questionnaire.isFullPayment}
            onChange={onChooseOption}
          />
          <span className="slider round"></span>
        </label>
        <span>תשלום חודשי</span>
      </div>

      <input type="range" className="budget-input"/>
      <button
        onClick={() => {
          setCurrentSection("CarType");
        }}
      >
        המשך
      </button>
    </div>
  );
}
