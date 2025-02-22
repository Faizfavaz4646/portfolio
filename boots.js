function sendMail(){
    var params ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID ="service_iur0c4i"
    const templateID ="template_6wvvqxx"

    emailjs
    .send(serviceID, templateID,params)
    .then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("youe message send successfully");

    })
    .catch((err) => console.log(err));
}