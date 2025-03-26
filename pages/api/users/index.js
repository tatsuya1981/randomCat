"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sample_data_1 = require("../../../utils/sample-data");
const handler = (_req, res) => {
    try {
        if (!Array.isArray(sample_data_1.sampleUserData)) {
            throw new Error("Cannot find user data");
        }
        res.status(200).json(sample_data_1.sampleUserData);
    }
    catch (err) {
        res.status(500).json({ statusCode: 500, message: err.message });
    }
};
exports.default = handler;
