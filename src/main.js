import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Mercury, Venus, Mars, Jupiter } from '../src/space-age-calculator.js';

$(document).ready(function () {
  $('.mars').click(function () {
    const ageInput = parseInt($('#ageInput').val());
    const marsOutput = new Mars;
    $('.output').append(`<li> You are ${marsOutput.age(ageInput)} on Mars.</li>`);
  });
});
