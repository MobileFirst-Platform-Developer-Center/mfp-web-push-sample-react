const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/mfp/api/imfpush/", {
      target: "http://localhost:9080/",
      changeOrigin: true,
      pathRewrite: function (path, req) {
        console.log("Rewrite in /mfp/api/imfpush/: ", path);
        return path.replace("/mfp/api", "");
      },
    })
  );
  app.use(
    proxy("/mfp/api", {
      target: "http://localhost:9080",
      changeOrigin: true,
      pathRewrite: function (path, req) {
        console.log("Rewrite in /mfp/api: ", path);
        return path;
      },
    })
  );
};
