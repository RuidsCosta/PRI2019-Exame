const Pub = require('../models/obras');

const Obras = module.exports;

Obras.index = query => {
      return Pub
      .find()
      .select({ "_id": 0, "@id": 1, titulo: 1, tipo: 1, compositor: 1 })
      .exec();

};
Obras.filtrarComp = () => {
  return Pub
          .aggregate([{$group: {_id : "$compositor" ,"obras" : {"$addToSet": "$$ROOT"}}},
              {
                  "$project": {
                  "_id":0,
                  "compositor" : "$_id",
                  "obras._id": 1,
                  "obras.titulo":1
                  }
              }
          ])
          .exec()
}

Obras.filtrarInst = () => {
  return Pub
    .aggregate([{"$unwind": "$instrumentos.instrumento" },{$group: {_id : "$instrumentos.instrumento.designacao" ,"obras" : {"$addToSet": "$$ROOT"}}},
      {
          "$project": {
          "_id":0,
          "instrumento" : "$_id",
          "obras._id": 1,
          "obras.titulo":1
          }
      }
  ])
  .exec()
}



Obras.showId = id => {
  return Pub
    .find({ "@id": id })
    .exec();
};
