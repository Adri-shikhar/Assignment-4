let interviewCount = [];
let rejectedCount = [];
// Update total count with actual number of jobs
const totalCountValue = document.getElementById('total-count-value');
const jobList = document.getElementById('jobs-container').childElementCount;
totalCountValue.textContent = jobList;



// Const for filter buttons
const filterAllBtn = document.getElementById('filter-all');
const filterInterviewBtn = document.getElementById('filter-interview');
const filterRejectedBtn = document.getElementById('filter-rejected');




// Header counters (cached once)
const interviewCountValue = document.getElementById('interview-count-value');
const rejectedCountValue = document.getElementById('rejected-count-value');



// Retrive information from job-card
const maincontainer = document.getElementById('jobs-container');
// Container used by updateScreen to show filtered results
const container = document.getElementById('filtered_section');




// ===== Function to show filtered jobs on screen =====



document.addEventListener('click', function (event) {
    
    const btn = event.target.closest('button');
    if (!btn) return;

    
    // =====  INTERVIEW BUTTON CLICKED =====

    if (btn.id === 'interview-btn') {
        
        const jobCard = btn.closest('.job-card');
        if (!jobCard) return;

        
        const companyName = jobCard.querySelector('.company-name').innerText;
        const title = jobCard.querySelector('.job-title').innerText;
        const location = jobCard.querySelector('.job-location').innerText;
        const description = jobCard.querySelector('.job-description').innerText;

       
        const jobInfo = {
            jobCompany: companyName,
            jobTitle: title,
            joblocation: location,
            jobdescription: description,
            jobstatus: 'Interview'
        };

        for (let i = 0; i < rejectedCount.length; i++) {
            if (rejectedCount[i].jobCompany === companyName) {
                rejectedCount.splice(i, 1); 
                break; 
            }
        }

        
        let alreadyInInterview = false;
        for (let i = 0; i < interviewCount.length; i++) {
            if (interviewCount[i].jobCompany === companyName) {
                alreadyInInterview = true;
                break;
            }
        }
        if (!alreadyInInterview) {
            interviewCount.push(jobInfo);
        }

        updateScreen(interviewCount);
        interviewCountValue.textContent = interviewCount.length;
        rejectedCountValue.textContent = rejectedCount.length;
    }

    // ===== REJECTED BUTTON CLICKED =====
    if (btn.id === 'rejected-btn') {
      
        const jobCard = btn.closest('.job-card');
        if (!jobCard) return;

        const companyName = jobCard.querySelector('.company-name').innerText;
        const title = jobCard.querySelector('.job-title').innerText;
        const location = jobCard.querySelector('.job-location').innerText;
        const description = jobCard.querySelector('.job-description').innerText;

       
        const jobInfo = {
            jobCompany: companyName,
            jobTitle: title,
            joblocation: location,
            jobdescription: description,
            jobstatus: 'Rejected'
        };

        for (let i = 0; i < interviewCount.length; i++) {
            if (interviewCount[i].jobCompany === companyName) {
                interviewCount.splice(i, 1);
                break; 
            }
        }

        let alreadyInRejected = false;
        for (let i = 0; i < rejectedCount.length; i++) {
            if (rejectedCount[i].jobCompany === companyName) {
                alreadyInRejected = true;
                break;
            }
        }
        if (!alreadyInRejected) {
            rejectedCount.push(jobInfo);
        }

        updateScreen(rejectedCount);
        rejectedCountValue.textContent = rejectedCount.length;
        interviewCountValue.textContent = interviewCount.length;
    }
});





//  clicked button's Effect
function setActiveButton(id) {
    if (id === 'filter-all') {
        // Set All to primary (blue)
        filterAllBtn.classList.remove('btn-outline');
        filterAllBtn.classList.add('btn-primary');
        // Set others to outline
        filterInterviewBtn.classList.remove('btn-primary');
        filterInterviewBtn.classList.add('btn-outline');
        filterRejectedBtn.classList.remove('btn-primary');
        filterRejectedBtn.classList.add('btn-outline');
        document.getElementById('filtered_section').style.display = 'none';
        document.getElementById('jobs-container').style.display = 'block';
    }
    else if (id === 'filter-interview') {
        // Set Interview to primary (blue)
        filterInterviewBtn.classList.remove('btn-outline');
        filterInterviewBtn.classList.add('btn-primary');
        // Set others to outline
        filterAllBtn.classList.remove('btn-primary');
        filterAllBtn.classList.add('btn-outline');
        filterRejectedBtn.classList.remove('btn-primary');
        filterRejectedBtn.classList.add('btn-outline');
        document.getElementById('filtered_section').style.display = 'block';
        document.getElementById('jobs-container').style.display = 'none';

    }
    else if (id === 'filter-rejected') {
        // Set Rejected to primary (blue)
        filterRejectedBtn.classList.remove('btn-outline');
        filterRejectedBtn.classList.add('btn-primary');
        // Set others to outline
        filterAllBtn.classList.remove('btn-primary');
        filterAllBtn.classList.add('btn-outline');
        filterInterviewBtn.classList.remove('btn-primary');
        filterInterviewBtn.classList.add('btn-outline');
    }
}