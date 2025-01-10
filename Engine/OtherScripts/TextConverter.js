import opentype from "opentype.js";
import fs from "fs";

// Загрузка шрифта
opentype.load("../Assets/Fonts/default.ttf", function (err, font) {
  if (err) {
    console.error("Could not load font: " + err);
  } else {
    // Конвертация шрифта в JSON
    const fontData = font.toTables();
    const jsonData = JSON.stringify(fontData, null, 2);

    // Сохранение JSON в файл
    fs.writeFile("../Assets/Fonts/default.json", jsonData, "utf8", (err) => {
      if (err) throw err;
      console.log("Шрифт успешно конвертирован в JSON!");
    });
  }
});
