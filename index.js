let interviewCount = [];
let rejectedCount = [];
// Update total count with actual number of jobs
const totalCountValue = document.getElementById('total-count-value');
const jobList = document.getElementById('jobs-container').childElementCount;
totalCountValue.textContent = jobList;



// Consts for buttons 

const deleteBtns = document.querySelector('[id="delete-btn"]');
const interviewBtns = document.querySelector('[id="interview-btn"]');
const rejectedBtns = document.querySelectorAll('[id="rejected-btn"]');


// Const for filter buttons
const filterAllBtn = document.getElementById('filter-all');
const filterInterviewBtn = document.getElementById('filter-interview');
const filterRejectedBtn = document.getElementById('filter-rejected');

// Retrive information from job-card
const maincontainer = document.getElementById('jobs-container');


// Interview button click event
maincontainer.addEventListener('click', function (event) {
    if (event.target.id === 'interview-btn') {
        const parentnode = event.target.closest('.job-card');
        const jobcompany = parentnode.querySelector('.company-name').innerText;
        const jobTitle = parentnode.querySelector('.job-title').innerText;
        const joblocation = parentnode.querySelector('.job-location').innerText;
        const jobdescription = parentnode.querySelector('.job-description').innerText;
        const jobstatus = parentnode.querySelector('.job-status').innerText;

        const jobInfo = {
            jobCompany: jobcompany,
            jobTitle: jobTitle,
            joblocation: joblocation,
            jobdescription: jobdescription,
            jobstatus: jobstatus
        };


        const interviewexist = interviewCount.find(job => job.jobCompany === jobInfo.jobCompany);
        if (!interviewexist) {
            interviewCount.push(jobInfo);
        }
        console.log(interviewCount);
        parentnode.querySelector('.job-status').innerText = 'Interview';
        
    }
});

// Rejected button click event
maincontainer.addEventListener('click', function (event) {
    if (event.target.id === 'rejected-btn') {
        const parentnode = event.target.closest('.job-card');
        const jobcompany = parentnode.querySelector('.company-name').innerText;
        const jobTitle = parentnode.querySelector('.job-title').innerText;
        const joblocation = parentnode.querySelector('.job-location').innerText;
        const jobdescription = parentnode.querySelector('.job-description').innerText;
        const jobstatus = parentnode.querySelector('.job-status').innerText;

        const jobInfo = {
            jobCompany: jobcompany,
            jobTitle: jobTitle,
            joblocation: joblocation,
            jobdescription: jobdescription,
            jobstatus: jobstatus
        };


        const rejectedexist = rejectedCount.find(job => job.jobCompany === jobInfo.jobCompany);
        if (!rejectedexist) {
            rejectedCount.push(jobInfo);
        }
        console.log(rejectedCount);
        parentnode.querySelector('.job-status').innerText = 'Rejected';
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