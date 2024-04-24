import mongoose from "mongoose";

const coordinateSchema = new mongoose.Schema({
  lat : {
    type : Number,
    required: true
  },
  lng : {
    type : Number,
    required: true
  }
},
{
  timestamps: true,
}
)

const Coordinate = mongoose.model("Coordinate", coordinateSchema)
export default Coordinate
