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
                    bat "docker build -t orderfood \
                    && docker tag orderfood:latest vanphuc15092002/orderfood:latest \
                    && echo vanphuc15092002 && docker login -u vanphuc15092002 --password-stdin \
                    && docker push vanphuc15092002/orderfood:latest"
                    
                }
            }
        }
        
    }
    

}
