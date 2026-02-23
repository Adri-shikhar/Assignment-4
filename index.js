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
const container = document.getElementById('filtered_section_interview');
const containerRejected = document.getElementById('filtered_section_rejected');

function nojobcard() {
    container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-16">
                <img src="assets/word.png" alt="No jobs" class="w-16 h-16 mb-4 opacity-50">
                <h3 class="text-lg font-semibold text-neutral mb-2">No jobs available</h3>
                <p class="text-sm text-gray-500">Check back soon for new job opportunities</p>
            </div>
        `;
        return;
}


// ===== Function to show filtered jobs on screen =====


function updateScreen_Interview(jobData) {
    
    container.innerHTML = "";

    console.log('updateScreen_interview data:', jobData);

    // If no jobs, show empty state
    if (jobData.length === 0) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-16">
                <img src="assets/word.png" alt="No jobs" class="w-16 h-16 mb-4 opacity-50">
                <h3 class="text-lg font-semibold text-neutral mb-2">No jobs available</h3>
                <p class="text-sm text-gray-500">Check back soon for new job opportunities</p>
            </div>
        `;
        return;
    }

    // Show job cards
    for (let job of jobData) {
        container.innerHTML += `
            <div class="job-card border-l-4 border-green-500 bg-base-100  rounded-lg shadow p-6 relative mb-4" data-status="${job.jobstatus.toLowerCase()}">
                <button id="delete-btn"
                    class="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <img src="assets/delete.png" alt="Delete" class="h-5 w-5">
                </button>
                <h3 class="company-name text-lg font-bold text-neutral">${job.jobCompany}</h3>
                <p class="job-title text-sm text-gray-600">${job.jobTitle}</p>
                <p class="job-location text-xs text-gray-500 mt-1">${job.joblocation}</p>
                <div class="mt-3">
                    <span class="job-status badge badge-outline ${job.jobstatus === 'Interview' ? 'text-green-600 border-green-600' : job.jobstatus === 'Rejected' ? 'text-red-600 border-red-600' : 'text-blue-600 border-blue-600'} text-xs">${job.jobstatus.toUpperCase()}</span>
                </div>
                <p class="job-description text-sm text-gray-700 mt-3">${job.jobdescription}</p>
                <div class="flex gap-2 mt-4">
                    <button id="interview-btn"
                        class="btn btn-sm btn-outline border-green-500 text-green-600 hover:bg-green-50">INTERVIEW</button>
                    <button id="rejected-btn"
                        class="btn btn-sm btn-outline border-red-500 text-red-600 hover:bg-red-50">REJECTED</button>
                </div>
            </div>
        `;
    }
}


function updateScreen_Rejected(jobData) {
    
    containerRejected.innerHTML = "";

    console.log('updateScreen_rejected data:', jobData);

    // If no jobs, show empty state
    if (jobData.length === 0) {
        containerRejected.innerHTML = `
            <div class="flex flex-col items-center justify-center py-16">
                <img src="assets/word.png" alt="No jobs" class="w-16 h-16 mb-4 opacity-50">
                <h3 class="text-lg font-semibold text-neutral mb-2">No jobs available</h3>
                <p class="text-sm text-gray-500">Check back soon for new job opportunities</p>
            </div>
        `;
        return;
    }

    // Show job cards
    for (let job of jobData) {
        containerRejected.innerHTML += `
            <div class="job-card  border-l-4 border-red-500 bg-base-100 rounded-lg shadow p-6 relative mb-4" data-status="${job.jobstatus.toLowerCase()}">
                <button id="delete-btn"
                    class="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <img src="assets/delete.png" alt="Delete" class="h-5 w-5">
                </button>
                <h3 class="company-name text-lg font-bold text-neutral">${job.jobCompany}</h3>
                <p class="job-title text-sm text-gray-600">${job.jobTitle}</p>
                <p class="job-location text-xs text-gray-500 mt-1">${job.joblocation}</p>
                <div class="mt-3">
                    <span class="job-status badge badge-outline ${job.jobstatus === 'Interview' ? 'text-green-600 border-green-600' : job.jobstatus === 'Rejected' ? 'text-red-600 border-red-600' : 'text-blue-600 border-blue-600'} text-xs">${job.jobstatus.toUpperCase()}</span>
                </div>
                <p class="job-description text-sm text-gray-700 mt-3">${job.jobdescription}</p>
                <div class="flex gap-2 mt-4">
                    <button id="interview-btn"
                        class="btn btn-sm btn-outline border-green-500 text-green-600 hover:bg-green-50">INTERVIEW</button>
                    <button id="rejected-btn"
                        class="btn btn-sm btn-outline border-red-500 text-red-600 hover:bg-red-50">REJECTED</button>
                </div>
            </div>
        `;
    }
}




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
        const jobstatus = jobCard.querySelector('.job-status').innerText;
        const job_container = maincontainer.querySelector('.job-card').innerText;

        console.log('job_container:', job_container);

       
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

        updateScreen_Interview(interviewCount);

        interviewCountValue.textContent = interviewCount.length;
        rejectedCountValue.textContent = rejectedCount.length;

        // Update the job card in the main "All" section
        const mainJobCards = maincontainer.querySelectorAll('.job-card');
        for (let i = 0; i < mainJobCards.length; i++) {
            const card = mainJobCards[i];
            const cardCompany = card.querySelector('.company-name').innerText;
            if (cardCompany === companyName) {
                const badge = card.querySelector('.job-status');
                badge.innerText = 'INTERVIEW';
                badge.className = 'job-status badge badge-outline text-green-600 border-green-600 text-xs';
                card.classList.add('border-l-4', 'border-green-500');
                card.classList.remove('border-red-500');
            }
        }


    }

    // ===== REJECTED BUTTON CLICKED =====
    if (btn.id === 'rejected-btn') {
      
        const jobCard = btn.closest('.job-card');
        if (!jobCard) return;

        const companyName = jobCard.querySelector('.company-name').innerText;
        const title = jobCard.querySelector('.job-title').innerText;
        const location = jobCard.querySelector('.job-location').innerText;
        const description = jobCard.querySelector('.job-description').innerText;
        const jobstatus = jobCard.querySelector('.job-status').innerText;

       
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

        updateScreen_Rejected(rejectedCount);
        rejectedCountValue.textContent = rejectedCount.length;
        interviewCountValue.textContent = interviewCount.length;

        // Update the job card in the main "All" section
        const mainJobCards = maincontainer.querySelectorAll('.job-card');
        for (let i = 0; i < mainJobCards.length; i++) {
            const card = mainJobCards[i];
            const cardCompany = card.querySelector('.company-name').innerText;
            
            
            if (cardCompany === companyName) {
                const badge = card.querySelector('.job-status');
                badge.innerText = 'REJECTED';
                badge.className = 'job-status badge badge-outline text-red-600 border-red-600 text-xs';
                card.classList.add('border-l-4', 'border-red-500');
                card.classList.remove('border-green-500');
            }
        }
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
        document.getElementById('filtered_section_interview').style.display = 'none';
        document.getElementById('filtered_section_rejected').style.display = 'none';
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
        // Show interview section, hide others
        document.getElementById('filtered_section_interview').style.display = 'block';
        document.getElementById('filtered_section_rejected').style.display = 'none';
        document.getElementById('jobs-container').style.display = 'none';
        updateScreen_Interview(interviewCount);
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
        // Show rejected section, hide others
        document.getElementById('filtered_section_rejected').style.display = 'block';
        document.getElementById('filtered_section_interview').style.display = 'none';
        document.getElementById('jobs-container').style.display = 'none';
        updateScreen_Rejected(rejectedCount);
    }
}