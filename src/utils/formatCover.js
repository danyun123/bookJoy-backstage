const { SERVICE_BASE_URL } = require("../config");

const formatCover = (url) => {
  if (!url.startsWith("http://")) {
    return "http://" + SERVICE_BASE_URL + "/img" + url;
  }
  return url;
};

module.exports = { formatCover };
