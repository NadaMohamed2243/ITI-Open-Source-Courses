<?php
// $connection = new PDO("mysql:host=localhost;dbname=phpstudents", "root", "root");

class Db{
    private $host="localhost";

    private $dbname="phpstudents";

    private $user="root";

    private $password="root";

    private $connection= "";

    function __construct(){
        $this->connection = new PDO("mysql:host=$this->host;dbname=$this->dbname", $this->user, $this->password);

    }

    function get_connection(){
        return $this->connection;
    }

    // function get_data($table_name,$cols,$condition=1){
    //     $data=$this->connection->query("select $cols from $table_name where $condition");
    //     return $data;
    // }

    function get_data($table_name, $cols = "*", $joins = "", $condition = "1", $extra = "") {
        $query = "SELECT $cols FROM $table_name $joins WHERE $condition $extra";
        $data = $this->connection->query($query);
        return $data;
    }
    

    function delete_data($table_name,$condition= 1){
        // DELETE FROM users WHERE id = ?
        $data=$this->connection->query("DELETE FROM $table_name WHERE $condition");
        return $data;
    }

    function insert_data($table_name,$cols,$values){
        $data=$this->connection->query("INSERT INTO $table_name ($cols) VALUES ($values)");
        return $data;
    }

    function update_data($table_name,$colval,$condition=1){
        //UPDATE users SET first_name = ?, last_name = ?, address = ?, country = ?, gender = ?, username = ?, password = ?, image_name = ? WHERE id = ?
        $data=$this->connection->query("UPDATE $table_name SET $colval WHERE $condition");
        return $data;
    }
}

?>