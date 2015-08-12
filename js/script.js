'use strict';

var DonutShop = function(location, minCustPerHr, maxCustPerHr, avgDonutsPerCust){
  this.location = location;
  this.minCustPerHr = minCustPerHr;
  this.maxCustPerHr = maxCustPerHr;
  this.avgDonutsPerCust = avgDonutsPerCust;
  this.hoursOp = 12;
  this.totalDonutsPerHr = [];
  this.sumDonutsPerDay = 0;
}

// DonutShop.prototype.generateRandom = function(){
//   for (var i = 0; i < this.hoursOp; i++){
//     this.totalDonutsPerHr[i] = Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust) * this.avgDonutsPerCust;
//   }
// }

//get the random number of customers w each locations min and max custs
DonutShop.prototype.getCustPerHr = function(){
  return Math.floor(Math.random() * (this.maxCustPerHr - this. minCustPerHr + 1)) + this.minCustPerHr;
}

//gets the amount of donuts sales for one hour
DonutShop.prototype.getDonutPerHr = function(){
  return this.avgDonutsPerCust * this.getCustPerHr();
}

//creates a string and fills in total donuts per day array w the total donuts
//sold each hour
DonutShop.prototype.getDonutsByTheHr = function(){
  for(var i = 0; i < 12; i++){
    this.totalDonutsPerHr[i] = this.getDonutPerHr();
  }
}

//gets the sum of the donut totals in the array
DonutShop.prototype.hourlyTotal = function(){
  for(var i = 0; i < this.totalDonutsPerHr.length; i++){
    this.sumDonutsPerDay += this.totalDonutsPerHr[i];
  }
}

//this method fills in the table
DonutShop.prototype.render = function(){
  downtown.getDonutsByTheHr();
  capitolHill.getDonutsByTheHr();
  southLakeUnion.getDonutsByTheHr();
  wedgewood.getDonutsByTheHr();
  ballard.getDonutsByTheHr();

    var table = document.getElementById("donut_table"); //append name
    var tableRow = document.createElement("tr"); // creates new table row
    tableRow.innerHTML = this.location; //takes location and stages in tableRow variable
    table.appendChild(tableRow); //puts location into table

    for(var i = 0; i < this.totalDonutsPerHr.length; i++){  //append hrs
      var tableData = document.createElement("td"); //creates tables data
      tableData.innerHTML = this.totalDonutsPerHr[i]; //this takes arraay w donut total per hr and sates in tableData var
      tableRow.appendChild(tableData); //puts tableData into cells
      this.sumDonutsPerDay += this.totalDonutsPerHr[i];
    }

    var total = document.createElement("td"); //append total...this line creates new table data
    total.innerHTML = this.sumDonutsPerDay; //takes sumDonutsPerDay and stages in the variable total
    tableRow.appendChild(total); //puts total in cells
  }

var downtown = new DonutShop('Downtown', 8, 43, 5);
var capitolHill = new DonutShop('Capitol Hill', 4, 37, 2);
var southLakeUnion = new DonutShop('South Lake Union', 9, 23, 6);
var wedgewood = new DonutShop('Wedgewood', 2, 28, 1);
var ballard = new DonutShop('Ballard', 8, 58, 4);

downtown.render();
capitolHill.render();
southLakeUnion.render();
wedgewood.render();
ballard.render();

var newShopButton = document.getElementById("add_new_shop");

var handleShopSubmit = function(){
var newShopForm = document.getElementById("add_new_form");
var newLocation = document.getElementById("location_name").value;
var newMinCust = parseInt(document.getElementById("min_cust").value);
var newMaxCust = document.getElementById("max_cust").value;
var newAvgDonuts = document.getElementById("avg_donuts").value;
var newShop = new DonutShop(newLocation, newMinCust, newMaxCust, newAvgDonuts);

    newShop.getDonutsByTheHr();
    newShop.render();

}

newShopButton.addEventListener("click", handleShopSubmit);
