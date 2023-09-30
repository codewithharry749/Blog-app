
const mongoose = require('mongoose');

const BlogShedul = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    place: {
        type: String,
        required: false
    },
    amount: {
        type: String,
        required: false
    },
});

const VlogscheduleSchema = mongoose.model("vlog_Schedule_list", BlogShedul);

module.exports = VlogscheduleSchema