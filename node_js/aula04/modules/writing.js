const fs = require('fs').promises;

module.exports = (path, datasContent) => {
    const file = JSON.stringify(datasContent, "", 2);
    fs.writeFile(path, `${file}`, { flag: "w" });
};

