import { prop as Property, Typegoose } from 'typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';

import { User } from '../user/model';
import { Ref } from '../../../types';

@ObjectType()
export class Directorate extends Typegoose {
    @Field()
    readonly _id: ObjectId;

    @Field()
    @Property({ required: true })
    title: string;

    @Field(type => User)
    @Property({ ref: User, required: true })
    createdBy: Ref<User>;

    @Field(type => User)
    @Property({ ref: User, required: true })
    updatedBy: Ref<User>;
}

export const DirectorateModel = new Directorate().getModelForClass(
    Directorate,
    { schemaOptions: { timestamps: true } },
);