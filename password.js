function CVpassword()
{
    var s ="";
    
    while (s!= "1234")
    {
        s=prompt("please enter your password");
        if (s=="1234")
        {
            window.location.href="correct.html";
    
        }
        else
        {
            alert("Incorrect password-Try again");
    
        }
    }
} 