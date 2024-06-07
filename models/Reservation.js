const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    pickup_date: Date,
    return_date: Date,
    duration: String,
    discount: Number,
    customer: {
        type: mongoose.Schema.Types.UUID,
        ref: "User",
    },
    vehicle: {
        type: mongoose.Schema.Types.UUID,
        ref: "vehicle",
    },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
