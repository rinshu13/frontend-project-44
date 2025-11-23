export const getRandomInt = (min, max) => {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled
}

export const isEven = num => num % 2 === 0

export const getGcd = (a, b) => {
  if (b === 0) {
    return a
  }
  return getGcd(b, a % b)
}

export const isPrime = (num) => {
  if (num < 2) {
    return false
  }
  if (num === 2) {
    return true
  }
  if (isEven(num)) {
    return false
  }
  const limit = Math.floor(Math.sqrt(num))
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
