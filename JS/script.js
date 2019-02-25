

/*
    IIF(immediate invoke function)

*/
 (function(){

    
                var button =  document.getElementById('app_submit');
                
            
                /*
                    ADDING RIPPLE EFFECT ON BUTTON CLICK
                */
                button.addEventListener('click',(btn)=>{
                // console.log("Hello");*/
                    var reppleDiv = document.getElementById('rippleDiv');
                        
                    reppleDiv.classList.add('ripple');


                /*
                    CALLING STRING HANDLER
                */
                checkString();



                /*
                    REMOVING RIPPLE EFFECT
                */
                setTimeout(()=>{
                        
                            reppleDiv.classList.remove('ripple');
                        
                    },600);
                });



                /*
                    CREATING ELEMENT IN RESULT SECTION
                */
                function createElmnt(message){
                        var element =  document.createElement("h3");
                        element.textContent = message;
                        return element;
                }



                /*
                    VALIDATING INPUT STRING 
                */
                function validatorInput(inputString){

                        var result = document.getElementById("app_result");
                        if(inputString.length < 6 ){
                                
                                    result.appendChild(createElmnt(inputString+" Failure Password must be at least 6 characters long"));
                        }
                        else if(inputString.length >   12){
                                    
                                    result.appendChild(createElmnt(inputString+" Failure Password must be less than 13 characters "));
                        }
                        else if(inputString.match(/[a-z]/) == null)
                            {
                                    result.appendChild(createElmnt(inputString+" Failure Password must contain at least one letter from a-z "));
                        }
                        else if(inputString.match(/[0-9]/) == null){
                                    result.appendChild(createElmnt(inputString+" Failure Password must contain at least one letter from 0-9"));
                        }
                        else if(inputString.match(/[A-Z]/) == null){
                                    result.appendChild(createElmnt(inputString+" Failure Password must contain at least one letter from A-Z"))
                        }
                        else if(inputString.match(/[*$_#@]/) == null){
                                    result.appendChild(createElmnt(inputString+" Failure Password must contain at least one letter from *$_#@"));
                        }
                        else if(inputString.match(/[!%)()]/) != null){
                                    result.appendChild(createElmnt(inputString + " Failure Password cannot containe !%)("));
                        }
                        else{
                            result.appendChild(createElmnt(inputString+" Success"));
                        }


                }
                

                /*
                    HANDLING INPUT STRING  
            */
                function  checkString(){

                    var inputBox =  document.getElementById("app_input");
                    var inputString =  inputBox.value;
                
                    // inputBox =  inputString.replace(/\s/g,"");
                    
                    var stringArray =  inputString.split(",");


                    for(var i=0;i<stringArray.length;i++){
                            validatorInput(stringArray[i]);
                    }
                    inputBox.value ="";
                    //validatorInput(inputString);
                    //console.log(inputString);

                }


}());