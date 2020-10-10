// event listeners start
eventListeners();

function eventListeners() {
    const ui = new UI()
    // preloader start
    window.addEventListener('load', function() {
        ui.hidePreloader();
    })
    // preloader end
    // show nav start
    document.querySelector('.navBtn').addEventListener('click', function() {
        ui.showNav();
    })
    // show nav end
    // close nav after selected menu item start
    const menuItems = document.querySelectorAll('.nav_single-link');
    menuItems.forEach(function(item){
        item.addEventListener('click', function(event){
            ui.closeNav(event)
        })
    })
    // close nav after selected menu item end
    // play/pause button start
    document.querySelector('.video_switch').addEventListener('click', function() {
        ui.videoControls();
    })
    // play/pause button end
    // submit form start
    document.querySelector('.drink-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.querySelector('.input-name').value;
        const lastName = document.querySelector('.input-lastname').value;
        const email = document.querySelector('.input-email').value;

        let value = ui.checkEmpty(name, lastName, email);

        if (value) {
            let customer = new Customer(name, lastName, email)
            ui.addCustomer(customer);
            ui.showFeedback('customer added to the list', 'success');
            ui.clearFields();
        }
        else {
            ui.showFeedback('some form values are empty', 'error')
        }
    })
    // submit form end
    // modal start
    //show modal start
    const links = document.querySelectorAll('.work-item_icon');
    links.forEach(function (item) {
    item.addEventListener('click', function (event) {
      ui.showModal(event)
    })
  })
  // show modal end
  // hide modal start
  document.querySelector('.work-modal_close').addEventListener('click', function () {
    ui.closeModal()
  })
  // hide modal end
}
// event listeners end
// constructor function start
function UI() {

}
// constructor function end
// hide preloader start
UI.prototype.hidePreloader = function() {
    document.querySelector('.preloader').style.display = "none";
}
// hide preloader end
// show nav start
UI.prototype.showNav = function() {
    document.querySelector('.nav').classList.toggle('nav-show')
}
// show nav end
// close nav after selected menu item start
UI.prototype.closeNav = function () {
    document.querySelector('.nav').classList.toggle('nav-show')
}
// close nav after selected menu item end
// play/pause button start
UI.prototype.videoControls = function() {
    let btn = document.querySelector('.video_switch-btn');
    if(!btn.classList.contains('btnSlide')) {
        btn.classList.add('btnSlide')
        document.querySelector('.video_item').pause()
    }
    else {
        btn.classList.remove('btnSlide')
        document.querySelector('.video_item').play()
    }
}
// play/pause button end
// check for empty values start
UI.prototype.checkEmpty = function(name, lastname, email){
    let result;
    if(name === '' || lastname === '' || email === ''){
        result = false;
    }
    else {
        result = true;
    }
    return result;
}
        // form feedback start  
        UI.prototype.showFeedback = function(text, type){
            const feedback = document.querySelector('.drink-form_feedback');
            if(type === 'success') {
                feedback.classList.add('success');
                feedback.innerText = text;
                this.removeAlert('success');
            }
            else if(type === 'error') {
                feedback.classList.add('error');
                feedback.innerText = text;
                this.removeAlert('error');
            }
        }
        // form feedback end
                
        // remove alert start
                UI.prototype.removeAlert = function(type){
                    setTimeout(function () {
                        document.querySelector('.drink-form_feedback').classList.remove(type)
                    },3000)
                }
                // remove alert end

                    //  start add customer
                    UI.prototype.addCustomer = function(customer) {
                        const images = [1, 2, 3, 4, 5];
                        let random = Math.floor(Math.random() * images.length);
                    
                    const div = document.createElement('div');
                    div.classList.add('person');
                    div.innerHTML = `<img src="img/person-${random}.jpeg" alt="person" class="person_thumbnail">
                    <h4 class="person_name">${customer.name}</h4>
                    <h4 class="person_last-name">${customer.lastname}</h4>`
                    document.querySelector('.drink-card_list').appendChild(div);
                }
                    // end add customer

                        // start clear fields
                        UI.prototype.clearFields = function() {
                            document.querySelector('.input-name').value = '';
                            document.querySelector('.input-lastname').value = '';
                            document.querySelector('.input-email').value = '';
                        }
                        // end clear fields
                            // customer function start
                            function Customer(name, lastname, email) {
                                this.name = name,
                                this.lastname = lastname,
                                this.email = email;
                            }
                            // customer function end
// check for empty values end
// modal start
// show modal start
UI.prototype.showModal = function (event) {
    event.preventDefault();
    if (event.target.parentElement.classList.contains('work-item_icon')) {
  
  
      let id = event.target.parentElement.dataset.id
  
      const modal = document.querySelector('.work-modal');
      const modalItem = document.querySelector('.work-modal_item');
  
      modal.classList.add('work-modal--show');
      modalItem.style.backgroundImage = `url(img/work-${id}.jpeg)`
    }
  }
  // show modal end
  // hide modal start
  
  UI.prototype.closeModal = function () {
    document.querySelector('.work-modal').classList.remove('work-modal--show')
  }
  // hide modal end
// modale end
// constructor function end
