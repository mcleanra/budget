const { composeWithMongoose } = require('graphql-compose-mongoose/node8');

const Directorate = require('../directorate');
const { typeComposer: UserTC } = require('./user');
const { addReference, generateValidators } = require('../../config/schemaHelpers');
const { validationSchemas: { directorateSchema } } = require('shared');

const DirectorateTC = composeWithMongoose(Directorate, {});

// two fields on Directorate are of type User
addReference([{ name: 'createdBy' }, { name: 'updatedBy' }], DirectorateTC, UserTC,
    (doc, ctx) => {
        doc.createdBy = ctx.user._id;
        doc.updatedBy = ctx.user._id;
        return doc;
    },
    (doc, ctx) => {
        if (doc) {
            doc.updatedBy = ctx.user._id;
        }
        return doc;
    }
);

const validators = generateValidators('Directorate', directorateSchema);

module.exports = {
    typeComposer: DirectorateTC,
    validators
};