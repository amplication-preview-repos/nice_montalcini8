/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GraphWhereUniqueInput } from "./GraphWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class GraphFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => GraphWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GraphWhereUniqueInput)
  @Field(() => GraphWhereUniqueInput, { nullable: false })
  where!: GraphWhereUniqueInput;
}

export { GraphFindUniqueArgs as GraphFindUniqueArgs };
