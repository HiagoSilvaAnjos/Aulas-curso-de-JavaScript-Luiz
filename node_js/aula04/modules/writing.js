const fs = require('fs').promises;

module.exports = (path, datas) => {
    fs.writeFile(path, `${JSON.stringify(datas, "", 2)}`, { flag: "w" });
};

