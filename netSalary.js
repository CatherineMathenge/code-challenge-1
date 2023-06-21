const basicSalary = parseFloat(prompt("Enter basic salary"));

  function calculatePayee(grossSalary) {
    const taxRate = 0.15; // 15%  Payee rate
    return grossSalary * taxRate;
  }
  
  function calculateNHIFDeductions(grossSalary) {
    const nhifRate = 0.02; // 2% NHIF rate
    return grossSalary * nhifRate;
  }
  
  function calculateNSSFDeductions(grossSalary) {
    const nssfRate = 0.06; // 6 % NSSF rate
    return grossSalary * nssfRate;
  }
  // Function to calculate net pay

  const grossSalary = basicSalary; // Assuming no benefits included
  const payee = calculatePayee(grossSalary);
  const nhifDeductions = calculateNHIFDeductions(grossSalary);
  const nssfDeductions = calculateNSSFDeductions(grossSalary);
  const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  

// Print salary details
console.log("Gross Salary:", grossSalary);
console.log("Payee (Tax):", payee);
console.log("NHIF Deductions:", nhifDeductions);
console.log("NSSF Deductions:", nssfDeductions);
console.log("Net Salary:", netSalary);