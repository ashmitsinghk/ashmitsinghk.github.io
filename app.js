var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

let scrollpos = window.scrollY
const skills = document.querySelector(".skills-container")
const skills_height = skills.offsetHeight

const stick_skills = () => skills.classList.add("stick")
const unstick_skills = () => skills.classList.remove("stick")

const projects = document.querySelector(".projects-container")
const projects_height = 141 * window.screen.height / 100

const stick_projects = () => projects.classList.add("stick")
const unstick_projects = () => projects.classList.remove("stick")

const contact = document.querySelector(".contact-container")
const contact_height = 218 * window.screen.height / 100

const stick_contact = () => contact.classList.add("stick")
const unstick_contact = () => contact.classList.remove("stick")

window.addEventListener('scroll', function () {
  scrollpos = window.scrollY;

  if (scrollpos >= skills_height) { stick_skills() }
  else { unstick_skills() }

  if (scrollpos >= projects_height) { stick_projects() }
  else { unstick_projects() }

  if (scrollpos >= contact_height) { stick_contact() }
  else { unstick_contact() }

})