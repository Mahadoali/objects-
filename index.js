//You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: 
// featureName (string), isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), 
// and you must use a prototype method canAccess(userRole) to return true or false, a method toggleFeature(flag) to enable or disable the feature, 
// and simulate access attempts using if-else and switch statements for different roles

function FeatureToggle(featureName, isEnabled, userGroupAccess) {
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
  }
  
  FeatureToggle.prototype.canAccess = function(userRole) {
    return this.isEnabled && this.userGroupAccess.includes(userRole);
  };
  
  FeatureToggle.prototype.toggleFeature = function(flag) {
    this.isEnabled = flag;
  };
  
  const feature = new FeatureToggle("DarkMode", true, ["betaTesters", "admins"]);
  console.log("Feature Toggle Test:");
  ["guest", "betaTesters", "admins"].forEach(role => {
    switch (role) {
      case "admins":
      case "betaTesters":
        console.log(`${role} access:`, feature.canAccess(role));
        break;
      default:
        console.log(`${role} access:`, feature.canAccess(role));
    }
  });
  console.log();

  //In a freelancer time-tracking platform, create a TimeLog constructor function with properties:
  //  freelancerName (string), projectDetails (object with name and hourlyRate), and logs (array of objects with date, hoursWorked),
  //  then add prototype methods to calculate total earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.

  
  function TimeLog(freelancerName, projectDetails, logs) {
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = logs;
  }
  
  TimeLog.prototype.totalEarnings = function() {
    return this.logs.reduce((sum, log) => sum + log.hoursWorked * this.projectDetails.hourlyRate, 0);
  };
  
  TimeLog.prototype.filterByDateRange = function(start, end) {
    return this.logs.filter(log => {
      const date = new Date(log.date);
      return date >= new Date(start) && date <= new Date(end);
    });
  };
  
  TimeLog.prototype.exceedsWeeklyLimit = function() {
    const hours = this.logs.reduce((sum, log) => sum + log.hoursWorked, 0);
    if (hours > 40) {
      console.log("Weekly limit exceeded.");
      return true;
    } else {
      console.log("Weekly hours within limit.");
      return false;
    }
  };
  
  const log = new TimeLog("Ahmed", { name: "WebApp", hourlyRate: 20 }, [
    { date: "2025-05-01", hoursWorked: 10 },
    { date: "2025-05-02", hoursWorked: 15 },
    { date: "2025-05-03", hoursWorked: 20 }
  ]);
  
  console.log("Total earnings:", log.totalEarnings());
  console.log("Logs in range:", log.filterByDateRange("2025-05-01", "2025-05-02"));
  log.exceedsWeeklyLimit();
  console.log(log.exceedsWeeklyLimit());
  


  //You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email),
  //  items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, 
  // update order status based on payment, and categorize order urgency using switch and conditional statements.


  function Order(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
  }
  
  Order.prototype.totalCost = function() {
    return this.items.reduce((sum, i) => sum + i.quantity * i.unitPrice, 0);
  };
  
  Order.prototype.updateStatus = function(paid) {
    this.status = paid ? "Confirmed" : "Pending";
  };
  
  Order.prototype.urgencyCategory = function() {
    const count = this.items.length;
    switch (true) {
      case count > 5:
        console.log("Urgency: High");
        break;
      case count >= 3:
        console.log("Urgency: Medium");
        break;
      default:
        console.log("Urgency: Low");
    }
  };
  
  const order = new Order({ name: "John", email: "john@example.com" }, [
    { productName: "Mouse", quantity: 2, unitPrice: 10 },
    { productName: "Keyboard", quantity: 1, unitPrice: 25 },
    { productName: "Monitor", quantity: 1, unitPrice: 150 }
  ], "Pending");
  
  console.log("Order total:", order.totalCost());
  order.updateStatus(true);
  console.log("Order status:", order.status);
  order.urgencyCategory();
 




  //In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), 
  // performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings),
  //  then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.


 class Employee {
  constructor(id, name, performanceMetrics, feedback){
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics;
    this.feedback = feedback;
  }}
  
  Employee.prototype.averageScore = function() {
    const scores = Object.values(this.performanceMetrics);
    return scores.reduce((a, b) => a + b, 0) / scores.length;
  };
  
  Employee.prototype.performanceLevel = function() {
    const avg = this.averageScore();
    if (avg >= 4.5) {
      console.log("Performance: Excellent");
    } else if (avg >= 3.5) {
      console.log("Performance: Good");
    } else {
      console.log("Performance: Needs Improvement");
    }
  };
  
  Employee.prototype.addFeedback = function(fb) {
    if (fb.length > 5) {
      this.feedback.push(fb);
      console.log("Feedback added.");
    } else {
      console.log("Feedback too short.");
    }
  };
  
  const emp = new Employee(1, "Mahado", { communication: 4, efficiency: 5, reliability: 4.5 }, []);
  console.log("Average score:", emp.averageScore());
  emp.performanceLevel();
  emp.addFeedback("Great job on Q1 results!");
  console.log("Feedbacks:", emp.feedback);
  
  
  //Build a simple e-learning system where a Course class has properties: title (string),
  //  instructor (object with name and expertise), and students (array of objects with name and completionStatus), 
  // then add prototype methods to return names of students who completed the course, count enrolled students by expertise area, and
  //  use control flow to output different messages for instructors with more or less than 5 students.


  class Course{
    constructor(title, instructor, students) {
    this.title = title;
    this.instructor = instructor;
    this.students = students;
  }}
  
  Course.prototype.completedStudents = function() {
    return this.students.filter(s => s.completionStatus).map(s => s.name);
  };
  
  Course.prototype.countByExpertise = function(expertise) {
    return this.students.filter(s => this.instructor.expertise === expertise).length;
  };
  
  Course.prototype.instructorMessage = function() {
    const count = this.students.length;
    if (count >= 5) {
      console.log(`${this.instructor.name} has a full class.`);
    } else {
      console.log(`${this.instructor.name} can enroll more students.`);
    }
  };
  
  const course = new Course("JavaScript 101", { name: "Mr. Ali", expertise: "JavaScript" }, [
    { name: "Maryam", completionStatus: true },
    { name: "Safia", completionStatus: false },
    { name: "Meron", completionStatus: true }
  ]);
  
  console.log("Completed students:", course.completedStudents());
  console.log("Count by expertise:", course.countByExpertise("JavaScript"));
  course.instructorMessage();