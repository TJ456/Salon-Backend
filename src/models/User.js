import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  tenantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Salon",
    required: null
  },
  name: {
    type: String,
    required: true,
    trim: true 
  },
  email: { 
    type: String,
     required: true, 
     unique: true, 
     lowercase: true 
  },
  password: { 
    type: String,
     required: true 
  },
  phone: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    enum: ["customer", "owner", "superadmin"],
    default: "customer"
  }
}, { timestamps: true });

export const User = mongoose.model("User", UserSchema);
