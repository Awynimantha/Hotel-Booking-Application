const router=require('express').Router();

const Room=require("../models/roomModel")

router.route('/add').post((req,res)=>{
    
      const hotel=req.body.hotel
      const facility=req.body.facility
      const price=req.body.price
      const location=req.body.location

      const newRoom=new Room({
          hotel,
          facility,
          price,
          location
      }); 
      newRoom.save().then(()=>res.json("Added")).catch(err=>res.status(400).json('Error '+err));
      
})
router.route('/getall').get((req,res)=>{
    Room.find().then((adver=>res.json(adver))).catch(err=>res.status(400).json('Error '+err));
})
router.route('/:id').get((req,res)=>{
    const value=req.params.id
    Room.findById(value).then((adver=>res.json(adver))).catch(err=>res.status(400).json('Error '+err));
})

router.route('/:id').delete((req,res)=>{
    Room.findByIdAndDelete(req.params.id).then(adver=>res.json("deleted")).catch(err=>res.status(400).json('Error '+err));
})

router.route("/update/:id").post((req,res)=>{
    Room.findById(req.params.id).then(
        room=>{
            room.hotel=req.body.hotel
            room.facility=req.body.facility
            room.price=req.body.price
            room.location=req.body.location

            room.save()
            .then(() => res.json('Room updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        }
    ).catch(err=>res.status(400).json('Error '+err));
})

module.exports=router