const marks = 59;
const marksNumber = parseInt(marks);

if (isNaN(marksNumber) || marksNumber < 0 || marksNumber > 100) {
    console.log("Invalid input. Please enter a number between 0 and 100.");
  } else {
    let grade;
    
    if (marksNumber >= 80) {
      grade = 'A';
    } else if (marksNumber >= 60) {
      grade = 'B';
    } else if (marksNumber >= 50) {
      grade = 'C';
    } else if (marksNumber >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }
    
    console.log(`Grade: ${grade}`);
  }
  