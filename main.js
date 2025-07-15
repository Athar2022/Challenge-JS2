//Create two employee objects
let employee1 = {
  fullName: 'Ali Saber',
  monthlySalary: 8000,
  department: {
    main: 'IT',
    sub: 'developer'
  },
  calculateSalary: function () {
    return this.monthlySalary * 12;
  }
};

let employee2 = {
  fullName: 'Sara Ahmed',
  monthlySalary: 10000,
  department: {
    main: 'HR',
    sub: 'Recruitment'
  },
  calculateSalary: function () {
    return this.monthlySalary * 12;
  }
};

//Create a function called 'addBonus'
function addBonus(bonusPercentage) {
  let annualSalary = this.calculateSalary();
  let bonus = annualSalary * bonusPercentage;
  let total = annualSalary + bonus;
  return total;
}

let employee1Bonus = addBonus.call(employee1, 0.10);
console.log(`Employee : ${employee1.fullName} work in department of: ${employee1.department.main} as a ${employee1.department.sub}`);
console.log(`Have salary of : ${employee1.monthlySalary}`);
console.log(`and Annual Salary of : ${employee1.calculateSalary()}`);

//Create another function called 'addBonusAndTip'
function addBonusAndTip(bonusPercentage, tip) {
  let annualSalary = this.calculateSalary();
  let bonus = annualSalary * bonusPercentage;
  let total = annualSalary + bonus + tip;
  return total;
}

const employee2Total = addBonusAndTip.apply(employee2, [0.20, 10000]);

//Function to print employee info
function printEmployeeInfo() {
  console.log(`Employee : ${this.fullName} work in department of: ${this.department.main} as a ${this.department.sub}`);
  console.log(`Have salary of : ${this.monthlySalary}`);
  console.log(`and Annual Salary of : ${this.calculateSalary()}`);
}

let boundPrint = printEmployeeInfo.bind(employee1);
boundPrint();

let {
  fullName,
  monthlySalary: baseSalary,
  department: {
    main: mainDept,
    sub: subDept
  }
} = employee2;

console.log(`Full Name: ${fullName}`);
console.log(`Main Department: ${mainDept}`);
console.log(`Sub Department: ${subDept}`);
console.log(`Base Salary: ${baseSalary}`);
console.log(`and Annual Salary and Tip of): ${employee2Total}`);