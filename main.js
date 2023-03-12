

console.log("Hello world");
window.onload = function loadScripts(){
    var directory = 'script/';
    var extension = '.js';
    var files = ['Record_table','Record_by_team','Next_race'];  
    for (var file of files){ 
        var path = directory + file + extension; 
        var script = document.createElement("script");
        script.src = path;
        document.body.appendChild(script);
    } 
  }

