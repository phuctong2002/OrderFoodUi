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
                    withDockerRegistry([ credentialsId: "473608fc-d033-4a66-a637-c9db9e39e3ae", url: "" ]) {
                        // Đẩy image lên Docker Hub
                        docker.image('orderfoodui').push('latest')
                    }
                }
            }
        }
        
    }
    

}
