import connection from '../config/database.js'

export const getHomePage = (req,res) =>{

    let users = [];

   connection.query(
    'SELECT * FROM nodejs.User',
    function ( err,results, fields){
        users = results;
        console.log(">>> result homepage = ", results)

        console.log('>>> check user: ', users)
    res.send(JSON.stringify(results))
    }
  );

  
}

