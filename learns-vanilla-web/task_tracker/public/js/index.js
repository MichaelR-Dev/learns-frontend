//After DOMContentLoaded
document.addEventListener('DOMContentLoaded', ()=>{

  //References
  let navButtons = document.getElementsByClassName('container-nav-button');
  let activeButton = document.getElementById('selected');
  let modules = document.getElementsByClassName('module');
  let activeModule = document.getElementsByClassName('active-module')[0];
  let tasks = activeModule.getElementsByClassName('task');

  //Initial reveal active task list
  revealList(tasks);

  //Assigning events to navButtons
  for (const el of navButtons) {

    //Assign to click event
    el.addEventListener('click', (e)=>{
      
      //Check if active is defined and unassign active ids/classes
      if(typeof activeButton !== 'undefined'){

          activeButton.id = "";
          activeModule.classList.remove("active-module");

          hideList(tasks);

      }

      //Assign new active button
      activeButton = e.target;
      activeButton.id = "selected"

      //Assign new active module
      activeModule = modules[parseInt(activeButton.getAttribute('module'))];
      activeModule.classList.add("active-module");

      //Assign new active tasks
      tasks = activeModule.getElementsByClassName('task');

      //Reveal new list
      revealList(tasks);

    })
  }
})

/**
 * Reveals the elements with offset of 200ms
 * @param {HTMLCollectionOf<Element>} elements - list of elements
 */
function revealList(elements) {

  let offsetTime = 200;

  for (const el of elements) {
    setTimeout(() => {
        el.style.opacity = "1";
    }, 200 + offsetTime);

    offsetTime += 300;
  }
    
}

/**
 * Hides the elements with offset of 10ms
 * @param {HTMLCollectionOf<Element>} elements - list of elements
 */

function hideList(elements) {

  for (const el of elements) {
    setTimeout(() => {
        el.style.opacity = "0";
    }, 10);
  }
  
}