<?php
require "./vendor/autoload.php";

class Database{
    
    // CHANGE THE DB INFO ACCORDING TO YOUR DATABASE
    private $db_host = '';
    private $db_name = '';
    private $db_username = '';
    private $db_password = '';

    function __construct() {
        // Load database credentials from environment variables
        $dotenv = Dotenv\Dotenv::createImmutable('./');
        $dotenv->load();
        // Set database credentials
        $this->db_host = $_ENV['DB_HOST'];
        $this->db_name = $_ENV['DB_NAME'];
        $this->db_username = $_ENV['DB_USERNAME'];
        $this->db_password = $_ENV['DB_PASSWORD'];
    }
    
    public function dbConnection(){
        try{
            $conn = new PDO('mysql:host='.$this->db_host.';dbname='.$this->db_name,$this->db_username,$this->db_password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }
        catch(PDOException $e){
            echo "Connection error ".$e->getMessage(); 
            exit;
        }
          
    }
}
?>