



const $form = $('form')
const $input = $('input[type="text"]')
// const $input = document.getElementById('searchBar').value //< js know specifically which input to look for
// const UseInput = "EDM" 


$form.on('submit', handleGetData)


function handleGetData(event) {
   event.preventDefault() //< to stop broswer from refreshing every time we click 
    userInput = $input.val();
   if (userInput === '') return;

const URL = "https://app.ticketmaster.com/discovery/v2/events.json?keyword="+userInput+"&countryCode=US&size=20&apikey=GWOqtM28DNuPgxuINJAehHv60umwRwjr"

$.ajax(URL).then(

    function(json) {
      
               $('.information').html("<h2><b>EVENTS & DETAILS</b></h2><hr>")

                const eventInfoList = [];
                const eventInfo =  json._embedded.events;
                for (let i = 0; i < eventInfo.length; i++) {
                  const eventInfoList = eventInfo[i];
                     console.log(eventInfoList)

               $('.information').append(
                  "<h3>" + eventInfo[i].name + "</h3>" +
                  "<p><img src='" + eventInfo[i].images[5].url + "' width='305'></p>"+
                  "<p>Event's Date: " + eventInfo[i].dates.start.localDate + "</p>"+
                  "<p>Sales Date: " + eventInfo[i].sales.public.startDateTime + "</p>"+
                  "<p>Event's ID: " + eventInfo[i].id + "</p>"+
                  "<p>For more info: <a href ='" + eventInfo[i].url + "'>" + eventInfo[i].url + "</a></p>"+
               
                  "<hr>"
               );
                }
   
             },
    function(xhr, status, err) {
        console.log('Sorry! We broke it! Check back later!')
               // This time, we do not end up here!
            }
  
        // }
           ); 
        
};
// handleGetData("edm");


