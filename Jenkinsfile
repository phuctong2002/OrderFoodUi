pipeline {
    agent any
    
    environment {
        NODEJS_HOME = tool 'NodeJS'
    }

    stages {
        stage('test') {
            steps {
                echo "Testing..."
            }
        }
        stage("build image"){
            steps{
                echo "Building image..."
                script{
                    docker.build('orderfoodui')
                }
            }
        }
        
    }
    

}
