

async function Request_driver_data() { //Command collects data on the driver
    let url = ("http://ergast.com/api/f1/drivers/"+document.getElementById("textbox_1").value+"/results.json?limit=800") //Concats the users requested driver with the main url
    let res = await fetch(url); //Calls the API
    if (res.ok) { //Checks for a sucessful API call
        window.value =  json = await res.json(); //return data as json
        return json;
    } else {
        return `HTTP error: ${res.status}`; //Error catcher
    }
};

function Display(){
    for (let i = 0; i < json['MRData']['RaceTable']['Races'].length; i++){
        const div_tab = document.createElement('div');
        div_tab.id = 'div1';
        const Race_name_year = div_tab.appendChild(document.createElement(`p`));
        Race_name_year.classList.add(`name`);
        Race_name_year.textContent = json['MRData']['RaceTable']['Races'][i]['raceName'] + " " + json['MRData']['RaceTable']['Races'][i]['season'] 

        const Round = div_tab.appendChild(document.createElement(`p`));
        Round.classList.add(`round`);
        date = json['MRData']['RaceTable']['Races'][i]['date']
        var today = date.slice(8,10) + "/" + date.slice(5,7)+ "/" + date.slice(0,4);
        Round.textContent = "Round " + (json['MRData']['RaceTable']['Races'][i]['round'] + " "+ today)

        const Postion = div_tab.appendChild(document.createElement(`p`));
        if (Number(json['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 1){
            Postion.classList.add(`P1`);
        }
        if (Number(json['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 2){
            Postion.classList.add(`P2`);
        }
        if (Number(json['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 3){
            Postion.classList.add(`P3`);
        }
        Postion.textContent = "Postion at the end of the race: "+json['MRData']['RaceTable']['Races'][i]['Results'][0]['position'] + " " + json['MRData']['RaceTable']['Races'][i]['Results'][0]['status'] 


        try{
        const AverageSpeed = div_tab.appendChild(document.createElement(`p`));
        AverageSpeed.textContent =  "Average Speed " + json['MRData']['RaceTable']['Races'][i]['Results'][0]['FastestLap']['AverageSpeed']['speed'] + " KPH"
        }

        catch{
            console.log(" ")
        }
        
        try{
        const FastestLap = div_tab.appendChild(document.createElement(`p`));
        FastestLap.textContent = "Drivers Quicket lap "+ json['MRData']['RaceTable']['Races'][i]['Results'][0]['FastestLap']['Time']['time']
        }
        
        catch{
            console.log(" ")
        }



        document.body.appendChild(div_tab);
        

    }
}