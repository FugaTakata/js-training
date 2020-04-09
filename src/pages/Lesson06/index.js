import React from 'react'
import LessonPage from '../../components/LessonPage'
import Chart from '../../components/Chart06'
import instruction from './instruction.md'

const convertData = (input) => {
  const genders = Array.from(new Set(input.map(({ gender }) => gender)))
  const colors = {
    男性: 'blue',
    女性: 'red',
  }
  return input.map(({ gender, x: weight, y: height }) => ({
    color: colors[gender],
    gender,
    bmi: weight / (height / 100) ** 2,
    weight,
    height,
  })) // ここを作りましょう！
}

const Lesson = () => {
  return (
    <LessonPage
      answerUrl='/answer06'
      convertData={convertData}
      dataUrl='data/size-and-weight.json'
      instruction={instruction}
      title='Lesson 06'
      Chart={Chart}
    />
  )
}

export default Lesson
