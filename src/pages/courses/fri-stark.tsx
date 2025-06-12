import React from "react"
import Course from "../../components/Course"
import { coursesNavigationItems } from "../../config/navigation"
import { coursesFooterConfig } from "../../config/footer"
import { friStarkCourseData } from "../../data/fri-stark-course"

export default function CourseFriStark() {
  return (
    <Course 
      courseData={friStarkCourseData}
      navigationItems={coursesNavigationItems}
      footerConfig={coursesFooterConfig}
    />
  )
} 