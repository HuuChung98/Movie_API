import express from "express";

import {
    booking,
    getListRoomTicket,
    createShowtime
} from "../../controllers/ManageBooking/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post(
    "/booking/", booking
)

bookingRouter.get(
    "/list-roomTicket/:showtimes_id", getListRoomTicket
);

bookingRouter.post(
    "/create-showtime", createShowtime
);

export default bookingRouter;