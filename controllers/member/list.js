const Member = require('../../models/member/member')

// Display list of all Members.
exports.member_list = async (req, res) => {
    const memberList = await Member.find()
    res.send(memberList[0])
};

// Display list of Members by name.
exports.member_list_name = async (req, res) => {
    const member = await Member.find({name:req.params.name})
    res.send(member[0])
};