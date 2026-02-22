

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