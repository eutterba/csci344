// global variables tracking the user's preferences:
let searchTerm = "";
let openOnly = false;

const search = (ev) => {
  ev.preventDefault(); // overrides default button action

  // Set user's preferences (global variables) from the DOM:
  searchTerm = document.querySelector("#search_term").value;
  openOnly = document.querySelector("#is_open").checked;

  // Invoke the show matching courses function
  showMatchingCourses();
};

// Part 1.1a
const isClassEmpty = (course) => {
  // modify this to accurately apply the filter:
  return course.EnrollmentMax > course.EnrollmentCurrent;
};

// Part 1.1b
const doesTermMatch = (course) => {
  // modify this to accurately apply the filter:
  let match = false;
  if (course.Title.toLowerCase().includes(searchTerm.toLowerCase())) {
    match = true;
  }

  if (
    course.Instructors[0].Name.toLowerCase().includes(searchTerm.toLowerCase())
  ) {
    match = true;
  }

  return match;
};

// Part 1.2
const dataToHTML = (course) => {
  // modify this to be more detailed
  let seats = course.EnrollmentMax - course.EnrollmentCurrent;
  if (seats < 0) {
    seats = 0;
  }
  let status;
  if (isClassEmpty(course) === false) {
    status = `<i class="fa-solid fa-circle-xmark"></i> Closed`;
  } else {
    status = `<i class="fa-solid fa-circle-check"></i> Open`;
  }

  return `
        <section class="course">
            <h2>${course.Title}</h2>
            <p>
                ${status}  &bull; ${course.CRN} &bull; 
                Seats Available: ${seats}
            </p>
            <p>
                ${course.Days || "TBD"} &bull; 
                ${course.Location.FullLocation || "TBD"} &bull; 
                ${course.Hours} credit hour(s)
            </p>
            <p><strong>${course.Instructors[0].Name}</strong></p>
        </section>
    `;
};

// Part 2
const showMatchingCourses = () => {
  console.log(`Search term: ${searchTerm}`);
  console.log(`Only show open classes: ${openOnly}`);
  console.log(`Course data:`, courseList);

  // output all of the matching courses to the screen:

  const container = document.querySelector(".courses");
  container.innerHTML = null;

  let matches = courseList.filter(doesTermMatch);

  if (openOnly == true) {
    matches = matches.filter(isClassEmpty);
  }
  console.log(matches);

  matches.forEach((course) => {
    const snippet = dataToHTML(course);
    container.insertAdjacentHTML("beforeend", snippet);
  });
};
