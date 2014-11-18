
function chooseLogin(user) {
  console.log(user);
  if(user === "prof" || user === "professor" 
    || user === "Professor" || user === "Amyot"
    || user === "Prof") {100
    window.location.href = 'professor.html';
  } else if(user === "admin" || user === "adminstrator"
    || user === "Admin" || user === "Adminstrator" 
    || user === "administration" || user === "Administration") {
    window.location.href = 'admin.html';
  } else {
    window.location.href = 'applicant-profile.html';
  }
}
