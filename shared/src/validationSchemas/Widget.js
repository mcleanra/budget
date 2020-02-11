const Yup = require('yup');
const {
    generateValidatorForSingleRecord,
    generateValidatorForMultipleRecords,
} = require('./helpers');

const defaultSchema = Yup.object().shape({
    title: Yup.string()
        .trim()
        .required('Title is required'),
});

module.exports = {
    Widget: {
        yupSchemas: {
            defaultSchema,
        },
        graphqlMutations: {
            WidgetCreateOne: generateValidatorForSingleRecord(
                defaultSchema,
            ),
            WidgetUpdateById: generateValidatorForSingleRecord(
                defaultSchema,
            ),
        },
    },
};
