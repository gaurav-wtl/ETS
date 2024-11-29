import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
  otp: { type: String, required: true },
  employeeId: {type:String, required: true},
  createdAt: { type: Date, default: Date.now, expires: 300 }, // OTP expires after 5 minutes
});

const Otp = mongoose.model('Otp', otpSchema);
export default Otp;