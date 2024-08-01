import { Document, model, models, Schema } from "mongoose";


export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageUrl: string;
    startDateTime: Date;
    endDateTime: Date;
    price: string;
    isFree: boolean;
    url?: string;
    category: { _id: string, name: string }
    organizer: { _id: string, firstName: string, lastName: string }
  }

const EventSchema = new Schema({
   title:{type:String, required : true},
   description:{type:String, required : true},
   startDateTime:{type:String, default:Date.now},
   endDateTime:{type:String, default:Date.now},
   location:{type:String},
   price:{type:String},
   isFree: {type:Boolean, default: false},
   url:{type: String},
   imageUrl:{type:String, required: true},
   category:{type: Schema.Types.ObjectId, ref: 'Category'},
   organizer:{type: Schema.Types.ObjectId, ref: 'User'},
   createdAt: {type:String, default:Date.now}
})

const Event = models.User || model('User', EventSchema)
export default Event