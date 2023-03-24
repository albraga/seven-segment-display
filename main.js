let segs = []
//0
segs.push([1, 1, 1, 1, 1, 1, 0])
//1
segs.push([0, 1, 1, 0, 0, 0, 0])
//2
segs.push([1, 1, 0, 1, 1, 0, 1])
//3
segs.push([1, 1, 1, 1, 0, 0, 1])
//4
segs.push([0, 1, 1, 0, 0, 1, 1])
//5
segs.push([1, 0, 1, 1, 0, 1, 1])
//6
segs.push([1, 0, 1, 1, 1, 1, 1])
//7
segs.push([1, 1, 1, 0, 0, 0, 0])
//8
segs.push([1, 1, 1, 1, 1, 1, 1])
//9
segs.push([1, 1, 1, 1, 0, 1, 1])

const cv = document.querySelector('canvas')
const ctx = cv.getContext('2d')
ctx.fillStyle = '#FF0000'

const sevenSegment = (arrSeg) => {
  const [a, b, c, d, e, f, g] = arrSeg
  //A
  a && ctx.fillRect(20, 0, 78, 18)
  //B
  b && ctx.fillRect(100, 20, 18, 78)
  //C
  c && ctx.fillRect(100, 120, 18, 78) 
  //D
  d && ctx.fillRect(20, 200, 78, 18)
  //E
  e && ctx.fillRect(0, 120, 18, 78)
  //F
  f && ctx.fillRect(0, 20, 18, 78)
  //G
  g && ctx.fillRect(20, 100, 78, 18)
}

let segment = 0

const update = () => {
  ctx.clearRect(0,0,cv.width,cv.height)
  if (segment < segs.length) {
    sevenSegment(segs[segment])
    segment++
  } else return
  setTimeout(() => {
    requestAnimationFrame(update)
  }, 1000);
}

update()