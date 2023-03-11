async function Request_driver_data() { //Command collects data on the driver
    let url = ("https://ergast.com/api/f1/drivers/Leclerc/results.json?limit=800") //Concats the users requested driver with the main url
    let res = await fetch(url); //Calls the API
    if (res.ok) { //Checks for a sucessful API call
        window.value =  json = await res.json(); //return data as json
        return json;
    } else {
        return `HTTP error: ${res.status}`; //Error catcher
    }
};

function Display(){
    DNF = 0 
    P1_baby = 0
    PO = 0
    Races_entered = json['MRData']['RaceTable']['Races'].length;
    for (let i = 0; i <json['MRData']['RaceTable']['Races'].length; i++){
    console.log(json['MRData']['RaceTable']['Races'][i]['season'])
    if ((json['MRData']['RaceTable']['Races'][i]['Results'][0]['status']) != "Finished"){
        DNF = DNF + 1
    }
    if (Number(json['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 1){
        P1_baby  = P1_baby + 1 
    }
    if (Number(json['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 2){
        PO = PO + 1
    }
    if (Number(json['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 3){
        PO = PO + 1
    }
    }
    

    const div_tab = document.createElement('div');
    const DNF_Count = div_tab.appendChild(document.createElement(`p`));
    DNF_Count.textContent = "DNF " + DNF

    const Race_Starts  = div_tab.appendChild(document.createElement(`p`));
    Race_Starts.textContent = "Race Starts " +json['MRData']['RaceTable']['Races'].length;

    const P1  = div_tab.appendChild(document.createElement(`p`));
    P1.textContent = "Race Wuns " +P1_baby;

    const podium  = div_tab.appendChild(document.createElement(`p`));
    podium.textContent = "Podium " +PO  

    document.body.appendChild(div_tab);
}