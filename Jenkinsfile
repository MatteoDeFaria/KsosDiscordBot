pipeline {
    agent any

    environment { // getting stored credentials
       DOCKERHUB_CREDENTIALS = credentials('docker-hub-credentials')
       IMAGE_NAME = 'tekmatteo/ksos-bot'
   }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${IMAGE_NAME}:${env.BUILD_NUMBER}")
                }
            }
        }

        stage('Deploy Docker Image to DockerHub') {
            steps {
                script {
                    dockerImage.push()
                    dockerImage.push('latest')
                    }
                }
            }
        }

        // stage('Build') {
        //     steps {
        //         echo 'Building..'
        //         sh 'docker build . -t ksos-bot'
        //     }
        // }

        // stage('Test') {
        //     steps {
        //         echo 'Testing..'
        //     }
        // }

        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying....'
        //     }
        // }

        // stage('Run') {
        //     steps {
        //         echo 'Runing....'
        //         sh 'docker run -d ksos-bot'
        //     }
        // }
        //}
}