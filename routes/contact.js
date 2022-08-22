import express from 'express'
import multer from "multer";
const router = express.Router()

import { deleteContact, getContact, updateContact ,searchContact, addContact} from '../controller/contactController.js';

import path from 'path'


const storage = multer.diskStorage({
   destination : (req,file,cb) =>{
      cb(null, `uploads/${file.fieldname}`)
   },

   
   filename : (req,file,cb) =>{
      cb(null, `${Date.now()} - ${file.originalname}`);
   }
})


const upload = multer({storage})


// @ /api/contact/add
router.post('/add', upload.single('photo'),addContact)

// @ /api/contact
router.get('/', getContact)

// @ /api/contact
router.put('/:id', updateContact)

// @ /api/contact/123
router.delete('/:id', deleteContact)


// @ /api/contact/searh?name=deepak&contactno=9877623120
router.get('/searh/:key', searchContact)


export default router