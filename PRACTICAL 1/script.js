let vote = {
    Javascript: 0,
    Python: 0,
    Java: 0
};

function votes(language){
    vote[language]++;
    updatevotes();
    
    // Add visual feedback
    const buttons = document.querySelectorAll('.vote-btn');
    buttons.forEach(btn => {
        if(btn.textContent.includes(language)) {
            btn.classList.add('vote-animation');
            setTimeout(() => btn.classList.remove('vote-animation'), 300);
        }
    });
}

function updatevotes(){
    document.getElementById("jsvotes").innerHTML = vote.Javascript;
    document.getElementById("pyvotes").innerHTML = vote.Python;
    document.getElementById("jvotes").innerHTML = vote.Java;
    
    updateProgressBars();
}

function updateProgressBars() {
    const total = vote.Javascript + vote.Python + vote.Java;
    
    if (total > 0) {
        const jsPercent = (vote.Javascript / total) * 100;
        const pyPercent = (vote.Python / total) * 100;
        const javaPercent = (vote.Java / total) * 100;
        
        document.getElementById('js-progress').style.width = jsPercent + '%';
        document.getElementById('py-progress').style.width = pyPercent + '%';
        document.getElementById('java-progress').style.width = javaPercent + '%';
    }
}

setInterval(()=> {
    const langs = Object.keys(vote);
    const randomVote = langs[Math.floor(Math.random()*langs.length)];
    vote[randomVote]++;
    updatevotes();
}, 2000);

// Initialize progress bars on page load
window.addEventListener('load', updateProgressBars);