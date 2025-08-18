import mongoose from 'mongoose';
const ServiceSchema = new mongoose.Schema({
    tenantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Salon",
    required:true,
    index: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  durationMin: {
    type: Number,
    required: true
  },
  tax: {
    type: Number,
    default: 0
  },
  isActive:{
    type: Boolean,
    default: true
  }
}, { timestamps: true });

export const Service = mongoose.model("Service", ServiceSchema);
