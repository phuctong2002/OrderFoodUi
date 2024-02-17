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
        stage('pull image') {
            steps {
                sshagent( credentials:['ssh-credential-id']){
                    bat "ssh phuctong@192.168.200.136 'docker pull vanphuc15092002/orderfood:latest'"
                }
            }
        }
        
    }
    

}
