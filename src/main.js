import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Mercury, Venus, Mars, Jupiter } from '../src/space-age-calculator.js';

$(document).ready(function () {
  const ageInput = parseInt($('.age').val());
  $('.mars').click(function () {
    const mars = new Mars;
    ('.output').prepend(`You are ${mars.age(ageInput)} on Mars.`);
  });
});
