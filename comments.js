let comments = [];
// let userComment;

function finishTask(sender) {
  sender.parentElement.classList.toggle("done");
}
function deleteComment() {
  optionsString = "";
}

function sendComment() {
  let userComment = checkSpam();
  comments.push(userComment);
  generateComments();
  console.log(comments);
}

function checkSpam() {
  let checkedSpam = document.getElementById("newComment").value;

  checkedSpam = checkedSpam.replace(/viagra/gi, "***");
  console.log(checkedSpam);

  checkedSpam = checkedSpam.replace(/xxx/gi, "***");
  console.log(checkedSpam);

  let bitchSpam = checkedSpam.split(" ");

  for (let i = 0; i < bitchSpam.length; i++) {
    if (bitchSpam[i] === "bitch")
      bitchSpam[i] = bitchSpam[i].replace(/i/gi, "*");

    console.log(bitchSpam);
  }
  bitchSpam = bitchSpam.join(" ");
  return bitchSpam;
}

function generateComments() {
  let optionsString = "";
  for (let comment of comments) {
    // optionsString += `<div><input type="checkbox" onchange="finishTask(this)"><span>${comment}</span><button onchange="deleteComment()">Delete</button></div>`;
    optionsString += `<div><span>${comment}</span></div>`;
  }

  document.getElementById("container").innerHTML = optionsString;
}

document.addEventListener("DOMContentLoaded", function () {
  generateComments();
});
