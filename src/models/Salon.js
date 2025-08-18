import mongoose from "mongoose";

const SalonSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  slug: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  logoUrl: {
    type: String
  },
  category: {
    type: String,
    enum: [ "saloon", "spa", "beautyparlour"],
    default: "saloon",
    required: true
  },
  plan:{
    type:String,
    enum: ["basic", "enterprise", "premium"],
    default: "basic"
  },
   status: { 
    type: String, 
    enum: ["active", "inactive"],
    default: "active"
  },
  branches: [{
    name:{
      type: String,
      required: true
    },
      address: {
    type: String,
    required: true 
  },
   phone:{
     type: String,
     required: true
   },
    type: mongoose.Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  }],

}, { timestamps: true });

export const Salon = mongoose.model("Salon", SalonSchema);