const menu=document.querySelector('.menu');
const nav=document.querySelector('#nav');
if(menu){
  menu.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
}
const revealEls=document.querySelectorAll('.section,.dashboard,.hero-card,.hero-copy,.project,.validation-card,.rank-card');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
revealEls.forEach(el=>{el.classList.add('reveal');observer.observe(el);});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
  });
});

const terminalCommand = document.getElementById("terminalCommand");
const terminalOutput = document.getElementById("terminalOutput");

const commands = {
  whoami: {
    cmd: "whoami",
    output: "Kiran Dikshit Menon A — SOC Analyst / Threat Hunter / Incident Response Analyst"
  },
  skills: {
    cmd: "skills",
    output: "SIEM • EDR • Threat Hunting • DFIR • SOAR • Network Security • MITRE ATT&CK"
  },
  experience: {
    cmd: "experience",
    output: "3.3 years — Enterprise SOC | 12 SIEM customers | 34 EDR customers"
  },
  location: {
    cmd: "location",
    output: "Mysuru, Karnataka, India"
  },
  stack: {
    cmd: "stack",
    output: "FortiSIEM • ArcSight • SentinelOne • Cortex XSOAR • Wireshark • Zeek • Nessus"
  },
  projects: {
    cmd: "projects",
    output: "Secure Paper Publication • AgriConnect • CampusBook • SOC / CTF Labs"
  },
  contact: {
    cmd: "contact",
    output: "kiranmenon16@gmail.com | +91 8310221099"
  },
  clear: {
    cmd: "clear",
    output: ""
  },
  help: {
    cmd: "help",
    output: "Available: whoami • skills • experience • location • stack • projects • contact • clear • help"
  }
};

let commandIndex = 0;
const commandNames = Object.keys(commands);

function runPortfolioCommand(name) {
  const item = commands[name] || commands.help;
  terminalCommand.textContent = item.cmd;
  terminalOutput.textContent = item.output;
}

function cycleCommand() {
  const name = commandNames[commandIndex];
  runPortfolioCommand(name);
  commandIndex = (commandIndex + 1) % commandNames.length;
}

if (terminalCommand && terminalOutput) {
  let commandTimer = setInterval(cycleCommand, 3200);

  const terminal = document.getElementById("commandTerminal");
  terminal.addEventListener("mouseenter", () => clearInterval(commandTimer));
  terminal.addEventListener("mouseleave", () => {
    commandTimer = setInterval(cycleCommand, 3200);
  });

  terminal.addEventListener("click", () => {
    cycleCommand();
  });
}
