//------CHAPTER 43-48

//   Task 1

//1. Show an alert box on click on a link.

// answer: 
// function greet(){
//     alert("Hello dear! how was your day")
// }

//   Task 2

//2. Display some Mobile images in browser. On click on an
// image Show the message in alert to user.

// function welcome(){
//     alert("Thanks for purshacing from us")
// }

  //  Task 3

  // 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be
// deleted.

// answer:
// function remove(e){
//     e.parentNode.parentNode.remove()

// }

//  Task 4

//4. Display an image in browser.Change the picture on mouseover and set the first picture
//  on mouseout

// answer:
// on index.html

//   Task 4
//4.Show a counter in browser.Counter should increase on click on increase button and decrease on
//  click on decrease button.And show updated counter value in browser 

//answer:
// function increase() {
//     let value = document.getElementById("counter").innerHTML
//     value = parseInt(value)
//     console.log(value)
//     value = value + 1
//     document.getElementById("counter").innerHTML = value
// }
//  function decrease() {
//     let value = document.getElementById("counter").innerHTML
//     value = parseInt(value)
//     value = value - 1
//     document.getElementById("counter").innerHTML = value
// }