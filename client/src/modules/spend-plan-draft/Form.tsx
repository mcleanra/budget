import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
    Stack,
    TextField,
    PrimaryButton,
} from 'office-ui-fabric-react';
import { validationSchemas } from 'shared';

import {
    handleTextFieldChange,
    FormErrors,
} from '../common/formHelpers';
import {
    SpendPlanDraftUpdateByIdMutationVariables as UpdateByIdMutationVariables,
    SpendPlanDraftCreateOneMutationVariables as CreateOneMutationVariables,
} from '../../generated/graphql';

const validationSchema =
    validationSchemas.SpendPlanDraft.yupSchemas.defaultSchema;

export type FormData =
    | CreateOneMutationVariables
    | UpdateByIdMutationVariables;

interface Props {
    initialValues: Partial<FormData>;
    onSubmit: (formData: FormData) => void;
}

const CustomForm: React.FC<Props> = props => {
    const {
        register,
        errors,
        handleSubmit,
        setValue,
        triggerValidation,
    } = useForm({
        validationSchema,
        defaultValues: props.initialValues,
    });

    useEffect(() => {
        register({ name: 'fiscalYear' });
        register({ name: 'directorate' });
    }, [register]);

    const formErrors = errors as FormErrors;

    return (
        <React.Fragment>
            <form
                onSubmit={handleSubmit(data =>
                    props.onSubmit(data as FormData),
                )}
            >
                <Stack tokens={{ childrenGap: 10 }}>
                    <Stack horizontal tokens={{ childrenGap: 20 }}>
                        <Stack.Item grow>
                            <TextField
                                name="fiscalYear"
                                defaultValue={
                                    props.initialValues.title
                                }
                                label="Fiscal Year"
                                placeholder="Fiscal Year"
                                autoComplete="off"
                                onChange={handleTextFieldChange(
                                    setValue,
                                    triggerValidation,
                                )}
                                errorMessage={
                                    formErrors.title
                                        ? formErrors.title.message
                                        : ''
                                }
                            />
                        </Stack.Item>
                        <Stack.Item grow>
                            <TextField
                                name="directorate"
                                defaultValue={
                                    props.initialValues.title
                                }
                                label="Directorate"
                                placeholder="Directorate"
                                autoComplete="off"
                                onChange={handleTextFieldChange(
                                    setValue,
                                    triggerValidation,
                                )}
                                errorMessage={
                                    formErrors.title
                                        ? formErrors.title.message
                                        : ''
                                }
                            />
                        </Stack.Item>
                    </Stack>
                </Stack>
                <br />
                <PrimaryButton type="submit" text="Save" />
            </form>
        </React.Fragment>
    );
};

export default CustomForm;
