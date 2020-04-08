import React from 'react'
import LessonPage from '../../components/LessonPage'
import Chart from '../../components/Chart04'
import instruction from './instruction.md'

const convertData = (input) => {
  // const id = []
  // input.map(({ species }) => {
  //   if (!id.includes(species)) {
  //     id.push(species)
  //   }
  // })
  // const data = id.map((item) => ({ id: item, data: [] }))
  // input.map((item) => {
  //   for (const d of data) {
  //     if (d.id === item.species) {
  //       d.data.push({ x: item.sepalLength, y: item.petalWidth })
  //     }
  //   }
  // })
  const species = Array.from(new Set(input.map(({ species }) => species)))
  return species.map((species) => ({
    id: species,
    data: input
      .filter((item) => item.species === species)
      .map(({ sepalLength: x, petalWidth: y }) => ({ x, y })),
  })) // ここを作りましょう！
}

const Lesson = () => {
  return (
    <LessonPage
      answerUrl='/answer04'
      dataUrl='data/iris.json'
      convertData={convertData}
      instruction={instruction}
      title='Lesson 04'
      Chart={Chart}
    />
  )
}

export default Lesson
