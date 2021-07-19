function sweetalertclick() {
  
  if (
    document.getElementById("floatingName").value != null &&
    document.getElementById("floatingEmail").value != null &&
    document.getElementById("floatingBalance").value != null &&
    document.getElementById("floatingBalance").value >0 &&
    document.getElementById("checkbox").checked != false
  ) {
    Swal.fire("Great!", "You have registered successfully", "success");
    setTimeout(function () {
      window.location = "/";
    }, 1500);
  }else if(document.getElementById("floatingBalance").value <0){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<h6>You may have filled incorrect details?</h6>'
      })
      setTimeout(function () {
        window.location = "/cUser.ejs";
      }, 1500);
  }
}