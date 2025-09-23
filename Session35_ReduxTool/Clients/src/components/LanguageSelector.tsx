import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { setLanguage } from "../slices/language.slice";

const LanguageSelector: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentLang = useSelector((state: RootState) => state.language.current);

  return (
    <div style={{ marginBottom: "20px" }}>
      <select
        value={currentLang}
        onChange={(e) => dispatch(setLanguage(e.target.value as "en" | "vi"))}
      >
        <option value="vi">Vietnamese</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
