# NewsGen

Newsletter generator. Write custom generators to automate announcements and communications.

Examples based on https://github.com/konsav/email-templates - distributed under MIT.

## Usage

`[node] ./index.js template.hbs data.js[on] output.pdf`

By default, `./index.js` will call:

`./index.js example.hbs example.js <TIMESTAMP>.EXT` where EXT is the format used in `config.js`.

You can also modify `config.js` to change the default configuration used by [`html-pdf`](https://github.com/marcbachmann/node-html-pdf).

Note: Automatic argument shifting might differ by platform.
Check the shebang (when running directly) and call `./index.js`
