import React from 'react'
import LessonPage from '../../components/LessonPage'
import Chart from '../../components/Chart07'
import instruction from './instruction.md'

// const convertData = (input) => {
//   const tweetTypes = ['tweet', 'retweet']
//   const startDate = new Date(
//     Math.min(
//       ...input.map(({ createdAt }) => {
//         // 32400000ms = 9h
//         const JST = new Date(new Date(createdAt).getTime() + 32400000)
//         // return `${JST.getFullYear()}-${JST.getMonth() + 1}-${JST.getDate()}`
//         return new Date(
//           `${JST.getFullYear()}-${JST.getMonth() + 1}-${JST.getDate()}`
//         ).getTime()
//       })
//     )
//   )
//   const endDate = new Date(
//     Math.max(
//       ...input.map(({ createdAt }) => {
//         // 32400000ms = 9h
//         const JST = new Date(new Date(createdAt).getTime() + 32400000)
//         // return `${JST.getFullYear()}-${JST.getMonth() + 1}-${JST.getDate()}`
//         return new Date(
//           `${JST.getFullYear()}-${JST.getMonth() + 1}-${JST.getDate()}`
//         ).getTime()
//       })
//     )
//   )
//   // 86400000 = 1day
//   const dates = []
//   for (let d = startDate.getTime(); d <= endDate.getTime(); d += 86400000) {
//     const date = new Date(d)
//     dates.push(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
//   }
//   return tweetTypes.map((tweetType) => {
//     return {
//       id: tweetType,
//       data: dates.map((date) => {
//         return {
//           x: date,
//           y: input.filter(({ createdAt, isRetweet }) => {
//             const JST = new Date(new Date(createdAt).getTime() + 32400000)
//             return (
//               date ===
//                 `${JST.getFullYear()}-${JST.getMonth() + 1}-${JST.getDate()}` &&
//               tweetType === (isRetweet ? 'retweet' : 'tweet')
//             )
//           }).length,
//         }
//       }),
//     }
//   }) // ここを作りましょう！
// }

const convertData = (input) => {
  for (const item of input) {
    const d = new Date(`${item.createdAt} UTC`)
    const year = d.getFullYear()
    const month = `${d.getMonth() + 1}`.padStart(2, '0')
    const date = `${d.getDate()}`.padStart(2, '0')
    item.createdAt = `${year}-${month}-${date}`
  }
  const dates = Array.from(new Set(input.map(({ createdAt }) => createdAt)))
  dates.sort()
  const count = { tweet: {}, retweet: {} }
  for (const d of dates) {
    count.tweet[d] = 0
    count.retweet[d] = 0
  }
  for (const { createdAt, isRetweet } of input) {
    if (isRetweet) {
      count.retweet[createdAt] += 1
    } else {
      count.tweet[createdAt] += 1
    }
  }
  return ['tweet', 'retweet'].map((key) => {
    return {
      id: key,
      date: dates.map((d) => {
        return {
          x: d,
          y: count[key][d],
        }
      }),
    }
  })
}

const Lesson = () => {
  return (
    <LessonPage
      answerUrl='/answer07'
      convertData={convertData}
      dataUrl='data/covid19-tweets.json'
      instruction={instruction}
      title='Lesson 07'
      Chart={Chart}
    />
  )
}

export default Lesson
