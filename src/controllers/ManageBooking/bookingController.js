import initModels from "../../models/init-models.js";
import sequelize from "../../models/index.js";
import { successCode, failCode, errorCode } from "../../config/response.js";
import Booking_Ticket from "../../models/Booking_Ticket.js";

let models = initModels(sequelize);

const booking = async (req, res) => {
    try {
        let {user_id, showtimes_id, chair_id } = req.body;
        let bookTicket = {
            user_id,
            showtimes_id, 
            chair_id
        }

        await models.Booking_Ticket.create(bookTicket);
        successCode(res, "booking ticket successful");
    } catch (error) {
        errorCode(res, "error in server");
    }
};

const getListRoomTicket = async(req, res) => {
    try {
        let { showtimes_id } = req.params;
        let list_roomTicket = await models.Showtimes.findAll({
            include: [{
                model: Booking_Ticket,
                as: "Booking_Tickets",
                required: false
            }],
            where: { id: showtimes_id }
        });
        successCode(res, list_roomTicket, "Get data successful");
    } catch (error) {
        errorCode(res, "error in server");
    }
};

const createShowtime = async(req, res) => {
    try {
        let { theater_id, movie_id, date_showtimes, price_ticket } = req.body;
        let creShowtimev = {
            theater_id, movie_id, date_showtimes, price_ticket
        };

        await models.Showtimes.create(creShowtimev);
        successCode(res, "Create showtimes successful");
    } catch (error) {
       errorCode(res, "error in server"); 
    }
}

export {
    booking,
    getListRoomTicket,
    createShowtime
}
