import React from "react"
import Course from "../../components/Course"
import { coursesNavigationItems } from "../../config/navigation"
import { coursesFooterConfig } from "../../config/footer"
import { plonkCourseData } from "../../data/plonk-course"

export default function CoursePlonk() {
  return (
    <Course 
      courseData={plonkCourseData}
      navigationItems={coursesNavigationItems}
      footerConfig={coursesFooterConfig}
    />
  )
}
