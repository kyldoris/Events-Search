
// // WAYS TO request data via our API and JS
// // 1. jQuery's $.ajax()
// // 2. tje browser fetch
// //3. JS HTTP client called Axios - installed 
// console.log('connected')
// console.log($.ajax('https://www.omdbapi.com/?apikey=83ec9128=titan'))


////////////////////////////////////////////////////////////////////////
// VARIABLES
// ////////////////////////////////////////////////////////////////////////
// const URL = "https://app.ticketmaster.com/discovery/v2/events.json?size=50&apikey=GWOqtM28DNuPgxuINJAehHv60umwRwjr";


// ////////////////////////////////////////////////////////////////////////
// // CACHED ELEMENTS/ ELEMENTS REFRENCES
// ////////////////////////////////////////////////////////////////////////

// // const $title = $('#title')
// // const $year = $('#year')
// // const $rated = $('#rated')
// const $form = $('form')
// const $input = $('input[type="text"]') //< js know specifically which input to look for 

// ////////////////////////////////////////////////////////////////////////
// //EVENT LISTENERS
// ////////////////////////////////////////////////////////////////////////
// $form.on('submit', handleGetData)



////////////////////////////////////////////////////////////////////////
// FUNCTIONS
////////////////////////////////////////////////////////////////////////
// function handleGetData(event) {
//     event.preventDefault() //< to stop broswer from refreshing every time we click 
//     userInput = $input.val ()
//     if (userInput === '') return;

// $.ajax(URL+userInput).then(
//     function (json) {
//         console.log("movie is ready!");
//         console.log(json);
//         // $title.text(data.Title)
//         // $year.text(data.Year)
//         // $rated.text(data.Rated)
//         // $('main').append(`<img src="${data.Poster}" alt="${data.Title}"/>`)
//         // $input.val('')
//     },
//     function (error) {
//         console.log("we broke it!")
//         console.log(error);
//     }
// // );
$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?size=100&apikey=GWOqtM28DNuPgxuINJAehHv60umwRwjr",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
        });