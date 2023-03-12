

window.onload = onload();

async function leclerc_race_history(){
    let Api_url = ("https://ergast.com/api/f1/drivers/Leclerc/results.json?limit=800")
    let API_call_results = await fetch(Api_url);
    if (API_call_results.ok) {
        window.value = leclerc_raw_json = await API_call_results.json();
        return leclerc_raw_json
    } else {
        return `HTTP error: ${API_call_results.status}`; //Error catcher
    }
};


function Display(leclerc_raw_data){
    Podium = 0
    DNF = 0
    Race_win = 0
    for (let i = 0; i < leclerc_raw_data['MRData']['RaceTable']['Races'].length; i++){
    
    if ((leclerc_raw_data['MRData']['RaceTable']['Races'][i]['Results'][0]['status']) != "Finished"){
        DNF = DNF + 1
    }

    
    if (Number(leclerc_raw_data['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 1){
        var Race_win  = Race_win + 1;
    }

    
    if (Number(leclerc_raw_data['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 2){
        var Podium = Podium + 1;
    }
    if (Number(leclerc_raw_data['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 3){
        Podium = Podium + 1
    }
    }
    
    document.querySelector("#DNF").innerHTML = DNF;
    document.querySelector("#Race_Start").innerHTML = leclerc_raw_data['MRData']['RaceTable']['Races'].length;
    document.querySelector("#Podium").innerHTML = Race_win + Podium;
    document.querySelector("#Race_Win").innerHTML = Race_win;

}


async function onload(){
    var leclerc_raw_data = await leclerc_race_history();
    Display(leclerc_raw_data)
}