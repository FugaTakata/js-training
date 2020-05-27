import React from 'react'
import LessonPage from '../../components/LessonPage'
import Chart from '../../components/Chart05'
import instruction from './instruction.md'

const convertData = (input) => {
  const height = Array.from(new Set(input.map(({ y }) => Math.round(y))))
  for (let h = Math.min(...height); h < Math.max(...height); h++) {
    if (!height.includes(h)) {
      height.push(h)
    }
  }
  return height.sort().map((height) => ({
    bin: height.toString(),
    男性: input
      .filter((item) => item.gender === '男性')
      .filter(({ y }) => Math.round(y) === height).length,
    女性: input
      .filter((item) => item.gender === '女性')
      .filter(({ y }) => Math.round(y) === height).length,
  })) // ここを作りましょう！


  // const genders = Array.from(new Set(input.map(({ gender }) => gender)))
  // const min = Math.round(Math.min(...input.map(({ y }) => y)))
  // const max = Math.round(Math.max(...input.map(({ y }) => y)))
  // const bins = Array.from({ length: max - min + 1 }).map((_, index) => {
  //   const obj = {
  //     bin: (min + index).toString(),
  //   }
  //   for (const gender of genders) {
  //     obj[gender] = 0
  //   }
  //   return obj
  // })
  // for (const { y, gender } of input) {
  //   const index = Math.round(y) - min
  //   bins[index][gender] += 1
  // }
  // return bins
}

const Lesson = () => {
  return (
    <LessonPage
      answerUrl='/answer05'
      convertData={convertData}
      dataUrl='data/size-and-weight.json'
      instruction={instruction}
      title='Lesson 05'
      Chart={Chart}
    />
  )
}

export default Lesson
