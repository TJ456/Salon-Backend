import mongoose from 'mongoose';

const SubscriptionSchema=new mongoose.schema({
      tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Salon",
        required:true,
        index: true
      },
      plan :{
        type: String,
        enum: ['basic', 'enterprise', 'premium'],
        required: true  
      },
      start: {
        type: Date,
        required: true,
        default: Date.now,
      },
      end: {
        type: Date,
        required: true
      },
      status: {
        type: String,
        enum: ['active', 'pastdue', 'cancelled'],
        default: 'active'
      }
},{timestamps: true});

export const Subscription = mongoose.model("Subscription", SubscriptionSchema); 