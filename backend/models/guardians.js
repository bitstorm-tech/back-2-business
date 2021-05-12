import { model, models, Schema } from 'mongoose';

const guardianSchema = new Schema({
  name: {type: String, required: true}
});

const Guardian = models.Guardian || model('Guardian', guardianSchema);
export default Guardian;
