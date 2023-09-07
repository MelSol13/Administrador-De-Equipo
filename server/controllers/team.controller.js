const Team = require("../models/team.model");

module.exports.get_all = (req, res) => {
    Team.find().sort({nombre: 1}) // 1= Ascendiente(A-Z) -1= Descendiente (Z-A)
        .then(teams => res.json(teams))
        .catch(err =>{
            res.status(400).json(err);
        });
}

module.exports.create_team = (req, res) => {
    Team.create(req.body)
        .then(team => res.json(team))
        .catch(err =>{
            res.status(400).json(err);
        });//aca se aplican las validaciones que hicimos en model
}

module.exports.get_team = (req, res) => {
    //req.params.id = 12345
    Team.findOne({_id: req.params.id})
    .then(team => res.json(team))
    .catch(err =>{
        res.status(400).json(err);
});

}

module.exports.update_team = (req, res) => {
    Team.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(team => res.json(team))
    .catch(err =>{
        res.status(400).json(err);
});

}

module.exports.delete_team = (req, res) => {
    Team.deleteOne({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err =>{
        res.status(400).json(err);
});
}