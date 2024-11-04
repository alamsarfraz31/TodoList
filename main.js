// Creating Empty Arayy 
const list = [];

// Get Local Storage 
list.push(localStorage.getItem("List"))

// Alert Body
const AlertBody = document.getElementById("alert");

// Alert Paragraph
const AlertPara = document.getElementById("pAlert");

// Add List Area 
const DivList = document.getElementById("ListDiv")

// Input Data
const InputData = document.getElementById("inputData");


// Add Task Function
const AddTaskFunction = function(){

    // Verify Field is not Empty
    if(InputData.value == "") {
        // Empty Field Alert
        alert("Please Input Task");
        return
    } else if (InputData.value.includes(",") == true) {

        // Stop Inserting Comma
        alert("This Input is not Allowed");
        return
    }
        
    else {
        console.log("Success");
    }

    // Add Task Alert
    AlertBody.style.visibility = "visible";
    AlertPara.innerHTML = "Task Added Successfully"

    // Hide Alert and Page Reload
    setTimeout(()=>{
        AlertBody.style.visibility = "hidden";
        location.reload(); 
    }, 3000)
    
    // Add to List
    list.push(InputData.value);

    // Set Local Storage Data 
    localStorage.setItem("List", list);

    // Set Input data Blank
    InputData.valu = "";
}


let newData = list[0];

if(newData != null) {
    let NewList = newData.split(",")
        for (i = 1; i < NewList.length; i++) {

            // Create Li Element
            const LiElement = document.createElement("li");

            // Create Input Check 
            const CheckInput = document.createElement("input");
            CheckInput.setAttribute("type", "checkbox");

            // // Create Input Field 
            const InputField = document.createElement("input");
            InputField.setAttribute("disabled", "disabled");

            // Create Edit Button 
            const EditButton = document.createElement("button");
            const EditButtonText = document.createTextNode("Edit");
            EditButton.appendChild(EditButtonText);

            // Create Save Button
            const SaveButton = document.createElement("Button");
            const SaveButtonText = document.createTextNode("Save");
            SaveButton.appendChild(SaveButtonText);
            SaveButton.style.display = "none"

            // Create Delete Button 
            const DeleteButton = document.createElement("button");
            const DeleteButtonText = document.createTextNode("Delete");
            DeleteButton.appendChild(DeleteButtonText);


            // Add Check Box in Li 
            LiElement.appendChild(CheckInput);

            // Add Input Field in Li
            LiElement.appendChild(InputField);

            // Add Input Filed Text
            InputField.value = NewList[i];

            // Add Id in Input Field
            InputField.id = i;

            // Add Edit Button in Li
            LiElement.appendChild(EditButton);

            // Add Save Button
            LiElement.appendChild(SaveButton);
        
            // Add Delete Button in Li
            LiElement.appendChild(DeleteButton);

            // Add Li in Div 
            DivList.appendChild(LiElement);

            // Create Edit Function
            EditButton.onclick = function() {

                // Set Edit Button Condition
                if(EditButton.innerHTML == "Edit") {

                    // Remove Diable Attribute from Input Field
                    InputField.removeAttribute("disabled", "disabled")

                    // Change Edit Button Text
                    EditButton.innerHTML = "Save";

                } else {

                    // Grab Index
                    let index = InputField.getAttribute("id");
                    
                    // Update New List
                    NewList[index] = InputField.value;

                    // Button Vale change to Edit
                    EditButton.innerHTML = "Edit";

                    // Set Local Stroage
                    localStorage.setItem("List", NewList);

                    // Set Attribute in Input Field
                    InputField.setAttribute("disabled", "disabled");

                    

                    // Show Alert
                    AlertBody.style.visibility = "visible"
                    AlertPara.innerHTML = "Task Edited Successfully";
                    
                    // Hide Alert
                    setTimeout(()=> {
                        AlertBody.style.visibility = "hidden";
                        location.reload();
                    }, 3000)

                }
                
            }

            // Delete Button Funtion
            DeleteButton.onclick = function () {

                // Grab InputField Index
                let index = InputField.getAttribute("id");

                // Delete Date from List
                NewList.splice(index, 1);

                // Set Local Storage
                localStorage.setItem("List", NewList);

                // Show Alert 
                AlertBody.style.visibility = "visible";
                AlertPara.innerHTML = "Task Deleted";

                // Hide Alert
                setTimeout(()=> {
                    AlertBody.style.visibility = "hidden";
                    location.reload();
                }, 3000)
                
            }

            // Complete Taks Function on Check Button
            CheckInput.onclick = function () {
                if(CheckInput.checked == true) {
                    // Show Alert
                    AlertBody.style.visibility = "visible";
                    AlertPara.innerHTML = InputField.value + " Task Completed"

                    // Hide Alert
                    setTimeout(()=> {
                        AlertBody.style.visibility = "hidden"
                    }, 3000)
                    
                } else {

                    // Show Alert
                    AlertBody.style.visibility = "visible";
                    AlertPara.innerHTML = InputField.value + " Task Pending";
                    
                    // Hide Alert
                    setTimeout(()=> {
                        AlertBody.style.visibility = "hidden";
                    }, 3000)
                }
                
            }

        }

}






