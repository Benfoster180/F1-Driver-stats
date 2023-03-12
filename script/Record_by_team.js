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

function results(leclerc_raw_data   ){
    const Sauber_record = {Race_wins:0, Race_Starts:0,Podium:0,DNF:0}
    const Ferrari_record = {Race_wins:0, Race_Starts:0,Podium:0,DNF:0}

    for (let i = 0; i < leclerc_raw_data['MRData']['RaceTable']['Races'].length; i++){
        if (leclerc_raw_json['MRData']['RaceTable']['Races'][i]['Results'][0]['Constructor']['constructorId'] == "sauber"){
            Sauber_record["Race_Starts"] = Sauber_record["Race_Starts"] + 1
            
            if ((leclerc_raw_data['MRData']['RaceTable']['Races'][i]['Results'][0]['status']) != "Finished"){
                Sauber_record["DNF"] = Sauber_record["DNF"] + 1}

            if (Number(leclerc_raw_data['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 1){
                Sauber_record["Race_wins"] = Sauber_record["Race_wins"] + 1;}

            if (Number(leclerc_raw_data['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 2 || Number(leclerc_raw_data['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 3  ){
                Sauber_record["Podium"] = Sauber_record["Podium"] + 1}

            
    }
        

        if (leclerc_raw_json['MRData']['RaceTable']['Races'][i]['Results'][0]['Constructor']['constructorId'] == "ferrari"){
            Ferrari_record["Race_Starts"] = Ferrari_record["Race_Starts"] + 1

            if ((leclerc_raw_data['MRData']['RaceTable']['Races'][i]['Results'][0]['status']) != "Finished"){
                Ferrari_record["DNF"] = Ferrari_record["DNF"] + 1}
               
            if (Number(leclerc_raw_data['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 1){
                Ferrari_record["Race_wins"] = Ferrari_record["Race_wins"] + 1;}

            if (Number(leclerc_raw_data['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 2 || Number(leclerc_raw_data['MRData']['RaceTable']['Races'][i]['Results'][0]['position']) == 3  ){
                Ferrari_record["Podium"] = Ferrari_record["Podium"] + 1}
            
        }
        
        

    }
    document.querySelector("#sauber_DNF").innerHTML = Sauber_record["DNF"];
    document.querySelector("#sauber_Race_Start").innerHTML = Sauber_record["Race_Starts"];
    document.querySelector("#sauber_Podium").innerHTML = Sauber_record["Podium"] + Sauber_record["Race_wins"];
    document.querySelector("#sauber_Race_Win").innerHTML = Sauber_record["Race_wins"];

    document.querySelector("#ferrari_DNF").innerHTML = Ferrari_record["DNF"];
    document.querySelector("#ferrari_Race_Start").innerHTML = Ferrari_record["Race_Starts"];
    document.querySelector("#ferrari_Podium").innerHTML = Ferrari_record["Podium"] + Ferrari_record["Race_wins"];
    document.querySelector("#ferrari_Race_Win").innerHTML = Ferrari_record["Race_wins"];
}

async function onload(){
    var leclerc_raw_data = await leclerc_race_history();
    results(leclerc_raw_data)
}

