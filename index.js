const fetch = require('node-fetch')
const base64 = require('base64-img')
const btoa = require('btoa')

function l(t) {
	if (69 == t[0]) {
    var e = new Uint8Array(t.length + 15);
    var n = t.length + 7;
    e[0] = 82,
      e[1] = 73,
      e[2] = 70,
      e[3] = 70,
      e[7] = n >> 24 & 255,
      e[6] = n >> 16 & 255,
      e[5] = n >> 8 & 255,
      e[4] = 255 & n,
      e[8] = 87,
      e[9] = 69,
      e[10] = 66,
      e[11] = 80,
      e[12] = 86,
      e[13] = 80,
      e[14] = 56;
    for (var r = 0; r < t.length; r++)
      e[r + 15] = 101 ^ t[r];
    return e;
  }
  return t;
}

function e(t) {
  for (var e = [], n = 0; n < t.length; n += 32768) {
      e.push(String.fromCharCode.apply(null, t.subarray(n, n + 32768)))
  }
  return btoa(e.join(''))
}

fetch('https://f01.mrcdn.info/file/mrfiles/i/3/b/f/8g.mJoHKAvG.mri')
.then(res => res.arrayBuffer())
.then(t => {
	const x = new Uint8Array(t)
  const content = 'data:image/webp;base64,' + e(l(x))
  base64.img(content, './', 'out', (err, filePath) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Saved at', filePath)
    }
  })
})
