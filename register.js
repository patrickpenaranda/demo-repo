window.onload = async ()=>{
    let area = await fetch('barangay.json').then((data)=>{return data.json()}).then((completedata)=> {
        return Object.keys(completedata);
    })
    
    let select_city =  document.getElementById("city");
    let option_cities;
    for(let i = 0; i < area.length; i++) {
        option_cities = document.createElement("option");
        option_cities.setAttribute("id","city")
        option_cities.setAttribute("value",area[i])
        option_cities.innerText = area[i];
        select_city.appendChild(option_cities);
    }

    
    select_city.addEventListener("change",async (e)=>{
        
        
        if(select_city.value === ""){
            let areas_select = document.getElementById("barangay");
            let lngth = await areas_select.length;
            for(let i = 1; i<=lngth; i++) {
                
                areas_select.remove(areas_select.options[i]);

            }
        } 
        else {
            let barangay = await fetch('barangay.json').then((data)=>{return data.json()}).then((completedata)=> {
                return completedata[select_city.value];
            })
            let areas_select = document.getElementById("barangay");
            let lngth = await areas_select.length;
            for(let i = 1; i<=lngth; i++) {
                areas_select.remove(areas_select.options[i]);
            }
            let area_option = document.createElement("option");
            area_option.innerHTML = "--select your barangay--"
            areas_select.appendChild(area_option);

            for(let i = 0; i<barangay.length; i++) {
                let areas_select = document.getElementById("barangay");
                let area_option;
                area_option= document.createElement("option");
                area_option.setAttribute("id","barangays")
                area_option.innerHTML = barangay[i]
                areas_select.appendChild(area_option);
            }
        }
        
    })
    
    //Profile change
    let file_name = document.getElementById("file-name");
    file_name.onchange = ()=> {
        let profile = document.getElementById("profile");
        let file = file_name.files;
        if(file.length > 0) {
            let  fileReader = new FileReader();
            fileReader.onload = (e)=> {
                profile.src = e.target.result;
            }
            fileReader.readAsDataURL(file[0]);
        }
    }
    //Capslock values
    let last_input = document.getElementById("lname");
    last_input.addEventListener("keyup", (event)=> {
        event.target.value = event.target.value.toUpperCase(); 
        })
    let first_input = document.getElementById("fname");
    first_input.addEventListener("keyup", (event)=> {
        event.target.value = event.target.value.toUpperCase(); 
        })
    let middle_input = document.getElementById("mname");
    middle_input.addEventListener("keyup", (event)=> {
        event.target.value = event.target.value.toUpperCase(); 
        })

    //click h1
    let first_choices_div = document.getElementById("first-choices");
    first_choices_div.addEventListener("click",changehElement)

    let second_choices_div = document.getElementById("second-choices");
    second_choices_div.addEventListener("click",changehElement)

    let third_choices_div = document.getElementById("third-choices");
    third_choices_div.addEventListener("click",changehElement)

    let fourth_choices_div = document.getElementById("fourth-choices");
    fourth_choices_div.addEventListener("click",changehElement)


    function changehElement(element) {
        let target = element.target;
        for(let i = 0; i <= 2; i++) {
            try {
                if(target.parentElement.children[i].style.backgroundColor == "rgb(19, 134, 241)") {
                    target.parentElement.children[i].style.backgroundColor = "white"
                    target.parentElement.children[i].style.boxShadow = "0px 0px 5px rgba(110,110,110,.3)"
                    target.parentElement.children[i].style.color = "black"
                }
            } catch {
            }
            
        }

        if(target.classList == "h1") {
            target.style.backgroundColor = "rgb(19, 134, 241)";
            target.style.color = "white";
            target.style.boxShadow = "0px 0px 3px 3px rgb(12, 94, 246)"
        }
        
    }
}


