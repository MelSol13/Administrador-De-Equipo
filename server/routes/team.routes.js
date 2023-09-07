const TeamController = require("../controllers/team.controller");

module.exports = app => {
    app.get('/api/teams', TeamController.get_all);
    app.post('/api/teams', TeamController.create_team);
    app.get('/api/teams/:id', TeamController.get_team);
    app.put('/api/teams/:id', TeamController.update_team);
    app.delete('/api/teams/:id', TeamController.delete_team);
}