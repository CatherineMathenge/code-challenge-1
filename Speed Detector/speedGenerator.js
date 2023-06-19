const speed = 80;
const speedNumber = parseInt(speed);

if (isNaN(speedNumber) || speedNumber < 0 ) {
    console.log("Invalid input. Please enter a number greater than 0.");
  } else {
    let print;
    
    if (speed <=70) {
      print= 'Ok';
    } else if (speed ===75) {
      print = 'Points: 1';
    } else if (speed === 80) {
      print = 'Points: 2';
    } else if (speed === 85) {
      print = 'Points: 3';
    } else if (speed === 90) {
      print = 'Points: 4';
    } else if (speed ===95) {
        print = 'Points: 5';
    } else if (speed ===100) {
        print = 'Points: 6';
    } else if (speed ===105) {
        print = 'Points: 7';
    } else if (speed ===110) {
        print = 'Points: 8';
    }  else if (speed ===115) {
        print = 'Points: 9';
    } else if (speed ===120){
        print = 'Points: 10';
    }else if (speed ===125) {
        print = 'Points: 11';
    }else if (speed ===130) {
        print = 'Points: 12';
    } else {
        print = 'License suspended';
    }
    console.log(`Print: ${print}`);
  }