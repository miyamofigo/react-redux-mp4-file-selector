function getTimestamp () {
  const date = new Date()
  return date
    .getTime()
}

export const genKey = getTimestamp

function genValidator(regex) {
  return filename => regex
    .test(filename)
}

const mp4Regex = /\.mp4/
export const isMP4 = genValidator(mp4Regex) 

