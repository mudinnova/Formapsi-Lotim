import { useState } from "react";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);

  const handleTranslatePage = async (targetLang) => {
    setLoading(true);
    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, a, button");

    for (let el of elements) {
      const originalText = el.dataset.original || el.innerText;
      if (!el.dataset.original) el.dataset.original = originalText; // Simpan teks asli

      try {
        const res = await fetch("https://libretranslate.com/translate", {
          method: "POST",
          body: JSON.stringify({
            q: originalText,
            source: "auto",
            target: targetLang,
            format: "text",
            api_key: "",
          }),
          headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        el.innerText = data.translatedText || originalText;
      } catch (error) {
        console.error("Terjemahan gagal", error);
      }
    }
    setLoading(false);
  };

  return (
    <div className="fixed top-4 right-4 bg-white p-2 rounded-lg shadow-lg">
      <select
        className="border p-2 rounded"
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
          handleTranslatePage(e.target.value);
        }}
        disabled={loading}
      >
        <option value="en">🇬🇧 English</option>
        <option value="id">🇮🇩 Bahasa Indonesia</option>
        <option value="fr">🇫🇷 Français</option>
        <option value="de">🇩🇪 Deutsch</option>
        <option value="es">🇪🇸 Español</option>
      </select>
    </div>
  );
}
