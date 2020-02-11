import { prop as Property, Typegoose } from 'typegoose';
import { ObjectId } from 'mongodb';
import { Field, InputType, ObjectType } from 'type-graphql';

import { User } from '../user/model';
import { Ref } from '../../../types';

@ObjectType()
export class SpendPlanDraft extends Typegoose {
    @Field()
    readonly _id: ObjectId;

    @Field()
    @Property({ required: true })
    title: string;

    @Field({ nullable: true })
    @Property({ required: false })
    date: Date;

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
    title: string;

    @Field()
    date: Date;
}
