window.onload = onload();

async function Next_race(){
    let Api_url = ("http://ergast.com/api/f1/current/next.json")
    let API_call_results = await fetch(Api_url);
    if (API_call_results.ok) {
        window.value = leclerc_raw_json = await API_call_results.json();
        return leclerc_raw_json
    } else {
        return `HTTP error: ${API_call_results.status}`; //Error catcher
    }
};

function format_next_race(Next_race_raw){
    Round = Next_race_raw['MRData']['RaceTable']['round']
    Circuit = Next_race_raw['MRData']['RaceTable']['Races'][0]['Circuit']['Location']['country']
    //raceName = Next_race_raw['MRData']['RaceTable']['RaceTable']['Races'][0]['raceName']
    Nxt_round ="Round:",Round,"Circuit:",Circuit
    document.querySelector("#next_race").innerHTML = Nxt_round
}

async function onload(){
    var Next_race_raw = await Next_race();
    //format_next_race(Next_race_raw)
   
}