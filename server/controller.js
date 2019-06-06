module.exports = {
    createUser: (req,res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;

        db.create_user([username, password])
            .then((dbResponse) => {
                res.status(200).send('Created user');
            }).catch((error) => {
                console.log('Create user:', error)
            });
    },
}