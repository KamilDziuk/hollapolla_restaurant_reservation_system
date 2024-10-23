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



   table_number = document.querySelector('#table_number').value = "9";


  

});

position_9.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "10";
});

position_10.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "11";
});


position_11.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "12";
});


position_12.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "13";
});


position_13.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "14";
});

position_14.addEventListener("click", async () => {


  table_number = document.querySelector('#table_number').value = "15";
});


position_15.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "16";
});

position_16.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "17";
});

position_17.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "18";
});

position_18.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "19";
});

position_19.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "20";
});
position_20.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "21";
});


position_21.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "22";
});

position_22.addEventListener("click", async () => {

  table_number = document.querySelector('#table_number').value = "23";
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
const table_number = document.querySelector('#table_number').value;

  

      let formData =  new FormData();


      formData.append('reservation_date',reservation_date);
      formData.append('reservation_time',reservation_time);
   formData.append('table_number',table_number);

   


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
                 
                    
                                                 Numer stolika: ${document.querySelector('#table_number').value}<br><br>
                       




                        
                  `
              });

              if (emailResponse === 'OK') {
                reservationSummaryBackground.style.display = "block";
                reservationCodeText.style.color = 'greenyellow';
                textStatus.innerHTML = `Your reservation has been accepted!<br>
                Reservation: number table: ${document.querySelector('#table_number').value}, date: ${reservation_date}, time:  ${reservation_time} `;
             
                  setTimeout( () => {
                    reservationSummaryBackground.style.display = "none";
                    textStatus.style.display = "none";
                    reservationCodeText.style.display = "none";
                   
                  },5000)
              } else {
                reservationSummaryBackground.style.display = "block";
                  textStatus.innerHTML = '<br><br>Failed to send the message.<br> This may be due to too many messages being sent at once.<br> Please send your message via rezerwacjehollapolla@gmail.com <br><br>';
                  textStatus.style.color = 'red';
                  reservationCodeText.style.display = "none";
                  setTimeout( () => {
                    reservationSummaryBackground.style.display = "none";
                    textStatus.style.display = "none";
                    reservationCodeText.style.display = "none";
                   
                  },5000)
              }
          } else if (data.includes('This date is already booked')) {
            reservationSummaryBackground.style.display = "block";
            reservationCodeText.style.display = "none";
              textStatus.innerHTML = `The table with the number: ${document.querySelector('#table_number').value} and date: ${reservation_date} and time:  ${reservation_time} is already reserved. Please select another table or time`;
              textStatus.style.color = 'red';
              setTimeout( () => {
                reservationSummaryBackground.style.display = "none";
                textStatus.style.display = "none";
                reservationCodeText.style.display = "none";
               
              },5000)
          }
      } catch (error) {
          console.error('Error:', error);
          textStatus.innerHTML = 'An error occurred while sending the reservations.';
          textStatus.style.color = 'red';
      }
  
});





