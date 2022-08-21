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


function Format_Driver_Races(){

    Total_Races = Number(json['MRData']['RaceTable']['Races'].length) //Cals how many racees that driver has been in
    var Top_10 = 0
    var Pole = 0 
    var race_Win = 0

    for (let i = 0; i < Total_Races; i++) { //Loops for all the races the driver has been in!
        List_of_raced_races = json['MRData']['RaceTable']['Races'][i]['Results'][0]['position'] //Collects race postion
        //Works out if it's a top 10 finsh 
        if (List_of_raced_races < 10){
        
            if (List_of_raced_races <= 3){ //checks for pole
                if (List_of_raced_races == 1){ //checks for a race win
                    var race_Win = race_Win + 1
                }
                else{
                    var Pole = Pole + 1
                }
            }
            else{
                var Top_10 = 1 + Top_10 
            }
        }
    }
    
    //Updates HTML
    document.getElementById('Total_Races').innerHTML =Total_Races
    document.getElementById('Top_10_finish').innerHTML =Top_10
    document.getElementById('Pole').innerHTML =Pole
    document.getElementById('Race_Wins').innerHTML =race_Win
}