const router=require('express').Router();

const Booking=require("../models/bookingModel")

router.route('/add').get((req,res)=>{
    
      const customer_name=req.body.customer_name
      const hotel_name=req.body.hotel_name
      const room_number=req.body.room_number
      const checking_date=req.body.checking_date

      const newBooking=new Client({
          customer_name,
          hotel_name,
          room_number,
          checking_date
      }); 
      newBooking.save().then(()=>res.json("Added")).catch(err=>res.status(400).json('Error '+err));
      
})

router.route('/:id').get((req,res)=>{
    Booking.findById(req.params.id).then((client=>res.json(adver))).catch(err=>res.status(400).json('Error '+err));
})

router.route('/:id').delete((req,res)=>{
    Booking.findByIdAndDelete(req.params.id).then(client=>res.json("deleted")).catch(err=>res.status(400).json('Error '+err));
})

router.route("/update/:id").post((req,res)=>{
    Booking.findById(req.params.id).then(
        booking=>{
            booking.name=req.body.customer_name
            booking.age=req.body.hotel_name
            booking.contact_number=req.body.room_number
            booking.email=req.body.checking_date

            booking.save()
            .then(() => res.json('Booking added!'))
            .catch(err => res.status(400).json('Error: ' + err));
        }
    ).catch(err=>res.status(400).json('Error '+err));
})

module.exports=router