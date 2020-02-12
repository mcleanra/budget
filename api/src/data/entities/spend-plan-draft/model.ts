import { prop as Property, Typegoose } from 'typegoose';
import { ObjectId } from 'mongodb';
import { Field, InputType, ObjectType } from 'type-graphql';

import { User } from '../user/model';
import { Ref } from '../../../types';
import { Directorate } from '../directorate/model';

@ObjectType()
export class SpendPlanDraft extends Typegoose {
    @Field()
    readonly _id: ObjectId;

    @Field()
    @Property({ required: true })
    fiscalYear: string;

    @Field(type => Directorate)
    @Property({ ref: Directorate })
    directorate: Ref<Directorate>;

    @Field()
    @Property()
    json: string;

    @Property({ default: () => Date.now() })
    @Field()
    createdAt: Date;

    @Field(type => User)
    @Property({ ref: User, required: true })
    createdBy: Ref<User>;

    @Property({ default: () => Date.now() })
    @Field()
    updatedAt: Date;

    @Field(type => User)
    @Property({ ref: User, required: true })
    updatedBy: Ref<User>;
}

export const SpendPlanDraftModel = new SpendPlanDraft().getModelForClass(
    SpendPlanDraft,
    {
        schemaOptions: { timestamps: true },
    },
);

@InputType()
export class SpendPlanDraftInput implements Partial<SpendPlanDraft> {
    @Field()
    fiscalYear: string;

    @Field(type => Directorate)
    directorate: Directorate;

    @Field()
    json: string;
}
