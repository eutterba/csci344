// ignore this function for now. We'll go over it
// on Wednesday:
async function fetchCourses() {
  const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2025/spring/`;
  courseList = await fetch(url).then((response) => response.json());
  displayResults(courseList);
}

function displayResults(courses) {
  // your code here.
  const container = document.querySelector("#results");
  for (const course of courses) {
    //console.log(course.Title);
    if (course.Department.toLowerCase() === "csci") {
      const htmlSnippet = `
        <div class="course">
            <h3>${course.Title}</h3>
            <ul>
                <li>Instructor: ${course.Instructors[0].Name}</li>
                <li>Location: ${course.Location.FullLocation}</li>
                <li>Days: ${course.Days}</li>
            </ul>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", htmlSnippet);
    }
  }
  console.log(courses);
}
