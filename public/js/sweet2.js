function sweetalertclick2() {
  console.log(document.getElementById("sendButton").value);
        if (
        document.getElementById("tFrom").value != null &&
        document.getElementById("tTo").value != null &&
        document.getElementById("floatingAmount").value != null &&
        document.getElementById("floatingAmount").value >0 &&
        document.getElementById("checkboxTransaction").checked != false &&
        document.getElementById("tFrom").value !=document.getElementById("tTo").value
      ) {
        Swal.fire("Great!", "Transaction made successfully", "success");
        setTimeout(function () {
          window.location = "/thistory.ejs";
        }, 1500);
      }else if(document.getElementById("floatingAmount").value <0 ){
        Swal.fire({
            icon: 'error',
            title: 'Kindly re-enter proper amount',
            text: 'Transferrable amount should be positive value!',
            
          })
         
      }else if (document.getElementById("tFrom").value===document.getElementById("tTo").value&&document.getElementById("tFrom").value != "-1"&&document.getElementById("tTo").value === "-1"){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<h6>You cannot make transaction to your own account!</h6>'
        })
        
       
      }else{
        console.log((document.getElementById("tFrom").value));
        Swal.fire({
          icon: 'error',
          title: 'Sorry :(',
          text: 'Invalid Transaction!',
          
        })
       
      }
}