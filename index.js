
// Update total count with actual number of jobs
const totalCountValue = document.getElementById('total-count-value');
const jobList = document.getElementById('jobs-container').childElementCount;
totalCountValue.textContent = jobList;



// Consts for buttons 

const deleteBtns = document.querySelectorAll('[id="delete-btn"]');
const interviewBtns = document.querySelectorAll('[id="interview-btn"]');
const rejectedBtns = document.querySelectorAll('[id="rejected-btn"]');


// Const for filter buttons
const filterAllBtn = document.getElementById('filter-all');
const filterInterviewBtn = document.getElementById('filter-interview');
const filterRejectedBtn = document.getElementById('filter-rejected');

//Retrive information from job-card





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