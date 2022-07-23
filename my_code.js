const sum = (a, b) => {
    return a+b
}

const inOneHour = () => {
    const now = Date.now()
    const oneHourinMili = 1 * 60 * 60 * 1000
    return now + oneHourinMili
}

console.log(inOneHour())

module.exports = { sum, inOneHour }

console.log(sum(1, 2))