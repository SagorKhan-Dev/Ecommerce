const MerchantList = require("../models/merchantSchema");
const UserList = require("../models/userSchema");

async function becomeMerchantController(req, res) {
  const { storename, officialemail, officialphone, address, owner } = req.body;

  const merchant = new MerchantList({
    storename,
    officialemail,
    officialphone,
    address,
    owner,
  });
  merchant.save();
  await UserList.findByIdAndUpdate(
    { _id: owner },
    { role: "merchant" },
    { new: true }
  );
  res.json({ success: "Congratulations, You've become a merchant" });
}

module.exports = becomeMerchantController;
