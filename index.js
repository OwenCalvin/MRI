const fetch = require('node-fetch')
const base64 = require('base64-img')
const btoa = require('btoa')

function decode(val) {
	if (69 == val[0]) {
    const e = new Uint8Array(val.length + 15)
    const n = val.length + 7
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
    for (var r = 0; r < val.length; r++) {
      e[r + 15] = 101 ^ val[r];
    }
    return e
  }
  return t
}

function encodeBase64(val) {
  for (var e = [], n = 0; n < val.length; n += 32768) {
    e.push(String.fromCharCode.apply(null, val.subarray(n, n + 32768)))
  }
  return 'data:image/webp;base64,' + btoa(e.join(''))
}

fetch('https://f01.mrcdn.info/file/mrfiles/i/3/b/f/8g.mJoHKAvG.mri')
.then(res => res.arrayBuffer())
.then(buffer => {
  base64.img(encodeBase64(decode(new Uint8Array(buffer))), './', 'out', (err, filePath) => {
    if (err) {
      console.error(err)
    } else {
      console.log('Saved at', filePath)
    }
  })
})
