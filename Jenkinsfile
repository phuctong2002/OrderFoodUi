pipeline {
    agent any
    
    environment {
        NODEJS_HOME = tool 'NodeJS'
    }

    stages {
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
        stage('pull image and run') {
            steps {
                script{
                    def deploying = "#!/bin/bash\n" + 
                    "docker rm -f vanphuc15092002/orderfood:latest \n" + 
                    "docker pull vanphuc15092002/orderfood:latest \n"  + 
                    "docker run --name orderfoodcontainer -dp 3000:3000 vanphuc15092002/orderfood:latest"
                    
                    

                }
            }
        }
        
    }
    

}
