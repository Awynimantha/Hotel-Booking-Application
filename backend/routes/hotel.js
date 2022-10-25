const router=require('express').Router();

const Hotel=require("../models/hotelModel")

router.route('/add').post((req,res)=>{
    
      const name=req.body.name
      const location=req.body.location
      const available_rooms=req.body.available_rooms
      const description=req.body.description

      const newhotel=new Hotel({
          name,
          location,
          available_rooms,
          description
      }); 
      newhotel.save().then(()=>res.json("Added")).catch(err=>res.status(400).json('Error '+err));
      
})

router.route('/:id').get((req,res)=>{
    Hotel.findById(req.params.id).then((hotel=>res.json(adver))).catch(err=>res.status(400).json('Error '+err));
})

router.route('/:id').delete((req,res)=>{
    Hotel.findByIdAndDelete(req.params.id).then(hotel=>res.json("deleted")).catch(err=>res.status(400).json('Error '+err));
})

router.route("/update/:id").post((req,res)=>{
    Hotel.findById(req.params.id).then(
        hotel=>{
            hotel.name=req.body.name
            hotel.location=req.body.location
            hotel.available_rooms=req.body.available_rooms
            hotel.description=req.body.description

            hotel.save()
            .then(() => res.json('Hotel updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        }
    ).catch(err=>res.status(400).json('Error '+err));
})

module.exports=router