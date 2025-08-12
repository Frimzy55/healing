import React from "react";

export default function Promise({ language, t }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{t.promise}</h1>
      <p className="text-lg">
        {language === "en"
          ? "This is Serap’s promise to her clients — dedication, understanding, and a commitment to positive change."
          : "Dies ist Seraps Versprechen an ihre Kunden – Engagement, Verständnis und das Streben nach positiver Veränderung."}
      </p>
    </div>
  );
}
