import mongoose from 'mongoose'
const AppointmentSchema=new mongoose.schema ({
      tenantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Salon",
        required: true,
        index: true
      },
     customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
     },
        serviceId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service",
            required: true
        },
        startTime:{
             type: Date,
            required: true
        },
        endTime:{
             type: Date,
            required: true
        },
     
        status: {
            type: String,
            enum: ['booked', 'completed', 'cancelled'],
            default: 'booked'
        },
       notes:String,
},{timestamps:true})

export const Appointment= mongoose.model('Appointment', AppointmentSchema);