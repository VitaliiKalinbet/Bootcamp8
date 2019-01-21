var myHeaders = new Headers({
    "Content-Type": "application/json",
  });

var myInit = { method: 'POST',
               headers: myHeaders,
               body: JSON.stringify({artist: "Metalica"})
}

fetch('localhost:3000', myInit).then(function(response) {
  return response.blob();
}).then(function(myBlob) {
  var objectURL = URL.createObjectURL(myBlob);
  myImage.src = objectURL;
});