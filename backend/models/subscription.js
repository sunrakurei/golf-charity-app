const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema(
{
user: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
required: true
},

plan: {
    type: String,
    required: true
},

status: {
    type: String,
    default: "Active"
}

},
{
timestamps: true
}
);

module.exports = mongoose.model(
"Subscription",
subscriptionSchema
);