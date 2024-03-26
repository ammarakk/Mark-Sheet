#! /usr/bin/env node 

import inquirer from "inquirer";
const answer=await inquirer.prompt([
    { message:"Enter maths marks    :",type:"number",name:"num1"},
    { message:"Enter physics marks  :",type:"number",name:"num2"},
    { message:"Enter english marks  :",type:"number",name:"num3"},
    { message:"Enter urdu marks     :",type:"number",name:"num4"},
    { message:"Enter islamiat marks :",type:"number",name:"num5"},

   ]);
    console.log("  ==========================");
    console.log("        MARKS SHEET      ");
    console.log("  ==========================");
    console.log("  MATHS MARKS    : ",answer.num1);
    console.log("  PHYSICS MARKS  : ",answer.num2);
    console.log("  ENGLISH MARKS  : ",answer.num3);
    console.log("  URDU MARKS     : ",answer.num4);
    console.log("  ISLAMIAT MARKS : ",answer.num5);
    const markobtain = answer.num1+answer.num2+answer.num3+answer.num4+answer.num5;
    console.log("  MARKS OBTAINED :  " +  markobtain);
    const totalmarks =500 ;
    console.log("  TOTAL MARKS    :  " + totalmarks);
    const percentage = (markobtain / totalmarks * 100);
    console.log("  PERCENTAGE     : ",(percentage).toFixed(1),"%");
     
    
   //conditional statement
     if( percentage >= 85 ){
      console.log("   GRADE         :  A+ ");
   } else if(percentage  >= 75){
      console.log( "  GRADE         :  A  ");
   } else if (percentage  >= 65){
      console.log("  GRADE          :  B  ");
   } else if(percentage  >= 55){
      console.log("  GRADE          :  C  ");
   } else if(percentage  >= 45){
      console.log("  GRADE          :  D  ");
   }   else if(percentage  >=35){
      console.log("  GRADE          :  E  ");
   } else{
      console.log("                 : FAIL ");
   };
   
   console.log("  ==========================");

