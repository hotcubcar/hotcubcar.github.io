function validateForm() {
    //Access the name and email input
    var name = document.forms['main-contact-form']['name'].value;
    var email = document.forms['main-contact-form']['email'].value;
    var subject = document.forms['main-contact-form']['subject'].value;
    var message = document.forms['main-contact-form']['message'].value;


    //Access error message spans
    var nameVal = document.getElementById('nameVal');
    var emailVal = document.getElementById('emailVal');
    //var subjectVal = document.getElementById('subjectVal');
    var messageVal = document.getElementById('messageVal');

    //Declare a Regular Expression Object for email testing
    var emailRegEx = new RegExp(/^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z0-9.-]+$/i)
    var nameRegEx = new RegExp(/^([a-zA-Z.\s\-']{2,50})$/)
    


    //MINI LAB
    //Add required validation for subject and message
    //Add regular expression validation to insure the user can oNLY
    //enter letters (a-z) into the name field



    //Test all of our conditions (including checking a valid email)
    if (!nameRegEx.test(name) || !emailRegEx.test(email) || subject.length == 0 || message.length == 0) {
        //Specific error messages
        
        if (!nameRegEx.test(name)) {
            nameVal.textContent = "* Enter a valid name"
        }
        else {
            nameVal.textContent = "";
        }


        if (!emailRegEx.test(email)) {
            emailVal.textContent = "* Enter be a valid email";
        }
        else {
            emailVal.textContent = "";
        }

        if (subject.length == 0) {
            subject = "No Subject";
        }

        if (message.length == 0) {
            messageVal.textContent = "* Enter a message";
        }
        else {
            messageVal.textContent = "";
        }




        //Stop a form's default action
        event.preventDefault();

    }
}