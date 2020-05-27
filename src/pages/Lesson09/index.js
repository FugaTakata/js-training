import React from 'react'
import LessonPage from '../../components/LessonPage'
import Chart from '../../components/Chart09'
import instruction from './instruction.md'

const convertData = (input) => {
  return { children: [] } // ここを作りましょう！
}

// const convertData = (input) => {
//   const ministries = Array.from(new Set(input.map(({ ministry }) => ministry)))
//   const bureaus = Array.from(new Set(input.map(({ bureau }) => bureau)))
//   const departments = Array.from(
//     new Set(input.map(({ department }) => department))
//   )

//   const count = {}
//   for (const ministry of ministries) {
//     count[ministry] = {}
//     for (const bureau of bureaus) {
//       count[ministry][bureau] = {}
//       for (const department of departments) {
//         count[ministry][bureau][department] = 0
//       }
//       count[ministry][bureau]['その他'] = 0
//     }
//     count[ministry]['その他'] = 0
//   }

//   for (const { ministry, bureau, department } of input) {
//     count[ministry][bureau][department] += 1
//   }

//   for (const ministry of ministries) {
//     for (const bureau of bureaus) {
//       const bureauCount = input.filter(
//         (item) => item.ministry === ministry && item.bureau === bureau
//       ).length
//       if (bureauCount < input.length / 100) {
//         count[ministry]['その他'] += bureauCount
//         delete count[ministry][bureau]
//         continue
//       }
//       for (const department of departments) {
//         const departmentCount = input.filter(
//           (item) =>
//             item.ministry === ministry &&
//             item.bureau === bureau &&
//             item.department === department
//         ).length
//         if (departmentCount < input.length / 100) {
//           count[ministry][bureau]['その他'] += departmentCount
//           delete count[ministry][bureau][department]
//         }
//       }
//     }
//   }

//   return {
//     children: Object.keys(count).map((ministry) => {
//       return {
//         name: ministry,
//         children: Object.keys(count[ministry]).map((bureau) => {
//           if (bureau === 'その他') {
//             return {
//               name: bureau,
//               count: count[ministry][bureau],
//             }
//           }
//           return {
//             name: bureau,
//             children: Object.keys(count[ministry][bureau]).map((department) => {
//               return {
//                 name: department,
//                 count: count[ministry][bureau][department],
//               }
//             }),
//           }
//         }),
//       }
//     }),
//   } // ここを作りましょう！
// }

//answer09/index.js
// const convertData = (input) => {
//   const ratio = 0.01
//   const ministryCount = {}
//   const ministries = Array.from(
//     new Set(input.map(({ ministry }) => ministry))
//   ).map((ministry) => {
//     const ministryProjects = input.filter((item) => item.ministry === ministry)
//     const bureauCount = {}
//     const bureaus = Array.from(
//       new Set(ministryProjects.map(({ bureau }) => bureau))
//     )
//       .map((bureau) => {
//         const bureauProjects = ministryProjects.filter(
//           (item) => item.bureau === bureau
//         )
//         const departments = Array.from(
//           new Set(bureauProjects.map(({ department }) => department))
//         )
//           .map((department) => {
//             const departmentProjects = bureauProjects.filter(
//               (item) => item.department === department
//             )
//             return {
//               name: department,
//               count: departmentProjects.length,
//             }
//           })
//           .filter(({ count }) => count / input.length >= ratio)
//         departments.sort((item1, item2) => item2.count - item1.count)
//         departments.push({
//           name: 'その他',
//           count:
//             bureauProjects.length -
//             departments.reduce((a, { count }) => a + count, 0),
//         })
//         bureauCount[bureau] = bureauProjects.length
//         return {
//           name: bureau,
//           children: departments,
//         }
//       })
//       .filter(({ name }) => bureauCount[name] / input.length >= ratio)
//     bureaus.sort(
//       (item1, item2) => bureauCount[item2.name] - bureauCount[item1.name]
//     )
//     bureaus.push({
//       name: 'その他',
//       count:
//         ministryProjects.length -
//         bureaus.reduce((a, { name }) => a + bureauCount[name], 0),
//     })
//     ministryCount[ministry] = ministryProjects.length
//     return {
//       name: ministry,
//       children: bureaus,
//     }
//   })
//   ministries.sort(
//     (item1, item2) => ministryCount[item2.name] - ministryCount[item1.name]
//   )
//   console.log(ministries)
//   return {
//     children: ministries,
//   }
// }

//example
// const convertData = (input) => {
//   const ratio = 0.01;
//   const ministries = Array.from(
//     new Set(input.map(({ ministry }) => ministry))
//   ).map((ministry) => {
//     const ministryProjects = input.filter((item) => item.ministry === ministry);
//     const bureauCount = {};
//     const bureaus = Array.from(
//       new Set(ministryProjects.map(({ bureau }) => bureau))
//     )
//       .map((bureau) => {
//         const bureauProjects = ministryProjects.filter(
//           (item) => item.bureau === bureau
//         );
//         const departments = Array.from(
//           new Set(bureauProjects.map(({ department }) => department))
//         )
//           .map((department) => {
//             const departmentProjects = bureauProjects.filter(
//               (item) => item.department === department
//             );
//             return {
//               name: department,
//               count: departmentProjects.length,
//             };
//           })
//           .filter(({ count }) => count / input.length >= ratio);
//         departments.sort((item1, item2) => item2.count - item1.count);
//         departments.push({
//           name: "その他",
//           count:
//             bureauProjects.length -
//             departments.reduce((a, { count }) => a + count, 0),
//         });
//         bureauCount[bureau] = 0;
//         for (const { count } of departments) {
//           bureauCount[bureau] += count;
//         }
//         return {
//           name: bureau,
//           children: departments,
//         };
//       })
//       .filter(({ name }) => bureauCount[name] / input.length >= ratio);
//     bureaus.sort(
//       (item1, item2) => bureauCount[item2.name] - bureauCount[item1.name]
//     );
//     bureaus.push({
//       name: "その他",
//       count:
//         ministryProjects.length -
//         bureaus.reduce((a, { name }) => a + bureauCount[name], 0),
//     });
//     return {
//       name: ministry,
//       children: bureaus,
//     };
//   });
//   console.log(ministries)
//   return {
//     children: ministries,
//   };
// };

const Lesson = () => {
  return (
    <LessonPage
      answerUrl='/answer09'
      convertData={convertData}
      dataUrl='data/judgit-departments.json'
      instruction={instruction}
      title='Lesson 09'
      Chart={Chart}
    />
  )
}

export default Lesson
