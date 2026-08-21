const createAccountBtn = document.getElementById('createAccountBtn'); 
const alreadyHaveAccountBtn = document.getElementById('alreadyHaveAccountBtn'); 
const createAccountContainer = document.getElementById('createAccountContainer');
const alreadyHaveAccountContainer = document.getElementById('alreadyHaveAccountContainer');
const panelTwo = document.getElementById('panelTwo'); 
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const panelOne = document.getElementById('panelOne');
const panelThree = document.getElementById('panelThree'); 
const panelFour = document.getElementById('panelFour'); 

createAccountBtn.addEventListener('click', () => {
    createAccountContainer.classList.toggle('hidden'); 
    alreadyHaveAccountContainer.classList.toggle('hidden');
    panelTwo.classList.toggle('shiftPanelTwo'); 
    panelTwo.classList.toggle('panelTwo'); 
    signInForm.classList.toggle('hidden'); 
    signUpForm.classList.toggle('hidden');
    panelOne.classList.toggle('shiftPanelOne');
    panelOne.classList.toggle('panelOne');
    panelThree.classList.toggle('shiftPanelThree'); 
    panelThree.classList.toggle('panelThree'); 
    panelFour.classList.toggle('shiftPanelFour');
    panelFour.classList.toggle('panelFour');
    
})

alreadyHaveAccountBtn.addEventListener('click', () => { 
    alreadyHaveAccountContainer.classList.toggle('hidden'); 
    createAccountContainer.classList.toggle('hidden'); 
    panelTwo.classList.toggle('shiftPanelTwo'); 
    panelTwo.classList.toggle('panelTwo');
    signInForm.classList.toggle('hidden');
    signUpForm.classList.toggle('hidden');
    panelOne.classList.toggle('shiftPanelOne');
    panelOne.classList.toggle('panelOne');
    panelThree.classList.toggle('shiftPanelThree'); 
    panelThree.classList.toggle('panelThree'); 
    panelFour.classList.toggle('shiftPanelFour');
    panelFour.classList.toggle('panelFour');
})