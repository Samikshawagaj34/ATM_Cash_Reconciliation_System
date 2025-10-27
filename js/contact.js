function Submit(){
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
    const contactfrom = { name,email,message };
    

    localStorage.setItem('contactfrom', JSON.stringify(contactfrom));
     alert("Message submitted successfully");
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('message').value = "";
    }