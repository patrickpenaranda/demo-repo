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
}

