const Subscription = require("../models/subscription");

const createSubscription = async (req, res) => {

try {

const { userId, plan } = req.body;

const subscription = await Subscription.create({
user: userId,
plan
});

res.status(201).json({
message: "Subscription activated successfully",
subscription
});

}

catch (error) {

res.status(500).json({
message: error.message
});

}

};

module.exports = {
createSubscription
};
