import Coordinate from "../models/coordinatesModel.js";
import asyncHandler from "../middlewares/asyncHandler.js";

// desc create Coordinates
// route POST /api
// @desc Public
const createCoordinate = asyncHandler(async(req,res) => {
  const {lat, lng} = req.body
  const coordinate = await Coordinate.create({lat,lng})

  if(coordinate){
    res.status(201).json({
      lat: coordinate.lat,
      lng: coordinate.lng
    })
  }else{
    res.status(400);
    throw new Error("Invalid Coordinate Data")
  }
})


// desc GET Coordinates
// route GET /api
// @desc Public
const getCoordinates = asyncHandler(async(req,res) => {
  const coordinates = await Coordinate.find({})
  if(coordinates){
    res.status(200).send(coordinates)
  }else{
    res.status(400)
    throw new Error("Coordinates not found")
  }
})

export {createCoordinate , getCoordinates}