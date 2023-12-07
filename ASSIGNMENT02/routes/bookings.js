const express = require("express");
const router = express.Router();
const Booking = require('../models/booking');
const Airline = require('../models/airline');

// GET users listing. 
router.get("/", (req, res, next) =>{
    //res.render("bookings/index", {title: "Bookings" });
    Booking.find((err, bookings) => {
        if (err) {
            console.log(err);
        }
        else {
        res.render("bookings/index",
         {title: "Bookings", 
         dataset: bookings,
        });
        }

    });
});


router.get('/add', (req, res, next) =>{
    Airline.find((err, airlines) => {
        if (err) {
            console.log(err);
        }
        else {
    res.render('bookings/add', {title: 'Add a New Booking', airlines: airlines});
        }
    }).sort({ name: -1 });
});


//save
router.post('/add', (req, res, next) => {
    Booking.create({
        name: req.body.name,
        airlineName: req.body.airlineName,
        departureDate: req.body.departureDate,
        departureAirport: req.body.departureAirport,
        arrivalAirport: req.body.arrivalAirport,
        flightNumber: req.body.flightNumber
    }, (err, newBooking) =>{
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/bookings');
        }
    })

});

//delete 
router.get('/delete/:_id', (req, res, next) => {
    // call remove method and pass id as a json object
    Booking.remove({ _id: req.params._id }, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/bookings')
        }
    })
});

// GET handler for Edit operations
router.get('/edit/:_id', (req, res, next) => {

    Booking.findById(req.params._id, (err, booking) => {
        if (err) {
            console.log(err);
        }
        else {
            Airline.find((err, airlines) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.render('bookings/edit', {
                        title: 'Edit a Booking',
                        booking: booking,
                        airlines: airlines
                    });
                }
            }).sort({ name: 1 });
        }
    });
});

// POST handler for Edit operations
router.post('/edit/:_id', (req, res, next) => {

    Booking.findOneAndUpdate({ _id: req.params._id }, {
        airlineName: req.body.airlineName,
        departureDate: req.body.departureDate,
        departureAirport: req.body.departureAirport,
        arrivalAirport: req.body.arrivalAirport,
        flightNumber: req.body.flightNumber
    }, (err, updatedBooking) => {
        if (err) {
            console.log(err)
        }
        else {
            res.redirect('/bookings');
        }
    });
});

module.exports = router;
