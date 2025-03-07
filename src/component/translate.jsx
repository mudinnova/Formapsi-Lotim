import React, { useState } from "react";
import axios from "axios";

const LanguageSelector = ({ onTranslate }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default English
  const languages = [
    { code: "en", name: "English" },
    { code: "id", name: "Bahasa Indonesia" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
    { code: "ja", name: "Japanese" },
    { code: "zh", name: "Chinese" },
  ];

  const handleTranslate = async () => {
    try {
      const apiKey = "https://translate.googleapis.com/$discovery/rest?version=v3go"; // Ganti dengan API Key Anda
      const text = "Welcome to our website!";
      const targetLanguage = selectedLanguage;

      const response = await axios.post(
        `https://translation.googleapis.com/language/translate/v2`,
        {},
        {
          params: {
            q: text,
            target: targetLanguage,
            key: apiKey,
          },
        }
      );

      const translatedText = response.data.data.translations[0].translatedText;
      onTranslate(translatedText);
    } catch (error) {
      console.error("Translation Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <select
        className="p-2 border border-gray-300 rounded-md"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleTranslate}
      >
        Translate
      </button>
    </div>
  );
};

export default LanguageSelector;
