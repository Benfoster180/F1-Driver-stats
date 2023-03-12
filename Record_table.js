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

function Display(data){
    DNF = 0 
    P1_baby = 0
    PO = 0

    Races_entered = json['MRData']['RaceTable']['Races'].length;
    for (let i = 0; i <json['MRData']['RaceTable']['Races'].length; i++){
   
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
    
    document.querySelector("#DNF").innerHTML = DNF;
    document.querySelector("#Race_Start").innerHTML = json['MRData']['RaceTable']['Races'].length;
    document.querySelector("#Podium").innerHTML = P1_baby;
    document.querySelector("#Race_Win").innerHTML = PO;

}

window.onload = async function onload(){
    var data = await Request_driver_data();
    Display(data)
}