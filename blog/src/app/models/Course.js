const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema ({
    name: { type: String, required: true, maxlength: 255 },
    description: { type: String, maxlength: 600 },
    image: { type: String, maxlength: 255 },
    videoId: { type: String, maxlength: 255 },
    level: { type: String, maxlength: 255 },
    slug: { type: String, slug: 'name', unique: true },
    // createdAt: { type: Date, default: Date.now },
    // updatedAt: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);
