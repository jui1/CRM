const Enquiry = require('../models/Enquiry');

exports.createEnquiry = async (req, res) => {
    try {
        const { name, email, mobile, message } = req.body;
        const newEnquiry = new Enquiry({ name, email, mobile, message });
        await newEnquiry.save();
        res.status(201).json(newEnquiry);
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ error: 'Email already exists' });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
};

exports.getEnquiries = async (req, res) => {
    try {
       
        const enquiries = await Enquiry.find();
        res.status(200).json(enquiries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



exports. getEnquiriesummm = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const enquiry = await Enquiry.findById(id);
        if (!enquiry) {
            return res.status(404).json({ message: 'Enquiry not found' });
        }
        res.status(200).json(enquiry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

