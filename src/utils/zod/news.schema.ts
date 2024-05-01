import { z } from "zod";
import { stringField } from "./common.schema";

export const NewsSchema = z.object({
  title : stringField('Title'),
  description : stringField('Description')
})