import { Slider } from "@mui/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { utilService } from "../../services/util.service";
import { carFilterByAtom } from "../../state/atoms/global";

function valuetext(value) {
  return utilService.priceFormat(value);
}
const minDistance = 10;

export default function BudgetPick({ setCurrentSection }) {
  const [questionnaire, setQuestionnaire] = useRecoilState(carFilterByAtom);

  const [value1, setValue1] = useState([0, 20000]);
  const [value2, setValue2] = useState([0, 1000]);
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (questionnaire.isFullPayment) {
      if (activeThumb === 0) {
        setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
      } else {
        setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      }
    } else {
      if (activeThumb === 0) {
        setValue2([Math.min(newValue[0], value2[1] - minDistance), value2[1]]);
      } else {
        setValue2([value2[0], Math.max(newValue[1], value2[0] + minDistance)]);
      }
    }
  };

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
      <div className="slider-container">
        <Slider
          getAriaLabel={() => "Minimum distance"}
          value={questionnaire.isFullPayment ? value1 : value2}
          onChange={handleChange1}
          valueLabelDisplay="on"
          sx={{
            width: 600,
            padding: "3px",
            color: "white",
            "& .MuiSlider-rail": {
              color: "white",
            },
            "& .MuiSlider-valueLabelOpen": {
              backgroundColor: "white",
              color: "#48966c",
              borderRadius: "20px",
              fontSize: "17px",
              fontWeight: "600",
            },
          }}
          getAriaValueText={valuetext}
          disableSwap
          max={questionnaire.isFullPayment ? 1000000 : 8000}
        />
      </div>
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
