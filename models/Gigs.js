import mongoose from "mongoose";
const gigSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },            
    price: { type: Number, required: true },
    category:{type:String,
        enum:[
            "Editing & Post Production",
      "Social & Marketing",
      "Presenter Videos",
      "Explainer Videos",
      "Animation",
      "Product Videos",
      "Motion Graphics",
      "Filmed Video Production",
      "Miscellaneous"
        ],
        required: true,
        index: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },

});

export default Gig = mongoose.models.Gig || mongoose.model("Gig", gigSchema);