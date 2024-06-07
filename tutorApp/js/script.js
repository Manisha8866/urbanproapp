let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
     
   }
}



document.getElementById('close-btn').addEventListener('click', function() {
   document.querySelector('.side-bar').style.display = 'none';
});



// ----------Gym--------------
document.addEventListener('DOMContentLoaded', function() {
   const gymActivities = [
       { name: 'Yoga', description: 'A relaxing yoga session' },
       { name: 'Spin Class', description: 'High-intensity cycling class' },
       { name: 'Pilates', description: 'Strengthening Pilates workout' },
       { name: 'Zumba', description: 'Fun and energetic dance workout' },
       { name: 'Weight Training', description: 'Build muscle and strength' },
   ];

   const gymActivitiesContainer = document.getElementById('gym-activities');
   const bookingModal = document.getElementById('booking-modal');
   const closeModalButton = document.querySelector('.close');
   const bookingForm = document.getElementById('booking-form');
   const activityInput = document.getElementById('activity');

   function populateActivities(container, activities) {
       container.innerHTML = '';
       activities.forEach(activity => {
           const card = document.createElement('div');
           card.classList.add('activity-card');
           card.innerHTML = `
               <h3>${activity.name}</h3>
               <p>${activity.description}</p>
               <button data-activity="${activity.name}">Book Class</button>
           `;
           container.appendChild(card);
       });
   }

   gymActivitiesContainer.addEventListener('click', handleBookingClick);

   function handleBookingClick(event) {
       if (event.target.tagName === 'BUTTON') {
           const activityName = event.target.getAttribute('data-activity');
           activityInput.value = activityName;
           bookingModal.style.display = 'block';
       }
   }

   closeModalButton.addEventListener('click', function() {
       bookingModal.style.display = 'none';
   });

   window.addEventListener('click', function(event) {
       if (event.target === bookingModal) {
           bookingModal.style.display = 'none';
       }
   });

   bookingForm.addEventListener('submit', function(event) {
       event.preventDefault();
       const activity = activityInput.value;
       const date = document.getElementById('date').value;
       const time = document.getElementById('time').value;

       console.log(`Class booked: ${activity} on ${date} at ${time}`);

       alert(`Class booked: ${activity} on ${date} at ${time}`);
       bookingModal.style.display = 'none';
       bookingForm.reset();
   });

   populateActivities(gymActivitiesContainer, gymActivities);
});

//-------------Hobbiees------------------

document.addEventListener('DOMContentLoaded', function() {
   const hobbiesActivities = [
       { name: 'Painting', description: 'Express yourself with colors' },
       { name: 'Cooking', description: 'Learn to cook delicious meals' },
       { name: 'Photography', description: 'Capture the world through your lens' },
       { name: 'Knitting', description: 'Create beautiful knitwear' },
       { name: 'Gardening', description: 'Grow your own plants and flowers' },
   ];

   const hobbiesActivitiesContainer = document.getElementById('hobbies-activities');
   const bookingModal = document.getElementById('booking-modal');
   const closeModalButton = document.querySelector('.close');
   const bookingForm = document.getElementById('booking-form');
   const activityInput = document.getElementById('activity');

   function populateActivities(container, activities) {
       container.innerHTML = '';
       activities.forEach(activity => {
           const card = document.createElement('div');
           card.classList.add('activity-card');
           card.innerHTML = `
               <h3>${activity.name}</h3>
               <p>${activity.description}</p>
               <button data-activity="${activity.name}">Book Class</button>
           `;
           container.appendChild(card);
       });
   }

   hobbiesActivitiesContainer.addEventListener('click', handleBookingClick);

   function handleBookingClick(event) {
       if (event.target.tagName === 'BUTTON') {
           const activityName = event.target.getAttribute('data-activity');
           activityInput.value = activityName;
           bookingModal.style.display = 'block';
       }
   }

   closeModalButton.addEventListener('click', function() {
       bookingModal.style.display = 'none';
   });

   window.addEventListener('click', function(event) {
       if (event.target === bookingModal) {
           bookingModal.style.display = 'none';
       }
   });

   bookingForm.addEventListener('submit', function(event) {
       event.preventDefault();
       const activity = activityInput.value;
       const date = document.getElementById('date').value;
       const time = document.getElementById('time').value;

       console.log(`Class booked: ${activity} on ${date} at ${time}`);

       alert(`Class booked: ${activity} on ${date} at ${time}`);
       bookingModal.style.display = 'none';
       bookingForm.reset();
   });

   populateActivities(hobbiesActivitiesContainer, hobbiesActivities);
});



//---------------------Hobbiees and Gym-----------------

function bookClass(activity) {
   alert(`You have booked a ${activity} class!`);
}
//-----------------Community-----------------------
function postReview(event) {
   event.preventDefault();
   const name = document.getElementById('review-name').value;
   const reviewText = document.getElementById('review-text').value;

   const reviewDiv = document.createElement('div');
   reviewDiv.classList.add('review');
   reviewDiv.innerHTML = `<strong>${name}</strong><p>${reviewText}</p>`;
   
   document.getElementById('reviews').appendChild(reviewDiv);

   document.getElementById('review-form').reset();
}


//---------------Feedback-----------------------------
function submitFeedback(event) {
   event.preventDefault();
   const name = document.getElementById('feedback-name').value;
   const classOrTutor = document.getElementById('feedback-class').value;
   const feedbackText = document.getElementById('feedback-text').value;

   console.log(`Feedback from ${name} on ${classOrTutor}: ${feedbackText}`);
   alert('Thank you for your feedback!');

   document.getElementById('feedback-form').reset();
}


// -----------------------liveChat------------
document.addEventListener('DOMContentLoaded', function() {
   // Chat functionality
   const chatInput = document.getElementById('chat-input');
   const sendBtn = document.getElementById('send-btn');
   const chatMessages = document.getElementById('chat-messages');

   sendBtn.addEventListener('click', function() {
       const message = chatInput.value;
       if (message.trim() !== '') {
           const messageElement = document.createElement('div');
           messageElement.textContent = message;
           chatMessages.appendChild(messageElement);
           chatInput.value = '';
           chatMessages.scrollTop = chatMessages.scrollHeight;
       }
   });
});
   //--------------------------AccountSetting---------------------

document.addEventListener('DOMContentLoaded', function() {
   const accountSettingsForm = document.getElementById('account-settings-form');

   accountSettingsForm.addEventListener('submit', function(event) {
       event.preventDefault();

       const username = document.getElementById('username').value;
       const email = document.getElementById('email').value;
       const currentPassword = document.getElementById('current-password').value;
       const newPassword = document.getElementById('new-password').value;
       const confirmPassword = document.getElementById('confirm-password').value;

       if (newPassword !== confirmPassword) {
           alert('New passwords do not match. Please try again.');
           return;
       }

       // Mock AJAX request to update account settings
       // In a real application, this would be a request to the server
       console.log('Account settings updated:', {
           username,
           email,
           currentPassword,
           newPassword
       });

       alert('Account information updated successfully!');
   });
});


// ----------------------------Billing history functionality---------------------


document.addEventListener('DOMContentLoaded', function() {
   const billingTableBody = document.getElementById('billing-table-body');
   const detailsModal = document.getElementById('details-modal');
   const addEntryModal = document.getElementById('add-entry-modal');
   const closeButtons = document.querySelectorAll('.close');
   const modalContent = document.getElementById('modal-content');
   const addBillingEntryButton = document.getElementById('add-billing-entry');
   const billingForm = document.getElementById('billing-form');

   const billingHistory = [
       { date: '2024-01-01', description: 'Payment Received', amount: 100, details: 'Payment received from client A' },
       { date: '2024-02-01', description: 'Payment Sent', amount: -50, details: 'Payment sent for service B' },
       // Add more billing records as needed
   ];

   function displayBillingHistory() {
       billingTableBody.innerHTML = '';
       billingHistory.forEach((record, index) => {
           const row = document.createElement('tr');
           row.innerHTML = `
               <td>${record.date}</td>
               <td>${record.description}</td>
               <td>${record.amount >= 0 ? '$' + record.amount : '-$' + Math.abs(record.amount)}</td>
               <td><button class="details-btn" data-index="${index}">Details</button></td>
           `;
           billingTableBody.appendChild(row);
       });
   }

   billingTableBody.addEventListener('click', function(event) {
       if (event.target.classList.contains('details-btn')) {
           const index = event.target.getAttribute('data-index');
           const record = billingHistory[index];
           modalContent.textContent = record.details;
           detailsModal.style.display = 'block';
       }
   });

   closeButtons.forEach(button => {
       button.addEventListener('click', function() {
           detailsModal.style.display = 'none';
           addEntryModal.style.display = 'none';
       });
   });

   window.addEventListener('click', function(event) {
       if (event.target === detailsModal || event.target === addEntryModal) {
           detailsModal.style.display = 'none';
           addEntryModal.style.display = 'none';
       }
   });

   addBillingEntryButton.addEventListener('click', function() {
       addEntryModal.style.display = 'block';
   });

   billingForm.addEventListener('submit', function(event) {
       event.preventDefault();
       const newEntry = {
           date: document.getElementById('date').value,
           description: document.getElementById('description').value,
           amount: parseFloat(document.getElementById('amount').value),
           details: document.getElementById('details').value,
       };
       billingHistory.push(newEntry);
       displayBillingHistory();
       addEntryModal.style.display = 'none';
       billingForm.reset();
   });

   displayBillingHistory();
});


