require("babel-register")({
    presets: ["es2015", "react"]
});

const router = require("./src/sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
        new Sitemap(router)
            .build("https://www.marty.kiev.ua/")
            .save("./static/sitemap.xml")
    );
}

generateSitemap();
