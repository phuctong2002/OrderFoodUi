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
                    bat "docker build -t orderfood:latest . \
                    && docker tag orderfood:latest vanphuc15092002/orderfood:latest \
                    && docker login -u vanphuc15092002 -p vanphuc15092002 \
                    && docker push vanphuc15092002/orderfood:latest"
                    
                }
            }
        }
        
    }
    

}
