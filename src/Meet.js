import React from "react";

export default function Meet({ language, t }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{t.meet}</h1>
      <p className="text-lg">
        {/* Example content — replace with real text */}
        {language === "en"
          ? "Welcome to the Meet Serap page. Here you’ll get to know Serap’s story, values, and passion for her work."
          : "Willkommen auf der 'Lerne Serap kennen'-Seite. Hier erfahren Sie Seraps Geschichte, Werte und Leidenschaft für ihre Arbeit."}
      </p>
    </div>
  );
}
