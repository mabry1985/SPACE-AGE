import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Mercury, Venus, Mars, Jupiter } from '../src/space-age-calculator.js';

$(document).ready(function () {
  const ageInput = parseInt($('.age').val());
  $('.mars').click(function () {
    const marsOutput = new Mars;
    ('.output').html(`<li> You are ${marsOutput.age(ageInput)} on Mars.</li>`);
  });
});
