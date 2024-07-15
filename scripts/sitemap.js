const fs = require("fs");
const companies = JSON.parse(
  fs.readFileSync("src/data/companies.json", "utf8")
);
let contents = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://www.computerhistory.boston/</loc></url>`;

companies
  .map((company) => {
    return company.slug
      ? "https://www.computerhistory.boston/company/" + company.slug + '/'
      : "";
  })

  .forEach((url) => {
    contents += `<url><loc>${url}</loc></url>`;
  });

contents += `</urlset>`;
console.log(contents)
