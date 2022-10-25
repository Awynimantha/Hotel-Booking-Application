const router=require('express').Router();

const Advertisement=require("../models/advertisementModel")

router.route('/add').post((req,res)=>{
    
      const title1=req.body.title1
      const title2=req.body.title2
      const title3=req.body.title3
      const description=req.body.description

      const newAdvertisment=new Advertisement({
          title1,
          title2,
          title3,
          description
      }); 
      newAdvertisment.save().then(()=>res.json("Added")).catch(err=>res.status(400).json('Error '+err));
      
})

router.route("/getall").get((req,res)=>{
    Advertisement.find().then(adver=>res.json(adver)).catch(err=>res.status(400).json('Error '+err));
})

router.route('/:id').get((req,res)=>{
    Advertisement.findById(req.params.id).then((adver=>res.json(adver))).catch(err=>res.status(400).json('Error '+err));
})

router.route('/:id').delete((req,res)=>{
    Advertisement.findByIdAndDelete(req.params.id).then(adver=>res.json("deleted")).catch(err=>res.status(400).json('Error '+err));
})

router.route("/update/:id").post((req,res)=>{
    Advertisement.findById(req.params.id).then(
        adver=>{
            adver.title1=req.body.hotel
            adver.title2=req.body.roomtype
            adver.title3=req.body.price
            adver.description=req.body.description

            adver.save()
            .then(() => res.json('Advertisement updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
        }
    ).catch(err=>res.status(400).json('Error '+err));
})

module.exports=router