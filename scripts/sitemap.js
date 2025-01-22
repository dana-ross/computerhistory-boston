const fs = require("fs");
const companies = JSON.parse(
  fs.readFileSync("src/data/companies.json", "utf8")
);
const institutions = JSON.parse(
  fs.readFileSync("src/data/institutions.json", "utf8")
);
const landmarks = JSON.parse(
  fs.readFileSync("src/data/landmarks.json", "utf8")
);

const all = [...companies, ...institutions, ...landmarks];

let contents = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://www.computerhistory.boston/</loc></url>`;

companies
  .map((landmark) => {
    return landmark.slug
      ? "https://www.computerhistory.boston/company/" + landmark.slug + '/'
      : "";
  })

  .forEach((url) => {
    contents += `<url><loc>${url}</loc></url>`;
  });

institutions
  .map((landmark) => {
    return landmark.slug
      ? "https://www.computerhistory.boston/institution/" + landmark.slug + '/'
      : "";
  })

  .forEach((url) => {
    contents += `<url><loc>${url}</loc></url>`;
  });

landmarks
  .map((landmark) => {
    return landmark.slug
      ? "https://www.computerhistory.boston/landmark/" + landmark.slug + '/'
      : "";
  })

  .forEach((url) => {
    contents += `<url><loc>${url}</loc></url>`;
  });


contents += `</urlset>`;
console.log(contents)
