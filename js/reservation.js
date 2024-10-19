let contenerReservationInfo = document.querySelector("#contenerReservationInfo");
let reservationSummaryBackground = document.querySelector(".reservationSummaryBackground");
let reservationCodeText = document.querySelector(".reservationCodeText");
let reservationCode ;
contenerReservationInfo.style.display = "none";
reservationSummaryBackground.style.display = "none";


 let reservationCounter = setInterval(() => {
 reservationCode = Math.floor(Math.random() * 100);

reservationCodeText.innerHTML = `Reservation code: ${reservationCode}`;

},1000);






// Dish name start

const position_8 = document.querySelector('.position_8');
const position_9 = document.querySelector('.position_9');
const position_10 = document.querySelector('.position_10');
const position_11 = document.querySelector('.position_11');
const position_12 = document.querySelector('.position_12');
const position_13 = document.querySelector('.position_13');
const position_14 = document.querySelector('.position_14');
const position_15 = document.querySelector('.position_15');
const position_16 = document.querySelector('.position_16');
const position_17 = document.querySelector('.position_17');
const position_18 = document.querySelector('.position_18');
const position_19 = document.querySelector('.position_19');
const position_20 = document.querySelector('.position_20');
const position_21 = document.querySelector('.position_21');
const position_22 = document.querySelector('.position_22');


// Dish name end






// A function responsible for selecting a specific dish name (async)

position_8.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position8Element = document.createElement('div');
 
    // Creating a new div for input end
  // Creating a new div for value start
  let position8Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position8Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation8" name="numbersReservation8" placeholder="Numbers reservation" value="9">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation8').appendChild(position8Element);

  document.querySelector('.position8Value').appendChild(position8Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement8 = position8Element.querySelector('input');

  // Displaying input value
  position8Value.innerHTML = `${inputElement8.value}`;
});

position_9.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position9Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position9Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position9Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation9" name="numbersReservation9" placeholder="Numbers reservation" value="10">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation9').appendChild(position9Element);

  document.querySelector('.position9Value').appendChild(position9Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement9 = position9Element.querySelector('input');

  // Displaying input value
  position9Value.innerHTML = `${inputElement9.value}`;
});

position_10.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position10Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position10Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position10Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation10" name="numbersReservation10" placeholder="Numbers reservation" value="11">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation10').appendChild(position10Element);

  document.querySelector('.position10Value').appendChild(position10Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement10 = position10Element.querySelector('input');

  // Displaying input value
  position10Value.innerHTML = `${inputElement10.value}`;
});


position_11.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position11Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position11Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position11Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation11" name="numbersReservation11" placeholder="Numbers reservation" value="12">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation11').appendChild(position11Element);

  document.querySelector('.position11Value').appendChild(position11Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement11 = position11Element.querySelector('input');

  // Displaying input value
  position11Value.innerHTML = `${inputElement11.value}`;
});


position_12.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position12Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position12Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position12Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation12" name="numbersReservation12" placeholder="Numbers reservation" value="13">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation12').appendChild(position12Element);

  document.querySelector('.position12Value').appendChild(position12Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement12 = position12Element.querySelector('input');

  // Displaying input value
  position12Value.innerHTML = `${inputElement12.value}`;
});


position_13.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position13Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position13Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position13Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation13" name="numbersReservation13" placeholder="Numbers reservation" value="14">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation13').appendChild(position13Element);

  document.querySelector('.position13Value').appendChild(position13Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement13 = position13Element.querySelector('input');

  // Displaying input value
  position13Value.innerHTML = `${inputElement13.value}`;
});

position_14.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position14Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position14Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position14Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation14" name="numbersReservation14" placeholder="Numbers reservation" value="15">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation14').appendChild(position14Element);

  document.querySelector('.position14Value').appendChild(position14Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement14 = position14Element.querySelector('input');

  // Displaying input value
  position14Value.innerHTML = `${inputElement14.value}`;
});


position_15.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position15Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position15Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position15Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation15" name="numbersReservation15" placeholder="Numbers reservation" value="16">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation15').appendChild(position15Element);

  document.querySelector('.position15Value').appendChild(position15Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement15 = position15Element.querySelector('input');

  // Displaying input value
  position15Value.innerHTML = `${inputElement15.value}`;
});

position_16.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position16Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position16Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position16Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation16" name="numbersReservation16" placeholder="Numbers reservation" value="17">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation16').appendChild(position16Element);

  document.querySelector('.position16Value').appendChild(position16Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement16 = position16Element.querySelector('input');

  // Displaying input value
  position16Value.innerHTML = `${inputElement16.value}`;
});

position_17.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position17Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position17Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position17Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation17" name="numbersReservation17" placeholder="Numbers reservation" value="18">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation17').appendChild(position17Element);

  document.querySelector('.position17Value').appendChild(position17Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement17 = position17Element.querySelector('input');

  // Displaying input value
  position17Value.innerHTML = `${inputElement17.value}`;
});

position_18.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position18Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position18Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position18Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation18" name="numbersReservation18" placeholder="Numbers reservation" value="19">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation18').appendChild(position18Element);

  document.querySelector('.position18Value').appendChild(position18Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement18 = position18Element.querySelector('input');

  // Displaying input value
  position18Value.innerHTML = `${inputElement18.value}`;
});

position_19.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position19Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position19Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position19Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation19" name="numbersReservation19" placeholder="Numbers reservation" value="20">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation19').appendChild(position19Element);

  document.querySelector('.position19Value').appendChild(position19Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement19 = position19Element.querySelector('input');

  // Displaying input value
  position19Value.innerHTML = `${inputElement19.value}`;
});
position_20.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position20Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position20Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position20Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation20" name="numbersReservation20" placeholder="Numbers reservation" value="21">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation20').appendChild(position20Element);

  document.querySelector('.position20Value').appendChild(position20Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement20 = position20Element.querySelector('input');

  // Displaying input value
  position20Value.innerHTML = `${inputElement20.value}`;
});


position_21.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position21Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position21Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position21Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation21" name="numbersReservation21" placeholder="Numbers reservation" value="22">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation21').appendChild(position21Element);

  document.querySelector('.position21Value').appendChild(position21Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement21 = position21Element.querySelector('input');

  // Displaying input value
  position21Value.innerHTML = `${inputElement21.value}`;
});

position_22.addEventListener("click", async () => {

  contenerReservationInfo.style.display = "block";

  // Creating a new div for input start
  let position22Element = document.createElement('div');

    // Creating a new div for input end
  // Creating a new div for value start
  let position22Value = document.createElement('div');

  // Creating a new div for value end

  // Displaying input start
  position22Element.innerHTML = `Numbers reservation: <br><input type="text" id="numbersReservation22" name="numbersReservation22" placeholder="Numbers reservation" value="23">`;

    // Displaying input end
// A new element is added to the selected element as its child start
  document.querySelector('.numbersReservationLocation22').appendChild(position22Element);

  document.querySelector('.position22Value').appendChild(position22Value);

// A new element is added to the selected element as its child end

// defining input
  let inputElement22 = position22Element.querySelector('input');

  // Displaying input value
  position22Value.innerHTML = `${inputElement22.value}`;
});





const textStatus = document.querySelector('.textStatus');
document.querySelector('#reservationsForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  clearInterval(reservationCounter )
  const name = document.querySelector('#name').value;
  const phone = document.querySelector('#phone').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  const number_of_guests = document.querySelector('#number_of_guests').value;
const reservation_date = document.querySelector('#reservation_date').value;
const reservation_time = document.querySelector('#reservation_time').value;

  
  if (name && phone  && email) {
      const formData = new FormData();
      // quantityLocation0
      formData.append('name', name);
      formData.append('phone', phone);
      formData.append('email', email);
      formData.append('number_of_guests',number_of_guests);
      formData.append('reservation_date',reservation_date);
      formData.append('reservation_time',reservation_time);
      formData.append('reservationCode', reservationCode);

              formData.append('position8Value', document.querySelector('#numbersReservation8').value);


              formData.append('position9Value', document.querySelector('#numbersReservation9').value);



      
              formData.append('position10Value', document.querySelector('#numbersReservation10').value);
    

           formData.append('position11Value', document.querySelector('#numbersReservation11').value);
  

            formData.append('position12Value', document.querySelector('#numbersReservation12').value);
  


            formData.append('position13Value', document.querySelector('#numbersReservation13').value);
    

                  formData.append('position14Value', document.querySelector('#numbersReservation14').value);



      formData.append('position15Value', document.querySelector('#numbersReservation15').value);


      formData.append('position16Value', document.querySelector('#numbersReservation16').value);
    

      formData.append('position17Value', document.querySelector('#numbersReservation17').value);


      formData.append('position18Value', document.querySelector('#numbersReservation18').value);


      formData.append('position19Value', document.querySelector('#numbersReservation19').value);
   
      formData.append('position20Value', document.querySelector('#numbersReservation20').value);
 

      formData.append('position21Value', document.querySelector('#numbersReservation21').value);


      formData.append('position22Value', document.querySelector('#numbersReservation22').value);
      


   

      formData.append('message', message);

      try {
          const response = await fetch('reservationConfiguration.php', {
              method: 'POST',
              body: formData
          });
          const data = await response.text();

          if (!data.includes('This date is already booked')) {

    
            const emailResponse = await Email.send({
                SecureToken: '',
              To: 'reservations@hollapolla.nl',
              From: 'reservations@hollapolla.nl',
                  Subject: `Nowa rezerwacja stolika, kod rezerwacji: ${reservationCode}`,
                  Body: `
                      Imię: ${name}<br><br>
                      Telefon: ${phone}<br><br>
                      Email: ${email}<br><br>
                      Liczba osób:  ${number_of_guests} <br><br>
      Data: ${reservation_date}<br><br>
      Godzina: ${reservation_time}<br><br>
                      Kod zamówenia: ${reservationCode} <br><br>
                         Wiadomość od klienta: ${message}<br><br>
                 
                    
                                                 Stolik numer 09: ${document.querySelector('#numbersReservation8').value}<br><br>
                       

                                                Stolik numer 10: ${document.querySelector('#numbersReservation9').value}<br><br>
                      

                                                   Stolik numer 11: ${document.querySelector('#numbersReservation10').value}<br><br>
                      

                                                     Stolik numer 12: ${document.querySelector('#numbersReservation11').value}<br><br>
                   
                                                      Stolik numer 13: ${document.querySelector('#numbersReservation12').value}<br><br>
                    


                                                           Stolik numer 14: ${document.querySelector('#numbersReservation13').value}<br><br>
                        
                        

                                                                          Stolik numer 15: ${document.querySelector('#numbersReservation14').value}<br><br>
                   

                                                                                             Stolik numer 16: ${document.querySelector('#numbersReservation15').value}<br><br>
                        

                                                                                     Stolik numer 17: ${document.querySelector('#numbersReservation16').value}<br><br>
                        

                        
                                                                                     Stolik numer 18: ${document.querySelector('#numbersReservation17').value}<br><br>
              

                                                                                       Stolik numer 19: ${document.querySelector('#numbersReservation18').value}<br><br>
                    

                        
                                                                                       Stolik numer 20: ${document.querySelector('#numbersReservation19').value}<br><br>
              


                                                                                                     Stolik numer 21: ${document.querySelector('#numbersReservation20').value}<br><br>
                      

                                                                                                          Stolik numer 22: ${document.querySelector('#numbersReservation21').value}<br><br>
                  

                                                                                                          Stolik numer 23: ${document.querySelector('#numbersReservation22').value}<br><br>
                 




                        
                  `
              });

              if (emailResponse === 'OK') {
                reservationSummaryBackground.style.display = "block";
                reservationCodeText.style.color = 'greenyellow';
                textStatus.innerHTML = `Your reservation has been accepted!`;
             
                  setTimeout( () => {
                    reservationSummaryBackground.style.display = "none";
                    textStatus.style.display = "none";
                    reservationCodeText.style.display = "none";
                   
                  },5000)
              } else {
                  textStatus.innerHTML = '<br><br>Failed to send the message.<br> This may be due to too many messages being sent at once.<br> Please send your message via hollapolla66@gmail.com <br><br>';
                  textStatus.style.color = 'red';
                
              }
          } else if (data.includes('This date is already booked')) {
              textStatus.innerHTML = 'This date is already booked';
              textStatus.style.color = 'red';
          }
      } catch (error) {
          console.error('Error:', error);
          textStatus.innerHTML = 'An error occurred while sending the reservations.';
          textStatus.style.color = 'red';
      }
  }
});





