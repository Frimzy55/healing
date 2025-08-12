import React from "react";

export default function Specialized({ language, t }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{t.specialized}</h1>
      <p className="text-lg">
        {language === "en"
          ? "Serap specializes in guiding people through personal and professional transformations."
          : "Serap ist spezialisiert darauf, Menschen bei persönlichen und beruflichen Veränderungen zu begleiten."}
      </p>
    </div>
  );
}
