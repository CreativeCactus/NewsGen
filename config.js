/// SEE https://github.com/marcbachmann/node-html-pdf

module.exports = {
  /// Papersize Options: http://phantomjs.org/api/webpage/property/paper-size.html
  height: "12in",	// allowed units: mm, cm, in, px
  width: "5in",		// allowed units: mm, cm, in, px

  format: 'png',	// pdf, jpeg, png
  quality: "90",	// png/jpeg only
  zoomFactor: 1, 	// png/jpeg only

  /// Time we should wait after window load
  /// accepted values are 'manual', some delay in milliseconds or undefined to wait for a render event
  // "renderDelay": 3000,

/*
  /// HTTP Headers that are used for requests
  "httpHeaders": {
    /// e.g.
    "Authorization": "Bearer AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
  },
*/


  phantomArgs: ['--local-url-access=false']
  /// see https://github.com/marcbachmann/node-html-pdf/issues/530
  /// see https://www.npmjs.com/advisories/1095
}
